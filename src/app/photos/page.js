import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: '写真 | 和風中華 佐分利',
    description: '和風中華佐分利の料理写真、店内の様子などをご紹介します。',
};

export default function PhotosPage() {
    return (
        <div className="container section">
            <h2 className="text-center" style={{ marginBottom: '1rem' }}>写真</h2>
            <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--c-gold)', fontFamily: 'var(--font-serif)' }}>Gallery</p>

            <div style={{ marginBottom: '4rem' }}>
                <h3 className="text-center" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>お料理</h3>
                <div className={styles.galleryGrid}>
                    <div className={styles.photoItem}>
                        <Image src="/images/menu_ramen.png" alt="醤油ラーメン" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.caption} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.8)', padding: '0.5rem', textAlign: 'center' }}>特製醤油ラーメン</div>
                    </div>
                    <div className={styles.photoItem}>
                        <Image src="/images/menu_gyoza.png" alt="焼き餃子" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.caption} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.8)', padding: '0.5rem', textAlign: 'center' }}>手作り焼き餃子</div>
                    </div>
                    {/* Placeholder for Fried Rice if I had it, re-using Ramen for demo grid fullness or just 2 items for now? 
                        User wants "Resolved", so repeat or just show 2 quality ones is better than placeholders. 
                        I'll use the Hero image as a "Feast" shot too. 
                     */}
                    <div className={styles.photoItem}>
                        <Image src="/images/hero_bg.png" alt="中華料理集合" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.caption} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.8)', padding: '0.5rem', textAlign: 'center' }}>宴会コース料理（例）</div>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <h3 className="text-center" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>店内・外観</h3>
                <div className={styles.galleryGrid}>
                    <div className={styles.photoItem}>
                        <Image src="/images/interior_counter.png" alt="カウンター席" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.caption} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.8)', padding: '0.5rem', textAlign: 'center' }}>カウンター席</div>
                    </div>
                    <div className={styles.photoItem}>
                        <Image src="/images/interior_table.png" alt="テーブル席" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.caption} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.8)', padding: '0.5rem', textAlign: 'center' }}>テーブル席（庭園眺望）</div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p>Instagramでも最新の写真を公開中です。</p>
                <a href="https://www.instagram.com/saburi_wafu_chuka/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Instagramを見る
                </a>
            </div>
        </div>
    );
}
