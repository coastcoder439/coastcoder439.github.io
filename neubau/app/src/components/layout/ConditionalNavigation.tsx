import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

// Schnellspur (Storyboard v4.6, Pflichtbaustein): Der Skip-Link ist das erste
// fokussierbare Element und bringt Eilige direkt zu Lebenslauf und Kontakt.
export function ConditionalNavigation({ children }: { children: React.ReactNode }) {
  return (
    <div className="leon-site">
      <a
        href="#kontakt"
        className="sr-only left-4 top-4 z-[2000] rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:outline-2 focus:outline-offset-2 focus:outline-foreground"
      >
        Direkt zu Lebenslauf &amp; Kontakt
      </a>
      <Navbar />
      <div className="leon-site__content">{children}</div>
      <Footer />
    </div>
  );
}
