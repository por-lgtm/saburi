from PIL import Image
import os

def optimize_image(input_path, output_path, max_width=1920, quality=80):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g. for PNG to JPG)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {input_path} to {max_width}x{new_height}")

            # Save optimized version
            img.save(output_path, "JPEG", quality=quality, optimize=True)
            print(f"Saved optimized image to {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Optimize specific files
base_dir = r"c:\Users\minna\OneDrive\デスクトップ\AI_Projects\中華料理屋佐分利HP\public\images"

# 1. Hero Image (Currently hero_interior_user.png is 8.6MB!)
optimize_image(
    os.path.join(base_dir, "hero_interior_user.png"),
    os.path.join(base_dir, "hero_interior_user_opt.jpg"),
    max_width=1920,
    quality=80
)

# 2. Owner Image (Currently owner.jpg is 2.8MB!)
optimize_image(
    os.path.join(base_dir, "owner.jpg"),
    os.path.join(base_dir, "owner_opt.jpg"),
    max_width=800,
    quality=80
)

# 3. Optimize sticky menu background/other large assets if needed
