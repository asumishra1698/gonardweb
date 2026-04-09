import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Useful Links',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Terms of Service', to: '/terms-and-conditions' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
    ],
  },
  {
    title: 'Careers',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Press', to: '/press' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Support', to: '/support' },
      { label: 'Help Center', to: '/help-center' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Website Design', to: '/solutions/website-design' },
      { label: 'Website Development', to: '/solutions/website-development' },
      { label: 'App Development', to: '/solutions/app-development' },
      { label: 'Digital Marketing', to: '/solutions/digital-marketing' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/gonardweb/',
    icon: (
      <path d="M12.75 21v-7.35h2.47l.37-2.86h-2.84V8.96c0-.83.23-1.39 1.42-1.39H15.8V5.01c-.28-.04-1.21-.12-2.3-.12-2.27 0-3.82 1.39-3.82 3.94v1.96H7.1v2.86h2.58V21h3.07Z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <path d="M18.9 6h-2.53l-3.64 4.15L9.63 6H4.5l5.65 7.5L4.8 20h2.54l4-4.56L14.77 20h5.13l-5.86-7.78L18.9 6Zm-3.24 12h-1.4L8.62 7.9h1.4L15.66 18Z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gonardweb-technologies/',
    icon: (
      <path d="M6.77 8.9H3.94V18h2.83V8.9ZM5.35 7.67a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28ZM20 18v-5.01c0-2.69-1.44-3.95-3.36-3.95-1.55 0-2.24.85-2.63 1.45V8.9h-2.83c.04 1.05 0 9.1 0 9.1h2.83v-5.08c0-.27.02-.54.1-.73.21-.54.68-1.09 1.47-1.09 1.03 0 1.44.82 1.44 2.01V18H20Z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gonardweb/',
    icon: (
      <path d="M12 7.06A4.94 4.94 0 1 0 12 17a4.94 4.94 0 0 0 0-9.88Zm0 8.15A3.22 3.22 0 1 1 12 8.8a3.22 3.22 0 0 1 0 6.44Zm6.3-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Zm3.27 1.17c-.07-1.45-.4-2.74-1.46-3.8-1.05-1.05-2.34-1.38-3.8-1.46C14.84 2.7 9.16 2.7 7.69 2.77c-1.45.08-2.74.4-3.8 1.46-1.05 1.06-1.38 2.35-1.45 3.8-.08 1.47-.08 7.15 0 8.62.07 1.45.4 2.74 1.45 3.8 1.06 1.05 2.35 1.38 3.8 1.45 1.47.08 7.15.08 8.62 0 1.46-.07 2.75-.4 3.8-1.45 1.06-1.06 1.39-2.35 1.46-3.8.08-1.47.08-7.15 0-8.62Zm-2.05 10.46c-.31.77-.9 1.36-1.67 1.67-1.15.46-3.88.35-5.85.35-1.96 0-4.7.11-5.84-.35a2.8 2.8 0 0 1-1.68-1.67c-.45-1.15-.35-3.88-.35-5.84 0-1.97-.1-4.7.35-5.85.32-.77.91-1.36 1.68-1.67 1.14-.46 3.88-.35 5.84-.35 1.97 0 4.7-.11 5.85.35.77.31 1.36.9 1.67 1.67.46 1.15.35 3.88.35 5.85 0 1.96.11 4.7-.35 5.84Z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC2yWAGJPHOHyNCsI7Tbd0mw',
    icon: (
      <path d="M21.44 7.15a2.92 2.92 0 0 0-2.05-2.07C17.58 4.6 12 4.6 12 4.6s-5.58 0-7.4.48a2.92 2.92 0 0 0-2.05 2.07A30.5 30.5 0 0 0 2.08 12a30.5 30.5 0 0 0 .47 4.85 2.92 2.92 0 0 0 2.05 2.07c1.82.48 7.4.48 7.4.48s5.58 0 7.4-.48a2.92 2.92 0 0 0 2.05-2.07 30.5 30.5 0 0 0 .47-4.85 30.5 30.5 0 0 0-.47-4.85ZM10.17 15.01V8.99L15.5 12l-5.33 3.01Z" />
    ),
  },
]

function SiteFooter({ brand = 'GonardWeb', className = '' }) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false)

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      const backToTopThreshold = window.innerHeight * 0.1
      const whatsappThreshold = window.innerHeight * 0.1

      setShowBackToTop(window.scrollY > backToTopThreshold)
      setShowWhatsAppButton(window.scrollY > whatsappThreshold)
    }

    updateBackToTopVisibility()
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })
    window.addEventListener('resize', updateBackToTopVisibility)

    return () => {
      window.removeEventListener('scroll', updateBackToTopVisibility)
      window.removeEventListener('resize', updateBackToTopVisibility)
    }
  }, [])

  return (
    <footer
      className={[
        'relative border-t border-slate-200 bg-[#eef4fb] text-slate-700',
        className,
      ].join(' ')}
    >
      <div className="mx-auto max-w-[1800px] px-6 py-14 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h2 className=" text-[1.05rem] font-semibold text-slate-900">
                {group.title}
              </h2>
              <ul className="mt-6 space-y-2  text-[1.05rem]  text-slate-600">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link className="transition-colors hover:text-[#2447A8]" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className=" text-[1.05rem] font-semibold text-slate-900">
              Contact Us
            </h2>
            <div className="mt-6 space-y-4  text-[1.05rem]  text-slate-600">
              <p>
                <a className="transition-colors hover:text-[#2447A8]" href="tel:+917827284932">
                  7827284932
                </a>
              </p>
              <p>
                <a
                  className="transition-colors hover:text-[#2447A8]"
                  href="mailto:info@gonardweb.com"
                >
                  info@gonardweb.com
                </a>
              </p>
              <p className="max-w-xs">
                Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005 India
              </p>
            </div>
          </section>
        </div>

        <div className="mt-5 border-slate-200 pt-5">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h2 className=" text-2xl font-black tracking-tight text-slate-950">
                {brand}
              </h2>
              <p className="mt-3  text-[1.05rem] text-slate-600">
                © {new Date().getFullYear()} {brand}. All rights reserved.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3  text-[1.05rem] text-slate-600">
                <Link className="transition-colors hover:text-[#2447A8]" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="transition-colors hover:text-[#2447A8]" to="/terms-and-conditions">
                  Terms of Service
                </Link>
                <Link className="transition-colors hover:text-[#2447A8]" to="/privacy-policy">
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-start gap-5 xl:justify-end mr-10">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="text-slate-900 transition-colors hover:text-[#2447A8]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#top"
        aria-label="Back to top"
        className={[
          'fixed bottom-2 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#2b56d9] shadow-[0_14px_40px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1',
          showBackToTop ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        ].join(' ')}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
          <path
            d="M12 18V6m0 0-5 5m5-5 5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href="https://wa.me/917827284932"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={[
          'fixed bottom-2 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1',
          showWhatsAppButton ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        ].join(' ')}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.56 0 .25 5.3.25 11.82c0 2.08.54 4.1 1.58 5.88L0 24l6.47-1.7a11.76 11.76 0 0 0 5.59 1.43h.01c6.5 0 11.81-5.3 11.81-11.82 0-3.15-1.22-6.1-3.36-8.43ZM12.07 21.7h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.84 1.01 1.03-3.74-.24-.39a9.8 9.8 0 0 1-1.51-5.18c0-5.42 4.42-9.83 9.86-9.83 2.62 0 5.08 1.01 6.93 2.86a9.73 9.73 0 0 1 2.88 6.97c0 5.42-4.43 9.84-9.85 9.84Zm5.4-7.37c-.3-.15-1.77-.87-2.04-.96-.27-.1-.46-.15-.66.15-.19.3-.75.96-.92 1.16-.17.2-.34.22-.64.08-.3-.15-1.25-.46-2.39-1.46a8.96 8.96 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.06 2.88 1.2 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.71.62.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.19-.58-.34Z" />
        </svg>
      </a>
    </footer>
  )
}

export default SiteFooter