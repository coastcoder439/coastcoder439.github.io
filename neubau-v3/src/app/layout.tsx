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
    description: 'Technik mit Auftrag. Vier Disziplinen — Prompt, Context, Harness, Skill Engineering — und was daraus entsteht: Websites, Apps, Funnels, Automations.',
    keywords: ['KI-Systembau', 'Prompt Engineering', 'Context Engineering', 'Harness Engineering', 'Skill Engineering', 'Leon Pösken'],
    authors: [{ name: 'Leon Pösken' }],
    creator: 'Leon Pösken',
    // Basis-Adresse: auf Vercel liefert VERCEL_PROJECT_PRODUCTION_URL die Produktionsdomain.
    metadataBase: new URL(SITE_URL),
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        url: SITE_URL,
        title: 'Leon Pösken | KI-Systembau',
        description: 'Technik mit Auftrag. KI-Systeme, die halten — von der Methodik bis zum laufenden Prototyp.',
        siteName: 'Leon Pösken',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Leon Pösken | KI-Systembau',
        description: 'Technik mit Auftrag. KI-Systeme, die halten.',
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
