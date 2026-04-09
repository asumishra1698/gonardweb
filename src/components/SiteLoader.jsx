function SiteLoader({ visible }) {
  return (
    <div
      className={[
        'pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.28),_rgba(239,246,255,0.96)_48%,_rgba(255,255,255,0.98))] transition duration-500',
        visible ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="site-loader-orbit relative flex h-24 w-24 items-center justify-center rounded-full border border-sky-900/10 bg-white/75 shadow-[0_22px_70px_rgba(37,99,235,0.16)] backdrop-blur">
          <span className="site-loader-pulse absolute h-16 w-16 rounded-full bg-sky-200/55" />
          <span className="site-loader-ring absolute h-20 w-20 rounded-full border-2 border-transparent border-t-blue-600 border-r-sky-900" />
          <span className=" text-sm font-black uppercase tracking-[0.28em] text-sky-950">
            GW
          </span>
        </div>

        <div className="text-center">
          <p className=" text-xs font-extrabold uppercase tracking-[0.32em] text-blue-700">
            GonardWeb
          </p>
          <p className="mt-2  text-sm text-slate-600">
            Loading digital experience...
          </p>
        </div>
      </div>
    </div>
  )
}

export default SiteLoader