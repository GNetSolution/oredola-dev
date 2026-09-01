import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Use current host - Vercel property needs vercel.app URLs
  const base = 'https://oredola-dev.vercel.app'
  
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/products/rankengine`, lastModified: new Date() },
    { url: `${base}/products/academiabase`, lastModified: new Date() },
    { url: `${base}/products/learnvault`, lastModified: new Date() },
    { url: `${base}/products/examai`, lastModified: new Date() },
    { url: `${base}/products/naijaseo-kit`, lastModified: new Date() },
    { url: `${base}/products/studentpay`, lastModified: new Date() },
  ]
}
