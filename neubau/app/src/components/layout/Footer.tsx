import { ArrowUpRight, Linkedin } from 'lucide-react';
import { linkedinUrl, resumeUrl } from '@/data/portfolio-content';

// Storyboard v4.6: kein GitHub, kein Repo-Link. Anker statt eigener Routen.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="leon-footer">
      <div className="leon-shell leon-footer__grid">
        <div className="leon-footer__brand">
          <strong>Leon Pösken</strong>
          <span>Technik mit Auftrag.</span>
        </div>
        <div className="leon-footer__nav" aria-label="Fußnavigation">
          <a href="#start">Start</a>
          <a href="#ursprung">Ursprung</a>
          <a href="#methodik">Methodik</a>
          <a href="#praxis">Praxis</a>
          <a href="#profil">Profil</a>
          <a href="#kontakt">Auf ein Gespräch</a>
        </div>
        <div className="leon-footer__socials">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" />
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={resumeUrl} download="Leon-Poesken-Lebenslauf.pdf">
            Lebenslauf (PDF)
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="leon-shell leon-footer__bottom">
        <span>© {year} Leon Pösken</span>
        <span>Leipzig · Deutschland</span>
        <span>Keel · KI-Systeme · Automatisierung · Webentwicklung</span>
      </div>
    </footer>
  );
}
