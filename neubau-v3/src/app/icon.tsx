import { ImageResponse } from 'next/og';

// Rasterversion des Favicons (192 px). Das SVG allein deckt aktuelle Browser ab, aber
// nicht aeltere Safari-Versionen und nicht das Lesezeichen-Symbol. Aus Code erzeugt,
// damit keine Binaerdatei ins Repo muss -- gleiches Muster wie opengraph-image.tsx.
export const size = { width: 192, height: 192 };
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
                    fontSize: 92,
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
