import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import DownloadCTA from "../../components/DownloadCTA";
import Footer from "../../components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://motocommunity.app";

const HomePage = async ({ params }: PageProps<"/[lang]">) => {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MotoCommunity",
    description: dict.meta.description,
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "iOS",
    inLanguage: lang,
    url: `${siteUrl}/${lang}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "MotoCommunity",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header nav={dict.nav} lang={lang} />
      <main>
        <Hero hero={dict.hero} cta={dict.cta} />
        <Features features={dict.features} />
        <DownloadCTA cta={dict.cta} />
      </main>
      <Footer footer={dict.footer} lang={lang} />
    </>
  );
};

export default HomePage;
