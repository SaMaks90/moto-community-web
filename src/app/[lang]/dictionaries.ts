import "server-only";

export type Locale = "en" | "uk" | "pl" | "de" | "ru" | "be";

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () =>
    import("../../dictionaries/en.json").then(
      (m) => m.default as Record<string, unknown>,
    ),
  uk: () =>
    import("../../dictionaries/uk.json").then(
      (m) => m.default as Record<string, unknown>,
    ),
  pl: () =>
    import("../../dictionaries/pl.json").then(
      (m) => m.default as Record<string, unknown>,
    ),
  de: () =>
    import("../../dictionaries/de.json").then(
      (m) => m.default as Record<string, unknown>,
    ),
  ru: () =>
    import("../../dictionaries/ru.json").then(
      (m) => m.default as Record<string, unknown>,
    ),
  be: () =>
    import("../../dictionaries/be.json").then(
      (m) => m.default as Record<string, unknown>,
    ),
};

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => {
  const raw = await dictionaries[locale]();
  return raw as {
    meta: { title: string; description: string };
    nav: { privacy: string; support: string };
    hero: { tagline: string; subtitle: string; badge: string };
    features: {
      title: string;
      find_rides_title: string;
      find_rides_desc: string;
      create_rides_title: string;
      create_rides_desc: string;
      circle_title: string;
      circle_desc: string;
      languages_title: string;
      languages_desc: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
      coming_soon: string;
    };
    footer: {
      privacy: string;
      support: string;
      telegram: string;
      copyright: string;
    };
    privacy: {
      title: string;
      updated: string;
      intro: string;
      section_collect_title: string;
      section_collect_body: string;
      section_use_title: string;
      section_use_body: string;
      section_third_title: string;
      section_third_body: string;
      section_retention_title: string;
      section_retention_body: string;
      section_rights_title: string;
      section_rights_body: string;
      section_security_title: string;
      section_security_body: string;
      section_contact_title: string;
      section_contact_body: string;
      back: string;
    };
  };
};
