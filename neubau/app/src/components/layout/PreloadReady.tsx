'use client';

import { PreloadContext } from '@/components/ui/arc-preloader-hero';

// Setzt den Preload-Zustand fest auf "done", damit DeferredMount die animierten
// Sektionen des Templates mountet und der HeroVisual-Reveal greift. Ersetzt den
// arc-Preloader (der phase sonst auf "intro" haengen liess); der Erst-Besuch-
// Moment kommt vom LoadingScreen in page.tsx.
export function PreloadReady({ children }: { children: React.ReactNode }) {
  return (
    <PreloadContext.Provider value={{ isPreloading: false, phase: 'done' }}>
      {children}
    </PreloadContext.Provider>
  );
}
