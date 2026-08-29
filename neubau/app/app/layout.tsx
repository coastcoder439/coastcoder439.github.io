import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leon Pösken — Vertrieb, Projekte & digitale Produkte',
  description:
    'Portfolio von Leon Pösken: echte Produktstände aus Simulation, Automatisierung, Infrastruktur und Commerce.',
};

const themeScript = `
  try {
    const stored = localStorage.getItem('leon-theme');
    const dark = stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
