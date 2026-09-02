import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { githubUrl, linkedinUrl } from '@/data/leon-portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="leon-footer">
      <div className="leon-shell leon-footer__grid">
        <div className="leon-footer__brand">
          <strong>Leon Pösken</strong>
          <span>Vom Vertrieb zum Systembauer.</span>
        </div>
        <div className="leon-footer__nav" aria-label="Fußnavigation">
          <Link href="/">Start</Link>
          <Link href="/projects">Produkte</Link>
          <Link href="/contact">Auf ein Gespräch</Link>
          <Link href="/resume">Lebenslauf</Link>
        </div>
        <div className="leon-footer__socials">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" />
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" />
            coastcoder439
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
