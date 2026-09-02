import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Meilensteine',
    description: 'Veröffentlichte Produkte und belegte Projektmeilensteine von Leon Pösken.',
};

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
