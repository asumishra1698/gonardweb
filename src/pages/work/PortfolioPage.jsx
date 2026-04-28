import PageBannerLayout from '../../components/PageBannerLayout.jsx'


function PortfolioPage() {
  const projects = [

    {
      title: 'Ashico',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Ashico is a dynamic womenswear label offering thoughtfully designed, high-quality clothing. Focused on creativity and modern aesthetics, it delivers versatile pieces for diverse styles. With strong sustainability values, premium fabrics, and timeless designs, Ashico enhances everyday fashion while promoting conscious, confident, and effortless dressing for today’s modern women.',
      image: '/Portfolio/Ashico.png',
      link: 'https://ashico.in/',
    },
    {
      title: 'Aastha Kaushik',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Aasthakaushik is a homegrown womenswear label from New Delhi, established in 2022. Known for its quirky designs and creative use of colors and patterns, it offers a unique alternative to high-street fashion. Focused on quality and sustainability, the brand creates handmade, versatile pieces using premium fabrics and eco-friendly practices.',
      image: '/Portfolio/aashthakaushik.png',
      link: 'https://aasthakaushik.com/',
    },
    {
      title: 'Bohemians Inc',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Bohemians is a kidswear brand founded by Sheina Thapar, inspired by her decade-long fashion experience and motherhood. Focused on comfort and quality, it offers soft, premium fabrics with thoughtful designs and positive elements, ensuring stylish, safe, and feel-good clothing for children.',
      image: '/Portfolio/Bohemians.png',
      link: 'https://bohemiansinc.in/',
    },
    {
      title: 'Blue Smart India',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'FINANCE', color: 'bg-black text-white' },
      ],
      description:
        'Blue Smart India is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/bluesmartindia.png',
      link: 'https://bluesmartindia.com/',
    },
    {
      title: 'Bynd Finserve',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'FINANCE', color: 'bg-black text-white' },
      ],
      description:
        'Bynd Finserve is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/bynd.png',
      link: 'https://byndfinserve.com/',
    },
    {
      title: 'Classicuir',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'HANDBAGS', color: 'bg-black text-white' },
      ],
      description:
        'Classicuir offers a versatile range of premium leather essentials, including tote, hobo, satchel, sling, handbags, wallets, backpacks, and more—crafted with elegance, durability, and functionality to complement every style and everyday need effortlessly.',
      image: '/Portfolio/classicuir.png',
      link: 'https://classicuir.com/',
    },
    {
      title: 'Carlton Sports',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'SPORTS', color: 'bg-black text-white' },
      ],
      description:
        'Carlton Sports, established in 1946 in England, delivers premium badminton equipment backed by 75 years of innovation. Known for quality and authenticity, we offer reliable products, secure shopping, and trusted performance for players worldwide.',
      image: '/Portfolio/carlton.png',
      link: 'https://carltonsports.in/',
    },
    {
      title: 'Eesha Lakhwani',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'CONSULTANCY', color: 'bg-black text-white' },
      ],
      description:
        'Eesha Lakhwani is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/eesha.png',
      link: 'https://eeshalkhwani.com/',
    },
    {
      title: 'FABIANO',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'KITCHEN SOLUTIONS', color: 'bg-black text-white' },
      ],
      description:
        'Fabiano Appliances, founded in 2002, creates high-quality kitchen solutions including chimneys, gas stoves, and more. Driven by innovation and affordability, we deliver reliable, hygienic, and eco-friendly appliances for modern homes across India.',
      image: '/Portfolio/fabiano.png',
      link: 'https://www.fabianoappliances.com/',
    },
    {
      title: 'Gentech Traders',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'ENGINEERING', color: 'bg-black text-white' },
      ],
      description:
        'Founded in 1988 in Ghaziabad, Gentech Traders & Engineering Works supplies generator sets, rentals, and services. Known for quality, reliability, and expert support, we deliver efficient power solutions with trusted brands and timely execution.',
      image: '/Portfolio/gentech.png',
      link: 'https://www.gentechtraders.in/',
    },
    {
      title: 'Host Culture',
      tags: [
        { label: 'BOOKING & EVENT', color: 'bg-red-600 text-white' },
        { label: 'EVENT MANAGEMENT', color: 'bg-black text-white' },
      ],
      description:
        'Host Culture is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/hostculture.png',
      link: 'https://hostculturestudio.com/',
    },
    {
      title: 'iinerbliis',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'CONSULTANCY', color: 'bg-black text-white' },
      ],
      description:
        'At iiner Bliiss, we believe true wellness begins within. We offer yoga, meditation, sound healing, and holistic therapies to nurture mind, body, and spirit, creating a peaceful space for balance, self-connection, and conscious living.',
      image: '/Portfolio/iinerbliis.png',
      link: 'https://iinerbliis.com/',
    },
    {
      title: 'Labelmae',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Label Mae redefines heritage craftsmanship in luxury fashion, blending traditional Indian techniques with modern design. With sustainable practices, premium fabrics, and limited collections, we create timeless, elegant apparel for contemporary women.',
      image: '/Portfolio/labelmae.png',
      link: 'https://labelmae.com/',
    },
    {
      title: 'Loudless',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Crafted with Indian hands and passion, our garments reflect exceptional design and detail. From fabric sourcing to embroidery, every step is locally driven. With a skilled team, we create unique, high-quality pieces with precision and pride.',
      image: '/Portfolio/loudless.png',
      link: 'https://loudless.in/',
    },
    {
      title: 'Mayrake',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Mayrake is a fashion brand blending ethnic and contemporary styles, inspired by Indian heritage and global trends. It offers quality, affordable apparel with handloom craftsmanship and modern designs, celebrating tradition while meeting today’s fashion needs.',
      image: '/Portfolio/mayrake.png',
      link: 'https://mayrake.com/',
    },
    {
      title: 'MSKP Infratech',
      tags: [
        { label: 'Construction', color: 'bg-red-600 text-white' },
        { label: 'Infrastructure', color: 'bg-black text-white' },
      ],
      description:
        'MSKP Infratech Private Limited, established in 2022 in Uttar Pradesh, is a construction company committed to delivering reliable infrastructure solutions across India. With a strong foundation, it focuses on quality, efficiency, and sustainable development projects.',
      image: '/Portfolio/mskp.png',
      link: 'https://mskpinfratech.com/',
    },
    {
      title: 'MUSKAN JAIN',
      tags: [
        { label: 'PERSONAL', color: 'bg-red-600 text-white' },
        { label: 'BEAUTY', color: 'bg-black text-white' },
      ],
      description:
        'Muskan Jain is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/portfolio_image_small-1752212392171-658879830.png',
      link: '#',
    },
    {
      title: 'Shoptango',
      tags: [
        { label: 'Clothing', color: 'bg-red-600 text-white' },
        { label: 'Brand', color: 'bg-black text-white' },
      ],
      description:
        'Shoptango is a vibrant womenswear brand from New Delhi, established in 2021. Known for its quirky and creative designs, it offers a fresh alternative to high-street fashion. With bold colors, unique prints, and premium fabrics, Shoptango creates stylish, functional pieces that blend comfort, individuality, and modern everyday wear.',
      image: '/Portfolio/shoptango.png',
      link: 'https://www.shoptango.in/',
    },

  ];

  return (
    <PageBannerLayout
      eyebrow="Portfolio"
      title="Show finished work in a clear, visual format."
      description="Use this page for selected projects, featured work, and a browsable portfolio grid."
      bannerTitle="Show selected work with stronger context, framing, and visual confidence."
      bannerDescription="Use this banner to introduce the portfolio as proof of capability, taste, and the kinds of projects you want next."
      focusTitle="A portfolio should communicate fit before visitors open a project."
      focusDescription="Use the banner to clarify what kind of work is featured here and why it matters."
    >
      <section className="max-w-full px-0 py-12">
        <div className="grid gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row bg-white/90 rounded-2xl shadow-sm overflow-hidden border border-slate-100 relative group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Left: Text */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-slate-900  font-bold">{project.title}</h2>
                <div className="flex gap-3 mb-4 ">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-4 py-1 rounded-full font-semibold text-center text-sm ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed ">{project.description}</p>
              </div>
              {/* Right: Device Image */}
              <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6 md:p-10">
                <img
                  src={project.image}
                  alt={project.title + ' screenshot'}
                  className="w-full max-w-[720px] md:max-w-[720px] rounded-xl"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              {/* External Link Icon */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors duration-200"
                title="Visit project"
              >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="rotate-[-45deg] text-white font-bold" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageBannerLayout>
  );
}

export default PortfolioPage