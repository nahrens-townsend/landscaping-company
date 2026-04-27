import type { MetadataRoute } from 'next'
import { galleryCategories } from '@/data/gallery'
import { blogPosts } from '@/data/blogPosts'

const BASE = 'https://sunnyviewexteriors.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/services`,                                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/winnipeg-commercial-landscaping`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/consultation`,                            lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.9 },
    { url: `${BASE}/winnipeg-landscape-pricing`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,                                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gallery`,                                 lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/our-blog`,                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/contact`,                                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
  ]

  const galleryPages: MetadataRoute.Sitemap = galleryCategories.map((cat) => ({
    url: `${BASE}/gallery/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/our-blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...galleryPages, ...blogPages]
}
