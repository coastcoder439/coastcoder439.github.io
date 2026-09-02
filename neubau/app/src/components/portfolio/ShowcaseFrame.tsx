'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

// Storyboard v4.6: Showcases erscheinen ausschliesslich als eingebettete
// Vercel-iframes, nie als Screenshot. Klick-zum-Laden, damit die Seite nicht
// mehrere fremde Anwendungen gleichzeitig startet und der Scroll nicht in
// einem Frame haengen bleibt.
export function ShowcaseFrame({
  url,
  title,
  note,
}: {
  url: string;
  title: string;
  note: string;
}) {
  const [aktiv, setAktiv] = useState(false);

  return (
    <figure className="group relative m-0 overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03]">
      <div className="relative aspect-[16/10] w-full">
        {aktiv ? (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            allow="fullscreen"
            className="absolute inset-0 h-full w-full border-0 bg-background"
          />
        ) : (
          <button
            type="button"
            onClick={() => setAktiv(true)}
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle,_rgba(120,120,120,0.25)_0.5px,_transparent_0.5px)] [background-size:18px_18px] transition-colors duration-300 hover:bg-foreground/[0.06] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-foreground"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 bg-background/70 backdrop-blur transition-transform duration-300 group-hover:scale-105">
              <Play aria-hidden="true" className="ml-0.5 h-5 w-5" />
            </span>
            <span className="text-sm font-semibold">{title}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Zum Starten klicken
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-foreground/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>{note}</span>
        {aktiv ? <span aria-live="polite">läuft im Rahmen</span> : null}
      </figcaption>
    </figure>
  );
}
