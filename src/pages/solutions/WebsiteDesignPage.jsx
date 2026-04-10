import { useState } from 'react'
import { useConsultationPopup } from '../../components/ConsultationPopupProvider.jsx'
import PageBannerLayout from '../../components/PageBannerLayout.jsx'
import TechnologyStackSection from '../../components/TechnologyStackSection.jsx'

const websiteTypes = [
  {
    name: 'eCommerce Website Design',
    badge: 'Revenue focused',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 6h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M4 10h16M9 14h2M13 14h2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Design online stores that guide users from product discovery through add to cart, payment gateway, checkout, and shipping.',
    description:
      'We shape eCommerce websites around product hierarchy, promotional blocks, trust signals, mobile shopping flow, and cleaner checkout-oriented UX.',   
    accentClass: 'from-[#10327f] via-[#1d56d0] to-[#4d8dff]',
    panelClass: 'border-[#d9e6ff] bg-[linear-gradient(180deg,_#eef5ff,_#ffffff)]',
    cta: 'Start eCommerce Project',
  },
  {
    name: 'Business Website Design',
    badge: 'Brand clarity',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M7.5 8h9M7.5 12h9M7.5 16h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Build modern business websites that explain the offer clearly and earn trust quickly.',
    description:
      'For companies, agencies, consultancies, and service businesses, we design structured websites that improve first impression, messaging flow, and lead generation.',    
    accentClass: 'from-[#0f172a] via-[#1e3a8a] to-[#2563eb]',
    panelClass: 'border-slate-200 bg-white',
    cta: 'View Design Direction',
  },
]

const websiteDesignFaqs = [
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
]

function WebsiteDesignFaqSection() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="mb-5 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_22px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
      <div className="max-w-5xl">
        <span className="inline-flex rounded-full border border-[#cfd9ff] bg-[#eef3ff] px-4 py-2  text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#2447A8]">
          Website Design FAQs
        </span>
        <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Common questions about website designing and redesign projects.
        </h2>
        <p className="mt-4 max-w-2xl  text-base leading-8 text-slate-600 sm:text-lg">
          These answers cover design scope, mobile responsiveness, eCommerce work, redesigns, and project timelines.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200">
        {websiteDesignFaqs.map((item, index) => {
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

function WebsiteDesignPage() {
  const { openConsultationPopup } = useConsultationPopup()

  function handleOpenPopup(event) {
    event.preventDefault()
    event.stopPropagation()
    openConsultationPopup()
  }

  return (
    <PageBannerLayout
      eyebrow="Website design"
      title="Modern website design in Ghaziabad for eCommerce brands and business-focused companies."
      description="As a top website designing company in Ghaziabad, we design websites that look sharper, communicate faster, and make it easier for visitors to browse, trust, and take action."
      bannerTitle="Design websites that feel modern, strategic, and built for conversion."
      bannerDescription="From eCommerce storefronts to informative business websites, our design work balances visual polish with user flow, content clarity, and stronger decision paths for businesses in Ghaziabad and beyond."
      focusTitle="eCommerce and business website design need different UX priorities."
      focusDescription="We tailor the design system to match whether the site needs to sell products, explain services, or generate qualified inquiries."
    >
      <section className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6 mt-5 mb-5">
        {websiteTypes.map((item) => (
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
        eyebrow="Design + Development Stack"
        title="Technology stack we use to design and build high-performing websites"
        description="From modern front-end frameworks to reliable backend systems, databases, and CMS platforms, we choose technology that supports cleaner user experience, stronger performance, and easier long-term growth."
      />

      <WebsiteDesignFaqSection />
    </PageBannerLayout>
  )
}

export default WebsiteDesignPage