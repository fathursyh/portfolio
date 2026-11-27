"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function AuthorAvatar({ src, name }: { src?: string; name: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    src ? "loading" : "error"
  );

  useEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    const img = imgRef.current;
    if (img?.complete) {
      setStatus(img.naturalWidth > 0 ? "loaded" : "error");
    } else {
      setStatus("loading");
    }
  }, [src]);

  return (
    <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted ring-1 ring-border">
      {status === "loading" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-full bg-muted-foreground/20"
        />
      )}

      {status === "error" ? (
        <span
          aria-label={name}
          className="text-xs font-medium text-muted-foreground select-none"
        >
          {getInitials(name)}
        </span>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={name}
          referrerPolicy="no-referrer"
          width={40}
          height={40}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "size-full object-cover transition-opacity duration-200",
            status === "loaded" ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}

export function Testimonials() {
  const { testimonials } = portfolioData;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const wrapped = (index + testimonials.length) % testimonials.length;
    setActiveIndex(wrapped);
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollTo({
      left: wrapped * track.clientWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    if (
      nextIndex >= 0 &&
      nextIndex < testimonials.length &&
      nextIndex !== activeIndex
    ) {
      setActiveIndex(nextIndex);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }
  };

  return (
    <section
      id="testimonials"
      tabIndex={-1}
      className="pb-20 sm:pb-28 focus-visible:outline-none"
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
      >
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 bg-muted/40 border-y border-border/60">
          {/* Swipeable / Scroll-Snap Carousel Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.author.name}
                role="tabpanel"
                aria-roledescription="slide"
                aria-label={`Testimonial ${idx + 1} of ${testimonials.length}`}
                className="w-full shrink-0 snap-center px-6 sm:px-14 lg:px-20 py-12"
              >
                <div className="mx-auto max-w-2xl text-center">
                  <blockquote className="relative text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="select-none text-4xl sm:text-5xl font-serif leading-none text-muted-foreground/40 mr-1 align-top"
                    >
                      &ldquo;
                    </span>
                    {item.quote}
                    <span
                      aria-hidden="true"
                      className="select-none text-4xl sm:text-5xl font-serif leading-none text-muted-foreground/40 ml-1 align-bottom"
                    >
                      &rdquo;
                    </span>
                  </blockquote>

                  <div className="mt-8 flex items-center justify-center gap-3">
                    <AuthorAvatar
                      src={item.author.avatar}
                      name={item.author.name}
                    />

                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">
                        {item.author.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Prev / Next Controls */}
          {testimonials.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goToSlide(activeIndex - 1)}
                className="hidden sm:inline-flex items-center justify-center absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 size-9 rounded-full border border-border/60 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goToSlide(activeIndex + 1)}
                className="hidden sm:inline-flex items-center justify-center absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 size-9 rounded-full border border-border/60 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Dot Navigation */}
        <div
          role="tablist"
          aria-label="Choose testimonial slide"
          className="mt-6 flex items-center justify-center gap-2.5"
        >
          {testimonials.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.author.name}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Show testimonial from ${item.author.name}`}
                onClick={() => goToSlide(idx)}
                className={cn(
                  "size-2.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected
                    ? "bg-foreground"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
