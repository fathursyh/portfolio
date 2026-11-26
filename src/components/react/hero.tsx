import { useEffect, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { SocialIcon } from "@/components/react/social-icons";
import { Button } from "@/components/ui/button";
import { portfolioData, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { GetImageResult } from "astro";

const categoryDotColor: Record<ProjectCategory, string> = {
  "software-engineer": "bg-rose-400",
  cybersecurity: "bg-emerald-400",
  "project-manager": "bg-blue-400",
};

interface HeroProps {
  ava: GetImageResult;
  projectImages?: Record<string, GetImageResult>;
}

const Hero = ({ ava, projectImages }: HeroProps) => {
  const { profile, socials, featuredProjects } = portfolioData;
  const { fetchpriority, ...avaAttributes } = ava.attributes;
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFocusPaused, setIsFocusPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handleChange = (event: MediaQueryListEvent) => {
      setIsPlaying(!event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="top"
      tabIndex={-1}
      className="relative flex flex-col gap-14 sm:gap-20 py-16 sm:py-24 lg:py-28 focus-visible:outline-none"
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

      {/* Featured Projects Marquee */}
      <div className="flex flex-col gap-6">
        <h2 className="sr-only">Featured Projects</h2>

        <div
          className="-mx-4 sm:-mx-6 lg:-mx-8"
          onFocus={() => setIsFocusPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsFocusPaused(false);
            }
          }}
        >
          <Marquee className="py-5">
            <MarqueeFade
              side="left"
              className="pointer-events-none w-14 sm:w-28 from-background"
            />
            <MarqueeFade
              side="right"
              className="pointer-events-none w-14 sm:w-28 from-background"
            />
            <MarqueeContent
              play={isPlaying && !isFocusPaused}
              pauseOnHover
              speed={35}
              autoFill
            >
              {featuredProjects.items.map((project, index) => {
                const optimizedImage = projectImages?.[project.slug];
                const { fetchpriority: _fp, ...imgAttributes } =
                  optimizedImage?.attributes ?? {};

                return (
                  <MarqueeItem
                    key={project.slug}
                    className="mx-3.5 sm:mx-5 py-3"
                  >
                    <a
                      href={project.href}
                      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <article
                        className={cn(
                          "relative w-56 sm:w-64 aspect-5/4 overflow-hidden rounded-xl border border-border/50 bg-muted shadow-md motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.03] group-hover:rotate-0 group-focus-visible:scale-[1.03] group-focus-visible:rotate-0",
                          index % 2 === 0 ? "-rotate-2" : "rotate-2"
                        )}
                      >
                        <img
                          src={optimizedImage?.src ?? project.image.src.src}
                          {...imgAttributes}
                          alt={project.image.alt}
                          width={imgAttributes.width ?? 256}
                          height={imgAttributes.height ?? 205}
                          loading="lazy"
                          className="size-full aspect-5/4 object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/15"
                        />
                        <header className="absolute inset-0 flex flex-col justify-between p-3.5 text-left">
                          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-neutral-950/75 px-2.5 py-0.5 text-[11px] font-medium text-neutral-100 backdrop-blur-md">
                            <span
                              aria-hidden="true"
                              className={cn(
                                "size-1.5 shrink-0 rounded-full",
                                categoryDotColor[project.category]
                              )}
                            />
                            {project.categoryLabel}
                          </span>

                          <div>
                            <h3 className="text-sm font-semibold tracking-tight text-white line-clamp-1">
                              {project.title}
                            </h3>
                            <p className="mt-0.5 text-xs text-neutral-200/90 line-clamp-1" title={project.tagline}>
                              {project.tagline}
                            </p>
                          </div>
                        </header>
                      </article>
                    </a>
                  </MarqueeItem>
                );
              })}
            </MarqueeContent>
          </Marquee>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button
            asChild
            variant="outline"
            size="default"
            className="group rounded-md px-4"
          >
            <a href={featuredProjects.cta.href}>
              <span>{featuredProjects.cta.label}</span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={
              isPlaying ? "Pause project marquee" : "Play project marquee"
            }
            className="rounded-md text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="size-4" aria-hidden="true" />
            ) : (
              <Play className="size-4" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
