import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Erfahrung',
    description: 'Leons Weg vom Vertrieb zur Projekt- und Systementwicklung.',
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
