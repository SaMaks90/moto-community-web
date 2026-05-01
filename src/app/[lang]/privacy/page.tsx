import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

const locales = ["en", "uk", "pl", "de", "ru", "be"];

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: `${dict.privacy.title} — MotoCommunity`,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}/privacy`])),
        "x-default": "/en/privacy",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.privacy.title} — MotoCommunity`,
      description: dict.meta.description,
    },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const p = dict.privacy;

  return (
    <>
      <Header nav={dict.nav} lang={lang} />
      <main className="max-w-3xl mx-auto px-6 py-16 text-white">
        <Link
          href={`/${lang}`}
          className="text-orange-400 hover:text-orange-300 text-sm mb-8 inline-block transition-colors"
        >
          {p.back}
        </Link>

        <h1 className="text-3xl font-bold mb-2">{p.title}</h1>
        <p className="text-white/40 text-sm mb-10">{p.updated}</p>

        <p className="text-white/80 mb-10 leading-relaxed">{p.intro}</p>

        {[
          [p.section_collect_title, p.section_collect_body],
          [p.section_use_title, p.section_use_body],
          [p.section_third_title, p.section_third_body],
          [p.section_retention_title, p.section_retention_body],
          [p.section_rights_title, p.section_rights_body],
          [p.section_security_title, p.section_security_body],
        ].map(([title, body]) => (
          <section key={title} className="mb-8">
            <h2 className="text-lg font-semibold mb-3">{title}</h2>
            <p className="text-white/70 leading-relaxed">{body}</p>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">{p.section_contact_title}</h2>
          <p className="text-white/70 leading-relaxed mb-2">{p.section_contact_body}</p>
          <a
            href="mailto:samchenkoms@gmail.com"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            samchenkoms@gmail.com
          </a>
        </section>
      </main>
      <Footer footer={dict.footer} lang={lang} />
    </>
  );
}
