import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
} from "react-icons/io5";
import { SOCIAL_LINKS } from "@/lib/seo";

const ICONS = {
  Instagram: IoLogoInstagram,
  LinkedIn: IoLogoLinkedin,
  TikTok: IoLogoTiktok,
  Facebook: IoLogoFacebook,
} as const;

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

export default function SocialLinks({
  className = "flex gap-4 text-[var(--text-muted)]",
  iconSize = 20,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ name, href }) => {
        const Icon = ICONS[name];

        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Plantify Tech on ${name}`}
            className="transition-colors hover:text-[var(--accent)]"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
