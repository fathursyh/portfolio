import { SocialIcon } from "@/components/react/social-icons";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { footer, socials } = portfolioData;

  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">{footer.copyright}</p>

        <div className="flex items-center gap-1.5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <SocialIcon name={social.name} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
