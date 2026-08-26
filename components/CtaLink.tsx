'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

export default function CtaLink({
  href,
  className,
  children,
  ctaId,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ctaId: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent('cta_click', { cta_id: ctaId, href })}
    >
      {children}
    </Link>
  );
}
