# Storyboard v4.6 — Klare Kante (Portfolio-Neubau)

> Gate-Dokument. Historie: v1 Tauchfahrt (verworfen) · v2 Nord-Ton · v3
> Owner-Input · v4 Chronologie · v4.1 Doppel-Boxen · v4.2 Fakten · v4.3
> Owner-Antworten · v4.4 Kritiker-Panel · v4.5 Abgleich aller Owner-Nachrichten
> · v4.5.1 Oasis-Zusammenhang (git: 5ee3290).
> **v4.6 [Owner 02.09.]: „ohne GitHub und ohne Repo-Links — das ist privat. Es
> werden nur die Vercel-Showcases als iframes eingebunden, keine Screenshots
> der Software."** Alle Repo-Chips und GitHub-Nennungen raus, alle Bild-Chips
> raus; jedes Produkt bekommt genau eine Showcase-Form: iframe (Vercel-URL
> vorhanden) · Vercel-Deploy nötig · nur Text.

## Das Konzept in drei Sätzen

**Problem:** Die Vorversion hat Motion und Qualität, aber einen verspielten
Header, generische Texte, drei Slider und keinen Ablauf. **Intent:** Eine Seite,
die EINE Geschichte erzählt — NGO-Mitgründung, die Frage „Was zählt wirklich?",
daraus eine Methodik, ihre Beweise — im Ton der alten Seite und von WL Bike
Rental: knapp, direkt, norddeutsch. Es geht um Coding. **Goal:** Jeder Satz
führt auf eine Owner-Anweisung oder einen belegten Fakt zurück; jedes Produkt
kommt genau einmal; kein Slider; kein Repo-Link; kein Screenshot.

## Der Hero — ENTSCHIEDEN [Owner 02.09.]

**Headline:** „**Technik mit Auftrag.**"
**Subline [Owner-Text 02.09.]:** „Die Mitgründung einer NGO brachte mich zum
KI-Systembau. Durch die IT-Welt begleitete mich eine Frage: Was zählt wirklich?
Heute ist aus diesem holistischen Gedanken mehr als nur eine Methodik geworden
— deinen Weg finden und ihn gemeinsam gehen."
**Bild:** Headline raumhoch in Glanz-Typografie, ruhiger Lichtstreif. Kein
Screenshot; ein drehendes 3D-Modell nur, wenn eine leichte Fassung des
Gewächshaus-Modells existiert (das Original hat 272 MB) — sonst Typo allein.
**Begriffs-Logik [Owner]:** „Technik" bleibt oben; „KI-Systembau" und
„IT-Welt" in der Subline; „Auftrag" im Hero meint die Mission.

## Der Ton-Kontrakt

1. Ein Gedanke pro Satz; Zwei-Wort-Sätze tragen Überschriften.
2. Haltung über Kontrast, nie über Selbstlob.
3. Bedienschritte und Ergebnisse statt Eigenschaftswörter.
4. Zahlen tragen das Versprechen, ehrliche Einschränkung daneben.
5. Verboten: Emojis, Superlative, Denglisch, Ausrufezeichen, Konjunktiv-Watte,
   Wortspiel-Jingles, jede Zeile ohne Rückführung auf Owner-Anweisung oder Beleg.
6. **[Owner 02.09.] Verboten auf der ganzen Seite: GitHub-Nennungen,
   Repo-Links, Screenshots der Software. Showcases ausschließlich als
   eingebettete Vercel-iframes.**

## Showcase-Matrix — genau eine Form je Produkt

| Produkt | Showcase-Form | Stand |
|---|---|---|
| Keel Showcase | iframe `https://keel-showcase.vercel.app` | vorhanden (HTTP 200) |
| Oasis (3D-Präsentation) | iframe `https://world-eden-era.org/project-oasis/` | vorhanden; Einbettbarkeit (X-Frame-Options) beim Bau prüfen — sonst Link-Kachel ohne Bild |
| WL Bike Rental | iframe Vercel-Prototyp | **Deploy nötig** (bisher nur Branch-Previews) — stabile Prototyp-URL |
| Nordwind Studio | iframe Vercel-Demo (`demo/` ist statisch, ohne Server) | **Deploy nötig** |
| Funnel Desk | iframe Vercel-Prototyp (Next.js, „Sofortstart ohne externe Dienste") | **Deploy nötig** |
| WEE CRM | iframe Vercel-Prototyp mit Demo-Auth (`VITE_ENABLE_DEMO_AUTH`) | **Deploy nötig** — sonst nur Text |
| Keel-Harness | nur Text (lokales Werkzeug; Mess-Dashboard ist lokales HTML) | — |
| FlowVoice | nur Text (Windows-Desktop-App) | — |
| Drive-Automatisierung | nur Text | — |

Deploy-Regel: Vercel-Projekte unter dem Owner-Konto, Prototyp-Stände, ohne
Kundendaten; Live-Seiten Dritter werden nie eingebettet. Die vorhandenen PNGs
unter `public/projects/` werden auf der Seite NICHT verwendet.

## Der Ablauf — sieben Abschnitte, als Chronologie der Geschichte

### 1 · Hero — die These
Hero wie oben. Feste Nav ab Sekunde 1: Start · Ursprung · Methodik · Praxis ·
Profil · Kontakt · CV-Button. Preloader unter 1,5 s mit „Technik mit Auftrag."

### 2 · Ursprung — „Kein Auftrag. Ein Antrieb."
**Copy:** „World Eden Era ist die gemeinnützige UG, die ich mitgegründet habe —
nachhaltige Ernährung durch Aquaponik. Dieser Antrieb brachte mich zum
Systembau. Die ersten Systeme entstanden direkt für sie."
*(Owner-Klarstellung: Project Oasis nicht zum Thema machen, aber beim Simulator
den Zusammenhang nennen. CRM-Praktikant und Drive-Alleinbau: Hintergrund.)*
1. **Oasis-Simulator** [iframe Präsentation] — „Mein Herzensprojekt —
   ursprünglich von mir entwickelt, heute gemeinsam mit meiner Orga
   weiterentwickelt: die Aquaponik-Oase als drehbares 3D-Modell im Browser (272
   MB aus Blender) plus eine Simulation, die Wetter und Klima in Ertrag und
   Kosten einrechnet. Die 3D-Präsentation dazu läuft live auf
   world-eden-era.org."
2. **WEE CRM** [iframe nach Deploy, sonst Text] — „Fundraising-CRM der gUG, im
   Aufbau: Kontakte, Spenden, CSV-Import, Audit-Log auf React 19 und Supabase.
   Der Stand: ein getesteter Prototyp."
3. **Drive-Automatisierung** [nur Text] — „Der Vereins-Drive gehorcht einer YAML
   als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln und meldet
   Abweichungen — 233 Dateien im Migrationsplan, jeder Lauf mit
   Abgleichsbericht."

### 3 · Methodik — „Was zählt wirklich?" (die 3D-Boxen, ZWEI Reihen)
**Copy:** „Die Frage, die mich durch die IT-Welt begleitete, wurde Methodik —
vier Disziplinen, mit denen ich KI-Systeme baue, die halten."
**Reihe 1 — die Disziplinen, Erklärungen aus den Owner-Vorgaben (holistische
Sichtweise · Mustererkennung · Bezüge zu vielen realen Praxis- und
Tätigkeitsbereichen):**
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
**Reihe 2 — „Daraus entstehen:"**
1. **Websites** — „Seiten, die eine Geschichte erzählen statt Kacheln zu stapeln
   — wie die Radtour-Story rund um einen E-Bike-Verleih."
2. **Apps** — „Werkzeuge mit Oberfläche: vom Diktat-Overlay bis zum drehbaren
   3D-Modell."
3. **Funnels** — „Strecken, die aus Besuchern Anfragen machen — ein
   Funnel-Builder entsteht gerade als Prototyp."
4. **Automations** — „Abläufe, die ohne Zuruf laufen: Ablage-Regeln, Agenten,
   Prüfschritte."

### 4 · Praxis — „Echte Probleme, echte Lösungen." [Owner-Wortlaut]
**REGEL [Owner 02.09., bindend]:** Kein Auftrags- oder Bezahlverhältnis mit
Dritten behaupten oder nahelegen; keine „für [Betrieb]"-Konstruktionen, keine
identifizierenden Ortsnamen. Keine Screenshots — die Prototypen erscheinen als
eingebettete Vercel-iframes, nie Live-Seiten Dritter. Prototyp-Vermerk
nebensächlich als letzter Satz.
**Copy:** „Dieselbe Methodik an drei echten Problemen: Räder vermieten an der
Ostsee, Print-on-Demand verkaufen, Anfragen gewinnen. Alles geprüft — jeder
Scroll-Zustand per Screenshot, jede Zahl auf 0,00 Euro genau in der GuV."
*(„per Screenshot" beschreibt die Prüfmethode im Bau, nicht ein Bild auf der
Seite — bleibt.)*
1. **WL Bike Rental** [iframe nach Deploy] — „Scroll-Story rund um einen
   E-Bike-Verleih an der Ostsee: eine Radtour von Wald über Bodden bis Strand,
   jedes Angebot eine Station. Gebaut in Next.js, jeder Scroll-Zustand per
   Playwright-Screenshot verifiziert — der Stand: ein Prototyp."
2. **Nordwind Studio** [iframe nach Deploy] — „Demo-Cockpit für Print-on-Demand
   auf Shopify: sieben KI-Agenten von Designfreigabe bis USt-Voranmeldung, im
   Browser durchklickbar ohne Server. 96 Belege treffen die GuV auf 0,00 Euro
   genau — der Stand: ein Prototyp."
3. **Funnel Desk** [iframe nach Deploy] — „Akquise-Trichter im Vergleich:
   mehrere Zielgruppen nebeneinander, dieselben sechs Stufen von Reichweite bis
   Bindung, Betreiber-Dashboard plus mobile Auslieferung. Gedacht im Verbund
   mit Social-Dashboard und CRM — der Stand: ein Prototyp."

### 5 · Keel — „Regeln statt Vertrauen."
**Copy:** „Was zählt wirklich — in Code gegossen: Disziplin, die erzwungen wird
statt erhofft."
1. **Keel Showcase** [iframe keel-showcase.vercel.app] — „Die Keel-Oberfläche
   zum Durchklicken: Website-Builder, Social Media, Commerce. Ohne Server, ohne
   Anmeldung — direkt hier eingebettet."
2. **Keel-Harness** [nur Text] — „Ein Bausatz, der KI-Agenten diszipliniert
   arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Satz an den
   Agenten installiert ihn in jeden Projektordner."
3. **FlowVoice** [nur Text] — „Diktat für Windows: Hotkey drücken, sprechen —
   der Text steht im aktiven Fenster. Vier Erkennungs-Engines zur Wahl, von
   komplett lokal bis Groq."

### 6 · Profil — „Muster erkennen. Systeme bauen."
**Arbeitsweise [nur Owner-Begriffe]:** „Ich sehe das Ganze, nicht das
Einzelteil: Muster erkennen und in viele reale Praxis- und Tätigkeitsbereiche
übertragen."
**Zertifikate — „laufend" [Owner-Entscheid]:** „Vier Nachweise laufen — hier
stehen sie, sobald sie bestanden und online prüfbar sind."
1. EU AI Act Essentials (KI-Campus) — laufend
2. SC-900 Security Fundamentals (Microsoft) — laufend
3. ENISA-Grundlagen (EU Academy) — laufend
4. Cybersecurity Fundamentals (IBM) — laufend
**Für wen:** „Für Teams, die kein Konzeptpapier brauchen, sondern ein laufendes
System. Ich komme aus dem Vertrieb, also rede ich in Ergebnissen — Details im
Lebenslauf." + CV-Download. *(„Code auf GitHub" entfernt [v4.6])*

### 7 · Abschluss — „Auf ein Gespräch."
**Copy:** „Wege zu deinem Ziel gibt es viele — reden wir über deinen. LinkedIn
oder der Lebenslauf als PDF." *(GitHub entfernt [v4.6])*

## Was bleibt, was fliegt

1. BLEIBT: Spotlight, Punktraster, GSAP/Framer-Reveals, Glanz-Typografie,
   Dark/Light, Preloader-Moment, die 3D-Boxen (zwei Reihen).
2. RAUS: Emoji-Hero, alle drei Slider, doppelte StatsSection,
   Follow-Cursor-Spielereien, jeder Satz ohne Rückführung, **jeder Repo-Link,
   jeder Software-Screenshot**.

## Technik + Schnellspur

1. Basis `neubau/app` (Next.js 16); chirurgischer Umbau; Inhalte aus
   Daten-Dateien; Showcases als `<iframe>` mit Lazy-Load und Fallback-Kachel
   (Titel + Link), falls ein Ziel die Einbettung verweigert.
2. Vor dem Bau der Praxis-Sektion: Vercel-Deploys der Prototypen (WL Bike,
   Nordwind, Funnel Desk, ggf. CRM) — Vercel-CLI unter dem Owner-Konto.
3. Feste Nav ab Sekunde 1 · Skip-Link · `prefers-reduced-motion`-Fallback.

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
   → Box-Erklärungen Reihe 1 + Profil → UMGESETZT (v4.5).
9. „ich will das meine 4 zertifikate aus dem karriere projekt genannt werden"
   + Entscheid „Ehrlich als laufend" → Profil → UMGESETZT.
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
    Prompt und Context Engineering?" → Keel-Copy → UMGESETZT.
15. „WL Bike auf keinen Fall bezahlter Auftrag … nur Prototypseiten … echte
    Probleme, echte Lösungen … Prototyp nebensächlich vermerkt" → Sektion 4 +
    Regel → UMGESETZT.
16. „kompletter Funnelbuilder verbunden mit Social Media Dashboard und CRM, in
    Planung, Showcase vorhanden, genauso wie WL Bike und Nordwind" → Sektion 4
    Projekt 3 + Ergebnisbox → UMGESETZT.
17. „Schreib, dass es mein Herzensprojekt ist, ursprünglich von mir entwickelt,
    mittlerweile durch die Teammitglieder weiterentwickelt" + „auf Project
    Oasis nicht eingehen, aber beim Simulator nennen" → Oasis-Zeile →
    UMGESETZT (v4.5.1).
18. Subline-Text 02.09. („Durch die IT-Welt begleitete mich eine Frage … mehr
    als nur eine Methodik geworden") → Hero → UMGESETZT.
19. „Vertrieb, Verein, Verleih, Versand? Nein. Das hab ich nie gesagt." →
    Profil → ENTFERNT.
20. **„ohne GitHub und ohne Repo-Links! das ist privat. Es werden nur die
    Vercel-Showcases als iframes eingebunden, keine Screenshots der
    Software"** → Ton-Kontrakt 6, Showcase-Matrix, alle Produktzeilen,
    Für-wen, Abschluss → UMGESETZT (v4.6).

## Offene Owner-Frage — die einzige, zu der im Chat nichts steht

1. **E-Mail** im Abschluss — oder nur LinkedIn und CV (aktueller Stand)?

## Abnahme

1. Owner-Gesamt-OK zu v4.6.
2. Vercel-Deploys der Prototypen (Owner-Konto), dann Bau in Abschnitten 1→7;
   je Abschnitt Live-Abnahme im Browser + Screenshot hell/dunkel (Bau-Prüfung,
   nicht Seiteninhalt).
3. Vor Ship: Kritiker-Panel über die gebaute Seite (Fakten, Ton, Framing,
   Ton-Kontrakt 6) + Abgleich jeder Zeile gegen diese Tabelle.
