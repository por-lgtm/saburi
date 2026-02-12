"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./CategoryNav.module.css";
import { CATEGORIES } from "@/data/menuItems";

export default function CategoryNav({ activeCategory, onSelectCategory }) {
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);
    const [placeholderHeight, setPlaceholderHeight] = useState(0);

    useEffect(() => {
        const navElement = navRef.current;
        if (!navElement) return;

        // Get the initial offset position of the nav
        const initialOffset = navElement.offsetTop;
        const HEADER_HEIGHT = 80; // Fixed header height

        const handleScroll = () => {
            // Check if we've scrolled past the nav's original position (minus header)
            if (window.scrollY >= initialOffset - HEADER_HEIGHT) {
                setIsSticky(true);
                setPlaceholderHeight(navElement.offsetHeight);
            } else {
                setIsSticky(false);
                setPlaceholderHeight(0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        /* Placeholder to prevent layout shift when nav becomes fixed */
        <div style={{ height: isSticky ? placeholderHeight : 'auto' }} ref={navRef}>
            <div className={`${styles.navContainer} ${isSticky ? styles.sticky : ''}`}>
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
        </div>
    );
}
