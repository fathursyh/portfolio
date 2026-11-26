"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { faq } = portfolioData;
  const [activeCategoryId, setActiveCategoryId] = useState(
    faq.categories[0].id
  );
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const activeCategory =
    faq.categories.find((c) => c.id === activeCategoryId) ?? faq.categories[0];

  const handleTabChange = (id: string) => {
    setActiveCategoryId(id);
    setOpenQuestion(null);
  };

  return (
    <section
      id="faq"
      tabIndex={-1}
      className="pb-16 sm:pb-24 focus-visible:outline-none"
    >
      <div className="mb-6">
        <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-foreground">
          {faq.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{faq.description}</p>
      </div>

      {/* Category Tabs */}
      <div
        role="tablist"
        aria-label="FAQ Categories"
        className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-4"
      >
        {faq.categories.map((category) => {
          const isActive = category.id === activeCategory.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`faq-tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`faq-panel-${category.id}`}
              onClick={() => handleTabChange(category.id)}
              className={cn(
                "flex-1 min-w-fit rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Accordion Items */}
      <div
        role="tabpanel"
        id={`faq-panel-${activeCategory.id}`}
        aria-labelledby={`faq-tab-${activeCategory.id}`}
        className="flex flex-col gap-2"
      >
        {activeCategory.items.map((item) => {
          const isOpen = openQuestion === item.question;
          const panelId = `faq-answer-${activeCategory.id}-${item.question
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <div
              key={item.question}
              className="rounded-lg bg-muted/50 overflow-hidden transition-colors"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenQuestion(isOpen ? null : item.question)
                }
                className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm sm:text-base font-medium text-foreground hover:bg-muted/80 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              >
                <span>{item.question}</span>
                <Plus
                  aria-hidden="true"
                  className={cn(
                    "size-4 sm:size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-135 text-foreground"
                  )}
                />
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  className="px-4 pb-4 pt-0.5 text-sm text-muted-foreground leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
