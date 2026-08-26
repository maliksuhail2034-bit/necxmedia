import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || site.domain;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
