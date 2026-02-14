import csv
import json

csv_path = r"src/data/menu.csv"
js_path = r"src/data/menuItems.js"

menu_items = []
# category_id mapping from CSV to JS IDs
category_map = {
    "CAT-01": "前菜",
    "CAT-02": "メイン",
    "CAT-03": "デザート",
    "CAT-04": "ドリンク", # Currently no Drinks section in JS, might need to add or map to something
    "CAT-99": "期間限定", # Mapped to seasonal or similar?
    "コース": "コース",
    "ランチ": "ランチ",
    "テイクアウト": "テイクアウト"
}

# Reverse mapping for category.csv logic if needed, but here we just need to produce valid JS
# The CSV has `category_id` (CAT-XX) OR direct names like 'コース' in category_id column?
# Looking at CSV: 
# Row 2: name_ja="...", category_id="コース"
# Row 6: name_ja="...", category_id="前菜"
# So category_id column actually contains the Japanese name sometimes?
# Let's inspect the CSV content again.
# Line 2: ,和風中華ランチコース...,,コース,3500...
# It seems column index 3 (0-based) is category_id, getting value "コース".
# Line 6: ,前菜五種盛り,,前菜,3000...
# It seems column "category_id" holds the Japanese category name directly for some, but maybe mixed?
# Wait, the header says "category_id".
# Let's trust the "category_id" column value.

try:
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            name = row.get("name_ja", "").strip()
            if not name:
                continue

            category_raw = row.get("category_id", "").strip()
            # Map category if it looks like an ID, otherwise use as is
            category = category_map.get(category_raw, category_raw)
            
            # Formatting price
            price_raw = row.get("price_tax_included", "").strip()
            if price_raw and price_raw.isdigit():
                price = f"{int(price_raw):,}円"
            else:
                price = price_raw

            description = row.get("description_ja", "").strip()
            
            # Image handling - CSV has image_url, but might be empty.
            # We can try to match existing images or keep null.
            image = row.get("image_url", "").strip()
            if not image:
                image = None

            item = {
                "id": f"item-{i+1}",
                "name": name,
                "category": category,
                "description": description,
                "price": price,
                "image": image
            }
            menu_items.append(item)

    # Generate JS content
    js_content = "export const menuItems = " + json.dumps(menu_items, ensure_ascii=False, indent=2) + ";\n\n"
    
    # Generate Categories const
    js_content += """export const CATEGORIES = [
  { id: "all", name: "すべて" },
  { id: "course", name: "コース", label: "コース" },
  { id: "lunch", name: "ランチ", label: "ランチ" },
  { id: "appetizer", name: "前菜", label: "前菜" },
  { id: "main", name: "メイン", label: "メイン" },
  { id: "dessert", name: "デザート", label: "デザート" },
  { id: "takeout", name: "テイクアウト", label: "テイクアウト" }
];
"""

    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully updated menuItems.js with {len(menu_items)} items")

except Exception as e:
    print(f"Error converting CSV: {e}")
