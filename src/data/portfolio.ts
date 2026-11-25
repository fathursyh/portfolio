export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: "github" | "linked" | "discord";
  label: string;
  href: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
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

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=640&auto=format&fit=crop",
      alt: "Workspace code preview",
    },
    {
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=640&auto=format&fit=crop",
      alt: "Interface design mockup",
    },
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=640&auto=format&fit=crop",
      alt: "Laptop on minimal desk",
    },
    {
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=640&auto=format&fit=crop",
      alt: "Color palette and branding exploration",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=640&auto=format&fit=crop",
      alt: "Front-end engineering setup",
    },
    {
      src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=640&auto=format&fit=crop",
      alt: "Design system wireframe sketches",
    },
  ] satisfies GalleryImage[],

  about: {
    title: "About Me",
    paragraphs: [
      "As a software engineer, I focus on building fast, accessible, and visually refined web applications that balance aesthetic clarity with practical usability.",
      "My approach blends boring yet structured workflow of developing software and cleverly securing the system from inside and out.",
    ],
  },

  experience: {
    title: "Work Experience",
    items: [
      {
        period: "2026 - Present",
        role: "Project Manager at",
        company: "EventSpace",
        url: "https://example.com",
        accentColor: "#10b981",
      },
      {
        period: "2025 - Present",
        role: "Software Engineer at",
        company: "Dassa Corp.",
        url: "https://example.com",
        accentColor: "#f43f5e",
      },
      {
        period: "2024-2025",
        role: "Software Engineer at",
        company: "iGIS Lab Pakuan",
        url: "https://example.com",
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
        "Working together completely transformed our product. There is a rare balance of sharp visual aesthetics and functional simplicity—our redesign looked better and noticeably improved conversion across key flows.",
      author: {
        name: "Naufal Alwi Pratama",
        role: "Mobile Developer at Bloom Finance",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=96&h=96&q=80",
      },
    },
    {
      quote:
        "Bringing them onto our startup was one of our best decisions. Instead of only delivering static mockups, they challenged assumptions, prototyped interactions quickly, and made engineering handoff seamless.",
      author: {
        name: "Iqbal Zulfikar",
        role: "IT Specialist at Dassa Corp",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=96&h=96&q=80",
      },
    },
    {
      quote:
        "They stand out in translating complex product requirements into intuitive interfaces. Every milestone was delivered with both creative polish and analytical rigor.",
      author: {
        name: "Leo Wibowo",
        role: "Deputy Head of Technical",
        avatar:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=2&w=96&h=96&q=80",
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
