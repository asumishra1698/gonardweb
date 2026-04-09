import { Link } from 'react-router-dom'
import PageBannerLayout from '../components/PageBannerLayout.jsx'

function NotFoundPage() {
  return (
    <PageBannerLayout
      eyebrow="404"
      title="That route does not exist."
      description="Return to the homepage and continue from a valid route."
      bannerTitle="This page could not be found, but the path forward is clear."
      bannerDescription="Use the not-found page banner to keep the experience intentional even when a visitor lands on an invalid route."
      primaryAction={{ label: 'Go Home', to: '/' }}
      focusTitle="A 404 page should redirect attention, not create friction."
      focusDescription="Lead with orientation and a clear next action so the visitor can recover from the broken route quickly."
    >
      <section className="rounded-[2.5rem] border border-stone-900/10 bg-white/80 p-10 text-center backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-700">
          404
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950">
          That route does not exist.
        </h2>
        <p className="mt-4  text-base text-stone-600">
          Return to the homepage and continue from a valid route.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
        >
          Go home
        </Link>
      </section>
    </PageBannerLayout>
  )
}

export default NotFoundPage