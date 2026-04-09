import SliderBanner from '../../components/SliderBanner.jsx'

const missionValuesBannerSlides = [
  {
    eyebrow: 'Mission & Values',
    title: 'Build digital products with clear intent, practical execution, and long-term trust.',
    description:
      'Our mission is to create useful digital systems that help businesses grow, while our values keep every project grounded in clarity, reliability, and meaningful results.',
    primaryAction: { label: 'Book A Free Consultation', to: '/contact-us' },    
    focusTitle: 'A stronger page introduction for the principles behind the work.',
    focusDescription:
      'Use this banner to frame your company mission, operating values, and the standards that shape decision-making across delivery.',
    backgroundImage:
      "linear-gradient(125deg, rgba(18, 52, 86, 0.46), rgba(10, 24, 55, 0.34)), url('/banner1.jpg')",
  },
]

function AboutMissionValuesPage() {
  return (
    <div className="">
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
        <SliderBanner
          slides={missionValuesBannerSlides}
          className="min-h-[420px] rounded-none border-x-0"
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
            <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
              Our mission
            </div>
            <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              To build clear, useful, and growth-ready digital solutions for modern businesses.
            </h2>
            <div className="mt-5 space-y-5  text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Our mission is to help businesses strengthen their digital presence through websites, applications, and marketing systems that are practical, well-structured, and easier to grow over time.
              </p>
              <p>
                We focus on work that improves communication, supports better user experience, and gives businesses a stronger foundation for visibility, trust, and long-term performance.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#d9e6ff] bg-[linear-gradient(160deg,_#eef5ff,_#ffffff)] p-7 shadow-[0_20px_60px_rgba(37,80,195,0.08)] sm:p-9">
            <div className="inline-flex rounded-full bg-white px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3] shadow-sm">
              Our vision
            </div>
            <h2 className="mt-5  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              To become a trusted digital partner for businesses that want smarter systems and stronger online growth.
            </h2>
            <div className="mt-5 space-y-5  text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Our vision is to build a company known for combining design, development, and digital growth thinking in a way that feels dependable, business-focused, and easy for clients to work with.
              </p>
              <p>
                We want GonardWeb to be recognized for creating digital experiences that not only look modern, but also help businesses operate better, connect with users more clearly, and scale with confidence.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default AboutMissionValuesPage