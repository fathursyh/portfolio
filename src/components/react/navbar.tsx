"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeHref, setActiveHref] = useState("#top");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  };

  return (
    <div className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-30">
      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-1 bg-background/80 dark:bg-muted/80 backdrop-blur-md rounded-full px-2 sm:px-3.5 py-1.5 border border-border/70 shadow-lg shadow-neutral-950/5"
      >
        <ul className="flex items-center">
          {portfolioData.navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div aria-hidden="true" className="mx-1 h-4 w-px bg-border" />

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="inline-flex items-center justify-center rounded-full p-1.5 text-foreground hover:bg-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {isDark ? (
            <Moon className="size-4" aria-hidden="true" />
          ) : (
            <Sun className="size-4" aria-hidden="true" />
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
