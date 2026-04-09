import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useConsultationPopup } from './ConsultationPopupProvider.jsx'

function SliderBanner({
  slides,
  autoPlayInterval = 5000,
  className = '',
  fullScreen = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { openConsultationPopup } = useConsultationPopup()
  const hasMultipleSlides = Boolean(slides && slides.length > 1)

  useEffect(() => {
    if (!hasMultipleSlides) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, autoPlayInterval)

    return () => {
      window.clearInterval(timerId)
    }
  }, [autoPlayInterval, hasMultipleSlides, slides])

  if (!slides || slides.length === 0) {
    return null
  }

  const activeSlide = slides[activeIndex]
  const shouldOpenConsultationPopup =
    activeSlide.primaryAction?.label === 'Book A Free Consultation'

  return (
    <section
      className={[
        'relative overflow-hidden rounded-[2rem] border border-white/10 text-white',
        fullScreen ? 'min-h-[100svh]' : '',
        className,
      ].join(' ')}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: activeSlide.backgroundImage }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slate-950/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(15,23,42,0.78)_0%,_rgba(15,23,42,0.58)_40%,_rgba(15,23,42,0.18)_100%)]" aria-hidden="true" />

      <div
        className={[
          'relative flex flex-col px-7 py-10 sm:px-10 lg:px-16 lg:py-16',
          fullScreen ? 'min-h-[100svh]' : 'min-h-[430px] lg:min-h-[560px]',
        ].join(' ')}
      >
        <div className="flex flex-1 items-center">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/70">
              {activeSlide.eyebrow}
            </p>
            <h2 className="mt-5  text-4xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {activeSlide.title}
            </h2>
            <p className="mx-auto mt-6  text-lg text-white/90 lg:mx-0 lg:text-[1.5rem]">
              {activeSlide.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              {shouldOpenConsultationPopup ? (
                <button
                  type="button"
                  onClick={openConsultationPopup}
                  className="rounded-xl bg-[#ef2f2c] px-7 py-4  text-lg font-bold text-white transition hover:bg-[#d82724]"
                >
                  {activeSlide.primaryAction.label}
                </button>
              ) : (
                <Link
                  to={activeSlide.primaryAction.to}
                  className="rounded-xl bg-[#ef2f2c] px-7 py-4  text-lg font-bold text-white transition hover:bg-[#d82724]"
                >
                  {activeSlide.primaryAction.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {hasMultipleSlides ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-10 lg:justify-between">
            <div className="flex gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    'h-3 rounded-full transition-all duration-300',
                    index === activeIndex ? 'w-12 bg-white' : 'w-3 bg-white/45 hover:bg-white/75',
                  ].join(' ')}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M14.5 6.5 9 12l5.5 5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M9.5 6.5 15 12l-5.5 5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default SliderBanner