type ComingFeaturesDict = {
  title: string;
  badge: string;
  sos_title: string;
  sos_desc: string;
  clubs_title: string;
  clubs_desc: string;
  events_title: string;
  events_desc: string;
  sto_title: string;
  sto_desc: string;
  store_title: string;
  store_desc: string;
};

const icons = {
  sos: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  clubs: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  events: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  sto: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  store: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
};

const ComingFeatures = ({ comingFeatures }: { comingFeatures: ComingFeaturesDict }) => {
  const cards = [
    { icon: icons.sos, title: comingFeatures.sos_title, desc: comingFeatures.sos_desc },
    { icon: icons.clubs, title: comingFeatures.clubs_title, desc: comingFeatures.clubs_desc },
    { icon: icons.events, title: comingFeatures.events_title, desc: comingFeatures.events_desc },
    { icon: icons.sto, title: comingFeatures.sto_title, desc: comingFeatures.sto_desc },
    { icon: icons.store, title: comingFeatures.store_title, desc: comingFeatures.store_desc },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          {comingFeatures.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map(({ icon, title, desc }) => (
            <div
              key={title}
              className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-500/10 text-orange-400/70 border border-orange-500/15">
                  {comingFeatures.badge}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] text-white/40 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-white/75 font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/35 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {cards.slice(3).map(({ icon, title, desc }) => (
            <div
              key={title}
              className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
            >
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-500/10 text-orange-400/70 border border-orange-500/15">
                  {comingFeatures.badge}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] text-white/40 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-white/75 font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/35 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingFeatures;
