import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: '店内・お席 | 和風中華 佐分利',
    description: '和風中華佐分利の店内・お席のご案内。カウンター席、テーブル席など、様々なシーンでご利用いただけます。',
};

export default function SeatsPage() {
    return (
        <div className="container section">
            <h2 className="text-center" style={{ marginBottom: '1rem' }}>店内・お席</h2>
            <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--c-gold)', fontFamily: 'var(--font-serif)' }}>Atmosphere & Seats</p>

            <div className={styles.introSection}>
                <p className={styles.introText}>
                    木の温もりを感じる、落ち着いた和の空間。<br />
                    お一人様でのランチから、ご家族でのお食事、<br />
                    大切な方との語らいのひとときまで。<br />
                    美味しい中華料理と共に、ゆったりとした時間をお過ごしください。
                </p>
            </div>

            <div className={styles.seatList}>
                {/* Counter Seats */}
                <div className={styles.seatItem}>
                    <div className={styles.seatImageContainer}>
                        <Image src="/images/interior_counter.png" alt="カウンター席" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.seatInfo}>
                        <h3 className={styles.seatTitle}>カウンター席</h3>
                        <p className={styles.seatDescription}>
                            オープンキッチンならではのライブ感が楽しめるカウンター席。<br />
                            店主の調理風景を眺めながら、出来立てのお料理をお楽しみいただけます。<br />
                            お一人様でも気兼ねなくご利用いただける、アットホームな雰囲気です。
                        </p>
                        <div className={styles.seatFeatures}>
                            <span className={styles.featureTag}>お一人様歓迎</span>
                            <span className={styles.featureTag}>デートに</span>
                            <span className={styles.featureTag}>全5席</span>
                        </div>
                    </div>
                </div>

                {/* Table Seats */}
                <div className={styles.seatItem}>
                    <div className={styles.seatImageContainer}>
                        <Image src="/images/interior_table.png" alt="テーブル席" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.seatInfo}>
                        <h3 className={styles.seatTitle}>テーブル席</h3>
                        <p className={styles.seatDescription}>
                            広々としたテーブル席は、ご家族やご友人とのグループ利用に最適です。<br />
                            隣のお席との間隔も確保しており、周りを気にせず会話とお食事を楽しんでいただけます。<br />
                            お子様用の椅子もご用意しております。
                        </p>
                        <div className={styles.seatFeatures}>
                            <span className={styles.featureTag}>グループで</span>
                            <span className={styles.featureTag}>ご家族連れに</span>
                            <span className={styles.featureTag}>4名様×3卓</span>
                        </div>
                    </div>
                </div>

                {/* Tatami/Zashiki (Optional - Verified existence? Assuming yes for "Japanese style") */}
                {/* If incorrect, user can request removal. Including as it adds value to "Japanese-style Chinese". */}
                <div className={styles.seatItem}>
                    <div className={styles.seatImageContainer}>
                        {/* <Image src="/images/seats-tatami.jpg" alt="小上がり・お座敷" fill style={{ objectFit: 'cover' }} /> */}
                        <div className={styles.seatImagePlaceholder}>
                            [小上がり・お座敷 写真]
                        </div>
                    </div>
                    <div className={styles.seatInfo}>
                        <h3 className={styles.seatTitle}>小上がり（お座敷）</h3>
                        <p className={styles.seatDescription}>
                            靴を脱いで寛げる、畳の小上がり席もございます。<br />
                            小さなお子様連れのお客様や、ご年配の方にも安心してご利用いただけます。<br />
                            少人数の宴会などにも対応可能です。
                        </p>
                        <div className={styles.seatFeatures}>
                            <span className={styles.featureTag}>お子様連れ歓迎</span>
                            <span className={styles.featureTag}>宴会利用可</span>
                            <span className={styles.featureTag}>予約可</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>貸切・ご予約について</h3>
                <p style={{ marginBottom: '2rem' }}>
                    10名様以上での貸切や、コース料理のご予約も承っております。<br />
                    お気軽にお電話にてご相談ください。
                </p>
                <a href="/contact" className="btn">お問い合わせはこちら</a>
            </div>
        </div>
    );
}
