export default function ParkingMap() {
    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee' }}>
                {/* Route 162 (Diagonal Road) - Bottom Left to Top Right */}
                <path d="M400 400 L550 0 L650 0 L500 400 Z" fill="#555" />
                <path d="M380 400 L530 0" stroke="white" strokeWidth="2" strokeDasharray="10,5" />
                <text x="440" y="350" fill="white" fontSize="16" transform="rotate(-70 440,350)">国道162号線</text>

                {/* Parking (Blue) */}
                <g transform="rotate(-20 280 220)">
                    <rect x="280" y="150" width="80" height="180"
                        fill="rgba(0, 100, 255, 0.1)"
                        stroke="blue"
                        strokeWidth="3"
                    />
                    <text x="320" y="240" textAnchor="middle" fill="blue" fontSize="16" fontWeight="bold">駐車場</text>
                    <text x="320" y="260" textAnchor="middle" fill="blue" fontSize="12">（4台）</text>
                </g>

                {/* Toilet (Green) */}
                <g transform="rotate(-20 220 120)">
                    <rect x="220" y="100" width="40" height="40"
                        fill="rgba(0, 255, 0, 0.1)"
                        stroke="green"
                        strokeWidth="3"
                    />
                    <text x="240" y="90" textAnchor="middle" fill="green" fontSize="12" fontWeight="bold">トイレ</text>
                </g>

                {/* Restaurant (Red) */}
                <g transform="rotate(-20 150 180)">
                    <rect x="120" y="100" width="120" height="100"
                        fill="rgba(255, 0, 0, 0.1)"
                        stroke="red"
                        strokeWidth="3"
                    />
                    <text x="180" y="150" textAnchor="middle" fill="red" fontSize="18" fontWeight="bold">店舗</text>
                    <text x="180" y="170" textAnchor="middle" fill="red" fontSize="12">和風中華 佐分利</text>
                </g>

                {/* Entrance Arrow */}
                <path d="M380 280 L340 250" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                    </marker>
                </defs>

            </svg>
            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                ※国道162号線沿い、青い枠の部分が駐車場です。
            </p>
        </div>
    );
}
