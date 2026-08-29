import type { AnchorHTMLAttributes, ReactNode } from 'react';

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

export default function StaticLink({ href, children, ...props }: StaticLinkProps) {
  const resolvedHref = href.startsWith('/') ? `/neubau/${href.slice(1)}` : href;
  return (
    <a {...props} href={resolvedHref}>
      {children}
    </a>
  );
}
