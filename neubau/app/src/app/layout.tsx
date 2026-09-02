import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { getLocale, getMessages } from 'next-intl/server';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { PreloadReady } from '@/components/layout/PreloadReady';
import { I18nProvider } from '@/providers/I18nProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import '@/styles/globals.css';

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

export const metadata: Metadata = {
  title: {
    default: 'Leon Pösken | Technik mit Auftrag.',
    template: '%s | Leon Pösken',
  },
  description:
    'Leon Pösken baut KI-Systeme, Automatisierungen und Webprodukte. Von der Mitgründung einer NGO zur Methodik: Was zählt wirklich?',
  keywords: [
    'Leon Pösken',
    'Keel',
    'KI-Systeme',
    'Automatisierung',
    'Next.js',
    'World Eden Era',
  ],
  authors: [{ name: 'Leon Pösken' }],
  creator: 'Leon Pösken',
  metadataBase: new URL('https://coastcoder439.github.io'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title: 'Leon Pösken | Technik mit Auftrag.',
    description:
      'Von der Mitgründung einer NGO zum KI-Systembau — deinen Weg finden und ihn gemeinsam gehen.',
    siteName: 'Leon Pösken',
  },
  twitter: {
    card: 'summary',
    title: 'Leon Pösken | Technik mit Auftrag.',
    description: 'KI-Systeme, Automatisierungen und Webprodukte — was zählt wirklich?',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f0e8' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans`}
      >
        <ThemeProvider>
          <I18nProvider locale={locale} messages={messages}>
            <PreloadReady>
              <ConditionalNavigation>{children}</ConditionalNavigation>
            </PreloadReady>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
