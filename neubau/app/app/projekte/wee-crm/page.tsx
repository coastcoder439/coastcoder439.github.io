import { ArrowLeft, ArrowUpRight, Database, HeartHandshake, Leaf, ListTodo, ShieldCheck, Users } from 'lucide-react';
import Link from 'next/link';

const modules = [
  { icon: Users, label: 'Dashboard Übersicht' },
  { icon: ListTodo, label: 'Follow-ups' },
  { icon: Users, label: 'Kontaktzentrale' },
  { icon: HeartHandshake, label: 'Spenden-Historie' },
  { icon: Leaf, label: 'Fundraising' },
  { icon: ListTodo, label: 'Nurturing' },
  { icon: Database, label: 'System-Datenbank' },
];

export default function WeeCrmProject() {
  return (
    <main className="min-h-screen bg-[#eee9e4] text-[#171412]">
      <a
        href="#projekt"
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-[#171412] px-4 py-3 text-sm font-bold text-white focus:translate-y-0"
      >
        Direkt zum Projekt
      </a>

      <header className="border-b border-[#171412]/20 bg-[#fcfaf6]">
        <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex min-h-11 items-center gap-3 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6649]">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Portfolio
          </Link>
          <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[#171412]/55">Projektdossier · 02 / 08</p>
        </div>
      </header>

      <section className="overflow-hidden border-b border-[#171412]/20 bg-[#735b63] text-white">
        <div className="mx-auto grid min-h-[62svh] max-w-[1600px] content-between border-x border-white/20 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/25 pb-7">
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.17em] text-[#d9f56b]">WEE · Fundraising & Kontakte</p>
            <p className="max-w-[28rem] text-right text-xs leading-relaxed text-white/65">React · Supabase-Architektur · PHP Donation/Auth</p>
          </div>
          <div className="grid gap-8 py-12 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <div>
              <h1 className="font-display text-[clamp(4.5rem,14vw,14rem)] font-black uppercase leading-[0.7] tracking-[-0.09em]">
                WEE
                <span className="block text-[#d9f56b]">CRM</span>
              </h1>
              <p className="mt-8 max-w-[52rem] font-serif text-[clamp(2rem,4.5vw,4.8rem)] italic leading-[0.94]">
                Beziehungen strukturiert begleiten — ohne sie zu entmenschlichen.
              </p>
            </div>
            <div className="border border-white/25 p-5">
              <ShieldCheck aria-hidden="true" className="size-7 text-[#d9f56b]" />
              <p className="mt-5 text-sm font-bold">Datenschutzsicherer Portfolio-Stand</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">Keine Kontakte, Spendensummen oder importierten Dokumentinhalte werden veröffentlicht.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projekt" className="scroll-mt-4 py-20 sm:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-t border-[#171412]/25 pt-5 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#735b63]">Echter Frontend-Bestand</p>
              <p className="mt-5 max-w-[25rem] text-sm leading-relaxed text-[#171412]/62">
                Die Fläche folgt `App.tsx (V5 – Prop Fix)` und den darin verdrahteten Komponenten. Wo Quelldaten fehlen, bleibt die Oberfläche leer.
              </p>
            </div>
            <h2 className="font-display text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.84] tracking-[-0.07em]">
              Oberfläche ohne
              <span className="block font-serif font-normal italic normal-case text-[#2f6649]">Datenkulisse.</span>
            </h2>
          </div>

          <div className="mt-14 overflow-hidden border border-[#171412] bg-[#f9f8f6]">
            <div className="flex min-h-16 items-center justify-between gap-5 border-b border-[#171412]/18 bg-white px-5 sm:px-7">
              <div className="inline-flex items-center gap-3">
                <span className="grid size-9 place-items-center bg-[#2f6649] text-white">
                  <Leaf aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-black">World Eden Era</p>
                  <p className="text-[0.65rem] text-[#171412]/50">Fundraising CRM</p>
                </div>
              </div>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#2f6649]">Leerer Zustand</span>
            </div>

            <div className="grid min-h-[44rem] lg:grid-cols-[18rem_1fr]">
              <nav aria-label="CRM-Module" className="border-b border-[#171412]/18 bg-white p-4 lg:border-b-0 lg:border-r">
                <p className="px-3 py-3 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#171412]/40">Navigation aus App.tsx</p>
                <ul className="mt-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                  {modules.map(({ icon: Icon, label }, index) => (
                    <li key={label}>
                      <div className={`flex min-h-12 items-center gap-3 px-3 text-sm ${index === 0 ? 'bg-[#e4eee7] font-bold text-[#235239]' : 'text-[#171412]/65'}`}>
                        <Icon aria-hidden="true" className="size-4" />
                        {label}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-5 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#171412]/18 pb-6">
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[#2f6649]">Dashboard Übersicht</p>
                    <h3 className="mt-2 font-display text-3xl font-black uppercase tracking-[-0.045em]">Fundraising auf einen Blick</h3>
                  </div>
                  <p className="text-xs text-[#171412]/50">Keine Datenquelle verbunden</p>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {['Kontakte', 'Spenden', 'Offene Aufgaben'].map((label) => (
                    <section key={label} className="min-h-36 border border-[#171412]/16 bg-white p-5">
                      <p className="text-sm font-bold">{label}</p>
                      <p className="mt-8 font-serif text-3xl italic text-[#171412]/28">Keine Daten</p>
                    </section>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
                  <section className="min-h-64 border border-[#171412]/16 bg-white p-5">
                    <div className="flex items-center justify-between border-b border-[#171412]/12 pb-4">
                      <p className="text-sm font-bold">Aktivitäten</p>
                      <span className="font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[#171412]/40">leer</span>
                    </div>
                    <div className="grid min-h-44 place-items-center text-center">
                      <div>
                        <ListTodo aria-hidden="true" className="mx-auto size-7 text-[#2f6649]/45" />
                        <p className="mt-4 text-sm text-[#171412]/48">Noch keine Aktivitäten geladen.</p>
                      </div>
                    </div>
                  </section>
                  <section className="min-h-64 border border-[#171412]/16 bg-[#2f6649] p-5 text-white">
                    <p className="font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[#d9f56b]">Sicherheitsgrenze</p>
                    <p className="mt-7 font-serif text-3xl italic leading-none">Hier endet die öffentliche Ansicht.</p>
                    <p className="mt-5 text-xs leading-relaxed text-white/65">Personenbezogene Informationen bleiben im geschützten System.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#171412]/20 bg-[#171412] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-[#d9f56b]">Belegbarer Quellumfang</p>
            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl">Sieben verdrahtete Ansichten.</h2>
          </div>
          <div className="grid gap-px bg-white/20 sm:grid-cols-2">
            {[
              'App.tsx · Navigation & Zustände',
              'Dashboard.tsx · Übersicht',
              'ContactCenter.tsx · Kontakte',
              'Donations.tsx · Spenden',
              'FunnelBoard.tsx · Fundraising',
              'DatabaseViewer.tsx · Systemdaten',
            ].map((file) => (
              <div key={file} className="bg-[#171412] p-5 font-mono text-xs leading-relaxed text-white/65">
                {file}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#d9f56b] text-[#171412]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex min-h-11 items-center gap-3 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171412]">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Zurück zu allen Projekten
          </Link>
          <a
            href="https://github.com/coastcoder439/wee-crm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-3 border-b border-[#171412] py-2 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171412]"
          >
            Repository öffnen
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}
