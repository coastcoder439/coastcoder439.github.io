import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Download, FileText } from 'lucide-react';
import { ResumePreview } from '@/components/leon/ResumePreview';
import { resumeUrl } from '@/data/leon-portfolio';

export const metadata: Metadata = {
  title: 'Lebenslauf',
  description: 'Lebenslauf von Leon Pösken als PDF ansehen oder herunterladen.',
};

export default function ResumePage() {
  return (
    <main className="leon-page leon-resume-page">
      <section className="leon-resume" aria-labelledby="resume-title">
        <div className="leon-shell">
          <Link href="/" className="leon-back-link">
            <ArrowLeft aria-hidden="true" />
            Zurück zum Portfolio
          </Link>

          <div className="leon-resume__heading">
            <div>
              <p className="leon-kicker">
                <span>PDF</span>
                LEON PÖSKEN
              </p>
              <h1 id="resume-title">
                Lebenslauf <em>zum Mitnehmen.</em>
              </h1>
            </div>
            <a
              className="leon-button leon-button--primary"
              href={resumeUrl}
              download="Leon-Poesken-Lebenslauf.pdf"
            >
              <Download aria-hidden="true" />
              Lebenslauf herunterladen
            </a>
          </div>

          <div className="leon-resume__viewer">
            <ResumePreview file={resumeUrl} />
          </div>

          <div className="leon-resume__mobile-card">
            <FileText aria-hidden="true" />
            <div>
              <span>Leon-Poesken-Lebenslauf.pdf</span>
              <small>PDF · 1 Seite · für Mobilansicht separat öffnen</small>
            </div>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              PDF öffnen
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
