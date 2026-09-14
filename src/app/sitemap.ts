import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://bilgin.net.tr'
const slugs = ['filamify', 'oktos', 'e-cuzdan', 'hazne', 'pazarora', 'teknikenerji']
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // tr (default, no prefix)
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...slugs.map((slug) => ({
      url: `${BASE}/projeler/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/kvkk`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/gizlilik`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    // en
    { url: `${BASE}/en`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...slugs.map((slug) => ({
      url: `${BASE}/en/projeler/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${BASE}/en/kvkk`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/en/gizlilik`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]
}
