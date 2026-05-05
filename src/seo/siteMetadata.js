import { getBlogPostBySlug } from '../blogs/blogindex.jsx'
import { getNewsMetadata } from './newsMetadata.js'

const SITE_NAME = 'GonardWeb'
const SITE_URL = 'https://gonardweb.com'
const DEFAULT_DESCRIPTION =
  'GonardWeb is a top website designing company in Ghaziabad building websites, apps, eCommerce experiences, and digital marketing systems designed to help businesses grow with clarity and speed.'
const DEFAULT_IMAGE = `${SITE_URL}/banner1.jpg`

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  sameAs: [],
}

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
}

function buildFaqSchema(pathname, faqs) {
  if (!Array.isArray(faqs) || faqs.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${toCanonicalUrl(pathname)}#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

const segmentLabels = {
  'about-us': 'About Us',
  company: 'Company',
  'mission-values': 'Mission & Values',
  'why-choose-us': 'Why Choose Us',
  team: 'Team',
  solutions: 'Solutions',
  'website-design': 'Website Design',
  'website-development': 'Website Development',
  'app-development': 'App Development',
  'digital-marketing': 'Digital Marketing',
  work: 'Work',
  portfolio: 'Portfolio',
  'case-studies': 'Case Studies',
  client: 'Client',
  'client-testimonials': 'Client Testimonials',
  pricing: 'Pricing',
  news: 'News',
  faqs: 'FAQs',
  terms: 'Terms',
  privacy: 'Privacy',
  blog: 'Blog',
  press: 'Press',
  partnerships: 'Partnerships',
  support: 'Support',
  'help-center': 'Help Center',
  events: 'Events',
  community: 'Community',
  'social-media': 'Social Media',
  newsletter: 'Newsletter',
  subscribe: 'Subscribe',
  stack: 'Stack',
  'contact-us': 'Contact Us',
}

const routeMetadata = {
    '/best-ecommerce-website-designing-company-in-sahibabad-ghaziabad': {
      title: 'Best Ecommerce Website Designing Company in Sahibabad | Gonardweb',
      description: 'Gonardweb is the best ecommerce website designing company in Sahibabad, building feature-rich, secure, and high-converting online stores. Get custom ecommerce solutions designed to grow your sales today!',
      type: 'Service',
      name: 'Ecommerce Website Design Sahibabad',
      serviceType: 'Ecommerce Website Design',
      keywords: 'ecommerce website designing company Sahibabad, ecommerce website design Ghaziabad, Gonardweb ecommerce, Sahibabad web design, online store development Sahibabad',
      relatedLinks: [
        { label: 'Website Design Services', url: '/solutions/website-design' },
        { label: 'Contact Us', url: '/contact-us' },
        { label: 'Delhi NCR (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Delhi_NCR' },
        { label: 'What is ecommerce? (Shopify)', url: 'https://www.shopify.com/learn/online/ecommerce-website' }
      ],
    },
  '/': {
    title: 'Top Website Designing Company in Ghaziabad | GonardWeb',
    description:
      'Explore GonardWeb as a top website designing company in Ghaziabad offering website development, app development, digital marketing, and software solutions tailored to business growth.',
    type: 'WebPage',
    name: 'Home',
    keywords:
      'top website designing company in Ghaziabad, best website design company in Ghaziabad, GonardWeb, web development, app development, digital marketing, IT solutions, eCommerce development',
  },
  '/about-us': {
    title: 'About GonardWeb | Team, Process, and Perspective',
    description:
      'Learn how GonardWeb combines design thinking, engineering, and business clarity to build useful and scalable digital experiences.',
    type: 'AboutPage',
    name: 'About Us',
  },
  '/about-us/company': {
    title: 'About Our Company | GonardWeb',
    description:
      'See how GonardWeb, established in Ghaziabad, approaches custom software, website design, and flexible digital solutions for modern businesses.',
    type: 'AboutPage',
    name: 'About Company',
    keywords:
      'about GonardWeb Ghaziabad, website designing company in Ghaziabad, digital company in Ghaziabad',
  },
  '/about-us/mission-values': {
    title: 'Mission and Values | GonardWeb',
    description:
      'Understand the mission, values, and delivery mindset that shape the way GonardWeb builds digital products and client relationships.',
    type: 'AboutPage',
    name: 'Mission and Values',
  },
  '/about-us/why-choose-us': {
    title: 'Why Choose GonardWeb',
    description:
      'Discover the practical reasons clients choose GonardWeb for digital products, custom builds, and long-term technical partnership.',
    type: 'AboutPage',
    name: 'Why Choose Us',
  },
  '/about-us/team': {
    title: 'Our Team | GonardWeb',
    description:
      'Meet the team and operating approach behind GonardWeb digital delivery, collaboration, and client-focused execution.',
    type: 'AboutPage',
    name: 'Team',
  },
  '/solutions': {
    title: 'Digital Solutions | GonardWeb Services',
    description:
      'Browse GonardWeb services across website design, website development, app development, and digital marketing.',
    type: 'CollectionPage',
    name: 'Solutions',
  },
  '/solutions/website-design': {
    title: 'Website Design Services in Ghaziabad | GonardWeb',
    description:
      'GonardWeb provides website design services in Ghaziabad with conversion-focused layouts, polished interfaces, and responsive user experience.',
    type: 'Service',
    name: 'Website Design',
    serviceType: 'Website Design',
    keywords:
      'top website designing company in Ghaziabad, website design services in Ghaziabad, best website designer in Ghaziabad, eCommerce website design Ghaziabad',
    faqs: [
      {
        question: 'What is included in your website designing service?',
        answer:
          'Our website designing service includes layout planning, visual direction, responsive page structure, content flow, conversion-focused sections, and design refinement. We shape each website so it looks professional, communicates clearly, and supports the business goals that matter most for your audience.',
      },
      {
        question: 'Do you design both business websites and eCommerce websites?',
        answer:
          'Yes. We design business websites for service brands, agencies, and companies, as well as eCommerce websites for online stores. The design direction changes based on whether the priority is trust building, lead generation, product discovery, or smoother purchase flow from browse to checkout.',
      },
      {
        question: 'Will the website design work well on mobile devices?',
        answer:
          'Yes. Every website design is planned with responsive behavior in mind so the site works across desktop, tablet, and mobile screens. We focus on readability, spacing, navigation clarity, and stronger action paths so users can browse comfortably on smaller devices too.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Yes. We can redesign an existing website if it looks outdated, feels difficult to use, or no longer reflects the business properly. A redesign can improve presentation, usability, messaging structure, and conversion clarity while keeping the parts of your brand identity that still work well.',
      },
      {
        question: 'How long does a website design project usually take?',
        answer:
          'The timeline depends on page count, content readiness, revision rounds, and the overall complexity of the project. A smaller business website can move faster, while a larger custom or eCommerce design needs more planning. We define the timeline clearly after understanding the full scope.',
      },
    ],
  },
  '/solutions/website-development': {
    title: 'Website Development Services | GonardWeb',
    description:
      'Build fast, maintainable, and scalable websites with GonardWeb website development services for business, eCommerce, and platforms.',
    type: 'Service',
    name: 'Website Development',
    serviceType: 'Website Development',
    faqs: [
      {
        question: 'What is included in your website development service?',
        answer:
          'Our website development service includes front-end build work, backend integration where needed, CMS or content workflows, forms, API connections, responsive implementation, performance-focused structure, and deployment-ready delivery. The exact scope depends on whether the website is informational, lead-focused, or built for transactions.',
      },
      {
        question: 'Do you develop both eCommerce and custom business websites?',
        answer:
          'Yes. We develop eCommerce websites with store functionality such as product pages, cart, checkout, and payment flows, and we also build custom business websites tailored to service presentation, lead capture, internal workflows, and content structure. The technical approach changes based on the business need.',
      },
      {
        question: 'Can you add payment gateway, checkout, and shipping features?',
        answer:
          'Yes. For eCommerce website development, we can implement payment gateway integration, cart logic, checkout flow, shipping rules, order handling, and related customer journey features. The setup depends on the platform, payment provider, shipping model, and the operational requirements of your business.',
      },
      {
        question: 'Can you develop a custom website based on my business workflow?',
        answer:
          'Yes. We build custom websites around your business process, content structure, forms, user journeys, and required integrations. This is useful when standard website setups are too limited and the project needs more tailored logic, better control, or a workflow that reflects how your business actually operates.',
      },
      {
        question: 'How long does website development usually take?',
        answer:
          'The timeline depends on design readiness, number of pages, required features, integrations, content availability, and revision cycles. A simpler website can be completed faster, while custom or eCommerce development needs more planning and testing. We define the delivery schedule after understanding the complete project scope.',
      },
    ],
  },
  '/solutions/app-development': {
    title: 'App Development Services | GonardWeb',
    description:
      'Launch modern app experiences with GonardWeb app development services focused on product clarity, usability, and reliable delivery.',
    type: 'Service',
    name: 'App Development',
    serviceType: 'App Development',
    faqs: [
      {
        question: 'What types of mobile apps do you develop?',
        answer:
          'We develop Android apps, iOS apps, and business-focused mobile products for startups, service brands, eCommerce operations, and internal workflows. The app structure, features, and integrations are planned around your business model, user expectations, and the actions you want people to complete inside the product.',
      },
      {
        question: 'Do you build both Android and iOS apps?',
        answer:
          'Yes. We build Android and iOS app experiences based on the audience, platform goals, and launch requirements. Some projects need one platform first, while others need both. We help define the right release approach so development effort stays aligned with business priorities and budget.',
      },
      {
        question: 'Can you add login, payments, and push notifications to the app?',
        answer:
          'Yes. We can build app features such as secure login, OTP flows, payment gateway integration, push notifications, profile management, booking journeys, dashboards, and API-connected functionality. The final feature set depends on your product scope, user journey, and the systems the app must connect with.',
      },
      {
        question: 'How long does app development usually take?',
        answer:
          'The timeline depends on app complexity, number of screens, backend requirements, integrations, revision cycles, and testing needs. A simpler app can move faster, while a larger product with custom logic takes more time. We define the delivery roadmap after understanding the complete scope clearly.',
      },
      {
        question: 'Do you provide support after the app is launched?',
        answer:
          'Yes. Post-launch support can include monitoring, refinements, minor updates, bug resolution, and feature improvements based on user feedback. Launch is not treated as the end of the product journey. We support businesses that need stability, iteration, and clearer next steps after release.',
      },
    ],
  },
  '/solutions/digital-marketing': {
    title: 'Best Performance Marketing Agency in Ghaziabad | GonardWeb',
    description:
      'Grow reach and conversions with GonardWeb, a best performance marketing agency in Ghaziabad offering SEO, campaigns, visibility, and content strategy.',
    type: 'Service',
    name: 'Digital Marketing',
    serviceType: 'Digital Marketing',
    keywords:
      'best performance marketing agency in Ghaziabad, digital marketing agency in Ghaziabad, social media management Ghaziabad, SEO services Ghaziabad',
    faqs: [
      {
        question: 'What digital marketing services do you provide?',
        answer:
          'We provide digital marketing support across performance marketing, paid campaigns, SEO direction, content planning, and social media management. The exact mix depends on whether your business needs more leads, better visibility, stronger audience engagement, or a clearer conversion-focused marketing system.',
      },
      {
        question: 'What is performance marketing and how does it help?',
        answer:
          'Performance marketing focuses on measurable outcomes such as leads, conversions, click-through rate, and return on ad spend. It helps businesses make sharper budget decisions because campaign success is judged through trackable results instead of only impressions or broad awareness metrics.',
      },
      {
        question: 'Do you manage Facebook, Instagram, and LinkedIn pages?',
        answer:
          'Yes. We manage social media activity across platforms such as Facebook, Instagram, and LinkedIn. This can include content planning, posting consistency, caption direction, campaign coordination, audience engagement support, and brand communication that keeps your business more active and visible online.',
      },
      {
        question: 'How long does digital marketing take to show results?',
        answer:
          'The timeline depends on the channel, competition, budget, campaign quality, and business goal. Paid campaigns can show signals faster, while SEO and organic visibility usually take longer. We focus on sustainable improvement and realistic performance trends instead of promising instant outcomes.',
      },
      {
        question: 'Can digital marketing help local businesses in Ghaziabad?',
        answer:
          'Yes. Local businesses in Ghaziabad can benefit from better search visibility, paid campaign targeting, social media consistency, and stronger messaging. A focused local digital marketing strategy helps nearby customers discover your business more easily and improves trust, reach, and lead opportunities.',
      },
    ],
  },
  '/work': {
    title: 'Our Work | GonardWeb',
    description:
      'Explore GonardWeb work, case studies, client stories, and digital delivery examples across industries and product types.',
    type: 'CollectionPage',
    name: 'Work',
  },
  '/work/portfolio': {
    title: 'Portfolio | GonardWeb',
    description:
      'Review selected GonardWeb portfolio work across websites, apps, and digital product experiences built for client outcomes.',
    type: 'CollectionPage',
    name: 'Portfolio',
  },
  '/work/case-studies': {
    title: 'Case Studies | GonardWeb',
    description:
      'Read GonardWeb case studies to see how strategy, design, and engineering come together in real project delivery.',
    type: 'CollectionPage',
    name: 'Case Studies',
  },
  '/work/client': {
    title: 'Client Work | GonardWeb',
    description:
      'See the client-facing side of GonardWeb delivery, collaboration, and project execution through curated work examples.',
    type: 'CollectionPage',
    name: 'Client Work',
  },
  '/work/client-testimonials': {
    title: 'Client Testimonials | GonardWeb',
    description:
      'Read feedback and testimonials that reflect GonardWeb project collaboration, outcomes, and delivery standards.',
    type: 'CollectionPage',
    name: 'Client Testimonials',
  },
  '/pricing': {
    title: 'Pricing | GonardWeb',
    description:
      'Review GonardWeb pricing information, project tiers, retainers, and engagement options for digital product work.',
    type: 'WebPage',
    name: 'Pricing',
  },
  '/latest-news': {
    title: 'Latest News | GonardWeb',
    description:
      'Follow GonardWeb updates, announcements, and latest news around digital products, launches, and company activity.',
    type: 'Blog',
    name: 'Latest News',
  },
  '/faqs': {
    title: 'FAQs | Website Design, Digital Marketing, and Support | GonardWeb',
    description:
      'Find answers to common questions about website designing, digital marketing, client support, revisions, project flow, and digital solution planning with GonardWeb.',
    type: 'FAQPage',
    name: 'FAQs',
    keywords:
      'website design FAQs, digital marketing FAQs, client support FAQs, work process FAQs, GonardWeb frequently asked questions',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | GonardWeb',
    description:
      'Read the GonardWeb terms and conditions governing website usage, project engagements, payments, and service limitations.',
    type: 'WebPage',
    name: 'Terms and Conditions',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Gonardweb',
    description:
      'Review how Gonardweb collects, uses, stores, and protects personal data across www.gonardweb.com and related services.',
    type: 'WebPage',
    name: 'Privacy Policy',
  },
  '/blog': {
    title: 'Blog | GonardWeb',
    description:
      'Browse GonardWeb articles, tutorials, updates, and perspectives on digital product strategy, development, and growth.',
    type: 'Blog',
    name: 'Blog',
  },
  '/press': {
    title: 'Press | GonardWeb',
    description:
      'Access GonardWeb press resources, media references, coverage, and brand-related information.',
    type: 'WebPage',
    name: 'Press',
  },
  '/partnerships': {
    title: 'Partnerships | GonardWeb',
    description:
      'Learn about collaboration models, strategic partnerships, and alliance opportunities with GonardWeb.',
    type: 'WebPage',
    name: 'Partnerships',
  },
  '/support': {
    title: 'Support | GonardWeb',
    description:
      'Find support routes, contact guidance, and help resources for working with GonardWeb services and deliveries.',
    type: 'WebPage',
    name: 'Support',
  },
  '/help-center': {
    title: 'Help Center | GonardWeb',
    description:
      'Access self-service guidance, troubleshooting help, and support resources prepared by GonardWeb.',
    type: 'WebPage',
    name: 'Help Center',
  },
  '/events': {
    title: 'Events | GonardWeb',
    description:
      'Discover GonardWeb events, launches, webinars, and upcoming appearances tied to digital products and growth.',
    type: 'EventSeries',
    name: 'Events',
  },
  '/community': {
    title: 'Community | GonardWeb',
    description:
      'Explore GonardWeb community initiatives, participation opportunities, and audience engagement spaces.',
    type: 'WebPage',
    name: 'Community',
  },
  '/social-media': {
    title: 'Social Media | GonardWeb',
    description:
      'Connect with GonardWeb across social media channels and stay updated on new releases, content, and announcements.',
    type: 'WebPage',
    name: 'Social Media',
  },
  '/newsletter': {
    title: 'Newsletter | GonardWeb',
    description:
      'Join the GonardWeb newsletter for product updates, articles, releases, and digital insights.',
    type: 'SubscribeAction',
    name: 'Newsletter',
  },
  '/subscribe': {
    title: 'Subscribe | GonardWeb',
    description:
      'Subscribe for ongoing updates, news, and insights from GonardWeb digital services and product work.',
    type: 'SubscribeAction',
    name: 'Subscribe',
  },
  '/stack': {
    title: 'Technology Stack | GonardWeb',
    description:
      'Review the frontend stack powering GonardWeb, including Vite, React, React Router, and Tailwind CSS.',
    type: 'TechArticle',
    name: 'Stack',
  },
  '/contact-us': {
    title: 'Contact GonardWeb',
    description:
      'Contact GonardWeb to discuss website design, app development, and performance marketing services in Ghaziabad for your business.',
    type: 'ContactPage',
    name: 'Contact Us',
    keywords:
      'contact website designing company in Ghaziabad, contact performance marketing agency in Ghaziabad, GonardWeb contact',
  },
  '*': {
    title: 'Page Not Found | GonardWeb',
    description: 'The page you requested could not be found on GonardWeb.',
    type: 'WebPage',
    name: 'Page Not Found',
    robots: 'noindex, nofollow',
  },
}

function toCanonicalUrl(pathname) {
  return pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`
}

function buildBreadcrumbSchema(pathname, pageName) {
  const segments = pathname.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ]

  let currentPath = ''

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: index === segments.length - 1 ? pageName : segmentLabels[segment] || pageName,
      item: toCanonicalUrl(currentPath),
    })
  })

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

function buildPageSchema(pathname, metadata) {
  const canonicalUrl = toCanonicalUrl(pathname)
  const pageSchema = {
    '@type': metadata.type || 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: metadata.name,
    headline: metadata.title,
    description: metadata.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  }

  if (metadata.type === 'Service') {
    return {
      ...pageSchema,
      serviceType: metadata.serviceType,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Worldwide',
    }
  }

  if (metadata.type === 'ContactPage') {
    return {
      ...pageSchema,
      mainEntity: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: canonicalUrl,
        availableLanguage: ['en'],
      },
    }
  }

  return pageSchema
}

function normalizePath(pathname) {
  if (!pathname) {
    return '/'
  }

  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function getBlogMetadata(pathname) {
  if (!pathname.startsWith('/blog/')) {
    return null
  }

  const slug = pathname.replace('/blog/', '')
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return null
  }

  const canonicalUrl = toCanonicalUrl(pathname)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: post.image ? `${SITE_URL}${post.image}` : DEFAULT_IMAGE,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.png`,
      },
    },
    mainEntityOfPage: canonicalUrl,
    articleSection: post.category,
    keywords: post.keywords,
    about: post.location?.areaServed?.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    areaServed: post.location?.areaServed,
    address: {
      '@type': 'PostalAddress',
      addressLocality: post.location?.city,
      addressRegion: post.location?.region,
      addressCountry: post.location?.country,
    },
  }

  const faqSchema = Array.isArray(post.faq) && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return {
    title: post.seoTitle || `${post.title} | ${SITE_NAME}`,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords,
    type: 'Article',
    name: post.title,
    image: post.image ? `${SITE_URL}${post.image}` : DEFAULT_IMAGE,
    canonicalUrl,
    schema: [articleSchema, localBusinessSchema, ...(faqSchema ? [faqSchema] : [])],
  }
}

export function getMetadataForPath(pathname) {
  const normalizedPath = normalizePath(pathname)
  // News detail page support
  const newsMetadata = getNewsMetadata(normalizedPath)
  if (newsMetadata) {
    return {
      ...newsMetadata,
      image: newsMetadata.image || DEFAULT_IMAGE,
      keywords: 'GonardWeb, news, updates, website design, digital marketing, Ghaziabad',
      robots: 'index, follow',
    }
  }
  const blogMetadata = getBlogMetadata(normalizedPath)
  const metadata = blogMetadata || routeMetadata[normalizedPath] || routeMetadata['*']
  const canonicalUrl = toCanonicalUrl(normalizedPath)
  const pageName = metadata.name || SITE_NAME
  const faqSchema = buildFaqSchema(normalizedPath, metadata.faqs)

  return {
    ...metadata,
    canonicalUrl,
    image: metadata.image || DEFAULT_IMAGE,
    keywords: metadata.keywords || 'GonardWeb, top website designing company in Ghaziabad, best performance marketing agency in Ghaziabad, digital solutions, websites, apps, marketing',
    robots: metadata.robots || 'index, follow',
    schema: [
      {
        '@context': 'https://schema.org',
        ...organizationSchema,
      },
      {
        '@context': 'https://schema.org',
        ...websiteSchema,
      },
      {
        '@context': 'https://schema.org',
        ...buildPageSchema(normalizedPath, {
          ...metadata,
          description: metadata.description || DEFAULT_DESCRIPTION,
          name: pageName,
        }),
      },
      {
        '@context': 'https://schema.org',
        ...buildBreadcrumbSchema(normalizedPath, pageName),
      },
      ...(metadata.schema || []),
      ...(faqSchema ? [faqSchema] : []),
    ],
  }
}

export { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL }