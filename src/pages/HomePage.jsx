import CompanyOverviewSection from '../components/CompanyOverviewSection.jsx'
import ClientTestimonialsSection from '../components/ClientTestimonialsSection.jsx'
import FeatureSplitSection from '../components/FeatureSplitSection.jsx'
import OurClientsSection from '../components/OurClientsSection.jsx'
import ServiceCardsSection from '../components/ServiceCardsSection.jsx'
import SliderBanner from '../components/SliderBanner.jsx'

const services = [
  {
    icon: '/online.png',
    iconAlt: 'eCommerce website designing icon',
    title: 'eCommerce Website Designing',
    description:
      'GonardWeb creates visually appealing, user-friendly, and high-converting online stores as a top website designing company in Ghaziabad.',
    to: '/solutions/website-design',
  },
  {
    icon: '/web-design.png',
    iconAlt: 'website development icon',
    title: 'Website Development',
    description:
      'From landing pages to full business platforms, we build fast, maintainable websites that scale with product and content growth.',
    to: '/solutions/website-development',
  },
  {
    icon: '/app-development.png',
    iconAlt: 'app development icon',
    title: 'App Development',
    description:
      'Launch mobile-ready experiences with product thinking, polished interfaces, and engineering focused on reliability and speed.',
    to: '/solutions/app-development',
  },
  {
    icon: '/seo2.png',
    iconAlt: 'digital marketing icon',
    title: 'Digital Marketing',
    description:
      'Build reach and conversion through SEO, content strategy, paid campaigns, and sharper digital visibility with a best performance marketing agency in Ghaziabad.',
    to: '/solutions/digital-marketing',
  },
]

const featurePoints = [
  {
    title: 'We are offering a Lead Management System',
    description:
      ' to enhance sales strategies, monitor connections, manage leads, and improve business. We give solutions for a variety of uses, such as Human Resource Administration.',
  },
  {
    title: 'We provide a range of development services',
    description:
      ' to meet the needs of various software project types. Our organization will be greatly enhanced by our combined technological prowess, extensive industry knowledge, and creative business concepts.',
  },
]

const companyAccordionItems = [
  {
    title: 'Creative App Design',
    description:
      'We shape interfaces and product experiences that balance usability, conversion, and a clear visual system for digital products.',
  },
  {
    title: 'Technologically Sound Apps',
    description:
      'Our builds focus on maintainable architecture, clean implementation, and scalable technical decisions that hold up in production.',
  },
  {
    title: 'Apps for Social Interaction',
    description:
      'We create engagement-led experiences for communities, user communication, collaboration, and audience-driven product growth.',
  },
]

const companyFeatureCards = [
  {
    icon: '/online.png',
    iconAlt: 'IT support and helpdesk icon',
    title: 'IT support & helpdesk',
    description:
      'Reliable IT support and helpdesk solutions tailored for seamless operations are brought to you by gonardweb.',
  },
  {
    icon: '/web-design.png',
    iconAlt: 'User experience icon',
    title: 'User Experience',
    description:
      'Elevate your digital journey with intuitive user experiences that refine the way people interact with technology.',
  },
  {
    icon: '/seo2.png',
    iconAlt: 'Analytic solutions icon',
    title: 'Analytic Solutions',
    description:
      'Uncover actionable insights and drive data-informed decisions with gonardweb advanced analytic solutions.',
  },
  {
    icon: '/app-development.png',
    iconAlt: 'Business planning icon',
    title: 'Business Planning',
    description:
      'Chart your path to success with gonardweb as your partner in strategic business planning and digital execution.',
  },
]

const bannerSlides = [
  {
    eyebrow: 'eCommerce experience',
    title: 'Build Seamless Shopping Experiences That Convert',
    description:
      'From intuitive design to powerful backend integration, Gonardweb crafts eCommerce solutions that boost engagement, drive sales, and scale with your vision.',
    primaryAction: { label: 'Book A Free Consultation', to: '/solutions/website-development' },
    focusTitle: 'Storefronts built for speed, trust, and repeat purchases.',
    focusDescription:
      'Use this reusable banner for hero sections, service pages, campaigns, or product launches with a simple slide data array.',
    backgroundImage:
      "linear-gradient(125deg, rgba(33, 47, 79, 0.28), rgba(33, 47, 79, 0.18)), url('/banner1.jpg')",
  },
  {
    eyebrow: 'Digital products',
    title: 'Launch Product Pages That Feel Premium On Every Screen',
    description:
      'Blend interface design, performance, and conversion strategy into one polished banner system that adapts cleanly across landing pages and campaigns.',
    primaryAction: { label: 'Book A Free Consultation', to: '/solutions' },
    focusTitle: 'Reusable layout, navigation-safe CTAs, and slide controls included.',
    focusDescription:
      'Each slide can control its own copy, actions, and visual treatment without changing the component structure.',
    backgroundImage:
      "linear-gradient(125deg, rgba(47, 28, 35, 0.26), rgba(20, 32, 59, 0.24)), url('/banner2.jpg')",
  },
  {
    eyebrow: 'Growth-ready builds',
    title: 'Turn Marketing Traffic Into A Faster, Clearer Buying Journey',
    description:
      'Create landing experiences with strong hierarchy, persuasive calls to action, and room to scale content as your campaigns expand.',
    primaryAction: { label: 'Book A Free Consultation', to: '/contact' },
    focusTitle: 'Designed to be reused across services, campaigns, and landing pages.',
    focusDescription:
      'Drop this banner into any page by passing a different slides array. The component handles autoplay, controls, and transitions.',
    backgroundImage:
      "linear-gradient(125deg, rgba(14, 24, 48, 0.4), rgba(42, 20, 25, 0.18)), url('/banner1.jpg')",
  },
]

function HomePage() {
  return (
    <div>
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
        <SliderBanner
          slides={bannerSlides}
          fullScreen
          className="rounded-none border-x-0"
        />
      </div>

       <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
        <CompanyOverviewSection
          badge="About Company"
          titleBefore="More than"
          highlightedText="10+ years"
          titleAfter="we provide IT solutions & Software Innovation"
          description="Since 2018, gonardweb has been a dedicated provider of customized solutions for various industries, with a strong emphasis on real estate. We stand out by offering both custom and platform-based solutions, ensuring your specific needs are met. Choose gonardweb for a unique and flexible approach to address your business requirements."
          accordionItems={companyAccordionItems}
          featureCards={companyFeatureCards}
        />
      </div>

      <ServiceCardsSection
        title="Our Services"
        description="We blend creativity and technology to deliver powerful digital solutions that help businesses grow online. From stunning websites to advanced mobile apps and eCommerce systems, we ensure innovation at every step."
        services={services}
        className="w-full py-10"
      />

      

     
      <OurClientsSection className="py-14 sm:py-18" />
       <ClientTestimonialsSection className="py-4 sm:py-8" />

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen max-w-screen overflow-x-clip">
        <FeatureSplitSection
          badge="What We Do"
          title="Eliminate the IT challenges your business is facing"
          points={featurePoints}
          imageSrc="/service.png"
          imageAlt="Illustration of software services and IT solutions"
        />
      </div>    

      
    </div>
  )
}

export default HomePage