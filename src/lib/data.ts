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

export const projects = [
  {
    slug: "oneielts",
    title: "OneIELTS Web & Mobile Application",
    tags: "Design System · Web & Mobile App",
    image: "/images/home/project-designora.png",
  },
  {
    slug: "onepte",
    title: "OnePTE Web & Mobile Application",
    tags: "Design System · Web & Mobile App",
    image: "/images/home/project-beanfox.png",
  },
  {
    slug: "calldoc",
    title: "CallDoc Web & Mobile Application",
    tags: "Design System · Web & Mobile App",
    image: "/images/home/project-creativox.png",
  },
];

export const services = [
  {
    slug: "product-design",
    title: "Product Design",
    summary:
      "I design web and mobile apps from first idea to final handoff. That means user research, flows, wireframes, prototypes and clean UI your developers can actually build.",
    image: "/images/home/service-product-design.png",
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    summary:
      "I build Figma design systems that keep your product consistent and help your team ship faster: tokens, components and clear docs that designers and developers both use.",
    image: "/images/home/service-branding.png",
  },
  {
    slug: "branding",
    title: "Branding & Visual Identity",
    summary:
      "My roots are in graphic design. I create logos, colors, type and brand guidelines that give your product a clear and friendly personality.",
    image: "/images/home/service-website.png",
  },
  {
    slug: "website-design",
    title: "Website Design",
    summary:
      "I design landing pages and marketing sites in Webflow or Framer that look good, load fast and are easy for you to update yourself.",
    image: "/images/home/service-marketing.png",
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

export const articles = [
  {
    slug: "graphic-to-product-design",
    date: "Nov 12, 2026",
    readTime: "5 min read",
    title: "From graphic design to product design: what changed for me",
    summary:
      "The skills that carried over, the ones I had to learn from scratch, and what I’d tell anyone making the same switch.",
    image: "/images/home/article-1.png",
  },
  {
    slug: "design-system-from-scratch",
    date: "Oct 28, 2026",
    readTime: "5 min read",
    title: "Building a design system from scratch",
    summary:
      "How I planned, named and documented components so our team could design faster every day.",
    image: "/images/home/article-2.png",
  },
  {
    slug: "leading-a-design-team",
    date: "Oct 9, 2026",
    readTime: "5 min read",
    title: "What I learned leading a team of 4 designers",
    summary:
      "Giving feedback, sharing work fairly and keeping quality high without becoming a bottleneck.",
    image: "/images/home/article-3.png",
  },
];
