import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Sprout,
  Users,
} from 'lucide-react';
import { ConversationCta } from '@/components/leon/ConversationCta';
import { ProjectRail } from '@/components/leon/ProjectRail';
import {
  githubUrl,
  productGroups,
  productsByGroup,
  resumeUrl,
} from '@/data/leon-portfolio';

export default function HomePage() {
  return (
    <main className="leon-page">
      <section className="leon-hero" aria-labelledby="leon-hero-title">
        <div className="leon-shell leon-hero__inner">
          <div className="leon-hero__copy">
            <p className="leon-kicker">
              <span>01</span>
              LEON PÖSKEN · LEIPZIG
            </p>
            <h1 id="leon-hero-title">
              <span>Vom Vertrieb</span>
              <span>zum Systembauer.</span>
            </h1>
            <p className="leon-hero__statement">
              Ich rede nicht über KI. <em>Ich baue damit.</em>
            </p>
            <p className="leon-hero__body">
              Ich entwickle Systeme, die Arbeit abnehmen und Entscheidungen sichtbar
              machen — vom Aquaponik-Simulator über ein Fundraising-CRM bis zum lokalen
              Agenten-Harness.
            </p>
            <div className="leon-button-row">
              <a className="leon-button leon-button--primary" href="#produkte">
                Echte Produkte ansehen
                <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="leon-button leon-button--secondary"
                href={resumeUrl}
                download="Leon-Poesken-Lebenslauf.pdf"
              >
                <Download aria-hidden="true" />
                Lebenslauf
              </a>
            </div>
          </div>

          <div className="leon-hero__visual" aria-label="Porträt von Leon Pösken">
            <div className="leon-hero-card">
              <div className="leon-hero-card__index" aria-hidden="true">
                LEON / 2026
              </div>
              <div className="leon-hero-card__portrait">
                <Image
                  src="/leon-poesken.png"
                  alt="Leon Pösken"
                  width={512}
                  height={512}
                  priority
                  sizes="(max-width: 767px) 70vw, 420px"
                />
              </div>
              <div className="leon-hero-card__caption">
                <span>Vertriebserfahrung</span>
                <ArrowRight aria-hidden="true" />
                <strong>Systeme im Betrieb</strong>
              </div>
            </div>
            <div className="leon-orbit leon-orbit--one" aria-hidden="true" />
            <div className="leon-orbit leon-orbit--two" aria-hidden="true" />
          </div>
        </div>

        <div className="leon-shell leon-hero__logic" aria-label="Leons Arbeitsweise">
          <div>
            <span>Bedarf</span>
            <p>Vertriebserfahrung hört zu, bevor Technik gewählt wird.</p>
          </div>
          <div>
            <span>System</span>
            <p>Zustände, Entscheidungen und Risiken werden sichtbar.</p>
          </div>
          <div>
            <span>Produkt</span>
            <p>Der erste Stand muss benutzbar und belegbar sein.</p>
          </div>
        </div>
      </section>

      <section id="warum" className="leon-why" aria-labelledby="leon-why-title">
        <div className="leon-shell">
          <div className="leon-editorial-frame">
            <span className="leon-corner leon-corner--tl" aria-hidden="true" />
            <span className="leon-corner leon-corner--tr" aria-hidden="true" />
            <span className="leon-corner leon-corner--bl" aria-hidden="true" />
            <span className="leon-corner leon-corner--br" aria-hidden="true" />

            <p className="leon-kicker">
              <span>02</span>
              WARUM · WORLD EDEN ERA
            </p>
            <h2 id="leon-why-title">
              Software ist für mich <em>kein Selbstzweck.</em>
            </h2>

            <div className="leon-why__grid">
              <div className="leon-why__lead">
                <Sprout aria-hidden="true" />
                <p>
                  Ich habe World Eden Era mit aufgebaut, weil nachhaltige Ernährung in
                  strukturschwachen Regionen ein Systemproblem ist — nicht nur eine gute
                  Idee.
                </p>
              </div>
              <div>
                <h3>Project Oasis</h3>
                <p>
                  Die gemeinnützige gUG entwickelt ein dezentrales Aquaponik-System, das
                  Fischzucht, Pflanzenbau, Geodom und regenerative Landnutzung verbindet.
                  Planung muss hier technische und ökologische Abhängigkeiten gemeinsam
                  zeigen.
                </p>
              </div>
              <div>
                <h3>Vom Bedarf zum Werkzeug</h3>
                <p>
                  Dafür brauche ich keine Innovationsfolien, sondern Werkzeuge, die
                  Planung, Daten und Zusammenarbeit belastbar machen. Aus diesem Bedarf
                  entstanden Oasis Simulator, WEE CRM und Drive-Automatisierung.
                </p>
              </div>
            </div>

            <a
              className="leon-text-link leon-why__link"
              href="https://world-eden-era.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Eden Era ansehen
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="produkte" className="leon-proof-intro" aria-labelledby="proof-title">
        <div className="leon-shell leon-proof-intro__grid">
          <p className="leon-kicker">
            <span>03</span>
            BEWEIS STATT BEHAUPTUNG
          </p>
          <h2 id="proof-title">
            Drei Kontexte. <em>Acht reale Produkte.</em>
          </h2>
          <p>
            Jede Karte nennt Problem, Produktstand und Beleg. Wo kein öffentlicher Build
            oder Screenshot existiert, bleibt die Darstellung bewusst textbasiert.
          </p>
        </div>
      </section>

      {productGroups.map((group) => (
        <ProjectRail
          key={group.key}
          id={`produkte-${group.key}`}
          index={group.index}
          eyebrow={group.eyebrow}
          title={group.title}
          intro={group.intro}
          accent={group.accent}
          products={productsByGroup(group.key)}
        />
      ))}

      <section className="leon-audiences" aria-labelledby="audiences-title">
        <div className="leon-shell">
          <div className="leon-audiences__heading">
            <p className="leon-kicker">
              <span>04</span>
              FÜR WEN
            </p>
            <h2 id="audiences-title">
              Zwei Einstiege. <em>Dieselbe Verantwortung.</em>
            </h2>
          </div>

          <div className="leon-audience-grid">
            <article className="leon-audience-card is-coral">
              <Users aria-hidden="true" />
              <p className="leon-audience-card__label">KUNDEN · SELBSTSTÄNDIGKEIT</p>
              <h3>Ein reales Problem. Ein nutzbarer erster Stand.</h3>
              <p>
                Wenn ein Prozess heute zwischen Tabellen, Tools und Köpfen steckt,
                zerlege ich ihn in Entscheidungen, Zustände und wiederkehrende Arbeit.
                Daraus entsteht die kleinste Version, die ihren Wert wirklich beweist.
              </p>
              <ul>
                <li>Klarer Umfang</li>
                <li>Sichtbare Zwischenstände</li>
                <li>Ehrliche Grenzen</li>
              </ul>
              <Link href="/contact" className="leon-text-link">
                Projekt besprechen
                <ArrowRight aria-hidden="true" />
              </Link>
            </article>

            <article className="leon-audience-card is-blue">
              <BriefcaseBusiness aria-hidden="true" />
              <p className="leon-audience-card__label">ARBEITGEBER · BEWERBUNG</p>
              <h3>Produktblick plus Umsetzung.</h3>
              <p>
                Ich komme aus dem Vertrieb und kenne die Strecke vor dem Code: Bedarf
                verstehen, Entscheidungen erklären und Verantwortung bis zur Übergabe
                halten. Heute verbinde ich TypeScript, React und Next.js mit Python,
                Automatisierung und KI-Systemen.
              </p>
              <ul>
                <li>Vertrieb & Bedarfsklärung</li>
                <li>Fullstack & Automatisierung</li>
                <li>Dokumentierte Risiken</li>
              </ul>
              <div className="leon-audience-card__links">
                <a
                  href={resumeUrl}
                  download="Leon-Poesken-Lebenslauf.pdf"
                  className="leon-text-link"
                >
                  Lebenslauf herunterladen
                  <Download aria-hidden="true" />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leon-text-link leon-text-link--muted"
                >
                  GitHub ansehen
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ConversationCta />
    </main>
  );
}
