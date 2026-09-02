# Build- und Gauntlet-Protokoll

Stand: 29. August 2026

## Ergebnis

Die echte arfazrll-Next.js-Vorlage in `app/` wurde in Leons deutschsprachiges Fullstack-Portfolio überführt. Das visuelle System der Vorlage blieb erhalten: großformatige Typografie, matte Flächen, asymmetrische Komposition, 3D/WebGL, GSAP, Framer Motion, Hell-/Dunkelmodus und die vorhandene Seitenarchitektur. Geändert wurden Inhalte, Projektquellen, Assets, Sprache und integrationsabhängige Sichtbarkeit.

Der vertikale Projekt-Slider wurde entsprechend der Owner-Notiz durch eine responsive Grid-/Collage-Darstellung ersetzt. Das Grid verwendet echte Produktoberflächen; Projekte ohne belastbares Bildmaterial bleiben bewusst textbasiert.

## Verbindlicher Inhalt

- Person: Leon Pösken, Leipzig; Fokus auf KI-Systeme, Automatisierung und Webentwicklung.
- Leitmotiv: „Vom Vertrieb zum Systembauer. Ich rede nicht über KI, ich baue damit.“
- Marke: ausschließlich **Keel**; keine sichtbare Verwendung von Flowcode.
- Kontakt: LinkedIn, GitHub `coastcoder439` und der vorgegebene E-Mail-Platzhalter.
- Lebenslauf: `/Leon-Poesken-Lebenslauf.pdf` mit Downloadnamen `Leon-Poesken-Lebenslauf.pdf`.
- Ausgeschlossen: Keel-System/Paperclip-Fork, Brain, enerbolt, whitelabel-web-base, website-stefan-heine, interne Labore sowie frühere Template-/Demo-Projekte.
- Erfundenes GPA, erfundene Projektzahlen, Fake-Socials, Fake-Statistiken und zufällige Placeholder-Bilder wurden entfernt.

## Projekt- und Quellenmatrix

| Portfolioeintrag | Beleg aus dem Repository | Darstellung | Öffentlicher Zugang |
| --- | --- | --- | --- |
| Oasis Simulator | `oasis-simulation-app`, echte Übersichts- und Wetteransichten | Zwei Repo-Screenshots | Live: `https://world-eden-era.org`; privater Repo-Link ausgeblendet |
| WEE CRM | `wee-crm/drive-inhalt/`, echter React-Frontend-Stand; kein belastbarer Screenshot oder öffentlicher Build | Ehrliche Textkarte, kein Mockup | Kein erfundener Link |
| Drive-Automatisierung | `google-drive-management`, echte Skripte, YAML-/Inventur- und Konfliktberichte; keine Bildquelle | Ehrliche Textkarte, kein Mockup | Privater Repo-Link ausgeblendet |
| Keel Showcase | `keel-showcase/abnahme/2026-08-21/screenshots/` | Drei echte Abnahme-Screenshots | Live: `https://keel-showcase.vercel.app`; privater Repo-Link ausgeblendet |
| Keel-Harness | `keel-harness-standalone-setup/payload/dashboard` | Dashboard aus dem echten lokalen Harness | Öffentliches Repository, anonym HTTP 200 |
| FlowVoice | `voiceai`, V3-Wave-Renderer | Ausgabe des echten Renderers | Kein Deploy behauptet; privater Repo-Link ausgeblendet |
| E-Bike-Vermietung | `wl-bikerental` | Echte V3-Buchungs- und Zentralenansicht | Live: `https://wl-bikerental.vercel.app/v3`; privater Repo-Link ausgeblendet |
| Shopify-Shop | `shopify-x-paperclip`, echte Preview-Bilder | Repo-Preview; synthetische Vorschauwerte ausdrücklich gekennzeichnet | Live: `https://keel-showcase.vercel.app/KL/commerce`; öffentliches Repository, anonym HTTP 200 |

Es bleiben exakt acht Portfolio-Projekte. Nur die zwei anonym erreichbaren GitHub-Repositories rendern einen „Quellcode“-Button. Die vier vorhandenen Live-Ziele antworteten im finalen Audit mit HTTP 200.

## Assets

Die alten Template-Projektbilder und Identitätsassets (rund 42 MiB) wurden entfernt. In `app/public/projects/` liegen zwölf belegte Produktansichten:

- Oasis: `uebersicht-banner.jpeg`, `wetter-layer-abnahme.jpeg`
- Keel Showcase: `dashboard.png`, `social-media.png`, `website-builder.png`
- Keel-Harness: `dashboard.png`
- FlowVoice: `wave.png`
- E-Bike: `praesentation-kopf.png`, `zentrale-heute.png`
- Commerce: `keel-commerce.png`, `preview-viewport.jpeg`, `preview-fullpage.jpeg`

Neutrale Template-Bestandteile, die das Design tragen (Lanyard-3D-Modell, Textur, Grid/Noise/Mask), blieben erhalten. Der öffentliche Lebenslauf ist eine bytegleiche Kopie der gelieferten PDF; SHA-256: `7D9FFE7ED96412B172AA51A9D63D950DBA3CFB5E771B2C3EEAAADB736D1AC799`.

## Sprache und Integrationen

- `messages/de.json` ist die einzige Message-Datei und Deutsch ist die Default-Locale.
- `id.json` und indonesische Locale-/Datumsreste wurden entfernt; sichtbare Navigation, Kalender, Tooltips, Fehlerseite, PDF-Steuerung, Projekte und Artikel sind deutsch.
- GitHub verwendet `coastcoder439`; die öffentlichen GitHub-API-Routen liefern echte Daten.
- WakaTime bleibt nur mit `WAKATIME_API_KEY` aktiv. Ohne Key antworten die Routen mit `configured: false`/404 und es erscheint keine Karte.
- Kaggle und Chatbot antworten ohne Konfiguration ehrlich mit 404/`configured: false`; es gibt keine sichtbaren Fake-Daten.
- Unsplash/Picsum und weitere zufällige Remote-Placeholder wurden entfernt.

## Installation und Produktionsbuild

Ausgeführt in `app/`:

```text
npm.cmd --cache .npm-cache install
→ 735 Pakete geprüft, 0 Schwachstellen

npm.cmd --cache .npm-cache run build
→ Next.js 16.3.3
→ Compile erfolgreich
→ TypeScript erfolgreich
→ 28/28 Seiten generiert
→ Exit-Code 0

npm.cmd --cache .npm-cache run start -- -p 3001
→ Ready; finaler Produktionsbuild lokal ausgeliefert
```

Der letzte Build erfolgte nach der Korrektur der privaten Repository-Links.

## Browser-Gauntlet

Getestet wurde der Produktionsbuild in echtem Chromium, nicht nur per DOM-/Unit-Test.

### Screenshots

| Ansicht | Artefakt |
| --- | --- |
| Desktop, dunkel, 1600 × 1000 | [`gauntlet/desktop-dark.png`](gauntlet/desktop-dark.png) |
| Desktop, hell, 1600 × 1000 | [`gauntlet/desktop-light.png`](gauntlet/desktop-light.png) |
| Mobil, dunkel, 390 × 844 | [`gauntlet/mobile-dark.png`](gauntlet/mobile-dark.png) |
| Mobil, hell, 390 × 844 | [`gauntlet/mobile-light.png`](gauntlet/mobile-light.png) |
| Projekt-Collage | [`gauntlet/projects-desktop-dark.png`](gauntlet/projects-desktop-dark.png) |
| Projektkarten inklusive Textkarten | [`gauntlet/projects-cards-dark.png`](gauntlet/projects-cards-dark.png) |
| Echter Lebenslauf im PDF-Viewer | [`gauntlet/resume-dark.png`](gauntlet/resume-dark.png) |

### Geprüfte Routen

- `/`, `/projects` und alle acht Projektdetails
- `/contact`, `/experience`, `/skills`, `/achievements`, `/gallery`
- `/blog` und alle sechs Artikeldetails
- `/resume`
- unbekannte Route mit deutscher 404-Seite

Alle geprüften Seiten liefen ohne Browserfehler. Die PDF-Seite musste einmal korrigiert werden, weil `DOMMatrix` im serverseitigen Renderpfad nicht existiert; der Viewer wird nun korrekt clientseitig geladen. `/Leon-Poesken-Lebenslauf.pdf` liefert HTTP 200, `application/pdf`, 673109 Byte. Der Download-Link besitzt den verlangten Dateinamen.

API-Prüfung im laufenden Produktionsbuild:

| Route | Ergebnis |
| --- | --- |
| `/api/github-stats` | 200, echte öffentliche Daten für `coastcoder439` |
| `/api/github-languages` | 200, echte öffentliche Sprachdaten |
| `/api/chat` | 404, ehrlich nicht konfiguriert |
| `/api/kaggle-stats` | 404, ehrlich nicht konfiguriert |
| `/api/wakatime`, `/api/wakatime-stats` | 404 ohne Key, ehrlich nicht konfiguriert |

Die Browser-Fehlerliste blieb leer. Ein nicht blockierender Konsolenhinweis `updating from 115 to 122` stammt aus `@splinetool/runtime`, das das eingebettete Spline-Szenenschema beim Laden auf die aktuelle Runtime-Version migriert; daraus entsteht kein Seiten- oder Renderfehler.

## Unabhängige Kritikschleife

Ein separater Kritiker verglich die finalen Desktop-/Mobil- und Hell-/Dunkel-Screenshots blind mit `arfazrll-preview.png` und prüfte zusätzlich die Inhaltsregeln.

1. **Runde 1 — FAIL:** Designqualität, Responsivität, Deutsch, echte Assets, Textkarten, Keel-Harness, Ausschlüsse, CV und Integrationen bestanden. Größte Lücke: fünf sichtbare „Quellcode“-Buttons zeigten auf private GitHub-Repositories und lieferten anonym 404.
2. **Builder-Korrektur:** `repoUrl` für Oasis, Drive, Keel Showcase, FlowVoice und E-Bike entfernt; vorhandene Live-Links unverändert gelassen; zwei Aussagen über angeblich öffentlichen Quellcode berichtigt. Nur Keel-Harness und Shopify behalten anonym erreichbare Repo-Links.
3. **Produktionsprüfung:** Betroffene Detailseiten im neu gestarteten finalen Build geprüft. Die fünf privaten Buttons fehlen; echte Live-Buttons und beide öffentlichen Repo-Buttons bleiben. Browserfehler: keine.
4. **Runde 2 — PASS:** Alle vier Live-Ziele und beide verbleibenden Repo-Ziele HTTP 200. Referenzästhetik, responsive Hell-/Dunkelansichten, deutsche Leon-/Keel-Inhalte, ehrliche Textkarten, echtes Dashboard, CV und Integrationsregeln bestanden. Urteil: **keine materielle Lücke**.

## Abschlussstatus

- Inhalt: bestanden
- Echtheit/Quellen: bestanden
- Sprache: bestanden
- Integrationen: bestanden
- `npm install`: bestanden
- Produktionsbuild: bestanden
- Echter Browser Desktop/Mobil und Hell/Dunkel: bestanden
- Unabhängiger Blindvergleich: **PASS**
