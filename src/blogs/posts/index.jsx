import websiteDevelopmentProcessGhaziabad from './website-development-process-in-ghaziabad-gonardweb.jsx';
import affordableAiWebDesignServicesInDelhiNcrGonardweb from './affordable-ai-web-design-services-in-delhi-ncr-gonardweb.jsx';
import websiteDesignAndMarketingForFashionBrandsWeRankAndConvert from './website-design-and-marketing-for-fashion-brands-we-rank-and-convert.jsx';
import gonardwebRanked1ForDynamicWebsitesInGhaziabad from './gonardweb-ranked-1-for-dynamic-websites-in-ghaziabad.jsx';
import customWebsiteSolutionsFromGhaziabadTopAgencies from './custom-website-solutions-from-ghaziabad-top-agencies.jsx';
import ecommerceWebsiteDesigningAgencyInGhaziabad from './ecommerce-website-designing-agency-in-ghaziabad.jsx';
import buildABusinessWebsiteThatConverts from './build-a-business-website-that-converts.jsx';

const blogPostEntries = [
  websiteDevelopmentProcessGhaziabad,
  affordableAiWebDesignServicesInDelhiNcrGonardweb,
  websiteDesignAndMarketingForFashionBrandsWeRankAndConvert,
  gonardwebRanked1ForDynamicWebsitesInGhaziabad,
  customWebsiteSolutionsFromGhaziabadTopAgencies,
  ecommerceWebsiteDesigningAgencyInGhaziabad,
  buildABusinessWebsiteThatConverts,
]

const blogPosts = blogPostEntries.map((post) => ({
  slug: post.slug,
  title: post.title,
  category: post.category,
  date: post.date,
  readTime: post.readTime,
  excerpt: post.excerpt,
  accent: post.accent,
}))

const blogPostLoaders = {
  'affordable-ai-web-design-services-in-delhi-ncr-gonardweb': () => import('./affordable-ai-web-design-services-in-delhi-ncr-gonardweb.jsx'),
  'website-design-and-marketing-for-fashion-brands-we-rank-and-convert': () => import('./website-design-and-marketing-for-fashion-brands-we-rank-and-convert.jsx'),
  'gonardweb-ranked-1-for-dynamic-websites-in-ghaziabad': () => import('./gonardweb-ranked-1-for-dynamic-websites-in-ghaziabad.jsx'),
  'custom-website-solutions-from-ghaziabad-top-agencies': () => import('./custom-website-solutions-from-ghaziabad-top-agencies.jsx'),
  'ecommerce-website-designing-agency-in-ghaziabad': () => import('./ecommerce-website-designing-agency-in-ghaziabad.jsx'),
  'build-a-business-website-that-converts': () => import('./build-a-business-website-that-converts.jsx'),
  'website-development-process-in-ghaziabad-gonardweb': () => import('./website-development-process-in-ghaziabad-gonardweb.jsx'),
}

function getBlogPostBySlug(slug) {
  return blogPostEntries.find((post) => post.slug === slug) ?? null
}

async function loadBlogPostBySlug(slug) {
  const loadPost = blogPostLoaders[slug]

  if (!loadPost) {
    return null
  }

  const module = await loadPost()
  return module.default ?? null
}

export { blogPostEntries, blogPosts, getBlogPostBySlug, loadBlogPostBySlug }