# Storyboard v4.4 — Klare Kante (Portfolio-Neubau)

> Gate-Dokument. Hero ENTSCHIEDEN [Owner 02.09.2026]. Historie: v1 Tauchfahrt
> (verworfen) · v2 Nord-Ton · v3 Owner-Input · v4 Chronologie · v4.1 Doppel-Boxen
> · v4.2 Fakten-Korrektur · v4.3 Owner-Antworten F1–F7 (git: cef9e24).
> **v4.4 — Kritiker-Panel (3 Linsen: Fakten · Ton · Framing, 26 Funde) eingearbeitet:**
> Simulator ist NICHT live auf world-eden-era.org (dort läuft die 3D-Präsentation
> unter /project-oasis/), „begehbar" unbelegt (OrbitControls = drehbar),
> „Wetter-Layer" ist ein Simulations-Parameter, „233 migriert" war Planzahl,
> CRM-RLS ist inzwischen implementiert (Fußnote war veraltet), Zertifikate sind
> „geplant", nicht „laufend" (kein Kurs gestartet). Framing: jede „für
> [Betrieb]"-Konstruktion und Ortsnamen raus; Regel präzisiert. Ton: Denglisch
> raus, Dopplungen raus, „bis auf 0,00" → „auf 0,00 genau".

## Das Konzept in drei Sätzen

**Problem:** Die bisherigen Fassungen hatten gute Einzelteile, aber keinen roten
Faden — die Sektionen standen nebeneinander statt aufeinander. **Intent:** Die
Seite erzählt EINE Geschichte, chronologisch und belegt: von der NGO-Mitgründung
über die Filter-Frage zur Methodik, von den ersten eigenen Systemen zur Arbeit
an echten Problemen und zum eigenen Produkt. **Goal:** Jeder Abschnitt schließt
erkennbar an die Frage „Was zählt wirklich?" an, jedes Produkt kommt genau
einmal, jeder Satz trägt Haltung oder einen belegten Fakt.

## Der Hero — ENTSCHIEDEN [Owner 02.09.]

**Headline:** „**Technik mit Auftrag.**"
**Subline:** „Die Mitgründung einer NGO brachte mich zum KI-Systembau, eine Frage
durch die IT-Welt: Was zählt wirklich? Heute ist das meine Methodik — deinen Weg
finden und ihn gemeinsam gehen."
**Bild:** Headline raumhoch in Glanz-Typografie, ruhiger Lichtstreif; dahinter
abgedunkelt das drehende Gewächshaus-Modell aus dem Oasis-Projekt.
**Begriffs-Logik [Owner]:** „Technik" bleibt in der Headline (breit — auch
Landwirtschaftssysteme), die Subline präzisiert auf „KI-Systembau"; „IT-Welt" ist
der Ort der Überwältigung, kein zweites Ziel. „Auftrag" im Hero meint die
Mission (NGO) — von der Framing-Regel in Abschnitt 4 ausdrücklich ausgenommen.
**Panel-Vorschlag zur Subline (Owner-Entscheid, siehe unten):** sprachlich in
drei Sätze teilen — „Die Mitgründung einer NGO brachte mich zum KI-Systembau.
Durch die IT-Welt trug ich eine Frage: Was zählt wirklich? Heute ist sie meine
Methodik — deinen Weg finden und ihn gemeinsam gehen."

## Der Ton-Kontrakt (unverändert)

1. Ein Gedanke pro Satz; Zwei-Wort-Sätze tragen Überschriften.
2. Haltung über Kontrast, nie über Selbstlob.
3. Bedienschritte und Ergebnisse statt Eigenschaftswörter.
4. Zahlen tragen das Versprechen, ehrliche Einschränkung daneben.
5. Verboten: Emojis, Superlative, Denglisch, Ausrufezeichen, Konjunktiv-Watte,
   Wortspiel-Jingles.

## Der Ablauf — sieben Abschnitte, als Chronologie der Geschichte

### 1 · Hero — die These
Hero wie oben. Feste Nav ab Sekunde 1: Start · Ursprung · Methodik · Praxis ·
Profil · Kontakt · CV-Button. Preloader unter 1,5 s mit „Technik mit Auftrag."
statt „Hallo".

### 2 · Ursprung — „Kein Auftrag. Ein Antrieb." (WEE = wo alles begann)
**Copy:** „World Eden Era ist die gemeinnützige UG, die ich mitgegründet habe —
nachhaltige Ernährung durch Aquaponik. Dieser Antrieb brachte mich zum
Systembau. Die ersten Systeme entstanden direkt für sie — von mir entwickelt,
heute vom Team weitergetragen."
*(F1–F4 beantwortet; Team-Formel deckt Oasis [Team entwickelt weiter], CRM
[Hilfe von Praktikant Sumit Mor] und Drive [allein]; Namen bleiben aus der
Seiten-Copy; Überschrift verneint die Beauftragung, Copy sagt „Antrieb" — kein
Widerspruch mehr [Panel])*
1. **Oasis** [2 Bilder + LIVE-Präsentation] — „Mein Herzensprojekt: die
   Aquaponik-Oase als drehbares 3D-Modell im Browser — 272 MB aus Blender —
   plus eine Simulation, die Wetter und Klima in Ertrag und Kosten einrechnet.
   Die 3D-Präsentation dazu läuft live auf world-eden-era.org."
   *(Panel-Korrektur: der Simulator ist eine lokale App, live ist die
   Scroll-Präsentation unter /project-oasis/; „begehbar" unbelegt — die Szene
   nutzt OrbitControls; Wetter ist Parameter der Simulation (simulation.js
   „Wetter & Klima"), kein Layer der 3D-Szene; glb 285.729.896 Bytes belegt)*
2. **WEE CRM** [ehrlich ohne Bild] — „Fundraising-CRM der gUG, im Aufbau:
   Kontakte, Spenden, CSV-Import, Audit-Log auf React 19 und Supabase. Kein
   Screenshot — der Stand ist ein getesteter Prototyp."
   *(Fußnote korrigiert [Panel]: Row-Level-Security ist inzwischen in
   `supabase/migrations/` implementiert und lokal getestet, remote noch nicht
   abgenommen — deshalb nicht in der Copy beworben, aber nicht „nur Konzept")*
3. **Drive-Automatisierung** [ehrlich als Text] — „Der Vereins-Drive gehorcht
   einer YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln
   und meldet Abweichungen — 233 Dateien im Migrationsplan, jeder Lauf mit
   Abgleichsbericht." *(Panel-Korrektur: 233 = Planzahl in MANIFEST.md, kein
   Ergebnis; Logs zeigen Läufe mit Abgleich (reconcile-report.md) — die Copy
   behauptet kein Endergebnis mehr; „Drift" → „Abweichungen")*

### 3 · Methodik — „Was zählt wirklich?" (die 3D-Boxen, ZWEI Reihen)
**Copy:** „Die Frage, die mich durch die IT-Welt führte, wurde Methodik — vier
Disziplinen, mit denen ich KI-Systeme baue, die halten."
**Reihe 1 — die Disziplinen:**
1. **Prompt Engineering** — „Anweisungen, die ein Modell wirklich befolgt —
   präzise statt blumig."
2. **Context Engineering** — „Das richtige Wissen zur richtigen Zeit im Fenster —
   nicht alles auf einmal."
3. **Harness-Engineering** — „Der Rahmen, der Agenten ehrlich hält: Wächter,
   Gates, Messwerte."
4. **Skill Engineering** — „Wiederkehrendes Können als abrufbares Paket — der
   Agent lädt es genau dann, wenn die Aufgabe es braucht." *(Panel: Werbeformel
   „einmal…immer" ersetzt durch Bedienschritt)*
**Reihe 2 — Überleitung „Daraus entstehen:"** *(Panel: Plural)*
1. **Websites** — „Seiten, die eine Geschichte erzählen statt Kacheln zu stapeln
   — wie die Radtour-Story rund um einen E-Bike-Verleih." *(Framing: kein „für")*
2. **Apps** — „Werkzeuge mit Oberfläche: vom Diktat-Overlay bis zum drehbaren
   3D-Modell." *(Fakten: „begehbar" raus)*
3. **Funnels** — „Strecken, die aus Besuchern Anfragen machen — ein
   Funnel-Builder entsteht gerade als Prototyp." *(Ton: „komplett" raus)*
4. **Automations** — „Abläufe, die ohne Zuruf laufen: Ablage-Regeln, Agenten,
   Prüfschritte."

### 4 · Praxis — „Echte Probleme, echte Lösungen." [Owner-Wortlaut, F5]
**REGEL [Owner 02.09., bindend — v4.4 präzisiert]:** Kein Text darf ein
Auftrags- oder Bezahlverhältnis mit Dritten behaupten oder nahelegen
(Arbeitsamt-Risiko): keine „für [Betrieb]"-Konstruktionen, keine Ortsnamen,
die einen Betrieb identifizieren, kein „Kunde/Auftrag/beauftragt/bezahlt" in
diesem Sinn. Der Missions-„Auftrag" des Heros ist ausgenommen. Es werden
ausschließlich Prototyp-Screens gezeigt, nie Live-Seiten Dritter. Jede
Projektbeschreibung trägt nebensächlich — als letzten Satz — den
Prototyp-Vermerk.
**Copy (Brücke zur Methodik):** „Dieselbe Methodik an drei echten Problemen:
Räder vermieten an der Ostsee, Print-on-Demand verkaufen, Anfragen gewinnen.
Alles geprüft — jeder Scroll-Zustand per Screenshot, jede Zahl auf 0,00 Euro
genau in der GuV." *(Panel: Probleme als Tätigkeiten statt Betriebe; „bis auf"
hieß „außer")*
1. **WL Bike Rental** [5 Prototyp-Bilder] — „Scroll-Story rund um einen
   E-Bike-Verleih an der Ostsee: eine Radtour von Wald über Bodden bis Strand,
   jedes Angebot eine Station. Gebaut in Next.js, jeder Scroll-Zustand per
   Playwright-Screenshot verifiziert — der Stand: ein Prototyp." *(Framing:
   „für" und Ortsname Wusterhusen raus; belegt: README `npm run verify`)*
2. **Nordwind Studio** [1 Bild + Repo] — „Demo-Cockpit für Print-on-Demand auf
   Shopify: sieben KI-Agenten von Designfreigabe bis USt-Voranmeldung, im
   Browser durchklickbar ohne Server. 96 Belege treffen die GuV auf 0,00 Euro
   genau — der Stand: ein Prototyp." *(Framing: Demo vorn, kein „einen Shop";
   96/0,00 belegt in `demo/README.md`)*
3. **Funnel Desk** [4 Prototyp-Bilder in `public/projects/funnel-desk/`] —
   „Akquise-Trichter im Vergleich: mehrere Zielgruppen nebeneinander, dieselben
   sechs Stufen von Reichweite bis Bindung, Betreiber-Dashboard plus mobile
   Auslieferung. Gedacht im Verbund mit Social-Dashboard und CRM — der Stand:
   ein Prototyp." *(Framing: „Kundengruppen" → „Zielgruppen"; belegt: README
   „Funnel Desk v1", 6 Stufen, /dashboard + /f/[slug]; Verbund = Owner F7)*

### 5 · Keel — „Regeln statt Vertrauen."
**Copy (Brücke zur Methodik):** „Was zählt wirklich — in Code gegossen:
Disziplin, die erzwungen wird statt erhofft." *(Panel: Trias, „ohne Anmeldung"
und Install-Satz standen doppelt — bleiben allein in den Produktzeilen)*
1. **Keel Showcase** [3 Bilder + LIVE] — „Die Keel-Oberfläche zum Durchklicken:
   Website-Builder, Social Media, Commerce. Ohne Server, ohne Anmeldung — live
   auf keel-showcase.vercel.app." *(Module belegt: README-Tabelle)*
2. **Keel-Harness** [1 Bild + Repo] — „Ein Bausatz, der KI-Agenten diszipliniert
   arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Satz an den
   Agenten installiert ihn in jeden Projektordner." *(README: „Installiere
   diesen Harness.")*
3. **FlowVoice** [1 Bild] — „Diktat für Windows: Hotkey drücken, sprechen — der
   Text steht im aktiven Fenster. Vier Erkennungs-Engines zur Wahl, von komplett
   lokal bis Groq." *(belegt: 4 Dateien in `V3/engines/`)*

### 6 · Profil — „Muster erkennen. Systeme bauen."
**Arbeitsweise:** „Ich denke in Systemen, nicht in Einzelteilen — Muster aus
einem Bereich lösen Probleme im nächsten. Vertrieb, Verein, Verleih, Versand:
vier Welten, ein Handwerk." *(Panel-Einwand: Alliterations-Formel = Jingle
(Regel 5); Vorschlag: „…im nächsten — zuletzt in Vertrieb, Verein, Verleih und
Versand." → Owner-Entscheid, Zeile ist Owner-bestätigt [F6])*
**Zertifikate — ehrlich als „geplant" [v4.4, Fakten-Korrektur]:** „Vier
Nachweise sind geplant — hier stehen sie, sobald sie bestanden und online
prüfbar sind."
1. EU AI Act Essentials (KI-Campus) — geplant
2. SC-900 Security Fundamentals (Microsoft) — geplant
3. ENISA-Grundlagen (EU Academy) — geplant
4. Cybersecurity Fundamentals (IBM) — geplant
*(Panel: `zertifikate.md` sagt „noch kein Zertifikat gestartet" — „laufend"
wäre unwahr. Sobald der Owner eingeschrieben ist, wird das Label „laufend";
beim Bestehen Link auf das Nachweis-PDF.)*
**Für wen:** „Für Teams, die kein Konzeptpapier brauchen, sondern ein laufendes
System. Ich komme aus dem Vertrieb, also rede ich in Ergebnissen — Details im
Lebenslauf, Code auf GitHub." + CV-Download.

### 7 · Abschluss — „Auf ein Gespräch." (der Kreis schließt sich)
**Copy:** „Wege zu deinem Ziel gibt es viele — reden wir über deinen. LinkedIn,
GitHub coastcoder439, oder der Lebenslauf als PDF."

## Was bleibt, was fliegt (unverändert)

1. BLEIBT: Spotlight, Punktraster, GSAP/Framer-Reveals, Glanz-Typografie,
   Dark/Light, Preloader-Moment, die 3D-Boxen (zwei Reihen).
2. RAUS: Emoji-Hero, alle drei Slider, doppelte StatsSection,
   Follow-Cursor-Spielereien, jeder austauschbare Text.

## Technik + Schnellspur (unverändert)

1. Basis `neubau/app` (Next.js 16); chirurgischer Umbau; Inhalte aus Daten-Dateien.
2. Feste Nav ab Sekunde 1 · Skip-Link · `prefers-reduced-motion`-Fallback.

## Fakten-Checkliste — BEANTWORTET [Owner 02.09.2026]

1. **F1 Hero (Mitgründung):** bestätigt.
2. **F2 Oasis:** Herzensprojekt, ursprünglich vom Owner entwickelt, heute vom
   Team weiterentwickelt — nicht überbetonen.
3. **F3 Team-Formel:** „von mir entwickelt, heute vom Team weitergetragen".
4. **F4 CRM + Drive:** allein gebaut; CRM mit Hilfe des Praktikanten Sumit Mor
   (Name nur hier, nicht in der Seiten-Copy).
5. **F5 Praxis:** NIE Auftrags-/Bezahlverhältnis nahelegen; nur
   Prototyp-Screens; Prototyp-Vermerk nebensächlich; Sektion heißt „Echte
   Probleme, echte Lösungen."
6. **F6 Profil:** beide Aussagen bestätigt.
7. **F7 Funnels:** Funnel Desk ist reales Projekt in Planung (Verbund mit
   Social-Dashboard + CRM), Showcase vorhanden — drittes Projekt in Abschnitt 4.

## Panel-Funde, die Owner-entschiedene Zeilen berühren (Owner-Entscheid)

1. **Hero-Subline** sprachlich dreiteilen (Panel-Vorschlag oben) — oder so
   lassen, wie entschieden?
2. **Profil-Formel** „vier Welten, ein Handwerk" behalten — oder Panel-Fassung
   „…zuletzt in Vertrieb, Verein, Verleih und Versand"?
3. **Zertifikate:** „geplant" ist der ehrliche Stand — akzeptieren, oder erst
   einschreiben und dann „laufend" schreiben?

## Offene Owner-Fragen (unverändert)

1. **E-Mail** im Abschluss — oder nur LinkedIn/GitHub/CV (aktueller Stand)?
2. **Private Repos** (oasis, wee-crm, voiceai, wl-bikerental): öffentlich stellen
   oder ohne Repo-Link zeigen?

## Abnahme

1. Owner-Gesamt-OK zu v4.4 + Entscheid zu den drei Panel-Punkten.
2. Bau in Abschnitten 1→7; je Abschnitt Live-Abnahme im Browser + Screenshot
   hell/dunkel.
3. Kritiker-Gauntlet vor Ship: jede Zeile gegen Ton-Kontrakt, Story-Faden,
   Framing-Regel und Belege; Zertifikate gegen `zertifikate.md`.
