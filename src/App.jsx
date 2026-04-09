import { useEffect, useRef, useState } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { ConsultationPopupProvider } from './components/ConsultationPopupProvider.jsx'
import PageBannerLayout from './components/PageBannerLayout.jsx'
import PricingPage from './pages/PricingPage.jsx'
import PageSeo from './components/PageSeo.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import SiteLoader from './components/SiteLoader.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/about/AboutPage.jsx'
import AboutCompanyPage from './pages/about/AboutCompanyPage.jsx'
import AboutMissionValuesPage from './pages/about/AboutMissionValuesPage.jsx'
import AboutWhyChooseUsPage from './pages/about/AboutWhyChooseUsPage.jsx'
import AboutTeamPage from './pages/about/AboutTeamPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import TermsConditionsPage from './pages/TermsConditionsPage.jsx'
import BlogPage from './blogs/BlogPage.jsx'
import BlogPostPage from './blogs/BlogPostPage.jsx'
import SolutionsPage from './pages/solutions/SolutionsPage.jsx'
import WebsiteDesignPage from './pages/solutions/WebsiteDesignPage.jsx'
import WebsiteDevelopmentPage from './pages/solutions/WebsiteDevelopmentPage.jsx'
import AppDevelopmentPage from './pages/solutions/AppDevelopmentPage.jsx'
import DigitalMarketingPage from './pages/solutions/DigitalMarketingPage.jsx'
import WorkPage from './pages/work/WorkPage.jsx'
import PortfolioPage from './pages/work/PortfolioPage.jsx'
import CaseStudiesPage from './pages/work/CaseStudiesPage.jsx'
import ClientPage from './pages/work/ClientPage.jsx'
import ClientTestimonialsPage from './pages/work/ClientTestimonialsPage.jsx'
import StackPage from './pages/StackPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function SiteLayout() {
  const location = useLocation()
  const hasMountedRef = useRef(false)
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setIsPageLoading(true)

    const timeoutId = window.setTimeout(
      () => {
        setIsPageLoading(false)
      },
      hasMountedRef.current ? 350 : 1100,
    )

    hasMountedRef.current = true

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
          <Outlet />
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
          path="news"
          element={
            <PageBannerLayout
              eyebrow="Latest News"
              title="Publish insights, updates, and editorial content."
              description="Replace this page with a blog index or content hub when those posts exist."
              bannerTitle="Highlight updates, launches, and company news with stronger editorial presence."
              bannerDescription="Use the banner to frame this page as a news surface for announcements, launches, and recent activity."
              primaryAction={{ label: 'Blog', to: '/blog' }}
            />
          }
        />
        <Route
          path="faqs"
          element={<FaqPage />}
        />
        <Route
          path="terms"
          element={<TermsConditionsPage />}
        />
        <Route
          path="privacy"
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
          <Route path="stack" element={<StackPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ConsultationPopupProvider>
  )
}

export default App
