/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://motocommunity.app",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://motocommunity.app/en", hreflang: "en" },
    { href: "https://motocommunity.app/uk", hreflang: "uk" },
    { href: "https://motocommunity.app/pl", hreflang: "pl" },
    { href: "https://motocommunity.app/de", hreflang: "de" },
    { href: "https://motocommunity.app/ru", hreflang: "ru" },
    { href: "https://motocommunity.app/be", hreflang: "be" },
  ],
};
