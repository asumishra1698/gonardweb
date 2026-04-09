import PageBannerLayout from '../../components/PageBannerLayout.jsx'


function PortfolioPage() {
  const projects = [
    {
      title: 'EESHA LKHWANI',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'CONSULTANCY', color: 'bg-black text-white' },
      ],
      description:
        'Eesha Lakhwani is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/portfolio_image_small-1752212445948-234808768.png',
      link: 'https://eeshalkhwani.com/',
    },
    {
      title: 'HOST CULTURE',
      tags: [
        { label: 'BOOKING & EVENT', color: 'bg-red-600 text-white' },
        { label: 'EVENT MANAGEMENT', color: 'bg-black text-white' },
      ],
      description:
        'Host Culture is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/portfolio_image_small-1752215543780-353350908.png',
      link: 'https://hostculture.com/',
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
      title: 'BYND FINSERVE',
      tags: [
        { label: 'BUSINESS', color: 'bg-red-600 text-white' },
        { label: 'FINANCE', color: 'bg-black text-white' },
      ],
      description:
        'Byndfinserve is a dedicated platform that delivers high-quality solutions and services. Focused on innovation and user experience, it offers tailored resources to meet diverse needs. With a modern approach and reliable features, it is designed to support both individual and professional growth.',
      image: '/Portfolio/portfolio_image_small-1752212422647-132777165.png',
      link: '#',
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
      <section className="max-w-full px-8 py-12">
        <div className="grid gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row bg-white/90 rounded-2xl shadow-sm overflow-hidden border border-slate-100 relative group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Left: Text */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-slate-900  font-bold">{project.title}</h2>
                <div className="flex gap-3 mb-4 ">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-4 py-1 rounded-full font-semibold text-sm ${tag.color}`}
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