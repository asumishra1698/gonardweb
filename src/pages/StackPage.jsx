import PageBannerLayout from '../components/PageBannerLayout.jsx'

const stackItems = [
  {
    name: 'Vite',
    description: 'Fast local dev server and optimized production bundling.',
  },
  {
    name: 'React 19',
    description: 'Component model for UI composition and client rendering.',
  },
  {
    name: 'React Router',
    description: 'Declarative route handling for multiple frontend screens.',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first styling with the Vite plugin enabled.',
  },
]

function StackPage() {
  return (
    <PageBannerLayout
      eyebrow="Project stack"
      title="What is wired into this starter"
      description="Review the tools and foundations already set up in the project."
      bannerTitle="See the frontend stack behind this GonardWeb build."
      bannerDescription="Use the banner to frame the technologies, tooling choices, and delivery foundation that power the current site."
      focusTitle="The stack page should set expectations before the details."
      focusDescription="Lead with the systems in place, then move into the tools and libraries that shape delivery speed and maintainability."
    >
      <section className="rounded-[2.5rem] border border-stone-900/10 bg-white/80 p-8 shadow-[0_20px_70px_rgba(28,25,23,0.08)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-700">
          Project stack
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950">
          What is wired into this starter
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {stackItems.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5"
            >
              <h3 className=" text-lg font-semibold text-stone-950">
                {item.name}
              </h3>
              <p className="mt-2  text-sm  text-stone-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageBannerLayout>
  )
}

export default StackPage