import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kompetenzen',
    description: 'Technische Kompetenzen, Werkzeuge und Arbeitsweise von Leon Pösken.',
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
