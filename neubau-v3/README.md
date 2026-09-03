# Portfolio Leon Pösken

Persönliche Portfolio- und Bewerbungsseite: Wer ich bin, wie ich arbeite, was ich
gebaut habe, und ein Kalender zum Termin buchen.

Live: <https://leon-portfolio-psi.vercel.app>

## Aufbau

Die Startseite besteht aus vier Blöcken, in dieser Reihenfolge:

1. **Start** — Motto, Herkunft, Knöpfe „Gespräch buchen" und „Lebenslauf", laufende Nachweise.
2. **Ablauf** — die vier Schritte einer Zusammenarbeit (Muster erkennen, das Ganze sehen,
   Regeln in Code gießen, Können übergeben) als zwei drehende Würfel mit Erklärungen.
3. **Projekte** — neun Projekte in einer Slideshow, gruppiert nach Ursprung, Praxis und Keel;
   sechs davon lassen sich als Live-Vorschau im Fenster durchklicken.
4. **Buchen** — Kalender (Cal.com), LinkedIn, Lebenslauf.

Dazu `/impressum` und `/datenschutz`.

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3001 (Port über .claude/launch.json der Werkbank)
npm run build   # Produktions-Build, muss vor jedem Deploy grün sein
```

## Wo was steht

| Was | Datei |
|---|---|
| Personendaten, Cal.com-Link, LinkedIn | `src/data/portfolio.ts` |
| Adresse der Seite, Freigabe für Suchmaschinen | `src/lib/site.ts` |
| Schritte, Ergebnisse, Projekttexte | `src/components/sections/StoryContent.tsx` |
| Hero (Motto, Subline, Nachweise) | `src/components/sections/HeroVisual.tsx` |
| Buchen-Block mit Kalender | `src/components/sections/CTASection.tsx`, `CalBooking.tsx` |
| Beschriftung der Würfelseiten | `src/components/ui/Loader.tsx` |
| Sprungmarken (Lenis) | `src/lib/scroll.ts` |

## Vor der Live-Schaltung

`src/lib/site.ts` setzt `IMPRESSUM_COMPLETE = false`. Solange das so ist, sperrt die Seite
sich selbst für Suchmaschinen (`robots.txt` und `noindex`). Erst Anschrift und E-Mail in
`src/app/impressum/page.tsx` und `src/app/datenschutz/page.tsx` eintragen, dann das Flag
auf `true` setzen.

## Datenschutz im Aufbau

Nichts Fremdes lädt ungefragt: Der Cal.com-Kalender und die Projekt-Vorschauen werden erst
nach einem Klick geholt. Schriften liegen lokal, es gibt keine Analyse-Werkzeuge und keine
Werbe-Cookies.

## Herkunft

Das Gerüst stammt aus dem MIT-lizenzierten Template
[Arfazrll/PersonalBlog](https://github.com/Arfazrll/PersonalBlog); Inhalte, Struktur und
Texte sind eigenständig. Die Projekt-Slideshow basiert auf der Komponente
„Animated Slideshow" von youcefbnm (21st.dev, MIT). Lizenz siehe `LICENSE`.
