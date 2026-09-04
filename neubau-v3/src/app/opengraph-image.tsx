import { ImageResponse } from 'next/og';

// Vorschaubild für geteilte Links (LinkedIn, Messenger, Suchergebnisse).
export const runtime = 'nodejs';
export const alt = 'Leon Pösken — IT aus Überzeugung.';
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
                {/* Ein festes Bild braucht EINE Aussage; die drei wechselnden
                    Überschriften der Seite lassen sich hier nicht abbilden. Genommen
                    ist der Satz, der die Position am klarsten sagt. */}
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, fontWeight: 900, lineHeight: 1.04 }}>
                    <span>Große Firmen haben</span>
                    <span>Abteilungen dafür.</span>
                    <span>Kleine haben mich.</span>
                </div>
                <div style={{ display: 'flex', fontSize: 30, color: '#d4d4d8' }}>
                    Muster erkennen · Systeme bauen · Prototypen zum Durchklicken
                </div>
            </div>
        ),
        size
    );
}
