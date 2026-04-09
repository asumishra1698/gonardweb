import PageBannerLayout from '../../components/PageBannerLayout.jsx'
import OurClientsSection from '../../components/OurClientsSection.jsx'

function ClientPage() {
  return (
    <PageBannerLayout
      eyebrow="Client"
      title="Highlight the organizations and brands you support."
      description="This page is ready for client lists, logos, partnership highlights, and long-term engagement examples."
      bannerTitle="Present the clients, partnerships, and working relationships behind the output."
      bannerDescription="Frame this page as a trust signal for brands, industries, and organizations that rely on your delivery."
      focusTitle="Use the banner to turn logos into a credibility story."
      focusDescription="Lead with trust, continuity, and the kind of client relationships your work is built to support."
    >
      <OurClientsSection
        className="py-0"
        title="Client brands that trust GonardWeb across design, development, and digital growth."
        description="This logo slider highlights companies and brands we have supported through website design, website development, app experiences, and performance-led digital work."
      />
    </PageBannerLayout>
  )
}

export default ClientPage