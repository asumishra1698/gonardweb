import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts, getBlogPostBySlug, loadBlogPostBySlug } from './blogindex.jsx'
import { useConsultationPopup } from '../components/ConsultationPopupProvider.jsx'

function BlogPostPage() {
    const { slug } = useParams()
    const { openConsultationPopup } = useConsultationPopup()
    const postSummary = getBlogPostBySlug(slug)
    const [post, setPost] = useState(postSummary)
    const relatedPosts = blogPosts.filter((entry) => entry.slug !== slug).slice(0, 3)
    const focusTitle = post?.focusTitle || 'SEO Focus'
    const focusPoints = post?.focusPoints || [
        'Primary keyword alignment in title, intro, and subheads',
        'Geo relevance for local search intent',
        'FAQ schema support for richer SERP coverage',
        'Readable section hierarchy with semantic headings',
    ]

    useEffect(() => {
        let isActive = true

        setPost(postSummary)

        if (!slug) {
            return undefined
        }

        loadBlogPostBySlug(slug).then((resolvedPost) => {
            if (isActive && resolvedPost) {
                setPost(resolvedPost)
            }
        })

        return () => {
            isActive = false
        }
    }, [postSummary, slug])

    if (!postSummary) {
        return <Navigate to="/blog" replace />
    }

    return (
        <article className="px-0 py-5 sm:px-2 lg:px-4 lg:py-5">
            <div className="max-w-full">
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <Link to="/" className="transition hover:text-[#2447A8]">Home</Link>
                    <span>/</span>
                    <Link to="/blog" className="transition hover:text-[#2447A8]">Blog</Link>
                    <span>/</span>
                    <span className="text-slate-700">{post.title}</span>
                </nav>               

                <header className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                    <div className={`bg-gradient-to-br ${post.accent} px-6 py-10 text-white sm:px-8 lg:px-10`}>
                        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-white/85">
                                    <span className="rounded-full bg-white/15 px-3 py-1 font-semibold uppercase tracking-[0.2em]">{post.category}</span>
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                    {post.title}
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-white/88 sm:text-md">{post.heroSummary}</p>
                            </div>

                            {post.image ? (
                                <figure className="rounded-[1.5rem] bg-white/10">
                                    <picture>
                                        {post.imageSmall ? (
                                            <source
                                                srcSet={post.imageSmall}
                                                media="(max-width: 640px)"
                                                type="image/webp"
                                            />
                                        ) : null}
                                        <img
                                            src={post.image}
                                            alt={post.imageAlt || post.title}
                                            className="h-full w-full rounded-[1rem] object-cover"
                                            loading="eager"
                                            width="864"
                                            height="400"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                                        />
                                    </picture>
                                </figure>
                            ) : null}
                        </div>
                    </div>

                    <div className="grid gap-4 border-t border-slate-100 bg-slate-50/70 px-6 py-5 text-sm text-slate-600 sm:grid-cols-3 sm:px-8 lg:px-10">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Primary Market</p>
                            <p className="mt-2 text-slate-900">{post.location.city}, {post.location.region}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Area Served</p>
                            <p className="mt-2 text-slate-900">{post.location.areaServed.join(', ')}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Author</p>
                            <p className="mt-2 text-slate-900">{post.author}</p>
                        </div>
                    </div>
                </header>

                <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
                    <div className="space-y-8">
                        {post.sections?.map((section) => (
                            <section key={section.heading} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:p-8">
                                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.heading}</h2>
                                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                                    {section.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                                {section.bullets?.length ? (
                                    <ul className="mt-5 space-y-3 text-base text-slate-700">
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet} className="flex items-start gap-3">
                                                <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${post.accent} text-[10px] font-bold text-white`}>
                                                    ✓
                                                </span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </section>
                        ))}

                        {!post.sections ? (
                            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:p-8">
                                <div className="h-6 w-52 rounded-full bg-slate-200" />
                                <div className="mt-5 space-y-3">
                                    <div className="h-4 rounded-full bg-slate-100" />
                                    <div className="h-4 rounded-full bg-slate-100" />
                                    <div className="h-4 w-5/6 rounded-full bg-slate-100" />
                                </div>
                            </section>
                        ) : null}

                        {post.faq?.length ? (
                            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:p-8">
                                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Frequently Asked Questions</h2>
                                <div className="mt-6 space-y-5">
                                    {post.faq.map((item) => (
                                        <div key={item.question} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                                            <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                                            <p className="mt-2 text-base leading-7 text-slate-700">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : null}

                    </div>

                    <aside className="h-fit rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{focusTitle}</p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                            {focusPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>

                          <button
                            type="button"
                            onClick={openConsultationPopup}
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            Discuss A Similar Project
                        </button>

                        {post.internalLinks?.length ? (
                            <div className="mt-8 border-t border-slate-100 pt-8">
                                <h2 className="text-lg font-semibold tracking-tight text-slate-950">Internal Links</h2>
                                <div className="mt-4 space-y-3">
                                    {post.internalLinks.map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            className="block rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-slate-300 hover:bg-white"
                                        >
                                            <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {post.externalLinks?.length ? (
                            <div className="mt-8 border-t border-slate-100 pt-8">
                                <h2 className="text-lg font-semibold tracking-tight text-slate-950">External Resources</h2>
                                <div className="mt-4 space-y-3">
                                    {post.externalLinks.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="block rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-slate-300 hover:bg-white"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                                                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                                                </div>
                                                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true">
                                                    <path d="M7 17 17 7m0 0H9m8 0v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : null}                      
                    </aside>
                </div>

                <section className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">More From The Blog</p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Related reading and next steps</h2>
                        </div>
                        <Link to="/blog" className="text-sm font-semibold text-slate-700 transition hover:text-[#2447A8]">
                            View all articles
                        </Link>
                    </div>

                    {relatedPosts.length > 0 ? (
                        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {relatedPosts.map((entry) => (
                                <article key={entry.slug} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                                    <div className={`h-36 bg-gradient-to-br ${entry.accent}`} />
                                    <div className="p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{entry.category}</p>
                                        <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-950">{entry.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{entry.excerpt}</p>
                                        <Link to={`/blog/${entry.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-[#2447A8]">
                                            Read article
                                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                                                <path d="M5 12h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                            More GonardWeb articles will appear here as new posts are added. For now, you can return to the blog grid or contact us to discuss a similar website design or SEO project.
                        </div>
                    )}
                </section>
            </div>
        </article>
    )
}

export default BlogPostPage