export const metadata = {
    title: 'よくある質問 | 和風中華 佐分利',
    description: '和風中華佐分利へのよくあるご質問（予約、駐車場、お支払い方法など）。',
};

export default function FAQPage() {
    const faqs = [
        {
            q: "予約は必要ですか？",
            a: "基本的にはご予約なしでもご利用いただけます。ただし、コース料理やテイクアウト、大人数でのご利用の際は、前日までにご連絡いただくことをおすすめしております。"
        },
        {
            q: "駐車場はありますか？",
            a: "はい、店舗横に4台分の駐車スペースがございます。"
        },
        {
            q: "支払い方法は何がありますか？",
            a: "現金のほか、各種クレジットカード・電子マネーがご利用いただけます（詳細はお問い合わせください）。"
        },
        {
            q: "子供連れやベビーカーでの入店は可能ですか？",
            a: "はい、可能です。お席の配慮をいたしますので、ご来店前にお電話いただけるとスムーズです。"
        },
        {
            q: "アレルギー対応はしていますか？",
            a: "可能な限り対応させていただきます。ご注文時、またはご予約時にスタッフまでご相談ください。"
        },
        {
            q: "店内の写真撮影は可能ですか？",
            a: "はい、他のお客様のご迷惑にならない範囲でご自由に撮影いただけます。"
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="container section">
            <h2 className="text-center" style={{ marginBottom: '4rem' }}>よくある質問</h2>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: '#bf2e2e', marginBottom: '0.5rem' }}>Q. {faq.q}</h3>
                        <p style={{ lineHeight: '1.6' }}>A. {faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
