type Props = {
  cta: { title: string; subtitle: string; coming_soon: string; android_soon: string };
};

const DownloadCTA = ({ cta }: Props) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="rounded-3xl border border-white/10 p-12"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(217,127,26,0.12) 0%, transparent 70%), rgba(255,255,255,0.03)",
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">{cta.title}</h2>
          <p className="text-white/55 mb-8 leading-relaxed">{cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-orange-400 font-semibold text-base">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {cta.coming_soon}
            </div>

            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white/35 font-semibold text-base">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341 19.39 12l-1.865-3.34A1 1 0 0 0 16.6 8H7.4a1 1 0 0 0-.868.5L4.61 12l1.922 3.341A1 1 0 0 0 7.4 16h9.2a1 1 0 0 0 .923-.659zM15 4.18V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1.18A7.003 7.003 0 0 0 5 10v1h14v-1a7.003 7.003 0 0 0-4-6.82zM5 13v5a2 2 0 0 0 2 2h1v2a1 1 0 0 0 2 0v-2h4v2a1 1 0 0 0 2 0v-2h1a2 2 0 0 0 2-2v-5H5z" />
              </svg>
              {cta.android_soon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
