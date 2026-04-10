import { Link } from 'react-router-dom'
import PageBannerLayout from '../../components/PageBannerLayout.jsx'

const solutionCards = [
  {
    title: 'Website Design',
    eyebrow: 'Visual clarity',
    description:
      'Explore design-led website solutions shaped around trust, hierarchy, responsive behavior, and stronger conversion flow for modern brands.',
    imageSrc: '/service.png',
    imageAlt: 'Website design and digital product illustration',
    to: '/solutions/website-design',
    accentClass: 'from-[#123e91] via-[#2558cf] to-[#6fa0ff]',
    highlights: ['Responsive layouts', 'Business sites', 'eCommerce storefronts'],
  },
  {
    title: 'Website Development',
    eyebrow: 'Scalable builds',
    description:
      'View website development services for custom business websites, eCommerce stores, CMS-driven builds, and performance-focused implementation.',
    imageSrc: '/banner1.jpg',
    imageAlt: 'eCommerce checkout and website development visual',
    to: '/solutions/website-development',
    accentClass: 'from-[#0f172a] via-[#1e3a8a] to-[#2563eb]',
    highlights: ['Custom workflows', 'Payment integrations', 'Fast deployment'],
  },
  {
    title: 'App Development',
    eyebrow: 'Mobile products',
    description:
      'See app development solutions for Android and iOS products built with reliable architecture, polished user flow, and launch-ready features.',
    imageSrc: '/banner2.jpg',
    imageAlt: 'Mobile app interface showcase on smartphone screens',
    to: '/solutions/app-development',
    accentClass: 'from-[#0c7a43] via-[#10a75a] to-[#3ed17d]',
    highlights: ['Android apps', 'iOS experiences', 'API-connected features'],
  },
  {
    title: 'Digital Marketing',
    eyebrow: 'Audience growth',
    description:
      'Browse performance marketing and social media solutions designed to improve visibility, lead flow, and channel-level consistency.',
    imageSrc: '/optimized/banner2-1280.webp',
    imageAlt: 'Digital growth campaign visual with devices and interface layers',
    to: '/solutions/digital-marketing',
    accentClass: 'from-[#7c2d12] via-[#c2410c] to-[#fb923c]',
    highlights: ['Performance campaigns', 'Social management', 'SEO support'],
  },
]

function SolutionCard({ card }) {
  return (
    <Link
      to={card.to}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_5px_10px_rgba(15,23,42,0.14)]"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className={[`absolute inset-0 bg-gradient-to-tr opacity-80`, card.accentClass].join(' ')} />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <span className="inline-flex rounded-full border border-white/30 bg-white/12 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm">
            {card.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-[2rem]">
            {card.title}
          </h2>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-[1.02rem] leading-8 text-slate-600">{card.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {card.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-4 text-[0.9rem] font-extrabold uppercase tracking-[0.16em] text-slate-950 transition-colors group-hover:text-[#2447A8]">
          <span>Explore Solution</span>
          <span className="h-px w-12 bg-slate-400 transition-all duration-300 group-hover:w-16 group-hover:bg-[#2447A8]" />
        </div>
      </div>
    </Link>
  )
}

function SolutionsPage() {
  return (
    <PageBannerLayout
      eyebrow="Solutions"
      title="Explore website, app, and growth solutions in one place."
      description="Browse GonardWeb solution areas across website design, website development, app development, and digital marketing with clearer visual entry points into each service."
      bannerTitle="Digital solutions built to improve clarity, performance, and business momentum."
      bannerDescription="Use this solutions overview to compare service categories, understand what each one covers, and move into the right detailed page faster."
    >
      <section className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-7xl">
          <span className="inline-flex rounded-full border border-[#cfd9ff] bg-[#eef3ff] px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#2447A8]">
            Service Overview
          </span>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-2xl lg:text-4xl">
            All solution categories with visual cards and direct access to each service page.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Each card below leads to a dedicated service page with deeper context, scope, and positioning for that solution area.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {solutionCards.map((card) => (
            <SolutionCard key={card.to} card={card} />
          ))}
        </div>
      </section>
    </PageBannerLayout>
  )
}

export default SolutionsPage