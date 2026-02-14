// This IS a Server Component because it doesn't have 'use client'
import MenuClientPage from './MenuClientPage';

// Force dynamic rendering to ensure fresh data on every request
// (Useful if data was fetched, but here it forces a non-static route)
export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'お品書き | 和風中華 佐分利',
    description: '和風中華佐分利のメニュー一覧。ランチ、ディナー、コース料理など。',
};

export default function MenuPage() {
    return <MenuClientPage />;
}
