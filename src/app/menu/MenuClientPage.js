'use client';

import { useState } from "react";
import styles from "./page.module.css";
import { menuItems, CATEGORIES } from "@/data/menuItems";
import CategoryNav from "@/components/Menu/CategoryNav";
import MenuSection from "@/components/Menu/MenuSection";
import Image from "next/image";

export default function MenuClientPage() {
    const [activeCategory, setActiveCategory] = useState("すべて");

    const filteredCategories = activeCategory === "すべて"
        ? CATEGORIES.filter(c => c.id !== "all")
        : CATEGORIES.filter(c => c.name === activeCategory);

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <Image
                    src="/images/hero_bg.png"
                    alt="お品書き"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay}></div>
                <h2 className={styles.title}>お品書き</h2>
            </div>

            <CategoryNav
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className={`container ${styles.menuContent}`}>
                {filteredCategories.map((cat) => {
                    const items = menuItems.filter((item) => item.category === cat.name);
                    return <MenuSection
                        key={cat.id}
                        title={cat.label}
                        items={items}
                        isSingleColumn={activeCategory === "すべて"}
                    />
                })}
            </div>
        </div>
    );
}
