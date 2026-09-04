import type { MetadataRoute } from 'next';

// Ohne Manifest zeigt "Zum Startbildschirm hinzufuegen" einen Screenshot statt eines
// Symbols und hat keinen sauberen Namen.
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Leon Pösken — KI-Systembau',
        short_name: 'Leon Pösken',
        description:
            'Automatisierung und KI-Systeme für kleine Betriebe und Selbstständige.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        lang: 'de',
        icons: [
            { src: '/icon', sizes: '192x192', type: 'image/png' },
            { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
        ],
    };
}
