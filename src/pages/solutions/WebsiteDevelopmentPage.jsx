import { useState } from 'react'
import { useConsultationPopup } from '../../components/ConsultationPopupProvider.jsx'
import PageBannerLayout from '../../components/PageBannerLayout.jsx'
import TechnologyStackSection from '../../components/TechnologyStackSection.jsx'

const websiteDevelopmentTypes = [
  {
    name: 'eCommerce Store Development',
    badge: 'Sales infrastructure',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M3 5h2l2.2 9.2a1 1 0 0 0 .98.8H18a1 1 0 0 0 .97-.76L21 7H7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="19" r="1.5" fill="currentColor" />
        <circle cx="17" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Develop online stores with product pages, add to cart, payment gateway, checkout, and shipping flows built to convert.',
    description:
      'We build eCommerce websites with scalable catalog structure, cart logic, payment integration, order flow, mobile performance, and cleaner store management foundations.',
    accentClass: 'from-[#10327f] via-[#1d56d0] to-[#4d8dff]',
    panelClass: 'border-[#d9e6ff] bg-[linear-gradient(180deg,_#eef5ff,_#ffffff)]',
  },
  {
    name: 'Custom Website Development',
    badge: 'Business systems',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 9h8M8 13h5M8 17h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Build custom business websites that match your workflow, content structure, lead flow, and operational needs.',
    description:
      'For service companies, agencies, institutions, and growing brands, we develop custom websites with tailored sections, integrations, forms, CMS workflows, and performance-focused architecture.',
    accentClass: 'from-[#0f172a] via-[#1e3a8a] to-[#2563eb]',
    panelClass: 'border-slate-200 bg-white',
  },
]

const websiteDevelopmentFaqs = [
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
]

function WebsiteDevelopmentFaqSection() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="mb-5 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_22px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
      <div className="max-w-5xl">
        <span className="inline-flex rounded-full border border-[#cfd9ff] bg-[#eef3ff] px-4 py-2  text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#2447A8]">
          Website Development FAQs
        </span>
        <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Common questions about custom website and eCommerce development.
        </h2>
        <p className="mt-4 max-w-2xl  text-base leading-8 text-slate-600 sm:text-lg">
          These answers cover development scope, custom workflows, store functionality, and expected project timelines.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200">
        {websiteDevelopmentFaqs.map((item, index) => {
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

function WebsiteDevelopmentPage() {
  const { openConsultationPopup } = useConsultationPopup()

  function handleOpenPopup(event) {
    event.preventDefault()
    event.stopPropagation()
    openConsultationPopup()
  }

  return (
    <PageBannerLayout
      eyebrow="Website development"
      title="Website development for eCommerce stores and custom business platforms."
      description="We develop websites that are fast, scalable, easier to manage, and aligned with the way your business sells, informs, or captures leads."
      bannerTitle="Build websites that support transactions, operations, and long-term growth."
      bannerDescription="From eCommerce storefronts to custom business websites, our development work focuses on performance, integrations, maintainability, and smoother user journeys."
      focusTitle="eCommerce development and custom website development solve different technical problems."
      focusDescription="We shape the architecture around whether your website needs store functionality, custom workflows, content flexibility, or lead-generation infrastructure."
    >
      <section className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6 mt-5 mb-5">
        {websiteDevelopmentTypes.map((item) => (
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
              <div className="mt-4 flex items-center justify-end">
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-white/90 sm:text-base">
                  Know more
                  <svg viewBox="0 0 80 20" className="h-4 w-14" aria-hidden="true">
                    <path
                      d="M2 10h70M64 4l8 6-8 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </button>
        ))}
      </section>

      <TechnologyStackSection
        eyebrow="Development Stack"
        title="Technology stack we use to develop fast, stable, and scalable websites"
        description="From modern front-end frameworks to backend systems, CMS platforms, APIs, and databases, we choose technology that supports stronger performance, easier maintenance, and future-ready growth."
      />

      <WebsiteDevelopmentFaqSection />
    </PageBannerLayout>
  )
}

export default WebsiteDevelopmentPage