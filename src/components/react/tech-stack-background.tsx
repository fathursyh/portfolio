import { cn } from "@/lib/utils";

interface StackLogoItem {
  name: string;
  positionClass: string;
  sizeClass: string;
  icon: React.ReactNode;
}

const stackLogos: StackLogoItem[] = [
  // Left arc
  {
    name: "Vue",
    positionClass: "top-4 left-2 sm:top-4 sm:left-8 lg:left-12",
    sizeClass: "size-10 sm:size-12",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" fill="currentColor" aria-hidden="true">
        <path d="M2 3h4.2L12 13.1 17.8 3H22L12 20.5 2 3zm5.8 0L12 10.2 16.2 3h-2.8L12 5.5 10.6 3H7.8z" />
      </svg>
    ),
  },
  {
    name: "React",
    positionClass: "top-22 -left-1 sm:top-24 sm:left-2 lg:left-4",
    sizeClass: "size-11 sm:size-13",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Angular",
    positionClass: "top-42 left-3 sm:top-44 sm:left-10 lg:left-16",
    sizeClass: "size-9 sm:size-11",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4.5 sm:size-5.5" fill="currentColor" aria-hidden="true">
        <path d="M12 2 3 5.2l1.4 11.7L12 22l7.6-5.1L21 5.2 12 2zm0 2.7 4.7 10.6h-1.8l-1-2.5h-3.8l-1 2.5H7.3L12 4.7zm0 3.7-1.3 3h2.6L12 8.4z" />
      </svg>
    ),
  },
  {
    name: "Laravel",
    positionClass: "bottom-20 -left-1 sm:bottom-18 sm:left-2 lg:left-5",
    sizeClass: "size-10 sm:size-12",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5.5 8 3.5l4 2v7l4-2 4 2v4.5l-8 4-4-2-4-2V5.5z" />
        <path d="M4 5.5 8 7.5l4-2M8 7.5v11.5M12 12.5l4 2 4-2M16 14.5V19" />
      </svg>
    ),
  },
  {
    name: "AdonisJS",
    positionClass: "bottom-2 left-4 sm:bottom-2 sm:left-14 lg:left-20",
    sizeClass: "size-9 sm:size-11",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4.5 sm:size-5.5" fill="currentColor" aria-hidden="true">
        <path d="M13.6 3.2 4.5 19.5h4.3l4.8-8.7 2.5 4.6h-2.9l-1.9 4.1h8.8L13.6 3.2z" />
      </svg>
    ),
  },

  // Right arc
  {
    name: "Next.js",
    positionClass: "top-4 right-2 sm:top-4 sm:right-8 lg:right-12",
    sizeClass: "size-10 sm:size-12",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="9.2" />
        <path d="M9 15.5v-7l8.2 10.6M15.2 8.5v4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    positionClass: "top-22 -right-1 sm:top-24 sm:right-2 lg:right-4",
    sizeClass: "size-11 sm:size-13",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7" ry="3" />
        <path d="M5 6.5v11c0 1.66 3.13 3 7 3s7-1.34 7-3v-11" />
        <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    positionClass: "top-42 right-3 sm:top-44 sm:right-10 lg:right-16",
    sizeClass: "size-9 sm:size-11",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4.5 sm:size-5.5" fill="currentColor" aria-hidden="true">
        <path d="M12.4 2.2c-.2-.3-.6-.3-.8 0C9.4 5.2 6.8 8.9 6.8 13.2c0 3.3 2 5.9 4.7 7v1.6h1v-1.6c2.7-1.1 4.7-3.7 4.7-7 0-4.3-2.6-8-4.8-11zm-.4 16.5V7.5c.3 3.2.5 7.4 0 11.2z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    positionClass: "bottom-20 -right-1 sm:bottom-18 sm:right-2 lg:right-5",
    sizeClass: "size-10 sm:size-12",
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 sm:size-5.5" fill="currentColor" aria-hidden="true">
        <path d="M13.3 21.4c-.6.7-1.8.3-1.8-.7V13h7.3c1 0 1.5 1.1.9 1.9l-6.4 6.5zM10.7 2.6c.6-.7 1.8-.3 1.8.7V11H5.2c-1 0-1.5-1.1-.9-1.9l6.4-6.5z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    positionClass: "bottom-2 right-4 sm:bottom-2 sm:right-14 lg:right-20",
    sizeClass: "size-9 sm:size-11",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4.5 sm:size-5.5" fill="currentColor" aria-hidden="true">
        <path d="M5.4 17.5 8.1 3.7c.1-.6.9-.7 1.2-.2l2.9 5.5 2.4-2.3c.5-.5 1.3-.2 1.4.4l2.6 10.4-6.4 3.7a1 1 0 0 1-1 0l-5.8-3.7z" />
      </svg>
    ),
  },
];

export function TechStackBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
    >
      {stackLogos.map((stack) => (
        <span
          key={stack.name}
          title={stack.name}
          className={cn(
            "absolute inline-flex items-center justify-center rounded-full border border-border/70 bg-muted/50 text-foreground/45 dark:bg-muted/35 dark:text-foreground/35 opacity-35 sm:opacity-55 shadow-xs backdrop-blur-[2px]",
            stack.positionClass,
            stack.sizeClass
          )}
        >
          {stack.icon}
        </span>
      ))}
    </div>
  );
}

export default TechStackBackground;
