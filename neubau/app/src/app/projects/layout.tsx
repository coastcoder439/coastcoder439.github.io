import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projekte',
    description: 'Acht echte Produkte aus KI-Systemen, Automatisierung und Webentwicklung.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
