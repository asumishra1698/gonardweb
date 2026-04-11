import { useEffect, useRef } from 'react'

const defaultTestimonials = [
    {
        companyName: 'Ashico',
        clientName: 'Ashi Goel',
        rating: 5,
        message:
            'GonardWeb redesigned our clothing website with a cleaner premium look, smoother collection flow, and stronger mobile shopping experience. Their Meta performance marketing also improved qualified sales.',
    },
    {
        companyName: 'Loudelss',
        clientName: 'Shivam Gupta',
        rating: 5,
        message:
            'For our fashion brand, the team delivered a modern website design that feels fast and easier to shop. Their Meta performance marketing improved campaign quality, customer reach, retargeting, and overall conversion consistency across our seasonal promotions.',
    },
    {
        companyName: 'Mayrake',
        clientName: 'Priyanka P',
        rating: 5,
        message:
            'GonardWeb built a fashion website that presents our products better and supports stronger Meta performance marketing for traffic, remarketing, and conversions.',
    },
    {
        companyName: 'Selfmade',
        clientName: 'Sachit Jain',
        rating: 4,
        message:
            'We wanted our clothing label to feel more premium online, and GonardWeb handled that through stronger website design, cleaner product storytelling, better landing page structure, and Meta campaign work that lifted our brand visibility and shopping intent.',
    },
    {
        companyName: 'Aashtha Kaushik',
        clientName: 'Aashtha Kaushik',
        rating: 5,
        message:
            'Our fashion website now feels more polished, brand-led, and easier to browse. GonardWeb combined website design with Meta performance marketing to support branding and sales growth.',
    },
    {
        companyName: 'Label Mae',
        clientName: 'Sachin Arora',
        rating: 4,
        message:
            'GonardWeb improved our clothing brand presence with a more conversion-focused website design, better category presentation, and Meta performance marketing that helped us get stronger value from paid traffic and repeat audience targeting.',
    },
    {
        companyName: 'Shop Tango',
        clientName: 'Tanya Goel',
        rating: 5,
        message:
            'They gave our online fashion store a cleaner website design, stronger product-page flow, and better shopping experience. Meta performance marketing stayed focused on return.',
    },
    {
        companyName: 'Unimate India',
        clientName: 'Shubham Kumar',
        rating: 5,
        message:
            'Our apparel brand needed a website that looked current and sold with more confidence. GonardWeb delivered website design improvements and Meta performance marketing support that strengthened our digital growth strategy across launches, promotions, and repeat customer acquisition.',
    },
    {
        companyName: 'Unimate India',
        clientName: 'Shubham Kumar',
        rating: 5,
        message:
            'The team understood what a clothing brand needs online: strong visuals, clear product journeys, and effective paid promotion through website design and Meta performance marketing.',
    },

]

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-1 text-amber-500" aria-label={`${rating} star rating`}>
            {Array.from({ length: rating }).map((_, index) => (
                <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M10 1.5 12.6 6.78l5.83.85-4.22 4.11 1 5.8L10 14.8 4.79 17.54l1-5.8L1.57 7.63l5.83-.85L10 1.5Z" />
                </svg>
            ))}
        </div>
    )
}

function GoogleIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
                d="M21.81 12.23c0-.72-.06-1.25-.19-1.8H12.2v3.56h5.53c-.11.88-.72 2.21-2.07 3.1l-.02.12 3.02 2.29.21.02c1.92-1.74 3.02-4.31 3.02-7.29Z"
                fill="#4285F4"
            />
            <path
                d="M12.2 21.9c2.71 0 4.98-.87 6.64-2.38l-3.21-2.43c-.86.59-2.01 1.01-3.43 1.01-2.65 0-4.9-1.74-5.7-4.15l-.12.01-3.14 2.38-.04.11c1.66 3.23 5.05 5.45 9 5.45Z"
                fill="#34A853"
            />
            <path
                d="M6.5 13.95a5.93 5.93 0 0 1-.34-1.95c0-.68.13-1.33.33-1.95l-.01-.13-3.18-2.41-.1.04A9.74 9.74 0 0 0 2.17 12c0 1.56.38 3.04 1.04 4.45l3.29-2.5Z"
                fill="#FBBC05"
            />
            <path
                d="M12.2 5.9c1.79 0 3 .76 3.69 1.39l2.69-2.57C17.17 3.43 14.91 2.1 12.2 2.1c-3.95 0-7.34 2.22-9 5.45l3.29 2.5c.81-2.41 3.05-4.15 5.7-4.15Z"
                fill="#EA4335"
            />
        </svg>
    )
}


function ClientTestimonialsSection({
    badge = 'Client Testimonials',
    title = 'What clients say after launching with GonardWeb.',
    description = 'A reusable testimonial section built for service pages, home pages, and credibility blocks where trust needs to be visible quickly.',
    testimonials = defaultTestimonials,
    className = '',
}) {
    const sliderRef = useRef(null)

    function scrollSlider(direction) {
        if (!sliderRef.current) {
            return
        }

        const firstCard = sliderRef.current.querySelector('article')
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : sliderRef.current.clientWidth * 0.88
        const sliderStyles = window.getComputedStyle(sliderRef.current)
        const gap = Number.parseFloat(sliderStyles.columnGap || sliderStyles.gap || '0')
        const scrollAmount = cardWidth + gap
        const nextLeft = direction === 'next'
            ? sliderRef.current.scrollLeft + scrollAmount
            : sliderRef.current.scrollLeft - scrollAmount

        if (direction === 'next' && nextLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 24) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            return
        }

        if (direction === 'prev' && sliderRef.current.scrollLeft <= 24) {
            sliderRef.current.scrollTo({
                left: sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
                behavior: 'smooth',
            })
            return
        }

        sliderRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        if (!sliderRef.current || testimonials.length < 2) {
            return undefined
        }

        const intervalId = window.setInterval(() => {
            scrollSlider('next')
        }, 3500)

        return () => window.clearInterval(intervalId)
    }, [testimonials.length])

    return (
        <section className={[
            'relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-[#edf5ff] py-10 sm:py-14',
            className,
        ].join(' ')}>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#2447A8] shadow-[0_10px_30px_rgba(36,71,168,0.08)]">
                        {badge}
                    </div>

                    <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                        {description}
                    </p>
                </div>

                <div className="mt-0 flex items-center justify-end gap-3 sm:mt-2">
                    <button
                        type="button"
                        onClick={() => scrollSlider('prev')}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_10px_30px_rgba(36,71,168,0.08)] transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                        aria-label="Show previous testimonials"
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
                        onClick={() => scrollSlider('next')}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_10px_30px_rgba(36,71,168,0.08)] transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                        aria-label="Show next testimonials"
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

                <div
                    ref={sliderRef}
                    className="testimonials-slider mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 scroll-smooth sm:gap-5"
                >
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={`${testimonial.companyName}-${testimonial.clientName}-${index}`}
                            className="flex min-w-[85%] snap-start flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,41,59,0.92),rgba(15,23,42,0.96))] p-6  sm:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)]"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className=" text-xs font-extrabold uppercase tracking-[0.22em] text-[#8fb0ff]">
                                        {testimonial.companyName}
                                    </p>
                                    <p className="mt-2  text-sm font-semibold text-slate-400">
                                        {testimonial.clientName}
                                    </p>
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
                                        <GoogleIcon />
                                        <span>Google</span>
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                </div>
                            </div>

                            <p className="mt-6 flex-1  text-base leading-8 text-slate-200">
                                "{testimonial.message}"
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientTestimonialsSection