import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt – GiroCode Generator',
  description:
    'Kontaktiere uns bei Fragen, Feedback oder Verbesserungsvorschlägen zum GiroCode Generator.',
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
