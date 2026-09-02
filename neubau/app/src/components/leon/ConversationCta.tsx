import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { githubUrl, linkedinUrl, resumeUrl } from '@/data/leon-portfolio';

type ConversationCtaProps = {
  compact?: boolean;
};

export function ConversationCta({ compact = false }: ConversationCtaProps) {
  return (
    <section className={`leon-conversation ${compact ? 'is-compact' : ''}`}>
      <div className="leon-shell">
        <div className="leon-conversation__frame">
          <p className="leon-kicker">
            <span>05</span>
            AUF EIN GESPRÄCH
          </p>
          <div className="leon-conversation__grid">
            <h2>
              Welches System soll als Nächstes{' '}
              <em>wirklich funktionieren?</em>
            </h2>
            <div>
              <p>
                Ob Produktauftrag oder feste Rolle: Lass uns Problem, Nutzer und den
                ersten belegbaren Meilenstein klären.
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
                  Lebenslauf herunterladen
                </a>
                <a
                  className="leon-icon-link"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github aria-hidden="true" />
                  GitHub coastcoder439
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
