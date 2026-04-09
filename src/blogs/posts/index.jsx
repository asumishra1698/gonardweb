const blogPostEntries = [
  {
    slug: 'build-a-business-website-that-converts',
    title: 'Website Designing Company in Ghaziabad: Build a Business Website That Converts',
    category: 'Website Strategy',
    date: 'April 2026',
    publishedAt: '2026-04-10',
    updatedAt: '2026-04-10',
    readTime: '8 min read',
    accent: 'from-sky-500 via-cyan-400 to-blue-500',
    image: '/optimized/banner1-864.webp',
    imageSmall: '/optimized/banner1-480.webp',
    imageAlt:
      'Website designing company in Ghaziabad planning a business website structure for better SEO and conversions',
    excerpt:
      'Learn how a website designing company in Ghaziabad can structure a business website for better trust, stronger SEO, and more lead generation.',
    seoTitle: 'Website Designing Company in Ghaziabad: Build a Business Website That Converts | GonardWeb Blog',
    seoDescription:
      'Learn how GonardWeb structures business websites for stronger lead generation, local SEO, readable content, and better conversion performance in Ghaziabad.',
    keywords:
      'business website conversion tips, lead generation website design, website design company in Ghaziabad, Website designing company in ghaziabad, web design agency in Ghaziabad, responsive website design Ghaziabad, business website development in Ghaziabad, conversion focused website structure',
    location: {
      city: 'Ghaziabad',
      region: 'Uttar Pradesh',
      country: 'India',
      areaServed: ['Ghaziabad', 'Noida', 'Delhi NCR'],
    },
    author: 'GonardWeb Editorial Team',
    focusTitle: 'Blog Focus Points',
    focusPoints: [
      'How GonardWeb structures business websites for stronger readability and lead flow',
      'What local SEO signals help a website designing company in Ghaziabad rank better',
      'Why trust elements, layout order, and CTA placement improve conversion performance',
      'How readable headings, internal links, and FAQs support long-term content strength',
    ],
    heroSummary:
      'A business website should do more than look modern. It should explain the offer clearly, support local SEO, build trust quickly, and move visitors toward one simple action. GonardWeb uses this approach to create websites that feel readable, credible, and ready to convert attention into real business inquiries.',
    internalLinks: [
      {
        title: 'Website Design Services',
        description: 'Explore how GonardWeb approaches business website design, structure, and conversion-focused layouts.',
        to: '/solutions/website-design',
      },
      {
        title: 'Website Development Services',
        description: 'See how design ideas are turned into responsive, scalable, and SEO-ready websites.',
        to: '/solutions/website-development',
      },
      {
        title: 'Pricing',
        description: 'Review website package options and understand which project type best fits your business stage.',
        to: '/pricing',
      },
      {
        title: 'Contact Us',
        description: 'Talk with GonardWeb about a business website, redesign, or local SEO-focused project.',
        to: '/contact-us',
      },
    ],
    externalLinks: [
      {
        title: 'Google Search Central SEO Starter Guide',
        description: 'Useful reference for search-friendly content structure, crawlability, and on-page best practices.',
        href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
      },
      {
        title: 'PageSpeed Insights',
        description: 'Check mobile speed, Core Web Vitals, and performance opportunities for business websites.',
        href: 'https://pagespeed.web.dev/',
      },
      {
        title: 'Google Business Profile Help',
        description: 'Reference guide for local business visibility and location relevance across search surfaces.',
        href: 'https://support.google.com/business/',
      },
    ],
    faq: [
      {
        question: 'What makes a business website convert better?',
        answer:
          'GonardWeb builds converting business websites by keeping the message clear, the layout simple, and the action path obvious. A strong homepage, service clarity, trust signals, and easy contact options help visitors understand the offer quickly and feel confident enough to send an inquiry.',
      },
      {
        question: 'Why is local relevance important for website SEO?',
        answer:
          'Local relevance helps search engines understand where your business works best. GonardWeb uses location terms, service area mentions, and local business context so websites can appear more relevant for people searching in Ghaziabad, Noida, Delhi NCR, and nearby service locations.',
      },
      {
        question: 'What should a business website hero section include?',
        answer:
          'A strong hero section should explain what the business does, who it helps, and what the visitor should do next. GonardWeb usually combines a short headline, supporting text, one clear button, and simple trust cues so the first screen feels useful instead of decorative only.',
      },
      {
        question: 'Why are testimonials important on a service website?',
        answer:
          'Testimonials reduce doubt because they show that real clients have already trusted the business. GonardWeb places reviews where they support decision making, not just decoration. Good testimonials improve credibility, make the brand feel safer, and help visitors move toward contact with more confidence.',
      },
      {
        question: 'How fast should a business website load?',
        answer:
          'A business website should feel fast on both desktop and mobile. GonardWeb focuses on lighter layouts, responsive images, and cleaner structure because speed affects user trust, SEO performance, and conversion rate. Slow websites lose attention early, even when the design itself looks attractive.',
      },
      {
        question: 'Does mobile design affect lead generation?',
        answer:
          'Yes, mobile design affects lead generation directly because many users visit from phones first. GonardWeb designs mobile layouts with readable text, easy buttons, clean spacing, and simple forms. When mobile browsing feels smooth, more users stay longer and complete the desired action.',
      },
      {
        question: 'Can website content writing improve conversions?',
        answer:
          'Clear content improves conversions because visitors need simple answers before they trust a service. GonardWeb writes website copy that explains value, removes confusion, and supports action. Better headlines, shorter paragraphs, and focused calls to action often improve lead quality as well.',
      },
      {
        question: 'How often should a business website be updated?',
        answer:
          'A business website should be reviewed regularly, especially when services, pricing, offers, or positioning change. GonardWeb recommends updating important pages, testimonials, and contact details often so the website stays accurate, useful, and trustworthy for both search engines and potential clients.',
      },
      {
        question: 'Can GonardWeb redesign an old business website?',
        answer:
          'Yes, GonardWeb can redesign an old business website to improve readability, trust, mobile performance, and lead generation. A redesign is useful when the current site feels outdated, unclear, or difficult to use. The goal is not just a new look, but a better business result.',
      },
      {
        question: 'What is the best call to action for a service website?',
        answer:
          'The best call to action depends on the business goal, but it should always be direct and easy to understand. GonardWeb usually recommends actions like request a proposal, book a consultation, or contact us, because they clearly explain the next step without confusing visitors.',
      },
    ],
  },
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
  'build-a-business-website-that-converts': () => import('./build-a-business-website-that-converts.jsx'),
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