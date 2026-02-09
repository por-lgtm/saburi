export const metadata = {
    title: 'お問い合わせ | 和風中華 佐分利',
};

export default function ContactPage() {
    return (
        <div className="container section">
            <h2 className="text-center" style={{ marginBottom: '4rem' }}>お問い合わせ</h2>
            <div style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '2rem' }}>ご予約・お問い合わせはお電話にて承っております。</p>
                <a href="tel:07017993780" className="btn" style={{ fontSize: '1.5rem', padding: '1rem 3rem' }}>
                    070-1799-3780
                </a>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                    受付時間：11:00〜21:00（火曜定休）
                </p>
            </div>
        </div>
    );
}
