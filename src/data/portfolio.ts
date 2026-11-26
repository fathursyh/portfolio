import type { ImageMetadata } from "astro";
import { withBase } from "@/lib/utils";
import sakalaImg from "@/assets/projects/software/sakala.png";
import pmImg from "@/assets/projects/pm/event-ghp.jpg";
import cyberImg from "@/assets/projects/cyber/iso.jpg";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: "github" | "linked" | "discord";
  label: string;
  href: string;
}

export type ProjectCategory =
  | "software-engineer"
  | "cybersecurity"
  | "project-manager";

export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
  href: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  url: string;
  accentColor: string;
}

export interface ArticleItem {
  title: string;
  description: string;
  date: string;
  isoDate: string;
  href: string;
}

export interface TestimonialItem {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface FaqCategory {
  id: string;
  label: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const portfolioData = {
  profile: {
    name: "Fathursyah",
    bio: "I make your system robust, secure, and satisfactory functional in the long run. I believe in the meaning of what I made.",
    primaryCta: {
      label: "Get in touch",
      href: "mailto:fathur.syah1@gmail.com",
    },
    availability: {
      available: true,
      label: "Available for new projects",
      href: "#faq",
    },
  },

  navLinks: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Articles", href: "#articles" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ] satisfies NavLink[],

  socials: [
    {
      name: "discord",
      label: "Discord",
      href: "https://discord.com",
    },
    {
      name: "linked",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fathursyah-awandanu-85072b236",
    },
    {
      name: "github",
      label: "GitHub",
      href: "https://github.com/fathursyh",
    },
  ] satisfies SocialLink[],

  featuredProjects: {
    cta: {
      label: "More Projects",
      href: withBase("/projects"),
    },
    items: [
      {
        slug: "sakala-mrv",
        title: "Sakala MRV",
        tagline: "End-to-end type-safe full-stack architecture",
        category: "software-engineer",
        categoryLabel: "Software Engineer",
        image: {
          src: sakalaImg,
          alt: "Sakala MRV software engineering project preview",
        },
        href: withBase("/projects#software-engineer"),
      },
      {
        slug: "iso-27001",
        title: "Software ISO 27001 Audit",
        tagline: "Automated hardening & vulnerability checks",
        category: "cybersecurity",
        categoryLabel: "Cybersecurity",
        image: {
          src: cyberImg,
          alt: "Software ISO 27001 audit",
        },
        href: withBase("/projects#cybersecurity"),
      },
      {
        slug: "eventspace-ticketing",
        title: "EventSpace Ticketing",
        tagline: "Agile, cross-functional roadmap & milestone launch",
        category: "project-manager",
        categoryLabel: "Project Manager",
        image: {
          src: pmImg,
          alt: "EventSpace Ticketing project management preview",
        },
        href: withBase("/projects#project-manager"),
      },
    ] satisfies FeaturedProject[],
  },

  about: {
    title: "About Me",
    paragraphs: [
      "As a software engineer, I focus on building fast, accessible, and visually refined web applications that balance aesthetic clarity with practical usability.",
      "My approach blends boring yet structured workflow of developing software and cleverly securing the system from inside and out.",
      "I also maintain a strong, active interest in Cybersecurity, ensuring that the applications I architect and manage aren't just highly functional, but resilient and secure by design.",
    ],
  },

  experience: {
    title: "Work Experience",
    items: [
      {
        period: "2026 - Present",
        role: "Project Manager at",
        company: "EventSpace",
        url: "#",
        accentColor: "#10b981",
      },
      {
        period: "2025 - Present",
        role: "Software Engineer at",
        company: "Dassa Corp.",
        url: "https://dassacorp.com/team/fathursyah-awandanu",
        accentColor: "#f43f5e",
      },
      {
        period: "2024-2025",
        role: "Software Engineer at",
        company: "iGIS Lab Pakuan",
        url: "https://www.google.com/search?q=igis+lab+pakuan",
        accentColor: "#6366f1",
      },
    ] satisfies ExperienceItem[],
  },

  articles: {
    title: "Latest Articles",
    description: "Some of my recent thoughts",
    items: [
      {
        title: "From Mockup to Market: My End-to-End Product Process",
        description:
          "A breakdown of my iterative design and engineering workflow, from initial wireframes to production deployment, with practical tips at every stage.",
        date: "Apr 23, 2025",
        isoDate: "2025-04-23",
        href: "#articles",
      },
      {
        title: "The Psychology of Color in UI Design",
        description:
          "Exploring how strategic color choices influence user behavior, establish visual hierarchy, and improve accessibility across light and dark themes.",
        date: "Mar 15, 2025",
        isoDate: "2025-03-15",
        href: "#articles",
      },
      {
        title: "How I Built My Own Component System from Scratch",
        description:
          "A practical guide to organizing tokens, accessible primitives, and reusable UI blocks with Astro, React, and Tailwind CSS.",
        date: "Mar 5, 2025",
        isoDate: "2025-03-05",
        href: "#articles",
      },
    ] satisfies ArticleItem[],
  },

  testimonials: [
    {
      quote:
        "Working together completely transformed our product. I learned a lot from him about frontend visually, and performance wise. A great partner to exchange knowledge in this line of work.",
      author: {
        name: "Naufal Alwi Pratama",
        role: "Mobile Developer at PT. Sumber Global Wahana",
        avatar:
          "https://media.licdn.com/dms/image/v2/D5603AQFqqrW2g5thpg/profile-displayphoto-scale_200_200/B56Z3IJNPjIQAc-/0/1777179352624?e=2147483647&v=beta&t=Mug2nE7ojgb52eZ8LsMbTAvr_RPoB5DjhYK4fKP8kAo",
      },
    },
    {
      quote:
        "Bringing them onto the team was one of our best decisions. A rapid adaptation to the system, software fundamentals, and meaningful contributions to every stage of development.",
      author: {
        name: "Iqbal Zulfikar",
        role: "IT Specialist at PT. Merdeka Sejahtera Persada",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThs-HXbmbFtJLFSRkKHVD0wzv5S7AtBDD6YhFHN6nFw&s=10",
      },
    },
    {
      quote:
        "They stand out in translating complex product requirements into strong systems. Every milestone was delivered with both creative polish and analytical rigor.",
      author: {
        name: "Leo Wibowo",
        role: "Deputy Head of Technical at PT. Merdeka Sejahtera Persada",
        avatar:
          "https://dassacorp.com/wp-content/uploads/2025/03/Leo-Wibowo-S-N.webp",
      },
    },
  ] satisfies TestimonialItem[],

  faq: {
    title: "Frequently Asked Questions",
    description: "Answers to common questions about my process and services.",
    categories: [
      {
        id: "services",
        label: "Services & Process",
        items: [
          {
            question: "What services do you offer?",
            answer:
              "I offer design system architecture, and full front-end development using React, Vue, and Angular.",
          },
          {
            question: "What is your design & build process like?",
            answer:
              "Every project starts with discovery and alignment on goals, followed by wireframes, high-fidelity interactive prototypes, and iterative production implementation with regular check-ins.",
          },
          {
            question: "Do you work with startups?",
            answer:
              "Yes! I enjoy partnering with early-stage teams to ship focused MVPs quickly, as well as established companies looking to modernize their interface or component library.",
          },
        ],
      },
      {
        id: "pricing",
        label: "Pricing & Timelines",
        items: [
          {
            question: "How do you structure project pricing?",
            answer:
              "I work on either fixed-scope project milestones or monthly retainers depending on your team's needs and roadmap clarity.",
          },
          {
            question: "How long does a typical project take?",
            answer:
              "A landing page or marketing site usually takes 1–3 weeks, while full web applications or comprehensive design systems range from 4-8 weeks.",
          },
          {
            question: "When are you available to start?",
            answer:
              "I am currently booking new projects for the upcoming month. Feel free to reach out via email to lock in a kickoff date.",
          },
        ],
      },
      {
        id: "about",
        label: "About Me",
        items: [
          {
            question: "What tech stack do you prefer?",
            answer:
              "I specialize in typesafety frameworks such as Tanstack Start, and AdonisJS. No favorites, I choose stack based on the best tool for the job.",
          },
          {
            question: "Are you open to remote collaboration?",
            answer:
              "Absolutely. I collaborate asynchronously and across time zones with clients and engineering teams worldwide.",
          },
        ],
      },
    ] satisfies FaqCategory[],
  },

  footer: {
    copyright: "Built with Astro & React • © 2026 Fathursyah",
  },
};
