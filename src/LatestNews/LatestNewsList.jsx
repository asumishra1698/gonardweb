import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBannerLayout from '../components/PageBannerLayout.jsx';
import gonardwebLaunchesNewRealEstatePortal from './news/gonardweb-launches-new-real-estate-portal.jsx';
import fashionBrandWebsiteWinsDesignAward from './news/fashion-brand-website-wins-design-award.jsx';

// News data imported from separate files
const newsList = [
    gonardwebLaunchesNewRealEstatePortal,
    fashionBrandWebsiteWinsDesignAward,
];


const LatestNewsList = () => {
    const navigate = useNavigate();

    const handleCardClick = (slug) => {
        navigate(`/latest-news/${slug}`);
    };

    return (
        <PageBannerLayout
            eyebrow="Latest News"
            title="Latest News & Announcements"
            description="Stay updated with the latest announcements, launches, and achievements from Gonardweb."
            bannerEyebrow="Latest News"
            bannerTitle="Latest News & Announcements"
            bannerDescription="Stay updated with the latest announcements, launches, and achievements from Gonardweb."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {newsList.map((news) => (
                    <div
                        key={news.slug}
                        className="group bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-400 overflow-hidden flex flex-col"
                        onClick={() => handleCardClick(news.slug)}
                    >
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {news.date}
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-5">
                            <h2 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[2.5em]">
                                {news.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-3 min-h-[3.6em]">{news.summary}</p>
                            <div className="mt-auto flex justify-end">
                                <span className="inline-flex items-center gap-1 text-blue-500 font-semibold text-sm group-hover:underline">
                                    Read More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageBannerLayout>
    );
};

export default LatestNewsList;