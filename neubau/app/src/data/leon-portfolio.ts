export type ProductGroupKey = 'wee' | 'keel' | 'kunden';

export type ProductAccent = 'lime' | 'coral' | 'blue' | 'violet' | 'yellow';

export type ProductImage = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  position?: 'center' | 'top';
};

export type Product = {
  slug: string;
  title: string;
  group: ProductGroupKey;
  accent: ProductAccent;
  eyebrow: string;
  claim: string;
  summary: string;
  problem: string;
  build: string;
  evidence: string;
  status: string;
  role: string;
  period: string;
  tags: string[];
  proof: string[];
  image?: ProductImage;
  gallery: ProductImage[];
  metric?: {
    value: string;
    label: string;
  };
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  repoLabel?: string;
  honesty?: string;
  source: string;
};

export type ProductGroup = {
  key: ProductGroupKey;
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: ProductAccent;
};

export const productGroups: ProductGroup[] = [
  {
    key: 'wee',
    index: '03.1',
    eyebrow: 'WORLD EDEN ERA',
    title: 'Eine Mission braucht mehr als eine Website.',
    intro:
      'Simulation, Fundraising und Dokumente greifen ineinander. Die drei Produkte zeigen denselben Ansatz: ein reales System verstehen, sichtbar machen und Handarbeit gezielt automatisieren.',
    accent: 'lime',
  },
  {
    key: 'keel',
    index: '03.2',
    eyebrow: 'KEEL-KOSMOS',
    title: 'Aus Werkzeugen wird ein belastbarer Arbeitsfluss.',
    intro:
      'Keel bündelt kontrollierte Agentenabläufe, sichtbaren Systemstatus und vorführbare Produktmodule — als installierbaren Bausatz, Dashboard und Live-Showcase.',
    accent: 'violet',
  },
  {
    key: 'kunden',
    index: '03.3',
    eyebrow: 'KUNDENPROJEKTE',
    title: 'Die Methode bleibt. Das Problem wechselt.',
    intro:
      'Bei Kundenarbeit übersetze ich dieselbe Systemlogik in eine klare Nutzerreise: vom ersten Klick bis zu dem Punkt, an dem das Produkt im Alltag Arbeit übernimmt.',
    accent: 'yellow',
  },
];

export const products: Product[] = [
  {
    slug: 'oasis-simulator',
    title: 'Oasis Simulator',
    group: 'wee',
    accent: 'lime',
    eyebrow: 'SIMULATION · WORLD EDEN ERA',
    claim: 'Planen, bevor Beton gegossen wird.',
    summary:
      'Project Oasis verbindet Fischzucht, Pflanzenbau, Geodom, Klima und Energie. Der Simulator macht diese Abhängigkeiten als bedienbares System sichtbar.',
    problem:
      'Ein Aquaponik-System lässt sich nicht seriös über eine einzelne Kennzahl planen. Klima, Wasser, Energie, Pflanzen und Fischbestand beeinflussen sich gegenseitig.',
    build:
      'Leon hat einen browserbasierten System-Builder mit editierbaren Parametern, Karten- und Wetterebenen sowie getrennter statischer Dimensionierung und dynamischer Zeitsimulation aufgebaut.',
    evidence:
      'Belegt sind die echte Köppen-Geiger-Klimazonenkarte, Wetterlayer und editierbare Systemparameter aus dem laufenden Produktstand.',
    status: 'Live · in Entwicklung',
    role: 'Fullstack-Entwicklung',
    period: 'seit Juli 2026',
    tags: ['System-Builder', 'Klima & Wetter', 'Zeitverlauf'],
    proof: [
      'Karten- und Wetterlayer aus dem Produktstand',
      'Statische Dimensionierung plus Zeitsimulation',
      'Öffentlich erreichbare Anwendung',
    ],
    image: {
      src: '/projects/oasis/wetter-layer-abnahme.jpeg',
      alt: 'Oasis Simulator mit Weltkarte, Klimazonen und geöffnetem Wetterlayer',
      fit: 'contain',
      position: 'top',
    },
    gallery: [
      {
        src: '/projects/oasis/wetter-layer-abnahme.jpeg',
        alt: 'Wetter- und Klimazonenansicht des Oasis Simulators',
        fit: 'contain',
        position: 'top',
      },
    ],
    liveUrl: 'https://world-eden-era.org',
    liveLabel: 'World Eden Era ansehen',
    source: 'oasis-simulation-app/docs/screenshots/wetter-layer-abnahme.jpeg',
  },
  {
    slug: 'wee-crm',
    title: 'WEE CRM',
    group: 'wee',
    accent: 'blue',
    eyebrow: 'FUNDRAISING · FRONTEND-PROTOTYP',
    claim: 'Spendenimporte ohne blinde Dubletten.',
    summary:
      'Ein React-/TypeScript-Frontend-Prototyp für Spenderprofile, Spenden, Fundraising-Funnels, Follow-ups und Audit-Historien.',
    problem:
      'Kontakte, Spenden und Folgeschritte verlieren ihren Zusammenhang, wenn Importe neue Dubletten erzeugen oder bereits bearbeitete Felder überschreiben.',
    build:
      'Der Frontend-Stand bildet eine mehrstufige CSV-Zuordnung mit Vorschau, Schutz bearbeiteter Felder, Nurturing-Funnels und historischen Kontakt-Ereignissen ab.',
    evidence:
      'Sieben UI-Module liegen als extrahierter React-/TypeScript-Quellstand im Projektarchiv vor. Backend, Build und Supabase-Anbindung fehlen noch.',
    status: 'Frontend-Prototyp · kein öffentlicher Build',
    role: 'Frontend-Entwicklung',
    period: 'August 2026',
    tags: ['7 UI-Module', 'CSV-Matching', 'noch kein Backend'],
    proof: [
      'Spender- und Spendenansichten im Quellstand',
      'Mehrstufige CSV-Zuordnung mit Vorschau',
      'Backend und öffentlicher Build noch ausstehend',
    ],
    gallery: [],
    metric: {
      value: '7',
      label: 'belegte UI-Module',
    },
    honesty:
      'Belegt ist der Frontend-Quellstand; ein öffentlicher Build und eine belastbare Produktaufnahme existieren noch nicht.',
    source: 'wee-crm/reference/extracted-text/Frontend (React, .tsx)__*.txt',
  },
  {
    slug: 'drive-automatisierung',
    title: 'Drive-Automatisierung',
    group: 'wee',
    accent: 'coral',
    eyebrow: 'PYTHON · GOOGLE DRIVE',
    claim: '235 Elemente reproduzierbar statt per Hand sortiert.',
    summary:
      'Eine YAML-Datei beschreibt Zielstruktur und Ablageregeln. Python-Skripte klassifizieren Dateien, prüfen Drift und bereiten Kopier- und Verschiebepläne vor.',
    problem:
      'Manuell gewachsene Drive-Strukturen sind schwer zu prüfen: gleichnamige Dateien, unsichere Zielordner und still abweichende Stände machen Umbauten riskant.',
    build:
      'Leon hat Intake, Klassifikation, Generator, Konfliktauflösung, Audit und Freigabe als getrennte Schritte aufgebaut. YAML bleibt die zentrale Quelle.',
    evidence:
      'Im dokumentierten Abschlussabgleich waren 235 Elemente kopierbar, 39 Konflikte aufgelöst und ein mehrdeutiger Treffer bewusst nicht zugeordnet.',
    status: 'Abschlussabgleich dokumentiert',
    role: 'Systemdesign & Automatisierung',
    period: 'Juli bis August 2026',
    tags: ['YAML als Quelle', '39 gelöst', '1 bewusst offen'],
    proof: [
      '235 Elemente als kopierbar bestätigt',
      '39 mehrdeutige Zuordnungen aufgelöst',
      'Ein unsicherer Treffer bewusst übersprungen',
    ],
    gallery: [],
    metric: {
      value: '235',
      label: 'kopierbare Elemente',
    },
    honesty:
      'Das Produkt ist eine Automatisierung ohne eigene UI. Deshalb zeigt die Seite Kennzahlen und Quellbelege statt eines erfundenen Dashboards.',
    source: 'google-drive-management/resolution-review.md',
  },
  {
    slug: 'keel-showcase',
    title: 'Keel Showcase',
    group: 'keel',
    accent: 'violet',
    eyebrow: 'LIVE-DEMO · KEEL',
    claim: 'Eine anklickbare Keel-Demo, die ihre Grenzen nennt.',
    summary:
      'Der Desktop-Showcase verbindet Keel-Dashboard, Website Builder, Social Media und Commerce in einer Oberfläche.',
    problem:
      'Ein Produktportfolio bleibt abstrakt, solange Besucher nur Beschreibungen sehen. Gleichzeitig dürfen Demo-Werte nicht wie echte Kundendaten aussehen.',
    build:
      'Leon hat mehrere Keel-Module in eine konsistente, direkt anklickbare Oberfläche gebracht und die Herkunft der sichtbaren Module dokumentiert.',
    evidence:
      'Die Demo läuft ohne Login und Datenbank. Sichtbare Werte sind gekennzeichnete Beispieldaten; die drei gezeigten Screens stammen aus der Abnahme.',
    status: 'Live · Desktop-Demo',
    role: 'Fullstack & Produktdesign',
    period: 'August 2026',
    tags: ['live', 'Desktop', 'Beispieldaten'],
    proof: [
      'Dashboard, Website Builder und Social-Modul',
      'Echte Screens aus der dokumentierten Abnahme',
      'Beispieldaten klar als solche gekennzeichnet',
    ],
    image: {
      src: '/projects/keel-showcase/dashboard.png',
      alt: 'Dashboard des Keel Showcase mit Modulübersicht',
      fit: 'cover',
      position: 'top',
    },
    gallery: [
      {
        src: '/projects/keel-showcase/dashboard.png',
        alt: 'Dashboard des Keel Showcase',
        fit: 'contain',
        position: 'top',
      },
      {
        src: '/projects/keel-showcase/website-builder.png',
        alt: 'Website-Builder-Modul im Keel Showcase',
        fit: 'contain',
        position: 'top',
      },
      {
        src: '/projects/keel-showcase/social-media.png',
        alt: 'Social-Media-Modul im Keel Showcase',
        fit: 'contain',
        position: 'top',
      },
    ],
    liveUrl: 'https://keel-showcase.vercel.app',
    liveLabel: 'Showcase live öffnen',
    source: 'keel-showcase/abnahme/2026-08-21/screenshots/',
  },
  {
    slug: 'keel-harness',
    title: 'Keel-Harness',
    group: 'keel',
    accent: 'lime',
    eyebrow: 'AGENTEN-HARNESS · DASHBOARD',
    claim: 'Agentenarbeit messbar und begrenzt.',
    summary:
      'Der Standalone-Bausatz rüstet einen Workspace mit Wächter-Hooks, Dauerregeln, Befehlen und Skills aus — plus eigenem Control-Center.',
    problem:
      'Agentenarbeit wird unzuverlässig, wenn Regeln nur im Chat stehen, Sitzungen ihren Zustand verlieren oder sensible Werte in Berichten landen.',
    build:
      'Leon hat Setup, Regeln und Messung in einen reproduzierbaren Bausatz übersetzt. Das Dashboard trennt Erfassung und Darstellung und fasst Repository-, Hook-, Projekt- und Sitzungsstatus zusammen.',
    evidence:
      'Die Vorschau ist eine echte, lokal erzeugte Control-Center-Momentaufnahme. Drei Filterstufen verhindern, dass Zugangsdaten in die HTML-Ansicht gelangen.',
    status: 'Installierbarer Bausatz · lokales Dashboard',
    role: 'Systemarchitektur & Fullstack',
    period: 'August 2026',
    tags: ['installierbar', 'Dashboard', '3 Geheimnisfilter'],
    proof: [
      'Eigenes Dashboard mit Generator',
      'Wächter-Hooks und dauerhafte Workspace-Regeln',
      'Drei dokumentierte Filterstufen für Secrets',
    ],
    image: {
      src: '/projects/keel-harness/dashboard.png',
      alt: 'Control-Center des Keel-Harness mit Hook-, Projekt- und Sitzungsstatus',
      fit: 'contain',
      position: 'top',
    },
    gallery: [
      {
        src: '/projects/keel-harness/dashboard.png',
        alt: 'Echte lokale Control-Center-Momentaufnahme des Keel-Harness',
        fit: 'contain',
        position: 'top',
      },
    ],
    repoUrl: 'https://github.com/coastcoder439/keel-harness-standalone-setup',
    repoLabel: 'Öffentlichen Quellstand ansehen',
    source: 'keel-harness-standalone-setup/payload/dashboard/',
  },
  {
    slug: 'flowvoice',
    title: 'FlowVoice',
    group: 'keel',
    accent: 'blue',
    eyebrow: 'VOICE · WINDOWS',
    claim: 'Diktat dorthin, wo der Cursor schon ist.',
    summary:
      'Der Windows-Assistent nimmt per Hotkey auf, transkribiert mit wählbaren Engines und setzt den Text in die zuvor aktive Anwendung ein.',
    problem:
      'Spracheingabe unterbricht den Arbeitsfluss, wenn Aufnahme, Transkription und Zielanwendung getrennt bedient werden müssen oder ihr Zustand unsichtbar bleibt.',
    build:
      'Leon hat Hotkey-Steuerung, austauschbare Transkriptions-Engines, Einfügen in die aktive Anwendung und einen eigenen Wave-Renderer verbunden.',
    evidence:
      'Gezeigt wird die echte Ausgabe des V3-Wave-Renderers. Einen öffentlichen App-Build gibt es nicht; der Quellstand wird aus Sicherheitsgründen nicht verlinkt.',
    status: 'Lokaler Windows-Prototyp',
    role: 'KI-Integration & Desktop',
    period: 'seit Juli 2026',
    tags: ['Windows', 'Faster Whisper', 'Hotkey'],
    proof: [
      'Aufnahme während gedrücktem Hotkey',
      'Wählbare Transkriptions-Engines',
      'Renderer zeigt Aufnahme- und Fehlerzustände',
    ],
    image: {
      src: '/projects/flowvoice/wave.png',
      alt: 'Echte Wave-Renderer-Ausgabe von FlowVoice',
      fit: 'contain',
      position: 'center',
    },
    gallery: [
      {
        src: '/projects/flowvoice/wave.png',
        alt: 'Wave-Renderer von FlowVoice während einer Sprachaufnahme',
        fit: 'contain',
        position: 'center',
      },
    ],
    honesty: 'Kein öffentlicher App-Build. Der Screenshot belegt den Renderer, nicht eine fertige Desktop-Anwendung.',
    source: 'voiceai/V3/wave_renderer.py und hotkey_manager.py',
  },
  {
    slug: 'ebike-vermietung',
    title: 'E-Bike-Vermietung',
    group: 'kunden',
    accent: 'yellow',
    eyebrow: 'WL BIKE RENTAL · KUNDENPROJEKT',
    claim: 'Vom ersten Klick bis zur Tageszentrale.',
    summary:
      'Die V3-Vorführversion führt von acht Rädern über Lieferort und sechs Küstenrouten bis zur Kalenderauswahl. Eine separate Zentrale bündelt den Betrieb.',
    problem:
      'Eine Vermietung braucht zwei sehr unterschiedliche Oberflächen: eine einfache, emotionale Buchungsstrecke für Gäste und eine dichte Arbeitsansicht für den Tagesbetrieb.',
    build:
      'Leon hat Produktauswahl, Route, Lieferung und Kalender als geführten Kundenfluss umgesetzt und Belegung, Flotte, Werkstatt, Finanzen sowie Service in einer Zentrale zusammengeführt.',
    evidence:
      'Die gezeigten Ansichten stammen direkt aus dem echten V3-Stand. Er ist klickbar, aber ausdrücklich noch kein produktives Buchungssystem.',
    status: 'Klickbarer V3-Stand · nicht produktiv',
    role: 'Fullstack-Entwicklung',
    period: 'Juli bis August 2026',
    tags: ['8 Räder', '6 Routen', 'Buchung + Betrieb'],
    proof: [
      'Desktop- und Mobile-Buchungsfluss',
      'Kalender mit Paket-Zusammenfassung',
      'Separate operative Vermietungszentrale',
    ],
    image: {
      src: '/projects/ebike/hero.png',
      alt: 'Hero der echten WL-Bike-Rental-V3 mit Ostsee-Motiv und Tour-CTA',
      fit: 'cover',
      position: 'top',
    },
    gallery: [
      {
        src: '/projects/ebike/hero.png',
        alt: 'Startansicht der WL-Bike-Rental-V3',
        fit: 'contain',
        position: 'top',
      },
      {
        src: '/projects/ebike/buchung-kalender.png',
        alt: 'Kalender und Küstenpaket im WL-Bike-Rental-Buchungsfluss',
        fit: 'contain',
        position: 'top',
      },
      {
        src: '/projects/ebike/zentrale-heute.png',
        alt: 'Operative Tagesübersicht der E-Bike-Vermietungszentrale',
        fit: 'contain',
        position: 'top',
      },
    ],
    liveUrl: 'https://wl-bikerental.vercel.app/v3',
    liveLabel: 'V3-Vorführversion öffnen',
    source: 'wl-bikerental/gan-harness/iterations/final-*.png',
  },
  {
    slug: 'shopify-commerce',
    title: 'Shopify-Shop / Commerce',
    group: 'kunden',
    accent: 'coral',
    eyebrow: 'COMMERCE · KUNDENPROJEKT',
    claim: 'Freigaben statt autonomer Außenwirkung.',
    summary:
      'Die Keel-Commerce-Demo zeigt fünf Arbeitsbereiche: Übersicht, Design-Studio, Sichtbarkeit, Buchhaltung und Kundenservice.',
    problem:
      'Automatisierung im Shop darf Vorschläge vorbereiten, aber nicht ungeprüft Designs, Metadaten, Antworten oder Buchhaltungszuordnungen veröffentlichen.',
    build:
      'Leon hat Agenten-Vorschläge und schreibende Schritte getrennt. Änderungen landen in einer Freigabe-Queue, bevor sie Außenwirkung erhalten.',
    evidence:
      'Die Produktoberfläche und der Code-Stand sind real. Alle sichtbaren Kennzahlen sind synthetisch und deterministisch. Eine produktive Shopify-Anbindung gehört nicht zu diesem Stand.',
    status: 'Live-Demo · synthetische Daten',
    role: 'Frontend & Produktlogik',
    period: 'August 2026',
    tags: ['5 Bereiche', 'Freigabe-Queue', 'synthetische Daten'],
    proof: [
      'Übersicht, Design, Sichtbarkeit, Buchhaltung, Service',
      'Schreibende Schritte warten auf Freigabe',
      'Demo-Kennzahlen klar als synthetisch benannt',
    ],
    image: {
      src: '/projects/commerce/keel-commerce.png',
      alt: 'Keel-Commerce-Demo mit fünf Arbeitsbereichen und Freigabe-Queue',
      fit: 'cover',
      position: 'top',
    },
    gallery: [
      {
        src: '/projects/commerce/keel-commerce.png',
        alt: 'Keel-Commerce-Dashboard',
        fit: 'contain',
        position: 'top',
      },
      {
        src: '/projects/commerce/preview-viewport.jpeg',
        alt: 'Commerce-Viewport aus dem echten Repository-Stand',
        fit: 'contain',
        position: 'top',
      },
      {
        src: '/projects/commerce/preview-fullpage.jpeg',
        alt: 'Vollständige Commerce-Oberfläche aus dem Repository-Stand',
        fit: 'contain',
        position: 'top',
      },
    ],
    liveUrl: 'https://keel-showcase.vercel.app/KL/commerce',
    liveLabel: 'Commerce-Demo öffnen',
    repoUrl: 'https://github.com/coastcoder439/shopify-x-paperclip',
    repoLabel: 'Öffentlichen Quellstand ansehen',
    honesty: 'Demo mit synthetischen Daten; keine produktive Shopify-Anbindung.',
    source: 'shopify-x-paperclip und keel-showcase/abnahme/2026-08-21/screenshots/04-commerce.png',
  },
];

export const productsByGroup = (group: ProductGroupKey) =>
  products.filter((product) => product.group === group);

export const productBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const linkedinUrl = 'https://www.linkedin.com/in/leonpoesken/';
export const githubUrl = 'https://github.com/coastcoder439';
export const resumeUrl = '/Leon-Poesken-Lebenslauf.pdf';
