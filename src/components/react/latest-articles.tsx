import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function LatestArticles() {
  const { articles } = portfolioData;

  return (
    <section id="articles" className="pb-16 sm:pb-24">
      <div className="mb-8">
        <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-foreground">
          {articles.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {articles.description}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {articles.items.map((article) => (
          <article
            key={article.title}
            className="group relative flex flex-col rounded-lg transition-colors"
          >
            <a
              href={article.href}
              aria-label={article.title}
              className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <time
              dateTime={article.isoDate}
              className="text-xs sm:text-sm text-muted-foreground/80 mb-1.5"
            >
              {article.date}
            </time>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground text-pretty group-hover:text-foreground/90">
              {article.title}
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
              {article.description}
            </p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              <span>Read Article</span>
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 transition-all duration-200 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LatestArticles;
