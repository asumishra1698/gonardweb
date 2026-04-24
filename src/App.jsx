
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ConsultationPopupProvider } from './components/ConsultationPopupProvider.jsx';
import PageBannerLayout from './components/PageBannerLayout.jsx';
import PageSeo from './components/PageSeo.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import SiteLoader from './components/SiteLoader.jsx';

const LatestNewsList = lazy(() => import('./LatestNews/LatestNewsList.jsx'));
const LatestNewsDetail = lazy(() => import('./LatestNews/LatestNewsDetail.jsx'));

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutPage = lazy(() => import('./pages/about/AboutPage.jsx'))
const AboutCompanyPage = lazy(() => import('./pages/about/AboutCompanyPage.jsx'))
const AboutMissionValuesPage = lazy(() => import('./pages/about/AboutMissionValuesPage.jsx'))
const AboutWhyChooseUsPage = lazy(() => import('./pages/about/AboutWhyChooseUsPage.jsx'))
const AboutTeamPage = lazy(() => import('./pages/about/AboutTeamPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage.jsx'))
const BlogPage = lazy(() => import('./blogs/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('./blogs/BlogPostPage.jsx'))
const SolutionsPage = lazy(() => import('./pages/solutions/SolutionsPage.jsx'))
const WebsiteDesignPage = lazy(() => import('./pages/solutions/WebsiteDesignPage.jsx'))
const WebsiteDevelopmentPage = lazy(() => import('./pages/solutions/WebsiteDevelopmentPage.jsx'))
const AppDevelopmentPage = lazy(() => import('./pages/solutions/AppDevelopmentPage.jsx'))
const DigitalMarketingPage = lazy(() => import('./pages/solutions/DigitalMarketingPage.jsx'))
const WorkPage = lazy(() => import('./pages/work/WorkPage.jsx'))
const PortfolioPage = lazy(() => import('./pages/work/PortfolioPage.jsx'))
const CaseStudiesPage = lazy(() => import('./pages/work/CaseStudiesPage.jsx'))
const ClientPage = lazy(() => import('./pages/work/ClientPage.jsx'))
const ClientTestimonialsPage = lazy(() => import('./pages/work/ClientTestimonialsPage.jsx'))
const PricingPage = lazy(() => import('./pages/PricingPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

function RouteFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

function SiteLayout() {
  const location = useLocation()
  const hasMountedRef = useRef(false)
  const [isPageLoading, setIsPageLoading] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      setIsPageLoading(false)
      return undefined
    }

    setIsPageLoading(true)

    const timeoutId = window.setTimeout(
      () => {
        setIsPageLoading(false)
      },
      220,
    )

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname])

  return (
    <div id="top" className="min-h-screen bg-white text-stone-900">
      <PageSeo />
      <SiteLoader visible={isPageLoading} />
      <SiteHeader className="" />

      <div className="flex min-h-[calc(100vh-9rem)] w-full flex-col px-2 lg:px-8">
        <main className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      <SiteFooter className="" />
    </div>
  )
}

function App() {
  return (
    <ConsultationPopupProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="about-us/company" element={<AboutCompanyPage />} />
          <Route path="about-us/mission-values" element={<AboutMissionValuesPage />} />
          <Route path="about-us/why-choose-us" element={<AboutWhyChooseUsPage />} />
          <Route path="about-us/team" element={<AboutTeamPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="solutions/website-design" element={<WebsiteDesignPage />} />
          <Route path="solutions/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="solutions/app-development" element={<AppDevelopmentPage />} />
          <Route path="solutions/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/portfolio" element={<PortfolioPage />} />
          <Route path="work/case-studies" element={<CaseStudiesPage />} />
          <Route path="work/client" element={<ClientPage />} />
          <Route path="work/client-testimonials" element={<ClientTestimonialsPage />} />
          <Route path="pricing" element={<PricingPage />} />       
       
        <Route
          path="faqs"
          element={<FaqPage />}
        />
        <Route
          path="terms-and-conditions"
          element={<TermsConditionsPage />}
        />
        <Route
          path="privacy-policy"
          element={<PrivacyPolicyPage />}
        />
         <Route
          path="blog"
          element={<BlogPage />}
        />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route
          path="press"
          element={
            <PageBannerLayout
              eyebrow="Press"
              title="Centralize media mentions, coverage, and brand materials."
              description="Use this route for press resources, media kits, and news coverage."
              bannerTitle="Create a clearer press surface for media, coverage, and brand assets."
              bannerDescription="Use the banner to frame the page as a resource for journalists, partners, and external references."
            />
          }
        />
        <Route path="latest-news" element={<LatestNewsList />} />
        <Route path="latest-news/:slug" element={<LatestNewsDetail />} />
        <Route
          path="partnerships"
          element={
            <PageBannerLayout
              eyebrow="Partnerships"
              title="Describe collaboration models and strategic alliances."
              description="This placeholder is ready for your partnerships program or inquiry content."
              bannerTitle="Present partnership opportunities with better framing and intent."
              bannerDescription="Use this banner to introduce the collaboration models, alliance structure, and shared value behind partnerships."
            />
          }
        />
        <Route
          path="support"
          element={
            <PageBannerLayout
              eyebrow="Support"
              title="Guide customers to the right help path."
              description="Use this page for support options, response times, and escalation details."
              bannerTitle="Point customers toward the right support path quickly and clearly."
              bannerDescription="Use the banner to frame expectations around help options, timing, and the best route for assistance."
            />
          }
        />
        <Route
          path="help-center"
          element={
            <PageBannerLayout
              eyebrow="Help center"
              title="Collect guides, tutorials, and troubleshooting content."
              description="Turn this placeholder into a knowledge base or self-service resource hub."
              bannerTitle="Build a self-service resource hub that reduces support friction."
              bannerDescription="Use the banner to present the help center as the starting point for guides, tutorials, and troubleshooting."
            />
          }
        />
        <Route
          path="events"
          element={
            <PageBannerLayout
              eyebrow="Events"
              title="Promote webinars, launches, and upcoming appearances."
              description="This route is ready for an events calendar or registration page."
              bannerTitle="Promote upcoming events, launches, and appearances with more energy."
              bannerDescription="Use the banner to frame the event page as a place for registrations, schedules, and upcoming brand activity."
            />
          }
        />
        <Route
          path="community"
          element={
            <PageBannerLayout
              eyebrow="Community"
              title="Create a space for audience participation and discussion."
              description="Use this page for groups, forums, and member engagement details."
              bannerTitle="Create a stronger entry point for participation and community activity."
              bannerDescription="Use this banner to introduce the page as a place for discussion, contribution, and audience connection."
            />
          }
        />
        <Route
          path="social-media"
          element={
            <PageBannerLayout
              eyebrow="Social media"
              title="Point visitors to your active channels and updates."
              description="Replace this page with links, embeds, or a social media hub."
              bannerTitle="Guide visitors into your active channels with a clearer social hub."
              bannerDescription="Use this banner to position the page as the bridge into your social presence, updates, and platform-specific content."
            />
          }
        />
        <Route
          path="newsletter"
          element={
            <PageBannerLayout
              eyebrow="Newsletter"
              title="Capture email subscribers with a clear publishing promise."
              description="This placeholder can become your newsletter archive or signup page."
              bannerTitle="Make the subscription promise clear before asking for an email."
              bannerDescription="Use the banner to frame what readers will receive, why it matters, and why they should subscribe."
            />
          }
        />
        <Route
          path="subscribe"
          element={
            <PageBannerLayout
              eyebrow="Subscribe"
              title="Offer a focused route for signups and ongoing updates."
              description="Replace this placeholder with your subscription form or membership CTA."
              bannerTitle="Turn the subscribe page into a clearer conversion path."
              bannerDescription="Use this banner to support signups with a strong promise, cleaner context, and a direct next action."
            />
          }
        />         
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ConsultationPopupProvider>
  )
}

export default App
