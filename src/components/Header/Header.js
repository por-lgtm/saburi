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
                    <Link href="/" onClick={closeMenu}>
                        <h1>和風中華 佐分利</h1>
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

                <div className={styles.cta}>
                    <a href="tel:07017993780" className="btn">予約・お問い合わせ</a>
                </div>

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
                            <li><Link href="/" onClick={closeMenu}>ホーム</Link></li>
                            <li><Link href="/menu" onClick={closeMenu}>メニュー</Link></li>
                            <li><Link href="/seats" onClick={closeMenu}>店内・お席</Link></li>
                            <li><Link href="/access" onClick={closeMenu}>アクセス</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.mobileCta}>
                        <a href="tel:07017993780" className="btn">070-1799-3780</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
