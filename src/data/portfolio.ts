import type { ImageMetadata } from "astro";
import { withBase } from "@/lib/utils";
import sakalaImg from "@/assets/projects/software/sakala.png";
import fahpImg from "@/assets/projects/software/f-ahp.png";
import financeImg from "@/assets/projects/software/finance.jpg";
import pmImg from "@/assets/projects/pm/event-ghp.jpg";
import cyberImg from "@/assets/projects/cyber/iso.jpg";
import vueCert from "@/assets/certificates/vue-certificate.jpg";
import reactCert from "@/assets/certificates/react-certificate.jpg";
import ibmCert from "@/assets/certificates/ibm-certificate.jpg";

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

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  period: string;
  tags: string[];
  image: {
    src: ImageMetadata;
    alt: string;
  };
  liveUrl?: string;
  repoUrl?: string;
}

export interface CertificateItem {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
  skills: string[];
  credentialUrl?: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
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
    { label: "Projects", href: withBase("/projects") },
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

  projects: {
    title: "Projects",
    description:
      "Selected works across software engineering, project management, and cybersecurity.",
    categories: [
      {
        id: "software-engineer" as ProjectCategory,
        label: "Software Engineer",
        description:
          "Production web applications, type-safe APIs, and scalable front-end systems.",
      },
      {
        id: "project-manager" as ProjectCategory,
        label: "Project Manager",
        description:
          "Agile delivery, stakeholder alignment, and cross-functional product execution.",
      },
      {
        id: "cybersecurity" as ProjectCategory,
        label: "Cybersecurity",
        description:
          "Security audits, compliance readiness, and application hardening.",
      },
    ],
    items: [
      {
        slug: "sakala-mrv",
        title: "Sakala MRV",
        tagline: "End-to-end type-safe full-stack architecture",
        description:
          "Designed and engineered a structured Measurement, Reporting, and Verification platform with strong type-safety from database schema to UI components.",
        category: "software-engineer",
        categoryLabel: "Software Engineer",
        period: "2025",
        tags: ["React", "TypeScript", "AdonisJS", "PostgreSQL"],
        image: {
          src: sakalaImg,
          alt: "Sakala MRV software engineering project preview",
        },
      },
      {
        slug: "fuzzy-ahp-dss",
        title: "Fuzzy AHP Decision System",
        tagline: "Multi-criteria decision support web application",
        description:
          "Built an interactive decision-support platform implementing the Fuzzy Analytic Hierarchy Process for weighted criteria scoring and transparent ranking.",
        category: "software-engineer",
        categoryLabel: "Software Engineer",
        period: "2025",
        tags: ["Vue", "Laravel", "PostgreSQL", "Tailwind CSS"],
        image: {
          src: fahpImg,
          alt: "Fuzzy AHP Decision System application preview",
        },
      },
      {
        slug: "personal-finance-tracker",
        title: "Personal Finance Dashboard",
        tagline: "Real-time budgeting and cash-flow analytics",
        description:
          "Developed a responsive finance workspace for tracking multi-category budgets, recurring transactions, and monthly cash-flow trends.",
        category: "software-engineer",
        categoryLabel: "Software Engineer",
        period: "2024",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
        image: {
          src: financeImg,
          alt: "Personal Finance Dashboard interface preview",
        },
      },
      // {
      //   slug: "eventspace-ticketing",
      //   title: "Eventsp",
      //   tagline: "Multi-tenant storefront & order management API",
      //   description:
      //     "Placeholder software engineering project showcasing modular domain services, real-time inventory updates, and role-based admin dashboards.",
      //   category: "software-engineer",
      //   categoryLabel: "Software Engineer",
      //   period: "2024",
      //   tags: ["Angular", "MongoDB", "Firebase", "Node.js"],
      //   image: {
      //     src: sakalaImg,
      //     alt: "Modular Commerce Engine placeholder preview",
      //   },
      // },
      {
        slug: "eventspace-ticketing",
        title: "EventSpace Ticketing",
        tagline: "Agile, cross-functional roadmap & milestone launch",
        description:
          "Led product discovery, sprint ceremonies, and release milestones across engineering and design teams to ship a reliable event ticketing experience on schedule.",
        category: "project-manager",
        categoryLabel: "Project Manager",
        period: "2026",
        tags: ["Agile", "Scrum", "Roadmapping", "Release Management"],
        image: {
          src: pmImg,
          alt: "EventSpace Ticketing project management preview",
        },
      },
      {
        slug: "iso-27001",
        title: "Software ISO 27001 Audit",
        tagline: "Automated hardening & vulnerability checks",
        description:
          "Performed application security reviews, access-control validation, and automated vulnerability scanning aligned with ISO/IEC 27001 security controls.",
        category: "cybersecurity",
        categoryLabel: "Cybersecurity",
        period: "2025",
        tags: ["ISO 27001", "OWASP", "AppSec", "Security Hardening"],
        image: {
          src: cyberImg,
          alt: "Software ISO 27001 audit preview",
        },
      },
    ] as ProjectItem[],
  },

  certificates: {
    title: "Certificates",
    description:
      "Verified course from software engineering, cybersecurity, and project manager related.",
    items: [
      {
        slug: "vue-certificate",
        title: "Vue Certificate",
        issuer: "Udemy",
        date: "2025",
        summary:
          "Vue complete guide from options, to composition api. Using store like pinia, and vue router.",
        skills: ["Vue", "Node.js", "Firebase"],
        credentialUrl: "https://www.udemy.com/certificate/UC-b26dccd3-aa5e-4fe2-8edb-b4500aad09ea/",
        image: {
          src: vueCert,
          alt: "Vue certificate",
        },
      },
      {
        slug: "react-certificate",
        title: "React Certificate",
        issuer: "Udemy",
        date: "2025",
        summary:
          "React complete guide covering hooks, state management, routing, and modern component patterns.",
        skills: ["React", "TypeScript", "Next.js"],
        credentialUrl: "https://www.udemy.com/certificate/UC-02769f95-fed5-4898-9e35-68a37ead80b9",
        image: {
          src: reactCert,
          alt: "React certificate",
        },
      },
      {
        slug: "ibm-certificate",
        title: "IBM Certificate",
        issuer: "IBM",
        date: "2025",
        summary:
          "IBM certification intro for utilizing IBM Bob for software development workflows.",
        skills: ["Cybersecurity", "Cloud", "Systems"],
        credentialUrl: "#",
        image: {
          src: ibmCert,
          alt: "IBM certificate",
        },
      },
    ] as CertificateItem[],
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
        url: "https://www.sakala.cloud",
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
              "I offer design system architecture, and full stack end-to-end development using NodeJS, and PHP.",
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
              "A landing page or marketing site usually takes a month, while full web applications or comprehensive systems range from 3-6 months.",
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
              "I prefer frameworks where type safety is the first class. No favorites, I choose stack based on the best tool for the job.",
          },
          {
            question: "Are you open to remote collaboration?",
            answer:
              "Absolutely. I collaborate asynchronously and across time zones with clients and engineering teams worldwide.",
          },
          {
            question: "Why am I the most suitable for your team?",
            answer:
              "I catch things really fast, I spot weaknesses early, and I say no to unreachable goals. You will not regret it.",
          },
        ],
      },
    ] satisfies FaqCategory[],
  },

  footer: {
    copyright: "Built with Astro & React • © 2026 Fathursyah",
  },
};
