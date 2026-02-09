import styles from './page.module.css';

export const metadata = {
    title: 'お品書き | 和風中華 佐分利',
    description: '和風中華佐分利のメニューのご案内。ランチ、ディナーコース、テイクアウトなど。',
};

export default function MenuPage() {
    return (
        <div className="container section">
            <h2 className="text-center" style={{ marginBottom: '4rem' }}>お品書き</h2>

            {/* Lunch Section */}
            <section className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>ランチメニュー</h3>
                <div className={styles.menuList}>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>和風中華ランチコース（海鮮）</div>
                            <div className={styles.itemDesc}>海鮮メインのコース</div>
                        </div>
                        <div className={styles.itemPrice}>¥3,500</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>和風中華ランチコース（肉）</div>
                            <div className={styles.itemDesc}>お肉メインのコース</div>
                        </div>
                        <div className={styles.itemPrice}>¥3,800</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>和風中華御前</div>
                            <div className={styles.itemDesc}>日替わり九種盛り（ご飯・デザート付）</div>
                        </div>
                        <div className={styles.itemPrice}>¥2,800</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>麺流 麺ランチ</div>
                            <div className={styles.itemDesc}>季節の麺／点心／春巻き／デザート</div>
                        </div>
                        <div className={styles.itemPrice}>¥2,000</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>ランチのラーメン各種セット</div>
                            <div className={styles.itemDesc}>ミニ炒飯付き</div>
                        </div>
                        <div className={styles.itemPrice}>¥2,000</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>ラーメン単品</div>
                        </div>
                        <div className={styles.itemPrice}>¥1,500</div>
                    </div>
                </div>
            </section>

            {/* Dinner Section */}
            <section className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>ディナーコース</h3>
                <p style={{ marginBottom: '2rem' }}>※コースは2名様より承ります。</p>
                <div className={styles.menuList}>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>佐分利コース</div>
                            <div className={styles.itemDesc}>前菜・スープ・点心・揚げ物・海鮮・肉・麺飯・デザート・中国茶</div>
                        </div>
                        <div className={styles.itemPrice}>¥6,000</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>北京ダックコース</div>
                            <div className={styles.itemDesc}>前日までの要連絡</div>
                        </div>
                        <div className={styles.itemPrice}>¥6,000</div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <p>※アラカルトメニューも多数ご用意しております。</p>
                </div>
            </section>

            {/* Takeout Section */}
            <section className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>テイクアウト</h3>
                <div className={styles.menuList}>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>Takeout限定オードブル（4〜5人前）</div>
                            <div className={styles.itemDesc}>前日までのご予約推奨</div>
                        </div>
                        <div className={styles.itemPrice}>¥6,000</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>Takeout限定オードブル（6〜7人前）</div>
                            <div className={styles.itemDesc}>前日までのご予約推奨</div>
                        </div>
                        <div className={styles.itemPrice}>¥8,000</div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.itemName}>佐分利弁当</div>
                            <div className={styles.itemDesc}>内容は日替わりの場合あり</div>
                        </div>
                        <div className={styles.itemPrice}>¥3,000</div>
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className={styles.note}>
                <h4>ご案内</h4>
                <ul>
                    <li>仕入れ状況により内容・価格が変更になる場合があります。</li>
                    <li>コース／テイクアウトは前日までのご連絡をおすすめします。</li>
                    <li>アレルギーをお持ちの方はご注文時にお知らせください。</li>
                </ul>
            </section>
        </div>
    );
}
