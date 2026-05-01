import NavLinks from "./NavLinks";

type Props = {
  footer: { privacy: string; support: string; telegram: string; copyright: string };
  lang: string;
};

export default function Footer({ footer, lang }: Props) {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-white/40">{footer.copyright}</p>

        <div className="flex items-center gap-6">
          <NavLinks labels={footer} lang={lang} className="text-white/40" />
        </div>
      </div>
    </footer>
  );
}
