"use client";
import { useState, useEffect } from "react";
import styles from "./CategoryNav.module.css";
import { CATEGORIES } from "@/data/menuItems";

export default function CategoryNav({ activeCategory, onSelectCategory }) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.navWrapper} ${isSticky ? styles.sticky : ""}`}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {CATEGORIES.map((cat) => (
                        <li key={cat.id} className={styles.navItem}>
                            <button
                                className={`${styles.navButton} ${activeCategory === cat.name ? styles.active : ""
                                    }`}
                                onClick={() => onSelectCategory(cat.name)}
                            >
                                {cat.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
