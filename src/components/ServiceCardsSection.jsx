import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  const isImageIcon = typeof service.icon === 'string' && service.icon.startsWith('/')

  return (
    <Link
      to={service.to}
      className="group block rounded-[1.75rem] border border-slate-200 bg-[#eef6ff] p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)]"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_#f7d4ff,_#d9c7ff)] text-3xl shadow-inner">
        {isImageIcon ? (
          <img
            src={service.icon}
            alt={service.iconAlt ?? `${service.title} icon`}
            className="h-10 w-10 object-contain"
          />
        ) : (
          <span aria-hidden="true">{service.icon}</span>
        )}
      </div>

      <h3 className="mt-8  text-[1.5rem] font-semibold leading-tight text-[#2349b6]">
        {service.title}
      </h3>

      <p className="mt-5  text-[1.1rem] text-slate-600">
        {service.description}
      </p>

      <div className="mt-8 inline-flex items-center gap-4  text-[1.05rem] font-extrabold uppercase tracking-[0.06em] text-slate-950 transition-colors group-hover:text-[#2349b6]">
        <span>Read More</span>
        <span className="h-px w-10 bg-slate-400 transition-all duration-300 group-hover:w-14 group-hover:bg-[#2349b6]" />
      </div>
    </Link>
  )
}

function ServiceCardsSection({
  title,
  description,
  services,
  className = '',
}) {
  return (
    <section className={className}>
      <div className="w-full max-w-none">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className=" text-3xl font-black tracking-tight text-[#2349b6] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6  text-lg text-slate-700 sm:text-[1.15rem]">
            {description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.to} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCardsSection