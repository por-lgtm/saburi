'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Link href="/" onClick={closeMenu} className={styles.logoLink}>
                        <span className={styles.logoSub}>和風中華</span>
                        <span className={styles.logoMain}>佐分利</span>
                        <div className={styles.logoSeal}>
                            <span>さ</span>
                            <span>ぶ</span>
                            <span>り</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/">ホーム</Link></li>
                        <li><Link href="/menu">メニュー</Link></li>
                        <li><Link href="/seats">店内・お席</Link></li>
                        <li><Link href="/access">アクセス</Link></li>
                    </ul>
                </nav>



                {/* Mobile Menu Toggle (Hamburger) */}
                <button
                    className={`${styles.mobileToggle} ${isMenuOpen ? styles.toggleActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="メニューを開く"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <nav>
                        <ul className={styles.mobileNavList}>
                            {[
                                { href: "/", label: "ホーム", en: "HOME" },
                                { href: "/menu", label: "メニュー", en: "MENU" },
                                { href: "/seats", label: "店内・お席", en: "SEATS" },
                                { href: "/access", label: "アクセス", en: "ACCESS" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} onClick={closeMenu}>
                                        <span className={styles.jaLabel}>{link.label}</span>
                                        <span className={styles.enLabel}>{link.en}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.mobileCta}>
                        <a href="tel:07017993780" className="btn">予約・お問い合わせ</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
