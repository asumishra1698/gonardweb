import PageBannerLayout from '../components/PageBannerLayout.jsx'
import ReusableContactForm from '../components/ReusableContactForm.jsx'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/gonardweb/',
    iconPath: '/technology/facebook.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gonardweb/',
    iconPath: '/technology/instagram.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gonardweb-technologies/',
    iconPath: '/technology/linkedin.svg',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC2yWAGJPHOHyNCsI7Tbd0mw',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M21.44 7.15a2.92 2.92 0 0 0-2.05-2.07C17.58 4.6 12 4.6 12 4.6s-5.58 0-7.4.48a2.92 2.92 0 0 0-2.05 2.07A30.5 30.5 0 0 0 2.08 12a30.5 30.5 0 0 0 .47 4.85 2.92 2.92 0 0 0 2.05 2.07c1.82.48 7.4.48 7.4.48s5.58 0 7.4-.48a2.92 2.92 0 0 0 2.05-2.07 30.5 30.5 0 0 0 .47-4.85 30.5 30.5 0 0 0-.47-4.85ZM10.17 15.01V8.99L15.5 12l-5.33 3.01Z" />
      </svg>
    ),
  },
]

function ContactPage() {
  return (
    <PageBannerLayout
      eyebrow="Contact"
      title="Start the conversation around your next digital project."
      description="Use this page for a real contact flow, discovery form, business inquiry path, or onboarding step."
      bannerTitle="Create a clearer contact path for new business, support, and project inquiries."
      bannerDescription="Use the banner to make your contact page feel intentional before visitors move into forms, team details, or next steps."
      focusTitle="A contact page should feel like a next step, not a dead end."
      focusDescription="Lead with clarity on why to reach out, then support that action with form, response, and context blocks below."
    >
      <section className="grid gap-6 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="grid gap-5">
          <article className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),linear-gradient(135deg,_#081a44_0%,_#123a91_45%,_#2563eb_100%)] p-6 text-white sm:p-8 lg:p-10">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
              Direct contact
            </div>

            <h2 className="mt-5 max-w-xl  text-3xl font-black tracking-tight sm:text-4xl">
              Reach us by email, phone, or social platforms.
            </h2>

            <p className="mt-4 max-w-2xl  text-base leading-8 text-white/78 sm:text-lg">
              Start with the channel that feels easiest. We keep the first conversation simple, clear, and directly connected to your project goals.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@gonardweb.com"
                className="group rounded-[1.6rem] border border-white/15 bg-white/10 px-5 py-5 text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/14"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/16 bg-white/12 text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      <path
                        d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="m5 8 7 5 7-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-white/55 transition group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true">
                    <path
                      d="M8 5.5 15 12l-7 6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="mt-5 min-w-0">
                  <div className=" text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/62">
                    Email ID
                  </div>
                  <div className="mt-2 break-all  text-lg font-black text-white sm:text-[1.3rem]">
                    info@gonardweb.com
                  </div>
                  <div className="mt-2  text-sm leading-6 text-white/66">
                    Best for detailed briefs and service discussions.
                  </div>
                </div>
              </a>

              <a
                href="tel:+917827284932"
                className="group rounded-[1.6rem] border border-white/15 bg-white/10 px-5 py-5 text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/14"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/16 bg-white/12 text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      <path
                        d="M6.6 10.8a15.12 15.12 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.3.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.38.56 3.5a1 1 0 0 1-.24 1.03l-2.22 2.77Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0 text-white/55 transition group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true">
                    <path
                      d="M8 5.5 15 12l-7 6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="mt-5 min-w-0">
                  <div className=" text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/62">
                    Contact Number
                  </div>
                  <div className="mt-2  text-lg font-black text-white sm:text-[1.3rem]">
                    +91 7827284932
                  </div>
                  <div className="mt-2  text-sm leading-6 text-white/66">
                    Best for quick conversations and immediate planning.
                  </div>
                </div>
              </a>
            </div>
          </article>
        </div>

        <div className="grid gap-5">
          <ReusableContactForm
            title="Book a free consultation"
            description="Tell us who you are and where you are based. We will use these details to route your inquiry faster and respond with the right next step."
            triggerLabel="Book A Free Consultation"
            triggerTitle="Web Designing and Performance Marketing"
            triggerDescription="Open this popup to discuss web designing and performance marketing requirements with a faster, more focused inquiry flow."
            submitLabel="Send Consultation Request"
          />
          <div className="mt-6">
            <div className=" text-[0.68rem] font-bold uppercase tracking-[0.22em] text-black/58">
              Follow GonardWeb
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/14 bg-blue-800 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/28 hover:bg-blue-500"
                >
                  {item.iconPath ? (
                    <img src={item.iconPath} alt={item.label} className="h-6 w-6 object-contain" />
                  ) : (
                    <span className="text-white">{item.icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageBannerLayout>
  )
}

export default ContactPage