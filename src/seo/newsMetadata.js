import { getNewsBySlug } from '../LatestNews/news/index.jsx';

export function getNewsMetadata(pathname) {
  if (!pathname.startsWith('/latest-news/')) {
    return null;
  }
  const slug = pathname.replace('/latest-news/', '');
  const news = getNewsBySlug(slug);
  if (!news) return null;
  return {
    title: `${news.title} | GonardWeb`,
    description: news.summary,
    type: 'Article',
    name: news.title,
    image: news.image,
    canonicalUrl: `https://gonardweb.com/latest-news/${news.slug}`,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: news.title,
        description: news.summary,
        image: `https://gonardweb.com${news.image}`,
        datePublished: news.date,
        author: {
          '@type': 'Organization',
          name: 'GonardWeb',
        },
        publisher: {
          '@type': 'Organization',
          name: 'GonardWeb',
          logo: {
            '@type': 'ImageObject',
            url: 'https://gonardweb.com/favicon.png',
          },
        },
        mainEntityOfPage: `https://gonardweb.com/latest-news/${news.slug}`,
      },
    ],
  };
}
