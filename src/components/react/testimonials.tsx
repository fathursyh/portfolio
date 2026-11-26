"use client";

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
          loading="lazy"
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const current = testimonials[activeIndex];

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
        className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
      >
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 bg-muted/40 border-y border-border/60 px-6 sm:px-12 lg:px-16 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="relative text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
              <span
                aria-hidden="true"
                className="select-none text-4xl sm:text-5xl font-serif leading-none text-muted-foreground/40 mr-1 align-top"
              >
                &ldquo;
              </span>
              {current.quote}
              <span
                aria-hidden="true"
                className="select-none text-4xl sm:text-5xl font-serif leading-none text-muted-foreground/40 ml-1 align-bottom"
              >
                &rdquo;
              </span>
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-3">
              <AuthorAvatar
                key={current.author.avatar || current.author.name}
                src={current.author.avatar}
                name={current.author.name}
              />

              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {current.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {current.author.role}
                </p>
              </div>
            </div>
          </div>
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
                onClick={() => setActiveIndex(idx)}
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
