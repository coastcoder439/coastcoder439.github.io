import type { Metadata } from 'next';
import { QuantumError } from '@/components/ui/QuantumError';

export const metadata: Metadata = {
    title: 'Seite nicht gefunden',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return <QuantumError type="404" />;
}
