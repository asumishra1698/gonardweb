import gonardwebLaunchesNewRealEstatePortal from './gonardweb-launches-new-real-estate-portal.jsx';
import fashionBrandWebsiteWinsDesignAward from './fashion-brand-website-wins-design-award.jsx';

const newsList = [
  gonardwebLaunchesNewRealEstatePortal,
  fashionBrandWebsiteWinsDesignAward,
];

export function getNewsBySlug(slug) {
  return newsList.find((n) => n.slug === slug);
}

export default newsList;
