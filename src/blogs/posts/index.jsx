import buildABusinessWebsiteThatConverts from './build-a-business-website-that-converts.jsx'

const blogPostEntries = [buildABusinessWebsiteThatConverts]

const blogPosts = blogPostEntries.map((post) => ({
  slug: post.slug,
  title: post.title,
  category: post.category,
  date: post.date,
  readTime: post.readTime,
  excerpt: post.excerpt,
  accent: post.accent,
}))

function getBlogPostBySlug(slug) {
  return blogPostEntries.find((post) => post.slug === slug) ?? null
}

export { blogPostEntries, blogPosts, getBlogPostBySlug }