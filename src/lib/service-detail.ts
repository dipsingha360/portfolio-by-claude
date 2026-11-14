// Service page content. Product Design is from the Figma "Service detail" frame.
// The other services follow the same structure. Text in [square brackets] is for
// Dip to fill in. Timings are typical starting points to confirm.

export type ServiceDetail = {
  eyebrow: string;
  title: string;
  lead: string;
  images: string[];
  cta: { primary: string; secondaryLabel: string; secondaryHref: string };
  whoFor: { title: string; intro: string; cards: { number: string; title: string; description: string }[] };
  included: { title: string; intro: string; cards: { number: string; title: string; description: string }[] };
  process: {
    title: string;
    intro: string;
    rows: { number: string; title: string; duration: string; description: string; deliverables: string }[];
  };
  example: { caption: string; href: string; cta: string; title: string; text: string; image: string };
  ways: { title: string; intro: string; cards: { number: string; title: string; description: string }[] };
  faq: { title: string; intro: string; items: { q: string; a: string }[] };
};

const productDesign: ServiceDetail = {
  eyebrow: "Service 01",
  title: "Product Design",
  lead: "I design web and mobile apps from first idea to final handoff, so your team ships a product people find easy to use.",
  images: [
    "/images/services/product-design-1.png",
    "/images/services/product-design-2.png",
    "/images/services/product-design-3.png",
  ],
  cta: {
    primary: "Let’s talk about your product",
    secondaryLabel: "Read the OneIELTS case study",
    secondaryHref: "/projects/oneielts",
  },
  whoFor: {
    title: "Who this is for",
    intro:
      "I work best with teams who care about their users and want design to shape decisions, not just decorate them.",
    cards: [
      {
        number: "For",
        title: "Startups building a first version",
        description:
          "You have an idea and need a clear, tested product your developers can build with confidence.",
      },
      {
        number: "For",
        title: "Teams with a product that is hard to use",
        description: "Users get stuck or drop off, and you want to find out why and fix it.",
      },
      {
        number: "For",
        title: "Companies hiring a product designer",
        description:
          "You need someone who can own design end to end and lead a small design team.",
      },
    ],
  },
  included: {
    title: "What’s included",
    intro: "Everything you need to go from an idea to a product your developers can build.",
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
  },
  process: {
    title: "How I work, step by step",
    intro: "What happens at each step, how long it usually takes and what you get at the end.",
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
  },
  example: {
    caption: "See it in action",
    href: "/projects/oneielts",
    cta: "Read the case study",
    title: "OneIELTS: one design system for web and mobile",
    text: "How I led a team of 4 designers to turn a fast-growing IELTS prep app into one calm, consistent product.",
    image: "/images/projects/oneielts/hero.png",
  },
  ways: {
    title: "Ways to work together",
    intro: "Pick what fits your team today. We can always change it later.",
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
  },
  faq: {
    title: "Questions about product design",
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
  },
};

const designSystems: ServiceDetail = {
  eyebrow: "Service 02",
  title: "Design Systems",
  lead: "I build Figma design systems that keep your product consistent, so your team designs faster, developers rebuild less and every screen feels like one product.",
  images: [
    "/images/services/design-systems-1.png",
    "/images/services/design-systems-2.png",
    "/images/services/design-systems-3.png",
  ],
  cta: {
    primary: "Let’s talk about your system",
    secondaryLabel: "Read the OneIELTS case study",
    secondaryHref: "/projects/oneielts",
  },
  whoFor: {
    title: "Who this is for",
    intro:
      "A design system pays off when more than one person designs or builds your product. These are the teams I help most.",
    cards: [
      {
        number: "For",
        title: "Teams whose product looks different on every screen",
        description:
          "Buttons, colors and spacing keep changing. You want one clear standard everyone follows.",
      },
      {
        number: "For",
        title: "Products on web and mobile",
        description:
          "You need the same look and behavior on every platform, without designing everything twice.",
      },
      {
        number: "For",
        title: "Growing teams adding designers and developers",
        description:
          "New people need a shared starting point so work stays consistent as the team grows.",
      },
    ],
  },
  included: {
    title: "What’s included",
    intro: "A complete, ready-to-use system, not just a folder of components.",
    cards: [
      {
        number: "01",
        title: "Design audit",
        description:
          "A review of your current screens that shows what repeats, what clashes and what to build first.",
      },
      {
        number: "02",
        title: "Design tokens",
        description:
          "Named values for color, type and spacing, so one change updates every screen.",
      },
      {
        number: "03",
        title: "Component library",
        description:
          "Buttons, inputs, cards, navigation and more, each with every state and size you need.",
      },
      {
        number: "04",
        title: "Figma variables and themes",
        description:
          "Set up the modern Figma way, so light and dark modes and new brands are easy to add.",
      },
      {
        number: "05",
        title: "Clear documentation",
        description:
          "What each part is for, when to use it and when not to, written in plain words.",
      },
      {
        number: "06",
        title: "Developer alignment",
        description:
          "Matching names and structure with your code, so designers and developers speak the same language.",
      },
    ],
  },
  process: {
    title: "How I work, step by step",
    intro: "What happens at each step, how long it usually takes and what you get at the end.",
    rows: [
      {
        number: "Step 01",
        title: "Audit",
        duration: "Usually 1 week",
        description:
          "I go through your product and list every button, color and layout in use. We see what repeats and where the mess is costing you time.",
        deliverables: "Audit report, list of parts to build first",
      },
      {
        number: "Step 02",
        title: "Foundations",
        duration: "Usually 1 to 2 weeks",
        description:
          "We agree on tokens for color, type and spacing. This is the base everything else stands on, so we take time to get it right.",
        deliverables: "Design tokens, Figma variables, naming rules",
      },
      {
        number: "Step 03",
        title: "Components",
        duration: "Usually 3 to 5 weeks",
        description:
          "I build the most-used parts first, with every state and size. You get working builds each week, so your team can start using them early.",
        deliverables: "Component library for web and mobile, usage examples",
      },
      {
        number: "Step 04",
        title: "Document",
        duration: "Usually 1 week",
        description:
          "I write simple guidelines for each component and run a short session so your team knows how to use and extend the system.",
        deliverables: "Documentation, team walkthrough",
      },
      {
        number: "Step 05",
        title: "Adopt and improve",
        duration: "During rollout",
        description:
          "I help your team move real screens onto the system, review what they build and fix gaps as they appear.",
        deliverables: "Rollout plan, design reviews, updates to the library",
      },
    ],
  },
  example: {
    caption: "See it in action",
    href: "/projects/oneielts",
    cta: "Read the case study",
    title: "OneIELTS: one design system for web and mobile",
    text: "How I led a team of 4 designers to turn a fast-growing IELTS prep app into one calm, consistent product.",
    image: "/images/projects/oneielts/hero.png",
  },
  ways: {
    title: "Ways to work together",
    intro: "Pick what fits your team today. We can always change it later.",
    cards: [
      {
        number: "Option 1",
        title: "Build it for you",
        description:
          "I create the full system with a clear scope and timeline, then hand it over with documentation.",
      },
      {
        number: "Option 2",
        title: "Fix and organize",
        description:
          "You already have components. I clean them up, add tokens and make them easy to use.",
      },
      {
        number: "Option 3",
        title: "Ongoing care",
        description:
          "A set number of hours each month to add components, review work and keep the system healthy.",
      },
    ],
  },
  faq: {
    title: "Questions about design systems",
    intro: "Still unsure about something? These are the questions I hear most.",
    items: [
      {
        q: "How long does it take to build a design system?",
        a: "A focused system for one product usually takes 6 to 10 weeks. After our first call I’ll share a plan with dates, and we can start with the most-used parts so your team benefits early.",
      },
      {
        q: "Do we need a design system, or is it too early?",
        a: "If one person designs and builds everything, a light set of tokens and a few components is often enough. If several people work on the product, a system saves time quickly. I’ll tell you honestly which one you need.",
      },
      {
        q: "Will it work with our developers’ code?",
        a: "Yes. I match names and structure to your code, and I work with your developers so the system is easy to build and maintain. [Add the frameworks you’ve worked with, if you like.]",
      },
      {
        q: "Can you build on the components we already have?",
        a: "Yes. I start with an audit and keep what works. You pay for improving the parts that need it, not for rebuilding everything.",
      },
      {
        q: "Do you set up Figma variables and themes?",
        a: "Yes. I use Figma variables for color, spacing and type, so you can add dark mode or a new brand without redrawing screens.",
      },
      {
        q: "Who keeps the system up to date?",
        a: "Your team owns it after handoff. I write clear guidelines and can stay on for a few hours each month to review changes and add new parts.",
      },
    ],
  },
};

const branding: ServiceDetail = {
  eyebrow: "Service 03",
  title: "Branding & Visual Identity",
  lead: "I create logos, colors, type and guidelines that give your product a clear, friendly personality, so people recognize you and remember you.",
  images: [
    "/images/services/branding-1.png",
    "/images/services/branding-2.png",
    "/images/services/branding-3.png",
  ],
  cta: {
    primary: "Let’s talk about your brand",
    secondaryLabel: "See branding work",
    secondaryHref: "/projects",
  },
  whoFor: {
    title: "Who this is for",
    intro:
      "A good brand makes your product easier to trust. I work best with people who know what they stand for and want it to show.",
    cards: [
      {
        number: "For",
        title: "Startups launching a new product",
        description:
          "You need a name and look that feel professional from day one, without a big agency budget.",
      },
      {
        number: "For",
        title: "Businesses that feel out of date",
        description:
          "Your product has grown, but your logo and colors haven’t. A fresh identity helps people see the new you.",
      },
      {
        number: "For",
        title: "Teams with a brand that’s only in someone’s head",
        description:
          "Everyone designs a little differently. Clear guidelines keep every post, page and screen on brand.",
      },
    ],
  },
  included: {
    title: "What’s included",
    intro: "A complete identity you can use everywhere, from your app to your social posts.",
    cards: [
      {
        number: "01",
        title: "Brand direction",
        description:
          "A short document on your audience, your personality and the feeling your brand should create.",
      },
      {
        number: "02",
        title: "Logo",
        description:
          "A simple, memorable logo in every format you need, for light and dark backgrounds.",
      },
      {
        number: "03",
        title: "Color and type",
        description:
          "A color palette and fonts that work together and are readable for everyone.",
      },
      {
        number: "04",
        title: "Brand guidelines",
        description:
          "A clear guide on how to use your logo, colors and type, with examples of what to do and avoid.",
      },
      {
        number: "05",
        title: "Social media templates",
        description:
          "Ready-to-edit templates for posts and stories, so your team can publish on brand quickly.",
      },
      {
        number: "06",
        title: "Final files",
        description:
          "Organized files for web, print and social, plus the source files in Figma.",
      },
    ],
  },
  process: {
    title: "How I work, step by step",
    intro: "What happens at each step, how long it usually takes and what you get at the end.",
    rows: [
      {
        number: "Step 01",
        title: "Listen",
        duration: "Usually 1 week",
        description:
          "We talk about your product, your customers and the brands you admire. I ask what you want people to feel when they see your name.",
        deliverables: "Brand questionnaire, mood board",
      },
      {
        number: "Step 02",
        title: "Direction",
        duration: "Usually 1 week",
        description:
          "I turn what I heard into a clear direction: personality, tone and visual style. You approve it before I draw anything.",
        deliverables: "Brand direction, 2 style routes to choose from",
      },
      {
        number: "Step 03",
        title: "Design",
        duration: "Usually 2 to 3 weeks",
        description:
          "I design your logo, colors and type for your chosen route. You get two rounds of feedback, so the result feels like yours.",
        deliverables: "Logo options, color palette, typography",
      },
      {
        number: "Step 04",
        title: "Apply",
        duration: "Usually 1 week",
        description:
          "I show your brand in real use: social posts, a website section and an app screen, so you can see how it works day to day.",
        deliverables: "Brand in use, social media templates",
      },
      {
        number: "Step 05",
        title: "Hand off",
        duration: "Usually 1 week",
        description:
          "You get every file, organized and named clearly, plus a guide your team can follow without asking me.",
        deliverables: "Brand guidelines, final logo files, source files",
      },
    ],
  },
  example: {
    caption: "See it in action",
    href: "/projects/webilon",
    cta: "See the project",
    title: "[Project name]: [one line about the brand]",
    text: "[One or two sentences about the brand you created and what changed for the client.]",
    image: "/images/projects/webilon.png",
  },
  ways: {
    title: "Ways to work together",
    intro: "Pick what fits your brand today. We can always change it later.",
    cards: [
      {
        number: "Option 1",
        title: "Full identity",
        description:
          "Logo, colors, type, guidelines and templates, built together from a clear brief.",
      },
      {
        number: "Option 2",
        title: "Refresh",
        description:
          "Keep what people already know and update what feels old, from the logo to the colors.",
      },
      {
        number: "Option 3",
        title: "Brand in your product",
        description:
          "I bring the new identity into your app or website, so it feels the same everywhere.",
      },
    ],
  },
  faq: {
    title: "Questions about branding",
    intro: "Still unsure about something? These are the questions I hear most.",
    items: [
      {
        q: "How long does a branding project take?",
        a: "Most identities take 5 to 7 weeks. After our first call I’ll share a timeline with dates for each step, including when I need your feedback.",
      },
      {
        q: "Do I need to know what I want?",
        a: "No. Most clients start with a feeling, not a finished idea. I ask questions, show examples and help you find a direction you love.",
      },
      {
        q: "How many logo options do I get?",
        a: "You choose between two style routes first. Then I develop the one you pick and refine it over two rounds of feedback, so you end with one strong logo, not a pile of options.",
      },
      {
        q: "Will I own the logo and files?",
        a: "Yes. Once the project is paid in full, the logo and all final files are yours to use however you like.",
      },
      {
        q: "Can you design for web, app and social media?",
        a: "Yes. I design the identity so it works on a small app icon and a large banner. You also get social templates to start with.",
      },
      {
        q: "What if I already have a logo?",
        a: "We can keep it and build the rest around it, or improve it. I’ll tell you honestly whether a change is worth it.",
      },
    ],
  },
};

const websiteDesign: ServiceDetail = {
  eyebrow: "Service 04",
  title: "Website Design",
  lead: "I design landing pages and marketing sites in Webflow or Framer that look great, load fast and are easy for you to update yourself.",
  images: [
    "/images/services/website-design-1.png",
    "/images/services/website-design-2.png",
    "/images/services/website-design-3.png",
  ],
  cta: {
    primary: "Let’s talk about your website",
    secondaryLabel: "See website work",
    secondaryHref: "/projects",
  },
  whoFor: {
    title: "Who this is for",
    intro:
      "Your website is often the first thing people see. I help you make that first look clear, trustworthy and easy to act on.",
    cards: [
      {
        number: "For",
        title: "Founders launching a product",
        description:
          "You need a clear page that explains what you do and gets people to sign up, fast.",
      },
      {
        number: "For",
        title: "Businesses with a site that doesn’t convert",
        description:
          "Visitors arrive but don’t take action. We find what’s confusing and make the next step obvious.",
      },
      {
        number: "For",
        title: "Teams without a developer",
        description:
          "You want a site your team can edit and publish without waiting for anyone to write code.",
      },
    ],
  },
  included: {
    title: "What’s included",
    intro: "A finished, published website, not just a design file.",
    cards: [
      {
        number: "01",
        title: "Page structure",
        description:
          "A simple plan for what each page says and in what order, so visitors find answers quickly.",
      },
      {
        number: "02",
        title: "Clear page copy",
        description:
          "Headlines and button text that explain your value in plain words. I can write it or polish yours.",
      },
      {
        number: "03",
        title: "Visual design",
        description:
          "A clean, on-brand look for desktop, tablet and phone, built on a simple set of reusable sections.",
      },
      {
        number: "04",
        title: "Build in Webflow or Framer",
        description:
          "I build the site for you, with smooth layouts and no code for you to maintain.",
      },
      {
        number: "05",
        title: "Easy editing",
        description:
          "Set up so your team can change text, images and pages on their own, with a short guide.",
      },
      {
        number: "06",
        title: "Launch checklist",
        description:
          "Page titles, descriptions, speed and mobile checks, so your site is ready to be found.",
      },
    ],
  },
  process: {
    title: "How I work, step by step",
    intro: "What happens at each step, how long it usually takes and what you get at the end.",
    rows: [
      {
        number: "Step 01",
        title: "Goals",
        duration: "Usually 2 to 3 days",
        description:
          "We talk about who the site is for and what you want visitors to do. One clear goal per page keeps the design simple.",
        deliverables: "Goals, page list, site map",
      },
      {
        number: "Step 02",
        title: "Structure and copy",
        duration: "Usually 1 week",
        description:
          "I draft the page layouts and the words together, so the design fits the message, not the other way around.",
        deliverables: "Wireframes, page copy",
      },
      {
        number: "Step 03",
        title: "Design",
        duration: "Usually 1 to 2 weeks",
        description:
          "I design the key pages for desktop and mobile. You see progress each week and give feedback early.",
        deliverables: "Designs for desktop, tablet and phone",
      },
      {
        number: "Step 04",
        title: "Build",
        duration: "Usually 1 to 2 weeks",
        description:
          "I build the site in Webflow or Framer, with responsive layouts and smooth, simple interactions.",
        deliverables: "Working site on a preview link",
      },
      {
        number: "Step 05",
        title: "Launch and hand off",
        duration: "Usually 2 to 3 days",
        description:
          "We test on real devices, fix the details and publish. I walk your team through how to edit the site.",
        deliverables: "Live website, editing guide, launch checklist",
      },
    ],
  },
  example: {
    caption: "See it in action",
    href: "/projects/monerva",
    cta: "See the project",
    title: "[Project name]: [one line about the website]",
    text: "[One or two sentences about the site you built and what improved after launch.]",
    image: "/images/projects/monerva.png",
  },
  ways: {
    title: "Ways to work together",
    intro: "Pick what fits your website today. We can always change it later.",
    cards: [
      {
        number: "Option 1",
        title: "Landing page",
        description:
          "One focused page to launch a product, event or offer, usually ready in 2 to 3 weeks.",
      },
      {
        number: "Option 2",
        title: "Full marketing site",
        description:
          "A multi-page site with a blog or case studies, built so you can keep growing it.",
      },
      {
        number: "Option 3",
        title: "Redesign",
        description:
          "Keep your content and improve the structure, look and speed of your current website.",
      },
    ],
  },
  faq: {
    title: "Questions about website design",
    intro: "Still unsure about something? These are the questions I hear most.",
    items: [
      {
        q: "How long does a website project take?",
        a: "A landing page usually takes 2 to 3 weeks. A multi-page site takes 4 to 6 weeks. After our first call I’ll share a timeline with dates for each step.",
      },
      {
        q: "Should I choose Webflow or Framer?",
        a: "Both are great. Webflow suits larger sites and blogs. Framer is quick for landing pages and smooth animation. I’ll recommend one based on your goals and who will edit the site.",
      },
      {
        q: "Can I edit the site myself afterwards?",
        a: "Yes. I set up the site so you can change text, images and pages without code, and I give you a short guide and a walkthrough.",
      },
      {
        q: "Do you write the website copy?",
        a: "I can. Clear words are half of a good website, so I draft the headlines and buttons with the design. If you already have copy, I’ll polish it.",
      },
      {
        q: "Will my site work on phones and load fast?",
        a: "Yes. I design for phones first, optimize images and test on real devices before launch.",
      },
      {
        q: "Who pays for hosting and the domain?",
        a: "You do, directly to the provider, so you always own your site. I’ll help you choose the right plan and set it up.",
      },
    ],
  },
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "product-design": productDesign,
  "design-systems": designSystems,
  branding,
  "website-design": websiteDesign,
};
