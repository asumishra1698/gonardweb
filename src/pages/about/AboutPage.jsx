import { Link } from 'react-router-dom'
import SliderBanner from '../../components/SliderBanner.jsx'

const aboutBannerSlides = [
    {
        eyebrow: 'About Us',
        title: 'Meet the people, process, and perspective behind GonardWeb.',
        description:
            'We combine design thinking, technical delivery, and business clarity to build digital experiences that are useful, scalable, and grounded in real client goals.',
        primaryAction: { label: 'Book A Free Consultation', to: '/contact' },
        focusTitle: 'A stronger introduction for visitors who want to know the team behind the output.',
        focusDescription:
            'This banner sets context for your story, values, capabilities, and the way your company approaches client work.',
        backgroundImage:
            "linear-gradient(125deg, rgba(16, 39, 93, 0.44), rgba(23, 31, 56, 0.32)), url('/banner1.jpg')",
    },
]

const capabilityCards = [
    {
        title: 'Strategy with practical execution',
        description:
            'We do not separate business thinking from design and development. Every project is shaped around what the company needs to communicate, how users behave, and what the final system must achieve.',
    },
    {
        title: 'Services built to work together',
        description:
            'From website design and development to app delivery and performance marketing, we build connected digital systems instead of isolated outputs that are hard to maintain or grow.',
    },
    {
        title: 'Delivery focused on clarity',
        description:
            'We keep scope, priorities, and communication straightforward so clients understand what is being built, why it matters, and how each phase moves the project forward.',
    },
]

const processSteps = [
    {
        title: 'Understand the business context',
        description:
            'We begin with your offer, audience, pain points, and growth goals so the work is tied to business reality rather than surface-level design decisions.',
    },
    {
        title: 'Shape the right digital structure',
        description:
            'Whether the project is a website, app, eCommerce build, or marketing system, we define the pages, flows, features, and priorities needed to support results.',
    },
    {
        title: 'Launch with room to improve',
        description:
            'We aim for dependable delivery first, then help improve performance through iteration, refinement, and clearer next-step planning after launch.',
    },
]

function AboutPage() {
    return (
        <div className="">
            <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
                <SliderBanner
                    slides={aboutBannerSlides}
                    className="min-h-[420px] rounded-none border-x-0"
                />
            </div>
            <section className="mx-auto max-w-7xl py-12 lg:py-16">
                <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
                    <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
                        <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
                            Who we are
                        </div>
                        <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            GonardWeb builds digital experiences that help businesses look sharper, work better, and grow with more confidence.
                        </h2>
                        <div className="mt-5 space-y-5  text-base leading-8 text-slate-600 sm:text-lg">
                            <p>
                                We work with businesses that need more than a basic online presence. Our role is to turn ideas, offers, and business goals into websites, apps, and marketing systems that are easier to use, easier to manage, and better aligned with growth.
                            </p>
                            <p>
                                That means combining structure, design, content thinking, and technical execution into one practical delivery process. We focus on making the final output clear for users, useful for the business, and strong enough to support long-term improvement.
                            </p>
                            <p>
                                Whether a client needs an eCommerce website, a custom business platform, mobile app development, or campaign support, we approach the work with the same standard: solve the real problem first, then build with clarity and discipline.
                            </p>
                        </div>
                    </article>

                    <article className="rounded-[2rem] border border-[#d9e6ff] bg-[linear-gradient(160deg,_#eef5ff,_#ffffff)] p-7 shadow-[0_20px_60px_rgba(37,80,195,0.08)] sm:p-9">
                        <div className="inline-flex rounded-full bg-white px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3] shadow-sm">
                            What clients can expect
                        </div>
                        <div className="mt-6 grid gap-4">
                            {capabilityCards.map((item) => (
                                <article
                                    key={item.title}
                                    className="rounded-[1.5rem] border border-white/80 bg-white px-5 py-5 shadow-[0_16px_40px_rgba(37,80,195,0.06)]"
                                >
                                    <h3 className=" text-xl font-black text-slate-950">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3  text-sm leading-7 text-slate-600 sm:text-base">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-7xl pb-8 lg:pb-12">
                <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff,_#f8fbff)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-9">
                    <div className="max-w-3xl">
                        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-slate-700">
                            How we work
                        </div>
                        <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            A working process built around clarity, usefulness, and steady execution.
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-3">
                        {processSteps.map((step, index) => (
                            <article
                                key={step.title}
                                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                            >
                                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2550c3]  text-sm font-black text-white">
                                    0{index + 1}
                                </div>
                                <h3 className="mt-5  text-xl font-black text-slate-950">
                                    {step.title}
                                </h3>
                                <p className="mt-3  text-sm leading-7 text-slate-600 sm:text-base">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
                    <article className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),linear-gradient(135deg,_#081a44_0%,_#123a91_45%,_#2563eb_100%)] p-7 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:p-9">
                        <div className="inline-flex rounded-full bg-white/12 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-white/80">
                            Why it matters
                        </div>
                        <h2 className="mt-5  text-2xl font-black tracking-tight sm:text-3xl">
                            Good digital work should reduce confusion, improve decisions, and make growth easier to support.
                        </h2>
                        <p className="mt-5  text-base leading-8 text-white/85 sm:text-lg">
                            We believe strong digital delivery is not only about visuals or code quality. It is about helping a business communicate more clearly, convert more confidently, and operate with fewer points of friction across customer-facing systems.
                        </p>
                    </article>

                    <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
                        <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
                            Next step
                        </div>
                        <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                            If you are planning a website, app, or growth-focused digital project, we can help shape the right starting point.
                        </h2>
                        <p className="mt-5  text-base leading-8 text-slate-600 sm:text-lg">
                            Start with a conversation about your business, what needs to improve, and what kind of digital system will actually support the result you want. We can help define the right scope before the work becomes expensive, unclear, or overcomplicated.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/contact-us"
                                className="inline-flex items-center justify-center rounded-xl bg-[#1f4fc9] px-6 py-3  text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#173ea4]"
                            >
                                Book A Free Consultation
                            </Link>
                            <Link
                                to="/solutions"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3  text-sm font-black uppercase tracking-[0.08em] text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default AboutPage