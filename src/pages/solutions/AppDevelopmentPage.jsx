import { useState } from 'react'
import { useConsultationPopup } from '../../components/ConsultationPopupProvider.jsx'
import PageBannerLayout from '../../components/PageBannerLayout.jsx'
import TechnologyStackSection from '../../components/TechnologyStackSection.jsx'

const appDevelopmentTypes = [
  {
    name: 'Android App Development',
    badge: 'Android ecosystem',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M8 9h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2h-2v-2h-2v2H9v-2H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z"
          fill="currentColor"
        />
        <path
          d="M9.5 6.5 8 4.5m8 2-1.5-2M9 12.5h.01M15 12.5h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Develop Android apps with smooth navigation, secure login, payment integration, notifications, and scalable user flows.',
    description:
      'We build Android applications for startups, service businesses, eCommerce brands, and internal operations with performance-focused architecture, API integration, and production-ready delivery.',
    accentClass: 'from-[#0c7a43] via-[#10a75a] to-[#3ed17d]',
    panelClass: 'border-[#d7f5e4] bg-[linear-gradient(180deg,_#eefdf4,_#ffffff)]',
  },
  {
    name: 'iOS App Development',
    badge: 'Apple experience',
    iconBgClass: 'bg-white/14 text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M15.2 12.1c.03 2.67 2.34 3.56 2.37 3.58-.02.06-.37 1.27-1.23 2.52-.74 1.08-1.5 2.16-2.7 2.18-1.17.02-1.55-.69-2.9-.69-1.34 0-1.77.67-2.88.71-1.16.04-2.05-1.16-2.8-2.23-1.52-2.2-2.69-6.21-1.13-8.93.77-1.35 2.15-2.2 3.64-2.23 1.14-.02 2.22.77 2.9.77.67 0 1.94-.95 3.27-.81.55.02 2.1.22 3.09 1.67-.08.05-1.85 1.08-1.83 3.46Zm-2.19-5.72c.62-.76 1.04-1.83.92-2.88-.9.04-1.98.6-2.62 1.36-.57.67-1.06 1.75-.93 2.78 1 .08 2.01-.5 2.63-1.26Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Build iOS apps that feel polished, fast, and aligned with Apple-focused user experience expectations.',
    description:
      'We develop iPhone applications with clean interfaces, stable backend connectivity, subscription or payment flows, and product logic tailored for premium mobile experiences.',
    accentClass: 'from-[#111827] via-[#1f3c88] to-[#4f7cff]',
    panelClass: 'border-slate-200 bg-white',
  },
]

const appDevelopmentFaqs = [
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
]

function AppDevelopmentFaqSection() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="mb-5 rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-8 lg:p-10">
      <div className="max-w-7xl">
        <span className="inline-flex rounded-full border border-[#cfd9ff] bg-[#eef3ff] px-4 py-2  text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#2447A8]">
          App Development FAQs
        </span>
        <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Common questions about Android and iOS app development.
        </h2>
        <p className="mt-4 max-w-2xl  text-base leading-8 text-slate-600 sm:text-lg">
          These answers cover project scope, platform choices, features, timelines, and support after launch.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200">
        {appDevelopmentFaqs.map((item, index) => {
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

function AppDevelopmentPage() {
  const { openConsultationPopup } = useConsultationPopup()

  function handleOpenPopup(event) {
    event.preventDefault()
    event.stopPropagation()
    openConsultationPopup()
  }

  return (
    <PageBannerLayout
      eyebrow="App development"
      title="App development for Android products and iOS mobile experiences."
      description="We develop mobile applications that are fast, intuitive, and structured around the way users browse, transact, engage, and return."
      bannerTitle="Build mobile apps that feel reliable, polished, and ready for growth."
      bannerDescription="From Android app builds to iOS product experiences, our app development work focuses on performance, usability, platform fit, and maintainable architecture."
      focusTitle="Android and iOS app development need platform-aware product decisions."
      focusDescription="We shape each app around its device ecosystem, user expectations, business model, and the features required for launch and scale."
    >
      <section className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6 mt-5 mb-5">
        {appDevelopmentTypes.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={handleOpenPopup}
            className={[
              'group block w-full cursor-pointer overflow-hidden rounded-[1.6rem] border p-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2550c3] focus-visible:ring-offset-4 sm:rounded-[1.8rem] sm:p-6 lg:p-7',
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
        eyebrow="App Development Stack"
        title="Technology stack we use to develop stable, scalable mobile applications"
        description="From front-end mobile frameworks to backend systems, APIs, databases, authentication, and cloud services, we choose technology that supports better performance, maintainability, and long-term product growth."
      />

      <AppDevelopmentFaqSection />
    </PageBannerLayout>
  )
}

export default AppDevelopmentPage