
import { Link } from 'react-router-dom'
import { useConsultationPopup } from '../components/ConsultationPopupProvider.jsx'
import PageBannerLayout from '../components/PageBannerLayout.jsx'

const websitePackages = [
    {
        name: 'Dynamic Business Website',
        price: '₹14,999',
        label: 'Most Popular',
        description: 'Built for growing brands that need flexible pages, publishing control, and stronger SEO structure.',
        features: ['Unlimited pages', 'Admin dashboard', 'Blog or news module', 'SEO-ready architecture'],
        accent: 'from-indigo-600 to-violet-500',
        featured: true,
    },
    {
        name: 'Advance Ecommerce Store',
        price: '₹24,999',
        label: 'Sales Focused',
        description: 'For businesses ready to sell online with payments, catalog management, and order workflows.',
        features: ['Product catalog', 'Payment gateway', 'Order management', 'Inventory support'],
        accent: 'from-emerald-500 to-teal-400',
    },
    {
        name: 'Advanced Website',
        price: 'Custom',
        label: 'Tailored Build',
        description: 'For complex requirements, bespoke workflows, integrations, and advanced product logic.',
        features: ['Custom feature set', 'API integrations', 'Strategy consultation', 'Scalable implementation'],
        accent: 'from-amber-500 to-orange-400',
    },
]

const marketingPackages = [
    {
        name: 'Performance And Google Ads',
        price: 'From ₹17,999/mo',
        label: 'Paid Growth',
        description: 'Campaign planning and optimization focused on leads, reach, and measurable acquisition.',
        features: ['Google Search and Display', 'Campaign setup', 'Conversion tracking', 'Monthly reporting'],
        accent: 'from-fuchsia-500 to-pink-400',
    },
    {
        name: 'Social Media Management',
        price: 'From ₹16,999/mo',
        label: 'Brand Presence',
        description: 'Consistent content planning, publishing, and account management across core social channels.',
        features: ['Facebook, Instagram, LinkedIn', 'Content creation', 'Scheduling and posting', 'Monthly analytics'],
        accent: 'from-rose-500 to-orange-400',
    },
    {
        name: 'SEO',
        price: 'From ₹8,999/mo',
        label: 'Organic Growth',
        description: 'Long-term search visibility through technical improvements, content signals, and keyword strategy.',
        features: ['On-page and off-page SEO', 'Keyword research', 'Technical optimization', 'Monthly reports'],
        accent: 'from-lime-500 to-emerald-400',
    },
]

function PricingCard({ plan, onRequestProposal }) {
    return (
        <article
            className={[
                'group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white/88 p-7 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]',
                plan.featured ? 'border-indigo-300 ring-1 ring-indigo-200' : 'border-white/70',
            ].join(' ')}
        >
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${plan.accent}`} aria-hidden="true" />
            <div className="mb-6 flex items-center justify-between gap-4 pt-3">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                    {plan.label}
                </span>
                {plan.featured ? (
                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                        Recommended
                    </span>
                ) : null}
            </div>

            <div className="mb-4">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
            </div>

            <div className="mb-6 flex items-end gap-2 border-b border-slate-100 pb-6">
                <span className="text-4xl font-semibold tracking-tight text-slate-950">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-500">starting price</span>
            </div>

            <ul className="mb-8 space-y-3 text-sm text-slate-700">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.accent} text-[10px] font-bold text-white`}>
                            ✓
                        </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex items-center gap-3">
                <button
                    type="button"
                    onClick={onRequestProposal}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                    Request Proposal
                </button>
                <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                    Ask Question
                </Link>
            </div>
        </article>
    )
}

function PricingSection({ eyebrow, title, description, plans, columnsClass, onRequestProposal }) {
    return (
        <section className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/55 p-2 shadow-[0_20px_70px_rgba(99,102,241,0.08)] backdrop-blur sm:p-8 lg:p-10">
            <div className="absolute -right-24 top-0 h-52 w-52 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />

            <div className="relative mb-8 flex max-w-3xl flex-col gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-indigo-600">{eyebrow}</span>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
            </div>

            <div className={`relative grid gap-6 ${columnsClass}`}>
                {plans.map((plan) => (
                    <PricingCard key={plan.name} plan={plan} onRequestProposal={onRequestProposal} />
                ))}
            </div>
        </section>
    )
}

export default function PricingPage() {
    const { openConsultationPopup } = useConsultationPopup()

    return (
        <PageBannerLayout
            eyebrow="Pricing"
            title="Outline packages, retainers, or project tiers."
            description="You can turn this page into a pricing matrix, proposal filter, or service comparison surface."
            bannerTitle="Present pricing with clearer structure, premium framing, and stronger buying confidence."
            bannerDescription="Use the pricing page to help visitors understand scope, compare options, and move toward the right next conversation."
            focusTitle="Clear pricing reduces friction before the first sales call."
            focusDescription="Lead with scope, category, and expected outcomes so visitors can identify the right fit quickly."
        >
            <div className="relative overflow-hidden px-0 py-4  sm:px-2 lg:px-4 lg:py-10">
                <div className="max-w-full">                    

                    <div className="space-y-10">
                        <PricingSection
                            eyebrow="Web Builds"
                            title="Website packages with clearer scope and stronger conversion framing"
                            description="Choose a package based on how much flexibility, content scale, and business logic your website needs today."
                            plans={websitePackages}
                            columnsClass="md:grid-cols-2 xl:grid-cols-3"
                            onRequestProposal={openConsultationPopup}
                        />

                        <PricingSection
                            eyebrow="Marketing Retainers"
                            title="Monthly marketing packages focused on visibility, traffic, and lead generation"
                            description="Each marketing service is framed as an ongoing retainer with setup, optimization, and reporting built into the monthly rhythm."
                            plans={marketingPackages}
                            columnsClass="md:grid-cols-2 xl:grid-cols-3"
                            onRequestProposal={openConsultationPopup}
                        />
                    </div>
                </div>
            </div>
        </PageBannerLayout>
    )
}
