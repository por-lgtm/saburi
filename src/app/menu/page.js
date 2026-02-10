"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { menuItems, CATEGORIES } from "@/data/menuItems";
import CategoryNav from "@/components/Menu/CategoryNav";
import MenuSection from "@/components/Menu/MenuSection";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("すべて");

    const filteredCategories =
        activeCategory === "すべて"
            ? CATEGORIES.filter((c) => c.name !== "すべて")
            : CATEGORIES.filter((c) => c.name === activeCategory);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>お品書き</h2>
            </div>

            <CategoryNav
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className={`container ${styles.menuContent}`}>
                {filteredCategories.map((cat) => {
                    const items = menuItems.filter((item) => item.category === cat.name);
                    return <MenuSection key={cat.id} title={cat.name} items={items} />;
                })}
            </div>
        </div>
    );
}
