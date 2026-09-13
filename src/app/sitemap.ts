import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://bilgin.net.tr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...['filamify', 'oktos', 'e-cuzdan', 'hazne', 'pazarora', 'teknikenerji'].map((slug) => ({
      url: `${BASE}/projeler/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/kvkk`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/gizlilik`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]
}
