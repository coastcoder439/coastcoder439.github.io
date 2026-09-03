import { ImageResponse } from 'next/og';

// Vorschaubild für geteilte Links (LinkedIn, Messenger, Suchergebnisse).
export const runtime = 'nodejs';
export const alt = 'Leon Pösken — Technik mit Auftrag.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#0a0a0a',
                    color: '#ffffff',
                    padding: '72px 80px',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', fontSize: 26, letterSpacing: 8, color: '#a1a1aa' }}>
                    LEON PÖSKEN · LEIPZIG
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: 116, fontWeight: 900, lineHeight: 1 }}>
                    <span>Technik</span>
                    <span>mit Auftrag.</span>
                </div>
                <div style={{ display: 'flex', fontSize: 30, color: '#d4d4d8' }}>
                    Muster erkennen · Systeme bauen · Prototypen zum Durchklicken
                </div>
            </div>
        ),
        size
    );
}
