import { useState } from 'react'
import { useConsultationPopup } from '../../components/ConsultationPopupProvider.jsx'
import PageBannerLayout from '../../components/PageBannerLayout.jsx'
import TechnologyStackSection from '../../components/TechnologyStackSection.jsx'

const digitalMarketingTypes = [
  {
    name: 'Performance Marketing',
    badge: 'Paid growth',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 18h16M7 15l3-3 2 2 5-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8h4v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Run performance marketing campaigns built around lead generation, conversion tracking, audience targeting, and measurable return on ad spend.',
    description:
      'We plan and manage paid campaigns across search, display, remarketing, and conversion funnels with landing-page alignment, reporting clarity, and ongoing optimization.',
    accentClass: 'from-[#7c2d12] via-[#c2410c] to-[#fb923c]',
    panelClass: 'border-[#fed7aa] bg-[linear-gradient(180deg,_#fff7ed,_#ffffff)]',
  },
  {
    name: 'Social Media Management',
    badge: 'Brand presence',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M7 8.5A2.5 2.5 0 1 1 7 13.5 2.5 2.5 0 0 1 7 8.5Zm10-2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7 15c2.67 0 8 1.34 8 4v1H-1v-1c0-2.66 5.33-4 8-4Zm10 0c-1 0-2.2.2-3.3.56 1.1.8 1.8 1.86 1.8 3.19V20H23v-1c0-2.66-3.58-4-6-4Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Manage Facebook, Instagram, and LinkedIn with platform-specific content, audience engagement, posting consistency, and stronger brand visibility.',
    description:
      'We support social media management through planning calendars, creative direction, caption strategy, campaign coordination, community responses, and channel growth support.',
    accentClass: 'from-[#1e1b4b] via-[#1d4ed8] to-[#06b6d4]',
    panelClass: 'border-slate-200 bg-white',
  },
]

const digitalMarketingFaqs = [
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
]

function DigitalMarketingFaqSection() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="mb-5 rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
      <div className="max-w-7xl">
        <span className="inline-flex rounded-full border border-[#cfd9ff] bg-[#eef3ff] px-4 py-2  text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#2447A8]">
          Digital Marketing FAQs
        </span>
        <h2 className="mt-4  text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Common questions about performance marketing and social media management.
        </h2>
        <p className="mt-4 max-w-6xl  text-base leading-8 text-slate-600 sm:text-lg">
          These answers cover services, campaign timelines, local growth, and the way digital marketing supports business outcomes.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200">
        {digitalMarketingFaqs.map((item, index) => {
          const isOpen = openItem === index

          return (
            <div
              key={item.question}
              className="overflow-hidden border-b border-slate-200 bg-white last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenItem((current) => (current === index ? -1 : index))}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left  text-[1.05rem] font-semibold text-slate-950 transition hover:bg-slate-50 sm:px-6 sm:text-[1.12rem]"
              >
                <span>{item.question}</span>
                <span
                  className={[
                    'text-2xl font-light text-[#2447A8] transition-transform duration-300 ease-out',
                    isOpen ? 'rotate-45' : 'rotate-0',
                  ].join(' ')}
                >
                  +
                </span>
              </button>

              <div
                className={[
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 sm:px-6">
                    <p className=" text-base leading-8 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function DigitalMarketingPage() {
  const { openConsultationPopup } = useConsultationPopup()

  function handleOpenPopup(event) {
    event.preventDefault()
    event.stopPropagation()
    openConsultationPopup()
  }

  return (
    <PageBannerLayout
      eyebrow="Digital marketing"
      title="Digital marketing in Ghaziabad for performance campaigns and social media growth."
      description="As a best performance marketing agency in Ghaziabad, we help brands generate leads, improve visibility, and stay active across the channels that drive awareness, engagement, and revenue."
      bannerTitle="Build a sharper digital marketing system for paid growth and social reach."
      bannerDescription="From performance marketing to social media management, our work focuses on audience targeting, campaign execution, reporting clarity, and consistent brand presence for businesses in Ghaziabad and beyond."
      focusTitle="Performance marketing and social media management need different execution models."
      focusDescription="We shape the work around whether the goal is faster lead generation, measurable advertising returns, or stronger day-to-day social presence on key platforms."
    >
      <section className="mt-5 mb-5 grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
        {digitalMarketingTypes.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={handleOpenPopup}
            className={[
              'group block w-full cursor-pointer overflow-hidden rounded-[1.6rem] border p-4 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2550c3] focus-visible:ring-offset-4 sm:rounded-[1.8rem] sm:p-6 lg:p-7',
              item.panelClass,
            ].join(' ')}
          >
            <div
              className={[
                'rounded-[1.25rem] bg-gradient-to-br p-4 text-white sm:rounded-[1.5rem] sm:p-5 lg:p-6',
                item.accentClass,
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-full bg-white/12 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-white/80">
                  {item.badge}
                </div>
                <div
                  className={[
                    'flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]',
                    item.iconBgClass,
                  ].join(' ')}
                >
                  {item.icon}
                </div>
              </div>
              <h2 className="mt-3  text-2xl font-black leading-tight sm:text-2xl lg:text-3xl">
                {item.name}
              </h2>
              <p className="mt-3 max-w-2xl  text-base font-semibold leading-7 text-white/92 sm:text-lg sm:leading-8">
                {item.title}
              </p>
              <p className="mt-3 max-w-2xl  text-sm leading-7 text-white/88 sm:text-base sm:leading-8 lg:text-lg">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </section>

      <TechnologyStackSection
        eyebrow="Marketing Stack"
        title="Platforms and tools we use to manage campaigns, tracking, and digital growth"
        description="From analytics and tracking to campaign execution and content workflows, we use tools that support performance measurement, audience targeting, and consistent marketing operations."
      />

      <DigitalMarketingFaqSection />
    </PageBannerLayout>
  )
}

export default DigitalMarketingPage