import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://oredola.dev'
  const now = new Date()

  // core routes you already have + products from factory
  const routes = [
    { path: '', priority: 1, freq: 'daily' as const },
    { path: '/about', priority: 0.8, freq: 'weekly' as const },
    { path: '/products', priority: 0.9, freq: 'daily' as const },
    { path: '/services', priority: 0.7, freq: 'weekly' as const },
    { path: '/stack', priority: 0.6, freq: 'monthly' as const },
    { path: '/contact', priority: 0.7, freq: 'monthly' as const },
    // 8 products from your factory.ts
    { path: '/products/academiabase', priority: 0.8, freq: 'weekly' as const },
    { path: '/products/learnvault', priority: 0.7, freq: 'weekly' as const },
    { path: '/products/rankengine', priority: 0.8, freq: 'weekly' as const },
    { path: '/products/examai', priority: 0.7, freq: 'weekly' as const },
    { path: '/products/naijaseo-kit', priority: 0.7, freq: 'weekly' as const },
    { path: '/products/studentpay', priority: 0.6, freq: 'weekly' as const },
  ]

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
