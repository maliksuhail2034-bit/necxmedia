import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || site.domain;
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/apply`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
