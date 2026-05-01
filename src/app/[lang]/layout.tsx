import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import "../globals.css";

const locales = ["en", "uk", "pl", "de", "ru", "be"];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://motocommunity.app";
const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export const generateStaticParams = async () => {
  return locales.map((lang) => ({ lang }));
};

export const generateMetadata = async ({ params }: LayoutProps<"/[lang]">): Promise<Metadata> => {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${siteUrl}/${lang}`,
      siteName: "MotoCommunity",
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
};

const LangLayout = async ({ children, params }: LayoutProps<"/[lang]">) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body>
        {children}
        {cfBeaconToken && (
          <script
            defer
            src={"https://static.cloudflareinsights.com/beacon.min.js"}
            data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
          />
        )}
      </body>
    </html>
  );
};

export default LangLayout;
