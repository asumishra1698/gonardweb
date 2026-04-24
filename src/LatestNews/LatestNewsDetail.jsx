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
    <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <button
          className="mb-4 text-blue-500 hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Back to News
        </button>
        <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h1 className="text-2xl font-bold mb-2">{news.title}</h1>
        <span className="text-xs text-gray-400 mb-4 block">{news.date}</span>
        <p className="text-gray-700 leading-relaxed">{news.content}</p>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-[340px] flex-shrink-0 flex flex-col gap-8">
        {/* Recent News */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5">
          <h2 className="text-lg font-bold mb-4 text-blue-900">Recent News</h2>
          <ul className="space-y-4">
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

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow border border-gray-100 p-5">
          <h2 className="text-lg font-bold mb-4 text-blue-900">Contact Gonardweb</h2>
          <ReusableContactForm
            title="Book a free consultation"
            submitLabel="Send Inquiry"
            showTrigger={false}
            className="!p-0 !shadow-none !border-0 !bg-transparent"
          />
        </div>
      </aside>
    </div>
  );
};

export default LatestNewsDetail;
