import { ArrowRight, ArrowUpRight, Check, Download, MessageCircle } from 'lucide-react';

export function ProfileAndContact() {
  return (
    <>
      <section id="profil" className="scroll-mt-4 border-b border-line bg-cobalt py-20 text-white sm:py-28">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 border-t border-white/35 pt-5 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
            <div>
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65">04 · Profil</p>
              <p className="mt-5 max-w-[24rem] text-sm leading-relaxed text-white/68">
                Berufserfahrung aus Vertrieb und Projektsteuerung trifft auf unternehmerische Produktarbeit.
              </p>
            </div>
            <h2 className="font-display text-[clamp(3rem,7.3vw,7.7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Verstehen.
              <span className="block font-serif font-normal italic normal-case text-acid">Dann bewegen.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-white/28 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="bg-cobalt p-6 sm:p-9 lg:p-12">
              <p className="font-serif text-[clamp(2.2rem,4vw,4.5rem)] italic leading-[0.96] tracking-[-0.035em]">
                „Vom ersten Gespräch bis zur Inbetriebnahme denke ich Projekte als zusammenhängenden Weg.“
              </p>
              <div className="mt-12 grid gap-px bg-white/25 sm:grid-cols-3">
                {[
                  ['~50', 'PV-Projekte begleitet'],
                  ['B2B + B2C', 'Vertriebserfahrung'],
                  ['seit 10/23', 'World Eden Era'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-cobalt p-5">
                    <p className="font-display text-3xl font-black uppercase tracking-[-0.05em] text-acid">{value}</p>
                    <p className="mt-3 text-xs leading-relaxed text-white/65">{label}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="bg-cobalt">
              {[
                ['01', 'Vertrieb & Beratung', 'Bedarf erfassen, Entscheidungswege strukturieren und Kunden verlässlich begleiten.'],
                ['02', 'Projektentwicklung', 'Von der Idee über Planung und Koordination bis zu einem nutzbaren Stand.'],
                ['03', 'Markt & Organisation', 'Marktanalysen, Funnel, Fundraising, Teams und operative Abläufe zusammenführen.'],
                ['04', 'Digitale Produktarbeit', 'Anforderungen präzisieren, reale Frontends prüfen und Fortschritt belegbar machen.'],
              ].map(([number, title, copy]) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/25 p-6 last:border-b-0 sm:p-8">
                  <span className="font-mono text-[0.62rem] text-acid">{number}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-[-0.035em]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-4 bg-signal text-ink">
        <div className="mx-auto grid min-h-[78svh] w-full max-w-[1600px] grid-rows-[auto_1fr_auto] border-x border-ink/25 px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4 border-b border-ink/25 py-6 font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em]">
            <span>05 · Kontakt</span>
            <span className="text-right">Berlin / offen für Austausch</span>
          </div>

          <div className="grid content-center gap-10 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="max-w-[40rem] text-base font-semibold leading-relaxed text-ink/68 sm:text-lg">
                Sie möchten ein Projekt, eine Rolle oder eine Zusammenarbeit besprechen? Schreiben Sie mir — ich freue mich auf den Austausch.
              </p>
              <h2 className="mt-7 font-display text-[clamp(4rem,11vw,11.5rem)] font-black uppercase leading-[0.75] tracking-[-0.085em]">
                Auf ein
                <span className="block font-serif font-normal italic normal-case">Gespräch.</span>
              </h2>
            </div>

            <div className="grid gap-3">
              <a
                href="https://www.linkedin.com/in/leonpoesken/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-20 items-center justify-between border border-ink bg-ink px-5 font-bold text-paper transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:px-7"
              >
                <span className="inline-flex items-center gap-3">
                  <MessageCircle aria-hidden="true" className="size-5" />
                  Auf LinkedIn vernetzen
                </span>
                <ArrowUpRight aria-hidden="true" className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a
                href="Leon-Poesken-Lebenslauf.pdf"
                download
                className="group flex min-h-20 items-center justify-between border border-ink px-5 font-bold transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:px-7"
              >
                <span className="inline-flex items-center gap-3">
                  <Download aria-hidden="true" className="size-5" />
                  Lebenslauf herunterladen
                </span>
                <ArrowRight aria-hidden="true" className="size-6 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/25 py-6 text-xs font-semibold">
            <p>Leon Pösken · Portfolio 2026</p>
            <p className="inline-flex items-center gap-2">
              <Check aria-hidden="true" className="size-4" />
              Echte Produktstände. Keine Mockups.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
