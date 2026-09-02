import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Kontakt zu Leon Pösken für Projekte und Zusammenarbeit.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
