import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import newsList, { getNewsBySlug } from './news/index.jsx';
import ReusableContactForm from '../components/ReusableContactForm.jsx';


const LatestNewsDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const news = getNewsBySlug(slug);

    if (!news) {
        return <div className="p-8 text-center">News not found.</div>;
    }

    // Exclude current news from recent
    const recentNews = newsList.filter((n) => n.slug !== slug).slice(0, 4);

        return (
            <article className="px-0 py-5 sm:px-0 lg:px-0 lg:py-5">
                <div className="max-w-full grid gap-4 grid-cols-1 lg:grid-cols-12 px-0 lg:px-6">
                    {/* Main Content */}
                    <div className="lg:col-span-8 col-span-1 min-w-0 space-y-8">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <button onClick={() => navigate('/')} className="transition hover:text-[#2447A8]">Home</button>
                            <span>/</span>
                            <button onClick={() => navigate('/latest-news')} className="transition hover:text-[#2447A8]">Latest News</button>
                            <span>/</span>
                            <span className="text-slate-700">{news.title}</span>
                        </nav>

                        <header className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-700 px-6 py-10 text-white sm:px-8 lg:px-10">
                                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-white/85">
                                            <span className="rounded-full bg-white/15 px-3 py-1 font-semibold uppercase tracking-[0.2em]">News</span>
                                            <span>{news.date}</span>
                                        </div>
                                        <h1 className="mt-6 max-w-3xl text-xl font-semibold leading-tight tracking-tight sm:text-xl lg:text-2xl">
                                            {news.title}
                                        </h1>
                                        <p className="mt-5 max-w-2xl text-base leading-8 text-white/88 sm:text-md">{news.summary}</p>
                                    </div>
                                    {news.image ? (
                                        <figure className="rounded-[1.5rem] bg-white/10">
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="h-full w-full rounded-[1rem] object-cover"
                                                loading="eager"
                                                width="420"
                                                height="240"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                                            />
                                        </figure>
                                    ) : null}
                                </div>
                            </div>
                        </header>

                        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:p-8">
                            <div className="space-y-4 text-base leading-8 text-slate-700">
                                <p>{news.content}</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 col-span-1 h-fit rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)] flex flex-col gap-8">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Recent News</p>
                            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
                                {recentNews.map((item) => (
                                    <li key={item.slug} className="flex gap-3 items-center">
                                        <img src={item.image} alt={item.title} className="w-14 h-14 object-cover rounded-lg border" />
                                        <div className="flex-1 min-w-0">
                                            <button
                                                className="text-blue-600 font-semibold hover:underline text-sm text-left truncate"
                                                onClick={() => navigate(`/latest-news/${item.slug}`)}
                                            >
                                                {item.title}
                                            </button>
                                            <div className="text-xs text-gray-400 mt-1 truncate">{item.date}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>                       
                    </aside>
                </div>
            </article>
        );
};

export default LatestNewsDetail;
