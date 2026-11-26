"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn, withBase } from "@/lib/utils";

interface NavbarProps {
  currentPath?: string;
}

export function Navbar({ currentPath = "/" }: NavbarProps) {
  const isHome = currentPath === "/";
  const [activeHref, setActiveHref] = useState(
    isHome ? "#top" : withBase(currentPath)
  );
  const [usesNativeScrollspy, setUsesNativeScrollspy] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const anchorLinks = portfolioData.navLinks.filter((link) =>
      link.href.startsWith("#")
    );

    if (CSS.supports("scroll-target-group: auto")) {
      setUsesNativeScrollspy(true);

      const syncAriaCurrent = () => {
        const currentLink = navListRef.current?.querySelector<HTMLAnchorElement>(
          "a:target-current"
        );
        const href = currentLink?.getAttribute("href");
        if (href) {
          setActiveHref(href);
        }
      };

      syncAriaCurrent();
      document.addEventListener("scrollend", syncAriaCurrent);
      window.addEventListener("hashchange", syncAriaCurrent);

      return () => {
        document.removeEventListener("scrollend", syncAriaCurrent);
        window.removeEventListener("hashchange", syncAriaCurrent);
      };
    }

    const sections = anchorLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    const handleBoundaryScroll = () => {
      if (window.scrollY <= 16) {
        setActiveHref(anchorLinks[0].href);
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 16
      ) {
        setActiveHref(anchorLinks[anchorLinks.length - 1].href);
      }
    };

    window.addEventListener("scroll", handleBoundaryScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleBoundaryScroll);
    };
  }, [isHome]);

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
        <ul
          ref={navListRef}
          className={cn("flex items-center", isHome && "nav-scrollspy")}
        >
          {portfolioData.navLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const resolvedHref =
              !isHome && isAnchor ? withBase(`/${link.href}`) : link.href;
            const isActive = isHome
              ? activeHref === link.href
              : link.href === withBase(currentPath);

            return (
              <li key={link.href}>
                <a
                  href={resolvedHref}
                  aria-current={
                    isActive ? (isHome ? "true" : "page") : undefined
                  }
                  onClick={() => {
                    if (isHome && isAnchor) {
                      setActiveHref(link.href);
                    }
                  }}
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive &&
                      (!isHome || !usesNativeScrollspy) &&
                      "target-current bg-accent/80",
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
