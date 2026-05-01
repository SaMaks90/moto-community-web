import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import NavLinks from "./NavLinks";

type Props = {
  nav: { privacy: string; support: string };
  lang: string;
};

const Header = ({ nav, lang }: Props) => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <span className="font-bold text-white text-base tracking-tight">
            Moto<span className="text-orange-500">Community</span>
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <NavLinks labels={nav} lang={lang} />
          </nav>

          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
