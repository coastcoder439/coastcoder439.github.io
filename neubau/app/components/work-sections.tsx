import { FileCode2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

import { ProjectActions, ProjectLink, ProjectMeta } from '@/components/project-bits';
import { ProjectCard, ProjectRail } from '@/components/project-rail';

export function WorkSections() {
  return (
    <div id="arbeit">
      <SystemsRail />
      <AutomationRail />
      <ProductsRail />
    </div>
  );
}

function SystemsRail() {
  return (
    <ProjectRail
      id="systeme"
      number="01"
      kicker="Simulation & Systeme"
      intro="Komplexität wird nicht versteckt, sondern so aufbereitet, dass Entscheidungen möglich werden."
      count={2}
      title={
        <>
          Realität wird
          <span className="block font-serif font-normal italic normal-case text-forest">modellierbar.</span>
        </>
      }
      className="bg-paper text-ink"
    >
      <ProjectCard ariaLabel="Projekt 1 von 2: Oasis Simulator" className="lg:w-[52rem] lg:max-w-[52rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="01" status="Browser-Prototyp · echter Screenshot" tone="bg-forest" />
          <div className="relative aspect-[16/9] overflow-hidden border-b border-current/20 bg-forest">
            <Image
              unoptimized
              src="/projects/oasis/wetter-layer-abnahme.jpeg"
              alt="Oasis-Oberfläche mit Weltkarte, Klimazonen, Wetter-Layer und Simulationssteuerung"
              width={1314}
              height={1304}
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute bottom-4 left-4 bg-acid px-3 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink">
              Repo-Material · 2026
            </span>
          </div>
          <div className="grid flex-1 gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-forest">Oasis Simulator</p>
              <h3 className="mt-3 font-display text-[clamp(2.7rem,5.4vw,5.7rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
                Eine Welt.
                <span className="block text-forest">Viele Folgen.</span>
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-relaxed text-ink/68">
                Geschlossene Aquaponik-Simulation für Geodom, Klima, Wasserchemie und Ertrag. Der Harness dokumentiert auch negative Befunde statt sie zu kaschieren.
              </p>
              <ProjectActions>
                <ProjectLink href="https://world-eden-era.org">Produkt öffnen</ProjectLink>
                <ProjectLink href="https://github.com/coastcoder439/oasis-simulation-app" repo>
                  Repository
                </ProjectLink>
              </ProjectActions>
            </div>
          </div>
        </article>
      </ProjectCard>

      <ProjectCard ariaLabel="Projekt 2 von 2: WEE CRM" className="lg:w-[44rem] lg:max-w-[44rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="02" status="Frontend-Arbeitsstand · ohne Personendaten" tone="bg-[#735b63]" />
          <div className="grid min-h-[25rem] border-b border-current/20 bg-[#ebe3e1] text-[#171412] sm:grid-cols-[4.5rem_1fr]">
            <div className="hidden border-r border-[#171412]/20 bg-[#fcfaf6] py-5 sm:flex sm:flex-col sm:items-center sm:gap-5">
              <span className="grid size-9 place-items-center bg-[#2f6649] font-display text-sm font-black text-white">W</span>
              {['01', '02', '03', '04', '05'].map((item) => (
                <span key={item} className="font-mono text-[0.58rem] text-[#171412]/45">
                  {item}
                </span>
              ))}
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-start justify-between gap-5 border-b border-[#171412]/20 pb-5">
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[#2f6649]">World Eden Era Fundraising</p>
                  <p className="mt-2 font-display text-2xl font-black uppercase tracking-[-0.04em]">Frontend-Module</p>
                </div>
                <ShieldCheck aria-hidden="true" className="size-6 text-[#2f6649]" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Dashboard', 'Kontaktzentrale', 'Spenden-Historie', 'Fundraising', 'Nurturing', 'System-Datenbank'].map(
                  (module, index) => (
                    <div key={module} className="border border-[#171412]/18 bg-[#fcfaf6] p-4">
                      <p className="font-mono text-[0.55rem] text-[#171412]/40">MODUL {String(index + 1).padStart(2, '0')}</p>
                      <p className="mt-3 text-sm font-bold">{module}</p>
                    </div>
                  ),
                )}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[#171412]/60">
                Sichtbar ist ausschließlich die im Quellbestand benannte Modulstruktur — keine Kontakte, keine Spenden, keine erfundenen Kennzahlen.
              </p>
            </div>
          </div>
          <div className="grid flex-1 gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#735b63]">WEE CRM</p>
              <h3 className="mt-3 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-5xl">
                Kontakte. Spenden. Abläufe.
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-relaxed text-foreground/66">
                React-Frontend, Supabase-Architektur und Donation/Auth-Bausteine für die Arbeit einer gemeinnützigen Organisation.
              </p>
              <ProjectActions>
                <ProjectLink href="projekte/wee-crm/">Frontend ansehen</ProjectLink>
                <ProjectLink href="https://github.com/coastcoder439/wee-crm" repo>
                  Repository
                </ProjectLink>
              </ProjectActions>
            </div>
          </div>
        </article>
      </ProjectCard>
    </ProjectRail>
  );
}

function AutomationRail() {
  return (
    <ProjectRail
      id="automatisierung"
      number="02"
      kicker="Automatisierung & Infrastruktur"
      intro="Ordnung, Produktzugang und Qualitätssicherung werden als nachvollziehbare Werkzeuge gebaut."
      count={3}
      title={
        <>
          Systeme, die
          <span className="block font-serif font-normal italic normal-case text-acid">Arbeit tragen.</span>
        </>
      }
      className="bg-ink text-paper"
    >
      <ProjectCard ariaLabel="Projekt 1 von 3: Drive-Automatisierung" className="border-white/30 bg-[#e3e0d8] text-ink lg:w-[43rem] lg:max-w-[43rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="03" status="Migration & Audit · Quellmaterial" tone="bg-[#5d6462]" />
          <div className="grid min-h-[28rem] border-b border-ink/20 bg-[#5d6462] p-5 text-white sm:p-8">
            <div className="grid content-between gap-10 border border-white/28 p-5 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/55">resolution-review.md</p>
                  <p className="mt-3 font-display text-[clamp(4.5rem,9vw,7.5rem)] font-black leading-none tracking-[-0.075em]">235</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.08em]">kopierbare Einträge</p>
                </div>
                <FileCode2 aria-hidden="true" className="size-8 text-acid" />
              </div>
              <div className="grid gap-px bg-white/25 sm:grid-cols-3">
                {[
                  ['39', 'aufgelöst'],
                  ['01', 'bewusst übersprungen'],
                  ['v1', 'eine Wahrheitsquelle'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#5d6462] p-4">
                    <p className="font-display text-3xl font-black tracking-[-0.05em] text-acid">{value}</p>
                    <p className="mt-2 text-xs leading-snug text-white/65">{label}</p>
                  </div>
                ))}
              </div>
              <div className="font-mono text-[0.65rem] leading-6 text-white/68">
                <p>meta.version: 1</p>
                <p>quelle: drive-konventionen.yaml</p>
                <p>ablauf: bestimmen → zuordnen → prüfen</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#5d6462]">Drive-Automatisierung</p>
            <h3 className="mt-3 font-display text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl">Ordnung als ausführbare Regel.</h3>
            <p className="mt-6 max-w-[34rem] text-sm leading-relaxed text-ink/65">
              YAML-definierte Taxonomie, generierte Ordnerregeln und ein geprüfter Migrationslauf für eine belastbare gemeinsame Ablage.
            </p>
            <ProjectActions>
              <ProjectLink href="https://github.com/coastcoder439/google-drive-management" repo>
                Repository
              </ProjectLink>
            </ProjectActions>
          </div>
        </article>
      </ProjectCard>

      <ProjectCard ariaLabel="Projekt 2 von 3: Keel Showcase" className="border-white/30 bg-paper text-ink lg:w-[50rem] lg:max-w-[50rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="04" status="Live-Produktübersicht · echter Screenshot" tone="bg-[#326773]" />
          <div className="relative aspect-[16/9] overflow-hidden border-b border-ink/20 bg-[#326773]">
            <Image
              unoptimized
              src="/projects/keel-showcase/website-builder.png"
              alt="Echte Keel-Showcase-Oberfläche des Website Builders"
              width={1440}
              height={900}
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute bottom-4 left-4 bg-ink px-3 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-paper">
              Keel · Website Builder
            </span>
          </div>
          <div className="grid flex-1 gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#326773]">Keel Showcase</p>
              <h3 className="mt-3 font-display text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl">Produkte werden klickbar.</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-relaxed text-ink/65">
                Live erreichbare Übersicht für Website Builder, Social Media und Commerce. Der Ausschnitt stammt aus der dokumentierten Abnahme.
              </p>
              <ProjectActions>
                <ProjectLink href="https://keel-showcase.vercel.app">Live öffnen</ProjectLink>
                <ProjectLink href="https://github.com/coastcoder439/keel-showcase" repo>
                  Repository
                </ProjectLink>
              </ProjectActions>
            </div>
          </div>
        </article>
      </ProjectCard>

      <ProjectCard ariaLabel="Projekt 3 von 3: Keel Harness Dashboard" className="border-white/30 bg-[#e8edf0] text-ink lg:w-[48rem] lg:max-w-[48rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="05" status="Dashboard · live erzeugter Stand" tone="bg-[#4a4a45]" />
          <div className="relative aspect-[16/9] overflow-hidden border-b border-ink/20 bg-[#dce8ec]">
            <Image
              unoptimized
              src="/projects/keel-harness/dashboard.png"
              alt="Tatsächlich erzeugtes Control Center des Standalone Keel Harness"
              width={1600}
              height={1000}
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute bottom-4 left-4 bg-acid px-3 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink">
              Gemessen · 29.08.2026
            </span>
          </div>
          <div className="grid flex-1 gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#4a4a45]">Keel Harness</p>
              <h3 className="mt-3 font-display text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl">Messen. Sichern. Arbeiten.</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-relaxed text-ink/65">
                Installierbarer Bausatz aus Wächter-Hooks, Regeln, Befehlen und einem Dashboard. Das Bild wurde vom echten Generator gegen den laufenden Harness erzeugt.
              </p>
              <ProjectActions>
                <ProjectLink href="https://github.com/coastcoder439/keel-harness-standalone-setup" repo>
                  Repository
                </ProjectLink>
              </ProjectActions>
            </div>
          </div>
        </article>
      </ProjectCard>
    </ProjectRail>
  );
}

function ProductsRail() {
  return (
    <ProjectRail
      id="produkte"
      number="03"
      kicker="Produkte & Commerce"
      intro="Von Spracheingabe bis Vermietung und Commerce: Bedienung zeigt sich im echten Produktstand."
      count={3}
      title={
        <>
          Ideen werden
          <span className="block font-serif font-normal italic normal-case text-cobalt">benutzbar.</span>
        </>
      }
      className="bg-background text-foreground"
    >
      <ProjectCard ariaLabel="Projekt 1 von 3: FlowVoice" className="bg-[#11151b] text-white lg:w-[39rem] lg:max-w-[39rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="06" status="Windows-Prototyp · V3-Renderer" tone="bg-[#00d2ff]" />
          <div className="flex min-h-[25rem] flex-col justify-between overflow-hidden border-b border-white/20 bg-[#11151b] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#00d2ff]">wave_renderer.py</p>
              <span className="grid size-10 place-items-center rounded-full border border-[#00d2ff]/45">
                <span className="size-2 rounded-full bg-[#00d2ff]" />
              </span>
            </div>
            <Image
              unoptimized
              src="/projects/flowvoice/wave.png"
              alt="Direkt mit dem FlowVoice-WaveRenderer erzeugte Audiowelle"
              width={1200}
              height={540}
              className="my-10 h-auto w-full"
            />
            <div className="grid grid-cols-3 gap-px bg-white/20 text-center font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white/65">
              {['Hören', 'Transkribieren', 'Einsetzen'].map((step, index) => (
                <div key={step} className="bg-[#11151b] px-2 py-4">
                  <span className="mr-1 text-[#00d2ff]">0{index + 1}</span> {step}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#00d2ff]">FlowVoice</p>
            <h3 className="mt-3 font-display text-5xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-6xl">Sprechen. Direkt im Cursor landen.</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              Windows-Diktat mit Hotkey, mehreren Transkriptions-Engines und direkter Rückgabe an die zuletzt aktive Anwendung.
            </p>
            <ProjectActions>
              <ProjectLink href="https://github.com/coastcoder439/voiceai" repo>
                Repository
              </ProjectLink>
            </ProjectActions>
          </div>
        </article>
      </ProjectCard>

      <ProjectCard ariaLabel="Projekt 2 von 3: E-Bike-Erlebnis und Betriebszentrale" className="bg-[#f1e6d1] text-[#18130f] lg:w-[54rem] lg:max-w-[54rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="07" status="E-Bike · echte Produktansichten" tone="bg-[#a77822]" />
          <div className="grid aspect-[16/9] overflow-hidden border-b border-[#18130f]/20 bg-[#a77822] sm:grid-cols-[1.35fr_0.65fr]">
            <Image
              unoptimized
              src="/projects/ebike/praesentation-kopf.png"
              alt="Echte Präsentationsansicht der E-Bike-Scroll-Story"
              width={1440}
              height={900}
              className="h-full min-h-0 w-full object-cover object-top"
            />
            <Image
              unoptimized
              src="/projects/ebike/zentrale-heute.png"
              alt="Echte Betriebszentrale des E-Bike-Verleihs mit Tagesübersicht"
              width={1440}
              height={1129}
              className="hidden h-full min-h-0 w-full border-l border-[#18130f]/20 object-cover object-top sm:block"
            />
          </div>
          <div className="grid flex-1 gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#8a5d12]">WL Bike Rental</p>
              <h3 className="mt-3 font-display text-4xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-6xl">Erlebnis vorne. Betrieb hinten.</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-relaxed text-[#18130f]/65">
                Eine visuelle Reise von Wald bis Meer trifft auf Touren, Flotte, Werkstatt und Tagessteuerung in der Zentrale.
              </p>
              <ProjectActions>
                <ProjectLink href="https://wl-bikerental.vercel.app/v3">Produkt öffnen</ProjectLink>
                <ProjectLink href="https://github.com/coastcoder439/wl-bikerental" repo>
                  Repository
                </ProjectLink>
              </ProjectActions>
            </div>
          </div>
        </article>
      </ProjectCard>

      <ProjectCard ariaLabel="Projekt 3 von 3: Shopify und Commerce" className="bg-[#e6ded7] text-[#18130f] lg:w-[49rem] lg:max-w-[49rem]">
        <article className="flex h-full flex-col">
          <ProjectMeta number="08" status="Interaktiver Frontend-Stand · synthetische Daten" tone="bg-[#7a665b]" />
          <div className="relative aspect-[16/9] overflow-hidden border-b border-[#18130f]/20 bg-[#7a665b]">
            <Image
              unoptimized
              src="/projects/commerce/preview-viewport.jpeg"
              alt="Echter Viewport des interaktiven Commerce-Frontends"
              width={1600}
              height={950}
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute bottom-4 left-4 bg-[#18130f] px-3 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white">
              Commerce-Frontend · Repo-Stand
            </span>
          </div>
          <div className="grid flex-1 gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#7a665b]">Shopify / Commerce</p>
              <h3 className="mt-3 font-display text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl">Freigaben bis Folgeaktion.</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-sm leading-relaxed text-[#18130f]/65">
                Interaktive Oberfläche für Sichtbarkeit, Buchhaltung und Kundenservice. Der gezeigte Stand nutzt synthetische Daten und ist noch keine produktive Shopify-Anbindung.
              </p>
              <ProjectActions>
                <ProjectLink href="https://keel-showcase.vercel.app/KL/commerce">Frontend öffnen</ProjectLink>
                <ProjectLink href="https://github.com/coastcoder439/shopify-x-paperclip" repo>
                  Repository
                </ProjectLink>
              </ProjectActions>
            </div>
          </div>
        </article>
      </ProjectCard>
    </ProjectRail>
  );
}
