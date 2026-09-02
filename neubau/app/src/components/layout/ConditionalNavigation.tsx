import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export function ConditionalNavigation({ children }: { children: React.ReactNode }) {
  return (
    <div className="leon-site">
      <Navbar />
      <div className="leon-site__content">{children}</div>
      <Footer />
    </div>
  );
}
