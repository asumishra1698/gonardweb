import { Link } from 'react-router-dom'
import { blogPosts } from './blogindex.jsx'
import PageBannerLayout from '../components/PageBannerLayout.jsx'

function BlogPage() {
  return (
    <PageBannerLayout
      eyebrow="Blog"
      title="Share updates, tutorials, and product thinking."
      description="Browse articles on websites, SEO, paid marketing, design, and growth strategy in a clean grid layout."
      bannerTitle="Publish articles, updates, and practical insights with a stronger editorial presence."
      bannerDescription="Use the blog to turn expertise into trust through educational posts, project thinking, and actionable guidance."
      primaryAction={{ label: 'Contact Us', to: '/contact-us' }}
    >
      <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-full">
          <section className="mb-10 grid gap-4 rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:grid-cols-3 sm:p-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Topics</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Web, SEO, marketing</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Content for businesses improving visibility, conversion, and brand clarity.</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Format</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Readable grid view</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">A clean blog layout designed for scanning categories, summaries, and publication context.</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Purpose</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Earn trust faster</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Use content to answer buying questions before a visitor reaches out.</p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
              >
                <div className={`h-52 bg-gradient-to-br ${post.accent} p-6 text-white`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white/18 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/95 backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/10 px-3 py-1 text-[11px] font-medium text-white/90">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="mt-12 max-w-xs">
                    <p className="text-sm text-white/80">{post.date}</p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">{post.title}</h2>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-7 text-slate-600">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-500">Editorial article</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:text-[#2447A8]"
                    >
                      Read more
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                        <path
                          d="M5 12h14m-5-5 5 5-5 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </PageBannerLayout>
  )
}

export default BlogPage