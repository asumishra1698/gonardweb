import { useState } from 'react'

function FeatureCard({ item }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="flex h-12 w-12 items-center justify-center">
        <img src={item.icon} alt={item.iconAlt} className="h-10 w-10 object-contain" />
      </div>

      <h3 className="mt-8  text-[1.5rem] font-black leading-tight text-slate-950">
        {item.title}
      </h3>

      <p className="mt-4  text-[1.05rem] leading-8 text-slate-600">
        {item.description}
      </p>
    </article>
  )
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden border-b border-slate-200 bg-white first:rounded-t-[1.5rem] last:rounded-b-[1.5rem] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left  text-[1.15rem] font-semibold text-slate-950 transition hover:bg-slate-50 sm:px-6"
      >
        <span>{item.title}</span>
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
            <p className=" text-base leading-8 text-slate-600">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompanyOverviewSection({
  badge,
  titleBefore,
  highlightedText,
  titleAfter,
  description,
  accordionItems,
  featureCards,
  className = '',
}) {
  const [openItem, setOpenItem] = useState(0)

  return (
    <section
      className={[
        'w-full bg-[#edf5ff] px-6 py-14 sm:px-8 lg:px-12 xl:px-16',
        className,
      ].join(' ')}
    >
      <div className="grid gap-12 xl:grid-cols-[1.05fr_1fr] xl:gap-14">
        <div>
          <div className="inline-flex rounded-full bg-[#ffdff0] px-5 py-2  text-xs font-extrabold uppercase tracking-[0.22em] text-[#dd286d]">
            {badge}
          </div>

          <h2 className="mt-6 max-w-4xl  text-[2.6rem] font-black leading-[1.02] tracking-tight text-slate-950 sm:text-2xl xl:text-[2.5rem]">
            {titleBefore}{' '}
            <span className="text-[#2f59df]">{highlightedText}</span>{' '}
            {titleAfter}
          </h2>

          <p className="mt-8 max-w-4xl  text-[1.1rem] leading-9 text-slate-700">
            {description}
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.title}
                item={item}
                isOpen={openItem === index}
                onToggle={() => setOpenItem((current) => (current === index ? -1 : index))}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featureCards.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyOverviewSection