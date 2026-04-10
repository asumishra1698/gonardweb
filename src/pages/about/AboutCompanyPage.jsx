import { Link } from 'react-router-dom'
import SliderBanner from '../../components/SliderBanner.jsx'


const companyBannerSlides = [
  {
    eyebrow: 'About Company',
    title: 'We build practical digital systems that help businesses grow with clarity.',
    description:
      'From websites and applications to platform-based workflows, GonardWeb focuses on dependable delivery, useful product thinking, and solutions shaped around real business needs.',
    primaryAction: { label: 'Book A Free Consultation', to: '/contact' },    
    focusTitle: 'A company page with a stronger first impression and clearer positioning.',
    focusDescription:
      'Use this banner to introduce the business, highlight credibility, and lead visitors into the full company story below.',
    backgroundImage:
      "linear-gradient(125deg, rgba(22, 39, 88, 0.42), rgba(19, 28, 48, 0.3)), url('/banner2.jpg')",
  },
]

const companyHighlights = [
  {
    title: 'Established in 2015',
    description:
      'GonardWeb was established in 2015 with a focus on helping businesses build stronger digital foundations through design, development, and growth-oriented execution.',
  },
  {
    title: 'Business-focused delivery',
    description:
      'We approach every project with attention to clarity, usability, and commercial fit so the work supports real business outcomes instead of surface-level output.',
  },
  {
    title: 'Connected digital services',
    description:
      'Our work spans website design, website development, app development, and digital marketing so clients can build a more complete and scalable digital presence.',
  },
]

const companyFoundations = [
  {
    title: 'Team',
    description:
      'Our team brings together design thinking, development execution, content structure, and digital growth support so projects can move forward with stronger coordination and fewer disconnects between strategy and delivery.',
  },
  {
    title: 'Work culture',
    description:
      'Our work culture is built around responsibility, clarity, and practical collaboration. We value straightforward communication, dependable timelines, and a mindset that prioritizes useful outcomes over unnecessary complexity.',
  },
  {
    title: 'Work process',
    description:
      'Our process starts by understanding the business need, then shaping the right structure, building with clear priorities, and refining the output so the final result is easier to use, manage, and grow over time.',
  },
]

function AboutCompanyPage() {
  return (
    <div className="">
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
        <SliderBanner
          slides={companyBannerSlides}
          className="min-h-[420px] rounded-none border-x-0"
        />
      </div>

      <section className="mx-auto max-w-7xl py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
            <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
              Company overview
            </div>
            <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              GonardWeb is a digital company established in 2015 to help businesses build clear, modern, and growth-ready digital systems.
            </h2>
            <div className="mt-5 space-y-5  text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Since 2015, we have focused on creating websites, digital platforms, mobile app experiences, and marketing support systems that are easier for businesses to use and easier for customers to understand.
              </p>
              <p>
                Our company approach is practical. We look at what the business needs to communicate, how users are expected to move through the experience, and what kind of digital setup will support long-term improvement instead of short-term patchwork.
              </p>
              <p>
                We work with brands, service businesses, startups, and growing companies that need cleaner structure, stronger presentation, and more dependable execution across digital touchpoints.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#d9e6ff] bg-[linear-gradient(160deg,_#eef5ff,_#ffffff)] p-7 shadow-[0_20px_60px_rgba(37,80,195,0.08)] sm:p-9">
            <div className="inline-flex rounded-full bg-white px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3] shadow-sm">
              Company highlights
            </div>
            <div className="mt-6 grid gap-4">
              {companyHighlights.map((item) => (
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

      <section className="mx-auto max-w-7xl pb-14 lg:pb-20">
        <div className="mb-6 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff,_#f8fbff)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-9">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-slate-100 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-slate-700">
              How the Gonardweb works
            </div>
            <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              The strength of GonardWeb comes from the team behind the work, the culture that guides decisions, and the process that keeps delivery practical.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {companyFoundations.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
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
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <article className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),linear-gradient(135deg,_#081a44_0%,_#123a91_45%,_#2563eb_100%)] p-7 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:p-9">
            <div className="inline-flex rounded-full bg-white/12 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-white/80">
              Our direction
            </div>
            <h2 className="mt-5  text-2xl font-black tracking-tight sm:text-3xl">
              We aim to build digital work that feels professional, performs reliably, and supports real business growth.
            </h2>
            <p className="mt-5  text-base leading-8 text-white/85 sm:text-lg">
              Our company is built around the idea that good digital execution should simplify communication, strengthen credibility, and help businesses move forward with more confidence in their online presence.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
            <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
              Work with us
            </div>
            <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              If you need a company that can combine design, development, and digital growth support, GonardWeb is ready to help.
            </h2>
            <p className="mt-5  text-base leading-8 text-slate-600 sm:text-lg">
              We can help define the right starting point for your next website, app, eCommerce project, or marketing initiative with clearer structure and a more practical delivery plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f4fc9] px-6 py-3  text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#173ea4]"
              >
                Book A Free Consultation
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3  text-sm font-black uppercase tracking-[0.08em] text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Back To About Us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default AboutCompanyPage