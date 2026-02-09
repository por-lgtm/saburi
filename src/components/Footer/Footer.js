import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.info}>
                    <h3>和風中華 佐分利</h3>
                    <p>〒601-0721 京都府南丹市美山町上平屋盆徳5−2</p>
                    <p>電話: <a href="tel:07017993780">070-1799-3780</a></p>
                    <p>営業時間: 11:00〜22:00 (L.O. 21:00)</p>
                    <p>定休日: 火曜</p>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li><a href="/access">アクセス</a></li>
                        <li><a href="/contact">お問い合わせ</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Saburi. All Rights Reserved.
            </div>
        </footer>
    );
}
