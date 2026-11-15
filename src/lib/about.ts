// Content from the Figma "About" frame.
// Text in [square brackets] is placeholder copy in the design, kept as-is.

// Company marks for the "My journey" rows. Logo files from Dip: the glass shape
// is Aditio and the red diamond is LiiLab. Until the files are added to
// public/images/companies/, an initial badge is shown; set `logo` to use the image.
const liilab = { initials: "L" /* logo: "/images/companies/liilab.png" */ };
const aditio = { initials: "A" /* logo: "/images/companies/aditio.png" */ };

export const about = {
  hero: {
    eyebrow: "About me",
    title: "Hi, I’m Dip.",
    lead: "A product designer who started in graphic design and now leads a small team building ed-tech apps for web and mobile.",
    text: "I care about one thing most: making products that feel simple to the people using them. Based in Bangladesh, working with teams worldwide.",
    image: "/images/home/portrait.png",
  },
  facts: [
    { value: "3+", label: "Years designing digital products" },
    { value: "4", label: "Designers on the team I lead" },
    { value: "2", label: "Platforms I design for: web and mobile" },
  ],
  story: {
    caption: "01  ·  My story",
    title: "From posters to products.",
    paragraphs: [
      "I started out as a graphic designer, making posters, social media posts and brand assets. I loved it, but I kept wondering what happened after people saw my work. Did it actually help them?",
      "That question pulled me into product design. For the last 3 years, I’ve designed ed-tech products for web and mobile, used by students preparing for English tests. Today I lead a team of 4 designers and look after our design system.",
      "My degree in Computer Science and Engineering helps me speak the same language as developers. I know enough HTML, CSS and React to understand what’s easy to build and what isn’t.",
    ],
  },
  journey: {
    title: "My journey",
    intro: "The short version of how I got here.",
    rows: [
      {
        number: "Jan 2024 to now",
        title: "Design Team Lead",
        duration: "LiiLab",
        company: liilab,
        description:
          "Leading a team of 4 designers, setting design direction and building our design system for web and mobile.",
        deliverables: "Team leadership, design systems, design reviews",
      },
      {
        number: "Jan 2024 to now",
        title: "Product Designer",
        duration: "LiiLab",
        company: liilab,
        description:
          "Designed web and mobile apps for students preparing for English tests, from research to final UI.",
        deliverables: "User research, UI design, prototyping",
      },
      {
        number: "Aug 2022 to Dec 2023",
        title: "Graphic Designer",
        duration: "LiiLab · Part time",
        company: liilab,
        description:
          "Designed logos and brand identities, social media posts, thumbnails for YouTube, blogs and course videos, app screenshots for the Play Store and App Store, and Google Ads marketing assets.",
        deliverables: "Branding, social media, app store screenshots, ad assets",
      },
      {
        number: "Jun 2020 to Aug 2022",
        title: "Graphic Designer",
        duration: "Aditio · Part time",
        company: aditio,
        description:
          "Worked for multiple clients on social media posts, ad banners, print and flyer designs, logos and brand identities. This is where I built my eye for layout, type and color.",
        deliverables: "Social media, ad banners, print, logos",
      },
      {
        number: "2018 to 2024",
        title: "BSc in Computer Science and Engineering",
        duration: "Sylhet Engineering College",
        description:
          "Learned how software is built, which still helps me work closely with developers every day.",
        deliverables: "Programming, problem solving",
      },
    ],
  },
  skills: {
    title: "What I’m good at",
    intro: "The skills I use most, and the ones teams usually hire me for.",
    cards: [
      {
        number: "01",
        title: "Product design",
        description: "Taking an idea from a rough problem to clean, tested screens for web and mobile.",
      },
      {
        number: "02",
        title: "Design systems",
        description:
          "Building component libraries and tokens in Figma that keep a product consistent as it grows.",
      },
      {
        number: "03",
        title: "User research",
        description: "Talking to users and running simple tests to find out what really needs fixing.",
      },
      {
        number: "04",
        title: "Working with developers",
        description:
          "Clear handoff, honest trade-offs and enough front-end knowledge to know what is buildable.",
      },
      {
        number: "05",
        title: "Visual design",
        description: "A strong eye for layout, type and color, thanks to my graphic design roots.",
      },
      {
        number: "06",
        title: "Team leadership",
        description:
          "Guiding a team of 4 designers with clear feedback, fair reviews and shared standards.",
      },
    ],
  },
  tools: {
    caption: "02  ·  Tools",
    title: "What I work with every day.",
    text: "These are the tools I use most. I pick up new ones quickly when a team needs it.",
    chips: ["Figma", "FigJam", "HTML", "CSS", "React", "[Add more]"],
  },
  habits: {
    title: "How I like to work",
    intro: "Three habits that guide every project I take on.",
    cards: [
      {
        number: "01",
        title: "Start with the problem",
        description:
          "Before any screens, I make sure we agree on who we are designing for and what success looks like.",
      },
      {
        number: "02",
        title: "Keep it simple",
        description:
          "If a screen needs a long explanation, it needs a better design. I cut until only what matters is left.",
      },
      {
        number: "03",
        title: "Design with developers",
        description: "I bring engineers in early, so what we design is what actually ships.",
      },
    ],
  },
};
