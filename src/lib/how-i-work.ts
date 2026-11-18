// Content for the How I work page (/how-i-work). Built from the Figma
// "How I work" frame. Text in [square brackets] is for Dip to fill in.

export const howIWork = {
  hero: {
    eyebrow: "My process",
    title: "How I work",
    lead: "This is the process I use with my own team and with freelance clients. Every step is there to cut guesswork and get to something people can actually use.",
    images: [
      "/images/how-i-work/process-1.jpg",
      "/images/how-i-work/process-2.jpg",
      "/images/how-i-work/process-3.jpg",
    ],
  },
  bring: {
    title: "What I bring to a team",
    intro: "The skills I use on every project, from the first research call to the final handoff.",
    cards: [
      {
        number: "01",
        title: "User research",
        description: "Interviews, surveys and usability tests to learn what your users actually need.",
      },
      {
        number: "02",
        title: "User flows",
        description:
          "Maps of every path through the product, so nothing gets missed before screens are drawn.",
      },
      {
        number: "03",
        title: "Wireframes",
        description: "Quick, simple layouts to agree on structure before spending time on visuals.",
      },
      {
        number: "04",
        title: "Prototypes",
        description:
          "Clickable Figma prototypes you can test with real users and share with your team.",
      },
      {
        number: "05",
        title: "UI design",
        description:
          "Clean, consistent screens for web and mobile, built on a reusable component library.",
      },
      {
        number: "06",
        title: "Developer handoff",
        description:
          "Organized Figma files with specs, states and notes, plus support while it gets built.",
      },
    ],
  },  process: {
    title: "My process, step by step",
    intro: "What happens at each step, how long it usually takes and what comes out of it.",
    rows: [
      {
        number: "Step 01",
        title: "Discover",
        duration: "Usually 1 week",
        description:
          "We start with a call about your goals, your users and your business. I review what exists today, talk to a few users and look at how others solve the same problem.",
        deliverables: "Project brief, user interview notes, competitor review",
      },
      {
        number: "Step 02",
        title: "Define",
        duration: "Usually 1 week",
        description:
          "I turn what we learned into a clear problem statement, personas and the main user flows. We agree on what to build first, so nobody designs the wrong thing.",
        deliverables: "Problem statement, personas, user flows, feature priority list",
      },
      {
        number: "Step 03",
        title: "Design",
        duration: "Usually 2 to 4 weeks",
        description:
          "I start with wireframes, then move to detailed UI once the structure is right. You see progress every week and can give feedback early.",
        deliverables: "Wireframes, UI screens for web and mobile, component library",
      },
      {
        number: "Step 04",
        title: "Test",
        duration: "Usually 1 week",
        description:
          "I build a clickable prototype and test it with 5 or more real users. Then I fix what confused them, before any code is written.",
        deliverables: "Clickable prototype, usability test report, updated designs",
      },
      {
        number: "Step 05",
        title: "Hand off and support",
        duration: "During the build",
        description:
          "Your developers get an organized Figma file with specs and every screen state. I join check-ins during the build and review what ships.",
        deliverables: "Dev-ready Figma file, specs and notes, design QA",
      },
    ],
  },  example: {
    caption: "See it in action",
    href: "/projects/oneielts",
    cta: "Read the case study",
    title: "OneIELTS: one design system for web and mobile",
    text: "How I led a team of 4 designers to turn a fast-growing IELTS prep app into one calm, consistent product.",
    image: "/images/projects/oneielts/hero.png",
  },  workWithMe: {
    title: "Work with me",
    intro:
      "I’m open to full-time product design roles, and I take on a few freelance projects each year. Here’s how we can work together.",
    cards: [
      {
        number: "Option 1",
        title: "Full-time role",
        description:
          "Join your team as a product designer or design lead, working remotely from Bangladesh.",
      },
      {
        number: "Option 2",
        title: "Project based",
        description:
          "A fixed scope, like a new app, a redesign or a design system, with a clear timeline.",
      },
      {
        number: "Option 3",
        title: "Ongoing support",
        description: "A set number of hours each month for new features, design reviews and QA.",
      },
    ],
  },  faq: {
    title: "Questions about how I work",
    intro: "Still unsure about something? These are the questions I hear most.",
    items: [
      {
        q: "How long does a product design project take?",
        a: "Most projects take 4 to 8 weeks, depending on the size. After our first call, I’ll share a clear timeline with dates for each step.",
      },
      {
        q: "Do I need a brief before we start?",
        a: "No. A rough idea is enough. On our first call I’ll ask the right questions, and we’ll write a one-page brief together so everyone agrees on the goal.",
      },
      {
        q: "Can you work directly with my developers?",
        a: "Yes, and I recommend it. I join your check-ins, answer questions while the product is built and review what ships against the design.",
      },
      {
        q: "Do you do user research, or only UI?",
        a: "Both. Research keeps us from designing the wrong thing, so I always suggest at least a few user interviews and a usability test. If you already have research, I’ll build on it.",
      },
      {
        q: "What tools do you use?",
        a: "I design and prototype in Figma. For feedback and updates I’m happy to use what your team already uses, such as [Slack, Notion or Jira].",
      },
      {
        q: "What if I need changes after handoff?",
        a: "Small fixes while your team builds are part of the project. For bigger changes, we agree on the scope and timing first, so there are no surprises.",
      },
    ],
  },};

/** The 4-step summary shown on the homepage (Figma: Home, How I work section). */
export const processSummary = {
  title: "How I work",
  intro:
    "The same simple process I use with my team and with freelance clients, from the first question to a shipped product.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "I start by talking to users and the team to learn the real problem and what success looks like.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "I map the main flows and agree on what to build first, so nobody designs the wrong thing.",
    },
    {
      number: "03",
      title: "Design and test",
      description:
        "I move from wireframes to clean UI and test with real users before any code is written.",
    },
    {
      number: "04",
      title: "Hand off",
      description:
        "Developers get organized Figma files with every state, and I stay close while it ships.",
    },
  ],
};
