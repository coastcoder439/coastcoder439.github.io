# Storyboard v4 — Klare Kante (Portfolio-Neubau)

> Gate-Dokument, ersetzt v3 (git: 099fb8a). Hero ist ENTSCHIEDEN [Owner
> 02.09.2026]. Neu in v4: Die ganze Seite erzählt die eine Geschichte des Heros —
> Auftrag (NGO) → durch die IT-Welt mit der Frage „Was zählt wirklich?" →
> daraus eine Methodik → ihre Beweise → für dich. Reihenfolge, Sektions-Brücken
> und Abschluss sind darauf neu geschrieben.
> v4.1 [Owner 02.09.]: zweite 3D-Boxen-Reihe in der Methodik (was aus den vier
> Disziplinen ENTSTEHT: Websites · Apps · Funnels · Automations — das Template
> trug die Boxen ohnehin zweimal); zwei beim v4-Umbau verlorene v3-Sätze
> zurückgeholt.
> v4.2 [Owner-Rüge 02.09.: „Aussagen nicht an der Realität geprüft"] —
> Fakten-Korrektur: Mitgründung statt Alleingründung; CRM-RLS war nur Konzept
> (raus), CRM ehrlich als getesteter Prototyp; Nordwind ehrlich als Demo;
> Harness-Install ist ein Satz an den Agenten, kein Befehl; Keel-Satz ohne
> Prompt-Widerspruch („erzwungen statt erhofft"); FlowVoice „vier Engines"
> präzisiert. Belegt: 233 (MANIFEST.md), 96/0,00 € (demo/README.md), 272-MB-glb
> (285.729.896 Bytes), Playwright-verify (README), Showcase-Module (README),
> React 19 (package.json), 4 Engine-Dateien (V3/engines/). NEU: Sektion
> Fakten-Checkliste — biografische Aussagen bestätigt nur der Owner.
> v4.3 [Owner-Antworten 02.09., F1–F7 beantwortet]: Sektion 4 heißt „Echte
> Probleme, echte Lösungen." — NIE „bezahlt/beauftragt" (Arbeitsamt-Risiko),
> nur Prototyp-Screens, Prototyp-Vermerk nebensächlich; Funnel Desk wird
> drittes Projekt (Showcase verifiziert: docs/screenshots, README 6 Stufen);
> Oasis = Herzensprojekt, ursprünglich vom Owner, heute vom Team
> weiterentwickelt; CRM/Drive allein (CRM mit Praktikant Sumit Mor).

## Das Konzept in drei Sätzen

**Problem:** Die bisherigen Fassungen hatten gute Einzelteile, aber keinen roten
Faden — die Sektionen standen nebeneinander statt aufeinander. **Intent:** Die
Seite erzählt EINE Geschichte, chronologisch und belegt: vom NGO-Auftrag über die
Filter-Frage zur Methodik, von den ersten eigenen Systemen zu Kundenarbeit und
eigenem Produkt. **Goal:** Jeder Abschnitt schließt erkennbar an die Frage „Was
zählt wirklich?" an, jedes Produkt kommt genau einmal, jeder Satz trägt Haltung
oder einen Fakt.

## Der Hero — ENTSCHIEDEN [Owner 02.09.]

**Headline:** „**Technik mit Auftrag.**"
**Subline:** „Die Mitgründung einer NGO brachte mich zum KI-Systembau, eine Frage
durch die IT-Welt: Was zählt wirklich? Heute ist das meine Methodik — deinen Weg
finden und ihn gemeinsam gehen."
**Bild:** Headline raumhoch in Glanz-Typografie, ruhiger Lichtstreif; dahinter
abgedunkelt das drehende Gewächshaus-Modell aus dem Oasis Simulator (der Auftrag
ist im Bild von Sekunde 1 sichtbar).
**Begriffs-Logik [Owner]:** „Technik" bleibt in der Headline (breit — auch
Landwirtschaftssysteme), die Subline präzisiert auf „KI-Systembau"; „IT-Welt" ist
der Ort der Überwältigung, nicht ein zweites Ziel.

## Der Ton-Kontrakt (unverändert)

1. Ein Gedanke pro Satz; Zwei-Wort-Sätze tragen Überschriften.
2. Haltung über Kontrast, nie über Selbstlob.
3. Bedienschritte und Ergebnisse statt Eigenschaftswörter.
4. Zahlen tragen das Versprechen, ehrliche Einschränkung daneben.
5. Verboten: Emojis, Superlative, Denglisch, Ausrufezeichen, Konjunktiv-Watte,
   Wortspiel-Jingles.

## Der Ablauf — sieben Abschnitte, jetzt als Chronologie der Geschichte

### 1 · Hero — die These
Hero wie oben. Feste Nav ab Sekunde 1: Start · Ursprung · Methodik · Arbeiten ·
Profil · Kontakt · CV-Button. Preloader unter 1,5 s mit „Technik mit Auftrag."
statt „Hallo".

### 2 · Ursprung — „Kein Auftrag. Ein Antrieb." (WEE = wo alles begann)
**Copy:** „World Eden Era ist die gemeinnützige UG, die ich mitgegründet habe —
nachhaltige Ernährung durch Aquaponik, und der Auftrag, der mich zum Systembau
brachte. Die ersten Systeme entstanden direkt für sie — von mir entwickelt,
heute vom Team weitergetragen." *(F3/F4 beantwortet: deckt Oasis
[Team entwickelt weiter], CRM [Hilfe von Praktikant Sumit Mor] und Drive
[allein] ehrlich ab; Namen bleiben aus der Seiten-Copy draußen)*
1. **Oasis Simulator** [2 Bilder + LIVE] — „Mein Herzensprojekt: die
   Aquaponik-Oase als begehbare 3D-Simulation im Browser, mit Wetter-Layer.
   Das Gewächshaus kommt als 272-MB-Modell aus Blender — live auf
   world-eden-era.org." *(F2: ursprünglich vom Owner entwickelt; Oasis nicht
   überbetonen [Owner])*
2. **WEE CRM** [ehrlich ohne Bild] — „Fundraising-CRM der gUG, im Aufbau:
   Kontakte, Spenden, CSV-Import, Audit-Log auf React 19 und Supabase. Kein
   Screenshot — der Stand ist ein getesteter Prototyp."
   *(Korrektur v4.2: Row-Level-Security war laut `docs/briefing.md` nur Konzept)*
3. **Drive-Automatisierung** [ehrlich als Text] — „Der Vereins-Drive gehorcht
   einer YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln und
   meldet Drift — 233 Dateien nach Plan migriert."

### 3 · Methodik — „Was zählt wirklich?" (die 3D-Boxen, ZWEI Reihen)
**Copy:** „Die Frage, die mich durch die IT-Welt führte, wurde Methodik — vier
Disziplinen, mit denen ich KI-Systeme baue, die halten."
**Reihe 1 — die Disziplinen** (Kernfokus-Element der Vorversion):
1. **Prompt Engineering** — „Anweisungen, die ein Modell wirklich befolgt —
   präzise statt blumig."
2. **Context Engineering** — „Das richtige Wissen zur richtigen Zeit im Fenster —
   nicht alles auf einmal."
3. **Harness-Engineering** — „Der Rahmen, der Agenten ehrlich hält: Wächter,
   Gates, Messwerte."
4. **Skill Engineering** — „Wiederkehrendes Können als abrufbares Paket — einmal
   sauber gebaut, immer verfügbar."
**Reihe 2 — was daraus entsteht** (zweites Boxen-Element des Templates;
Überleitung: „Daraus entsteht:"):
1. **Websites** — „Seiten, die eine Geschichte erzählen statt Kacheln zu stapeln
   — wie die Radtour für den E-Bike-Verleih."
2. **Apps** — „Werkzeuge mit Oberfläche: vom Diktat-Overlay bis zur begehbaren
   3D-Simulation."
3. **Funnels** — „Strecken, die aus Besuchern Anfragen machen — ein kompletter
   Funnel-Builder entsteht gerade als Prototyp." *(F7: Beleg = Funnel Desk,
   Abschnitt 4)*
4. **Automations** — „Abläufe, die ohne Zuruf laufen: Ablage-Regeln, Agenten,
   Prüfschritte."

### 4 · Praxis — „Echte Probleme, echte Lösungen." [Owner-Wortlaut, F5]
**REGEL [Owner 02.09., bindend]:** Nirgends „bezahlt", „Auftrag" oder
Auftrags-Implikation (Arbeitsamt-Risiko). Es werden ausschließlich
Prototyp-Screens gezeigt, nie Kunden-Live-Seiten. Jede Projektbeschreibung
trägt nebensächlich — als letzten Satz — den Prototyp-Vermerk.
**Copy (Brücke zur Methodik):** „Dieselbe Methodik an drei echten Problemen:
ein E-Bike-Verleih an der Ostsee, ein Print-on-Demand-Shop, ein
Akquise-Trichter. Alles geprüft — jeder Scroll-Zustand per Screenshot, jede
Zahl bis auf 0,00 Euro in der GuV."
1. **WL Bike Rental** [5 Prototyp-Bilder] — „Scroll-Story für einen
   E-Bike-Verleih in Wusterhusen: eine Radtour von Wald über Bodden bis Strand,
   jedes Angebot eine Station. Gebaut in Next.js, jeder Scroll-Zustand per
   Playwright-Screenshot verifiziert — der Stand: ein Prototyp." *(belegt:
   README `npm run verify`)*
2. **Nordwind Studio** [1 Bild + Repo] — „Cockpit für einen
   Print-on-Demand-Shop auf Shopify: sieben KI-Agenten von Designfreigabe bis
   USt-Voranmeldung, im Browser durchklickbar ohne Server. 96 Belege treffen
   die GuV auf 0,00 Euro genau — der Stand: ein Prototyp." *(96/0,00 belegt in
   `demo/README.md`)*
3. **Funnel Desk** [4 Prototyp-Bilder, `keel-plugin-funnel-desk/docs/screenshots/`
   → nach `public/projects/funnel-desk/` kopieren] — „Akquise-Trichter im
   Vergleich: mehrere Kundengruppen nebeneinander, dieselben sechs Stufen von
   Reichweite bis Bindung, Betreiber-Dashboard plus mobile Auslieferung.
   Gedacht im Verbund mit Social-Dashboard und CRM — der Stand: ein Prototyp."
   *(belegt: README „Funnel Desk v1", 6 Stufen, /dashboard + /f/[slug];
   Verbund-Planung = Owner-Aussage F7)*

### 5 · Keel — „Regeln statt Vertrauen."
**Copy (Brücke zur Methodik):** „Was zählt wirklich — in Code gegossen:
Wächter-Hooks, Dauer-Regeln und ein eigenes Mess-Dashboard; Disziplin, die
erzwungen wird statt erhofft. Die Oberfläche lässt sich ohne Anmeldung
durchklicken, der Bausatz zieht mit einem Satz an den Agenten ein."
*(Korrektur v4.2: kein Widerspruch mehr zu Prompt/Context Engineering als
Disziplinen; Install-Behauptung an README angepasst)*
1. **Keel Showcase** [3 Bilder + LIVE] — „Die Keel-Oberfläche zum Durchklicken:
   Website-Builder, Social Media, Commerce. Ohne Server, ohne Anmeldung — live
   auf keel-showcase.vercel.app." *(Module belegt: README-Tabelle)*
2. **Keel-Harness** [1 Bild + Repo] — „Ein Bausatz, der KI-Agenten diszipliniert
   arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Satz an den
   Agenten installiert ihn in jeden Projektordner." *(Korrektur v4.2: README
   sagt „schreib dazu: Installiere diesen Harness." — kein Befehl)*
3. **FlowVoice** [1 Bild] — „Diktat für Windows: Hotkey drücken, sprechen — der
   Text steht im aktiven Fenster. Vier Erkennungs-Engines zur Wahl, von komplett
   lokal bis Groq." *(belegt: 4 Dateien in `V3/engines/`)*

### 6 · Profil — „Muster erkennen. Systeme bauen."
**Arbeitsweise (v3-Kern zurückgeholt):** „Ich denke in Systemen, nicht in
Einzelteilen — Muster aus einem Bereich lösen Probleme im nächsten. Vertrieb,
Verein, Verleih, Versand: vier Welten, ein Handwerk."
**Zertifikate — ehrlich als „laufend":** „Vier Nachweise sind in Arbeit — hier
stehen sie, sobald sie bestanden und online prüfbar sind."
1. EU AI Act Essentials (KI-Campus) — laufend
2. SC-900 Security Fundamentals (Microsoft) — laufend
3. ENISA-Grundlagen (EU Academy) — laufend
4. Cybersecurity Fundamentals (IBM) — laufend
**Für wen:** „Für Teams, die kein Konzeptpapier brauchen, sondern ein laufendes
System. Ich komme aus dem Vertrieb, also rede ich in Ergebnissen — Details im
Lebenslauf, Code auf GitHub." + CV-Download.

### 7 · Abschluss — „Auf ein Gespräch." (der Kreis schließt sich)
**Copy (der Wege-Satz kehrt zurück):** „Wege zu deinem Ziel gibt es viele — reden
wir über deinen. LinkedIn, GitHub coastcoder439, oder der Lebenslauf als PDF."

## Was bleibt, was fliegt (unverändert v3)

1. BLEIBT: Spotlight, Punktraster, GSAP/Framer-Reveals, Glanz-Typografie,
   Dark/Light, Preloader-Moment, die 3D-Boxen.
2. RAUS: Emoji-Hero, alle drei Slider, doppelte StatsSection,
   Follow-Cursor-Spielereien, jeder austauschbare Text.

## Technik + Schnellspur (unverändert)

1. Basis `neubau/app` (Next.js 16); chirurgischer Umbau; Inhalte aus Daten-Dateien.
2. Feste Nav ab Sekunde 1 · Skip-Link · `prefers-reduced-motion`-Fallback.

## Fakten-Checkliste — BEANTWORTET [Owner 02.09.2026]

1. **F1 Hero (Mitgründung):** bestätigt.
2. **F2 Oasis:** Herzensprojekt, ursprünglich vom Owner entwickelt, heute vom
   Team weiterentwickelt — Produktzeile sagt „Mein Herzensprojekt", die
   Team-Weiterentwicklung trägt die Sektions-Copy. Nicht überbetonen.
3. **F3 Team-Formel:** „von mir entwickelt, heute vom Team weitergetragen".
4. **F4 CRM + Drive:** allein gebaut; CRM mit Hilfe des Praktikanten Sumit Mor
   (Name nur hier, nicht in der Seiten-Copy).
5. **F5 Kundenlage:** NIE „bezahlt/beauftragt" (Arbeitsamt-Risiko); nur
   Prototyp-Screens; Prototyp-Vermerk nebensächlich; Sektion heißt „Echte
   Probleme, echte Lösungen."
6. **F6 Profil:** beide Aussagen bestätigt.
7. **F7 Funnels:** Funnel Desk ist reales Projekt in Planung (Verbund mit
   Social-Dashboard + CRM), Showcase vorhanden — wird drittes Projekt in
   Abschnitt 4, Ergebnisbox damit belegt.

## Offene Owner-Fragen (unverändert)

1. **E-Mail** im Abschluss — oder nur LinkedIn/GitHub/CV (aktueller Stand)?
2. **Private Repos** (oasis, wee-crm, voiceai, wl-bikerental): öffentlich stellen
   oder ohne Repo-Link zeigen?

## Abnahme

1. Owner-Gesamt-OK zu v4 (Hero ist entschieden; offen: Ablauf + Texte).
2. Bau in Abschnitten 1→7; je Abschnitt Live-Abnahme im Browser + Screenshot
   hell/dunkel.
3. Kritiker-Gauntlet vor Ship: jede Zeile gegen Ton-Kontrakt, Story-Faden und
   alte Live-Seite; Zertifikate gegen `zertifikate.md` ([]-Status = „laufend").
