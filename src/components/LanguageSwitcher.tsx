"use client";

import { useRouter } from "next/navigation";

const LOCALES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "uk", label: "🇺🇦 Українська" },
  { code: "pl", label: "🇵🇱 Polski" },
  { code: "de", label: "🇩🇪 Deutsch" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "be", label: "🇧🇾 Беларуская" },
];

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    const current = window.location.pathname;
    const newPath = current.replace(new RegExp(`^/${lang}`), `/${next}`);
    router.push(newPath);
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="bg-white/5 border border-white/10 text-white/70 text-sm rounded-lg px-3 py-1.5 cursor-pointer hover:bg-white/10 transition-colors focus:outline-none focus:border-orange-500/50"
    >
      {LOCALES.map(({ code, label }) => (
        <option key={code} value={code} className="bg-[#1a1a1a] text-white">
          {label}
        </option>
      ))}
    </select>
  );
}
