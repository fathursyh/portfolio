import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { SocialIcon } from "@/components/react/social-icons";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { GetImageResult } from "astro";

const Hero = ({ ava }: { ava: GetImageResult }) => {
  const { profile, socials, gallery } = portfolioData;
  const { fetchpriority, ...avaAttributes } = ava.attributes;

  return (
    <section
      id="top"
      className="relative flex flex-col gap-14 sm:gap-20 py-16 sm:py-24 lg:py-28"
    >
      <div className="text-center">
        {/* Profile Avatar */}
        <div className="mb-5 flex items-center justify-center">
          <span className="inline-flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted ring ring-border ring-offset-3 ring-offset-background">
            <img
              className="size-full object-cover"
              src={ava.src}
              {...avaAttributes}
              alt="Fathursyah Avatar"
              loading="eager"
              width={72}
              height={72}
              fetchPriority={fetchpriority ?? "high"}
            />
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-lg text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-pretty">
          Hey, I'm Fathursyah. The <span className="text-rose-600 dark:text-rose-500">Software Engineer</span> & <span className="text-blue-600 dark:text-blue-500">Project Manager</span>.
        </h1>

        {/* Short Bio */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground text-balance leading-relaxed">
          {profile.bio}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button asChild size="default" className="rounded-md px-3.5">
              <a href={profile.primaryCta.href}>{profile.primaryCta.label}</a>
            </Button>

            {profile.availability.available && (
              <a
                href={profile.availability.href}
                className="inline-flex h-8 items-center gap-2 rounded-md px-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 scale-90 rounded-full bg-emerald-500" />
                </span>
                <span>{profile.availability.label}</span>
              </a>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-2 inline-flex items-center gap-x-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <SocialIcon name={social.name} className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tilted Photo Marquee */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <Marquee className="py-3">
          <MarqueeFade
            side="left"
            className="pointer-events-none w-1/4 sm:w-1/3 from-background"
          />
          <MarqueeFade
            side="right"
            className="pointer-events-none w-1/4 sm:w-1/3 from-background"
          />
          <MarqueeContent pauseOnHover speed={35} autoFill>
            {gallery.map((image, index) => (
              <MarqueeItem
                key={image.src}
                className="mx-4 sm:mx-6 py-3"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={234}
                  height={234}
                  loading="lazy"
                  className={cn(
                    "size-44 sm:size-58.5 rounded-lg aspect-square object-cover shadow-md border border-border/40 transition-transform duration-300 hover:scale-[1.03]",
                    index % 2 === 0 ? "-rotate-2" : "rotate-2"
                  )}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
