# Bauprotokoll · Leon Pösken Portfolio

Stand: 29. August 2026

## Ziel

Eine eigenständige, deutsche Portfolio-/Bewerbungsseite für Leon Pösken, gebaut ausschließlich aus belegbarem Material der vorhandenen Produkt-Repositories. Visuelle Messlatte ist die echte Datei `arfazrll-preview.png`; keine Demos, keine Mockups, kein Keel-System/Brain, Marke ausschließlich **Keel**.

## Qualitätsregeln

- Referenz zuerst visuell geprüft: 1600 × 1000 px, tiefschwarze Bühne, ultrabreite typografische Hauptgeste, rote Haarlinien, harte Weiß/Grau-Kontraste, editorialer Mix aus Grotesk und Kursiv-Serif.
- Jede sichtbare Produktabbildung stammt aus einem benannten Repository oder einer verifizierten Live-Produktseite.
- Jede Rubrik erhält einen horizontalen, per Tastatur und Touch bedienbaren Side-Scroller; kein vertikaler Slider.
- Hell und Dunkel, reduzierte Bewegung, Fokuszustände, semantische Landmarken und 44-px-Ziele werden mitgeprüft.
- Kritiker urteilen anhand echter Renderings und nennen genau eine größte verbleibende Lücke. Eine Einheit gilt erst als abgeschlossen, wenn unser Rendering im Blindvergleich gewählt wird.

## Zerlegung und Live-Status

| Einheit | Builder | Kritiker | Schleife | Status | größte offene Lücke |
| --- | --- | --- | ---: | --- | --- |
| 01 · Design-Tokens (Farbe, Typo, Linien, Radius, Schatten) | Main Builder + 21st | Blind-Kritiker | 1 | **bestanden** | Blindvergleich B gewählt |
| 02 · Seitenschale und Skip-Link | Main Builder | Blind-Kritiker | 1 | **bestanden** | im Hero-Gesamtbild enthalten |
| 03 · Kopfzeile/Navigation | Main Builder | Blind-Kritiker | 1 | **bestanden** | im Hero-Gesamtbild enthalten |
| 04 · Hero: Name, Rolle, Positionierung | Main Builder | Blind-Kritiker | 1 | **bestanden** | Kritiker wählt unser B |
| 05 · Hero-Faktenleiste/CTA | Main Builder | Blind-Kritiker | 1 | **bestanden** | im Hero-Gesamtbild enthalten |
| 06 · Rubrikkopf „Simulation & Systeme“ | Rails-Builder + Main Builder | frischer Systeme-Kritiker | 1 | **bestanden** | Blindtest wählt unser A |
| 07 · Oasis-Projektkarte | Material-Builder + Main Builder | frischer Systeme-Kritiker | 1 | **bestanden** | echter Wetter-/Klima-Screenshot |
| 08 · WEE-CRM-Projektkarte | Material-Builder + Main Builder | frischer Systeme-Kritiker | 1 | **bestanden** | Modulstruktur ohne Personen-/Spendendaten |
| 09 · Rubrikkopf „Automatisierung & Infrastruktur“ | Rails-Builder + Main Builder | frischer Automatisierungs-Kritiker | 1 | **bestanden** | Blindtest wählt unser B |
| 10 · Drive-Automatisierung-Projektkarte | Material-Builder + Main Builder | frischer Automatisierungs-Kritiker | 1 | **bestanden** | 235/39/1 direkt aus Review-Datei |
| 11 · keel-showcase-Projektkarte | Material-Builder + Main Builder | frischer Automatisierungs-Kritiker | 1 | **bestanden** | nur Website Builder, Social, Commerce |
| 12 · Keel-Harness/Dashboard-Projektkarte | Main Builder + echter Generator | frischer Automatisierungs-Kritiker | 1 | **bestanden** | Dashboard live erzeugt und gefiltert |
| 13 · Rubrikkopf „Produkte & Commerce“ | Rails-Builder + Main Builder | frischer Produkte-Kritiker | 1 | **bestanden** | Blindtest wählt unser A |
| 14 · FlowVoice-Projektkarte | Main Builder + V3-Renderer | frischer Produkte-Kritiker | 1 | **bestanden** | Welle direkt durch Produktcode erzeugt |
| 15 · E-Bike-Projektkarte | Material-Builder + Main Builder | frischer Produkte-Kritiker | 1 | **bestanden** | zwei echte Produktansichten |
| 16 · Shopify-Projektkarte | Material-Builder + Main Builder | frischer Produkte-Kritiker | 1 | **bestanden** | synthetische Daten klar benannt, keine Integrationsbehauptung |
| 17 · Side-Scroller-Steuerung | Rails-Builder + Main Builder | Browser-Verifikation | 2 | **bestanden** | Touch, Buttons, Snap, Fortschritt, sichtbare Scrollbar |
| 18 · Projekt-Detailmuster | Main Builder | frischer WEE-Kritiker | 1 | **bestanden** | Blindtest wählt unser B; eigener echter Pfad |
| 19 · Lebenslauf-Download | Content-Builder + Main Builder | Browser-Verifikation | 1 | **bestanden** | statisches PDF-Ziel lädt unter `/neubau/` |
| 20 · Kontaktblock „Auf ein Gespräch“ | Content-Builder + Main Builder | frischer Kontakt-Kritiker | 1 | **bestanden** | Blindtest wählt unser A |
| 21 · Footer/LinkedIn | Content-Builder + Main Builder | frischer Kontakt-Kritiker | 1 | **bestanden** | CTA und LinkedIn-Ziel sichtbar |
| 22 · Hell/Dunkel-Schalter | Main Builder | Browser-Verifikation | 1 | **bestanden** | Systemstart, Umschaltung und Persistenz geprüft |
| 23 · Mobile/Tablet/Desktop | Main Builder | CDP-Verifikation | 1 | **bestanden** | 390 × 844 und 1600 × 1000 ohne Seiten-Overflow |
| 24 · Barrierefreiheit | Main Builder | Oxlint + CDP | 1 | **bestanden** | Skip-Link, Fokus, Landmarken, 44-px-Ziele, Reduced Motion |
| 25 · Performance/Assetgewicht | Main Builder | Build-Prüfung | 1 | **bestanden** | lokale WOFF2, lokale Produktbilder, lazy decoding |
| 26 · Gesamtseite gegen arfazrll | Main Builder | sieben frische Blind-Kritiker | 1 | **bestanden** | Hero, drei Rubriken, Profil, Kontakt und WEE jeweils gewählt |

## Laufende Entscheidungen

- Ästhetische Richtung: **editorialer Industrie-Katalog mit matter Signalpalette** – sachlich genug für eine Bewerbung, farblich kompromisslos genug, um die Referenz zu übertreffen.
- Keine erfundenen UI-Screens. Screenshots werden lediglich beschnitten/komprimiert, nicht als Mockup in Geräte-Rahmen gesetzt.
- Die Projektkarten führen zu echten Detailflächen bzw. belegten Live-/Repo-Zielen; WEE CRM erhält ausdrücklich den eigenen Unterordner `projekte/wee-crm`.
- Der Sites-/Vinext-Quellstand lebt in `neubau/app`; die eigenständig lauffähige GitHub-Pages-Ausgabe wird daraus nach `neubau/index.html` und `neubau/projekte/wee-crm/index.html` gebaut.

## Prüfprotokoll

- 13:48 · `DESIGN-SKILL.md` vollständig gelesen und auf Boldness, charaktervolle Typografie, WCAG, responsive Gestaltung und Materialehrlichkeit festgelegt.
- 13:49 · `arfazrll-preview.png` in Originalauflösung visuell geprüft.
- 13:51 · Eingebettete Browser-Sitzung nicht verfügbar; lokaler Browser-Runner als Render-/Screenshot-Weg vorbereitet.
- 13:53 · Drei getrennte Agenten gestartet: Material-Builder, Content-Builder, Referenz-Kritiker.
- 13:56 · Sites-Projekt mit shadcn initialisiert; charaktervolle lokale Schriften: Archivo, IBM Plex Sans, Instrument Serif.
- 14:00 · Erster sinnvoller Ausschnitt kompiliert: Navigation, Hero, CTA, CV-Download und echte Oasis-Karte.
- 14:12 · Referenz-Kritiker misst: 94,32 % Fast-Schwarz, 1,83 % helle Pixel, 0,068 % Rot; größte Gefahr ist eine überfüllte Komponenten-Galerie.
- 14:13 · 21st-CLI real ausgeführt; `.21st/design.json` und `.21st/DESIGN.md` aus dem aktuellen Quellstand erzeugt. Katalogsuche verlangte eine separate Anmeldung, der lokale Design-/Review-Workflow bleibt verfügbar.
- 14:14 · Blindbild `comparisons/blind-hero-v1.png`: A = arfazrll, B = unser Hero. Frischer Kritiker entscheidet **Sieger B**; Einheit 01–05 damit in Schleife 1 bestanden.
- 14:20 · Standalone-Keel-Dashboard gegen den echten Harness erzeugt; der Ausgabe-Wächter schreibt den gefilterten 3,9-MB-Stand, daraus stammt `projects/keel-harness/dashboard.png`.
- 14:23 · FlowVoice-Visual direkt mit `V3/wave_renderer.py` und `wave_config.py` gerendert; keine UI-Nachzeichnung.
- 14:35 · Drei parallele Blindtests: Systeme wählt unser A, Automatisierung unser B, Produkte unser A. Jeweilige Referenzlücke: keine konkrete Produktinszenierung.
- 14:38 · Drei weitere Blindtests: Profil wählt unser B, Kontakt unser A, WEE CRM unser B.
- 14:42 · `npm run lint` ohne Befund; `npm run build` erfolgreich für `/` und `/projekte/wee-crm`.
- 14:47 · Statische GitHub-Pages-Ausgabe mit lokalen Assets, lokalen WOFF2-Schriften und `.nojekyll` erzeugt.
- 14:49 · Produktions-Preview geprüft: Startseite und WEE-Unterseite laden ohne Overlay, Konsolen-, Runtime-, Netzwerk- oder Bildfehler.
- 14:50 · Interaktionsprüfung bei 1600 × 1000 und 390 × 844: Theme persistiert, Rail bewegt sich, Ziele stimmen, keine Untermaß-Touchziele und kein Seiten-Overflow.
- 14:51 · 21st-CLI Strict Review auf finalem Quellstand: 0 Fehler; bewusst gesetzte Produktfarben werden als Design-Hinweise gemeldet, unnötige Hover-Skalierung entfernt.
- 15:06 · Exakter Sites-Quellstand `b859cc4f101f` als Version 1 gespeichert und privat produktiv unter `leon-poesken-portfolio.coastcoder.chatgpt.site` veröffentlicht.
- 15:07 · Bereinigte statische Ausgabe erneut per CDP geprüft: Startseite und WEE-CRM-Detailseite ohne Konsolen-, Runtime-, Netzwerk- oder Bildfehler.
