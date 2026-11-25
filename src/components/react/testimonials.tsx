"use client";

import { useState, type KeyboardEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
    <section id="testimonials" className="pb-20 sm:pb-28">
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
              <img
                src={current.author.avatar}
                alt={current.author.name}
                width={40}
                height={40}
                loading="lazy"
                className="size-10 rounded-full object-cover bg-muted ring-1 ring-border"
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
