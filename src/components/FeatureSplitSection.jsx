function FeatureSplitSection({
  badge,
  title,
  points,
  imageSrc,
  imageAlt,
  className = '',
}) {
  return (
    <section
      className={[
        'w-full bg-[#2746b2] px-6 py-14 text-white sm:px-8 lg:px-12 xl:px-16',
        className,
      ].join(' ')}
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-auto w-full max-w-2xl object-contain"
          />
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-white/90 px-6 py-2  text-xs font-extrabold uppercase tracking-[0.2em] text-[#e61f5d]">
            {badge}
          </div>

          <h2 className="mt-7  text-2xl font-black sm:text-2xl xl:text-3xl">
            {title}
          </h2>

          <div className="mt-10 space-y-8">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-5">
                <div className="mt-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff5b52] text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M6.5 12.5 10 16l7.5-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className=" text-lg leading-9 text-white/95 sm:text-[1.15rem]">
                  <span className="font-black text-white">{point.title}</span>
                  <span>{point.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSplitSection