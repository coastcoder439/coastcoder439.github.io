# Leon Pösken — Fullstack-Portfolio

Das Portfolio zeigt acht echte Produkte von Leon Pösken aus den Bereichen KI-Systeme, Automatisierung und Webentwicklung. Die visuelle und interaktive Grundlage ist die offen lizenzierte Arfazrll-Portfolio-Vorlage; Inhalte, Produktansichten, Identität und Sprache wurden vollständig auf Leon und die Marke Keel angepasst.

## Produkte

- Oasis Simulator
- WEE CRM
- Drive-Automatisierung
- Keel Showcase
- Keel-Harness mit Dashboard
- FlowVoice
- E-Bike-Vermietung
- Shopify-Shop als transparent gekennzeichnete Commerce-Vorschau

Alle visuellen Projektvorschauen stammen aus den jeweiligen Repositories oder dokumentierten Abnahmeständen. Projekte ohne belegte öffentliche Oberfläche bleiben bewusst textbasiert.

## Technik

- Next.js 16 und React 19
- React Three Fiber, Drei und Rapier
- GSAP und Framer Motion
- next-intl mit Deutsch als einziger öffentlicher Locale
- next-themes
- TypeScript und Tailwind CSS

## Lokal starten

```powershell
npm.cmd --cache .npm-cache install
npm.cmd --cache .npm-cache run dev
```

Produktionsbuild:

```powershell
npm.cmd --cache .npm-cache run build
npm.cmd --cache .npm-cache run start
```

## Konfiguration

`NEXT_PUBLIC_GITHUB_USERNAME` ist standardmäßig auf `coastcoder439` gesetzt. Ein optionales `GITHUB_TOKEN` erhöht lediglich das API-Limit.

WakaTime, Kaggle und der Chatbot werden ohne echte Konfiguration nicht angezeigt und liefern keine erfundenen Ersatzdaten.

Der Lebenslauf liegt unter `public/Leon-Poesken-Lebenslauf.pdf`.

## Herkunft und Lizenz

Die MIT-lizenzierte Vorlage und der festgeschriebene Upstream-Commit sind in [ATTRIBUTION.md](./ATTRIBUTION.md) dokumentiert. Diese Attribution beschreibt ausschließlich die technische Design-Herkunft und nicht die sichtbare Portfolio-Identität.
