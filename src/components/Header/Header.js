import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <h1>和風中華 佐分利</h1>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/">ホーム</Link></li>
                        <li><Link href="/menu">メニュー</Link></li>
                        <li><Link href="/seats">店内・お席</Link></li>
                        <li><Link href="/access">アクセス</Link></li>
                    </ul>
                </nav>
                <div className={styles.cta}>
                    <a href="tel:07017993780" className="btn">070-1799-3780</a>
                </div>
            </div>
        </header>
    );
}
