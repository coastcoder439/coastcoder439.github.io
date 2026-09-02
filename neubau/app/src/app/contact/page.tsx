import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  MessageSquareText,
  Route,
  Users,
} from 'lucide-react';
import { githubUrl, linkedinUrl, resumeUrl } from '@/data/leon-portfolio';

export default function ContactPage() {
  return (
    <main className="leon-page leon-contact-page">
      <section className="leon-contact-hero" aria-labelledby="contact-title">
        <div className="leon-shell leon-contact-hero__grid">
          <div className="leon-contact-hero__copy">
            <p className="leon-kicker">
              <span>KONTAKT</span>
              LEIPZIG · REMOTE
            </p>
            <h1 id="contact-title">
              Auf ein <em>Gespräch.</em>
            </h1>
            <p className="leon-contact-hero__lead">
              Der direkte Kanal ist LinkedIn. Schreib Leon mit dem Problem, dem Nutzer und
              dem Stand, an dem du gerade festhängst — so beginnt das Gespräch nicht bei
              Buzzwords, sondern beim tatsächlichen System.
            </p>
            <div className="leon-button-row">
              <a
                className="leon-button leon-button--primary"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin aria-hidden="true" />
                Auf LinkedIn schreiben
                <ArrowUpRight aria-hidden="true" />
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

          <div className="leon-contact-portrait">
            <div className="leon-contact-portrait__halo" aria-hidden="true" />
            <Image
              src="/leon-poesken.png"
              alt="Leon Pösken"
              width={512}
              height={512}
              priority
              sizes="(max-width: 767px) 72vw, 420px"
            />
            <div>
              <span>LEON PÖSKEN</span>
              <small>Vertrieb → Systemdesign → Produkt</small>
            </div>
          </div>
        </div>
      </section>

      <section className="leon-contact-paths" aria-labelledby="contact-paths-title">
        <div className="leon-shell">
          <div className="leon-contact-paths__heading">
            <p className="leon-kicker">
              <span>01</span>
              DEIN EINSTIEG
            </p>
            <h2 id="contact-paths-title">
              Auftrag oder Rolle — <em>sag, worum es geht.</em>
            </h2>
          </div>

          <div className="leon-contact-path-grid">
            <article className="is-coral">
              <Users aria-hidden="true" />
              <span>KUNDEN · SELBSTSTÄNDIGKEIT</span>
              <h3>Du willst einen Prozess sinnvoll automatisieren?</h3>
              <p>
                Schick drei Dinge: den heutigen Ablauf, die Menschen, die damit arbeiten,
                und den Punkt, an dem Zeit oder Überblick verloren geht. Dann lässt sich
                ein erster belegbarer Produktstand abgrenzen.
              </p>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                Projekt skizzieren
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
            <article className="is-blue">
              <BriefcaseBusiness aria-hidden="true" />
              <span>ARBEITGEBER · BEWERBUNG</span>
              <h3>Du suchst Produktblick plus technische Umsetzung?</h3>
              <p>
                Der Lebenslauf zeigt Leons Weg aus Beratung und Vertrieb. Die
                Projektseiten zeigen, wie er heute TypeScript, React, Python,
                Automatisierung und KI-Systeme in nachvollziehbare Produktstände übersetzt.
              </p>
              <a href={resumeUrl} download="Leon-Poesken-Lebenslauf.pdf">
                Lebenslauf herunterladen
                <Download aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="leon-contact-process" aria-labelledby="contact-process-title">
        <div className="leon-shell">
          <p className="leon-kicker">
            <span>02</span>
            ERSTES GESPRÄCH
          </p>
          <h2 id="contact-process-title">In 30 Minuten zu einer klaren nächsten Entscheidung.</h2>
          <div className="leon-contact-process__steps">
            <article>
              <MessageSquareText aria-hidden="true" />
              <span>01</span>
              <h3>Problem</h3>
              <p>Was soll für wen einfacher, schneller oder verlässlicher werden?</p>
            </article>
            <article>
              <Route aria-hidden="true" />
              <span>02</span>
              <h3>Systemgrenze</h3>
              <p>Welche Daten, Entscheidungen und Integrationen gehören wirklich dazu?</p>
            </article>
            <article>
              <ArrowRight aria-hidden="true" />
              <span>03</span>
              <h3>Meilenstein</h3>
              <p>Welcher kleine Stand beweist Nutzen, bevor mehr gebaut wird?</p>
            </article>
          </div>
        </div>
      </section>

      <section className="leon-contact-links" aria-label="Kontakt- und Profil-Links">
        <div className="leon-shell">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" />
            <span>
              LinkedIn
              <small>linkedin.com/in/leonpoesken</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" />
            <span>
              GitHub
              <small>coastcoder439</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <Link href="/projects">
            <Route aria-hidden="true" />
            <span>
              Produktarchiv
              <small>8 belegte Produktstände</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
