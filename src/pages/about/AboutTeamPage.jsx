import PageBannerLayout from '../../components/PageBannerLayout.jsx'

const teamMembers = [
  { name: 'Asutosh Mishra', position: 'CEO', image: '/team/team-placeholder.svg' },
  { name: 'Ankit Sharma', position: 'Manager', image: '/team/team-placeholder.svg' },
  { name: 'Neha Verma', position: 'HR', image: '/team/team-placeholder.svg' },
  { name: 'Rohit Saxena', position: 'App Developer', image: '/team/team-placeholder.svg' },
  { name: 'Priya Malhotra', position: 'App Developer', image: '/team/team-placeholder.svg' },
  { name: 'Devansh Arora', position: 'React Native Developer', image: '/team/team-placeholder.svg' },
  { name: 'Karan Mehta', position: 'Senior Website Designer', image: '/team/team-placeholder.svg' },
  { name: 'Sanya Kapoor', position: 'Senior Website Designer', image: '/team/team-placeholder.svg' },
  { name: 'Aditya Singh', position: 'Junior Website Designer', image: '/team/team-placeholder.svg' },
  { name: 'Pooja Nair', position: 'Junior Website Designer', image: '/team/team-placeholder.svg' },
  { name: 'Ishita Arora', position: 'Graphic Designer', image: '/team/team-placeholder.svg' },
  { name: 'Rahul Tiwari', position: 'Graphic Designer', image: '/team/team-placeholder.svg' },
  { name: 'Mehak Sethi', position: 'UI/UX Designer', image: '/team/team-placeholder.svg' },
  { name: 'Vikram Joshi', position: 'UI/UX Designer', image: '/team/team-placeholder.svg' },
  { name: 'Simran Kaur', position: 'Digital Marketing Expert', image: '/team/team-placeholder.svg' },
  { name: 'Ankit Gupta', position: 'SEO Specialist', image: '/team/team-placeholder.svg' },
  { name: 'Tanya Bansal', position: 'Content Strategist', image: '/team/team-placeholder.svg' },
  { name: 'Nikhil Chauhan', position: 'Social Media Manager', image: '/team/team-placeholder.svg' },

]

const roleDescriptions = {
  CEO: 'Leads the company vision, business direction, and strategic decisions that shape how GonardWeb grows and serves clients.',
  Manager: 'Oversees team coordination, project flow, and day-to-day delivery so work moves forward with clarity and accountability.',
  HR: 'Supports hiring, people operations, and team culture while helping maintain a healthy and productive working environment.',
  'Senior Website Designer': 'Leads website design direction with stronger visual systems, layout thinking, and user-focused design decisions.',
  'Junior Website Designer': 'Supports website design execution through layout assistance, design refinement, and consistent visual implementation.',
  'Graphic Designer': 'Creates brand visuals, creative assets, and supporting design materials that strengthen communication across digital channels.',
  'UI/UX Designer': 'Shapes user flows, interface clarity, and interaction decisions to make digital experiences easier and more intuitive to use.',
  'Digital Marketing Expert': 'Plans and manages growth-focused digital campaigns aimed at improving visibility, lead generation, and measurable performance.',
  'SEO Specialist': 'Improves search visibility through keyword planning, on-page optimization, and content alignment that supports long-term traffic growth.',
  'Content Strategist': 'Builds content direction, messaging structure, and publishing ideas that help brands communicate more clearly and consistently.',
  'Social Media Manager': 'Handles platform presence, posting coordination, and audience engagement across channels like Facebook, Instagram, and LinkedIn.',
  'App Developer': 'Builds application features, integrates backend systems, and helps deliver stable mobile experiences that support product performance and usability.',
  'React Native Developer': 'Develops cross-platform mobile applications with React Native, focusing on shared code efficiency, smooth performance, and reliable user experience.',
}

function AboutTeamPage() {
  return (
    <PageBannerLayout
      eyebrow="Our team"
      title="Introduce the people behind the projects."
      description="Use this page for leadership profiles, team bios, or department-level introductions."
      bannerTitle="Meet the team shaping GonardWeb delivery, thinking, and execution."
      bannerDescription="Show the people behind the strategy, design, and implementation work that turns digital plans into shipped outcomes."
    >
      <section className="mx-auto max-w-7xl py-12 lg:py-16">
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-xs font-extrabold uppercase tracking-[0.24em] text-[#2550c3]">
            Our team
          </div>
          <h2 className="mt-5  text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Meet the 18 team members supporting GonardWeb across leadership, design, development, content, and growth.
          </h2>
          <p className="mt-5  text-base leading-8 text-slate-600 sm:text-lg">
            Our team combines business direction, creative execution, user experience thinking, and digital marketing support so every project can move with clearer collaboration and stronger delivery quality.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={`${member.name}-${member.position}`}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
            >
              <div className="bg-[linear-gradient(180deg,_#eef5ff,_#ffffff)] p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full rounded-[1.5rem] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="inline-flex rounded-full bg-[#e7f0ff] px-4 py-2  text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-[#2550c3]">
                  {member.position}
                </div>
                <h3 className="mt-4  text-2xl font-black tracking-tight text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-3  text-sm leading-7 text-slate-600 sm:text-base">
                  {roleDescriptions[member.position]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageBannerLayout>
  )
}

export default AboutTeamPage