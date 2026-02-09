import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'アクセス | 和風中華 佐分利',
    description: '和風中華佐分利へのアクセス、駐車場のご案内。',
};

export default function AccessPage() {
    const mapUrl = "https://maps.app.goo.gl/Ji47U8bjkoWaSpNc7?g_st=ic";
    // Encode address for embed
    const address = "和風中華 佐分利";
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203.7!2d135.545!3d35.289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000494955555555%3A0x1234567890abcdef!2z5ZKM6aKo5Lit6I-vIOS9k-li5Yip!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp`;
    // Note: Using a generic embed for "Saburi" might need valid CID. 
    // Since I can't look up CID dynamically easily without API key, I'll use q=Address.
    const addressEncoded = encodeURIComponent("〒601-0721 京都府南丹市美山町上平屋盆徳5−2");
    const embedSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${addressEncoded}`;
    // Wait, standard iframe embed doesn't need API key if using "pb" parameter from "Share -> Embed", but I don't have it.
    // I will use the "q" parameter in the standard output format which is:
    // https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed
    const simpleEmbed = `https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="container section">
            <h2 className="text-center" style={{ marginBottom: '4rem' }}>アクセス</h2>

            <div className={styles.accessDetails}>
                <div>
                    <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>店舗情報</h3>
                    <table className={styles.infoTable}>
                        <tbody>
                            <tr>
                                <th>店名</th>
                                <td>和風中華 佐分利（さぶり）</td>
                            </tr>
                            <tr>
                                <th>住所</th>
                                <td>〒601-0721<br />京都府南丹市美山町上平屋盆徳5−2</td>
                            </tr>
                            <tr>
                                <th>電話</th>
                                <td><a href="tel:07017993780">070-1799-3780</a></td>
                            </tr>
                            <tr>
                                <th>営業時間</th>
                                <td>11:00〜22:00（L.O. 21:00）</td>
                            </tr>
                            <tr>
                                <th>定休日</th>
                                <td>火曜</td>
                            </tr>
                            <tr>
                                <th>駐車場</th>
                                <td>あり（4台）</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn">
                            Googleマップで見る
                        </a>
                    </div>
                </div>

                <div>
                    <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>マップ</h3>
                    <div className={styles.mapContainer}>
                        <iframe
                            src={simpleEmbed}
                            className={styles.mapFrame}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.parkingSection}>
                <h3 className={styles.parkingTitle}>駐車場のご案内</h3>
                <p>お店は見つかりますが、駐車場が分かりにくいので、下の図をご確認ください。</p>
                <p><strong>駐車場：4台</strong></p>
                <div className={styles.parkingMapPlaceholder}>
                    {/* Real image should be here: access-map.png */}
                    [駐車場・アクセス図] access-map.png
                </div>
            </div>
        </div>
    );
}
