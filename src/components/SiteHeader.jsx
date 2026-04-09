import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about-us',
    caret: true,
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Company', to: '/about-us/company' },
      { label: 'Mission & Values', to: '/about-us/mission-values' },
      { label: 'Why Choose Us', to: '/about-us/why-choose-us' },
      { label: 'Our Team', to: '/about-us/team' },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    caret: true,
    children: [
      { label: 'Website Design', to: '/solutions/website-design' },
      { label: 'Website Development', to: '/solutions/website-development' },
      { label: 'App Development', to: '/solutions/app-development' },
      { label: 'Digital Marketing', to: '/solutions/digital-marketing' },
    ],
  },
  {
    label: 'Work',
    to: '/work',
    caret: true,
    children: [
      { label: 'Portfolio', to: '/work/portfolio' },
      { label: 'Case Studies', to: '/work/case-studies' },
      { label: 'Client', to: '/work/client' },
      { label: 'Client Testimonials', to: '/work/client-testimonials' },
    ],
  },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Latest News', to: '/latest-news' },
  { label: 'Contact Us', to: '/contact-us' },
]

const navLinkClass = ({ isActive }) =>
  [
    'inline-flex items-center gap-2 py-2 text-[15px] font-semibold text-slate-700 transition-colors',
    isActive ? 'text-slate-950' : 'hover:text-[#2447A8]',
  ].join(' ')

const mobileNavLinkClass = ({ isActive }) =>
  [
    'flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-semibold transition-all',
    isActive
      ? 'border-slate-950 bg-slate-950 text-white'
      : 'border-slate-200 bg-white text-slate-800 hover:border-[#2447A8] hover:text-[#2447A8]',
  ].join(' ')

function BrandMark() {
  return (
    <img
      src="/optimized/gonardwebdark-320.webp"
      alt="Gonard Web"
      className="h-11 w-auto object-contain sm:h-12"
      width="320"
      height="66"
      loading="eager"
    />
  )
}

function CaretIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuToggleIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function DesktopNavItem({ item, currentPath }) {
  if (!item.children) {
    return (
      <NavLink to={item.to} end={item.to === '/'} className={navLinkClass}>
        <span>{item.label}</span>
        {item.caret ? <CaretIcon /> : null}
      </NavLink>
    )
  }

  const isActive =
    currentPath === item.to || item.children.some((child) => currentPath === child.to)

  return (
    <div className="group relative">
      <Link
        to={item.to}
        className={[
          'inline-flex items-center gap-2 py-2 text-[15px] font-semibold transition-colors',
          isActive ? 'text-[#ef4444]' : 'text-slate-700 hover:text-[#2447A8]',
        ].join(' ')}
      >
        <span>{item.label}</span>
        <CaretIcon />
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-[120] pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="w-56 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
          {item.children.map((child) => {
            const childActive = currentPath === child.to

            return (
              <Link
                key={child.to}
                to={child.to}
                className={[
                  'block border-b border-slate-100 px-6 py-4 text-[15px] font-semibold transition-colors last:border-b-0',
                  childActive
                    ? 'bg-slate-50 text-[#ef4444]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#2447A8]',
                ].join(' ')}
              >
                {child.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SiteHeader({
  className = '',
}) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflow
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={[
          'relative z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur py-3',
          className,
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-6 py- xl:px-10">
          <Link to="/" className="shrink-0">
            <BrandMark />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-x-8 gap-y-3  xl:flex">
            {navigationItems.map((item) => (
              <DesktopNavItem key={item.to} item={item} currentPath={location.pathname} />
            ))}
          </nav>

          <div className="hidden shrink-0 text-right  xl:block">
            <p className="text-sm text-slate-600">Have Any Questions?</p>
            <a
              href="tel:+917827284932"
              className="text-lg font-bold text-[#2447A8] transition-colors hover:text-[#19337A]"
            >
              (+91) 7827284932
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:border-[#2447A8] hover:text-[#2447A8] xl:hidden"
          >
            <MenuToggleIcon open={isMenuOpen} />
          </button>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm transition-opacity duration-300 xl:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={[
          'fixed right-0 top-0 z-50 flex h-screen w-[min(86vw,380px)] flex-col overflow-y-auto bg-[linear-gradient(180deg,_#ffffff_0%,_#f6f9ff_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.22)] transition-transform duration-300 ease-out xl:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={!isMenuOpen}
      >
        <div className="border-b border-slate-200 px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="shrink-0" onClick={() => setIsMenuOpen(false)}>
              <BrandMark />
            </Link>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:border-[#2447A8] hover:text-[#2447A8]"
            >
              <MenuToggleIcon open />
            </button>
          </div>
          <div className="mt-5 rounded-[1.75rem] bg-slate-950 px-5 py-4 text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)]">
            <p className=" text-xs uppercase tracking-[0.3em] text-slate-300">
              Quick contact
            </p>
            <a
              href="tel:+917827284932"
              className="mt-3 block  text-2xl font-bold text-white"
            >
              (+91) 7827284932
            </a>
            <p className="mt-2  text-sm leading-6 text-slate-300">
              Open the drawer, jump to any page, and reach out without losing the current context.
            </p>
          </div>
        </div>

        <div className="flex-1 px-5 py-6">
          <p className=" text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Navigation
          </p>
          <nav className="mt-4 flex flex-col gap-3 ">
            {navigationItems.map((item, index) => (
              item.children ? (
                <div
                  key={item.to}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  style={{ transitionDelay: isMenuOpen ? `${index * 45}ms` : '0ms' }}
                >
                  <div className="flex items-center gap-2 p-2">
                    <Link
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex-1 rounded-xl px-3 py-3 text-base font-semibold text-slate-800 transition-colors hover:text-[#2447A8]"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={openMobileSubmenu === item.to}
                      onClick={() =>
                        setOpenMobileSubmenu((open) => (open === item.to ? null : item.to))
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-[#2447A8] hover:text-[#2447A8]"
                    >
                      <span
                        className={[
                          'transition-transform duration-200',
                          openMobileSubmenu === item.to ? 'rotate-180' : 'rotate-0',
                        ].join(' ')}
                      >
                        <CaretIcon />
                      </span>
                    </button>
                  </div>
                  <div
                    className={[
                      'grid transition-[grid-template-rows] duration-300 ease-out',
                      openMobileSubmenu === item.to ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    ].join(' ')}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-200 px-2 pb-2 pt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => {
                              setOpenMobileSubmenu(null)
                              setIsMenuOpen(false)
                            }}
                            className={[
                              'block rounded-xl px-3 py-3 text-sm font-semibold transition-colors',
                              location.pathname === child.to
                                ? 'bg-slate-950 text-white'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-[#2447A8]',
                            ].join(' ')}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={mobileNavLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: isMenuOpen ? `${index * 45}ms` : '0ms' }}
                >
                  <span className="inline-flex items-center gap-2">
                    {item.label}
                    {item.caret ? <CaretIcon /> : null}
                  </span>
                  <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M7 4.5 12.5 10 7 15.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavLink>
              )
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 px-5 py-5">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4  text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Contact Us</p>
            <a
              href="mailto:info@gonardweb.com"
              className="mt-2 block transition-colors hover:text-[#2447A8]"
            >
              info@gonardweb.com
            </a>
            <p className="mt-2 leading-6">
              Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh - 201005 India
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SiteHeader