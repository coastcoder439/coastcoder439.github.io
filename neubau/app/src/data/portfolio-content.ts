// Inhalt der Portfolio-Seite nach Storyboard v4.6 (Owner-Gate 02.09.2026).
// Regeln: kein GitHub/Repo-Link, keine Software-Screenshots, Showcases nur als
// eingebettete Vercel-iframes; kein Auftrags-/Bezahlverhaeltnis nahelegen.

export const resumeUrl = '/Leon-Poesken-Lebenslauf.pdf';
export const linkedinUrl = 'https://www.linkedin.com/in/leonpoesken/';

export type Showcase =
  | { kind: 'iframe'; url: string; title: string; note: string }
  | { kind: 'text' };

export type Produkt = {
  slug: string;
  name: string;
  text: string;
  showcase: Showcase;
};

export type Abschnitt = {
  id: string;
  nummer: string;
  eyebrow: string;
  headline: string;
  copy: string;
  produkte: Produkt[];
};

export const abschnitte: Abschnitt[] = [
  {
    id: 'ursprung',
    nummer: '02',
    eyebrow: 'URSPRUNG',
    headline: 'Kein Auftrag. Ein Antrieb.',
    copy: 'World Eden Era ist die gemeinnützige UG, die ich mitgegründet habe — nachhaltige Ernährung durch Aquaponik. Dieser Antrieb brachte mich zum Systembau. Die ersten Systeme entstanden direkt für sie.',
    produkte: [
      {
        slug: 'oasis',
        name: 'Oasis-Simulator',
        text: 'Mein Herzensprojekt — ursprünglich von mir entwickelt, heute gemeinsam mit meiner Orga weiterentwickelt: die Aquaponik-Oase als drehbares 3D-Modell im Browser (272 MB aus Blender) plus eine Simulation, die Wetter und Klima in Ertrag und Kosten einrechnet. Die 3D-Präsentation dazu läuft live auf world-eden-era.org.',
        showcase: {
          kind: 'iframe',
          url: 'https://showcase-oasis-simulator.vercel.app',
          title: 'Oasis-Simulator — Showcase',
          note: 'Prototyp · Demo-Daten',
        },
      },
      {
        slug: 'wee-crm',
        name: 'WEE CRM',
        text: 'Fundraising-CRM der gUG, im Aufbau: Kontakte, Spenden, CSV-Import, Audit-Log auf React 19 und Supabase. Der Stand: ein getesteter Prototyp.',
        showcase: {
          kind: 'iframe',
          url: 'https://showcase-wee-crm.vercel.app',
          title: 'WEE CRM — Showcase',
          note: 'Prototyp · synthetische Beispieldaten',
        },
      },
      {
        slug: 'drive',
        name: 'Drive-Automatisierung',
        text: 'Der Vereins-Drive gehorcht einer YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln und meldet Abweichungen — 233 Dateien im Migrationsplan, jeder Lauf mit Abgleichsbericht.',
        showcase: { kind: 'text' },
      },
    ],
  },
  {
    id: 'praxis',
    nummer: '04',
    eyebrow: 'PRAXIS',
    headline: 'Echte Probleme, echte Lösungen.',
    copy: 'Dieselbe Methodik an drei echten Problemen: Räder vermieten an der Ostsee, Print-on-Demand verkaufen, Anfragen gewinnen. Alles geprüft — jeder Scroll-Zustand per Screenshot, jede Zahl auf 0,00 Euro genau in der GuV.',
    produkte: [
      {
        slug: 'wl-bike',
        name: 'WL Bike Rental',
        text: 'Scroll-Story rund um einen E-Bike-Verleih an der Ostsee: eine Radtour von Wald über Bodden bis Strand, jedes Angebot eine Station. Gebaut in Next.js, jeder Scroll-Zustand per Playwright-Screenshot verifiziert — der Stand: ein Prototyp.',
        showcase: {
          kind: 'iframe',
          url: 'https://wl-bikerental.vercel.app/v3/',
          title: 'WL Bike Rental — Website-Prototyp',
          note: 'Prototyp · Demo-Daten',
        },
      },
      {
        slug: 'nordwind',
        name: 'Nordwind Studio',
        text: 'Demo-Cockpit für Print-on-Demand auf Shopify: sieben KI-Agenten von Designfreigabe bis USt-Voranmeldung, im Browser durchklickbar ohne Server. 96 Belege treffen die GuV auf 0,00 Euro genau — der Stand: ein Prototyp.',
        showcase: {
          kind: 'iframe',
          url: 'https://showcase-nordwind.vercel.app',
          title: 'Nordwind Studio — Commerce-Cockpit',
          note: 'Prototyp · alle Zahlen erfunden',
        },
      },
      {
        slug: 'funnel-desk',
        name: 'Funnel Desk',
        text: 'Akquise-Trichter im Vergleich: mehrere Zielgruppen nebeneinander, dieselben sechs Stufen von Reichweite bis Bindung, Betreiber-Dashboard plus mobile Auslieferung. Gedacht im Verbund mit Social-Dashboard und CRM — der Stand: ein Prototyp.',
        showcase: {
          kind: 'iframe',
          url: 'https://showcase-funnel-desk.vercel.app/dashboard',
          title: 'Funnel Desk — Betreiber-Dashboard',
          note: 'Prototyp — keine echten Daten eingeben',
        },
      },
    ],
  },
  {
    id: 'keel',
    nummer: '05',
    eyebrow: 'KEEL',
    headline: 'Regeln statt Vertrauen.',
    copy: 'Was zählt wirklich — in Code gegossen: Disziplin, die erzwungen wird statt erhofft.',
    produkte: [
      {
        slug: 'keel-showcase',
        name: 'Keel Showcase',
        text: 'Die Keel-Oberfläche zum Durchklicken: Website-Builder, Social Media, Commerce. Ohne Server, ohne Anmeldung — direkt hier eingebettet.',
        showcase: {
          kind: 'iframe',
          url: 'https://keel-showcase.vercel.app',
          title: 'Keel Showcase — Oberfläche',
          note: 'Live-Demo',
        },
      },
      {
        slug: 'keel-harness',
        name: 'Keel-Harness',
        text: 'Ein Bausatz, der KI-Agenten diszipliniert arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Satz an den Agenten installiert ihn in jeden Projektordner.',
        showcase: { kind: 'text' },
      },
      {
        slug: 'flowvoice',
        name: 'FlowVoice',
        text: 'Diktat für Windows: Hotkey drücken, sprechen — der Text steht im aktiven Fenster. Vier Erkennungs-Engines zur Wahl, von komplett lokal bis Groq.',
        showcase: { kind: 'text' },
      },
    ],
  },
];

export type Kachel = { name: string; text: string };

export const disziplinen: Kachel[] = [
  {
    name: 'Prompt Engineering',
    text: 'Ein Prompt ist ein Muster, kein Zauberspruch: einmal erkannt, lässt es sich von einem Anwendungsfall auf den nächsten übertragen.',
  },
  {
    name: 'Context Engineering',
    text: 'Erst das Ganze sehen, dann das Fenster füllen: Welches Wissen die Aufgabe braucht, entscheidet der Blick auf den kompletten Ablauf.',
  },
  {
    name: 'Harness-Engineering',
    text: 'Regeln, die im Code stehen, gelten in jedem Projekt gleich — Wächter, Gates, Messwerte halten Agenten ehrlich, egal in welchem Tätigkeitsfeld.',
  },
  {
    name: 'Skill Engineering',
    text: 'Was sich in einem Bereich bewährt hat, wird abrufbares Können für den nächsten — Praxis aus vielen Tätigkeitsfeldern, geladen, wenn die Aufgabe es braucht.',
  },
];

export const ergebnisse: Kachel[] = [
  {
    name: 'Websites',
    text: 'Seiten, die eine Geschichte erzählen statt Kacheln zu stapeln — wie die Radtour-Story rund um einen E-Bike-Verleih.',
  },
  {
    name: 'Apps',
    text: 'Werkzeuge mit Oberfläche: vom Diktat-Overlay bis zum drehbaren 3D-Modell.',
  },
  {
    name: 'Funnels',
    text: 'Strecken, die aus Besuchern Anfragen machen — ein Funnel-Builder entsteht gerade als Prototyp.',
  },
  {
    name: 'Automations',
    text: 'Abläufe, die ohne Zuruf laufen: Ablage-Regeln, Agenten, Prüfschritte.',
  },
];

export const zertifikate = [
  { name: 'EU AI Act Essentials', geber: 'KI-Campus' },
  { name: 'SC-900 Security Fundamentals', geber: 'Microsoft' },
  { name: 'ENISA-Grundlagen', geber: 'EU Academy' },
  { name: 'Cybersecurity Fundamentals', geber: 'IBM' },
];

export const methodik = {
  nummer: '03',
  eyebrow: 'METHODIK',
  headline: 'Was zählt wirklich?',
  copy: 'Die Frage, die mich durch die IT-Welt begleitete, wurde Methodik — vier Disziplinen, mit denen ich KI-Systeme baue, die halten.',
  ueberleitung: 'Daraus entstehen:',
};

export const profil = {
  nummer: '06',
  eyebrow: 'PROFIL',
  headline: 'Muster erkennen. Systeme bauen.',
  arbeitsweise:
    'Ich sehe das Ganze, nicht das Einzelteil: Muster erkennen und in viele reale Praxis- und Tätigkeitsbereiche übertragen.',
  zertifikateCopy:
    'Vier Nachweise laufen — hier stehen sie, sobald sie bestanden und online prüfbar sind.',
  fuerWen:
    'Für Teams, die kein Konzeptpapier brauchen, sondern ein laufendes System. Ich komme aus dem Vertrieb, also rede ich in Ergebnissen — Details im Lebenslauf.',
};

export const abschluss = {
  nummer: '07',
  eyebrow: 'AUF EIN GESPRÄCH',
  headline: 'Auf ein Gespräch.',
  copy: 'Wege zu deinem Ziel gibt es viele — reden wir über deinen. LinkedIn oder der Lebenslauf als PDF.',
};
