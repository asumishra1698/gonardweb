import { useState } from 'react'
import PageBannerLayout from '../components/PageBannerLayout.jsx'

const faqSections = [
  {
    title: 'Website Designing FAQs',
    items: [
      {
        question: 'What is included in your website designing service?',
        answer:
          'Our website designing service includes layout planning, visual design direction, responsive page structure, conversion-focused sections, CTA placement, user journey thinking, and design refinement. We shape the website so it looks professional, communicates clearly, and supports business goals across desktop and mobile screens.',
      },
      {
        question: 'How long does a website design project usually take?',
        answer:
          'The timeline depends on page count, content readiness, revision rounds, and project complexity. A smaller business website can move faster, while a larger custom or eCommerce design needs more planning. We usually define the exact timeline after understanding the scope and required design direction.',
      },
      {
        question: 'Do you design websites for mobile devices as well?',
        answer:
          'Yes. Every website design is planned with responsive behavior in mind so the layout works well across desktop, tablet, and mobile devices. We focus on readability, spacing, navigation clarity, and action points so visitors get a smoother experience regardless of screen size.',
      },
      {
        question: 'Can you design eCommerce websites for online stores?',
        answer:
          'Yes, we design eCommerce websites for businesses that need better product presentation, category structure, trust signals, and clearer purchase flow. We pay attention to how users move from browsing to add to cart, checkout, and order completion with less friction.',
      },
      {
        question: 'Will the website design match my brand identity?',
        answer:
          'Yes. We align the design with your brand tone, business category, audience expectations, and visual identity. Colors, typography, spacing, imagery, and section hierarchy are shaped to create a website that feels consistent with your business rather than generic or template-driven.',
      },
      {
        question: 'Do you provide custom website design or only standard layouts?',
        answer:
          'We provide custom website design based on your business requirements, content structure, and conversion goals. We do not rely only on generic layouts. The design direction is planned according to the kind of visitors you attract and the actions you want them to take.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Yes, we can redesign an existing website if it feels outdated, hard to use, or weak in communication. A redesign can improve presentation, usability, content flow, and conversion clarity while preserving the parts of the business identity that still work well.',
      },
      {
        question: 'Do you help with website content structure during the design phase?',
        answer:
          'Yes. We help structure sections, messaging flow, content order, and page priorities so the website becomes easier to understand. Good design depends on good content hierarchy, so we plan the layout around communication clarity and not just visual styling.',
      },
      {
        question: 'How many revisions are included in website designing?',
        answer:
          'Revision rounds depend on the project scope and what is agreed during the proposal stage. We usually include reasonable revision cycles so the design can be improved through feedback without making the process unstructured or difficult to manage.',
      },
      {
        question: 'Why should I invest in professional website designing?',
        answer:
          'Professional website designing improves first impression, credibility, usability, and conversion clarity. A better-designed website helps visitors understand the offer faster, trust the brand more easily, and take action with less confusion, which supports stronger business outcomes over time.',
      },
    ],
  },
  {
    title: 'Digital Marketing FAQs',
    items: [
      {
        question: 'What digital marketing services do you provide?',
        answer:
          'We provide digital marketing support across performance marketing, SEO, content strategy, campaign planning, and social media management. The service mix depends on the business goal, whether the priority is lead generation, traffic growth, brand visibility, audience engagement, or paid campaign performance.',
      },
      {
        question: 'What is performance marketing and how does it help a business?',
        answer:
          'Performance marketing focuses on measurable outcomes such as leads, clicks, conversions, and return on ad spend. It helps businesses track campaign efficiency more clearly and optimize budgets around what is actually generating business results instead of relying on guesswork.',
      },
      {
        question: 'Do you manage social media platforms for businesses?',
        answer:
          'Yes, we manage social media platforms such as Facebook, Instagram, and LinkedIn. This can include content planning, creative coordination, posting consistency, caption structure, campaign support, and day-to-day brand activity that strengthens online presence and audience engagement.',
      },
      {
        question: 'How long does it take to see results from digital marketing?',
        answer:
          'Results depend on the channel, competition, budget, and campaign quality. Paid campaigns can show performance signals faster, while SEO and organic growth usually take longer. We focus on building consistent improvement rather than promising unrealistic short-term outcomes.',
      },
      {
        question: 'Do you provide SEO as part of digital marketing?',
        answer:
          'Yes. SEO can be part of the digital marketing strategy where search visibility matters for the business. This may include keyword alignment, on-page improvements, content planning, and technical recommendations that help the website perform better in search over time.',
      },
      {
        question: 'Can you manage advertising budgets for paid campaigns?',
        answer:
          'Yes, we can help plan and manage paid campaign execution based on your business goals and available budget. We focus on targeting quality, creative alignment, landing-page relevance, and campaign monitoring so spending is tied to measurable outcomes and better decision-making.',
      },
      {
        question: 'How do you measure digital marketing performance?',
        answer:
          'We measure performance through metrics that match the campaign goal, such as leads, conversions, traffic quality, reach, engagement, click-through rate, cost per result, and return on ad spend. The reporting approach depends on which channels are being used.',
      },
      {
        question: 'Do I need both SEO and performance marketing?',
        answer:
          'Not always, but many businesses benefit from both. SEO supports long-term visibility and content-led growth, while performance marketing can generate faster traffic or leads. The right combination depends on timelines, competition, business goals, and the current state of your digital presence.',
      },
      {
        question: 'Can digital marketing help local businesses in Ghaziabad?',
        answer:
          'Yes. Local businesses in Ghaziabad can benefit from digital marketing through local SEO, paid campaigns, social media visibility, and sharper messaging. A well-planned strategy helps nearby customers discover the business more easily and builds stronger local trust and reach.',
      },
      {
        question: 'Do you create content ideas for marketing campaigns?',
        answer:
          'Yes, we help shape content direction for campaigns, landing pages, social media, and search-focused marketing efforts. Content planning matters because stronger messaging and better structure improve relevance, engagement, and the likelihood that digital campaigns will perform well.',
      },
    ],
  },
  {
    title: 'Client Support And Work Process FAQs',
    items: [
      {
        question: 'How do you start a new client project?',
        answer:
          'We usually start with a discussion around your business, goals, required service, and expected outcomes. After understanding the scope, we define the right direction, timeline, and delivery structure so the project begins with more clarity and fewer avoidable misunderstandings.',
      },
      {
        question: 'What information do you need before beginning work?',
        answer:
          'We typically need basic business details, service priorities, reference points, brand assets, content availability, and clarity about what the project should achieve. The better the initial context, the easier it becomes to shape a project that actually fits the business need.',
      },
      {
        question: 'How do you communicate during the project?',
        answer:
          'We keep communication straightforward through milestone-based updates, reviews, and practical feedback loops. The goal is to make progress visible, reduce confusion, and ensure decisions are made at the right time without overcomplicating the process for the client or team.',
      },
      {
        question: 'Do you provide support after project delivery?',
        answer:
          'Yes, post-delivery support can be provided depending on the project scope and what is agreed in advance. This may include guidance, refinements, minor updates, or continued improvement work where the business needs help after the initial delivery is completed.',
      },
      {
        question: 'Can I request revisions during the project?',
        answer:
          'Yes, revisions are part of the working process, but they should stay aligned with the agreed scope. We support structured revision rounds so improvements can be made while keeping the project manageable, timely, and focused on the original business objective.',
      },
      {
        question: 'How do you handle project timelines and deadlines?',
        answer:
          'We handle timelines by defining the work in phases and setting practical expectations around feedback, approvals, and delivery milestones. Deadlines depend on project size, but we aim to keep the process realistic so quality is maintained without unnecessary delays.',
      },
      {
        question: 'What happens if the project scope changes later?',
        answer:
          'If the scope changes, we review the impact on effort, timeline, and delivery. Scope changes are normal in some projects, but they need to be handled clearly so both sides understand what is changing and how it affects the work plan.',
      },
      {
        question: 'Do you work with small businesses as well as growing companies?',
        answer:
          'Yes, we work with small businesses, startups, and growing companies. The process and delivery scale according to the requirement. What matters most is understanding the business need clearly so the solution fits the current stage without unnecessary complexity or overspending.',
      },
      {
        question: 'Can clients combine multiple services in one project?',
        answer:
          'Yes, clients can combine services such as website design, website development, app work, SEO, and performance marketing in one broader engagement. This often helps create a more connected digital system instead of managing disconnected vendors or fragmented outputs.',
      },
      {
        question: 'Why is your work process important for project success?',
        answer:
          'A clear work process improves communication, reduces avoidable delays, keeps the project aligned with real business goals, and makes it easier to review progress. Strong delivery is not just about skill, but also about how consistently and clearly the work is managed.',
      },
    ],
  },
]

function FaqAccordionSection({ section }) {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <h2 className=" text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          {section.title}
        </h2>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200 ">
        {section.items.map((item, index) => {
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

function FaqPage() {
  return (
    <PageBannerLayout
      eyebrow="FAQs"
      title="Frequently asked questions about website designing, digital marketing, and client support."
      description="Explore answers to common questions about website design, performance marketing, project flow, client communication, and the way GonardWeb handles delivery."
      bannerTitle="Get clear answers before starting your website, marketing, or support conversation."
      bannerDescription="This FAQ page is designed to reduce uncertainty around services, timelines, revisions, communication, and the way digital projects are planned and delivered."
      primaryAction={{ label: 'Contact Us', to: '/contact-us' }}
    >
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {faqSections.map((section) => (
          <FaqAccordionSection key={section.title} section={section} />
        ))}
      </section>
    </PageBannerLayout>
  )
}

export default FaqPage