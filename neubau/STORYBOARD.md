# Storyboard v4.5 — Klare Kante (Portfolio-Neubau)

> Gate-Dokument. Historie: v1 Tauchfahrt (verworfen) · v2 Nord-Ton · v3
> Owner-Input · v4 Chronologie · v4.1 Doppel-Boxen · v4.2 Fakten · v4.3
> Owner-Antworten · v4.4 Kritiker-Panel (git: 81079a9).
> **v4.5 — Abgleich aller Owner-Nachrichten gegen das Dokument [Owner-Rüge
> 02.09.: „meine Nachrichten, die du nicht richtig liest"].** Abweichungen
> behoben: die 3D-Box-Erklärungen tragen jetzt die Owner-Erklärungen
> (holistische Sichtweise · Mustererkennung · Bezüge zu realen Praxis- und
> Tätigkeitsbereichen) statt Lexikon-Definitionen; Profil ohne erfundene
> Alliteration; Subline = Owner-Text; Zertifikate „laufend" (Owner-Entscheid);
> Herzensprojekt/Team-Sätze raus (Hintergrund, keine Copy). NEU: Sektion
> „Abgleich Owner-Anweisungen" — jede Anweisung wörtlich, mit Stelle und Status.

## Das Konzept in drei Sätzen

**Problem:** Die Vorversion hat Motion und Qualität, aber einen verspielten
Header, generische Texte, drei Slider und keinen Ablauf. **Intent:** Eine Seite,
die EINE Geschichte erzählt — NGO-Mitgründung, die Frage „Was zählt wirklich?",
daraus eine Methodik, ihre Beweise — im Ton der alten Seite und von WL Bike
Rental: knapp, direkt, norddeutsch. Es geht um Coding. **Goal:** Jeder Satz
führt auf eine Owner-Anweisung oder einen belegten Fakt zurück; jedes Produkt
kommt genau einmal; kein Slider.

## Der Hero — ENTSCHIEDEN [Owner 02.09.]

**Headline:** „**Technik mit Auftrag.**"
**Subline [Owner-Text 02.09.]:** „Die Mitgründung einer NGO brachte mich zum
KI-Systembau. Durch die IT-Welt begleitete mich eine Frage: Was zählt wirklich?
Heute ist aus diesem holistischen Gedanken mehr als nur eine Methodik geworden
— deinen Weg finden und ihn gemeinsam gehen."
**Bild:** Headline raumhoch in Glanz-Typografie, ruhiger Lichtstreif; dahinter
abgedunkelt das drehende Gewächshaus-Modell aus dem Oasis-Projekt.
**Begriffs-Logik [Owner]:** „Technik" bleibt oben (breit — auch
Landwirtschaftssysteme); „KI-Systembau" und „IT-Welt" in der Subline;
„Auftrag" im Hero meint die Mission — von der Praxis-Regel ausgenommen.

## Der Ton-Kontrakt (unverändert)

1. Ein Gedanke pro Satz; Zwei-Wort-Sätze tragen Überschriften.
2. Haltung über Kontrast, nie über Selbstlob.
3. Bedienschritte und Ergebnisse statt Eigenschaftswörter.
4. Zahlen tragen das Versprechen, ehrliche Einschränkung daneben.
5. Verboten: Emojis, Superlative, Denglisch, Ausrufezeichen, Konjunktiv-Watte,
   Wortspiel-Jingles — und jede Zeile ohne Rückführung auf Owner-Anweisung
   oder Beleg.

## Der Ablauf — sieben Abschnitte, als Chronologie der Geschichte

### 1 · Hero — die These
Hero wie oben. Feste Nav ab Sekunde 1: Start · Ursprung · Methodik · Praxis ·
Profil · Kontakt · CV-Button. Preloader unter 1,5 s mit „Technik mit Auftrag."
statt „Hallo".

### 2 · Ursprung — „Kein Auftrag. Ein Antrieb."
**Copy:** „World Eden Era ist die gemeinnützige UG, die ich mitgegründet habe —
nachhaltige Ernährung durch Aquaponik. Dieser Antrieb brachte mich zum
Systembau. Die ersten Systeme entstanden direkt für sie."
*(Hintergrund, NICHT Copy [Owner 02.09.]: Oasis ursprünglich vom Owner
entwickelt, heute vom Team weiterentwickelt; CRM mit Hilfe des Praktikanten
Sumit Mor; Drive allein. Die Seite zeigt Coding, nicht Verhältnisse.)*
1. **Oasis** [2 Bilder + Präsentation LIVE] — „Die Aquaponik-Oase als drehbares
   3D-Modell im Browser — 272 MB aus Blender — plus eine Simulation, die Wetter
   und Klima in Ertrag und Kosten einrechnet. Die 3D-Präsentation dazu läuft
   live auf world-eden-era.org." *(Belege: glb 285.729.896 Bytes; OrbitControls;
   simulation.js „Wetter & Klima"; /project-oasis/ live)*
2. **WEE CRM** [ehrlich ohne Bild] — „Fundraising-CRM der gUG, im Aufbau:
   Kontakte, Spenden, CSV-Import, Audit-Log auf React 19 und Supabase. Kein
   Screenshot — der Stand ist ein getesteter Prototyp." *(RLS in
   `supabase/migrations/` implementiert, lokal getestet, remote nicht
   abgenommen — daher nicht beworben)*
3. **Drive-Automatisierung** [ehrlich als Text] — „Der Vereins-Drive gehorcht
   einer YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln
   und meldet Abweichungen — 233 Dateien im Migrationsplan, jeder Lauf mit
   Abgleichsbericht." *(MANIFEST.md copy:233; reconcile-report.md)*

### 3 · Methodik — „Was zählt wirklich?" (die 3D-Boxen, ZWEI Reihen)
**Copy:** „Die Frage, die mich durch die IT-Welt begleitete, wurde Methodik —
vier Disziplinen, mit denen ich KI-Systeme baue, die halten."
**Reihe 1 — die Disziplinen. Box-Erklärungen tragen die Owner-Vorgaben
(holistische Sichtweise · Mustererkennung · Bezüge zu vielen realen Praxis-
und Tätigkeitsbereichen) [Owner-Anweisung 01.09., in v4.5 endlich umgesetzt]:**
1. **Prompt Engineering** — „Ein Prompt ist ein Muster, kein Zauberspruch:
   einmal erkannt, lässt es sich von einem Anwendungsfall auf den nächsten
   übertragen."
2. **Context Engineering** — „Erst das Ganze sehen, dann das Fenster füllen:
   Welches Wissen die Aufgabe braucht, entscheidet der Blick auf den kompletten
   Ablauf."
3. **Harness-Engineering** — „Regeln, die im Code stehen, gelten in jedem
   Projekt gleich — Wächter, Gates, Messwerte halten Agenten ehrlich, egal in
   welchem Tätigkeitsfeld."
4. **Skill Engineering** — „Was sich in einem Bereich bewährt hat, wird
   abrufbares Können für den nächsten — Praxis aus vielen Tätigkeitsfeldern,
   geladen, wenn die Aufgabe es braucht."
**Reihe 2 — Überleitung „Daraus entstehen:" [Owner-Anweisung: „4 sachen wie
website, apps, funnel, automations um zu zeigen was aus den 4 disziplinen
entsteht"]:**
1. **Websites** — „Seiten, die eine Geschichte erzählen statt Kacheln zu stapeln
   — wie die Radtour-Story rund um einen E-Bike-Verleih."
2. **Apps** — „Werkzeuge mit Oberfläche: vom Diktat-Overlay bis zum drehbaren
   3D-Modell."
3. **Funnels** — „Strecken, die aus Besuchern Anfragen machen — ein
   Funnel-Builder entsteht gerade als Prototyp."
4. **Automations** — „Abläufe, die ohne Zuruf laufen: Ablage-Regeln, Agenten,
   Prüfschritte."

### 4 · Praxis — „Echte Probleme, echte Lösungen." [Owner-Wortlaut]
**REGEL [Owner 02.09., bindend]:** Kein Text darf ein Auftrags- oder
Bezahlverhältnis mit Dritten behaupten oder nahelegen (Arbeitsamt-Risiko):
keine „für [Betrieb]"-Konstruktionen, keine identifizierenden Ortsnamen, kein
„Kunde/Auftrag/beauftragt/bezahlt" in diesem Sinn. Nur Prototyp-Screens, nie
Live-Seiten Dritter. Prototyp-Vermerk nebensächlich als letzter Satz.
**Copy:** „Dieselbe Methodik an drei echten Problemen: Räder vermieten an der
Ostsee, Print-on-Demand verkaufen, Anfragen gewinnen. Alles geprüft — jeder
Scroll-Zustand per Screenshot, jede Zahl auf 0,00 Euro genau in der GuV."
1. **WL Bike Rental** [5 Prototyp-Bilder] — „Scroll-Story rund um einen
   E-Bike-Verleih an der Ostsee: eine Radtour von Wald über Bodden bis Strand,
   jedes Angebot eine Station. Gebaut in Next.js, jeder Scroll-Zustand per
   Playwright-Screenshot verifiziert — der Stand: ein Prototyp."
2. **Nordwind Studio** [1 Bild + Repo] — „Demo-Cockpit für Print-on-Demand auf
   Shopify: sieben KI-Agenten von Designfreigabe bis USt-Voranmeldung, im
   Browser durchklickbar ohne Server. 96 Belege treffen die GuV auf 0,00 Euro
   genau — der Stand: ein Prototyp."
3. **Funnel Desk** [4 Prototyp-Bilder, `public/projects/funnel-desk/`] —
   „Akquise-Trichter im Vergleich: mehrere Zielgruppen nebeneinander, dieselben
   sechs Stufen von Reichweite bis Bindung, Betreiber-Dashboard plus mobile
   Auslieferung. Gedacht im Verbund mit Social-Dashboard und CRM — der Stand:
   ein Prototyp."

### 5 · Keel — „Regeln statt Vertrauen."
**Copy:** „Was zählt wirklich — in Code gegossen: Disziplin, die erzwungen wird
statt erhofft." *(Owner 02.09.: „den Widerspruch weg find ich gut")*
1. **Keel Showcase** [3 Bilder + LIVE] — „Die Keel-Oberfläche zum Durchklicken:
   Website-Builder, Social Media, Commerce. Ohne Server, ohne Anmeldung — live
   auf keel-showcase.vercel.app."
2. **Keel-Harness** [1 Bild + Repo] — „Ein Bausatz, der KI-Agenten diszipliniert
   arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Satz an den
   Agenten installiert ihn in jeden Projektordner."
3. **FlowVoice** [1 Bild] — „Diktat für Windows: Hotkey drücken, sprechen — der
   Text steht im aktiven Fenster. Vier Erkennungs-Engines zur Wahl, von komplett
   lokal bis Groq."

### 6 · Profil — „Muster erkennen. Systeme bauen."
**Arbeitsweise [nur Owner-Begriffe, keine Erfindung]:** „Ich sehe das Ganze,
nicht das Einzelteil: Muster erkennen und in viele reale Praxis- und
Tätigkeitsbereiche übertragen."
**Zertifikate — „laufend" [Owner-Entscheid 01.09., unverändert gültig]:** „Vier
Nachweise laufen — hier stehen sie, sobald sie bestanden und online prüfbar
sind."
1. EU AI Act Essentials (KI-Campus) — laufend
2. SC-900 Security Fundamentals (Microsoft) — laufend
3. ENISA-Grundlagen (EU Academy) — laufend
4. Cybersecurity Fundamentals (IBM) — laufend
*(Beim Bestehen: Label „bestanden" + Link auf das Nachweis-PDF.)*
**Für wen:** „Für Teams, die kein Konzeptpapier brauchen, sondern ein laufendes
System. Ich komme aus dem Vertrieb, also rede ich in Ergebnissen — Details im
Lebenslauf, Code auf GitHub." + CV-Download.

### 7 · Abschluss — „Auf ein Gespräch."
**Copy:** „Wege zu deinem Ziel gibt es viele — reden wir über deinen. LinkedIn,
GitHub coastcoder439, oder der Lebenslauf als PDF."

## Was bleibt, was fliegt

1. BLEIBT: Spotlight, Punktraster, GSAP/Framer-Reveals, Glanz-Typografie,
   Dark/Light, Preloader-Moment, die 3D-Boxen (zwei Reihen).
2. RAUS: Emoji-Hero, alle drei Slider, doppelte StatsSection,
   Follow-Cursor-Spielereien, jeder Satz ohne Rückführung.

## Technik + Schnellspur (unverändert)

1. Basis `neubau/app` (Next.js 16); chirurgischer Umbau; Inhalte aus Daten-Dateien.
2. Feste Nav ab Sekunde 1 · Skip-Link · `prefers-reduced-motion`-Fallback.

## Abgleich Owner-Anweisungen (wörtlich aus dem Chat) → Stelle → Status

1. „ich mag die Motion Elemente und das Psychology Feeling … aber ich mag den
   Header nicht, der ist zu verspielt und viel zu viel Text" → Bleibt/Fliegt →
   UMGESETZT.
2. „viel zu viele und schlechte Texte … knackiger, direkter Ton, so wie man im
   Norden spricht (alte Seite, WL Bike Rental)" → Ton-Kontrakt → UMGESETZT.
3. „3 mal projektslider … die projektslider selber finde ich kacke … kein
   klarer ablauf" → Ablauf 1–7, Slider raus → UMGESETZT.
4. „lass mal den strudel wieder raus" → v2 → UMGESETZT.
5. „Technik mit Auftrag gefällt mir besser beim hero … deine sind generisch,
   haben keine seele" → Hero-Headline → UMGESETZT.
6. „wege zu deinem ziel gibt es viele, ich finde den richtigen für dich und
   gehe ihn gemeinsam mit dir. das erzählt geschichte!" → Subline-Ende +
   Abschluss → UMGESETZT.
7. „ich will bei diesen 3d boxen dass von prompt engineering, context
   engineering, harness-engineering, skill engineering geredet wird" → Reihe 1
   → UMGESETZT.
8. „meine holistische sichtweise auf die dinge, die fähigkeit der
   mustererkennung, bezügen zu vielen realen praxis und tätigkeitsbereichen"
   → Box-Erklärungen Reihe 1 + Profil-Zeile → in v4.5 KORRIGIERT (vorher
   Lexikon-Texte + erfundene vier-V-Alliteration).
9. „ich will das meine 4 zertifikate aus dem karriere projekt genannt werden"
   + Entscheid „Ehrlich als laufend" → Profil → UMGESETZT (v4.4 hatte
   eigenmächtig „geplant" — zurückgenommen).
10. „nicht vertrieb, das ja beruf, sondern ich kam übers ngo gründertum dazu und
    dann was zählt wirklich. daraus wurde eine methodik" → Subline → UMGESETZT.
11. „technik passt als heading … drunter wäre es doppelt … KI-Systembau … IT
    Welt dazunehmen" → Subline → UMGESETZT.
12. „3d boxen gab es zwei mal im template … einmal die 4 disziplinen und dann
    nochmal 4 sachen wie website, apps, funnel, automations" → Reihe 2 →
    UMGESETZT.
13. „ich habe nicht selber WEE gegründet, ich habe das mitgegründet" → Hero +
    Ursprung → UMGESETZT.
14. „Disziplin steckt im Code und nicht im Prompt — sprechen wir nicht über
    Prompt und Context Engineering?" → Keel-Copy → UMGESETZT (Widerspruch weg,
    Owner: „find ich gut").
15. „WL Bike auf keinen Fall bezahlter Auftrag … nur Prototypseiten … echte
    Probleme, echte Lösungen … Prototyp nebensächlich vermerkt" → Sektion 4 +
    Regel → UMGESETZT.
16. „kompletter Funnelbuilder verbunden mit Social Media Dashboard und CRM, in
    Planung, Showcase vorhanden, genauso wie WL Bike und Nordwind" → Sektion 4
    Projekt 3 + Ergebnisbox → UMGESETZT.
17. „CRM und Drive allein gebaut, CRM mit Praktikant (Sumit Mor); Oasis
    ursprünglich von mir, heute vom Team" → Hintergrund, NICHT Copy („Es geht
    hier um Coding pur") → in v4.5 aus der Copy ENTFERNT.
18. Subline-Text 02.09. („Durch die IT-Welt begleitete mich eine Frage … mehr
    als nur eine Methodik geworden") → Hero → UMGESETZT.
19. „Vertrieb, Verein, Verleih, Versand? Nein. Das hab ich nie gesagt." →
    Profil → ENTFERNT.

## Offene Owner-Fragen — die einzigen zwei, zu denen im Chat nichts steht

1. **E-Mail** im Abschluss — oder nur LinkedIn/GitHub/CV (aktueller Stand)?
2. **Private Repos** (oasis, wee-crm, voiceai, wl-bikerental): öffentlich stellen
   oder ohne Repo-Link zeigen?

## Abnahme

1. Owner-Gesamt-OK zu v4.5.
2. Bau in Abschnitten 1→7; je Abschnitt Live-Abnahme im Browser + Screenshot
   hell/dunkel.
3. Vor Ship: Kritiker-Panel über die gebaute Seite (Fakten, Ton, Framing) +
   Abgleich jeder Zeile gegen diese Tabelle.
