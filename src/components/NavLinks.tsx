import Link from "next/link";

type Props = {
  labels: { privacy: string; support: string; telegram?: string };
  lang: string;
  className?: string;
};

const NavLinks = ({ labels, lang, className = "text-white/60" }: Props) => {
  const link = `${className} hover:text-white transition-colors`;

  return (
    <>
      <Link href={`/${lang}/privacy`} className={link}>
        {labels.privacy}
      </Link>
      <a
        href="https://ko-fi.com/samchenkoms"
        target="_blank"
        rel="noopener noreferrer"
        className={link}
      >
        {labels.support}
      </a>
      {labels.telegram && (
        <a
          href="https://t.me/motocommunityapp"
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          {labels.telegram}
        </a>
      )}
    </>
  );
};

export default NavLinks;
