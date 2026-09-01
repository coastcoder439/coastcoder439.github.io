# Storyboard v2 — Klare Kante (Portfolio-Neubau)

> Gate-Dokument, ersetzt v1 (Tauchfahrt — verworfen [Owner 01.09.2026]; v1 liegt in
> git, Commit 3858077). Gebaut wird erst nach Owner-OK. Grundlage: Owner-Diagnose
> 01.09. (Vorversion = richtige Basis, ABER Header zu verspielt, Texte zu viele/zu
> schlecht/zu kindlich, 3 Slider, kein Ablauf) + Nord-Ton-Workflow (Ton aus alter
> Live-Seite und wl-bikerental destilliert, 2 Texter, Ton-Kritiker waehlte).

## Das Konzept in drei Sätzen

**Problem:** Die Vorversion hat Qualität und Motion, aber einen verspielten Header,
zu viele kindlich-generische Texte, drei redundante Slider und keinen Ablauf.
**Intent:** Dieselbe visuelle Qualität mit dem Ton der alten Live-Seite und von
WL Bike Rental — knapp, direkt, norddeutsch — und einem Ablauf, der führt.
**Goal:** Fünf Abschnitte, jedes Produkt genau einmal als Showcase-Block, jeder
Text besteht den Test „könnte das auf einer fremden Seite stehen?" mit Nein.

## Der Ton-Kontrakt (destilliert aus deinen eigenen Seiten)

1. Ein Gedanke pro Satz; Zwei-Wort-Sätze tragen Überschriften („Technik mit Auftrag.").
2. Haltung über Kontrast („nicht X, sondern Y"), nie über Selbstlob.
3. Bedienschritte und Ergebnisse statt Eigenschaftswörter („F8 drücken, sprechen,
   und der Text steht im Feld.").
4. Zahlen tragen das Versprechen, ehrliche Einschränkung direkt daneben.
5. Verboten: Emojis, Superlative, Denglisch-Buzzwords, Ausrufezeichen,
   Weichspüler-Konjunktiv, Wortspiel-Jingles, kumpelhafte Anbiederung.

## Der neue Hero (Empfehlung + 2 Alternativen — du wählst)

**Empfehlung:** „**Nicht reden. Bauen.**"
Subline: „Acht Systeme auf dieser Seite, vom Diktat-Hotkey bis zur begehbaren
Aquaponik-Simulation." · Bild: Headline raumhoch in Glanz-Typografie (text-shiny
bleibt), ein Lichtstreif zieht ruhig über die Buchstaben, dahinter abgedunkelt das
drehende Gewächshaus-Modell aus dem Oasis Simulator. Keine Emojis, keine Icons in
Wörtern.

**Alternative 1:** „**Früher verkauft. Heute gebaut.**" — Subline: „Ich rede nicht
über KI, sondern baue damit — acht Projekte auf dieser Seite belegen das." ·
„Früher verkauft." blendet matt zurück, „Heute gebaut." schiebt sich mit
wandernder Glanzkante darüber.

**Alternative 2:** „**Gebaut, geprüft, live.**" — Subline: „96 Belege auf 0,00 Euro
genau, jeder Scroll-Zustand per Screenshot verifiziert — Prüfung ist Teil des
Baus." · Die drei Wörter rasten nacheinander wie Prüfschritte ein.

## Der Ablauf — fünf Abschnitte, finale Texte

### 1 · Hero
Gewählte Variante (oben). Feste Nav ab Sekunde 1: Start · Warum · Produkte ·
Kontakt · CV-Button.

### 2 · Warum — „Kein Auftrag. Ein Antrieb."
„World Eden Era ist eine gemeinnützige UG für nachhaltige Ernährung durch
Aquaponik. Dafür baue ich — drei der Werkzeuge auf dieser Seite sind direkt dafür
entstanden."
Direkt darunter die drei WEE-Werkzeuge als Showcase-Blöcke (kein Slider):
1. **Oasis Simulator** [2 Bilder + LIVE world-eden-era.org] — „Die Aquaponik-Oase
   als begehbare 3D-Simulation im Browser, mit Wetter-Layer. Das Gewächshaus kommt
   als 272-MB-Modell aus Blender — live auf world-eden-era.org."
2. **WEE CRM** [ehrlich ohne Bild; Screenshot beschaffbar] — „Fundraising-CRM der
   gUG: Kontakte, Spenden, CSV-Import, Audit-Log. React 19, Supabase mit
   Row-Level-Security — kein Screenshot, dafür Tests."
3. **Drive-Automatisierung** [ehrlich als Text] — „Der Vereins-Drive gehorcht einer
   YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln und meldet
   Drift — 233 Dateien nach Plan migriert."

### 3 · Kundenprojekte — „Für Kunden gebaut."
„Eine Scroll-Story für den E-Bike-Verleih in Wusterhusen, ein Commerce-Cockpit mit
sieben KI-Agenten für einen Print-on-Demand-Shop. Beides geprüft — jeder
Scroll-Zustand per Screenshot, jede Zahl bis auf 0,00 Euro in der GuV."
1. **WL Bike Rental** [5 Bilder] — „Scroll-Story für den E-Bike-Verleih in
   Wusterhusen: eine Radtour von Wald über Bodden bis Strand, jedes Angebot eine
   Station. Gebaut in Next.js — jeder Scroll-Zustand per Playwright-Screenshot
   verifiziert."
2. **Nordwind Studio** [1 Bild + Repo] — „Sieben KI-Agenten führen einen
   Print-on-Demand-Shop auf Shopify — von der Designfreigabe bis zur
   USt-Voranmeldung. 96 Belege treffen die GuV auf 0,00 Euro genau."

### 4 · Keel — „Regeln statt Vertrauen."
„Wächter-Hooks, Dauer-Regeln und ein eigenes Mess-Dashboard — die Disziplin steckt
im Code, nicht im Prompt. Die Oberfläche lässt sich ohne Anmeldung durchklicken,
der Bausatz installiert sich mit einem Befehl."
1. **Keel Showcase** [3 Bilder + LIVE keel-showcase.vercel.app] — „Die
   Keel-Oberfläche zum Durchklicken: Website-Builder, Social Media, Commerce. Ohne
   Server, ohne Anmeldung — live auf keel-showcase.vercel.app."
2. **Keel-Harness** [1 Bild + Repo] — „Ein Bausatz, der KI-Agenten diszipliniert
   arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Befehl
   installiert ihn in jeden Projektordner."
3. **FlowVoice** [1 Bild; Overlay-Screenshot beschaffbar] — „Diktat für Windows:
   Hotkey drücken, sprechen — der Text steht im aktiven Fenster. Vier
   Whisper-Engines zur Wahl, von komplett lokal bis Groq."

### 5 · Für wen + Abschluss
**„Für wen das passt."** — „Für Teams, die kein Konzeptpapier brauchen, sondern ein
laufendes System. Ich komme aus dem Vertrieb, also rede ich in Ergebnissen —
Details im Lebenslauf, Code auf GitHub." + CV-Download-Button.
**„Auf ein Gespräch."** — „Schreiben Sie über LinkedIn, prüfen Sie den Code unter
GitHub coastcoder439 — oder laden Sie den Lebenslauf als PDF herunter."

## Was von der Vorversion bleibt (Motion und Gefühl)

1. Spotlight-Hintergrund, Punktraster, gestaffelte GSAP/Framer-Reveals,
   Glanz-Typografie (`text-shiny`), Dark/Light-Umschalter.
2. Der Preloader bleibt als Moment — Vorschlag: statt „Hallo" die gewählte
   Hero-Headline als kurzer Auftakt (unter 1,5 s).
3. RAUS: HeroVisual mit Emoji-Icons, alle drei Slider (ScrollAdventure,
   ArgentLoopInfiniteSlider, doppelte StatsSection), Follow-Cursor-Spielereien.

## Technik

Basis bleibt `neubau/app` (Next.js 16, läuft). Der Umbau ist chirurgisch: neuer
Hero ersetzt `HeroVisual`, die Slider-Sektionen fliegen aus `page.tsx`, die
Produkt-Blöcke rendern aus einer Daten-Datei (`src/data/portfolio.ts`), Texte wie
oben. Kein Strudel, kein Paradigmen-Wechsel — deutlich kleinerer Eingriff als v1.

## Schnellspur (Pflicht, unverändert)

1. Feste Nav ab Sekunde 1, jeder Punkt springt direkt.
2. Skip-Link „Direkt zu Lebenslauf & Kontakt" als erstes fokussierbares Element.
3. `prefers-reduced-motion`: gleiche Inhalte ohne Animationsfahrten.

## Offene Owner-Fragen (blockieren das OK nicht)

1. **Hero-Wahl:** Empfehlung, Alternative 1 oder 2?
2. **E-Mail** im Abschluss — oder bewusst nur LinkedIn/GitHub/CV (so steht es jetzt)?
3. **Private Repos** (oasis, wee-crm, voiceai, wl-bikerental): öffentlich stellen
   oder ohne Repo-Link zeigen?

## Abnahme

1. Owner-OK zu Hero-Wahl, Ablauf und Texten.
2. Bau in Abschnitten 1→5; nach jedem Abschnitt Live-Abnahme im Browser durch den
   Owner + Screenshot hell/dunkel.
3. Kritiker-Gauntlet vor Ship: gegen alte Live-Seite UND gegen dieses Storyboard
   (jede Zeile gegen den Ton-Kontrakt).
