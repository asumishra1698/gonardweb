function ClientRow({ items, reverse = false, durationClass }) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className="client-marquee-fade overflow-hidden">
      <div
        className={[
          'client-marquee-track flex w-max items-center gap-5 sm:gap-6',
          reverse ? 'client-marquee-track-reverse' : 'client-marquee-track-forward',
          durationClass,
        ].join(' ')}
      >
        {duplicatedItems.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="flex h-24 w-[180px] shrink-0 items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white px-6 sm:h-28 sm:w-[220px]"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-12 w-auto max-w-full object-contain opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-14"
            />
          </article>
        ))}
      </div>
    </div>
  )
}

const clientLogos = [
  { name: 'Aatam Vigyan Foundation', logo: '/clients/aatam-vigyan-foundation-768x224.png' },
  { name: 'Logo Ashtha', logo: '/clients/logoashtha-768x75.png' },
  { name: 'Ashico', logo: '/clients/ashico.png' },
  { name: 'Bohe', logo: '/clients/bohe.png' },
  { name: 'Carlton', logo: '/clients/carlton.png' },
  { name: 'Classic', logo: '/clients/classic.jpg' },
  { name: 'Color N Creation', logo: '/clients/nlogo.png' },
  { name: 'Fabiano', logo: '/clients/fabiano.png' },
  { name: 'Faravaree', logo: '/clients/faravaree_Logo_Final.png' },
  { name: 'K Logo', logo: '/clients/klogo.webp' },
  { name: 'Label Logo', logo: '/clients/labellogo.png' },
  { name: 'Loudless', logo: '/clients/loudless.png' },
  { name: 'Loans Need', logo: '/clients/LOANS-NEED-1-png-768x432.png' },
  { name: 'MSKP', logo: '/clients/mskp.png' },
  { name: 'micron', logo: '/clients/micron.png' },
  { name: 'Mederma', logo: '/clients/mederm-logo-768x206.png' },
  { name: 'Nitya', logo: '/clients/nitya.png' },
  { name: 'Sand and Lake', logo: '/clients/sandand.png' },
  { name: 'Selfmade', logo: '/clients/self-made-logo-1.png' },
  { name: 'Shop Tango', logo: '/clients/shoptango.png' },
  { name: 'Shipra karnani', logo: '/clients/shiprakarnani.png' },
  { name: 'UNIMATE', logo: '/clients/UNIMATEFINALLOGO.png' },
  { name: 'Villa Furniture', logo: '/clients/villa.png' },
  { name: 'Wincredits', logo: '/clients/wincredit-768x210.png' },
]

const defaultFirstRow = clientLogos.slice(0, 15)
const defaultSecondRow = clientLogos.slice(15, 30)

function OurClientsSection({
  badge = 'Our Clients',
  title = 'Brands that trust GonardWeb to build, improve, and scale digital experiences.',
  description = 'A moving wall of client logos that keeps the section active without feeling abrupt. The two rows scroll in opposite directions for a smoother, more premium presentation.',
  firstRow = defaultFirstRow,
  secondRow = defaultSecondRow,
  className = '',
}) {
  return (
    <section className={['w-full bg-white py-10 sm:py-10', className].join(' ')}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl px-2 text-center">
          <div className="inline-flex rounded-full bg-[#e9f0ff] px-5 py-2  text-xs font-extrabold uppercase tracking-[0.22em] text-[#2447A8]">
            {badge}
          </div>

          <h2 className="mt-6  text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-6  text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12 space-y-5 sm:mt-14 sm:space-y-6">
          <ClientRow items={firstRow} durationClass="client-marquee-duration-slow" />
          <ClientRow items={secondRow} reverse durationClass="client-marquee-duration-medium" />
        </div>
      </div>
    </section>
  )
}

export default OurClientsSection