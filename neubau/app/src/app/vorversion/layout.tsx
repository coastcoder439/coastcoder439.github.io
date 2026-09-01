'use client';

// Ansichts-Layout fuer die wiederhergestellte Vorversion.
// Der originale ArcPreloaderWrapper (der `phase` steuert) sass im alten Root-Layout
// und fehlt hier. Ohne ihn bleibt `phase` auf "intro", wodurch DeferredMount alle
// Sektionen unterdrueckt und HeroVisual unsichtbar bleibt. Wir setzen den Preload-
// Context daher fest auf "done", damit die komplette Seite gemountet und enthuellt wird.
import { PreloadContext } from '@/components/ui/arc-preloader-hero';

export default function VorversionLayout({ children }: { children: React.ReactNode }) {
  return (
    <PreloadContext.Provider value={{ isPreloading: false, phase: 'done' }}>
      {children}
    </PreloadContext.Provider>
  );
}
