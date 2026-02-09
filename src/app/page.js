import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const recommendedItems = [
    {
      id: 1,
      name: "和風中華ランチコース",
      price: "¥3,500 ~",
      desc: "海鮮またはお肉から選べるメインディッシュ。季節の食材をふんだんに使用した贅沢なランチです。",
      image: "/images/lunch-course.jpg" // placeholder
    },
    {
      id: 2,
      name: "麺流 麺ランチ",
      price: "¥2,000",
      desc: "季節の麺料理に、点心・春巻き・デザートがついた人気のセット。",
      image: "/images/noodle-lunch.jpg"
    },
    {
      id: 3,
      name: "佐分利コース（ディナー）",
      price: "¥6,000",
      desc: "前菜からデザートまで、佐分利の味を堪能できるフルコース。特別な日の彩りに。",
      image: "/images/dinner-course.jpg"
    },
    {
      id: 4,
      name: "Takeout限定オードブル",
      price: "¥6,000 ~",
      desc: "ご家庭でも本格中華を。4〜5人前より承ります。",
      image: "/images/takeout.jpg"
    }
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: 'url(/images/hero_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>美山の四季を、<br />中華で味わう。</h2>
          <p className={styles.heroSubtitle}>和風中華 佐分利</p>
          <Link href="/menu" className="btn">
            お品書きを見る
          </Link>
        </div>
      </section>

      {/* Concept Section */}
      <section className={`section ${styles.concept}`}>
        <div className="container">
          <h3 className={styles.sectionTitle}>ご挨拶</h3>
          <p className={styles.conceptText}>
            京都・美山の豊かな自然に囲まれた「和風中華 佐分利」。<br />
            地元の新鮮な食材を使用し、和のエッセンスを取り入れた<br />
            優しい味わいの中華料理をご提供しております。<br /><br />
            ゆったりとした特別なお時間をお過ごしください。
          </p>
        </div>
      </section>

      {/* Recommended Section */}
      <section className={`section ${styles.recommended}`}>
        <div className="container">
          <h3 className={styles.sectionTitle}>おすすめ料理</h3>
          <div className={styles.menuGrid}>
            {recommendedItems.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <div className={styles.menuImage} /* placeholder style handled in CSS */ />
                <div className={styles.menuInfo}>
                  <h4 className={styles.menuName}>{item.name}</h4>
                  <p className={styles.menuPrice}>{item.price}</p>
                  <p className={styles.menuDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link href="/menu" className="btn btn-outline">
              メニュー一覧へ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
