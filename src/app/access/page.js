import Link from 'next/link';
import styles from './page.module.css';
import ParkingMap from '@/components/Access/ParkingMap';

export const metadata = {
    title: 'アクセス | 和風中華 佐分利',
    description: '和風中華佐分利へのアクセス、駐車場のご案内。',
};

export default function AccessPage() {
    const mapUrl = "https://maps.app.goo.gl/Ji47U8bjkoWaSpNc7?g_st=ic";
    const addressEncoded = encodeURIComponent("〒601-0721 京都府南丹市美山町上平屋盆徳5−2");
    // Standard Google Maps Embed with q parameter
    const embedSrc = `https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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
                            src={embedSrc}
                            className={styles.mapFrame}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.parkingSection} style={{ marginTop: '4rem' }}>
                <h3 className={styles.parkingTitle} style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>駐車場のご案内</h3>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <ParkingMap />
                </div>
            </div>
        </div>
    );
}
