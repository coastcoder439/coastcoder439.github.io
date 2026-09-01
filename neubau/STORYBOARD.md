# Storyboard — Die Tauchfahrt (Portfolio-Neubau)

> Gate-Dokument [Owner-Entscheid 01.09.2026: Storyboard vor Bau]. Gebaut wird erst
> nach Owner-OK zu diesem Dokument. Quellen: LEON-BRIEF.md (Kriterien A–F),
> content-spec.md, keel-scroll-story (Strudel-Welt, 44/44 QA), Kritiker-Lauf
> 01.09. (Urteil NACHARBEIT — alle Beanstandungen hier eingearbeitet).
> Owner-Entscheid 01.09. ersetzt Brief-Kriterium E.1: KEINE Projekt-Slider mehr,
> weder vertikal noch horizontal — die Scroll-Reihenfolge selbst ist der Ablauf.

## Das Konzept in drei Sätzen

**Problem:** Die Vorversion hat die richtige Qualität (Motion, Look), aber keinen
Ablauf — drei redundante Slider, zu viele generische Texte. **Intent:** Eine Seite,
die als geführte Tauchfahrt erzählt: Oberfläche = der Vertriebler, Tiefe = der
Systembauer; das Wasser ist wörtlich mein Thema (Aquaponik). **Goal:** Jedes Produkt
genau einmal, als echtes Bild oder ehrlicher Text, in einer WebGL-Tauchfahrt aus
meinem eigenen geprüften Baustein `keel-scroll-story` — mit Schnellspur für Eilige.

## Die sechs Stationen

### S0 · Wasserlinie — der Hero (bleibt)
- **Copy:** Die bestehende Typo »KI & DATEN / SOFT⚡WARE / ENT🤖WICKLER« bleibt
  unverändert, dazu die zwei Flankentexte (»Hi, ich bin Leon Pösken …«).
- **Bild:** Typo steht über dem Wasser, ihre Spiegelung bricht in den WebGL-Wellen.
- **Motion:** Beim ersten Scroll öffnet sich unter der Schrift der Strudel und zieht
  die Kamera hinab (Referenz: `keel-scroll-story/referenzen/bilder-final/s0-s1-wirbel.mp4`).
- **Immer sichtbar ab S0:** feste Nav (Start · Warum · Produkte · Kontakt · CV-Button).

### S1 · Das Warum — World Eden Era
- **Eyebrow:** `S1 — DAS WARUM` · **Headline:** »Eine Oase, die sich selbst ernährt —
  der Grund, warum ich baue.«
- **Body (2 Sätze):** »World Eden Era ist meine gemeinnützige UG für nachhaltige
  Ernährung durch Aquaponik — kein Kundenauftrag, sondern der Antrieb hinter allem.
  Für sie habe ich drei Werkzeuge gebaut: 3D-Simulation, Fundraising-CRM,
  Drive-Automatisierung.«
- **Produkte (je max. 2 Zeilen):**
  1. **Oasis Simulator** — Bild `public/projects/oasis/uebersicht-banner.jpeg` +
     `wetter-layer-abnahme.jpeg` · live <https://world-eden-era.org> · »Begehbare
     3D-Simulation der Aquaponik-Oase im Browser: Gewächshaus aus Blender
     (272-MB-glb), Wetter-Layer, keine Installation. Läuft live.«
  2. **WEE CRM** — EHRLICH-TEXT (Bild beschaffbar, s. Assets) · »Fundraising-CRM der
     gUG auf React 19 und Supabase mit Row-Level-Security. Kontakte, Spenden,
     CSV-Import, Audit-Log — echter Code mit Tests.«
  3. **Drive-Automatisierung** — EHRLICH-TEXT · »Der Vereins-Drive gehorcht einer
     YAML als einziger Wahrheitsquelle: Python-Werkzeuge verteilen Ablage-Regeln,
     sortieren Neues ein, melden Drift per Audit. 233 Dateien nach Plan migriert.«
- **Motion:** Kurz unter der Oberfläche bricht Sonnenlicht durchs Wasser, der Strudel
  färbt sich grün (Wasser = Aquaponik). Die drei Karten treiben nacheinander in der
  Strömung ins Bild — kein Slider, die Tauchfahrt trägt sie vorbei.

### S2 · Kundensysteme — letztes Licht
- **Eyebrow:** `S2 — IM KUNDENEINSATZ` · **Headline:** »Zwei Kundensysteme, keine
  Vorlage.« *(abgeschwächt bis Auftrags-Beleg vom Owner vorliegt — Kritiker-Punkt)*
- **Body (2 Sätze):** »Ein E-Bike-Verleih an der Ostsee und ein Print-on-Demand-Shop
  bekamen keine Baukasten-Seite, sondern je ein eigenes System. Beides echter Code,
  daneben die unveränderten Screens.«
- **Produkte:**
  1. **WL Bike Rental** — Bild `public/projects/ebike/hero.png` (+4 weitere Screens
     vorhanden) · »Scroll-Story-Website für den E-Bike-Verleih in Wusterhusen: eine
     Radtour von Wald über Bodden bis Strand, jedes Angebot eine Station. Next.js,
     jeder Scroll-Zustand per Playwright-Screenshot verifiziert.«
  2. **Nordwind Studio** — Bild `public/projects/commerce/keel-commerce.png` ·
     Repo-Link · »Klickbares Cockpit für einen Print-on-Demand-Shop auf Shopify:
     sieben KI-Agenten von Designfreigabe bis USt-Voranmeldung, im Repo startbar.
     96 Belege treffen die GuV auf 0,00 Euro genau.«
- **Motion:** Zwei Lichtkegel im sich verdunkelnden Wasser: erst der sonnige
  Ostsee-Hero als letzter Blick nach oben, dann kippt die Fahrt tiefer und das
  Commerce-Cockpit leuchtet als Instrumentenpult aus dem Dunkel.

### S3 · Keel — der Kern der Tiefe
- **Eyebrow:** `S3 — KERN DER TIEFE` · **Headline:** »Ganz unten liegt der Kiel: Keel.«
- **Body (2 Sätze):** »Keel ist mein eigenes Agent-System — Oberfläche,
  Arbeitsdisziplin und Sprachsteuerung aus einer Hand. Drei Bausteine sind heute
  belegbar: klickbare Live-Demo, installierbarer Harness, Diktat-Werkzeug.«
- **Produkte:**
  1. **Keel Showcase** — Bilder `public/projects/keel-showcase/` (dashboard,
     social-media, website-builder) · live <https://keel-showcase.vercel.app> ·
     »Anklickbare Desktop-Demo der Keel-Oberfläche mit Modulen für Website-Builder,
     Social Media und Commerce — ohne Server, ohne Anmeldung, live auf Vercel.«
  2. **Keel-Harness** — Bild `public/projects/keel-harness/dashboard.png` · Repo
     <https://github.com/coastcoder439/keel-harness-standalone-setup> · »Ein Bausatz,
     der KI-Agenten diszipliniert arbeiten lässt: Wächter-Hooks, Dauer-Regeln,
     eigenes Mess-Dashboard. Ein Befehl installiert ihn in jeden Projektordner.«
  3. **FlowVoice** — Bild `public/projects/flowvoice/wave.png` · »Diktat für Windows
     per Hotkey: vier Whisper-Engines (lokal bis Groq), Wellen-Overlay, der Text
     landet direkt im aktiven Fenster — komplett auf dem eigenen Rechner.«
- **Motion:** Am tiefsten Punkt beruhigt sich der Strudel; aus dem Dunkel leuchtet
  ein Maschinenraum: die drei Karten docken als erleuchtete Bullaugen an, das
  Keel-Dashboard scheint dahinter als Instrumententafel durch.
- **Bonus-Beleg:** Diese Seite selbst ist mit dem Keel-Harness gebaut — ein Satz
  dazu in der Station (»auch diese Seite entstand unter seiner Aufsicht«).

### S4 · Für wen — der Aufstieg beginnt
- **Eyebrow:** `S4 — FÜR WEN` · **Copy (2 Sätze):** »Kunden bekommen einen Umsetzer,
  der fertige Systeme liefert statt Beratungsfolien; Arbeitgeber einen Entwickler
  mit Vertriebs-Vergangenheit, der KI-Systeme baut und betreibt. Lebenslauf als PDF
  direkt hier — ein Klick, kein Formular.« · CV-Download-Button (Leon-Poesken-Lebenslauf.pdf).
- **Motion:** Die Kamera dreht nach oben, erstes Licht kehrt zurück; zwei Pfade
  (Kunde/Arbeitgeber) als aufsteigende Blasenbahnen.

### S5 · Auftauchen — Auf ein Gespräch
- **Eyebrow:** `S5 — AUF EIN GESPRÄCH` · **Copy (2 Sätze):** »Nach der letzten
  Station steigt die Kamera zurück ans Licht: ›Auf ein Gespräch‹ mit LinkedIn und
  GitHub. Wer bis hier getaucht ist, soll direkt schreiben können.«
- **Links:** LinkedIn <https://www.linkedin.com/in/leonpoesken/> · GitHub
  `coastcoder439` · E-Mail: OFFENE OWNER-FRAGE (s. unten).
- **Motion:** Derselbe Strudel kehrt die Richtung um und trägt die Kamera an die
  Oberfläche; Abschluss im Hellen — Kreis geschlossen.

## Pflichtbaustein: Arbeitgeber-Schnellspur
1. Feste Nav ab S0 (Start · Warum · Produkte · Kontakt · **CV**) — jeder Punkt
   springt direkt, ohne Tauchzwang.
2. Skip-Link »Direkt zu Lebenslauf & Kontakt« als erstes fokussierbares Element.
3. `prefers-reduced-motion`: die komplette Fahrt fällt auf statische, scrollbare
   Abschnitte ohne WebGL-Kamerafahrt zurück (gleiche Inhalte, gleiche Reihenfolge).

## Technik-Entscheid
- **Rückgrat:** Die WebGL-Ozean/Strudel-Komponenten aus
  `keel-scroll-story/app/src/components/story/` werden in `neubau/app` (Next.js 16)
  portiert — `three`, `@react-three/fiber`, `postprocessing` stehen dort schon in
  der package.json. EIN Canvas, EIN Scroll-Gerüst; die GSAP/Lenis-Vorversion liefert
  Hero-Typo und Look, nicht ein zweites Gerüst.
- **Risiko benannt:** Port statt Neubau; falls der Port hakt, ist der Fallback die
  Vite-App aus keel-scroll-story als Basis mit Hero-Import — Entscheidung fällt im
  ersten Bauabschnitt, beides bleibt im selben Repo.

## Asset-Landkarte (alles echt, nichts erfunden)
1. **Vorhanden:** oasis (2), ebike (5), keel-showcase (3), keel-harness (1),
   flowvoice (1), commerce (1), Lebenslauf-PDF, Strudel-Referenzen (png+mp4).
2. **Beschaffbar durch mich beim Bau:** WEE-CRM-Screenshot (`npm run dev` in
   `wee-crm` mit Demo-Auth, Kontakte-Ansicht) · FlowVoice-Overlay-Screenshot
   (App aus `voiceai/V3` starten) · weitere Oasis-Screens aus
   `oasis-simulation-app/docs/screenshots`.
3. **Ehrlich als Text (kein Fake-Bild):** Drive-Automatisierung.

## Offene Owner-Fragen (blockieren das OK nicht, aber den Feinschliff)
1. **E-Mail** für »Auf ein Gespräch« — angeben oder bewusst nur LinkedIn/GitHub?
2. **Kundenprojekt-Belege:** Freigabe/Beleg für »im Auftrag« (WL Bike Rental,
   Nordwind) — bis dahin steht die abgeschwächte Formulierung.
3. **Private Repos:** oasis-simulation-app, wee-crm, voiceai, wl-bikerental sind
   privat (404) — öffentlich stellen oder ohne Repo-Link zeigen?

## Abnahme (wann dieses Storyboard erfüllt ist)
1. Owner-OK zu Stationen, Texten und Technik-Entscheid.
2. Danach Bau in Abschnitten (S0 → S5), je Abschnitt Live-Abnahme im Browser
   durch den Owner + Screenshot-Beleg hell/dunkel.
3. Kritiker-Gauntlet vor Ship: gegen alte Live-Seite UND gegen dieses Storyboard.
