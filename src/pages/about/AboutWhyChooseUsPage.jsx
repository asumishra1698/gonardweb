import PageBannerLayout from '../../components/PageBannerLayout.jsx'

const differentiators = [
  {
    title: 'Clear business-first thinking',
    description:
      'We shape websites, apps, and marketing systems around business goals, user needs, and practical execution instead of building disconnected outputs.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 3 4 7v5c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V7l-8-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 12 1.7 1.7L15 9.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Design and development together',
    description:
      'Our process connects visual thinking, user experience, content structure, and technical delivery so projects feel more consistent and easier to grow.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 9h8M8 13h8M8 17h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Growth-focused execution',
    description:
      'We build with long-term use in mind so your digital presence supports trust, performance, lead generation, and smoother business operations.',
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
  },
  {
    title: 'Reliable communication',
    description:
      'We keep project direction, priorities, and next steps clear so clients understand what is happening and what decisions matter most.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H10l-4 4v-4H7.5A2.5 2.5 0 0 1 5 12.5v-6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9.5h7M8.5 12h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const supportingPoints = [
  'We align strategy, design, development, and marketing support under one practical delivery approach.',
  'We focus on structure and usability so the final result is easier for both businesses and users.',
  'We work with growth in mind, not just launch-day presentation.',
  'We keep delivery grounded in clarity, realistic scope, and business-fit decisions.',
]

function AboutWhyChooseUsPage() {
  return (
    <PageBannerLayout
      eyebrow="Why choose us"
      title="Practical reasons businesses choose GonardWeb for digital work that needs to perform well in the real world."
      description="We combine clear thinking, strong execution, and growth-focused delivery so businesses get digital systems that are easier to use, manage, and improve over time."
      bannerTitle="Show the operational advantages of choosing GonardWeb."
      bannerDescription="Explain how your delivery standards, technical judgment, and business focus create better outcomes for clients."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-6xl">
          <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
            Why businesses work with us
          </div>
          <h2 className="mt-5  text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            We do not just build digital assets. We help businesses make better digital decisions and turn them into dependable execution.
          </h2>
          <p className="mt-5  text-base leading-8 text-slate-600 sm:text-lg">
            Clients choose GonardWeb when they need stronger structure, clearer communication, and delivery that balances design quality, technical judgment, and growth intent. Our work is built to support outcomes, not just appearances.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_#123a91,_#2563eb)] text-white shadow-[0_18px_40px_rgba(37,80,195,0.2)]">
                {item.icon}
              </div>
              <h3 className="mt-5  text-xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3  text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-8">
          <article className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),linear-gradient(135deg,_#081a44_0%,_#123a91_45%,_#2563eb_100%)] p-7 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:p-9">
            <div className="inline-flex rounded-full bg-white/12 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-white/80">
              Our advantage
            </div>
            <h2 className="mt-5  text-3xl font-black tracking-tight sm:text-4xl">
              We aim to make digital work clearer, stronger, and more useful for the business behind it.
            </h2>
            <p className="mt-5  text-base leading-8 text-white/85 sm:text-lg">
              That means focusing on the right structure, choosing the right delivery priorities, and making sure the output supports trust, usability, and business growth rather than adding noise or complexity.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
            <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
              Key points
            </div>
            <div className="mt-6 grid gap-4">
              {supportingPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2550c3] text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="m6 12 4 4 8-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className=" text-sm leading-7 text-slate-700 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </PageBannerLayout>
  )
}

export default AboutWhyChooseUsPage