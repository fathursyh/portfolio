import { portfolioData } from "@/data/portfolio";

export function AboutExperience() {
  const { about, experience } = portfolioData;

  return (
    <section
      id="about"
      tabIndex={-1}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 pb-16 sm:pb-24 focus-visible:outline-none"
    >
      {/* About Me */}
      <div>
        <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-foreground">
          {about.title}
        </h2>
        <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed text-balance">
          {about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-foreground">
          {experience.title}
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {experience.items.map((item) => (
            <div
              key={`${item.period}-${item.company}`}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <span className="shrink-0 tabular-nums">{item.period}</span>
              <div
                role="separator"
                aria-orientation="horizontal"
                className="flex-1 border-t border-border"
              />
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 shrink-0 rounded-md hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="hidden sm:inline">{item.role}</span>
                <span
                  className="inline-flex items-center gap-1 font-medium"
                  style={{ color: item.accentColor }}
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  {item.company}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutExperience;
