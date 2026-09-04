import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});


export const metadata: Metadata = {
    title: {
        default: 'Leon Pösken | KI-Systembau',
        template: '%s | Leon Pösken',
    },
    description: 'Große Firmen haben Abteilungen dafür. Kleine haben mich. KI-Systeme und Automatisierung, die kleinen Betrieben dieselbe Qualität und dieselbe Freiheit geben wie großen.',
    keywords: ['KI-Systembau', 'Prompt Engineering', 'Context Engineering', 'Harness Engineering', 'Skill Engineering', 'Leon Pösken'],
    authors: [{ name: 'Leon Pösken' }],
    creator: 'Leon Pösken',
    // Basis-Adresse: auf Vercel liefert VERCEL_PROJECT_PRODUCTION_URL die Produktionsdomain.
    metadataBase: new URL(SITE_URL),
    // Die Seite ist ueber mehrere Vercel-Adressen erreichbar (Projekt- und
    // Deployment-URLs). Ohne canonical verteilen Suchmaschinen ihre Signale auf
    // Dubletten -- und beim Umzug auf eine eigene Domain waere das erst recht ein Problem.
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: SITE_URL,
        title: 'Leon Pösken | KI-Systembau',
        description: 'Große Firmen haben Abteilungen dafür. Kleine haben mich. KI-Systeme, die halten — von der Methodik bis zum laufenden Prototyp.',
        siteName: 'Leon Pösken',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Leon Pösken | KI-Systembau',
        description: 'Große Firmen haben Abteilungen dafür. Kleine haben mich.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang="de" data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                {/* Strukturierte Daten: sagen Suchmaschinen, WER hier was WO anbietet.
                    Ohne das ist die Seite fuer eine Suche wie "Automatisierung Leipzig"
                    nur Text; damit wird sie als Person mit Ort und Angebot lesbar. */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ProfessionalService',
                            name: 'Leon Pösken',
                            description:
                                'Automatisierung und KI-Systeme für kleine Betriebe und Selbstständige: Abläufe verbinden, Anfragen beantworten, Belege und Rechnungen ohne Abtippen.',
                            url: SITE_URL,
                            image: `${SITE_URL}/og.png`,
                            areaServed: { '@type': 'Country', name: 'Deutschland' },
                            address: { '@type': 'PostalAddress', addressLocality: 'Leipzig', addressCountry: 'DE' },
                            founder: {
                                '@type': 'Person',
                                name: 'Leon Pösken',
                                jobTitle: 'KI-Systembau',
                                sameAs: ['https://www.linkedin.com/in/leonpoesken/'],
                                knowsAbout: [
                                    'Prompt Engineering',
                                    'Context Engineering',
                                    'Harness Engineering',
                                    'Skill Engineering',
                                    'Prozessautomatisierung',
                                ],
                            },
                            knowsLanguage: ['de', 'en'],
                        }),
                    }}
                />
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
