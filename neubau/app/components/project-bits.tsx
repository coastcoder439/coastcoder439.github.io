import { ArrowUpRight, Code2 } from 'lucide-react';
import type { ReactNode } from 'react';

export function ProjectMeta({ number, status, tone }: { number: string; status: string; tone: string }) {
  return (
    <div className="flex min-h-12 items-center justify-between gap-4 border-b border-current/20 px-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] sm:px-6">
      <span className="inline-flex items-center gap-2">
        <span className={`size-2 ${tone}`} aria-hidden="true" />
        {status}
      </span>
      <span className="opacity-50">{number} / 08</span>
    </div>
  );
}

export function ProjectActions({ children }: { children: ReactNode }) {
  return <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">{children}</div>;
}

export function ProjectLink({ href, children, repo = false }: { href: string; children: ReactNode; repo?: boolean }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group inline-flex min-h-11 items-center gap-2 border-b border-current py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
    >
      {repo ? <Code2 aria-hidden="true" className="size-4" /> : null}
      {children}
      {!repo ? <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : null}
    </a>
  );
}
