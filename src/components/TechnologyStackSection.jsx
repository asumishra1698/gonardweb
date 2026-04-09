const defaultEyebrow = 'Technology Stack'

const designTechnologyCategories = [
  {
    name: 'Front-End Programming',
    items: [
      { name: 'HTML', symbol: 'H5', iconPath: '/technology/HTML.svg', accentClass: 'bg-orange-100 text-orange-600' },
      { name: 'CSS', symbol: 'C3', iconPath: '/technology/css.svg', accentClass: 'bg-blue-100 text-blue-600' },
      { name: 'JavaScript', symbol: 'JS', iconPath: '/technology/Javascript.svg', accentClass: 'bg-amber-100 text-amber-700' },
      { name: 'React', symbol: 'RE', iconPath: '/technology/react.svg', accentClass: 'bg-cyan-100 text-cyan-700' },
      { name: 'Angular.js', symbol: 'AJ', iconPath: '/technology/Angular.svg', accentClass: 'bg-slate-200 text-slate-800' },
      { name: 'Vue.js', symbol: 'VJ', iconPath: '/technology/Vue.svg', accentClass: 'bg-sky-100 text-sky-700' },
    ],
  },
  {
    name: 'Back-End Programming',
    items: [
      { name: 'Node.js', symbol: 'ND', iconPath: '/technology/Nodejs.svg', accentClass: 'bg-emerald-100 text-emerald-700' },
      { name: 'PHP', symbol: 'PHP', iconPath: '/technology/PHP.svg', accentClass: 'bg-indigo-100 text-indigo-700' },
      { name: 'Python', symbol: 'PY', iconPath: '/technology/python.svg', accentClass: 'bg-yellow-100 text-yellow-700' },
      { name: 'Java', symbol: 'JV', iconPath: '/technology/Java.svg', accentClass: 'bg-rose-100 text-rose-700' },
      { name: '.NET', symbol: 'NET', iconPath: '/technology/net.svg', accentClass: 'bg-violet-100 text-violet-700' },
      { name: 'Ruby', symbol: 'RR', iconPath: '/technology/Ruby.svg', accentClass: 'bg-red-100 text-red-700' },
    
    ],
  },
  {
    name: 'Database Management',
    items: [
      { name: 'MySQL', symbol: 'MY', iconPath: '/technology/MySQL.svg', accentClass: 'bg-sky-100 text-sky-700' },
      { name: 'PostgreSQL', symbol: 'PG', iconPath: '/technology/PostgreSQL.svg', accentClass: 'bg-blue-100 text-blue-700' },
      { name: 'MongoDB', symbol: 'MG', iconPath: '/technology/MongoDB.svg', accentClass: 'bg-green-100 text-green-700' },
      { name: 'Redis', symbol: 'RD', iconPath: '/technology/Redis.svg', accentClass: 'bg-red-100 text-red-700' },
    ],
  },
  {
    name: 'CMS Development',
    items: [
      { name: 'WordPress', symbol: 'WP', iconPath: '/technology/Wordpress.svg', accentClass: 'bg-blue-100 text-blue-700' },
      { name: 'Shopify', symbol: 'SH', iconPath: '/technology/Shopify.svg', accentClass: 'bg-lime-100 text-lime-700' },
      { name: 'Laravel', symbol: 'LV', iconPath: '/technology/laravel.svg', accentClass: 'bg-red-100 text-red-700' },
      { name: 'Squarespace', symbol: 'SQ', iconPath: '/technology/Squarespace.svg', accentClass: 'bg-slate-100 text-slate-700' },
    ],
  },
]

function TechnologyStackSection({
  eyebrow = defaultEyebrow,
  title,
  description,
  categories = designTechnologyCategories,
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 sm:rounded-[2.5rem] sm:px-7 sm:py-10 lg:px-10 lg:py-12 mb-5">
      <div>
        <div className="mx-auto max-w-4xl text-center">
          <p className=" text-xs font-black uppercase tracking-[0.26em] text-[#2550c3] sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-4  text-2xl font-black leading-tight text-slate-950 sm:text-2xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl  text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.75rem]  sm:mt-10">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={[
                'grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:gap-8 lg:px-8',
                index < categories.length - 1 ? 'border-b border-slate-200/80' : '',
              ].join(' ')}
            >
              <div>
                <h3 className=" text-sm font-bold leading-tight text-slate-950 sm:text-xl">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex w-full min-w-0 items-center gap-3 rounded-full border border-white/80 bg-white px-3 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.05)] sm:inline-flex sm:w-auto sm:min-w-[160px] sm:px-4"
                  >
                    <span
                      className={[
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl overflow-hidden',
                        item.accentClass ?? 'bg-slate-100 text-slate-700',
                      ].join(' ')}
                    >
                      {item.iconPath ? (
                        <img
                          src={item.iconPath}
                          alt={item.name}
                          className="h-5 w-5 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className=" text-xs font-black uppercase tracking-[0.08em]">
                          {item.symbol}
                        </span>
                      )}
                    </span>
                    <span className="min-w-0  text-sm font-semibold text-slate-800 sm:text-base">
                      {item.name}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStackSection