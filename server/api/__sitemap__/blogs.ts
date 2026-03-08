import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBaseUrl || 'http://127.0.0.1:8000/api'

  try {
    const response = await fetch(`${apiBase}/blog/posts/`)
    if (!response.ok) return []

    const posts = await response.json()

    // Handle both array response and paginated { results: [] } response
    const blogList = Array.isArray(posts) ? posts : (posts.results || [])

    return blogList.map((post: any) => ({
      loc: `/blogs/${post.slug}`,
      lastmod: post.updated_at || post.date || new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Sitemap: Failed to fetch blog posts', error)
    return []
  }
})
