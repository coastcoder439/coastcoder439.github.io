# Storyboard v4 — Klare Kante (Portfolio-Neubau)

> Gate-Dokument, ersetzt v3 (git: 099fb8a). Hero ist ENTSCHIEDEN [Owner
> 02.09.2026]. Neu in v4: Die ganze Seite erzählt die eine Geschichte des Heros —
> Auftrag (NGO) → durch die IT-Welt mit der Frage „Was zählt wirklich?" →
> daraus eine Methodik → ihre Beweise → für dich. Reihenfolge, Sektions-Brücken
> und Abschluss sind darauf neu geschrieben.

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
**Subline:** „Eine NGO-Gründung brachte mich zum KI-Systembau, eine Frage durch
die IT-Welt: Was zählt wirklich? Heute ist das meine Methodik — deinen Weg finden
und ihn gemeinsam gehen."
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
**Copy:** „World Eden Era ist meine gemeinnützige UG für nachhaltige Ernährung
durch Aquaponik — die Gründung, die mich zum Systembau brachte. Die ersten drei
Systeme entstanden direkt für sie."
1. **Oasis Simulator** [2 Bilder + LIVE] — „Die Aquaponik-Oase als begehbare
   3D-Simulation im Browser, mit Wetter-Layer. Das Gewächshaus kommt als
   272-MB-Modell aus Blender — live auf world-eden-era.org."
2. **WEE CRM** [ehrlich ohne Bild] — „Fundraising-CRM der gUG: Kontakte, Spenden,
   CSV-Import, Audit-Log. React 19, Supabase mit Row-Level-Security — kein
   Screenshot, dafür Tests."
3. **Drive-Automatisierung** [ehrlich als Text] — „Der Vereins-Drive gehorcht
   einer YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln und
   meldet Drift — 233 Dateien nach Plan migriert."

### 3 · Methodik — „Was zählt wirklich?" (die 3D-Boxen)
**Copy:** „Die Frage, die mich durch die IT-Welt führte, wurde Methodik — vier
Disziplinen, mit denen ich KI-Systeme baue, die halten."
Die vier 3D-Boxen (Kernfokus-Element der Vorversion bleibt):
1. **Prompt Engineering** — „Anweisungen, die ein Modell wirklich befolgt —
   präzise statt blumig."
2. **Context Engineering** — „Das richtige Wissen zur richtigen Zeit im Fenster —
   nicht alles auf einmal."
3. **Harness-Engineering** — „Der Rahmen, der Agenten ehrlich hält: Wächter,
   Gates, Messwerte."
4. **Skill Engineering** — „Wiederkehrendes Können als abrufbares Paket — einmal
   sauber gebaut, immer verfügbar."

### 4 · Kundenarbeit — „Für Kunden gebaut."
**Copy (Brücke zur Methodik):** „Dieselbe Methodik auf fremdem Terrain: eine
Scroll-Story für den E-Bike-Verleih in Wusterhusen, ein Commerce-Cockpit mit
sieben KI-Agenten für einen Print-on-Demand-Shop. Beides geprüft — jeder
Scroll-Zustand per Screenshot, jede Zahl bis auf 0,00 Euro in der GuV."
1. **WL Bike Rental** [5 Bilder] — Zweizeiler unverändert (v2).
2. **Nordwind Studio** [1 Bild + Repo] — Zweizeiler unverändert (v2).

### 5 · Keel — „Regeln statt Vertrauen."
**Copy (Brücke zur Methodik):** „Was zählt wirklich — in Code gegossen:
Wächter-Hooks, Dauer-Regeln und ein eigenes Mess-Dashboard. Die Oberfläche lässt
sich ohne Anmeldung durchklicken, der Bausatz installiert sich mit einem Befehl."
1. **Keel Showcase** [3 Bilder + LIVE] — Zweizeiler unverändert (v2).
2. **Keel-Harness** [1 Bild + Repo] — Zweizeiler unverändert (v2).
3. **FlowVoice** [1 Bild] — Zweizeiler unverändert (v2).

### 6 · Profil — „Muster erkennen. Systeme bauen."
**Arbeitsweise (an die Frage angeschlossen):** „»Was zählt wirklich?«
funktioniert überall: Muster aus einem Bereich lösen Probleme im nächsten.
Vertrieb, Verein, Verleih, Versand — vier Welten, ein Handwerk."
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

## Offene Owner-Fragen

1. **E-Mail** im Abschluss — oder nur LinkedIn/GitHub/CV (aktueller Stand)?
2. **Private Repos** (oasis, wee-crm, voiceai, wl-bikerental): öffentlich stellen
   oder ohne Repo-Link zeigen?

## Abnahme

1. Owner-Gesamt-OK zu v4 (Hero ist entschieden; offen: Ablauf + Texte).
2. Bau in Abschnitten 1→7; je Abschnitt Live-Abnahme im Browser + Screenshot
   hell/dunkel.
3. Kritiker-Gauntlet vor Ship: jede Zeile gegen Ton-Kontrakt, Story-Faden und
   alte Live-Seite; Zertifikate gegen `zertifikate.md` ([]-Status = „laufend").
