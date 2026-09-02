import { ArrowDown, Braces, Route, ShieldCheck } from 'lucide-react';
import { ConversationCta } from '@/components/leon/ConversationCta';
import { ProjectRail } from '@/components/leon/ProjectRail';
import { productGroups, products, productsByGroup } from '@/data/leon-portfolio';

export default function ProjectsPage() {
  return (
    <main className="leon-page leon-projects-page">
      <section className="leon-projects-hero" aria-labelledby="projects-title">
        <div className="leon-shell">
          <div className="leon-projects-hero__frame">
            <p className="leon-kicker">
              <span>PRODUKTARCHIV</span>
              {products.length} BELEGTE STÄNDE
            </p>
            <h1 id="projects-title">
              Ernährung planen. Arbeit steuern.{' '}
              <em>Kunden führen.</em>
            </h1>
            <div className="leon-projects-hero__grid">
              <p>
                Acht Produkte, geordnet nach ihrem tatsächlichen Kontext. Keine
                Platzhalter-Projekte — nur Stände, die sich im Repository, im Screenshot
                oder live belegen lassen.
              </p>
              <div>
                <Route aria-hidden="true" />
                <span>3 Rubriken</span>
                <small>World Eden Era · Keel · Kunden</small>
              </div>
              <div>
                <Braces aria-hidden="true" />
                <span>8 Produkte</span>
                <small>mit Problem, Mechanismus und Beleg</small>
              </div>
              <div>
                <ShieldCheck aria-hidden="true" />
                <span>Geprüfte Zugänge</span>
                <small>kein öffentlicher Stand heißt: kein Link</small>
              </div>
            </div>
            <a className="leon-scroll-cue" href="#projektgruppe-wee">
              Zur ersten Rubrik
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {productGroups.map((group) => (
        <ProjectRail
          key={group.key}
          id={`projektgruppe-${group.key}`}
          index={group.index}
          eyebrow={group.eyebrow}
          title={group.title}
          intro={group.intro}
          accent={group.accent}
          products={productsByGroup(group.key)}
        />
      ))}

      <ConversationCta compact />
    </main>
  );
}
