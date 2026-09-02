# Review & Fix — Leon Pöskens Portfolio

Stand: 29. August 2026  
Messlatte: `LEON-BRIEF.md` und `arfazrll-preview.png`

## Testaufbau

Der im Harness vorgesehene In-App-Browser war nicht verbunden und `agent-browser` war nicht installiert. Die Seiten wurden deshalb mit lokalem Playwright-Chromium gegen den echten Next.js-Dev-Server gerendert. Hell wurde über den tatsächlichen `next-themes`-Storagezustand erzwungen, nicht nur über `prefers-color-scheme`.

Runde 0 umfasst Start, Projekte, Keel-Harness-Detail, Kontakt und Lebenslauf in 1600 × 1000 sowie 390 × 844, jeweils dunkel und hell. Die Fullpage-Renderings liegen unter [`gauntlet/round-0`](gauntlet/round-0/).

## Runde 0 — Ist-Stand vor dem Fix

Gesamturteil: **FAIL. Nicht abnahmefähig.** Der bisherige Bericht in `build-notes.md` war zu weich und widerspricht den echten Renderings.

### A · Kundenreise / Erzählbogen

| Auftrag | Urteil | Konkreter Beleg |
| --- | --- | --- |
| A1 Einstieg/Haltung | **FAIL** | Above the fold steht „Hi, ich bin Leon Pösken. Ich baue Systeme, die wirklich genutzt werden“ neben den riesigen Schlagworten „KI & DATEN / SOFTWARE / ENTWICKLER“. Die verbindliche Haltung „Vom Vertrieb zum Systembauer — ich rede nicht über KI, ich baue damit“ fehlt. Auf Mobil zerfällt „Softwareentwickler“ in fünf willkürliche Stücke („SOFT / WARE / ENT / WICKLER“): [`home-top-mobile-dark.png`](gauntlet/round-0/home-top-mobile-dark.png). |
| A2 Warum / World Eden Era | **FAIL** | Im gesamten Fullpage-Render gibt es keinen sichtbaren Abschnitt, der World Eden Era gUG, nachhaltige Aquaponik-Ernährung oder Leons Antrieb erklärt. Zwischen Hero und Projekten liegen fast nur leere Scrollflächen: [`home-desktop-dark.png`](gauntlet/round-0/home-desktop-dark.png). |
| A3 Produkte als Beweis | **FAIL** | Keine gegliederte Beweisführung. Die Startseite zeigt nur winzige, schwebende Bildkacheln ohne lesbaren Produktkontext; WEE CRM, Drive-Automatisierung und Shopify fehlen dort vollständig. Die Projektseite zeigt oben eine stark abgedunkelte Collage und danach kilometerlange Leere statt acht lesbarer Belege: [`projects-desktop-dark.png`](gauntlet/round-0/projects-desktop-dark.png). |
| A4 Zwei Zielgruppen | **FAIL** | Weder „Kunden/Selbstständigkeit“ noch „Arbeitgeber/Bewerbung“ werden sichtbar getrennt angesprochen. Der einzige Abschluss „Lass uns etwas Belastbares bauen“ ist ein austauschbarer Sammel-CTA: [`projects-mobile-light.png`](gauntlet/round-0/projects-mobile-light.png). |
| A5 Abschluss / CTA / CV | **FAIL** | „Auf ein Gespräch“ und Lebenslauf stehen nicht als klarer gemeinsamer Abschluss der Kundenreise. Der CV existiert auf einer separaten Seite; er rettet die fehlende Führung nicht. Die Startseite zwingt Besucher durch 32.606 px Scrollhöhe, bevor ein winziger Abschluss erscheint. |

### B · Texte

**FAIL.** Die Seite behauptet Echtheit, statt Produkte zu erklären. Beispiele aus den Renderings:

- „Echte Systeme. Echte Oberflächen.“ — sagt weder was Leon gebaut hat noch welches Problem gelöst wird.
- „Lass uns etwas Belastbares bauen.“ — kann auf jeder Agenturseite stehen.
- „Eine Idee ist da? Lass uns daraus ein belastbares System bauen.“ — reine Marketing-Floskel.
- „KI-Systeme, Automatisierung, Webentwicklung. Vom Repository bis zum nutzbaren Produkt.“ — Kategorien statt Beleg.
- Keel-Harness: „Lokales Agenten-Harness mit eigenem Dashboard für Steuerung, Status und kontrollierte Ausführung.“ ist konkreter, bleibt aber ohne erklärten Ablauf, Entscheidung oder Ergebnis. Sichtbar in [`detail-keel-harness-desktop-light.png`](gauntlet/round-0/detail-keel-harness-desktop-light.png).

Es fehlt durchgehend die konkrete Struktur „Ausgangsproblem → von Leon gebauter Mechanismus → sichtbarer Beleg/Ergebnis“.

### C · Screenshots / Darstellung

| Prüfkriterium | Urteil | Beleg |
| --- | --- | --- |
| Richtige Größe und Zuschnitt | **FAIL** | Projektbilder der Übersicht sind als dunkle Hintergrundtapete eingesetzt; Details sind nicht lesbar. Auf Mobil liegen vier Bilder ohne klare Zuordnung als 2×2-Kacheln hinter dem Hero: [`projects-mobile-light.png`](gauntlet/round-0/projects-mobile-light.png). |
| Eingebettet statt reingeklatscht | **FAIL** | Die Startseite zeigt lose, unterschiedlich große Mini-Screens ohne Browserrahmen oder Produktkontext. Im 32.606-px-Render sind sie nur eine winzige Insel: [`home-desktop-light.png`](gauntlet/round-0/home-desktop-light.png). |
| Hochwertig / arfazrll-Niveau | **FAIL** | Die Referenz ist eine kompakte Editorial-Komposition mit klarer Typohierarchie, feinen Linien und rotem Akzent. Der Ist-Stand ersetzt Komposition durch extreme Scroll-Laufbahnen und fast vollständig schwarze bzw. weiße Flächen. |
| Kein Overflow / kaputte Karten | **FAIL** | Mobil verschwindet das gesamte Kontaktformular zwischen Social-Karten und FAQ: [`contact-mobile-dark.png`](gauntlet/round-0/contact-mobile-dark.png). Der mobile PDF-Viewer schneidet die linke Lebenslaufspalte ab: [`resume-mobile-light.png`](gauntlet/round-0/resume-mobile-light.png). |
| Runtime stabil | **FAIL** | Ein echter Desktop-Aufruf von `/projects/keel-harness` endete mit `Runtime SyntaxError: Unexpected end of JSON input` und HTTP 500: [`detail-keel-harness-desktop-dark.png`](gauntlet/round-0/detail-keel-harness-desktop-dark.png). |

### D · Echte Produkte / echtes Material

Gesamt: **FAIL**, obwohl Teile korrekt angelegt sind.

| Auftrag | Urteil | Beleg |
| --- | --- | --- |
| Keel-System und Brain raus | **PASS** | In der aktuellen Projektdatenliste erscheinen beide nicht. |
| Keel-Harness als Produkt mit Dashboard | **PASS mit Darstellungsdefizit** | Echtes Dashboard ist vorhanden und auf der Detailseite lesbar: [`detail-keel-harness-desktop-light.png`](gauntlet/round-0/detail-keel-harness-desktop-light.png). Die Gallery-Sektion bleibt jedoch leer. |
| WEE: Oasis, CRM, Drive | **FAIL** | Alle drei existieren in den Daten, aber nur Oasis erhält ein Bild. CRM und Drive werden in der Start-Kundenreise verschwiegen; das WEE-Warum fehlt komplett. |
| Keel: Showcase, FlowVoice | **FAIL** | Daten/Assets existieren, aber die Homepage-Beweisführung zeigt nicht den vollständigen Keel-Kosmos. FlowVoice darf wegen eines im Repo gefundenen Secrets nicht blind öffentlich verlinkt werden. |
| Kunden: E-Bike, Shopify | **FAIL** | Beide existieren in Daten/Assets, werden aber nicht als eigener Kundenprojekt-Beweisbogen geführt. Shopify fehlt aus der Homepageauswahl. |
| App-Previews + Live-Link, sonst ehrlicher Text | **FAIL** | Der Grundsatz ist in Teilen vorhanden, wird aber durch unlesbare Collagen, leere Gallery-Flächen und fehlende Gruppierung nicht erfüllt. |
| Marke Keel, nie Flowcode | **PASS** | In den geprüften sichtbaren Seiten wurde „Flowcode“ nicht gefunden. |

### E · Layout-Vorlieben

| Auftrag | Urteil | Beleg |
| --- | --- | --- |
| Horizontaler Side-Scroller je Rubrik | **FAIL** | Es gibt keine Rubriken. Die Startseite verwendet mehrere vertikale Scroll-Hijacks (600/500/400 vh); die Projektseite ist Filter/Grid/List. |
| arfazrll-Look bleibt | **FAIL** | Große Typografie und Animationen sind vorhanden, aber ohne die kontrollierte Dichte der Referenz. Matte knallige Akzente werden auf vereinzelte Icons reduziert; riesige leere Flächen dominieren. |
| Hell/Dunkel | **PASS technisch, FAIL gestalterisch** | Beide Themes rendern. Die gleichen Kompositions- und Leerflächenprobleme bleiben: [`home-top-desktop-dark.png`](gauntlet/round-0/home-top-desktop-dark.png), [`home-top-desktop-light.png`](gauntlet/round-0/home-top-desktop-light.png). |
| Responsive | **FAIL** | Hero-Wortbruch, fehlendes Kontaktformular und abgeschnittener PDF-Inhalt sind harte mobile Fehler. |
| Barrierearm / deutsch | **FAIL** | Sichtbare Copy ist überwiegend deutsch, aber die extremen Scroll-Hijacks, versteckte Inhalte und mobil fehlenden Bedienelemente verhindern eine barrierearme Führung. |

### F · Formales

| Auftrag | Urteil | Beleg |
| --- | --- | --- |
| Lebenslauf-Download | **PASS** | `/resume` zeigt die echte PDF und einen sichtbaren Button „Lebenslauf herunterladen“: [`resume-desktop-dark.png`](gauntlet/round-0/resume-desktop-dark.png). Der mobile Viewer selbst ist trotzdem nicht responsive. |
| Kontakt „Auf ein Gespräch“ | **FAIL** | Die geforderte Formulierung ist nicht der klare Abschluss der Startseite. Auf der Kontaktseite steht stattdessen „Lass uns reden“. |
| LinkedIn / GitHub | **PASS im Code, visuell schwach** | Die richtigen Handles sind vorhanden, aber auf der Kontaktseite redundant vervielfacht: dieselben GitHub-/LinkedIn-Karten wiederholen sich in zwei Reihen: [`contact-desktop-light.png`](gauntlet/round-0/contact-desktop-light.png). |
| Keine toten Links | **FAIL** | Das Kontaktformular hängt ohne belegte Mail-Konfiguration an einem API-Endpunkt und ist mobil gar nicht sichtbar. Die sichtbare E-Mail ist weiterhin `[E-MAIL EINSETZEN]`. Eine vollständige HTTP-Linkprüfung fehlt im Ist-Stand. |

## Fix-Runden

## Runde 1 — richtiger Neuaufbau, noch keine Abnahme

Gesamturteil: **FAIL. Der Erzählbogen war da, die Ausführung noch nicht belastbar.**

Die Seite wurde von der Vorlage entkoppelt und als geführte Strecke neu gebaut: Haltung, World
Eden Era, drei Produktrubriken, zwei Zielgruppen und Abschluss. Das war inhaltlich der richtige
Sprung, aber die erste Renderabnahme hat neue harte Fehler gezeigt:

- Im ersten Fullpage-Render blieben mehrere echte Produktbilder leer, weil sie erst beim
  Scrollen geladen wurden. Die weißen Browserflächen in
  [`home-desktop-dark.png`](gauntlet/round-1/home-desktop-dark.png) sind deshalb **FAIL**, nicht
  „minimalistisch“. Erst der Kontrollrender
  [`home-desktop-dark-eager.png`](gauntlet/round-1/home-desktop-dark-eager.png) belegt den
  korrigierten Ladevorgang.
- Der erste Rail-Test prüfte nur den Zähler. Er konnte grün werden, obwohl die Zielkarte nicht
  sauber am Anfang stand. In
  [`rail-wee-drive-dark.png`](gauntlet/round-1/rail-wee-drive-dark.png) läuft
  „Drive-Automatisierung“ rechts aus der Karte. Der Test war damit ein falsches Positiv.
- Die native PDF-Einbettung war im Headless-Chromium blank. Eine vorhandene Download-Datei ist
  kein Ersatz für einen sichtbar geprüften Desktop-CV.
- Die knalligen Akzentfarben funktionierten als Flächen, waren aber im hellen Theme als kleiner
  Text zu kontrastarm. Der invertierte Dark-Theme-CTA verfehlte ebenfalls knapp 3:1.

Konsequenz: kein Teil-Freigabeschein. Bild-Ladestrategie, Rail-Geometrie, Drive-Typografie,
PDF-Rendering und Akzent-Token wurden an der Ursache geändert und erneut komplett gerendert.

## Runde 2 — finale harte Abnahme

Gesamturteil: **PASS / abnahmefähig. Keine offenen Brief-Fails.**

Finaler Prüfstand: 12 echte Routen, jeweils 1440 × 1000 und 390 × 844, jeweils Hell und Dunkel.
Die Fullpage-Bilder wurden nach dem letzten Kontrastfix neu erzeugt. Der Dark-CTA-Beleg
[`home-desktop-dark.png`](gauntlet/round-2/home-desktop-dark.png) stammt vom
29.08.2026, 21:57:43.

### A · Kundenreise / Erzählbogen

| Auftrag | Urteil | Konkreter Renderbeleg |
| --- | --- | --- |
| A1 Einstieg/Haltung | **PASS** | Der erste Screen führt mit „Vom Vertrieb zum Systembauer.“ und direkt darunter „Ich rede nicht über KI. Ich baue damit.“; Porträt, Rollenwechsel und zwei nächste Schritte sind ohne Scrollsuche sichtbar: [`Desktop dunkel`](gauntlet/round-2/home-desktop-dark.png), [`Mobil hell`](gauntlet/round-2/home-mobile-light.png). |
| A2 Warum / World Eden Era | **PASS** | Der zweite Akt ist ein eigener gerahmter WEE-Abschnitt. Er nennt gemeinnützige gUG, nachhaltige Ernährung, Aquaponik und erklärt, weshalb daraus Oasis, CRM und Drive entstehen. Das ist Motivation plus Ursache, keine Projektkarte: [`Desktop hell`](gauntlet/round-2/home-desktop-light.png), [`Mobil dunkel`](gauntlet/round-2/home-mobile-dark.png). |
| A3 Produkte als Beweis | **PASS** | „Drei Kontexte. Acht echte Produkte.“ leitet drei Rubriken ein: World Eden Era (3), Keel-Kosmos (3), Kundenprojekte (2). Jede sichtbare Karte trägt Problem, Mechanismus, Stand und Beleg statt nur Logo/Bild: [`Projektarchiv Desktop hell`](gauntlet/round-2/projects-desktop-light.png), [`Projektarchiv Mobil dunkel`](gauntlet/round-2/projects-mobile-dark.png). Die fünf Interaktionsbilder belegen auch die nicht zuerst sichtbaren Karten. |
| A4 zwei Zielgruppen | **PASS** | Nach den Belegen stehen zwei explizite, gleichwertige Wege: „Kunden / Selbstständigkeit“ mit „Ein reales Problem. Ein nutzbarer erster Stand.“ sowie „Arbeitgeber / Bewerbung“ mit „Produktblick plus Umsetzung.“: [`Home Desktop dunkel`](gauntlet/round-2/home-desktop-dark.png), [`Kontakt Mobil hell`](gauntlet/round-2/contact-mobile-light.png). |
| A5 Abschluss / CTA / CV | **PASS** | Der Abschluss heißt sichtbar „Auf ein Gespräch“, fragt konkret nach dem nächsten funktionierenden System und bietet LinkedIn sowie den direkten Lebenslauf-Download. Er steht auf Home, Details und Kontakt: [`Home Desktop hell`](gauntlet/round-2/home-desktop-light.png), [`Kontakt Desktop dunkel`](gauntlet/round-2/contact-desktop-dark.png). |

### B · Texte

| Auftrag | Urteil | Konkreter Renderbeleg |
| --- | --- | --- |
| Keine Vorlagen-/Marketingfloskeln | **PASS** | Die generischen Altzeilen sind weg. Statt „Echte Systeme“ benennt die Seite überprüfbare Arbeit: etwa „235 Elemente reproduzierbar statt per Hand sortiert“, „Agentenarbeit messbar und begrenzt“ und „Von acht Rädern bis zur Tageszentrale“: [`Drive Mobil hell`](gauntlet/round-2/drive-automatisierung-mobile-light.png), [`Keel-Harness Desktop dunkel`](gauntlet/round-2/keel-harness-desktop-dark.png), [`E-Bike Desktop hell`](gauntlet/round-2/ebike-vermietung-desktop-light.png). |
| Produktkonkret: Problem → Leons System → Beleg | **PASS** | Alle acht Detailseiten verwenden dieselbe ehrliche Fallstudienlogik, aber produktspezifische Inhalte. Oasis erklärt Simulation und Kartenbeleg; CRM Rollen und geschützte Zugänge; Harness Wächter-Hooks und Control Center; Shopify Bestell-/Kundendaten und Demo-Grenze. Belege: [`Oasis`](gauntlet/round-2/oasis-simulator-desktop-light.png), [`WEE CRM`](gauntlet/round-2/wee-crm-desktop-dark.png), [`Keel-Harness`](gauntlet/round-2/keel-harness-mobile-light.png), [`Shopify`](gauntlet/round-2/shopify-commerce-mobile-dark.png). |
| Grenzen offen benannt | **PASS** | Wo kein echtes UI existiert, wird keines erfunden: Drive zeigt „Quellstand statt Kulisse“, FlowVoice einen verifizierten Audio-Renderer statt einer behaupteten Komplettplattform; Shopify kennzeichnet synthetische Demodaten. [`Drive Desktop dunkel`](gauntlet/round-2/drive-automatisierung-desktop-dark.png), [`FlowVoice Desktop hell`](gauntlet/round-2/flowvoice-desktop-light.png), [`Shopify Desktop hell`](gauntlet/round-2/shopify-commerce-desktop-light.png). |

### C · Screenshots / Darstellung

| Prüfkriterium | Urteil | Konkreter Renderbeleg |
| --- | --- | --- |
| Echte Bilder, richtige Größe und Zuschnitt | **PASS** | Reale Repo-Screens sitzen in eigenständigen Browserrahmen mit unverzerrtem contain/cover-Verhalten. Dashboarddetails sind lesbar; keine dunkle Hintergrundtapete und keine zufällige Collage: [`Showcase Desktop hell`](gauntlet/round-2/keel-showcase-desktop-light.png), [`E-Bike Desktop dunkel`](gauntlet/round-2/ebike-vermietung-desktop-dark.png). |
| Im Layout eingebettet und inspizierbar | **PASS** | Bild, Produktcopy, Tags und Fallstudienlink bilden jeweils eine Komposition. Detailbilder besitzen zusätzlich „Original öffnen“, damit auch mobile Besucher den unverkleinerten Beleg prüfen können: [`Oasis Mobil hell`](gauntlet/round-2/oasis-simulator-mobile-light.png), [`Showcase Mobil dunkel`](gauntlet/round-2/keel-showcase-mobile-dark.png). |
| arfazrll-Niveau | **PASS** | Die finale Komposition übernimmt die Qualität, nicht blind die Struktur der Referenz: matte Koralle/Limette/Blau/Violett/Gelb, schmale Keylines und Eckmarken, groteske Großtypografie plus Serifenkontrast, dichte Editorial-Rhythmen, 3D-Porträt und bewegte Orbits. [`Home Desktop dunkel`](gauntlet/round-2/home-desktop-dark.png), [`Projekte Desktop hell`](gauntlet/round-2/projects-desktop-light.png). |
| Kein Overflow, keine kaputten/blanken Karten | **PASS** | Alle acht Detailrouten wurden automatisiert auf document.scrollWidth ≤ viewport geprüft. Alle Kartenbilder waren vollständig geladen. Die Mobilrender zeigen saubere einspaltige Details; der lange Drive-Titel bricht kontrolliert: [`Drive Mobil hell`](gauntlet/round-2/drive-automatisierung-mobile-light.png), [`FlowVoice Mobil dunkel`](gauntlet/round-2/flowvoice-mobile-dark.png). |

### D · Echte Produkte / echtes Material

| Auftrag | Urteil | Konkreter Renderbeleg |
| --- | --- | --- |
| Keel-System und Brain raus | **PASS** | Weder Start, Archiv noch die acht finalen Detailrouten führen diese unfertigen Projekte. Die öffentlich sichtbare Produktzahl ist exakt acht: [`Projekte Desktop dunkel`](gauntlet/round-2/projects-desktop-dark.png). |
| WEE: Oasis, CRM, Drive | **PASS** | Alle drei sind eine eigene Rubrik und eigene Fallstudien. Oasis nutzt den echten Simulator-Screenshot; CRM beschreibt Rollen/Zugänge; Drive verwendet die belegten 235/39/1-Kennzahlen und erklärt ehrlich die fehlende eigene UI: [`Oasis`](gauntlet/round-2/oasis-simulator-desktop-dark.png), [`CRM`](gauntlet/round-2/wee-crm-mobile-light.png), [`Drive`](gauntlet/round-2/drive-automatisierung-desktop-light.png). |
| Keel: Showcase, Keel-Harness, FlowVoice | **PASS** | Keel-Harness ist ein eigenes Produkt mit echtem Control-Center-Dashboard. Showcase zeigt reale Screens und Liveziel; FlowVoice zeigt den vorhandenen Renderer. [`Showcase`](gauntlet/round-2/keel-showcase-desktop-dark.png), [`Harness`](gauntlet/round-2/keel-harness-desktop-light.png), [`FlowVoice`](gauntlet/round-2/flowvoice-mobile-light.png). |
| Kunden: E-Bike, Shopify | **PASS** | Beide bilden eine eigene Rubrik. E-Bike zeigt Landingpage, Buchungs-/Betriebslogik und drei reale Ansichten; Shopify zeigt das echte Admin-Dashboard und benennt die synthetische Demo. [`E-Bike`](gauntlet/round-2/ebike-vermietung-mobile-dark.png), [`Shopify`](gauntlet/round-2/shopify-commerce-desktop-dark.png). |
| Preview/Live-Link nur wo belegt | **PASS** | Live- und Repo-Links erscheinen ausschließlich bei veröffentlichten, browsergeprüften Zielen. Textbasierte Produkte erfinden weder Preview noch öffentlichen Link. Der externe Browsertest enthält keinen 404. |
| Marke Keel, nie Flowcode | **PASS** | Sichtbare Navigation, Rubrik, Karten, Details, Footer und Metadaten verwenden Keel. „Flowcode“ kommt in den aktiven Portfolioinhalten nicht vor: [`Home Mobil dunkel`](gauntlet/round-2/home-mobile-dark.png). |

### E · Layout-Vorlieben

| Auftrag | Urteil | Konkreter Renderbeleg |
| --- | --- | --- |
| Horizontaler Side-Scroller je Rubrik | **PASS** | Drei native overflow-x-Rails mit Touch/Trackpad, Vor/Zurück-Buttons und 01/03-Zähler ersetzen Scroll-Hijacking und Vertikalslider. Der Browsertest prüft 3/3/2 Karten und die tatsächliche Zielposition unter 20 px: [`WEE CRM`](gauntlet/round-2/rail-wee-crm-dark.png), [`WEE Drive`](gauntlet/round-2/rail-wee-drive-dark.png), [`Keel-Harness`](gauntlet/round-2/rail-keel-harness-dark.png), [`FlowVoice`](gauntlet/round-2/rail-keel-flowvoice-dark.png), [`Shopify`](gauntlet/round-2/rail-kunden-shopify-dark.png). |
| arfazrll-Look / Farben / 3D / Animation | **PASS** | Referenznahe typografische Spannung und matte Vollfarben sind durchgehend, ohne die Vorlage inhaltlich nachzuahmen. Porträtkartenstaffel, Orbits, Rail-Übergänge und Mikroanimationen bleiben; prefers-reduced-motion schaltet Bewegung ab: [`Home Desktop hell`](gauntlet/round-2/home-desktop-light.png). |
| Hell/Dunkel | **PASS** | Beide Themes sind eigenständig lesbar. Akzentflächen bleiben knallig, Akzenttexte nutzen separate kontraststarke Token; der invertierte Dark-CTA hat einen eigenen dunklen Korallton: [`Home Desktop dunkel`](gauntlet/round-2/home-desktop-dark.png), [`Home Desktop hell`](gauntlet/round-2/home-desktop-light.png). |
| Responsive / barrierearm / deutsch | **PASS** | 390-px-Renderings zeigen keine Wortzerlegung, keinen Seiten-Overflow und keine abgeschnittenen Form-/PDF-Inhalte. Fokuszustände, semantische Buttons/Links, Alternativtexte und reduzierte Bewegung sind vorhanden; sämtliche sichtbare Führung ist deutsch: [`Kontakt Mobil hell`](gauntlet/round-2/contact-mobile-light.png), [`CV Mobil dunkel`](gauntlet/round-2/resume-mobile-dark.png). |

### F · Formales

| Auftrag | Urteil | Konkreter Renderbeleg |
| --- | --- | --- |
| Lebenslauf funktioniert | **PASS** | Desktop rendert die echte Leon-Poesken-Lebenslauf.pdf vollständig über eine clientseitige PDF-Canvas-Komponente; mobil erscheint bewusst eine saubere Öffnen-/Download-Karte statt eines abgeschnittenen Viewers: [`CV Desktop dunkel`](gauntlet/round-2/resume-desktop-dark.png), [`CV Mobil hell`](gauntlet/round-2/resume-mobile-light.png). Der Downloadbutton verweist direkt auf die PDF. |
| „Auf ein Gespräch“ | **PASS** | Die exakte Phrase steht in Navigation, Abschluss und Kontakt-Hero. Die alte Floskel „Lass uns reden“ ist weg: [`Kontakt Desktop hell`](gauntlet/round-2/contact-desktop-light.png). |
| LinkedIn / GitHub | **PASS** | LinkedIn zeigt exakt leonpoesken, GitHub exakt coastcoder439; keine redundanten Kartenreihen: [`Kontakt Desktop dunkel`](gauntlet/round-2/contact-desktop-dark.png). |
| Keine toten/privaten Links | **PASS** | Alle veröffentlichten Live- und Repo-Ziele antworten im Chromium-Test mit 200. LinkedIn antwortet automatisiert mit seinem erwartbaren Bot-Schutz 999, aber auf der exakt geforderten Profil-URL und nicht mit 404. Es gibt kein blind verlinktes privates FlowVoice-/Drive-/CRM-Repo und kein unkonfiguriertes Kontaktformular mehr. |

## Vollständige finale Screenshot-Matrix

### Kernseiten

- Start: [`Desktop dunkel`](gauntlet/round-2/home-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/home-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/home-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/home-mobile-light.png)
- Projekte: [`Desktop dunkel`](gauntlet/round-2/projects-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/projects-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/projects-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/projects-mobile-light.png)
- Kontakt: [`Desktop dunkel`](gauntlet/round-2/contact-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/contact-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/contact-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/contact-mobile-light.png)
- Lebenslauf: [`Desktop dunkel`](gauntlet/round-2/resume-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/resume-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/resume-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/resume-mobile-light.png)

### Alle acht Fallstudien

- Oasis Simulator: [`Desktop dunkel`](gauntlet/round-2/oasis-simulator-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/oasis-simulator-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/oasis-simulator-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/oasis-simulator-mobile-light.png)
- WEE CRM: [`Desktop dunkel`](gauntlet/round-2/wee-crm-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/wee-crm-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/wee-crm-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/wee-crm-mobile-light.png)
- Drive-Automatisierung: [`Desktop dunkel`](gauntlet/round-2/drive-automatisierung-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/drive-automatisierung-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/drive-automatisierung-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/drive-automatisierung-mobile-light.png)
- Keel Showcase: [`Desktop dunkel`](gauntlet/round-2/keel-showcase-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/keel-showcase-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/keel-showcase-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/keel-showcase-mobile-light.png)
- Keel-Harness: [`Desktop dunkel`](gauntlet/round-2/keel-harness-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/keel-harness-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/keel-harness-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/keel-harness-mobile-light.png)
- FlowVoice: [`Desktop dunkel`](gauntlet/round-2/flowvoice-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/flowvoice-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/flowvoice-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/flowvoice-mobile-light.png)
- E-Bike-Vermietung: [`Desktop dunkel`](gauntlet/round-2/ebike-vermietung-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/ebike-vermietung-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/ebike-vermietung-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/ebike-vermietung-mobile-light.png)
- Shopify / Commerce: [`Desktop dunkel`](gauntlet/round-2/shopify-commerce-desktop-dark.png) · [`Desktop hell`](gauntlet/round-2/shopify-commerce-desktop-light.png) · [`Mobil dunkel`](gauntlet/round-2/shopify-commerce-mobile-dark.png) · [`Mobil hell`](gauntlet/round-2/shopify-commerce-mobile-light.png)

### Rail-Interaktion

- [`WEE CRM als zweite Karte`](gauntlet/round-2/rail-wee-crm-dark.png)
- [`Drive als dritte Karte`](gauntlet/round-2/rail-wee-drive-dark.png)
- [`Keel-Harness als zweite Karte`](gauntlet/round-2/rail-keel-harness-dark.png)
- [`FlowVoice als dritte Karte`](gauntlet/round-2/rail-keel-flowvoice-dark.png)
- [`Shopify als zweite Karte`](gauntlet/round-2/rail-kunden-shopify-dark.png)

## Automatisierte Belege

Playwright: **3/3 PASS** in [`portfolio.spec.ts`](gauntlet/tests/portfolio.spec.ts) und
[`external-links.spec.ts`](gauntlet/tests/external-links.spec.ts).

| Prüfung | Ergebnis |
| --- | --- |
| Drei echte Rails / Produktzahlen | 3, 3 und 2 Karten; PASS |
| Rail-Steuerung | Zähler und reale Zielkartenposition für fünf verdeckte Karten; PASS |
| Produktbilder | complete, naturalWidth > 0, naturalHeight > 0; PASS |
| Acht Detailseiten | HTTP erfolgreich, sichtbare H1, kein horizontaler Seiten-Overflow; PASS |
| world-eden-era.org | 200 |
| keel-showcase.vercel.app + /KL/commerce | 200 / 200 |
| wl-bikerental.vercel.app/v3 | 200 |
| GitHub-Profil + zwei veröffentlichte Repos | 200 / 200 / 200 |
| LinkedIn leonpoesken | 999 Bot-Schutz, exakte Ziel-URL, kein 404 |

Produktions-Build: **PASS**. npm run build mit Next.js 16.3.3 kompiliert erfolgreich,
TypeScript läuft sauber durch und die Seitengenerierung endet bei 28/28.

## Unabhängige Kritikerabnahme

Der separat geführte Kritiker hat nicht implementiert, sondern Brief, Code und finale Renderings
gegengeprüft. Seine Endmatrix bewertet A1–A5, B, C, D, E und F vollständig mit **PASS**.
Sein Schlussurteil: **„PASS / abnahmefähig. Keine offenen Brief-Fails.“**
