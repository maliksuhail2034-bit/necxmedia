import type { Metadata } from 'next';
import BookFlow from './BookFlow';
import { bookPage, site } from '@/lib/content';

export const metadata: Metadata = {
  title: `${bookPage.heading} — ${site.name}`,
  description: bookPage.intro,
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return <BookFlow />;
}
