import PageBannerLayout from '../../components/PageBannerLayout.jsx'
import ClientTestimonialsSection from '../../components/ClientTestimonialsSection.jsx'

function ClientTestimonialsPage() {
  return (
    <PageBannerLayout
      eyebrow="Client testimonials"
      title="Show proof through client feedback and outcomes."
      description="Use this page for testimonials, quotes, and performance-backed endorsements."
      bannerTitle="Let client feedback reinforce the quality of the work."
      bannerDescription="Use the hero to position testimonials as proof of delivery standards, collaboration quality, and business impact."
      focusTitle="Testimonials work best when they confirm a clear promise."
      focusDescription="Set up the kind of trust signals visitors should expect before they read individual quotes and outcomes."
    >
      <ClientTestimonialsSection
        className="py-0"
        title="Client feedback from brands that trusted us to sharpen their digital presence."
        description="Use these cards as social proof for website design, delivery quality, and the experience clients remember after launch."
      />
    </PageBannerLayout>
  )
}

export default ClientTestimonialsPage