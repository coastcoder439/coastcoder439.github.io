import { ImageResponse } from 'next/og';

// Rasterversion des Favicons (180 px, fuer den Startbildschirm auf iOS). Das SVG allein deckt aktuelle Browser ab, aber
// nicht aeltere Safari-Versionen und nicht das Lesezeichen-Symbol. Aus Code erzeugt,
// damit keine Binaerdatei ins Repo muss -- gleiches Muster wie opengraph-image.tsx.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#0a0a0a',
                    color: '#ffffff',
                    fontSize: 86,
                    fontWeight: 900,
                    letterSpacing: -6,
                }}
            >
                LP
            </div>
        ),
        { ...size },
    );
}
