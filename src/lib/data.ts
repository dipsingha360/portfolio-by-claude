// Placeholder content taken from the Figma Home frame. Moves to MDX later.

export const site = {
  name: "Dip Singha",
  email: "dipsingha2@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/", icon: "/images/icons/instagram.svg" },
    { label: "Dribbble", href: "https://dribbble.com/", icon: "/images/icons/dribbble.svg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "/images/icons/linkedin.svg" },
    { label: "Email", href: "mailto:dipsingha2@gmail.com", icon: "/images/icons/mail.svg" },
  ],
};

// The prototype designs ONE detail page per type, and every card opens it, so
// all project/service/article addresses currently show the same content. Search
// engines are pointed at these main pages (canonical links and the sitemap)
// until each item has its own content.
export const primaryDetail = {
  project: "oneielts",
  service: "product-design",
  article: "graphic-to-product-design",
} as const;

export const projectFilters = [
  "All",
  "Product Design",
  "Design Systems",
  "Branding",
  "Website Design",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export const projects: {
  slug: string;
  title: string;
  tags: string;
  image: string;
  categories: Exclude<ProjectFilter, "All">[];
}[] = [
  {
    slug: "oneielts",
    title: "OneIELTS Web & Mobile Application",
    tags: "Design System · Web & Mobile App",
    image: "/images/home/project-designora.png",
    categories: ["Design Systems", "Product Design"],
  },
  {
    slug: "onepte",
    title: "OnePTE Web & Mobile Application",
    tags: "Design System · Web & Mobile App",
    image: "/images/home/project-beanfox.png",
    categories: ["Design Systems", "Product Design"],
  },
  {
    slug: "calldoc",
    title: "CallDoc Web & Mobile Application",
    tags: "Design System · Web & Mobile App",
    image: "/images/home/project-creativox.png",
    categories: ["Design Systems", "Product Design"],
  },
  {
    slug: "webilon",
    title: "[Project name]",
    tags: "Branding · Visual Identity",
    image: "/images/projects/webilon.png",
    categories: ["Branding"],
  },
  {
    slug: "monerva",
    title: "[Project name]",
    tags: "Website Design · Webflow",
    image: "/images/projects/monerva.png",
    categories: ["Website Design"],
  },
  {
    slug: "graphora",
    title: "[Project name]",
    tags: "Product Design · Web App",
    image: "/images/projects/graphora.png",
    categories: ["Product Design"],
  },
];

export const services = [
  {
    slug: "product-design",
    title: "Product Design",
    summary:
      "I design web and mobile apps from first idea to final handoff. That means user research, flows, wireframes, prototypes and clean UI your developers can actually build.",
    image: "/images/home/service-branding.png",
    get: ["User research", "User flows", "Wireframes", "Prototypes", "UI design", "Developer handoff"],
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    summary:
      "I build Figma design systems that keep your product consistent and help your team ship faster: tokens, components and clear docs that designers and developers both use.",
    image: "/images/home/service-product-design.png",
    get: ["Design tokens", "Component library", "Figma variables", "Documentation"],
  },
  {
    slug: "branding",
    title: "Branding & Visual Identity",
    summary:
      "My roots are in graphic design. I create logos, colors, type and brand guidelines that give your product a clear and friendly personality.",
    image: "/images/home/service-website.png",
    get: ["Logo", "Color and type", "Brand guidelines", "Social media templates"],
  },
  {
    slug: "website-design",
    title: "Website Design",
    summary:
      "I design landing pages and marketing sites in Webflow or Framer that look good, load fast and are easy for you to update yourself.",
    image: "/images/home/service-marketing.png",
    get: ["Landing pages", "Marketing sites", "Webflow or Framer", "Responsive layouts"],
  },
];

export const reviews = {
  rows: [
    {
      text: "[Real review goes here. 30 to 50 words on what Dip worked on, what improved because of it, and what working with him was like.]",
      name: "[Full name]",
      role: "[Role], [Company]",
      avatar: null as string | null,
      initials: "FN",
      video: "/images/home/video-0.png",
    },
    {
      text: "[Real review goes here. 30 to 50 words on what Dip worked on, what improved because of it, and what working with him was like.]",
      name: "[Full name]",
      role: "[Role], [Company]",
      avatar: "/images/home/avatar-rayyan-jackson.png" as string | null,
      initials: "RJ",
      video: "/images/home/video-1.png",
    },
  ],
};

export const faqs = [
  {
    q: "Are you open to full-time roles?",
    a: "Yes. I’m open to full-time product design roles with remote teams anywhere in the world. I also take on a small number of freelance projects at a time.",
  },
  { q: "Can you work with our wireframes or existing designs?", a: "" },
  { q: "What happens after I approve the design?", a: "" },
  { q: "Do you charge for extra revisions?", a: "" },
  { q: "I run an agency. Can I outsource work to you?", a: "" },
  { q: "What do you need from me to get started?", a: "" },
];

export const blogFilters = [
  "All",
  "Product Design",
  "Design Systems",
  "UX Writing",
  "Leadership",
  "Career",
] as const;
export type BlogFilter = (typeof blogFilters)[number];

export const articles: {
  slug: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  image: string;
  category: Exclude<BlogFilter, "All">;
}[] = [
  {
    slug: "graphic-to-product-design",
    date: "Nov 12, 2026",
    readTime: "6 min read",
    title: "From graphic design to product design: what changed for me",
    summary:
      "The skills that carried over, the ones I had to learn from scratch, and what I’d tell anyone making the same switch.",
    image: "/images/home/article-1.png",
    category: "Career",
  },
  {
    slug: "design-system-from-scratch",
    date: "Oct 28, 2026",
    readTime: "3 min read",
    title: "Building a design system from scratch",
    summary:
      "How I planned, named and documented components so our team could design faster every day.",
    image: "/images/home/article-2.png",
    category: "Design Systems",
  },
  {
    slug: "leading-a-design-team",
    date: "Oct 9, 2026",
    readTime: "3 min read",
    title: "What I learned leading a team of 4 designers",
    summary:
      "Giving feedback, sharing work fairly and keeping quality high without becoming a bottleneck.",
    image: "/images/home/article-3.png",
    category: "Leadership",
  },
  {
    slug: "ux-copy-as-a-designer",
    date: "Sep 24, 2026",
    readTime: "2 min read",
    title: "Writing UX copy as a designer",
    summary:
      "The simple rules I use for buttons, errors and empty states so screens are easier to use.",
    image: "/images/home/article-1.png",
    category: "UX Writing",
  },
  {
    slug: "usability-test-in-one-afternoon",
    date: "Sep 10, 2026",
    readTime: "2 min read",
    title: "How I run a usability test in one afternoon",
    summary:
      "A light way to test with 5 people, find the biggest problems and fix them before launch.",
    image: "/images/home/article-2.png",
    category: "Product Design",
  },
  {
    slug: "designing-ed-tech-for-test-takers",
    date: "Aug 27, 2026",
    readTime: "2 min read",
    title: "Designing ed-tech apps for test takers",
    summary:
      "What I learned designing for students who are stressed, short on time and mostly on their phones.",
    image: "/images/home/article-3.png",
    category: "Product Design",
  },
  {
    slug: "naming-components",
    date: "Aug 12, 2026",
    readTime: "2 min read",
    title: "Naming components so your team can find them",
    summary:
      "A naming system for Figma components that designers and developers both understand.",
    image: "/images/home/article-1.png",
    category: "Design Systems",
  },
];
