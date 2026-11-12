// Case-study content from the Figma "Project detail (OneIELTS)" frame.
// Text in [square brackets] is placeholder copy in the design, kept as-is.

export const caseStudy = {
  eyebrow: "Case study  ·  Ed-tech  ·  Web and mobile",
  title: "OneIELTS Web & Mobile Application",
  lead: "How I led a design system that turned a fast-growing IELTS prep app into one calm, consistent product across web and mobile.",
  meta: [
    { label: "Role", value: "Lead product designer" },
    { label: "Team", value: "4 designers, 6 developers" },
    { label: "Timeline", value: "6 months, 2025" },
    { label: "Platforms", value: "Web, iOS and Android" },
    { label: "Tools", value: "Figma, FigJam" },
  ],
  hero: "/images/projects/oneielts/hero.png",
  glance: [
    { value: "[40%]", label: "Less time to design a new screen" },
    { value: "[120+]", label: "Reusable components in one shared library" },
    { value: "[2]", label: "Platforms sharing one design language" },
  ],
  challenge: {
    caption: "01  ·  The challenge",
    title: "One product that felt like three different apps.",
    paragraphs: [
      "OneIELTS helps students get ready for the IELTS test with lessons, practice questions, mock tests and feedback. As the product grew, new features were designed quickly, by different people, for different platforms.",
      "Buttons, colors and spacing changed from screen to screen. Learners told us the app felt [confusing and hard to trust]. Developers rebuilt the same parts again and again, which slowed down every release.",
    ],
    goalTitle: "The goal",
    goal: "Make OneIELTS feel like one calm, consistent product, and help the team design and build new features faster.",
  },
  role: {
    caption: "02  ·  My role",
    title: "Leading the design, and the designers.",
    text: "I led a product design team of 4 and owned the design system from start to finish. I planned the work, set the design direction, reviewed every screen and worked closely with the engineering lead to make sure the system could actually be built.",
    badges: [
      "Design direction",
      "Design system",
      "User research",
      "Team leadership",
      "Developer handoff",
    ],
  },
  process: {
    title: "How I approached it",
    intro: "Four steps, from a messy product to a shared system the whole team uses.",
    steps: [
      {
        number: "01",
        title: "Audit",
        description:
          "I collected every screen and listed every button, color and text style. We found [14 button styles] and [30+ text sizes].",
      },
      {
        number: "02",
        title: "Listen",
        description:
          "I talked to [8 learners] and our developers to find where the inconsistency hurt the most.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "We built tokens first, then components, then page templates, testing each one inside real screens.",
      },
      {
        number: "04",
        title: "Roll out",
        description:
          "We moved screens to the new system one feature at a time, so releases never had to stop.",
      },
    ],
  },
  insights: {
    caption: "03  ·  What we learned",
    title: "What learners and developers told us.",
    text: "Talking to people early changed what we built first. Three things stood out.",
    cards: [
      {
        number: "Insight 1",
        title: "Students study in short bursts",
        description:
          "Most sessions happened on phones, in [10 to 15 minute] breaks. Screens had to be quick to scan.",
      },
      {
        number: "Insight 2",
        title: "Inconsistency felt like bugs",
        description:
          "When the same action looked different on two screens, learners thought something was broken.",
      },
      {
        number: "Insight 3",
        title: "Developers wanted fewer one-offs",
        description: "Every new screen meant new code. A shared library would save them time too.",
      },
    ],
  },
  decisions: {
    caption: "04  ·  Key design decisions",
    items: [
      {
        number: "Decision 1",
        title: "Tokens before components",
        text: "We started with color, type and spacing tokens, so every component shares the same base. Changing a brand color now means changing one value, not 200 screens.",
        image: "/images/projects/oneielts/decision-1.png",
      },
      {
        number: "Decision 2",
        title: "One component, two platforms",
        text: "Each component has a web and a mobile version with the same name and behavior. Designers and developers now talk about the same \"primary button\", whatever the screen size.",
        image: "/images/projects/oneielts/decision-2.png",
      },
      {
        number: "Decision 3",
        title: "Calm screens for stressed learners",
        text: "Test prep is stressful. We used more white space, fewer colors and clear progress steps, so learners always know where they are and what comes next.",
        image: "/images/projects/oneielts/decision-3.png",
      },
    ],
  },
  results: {
    title: "The results",
    intro:
      "What changed after the new system rolled out. [Add real numbers here. Even rough ones make a case study stronger.]",
    stats: [
      { value: "[2x]", label: "Faster handoff from design to development" },
      { value: "[25%]", label: "Fewer design-related bugs reported" },
      { value: "[4.6]", label: "App store rating, up from [4.1]" },
    ],
    quote:
      "\"[Quote from your PM or engineering lead about how the design system changed the way the team works.]\"",
    quoteName: "[Full name]",
    quoteRole: "[Role], OneIELTS",
    quoteInitials: "FN",
  },
  lessons: {
    caption: "05  ·  Looking back",
    title: "What I’d do again, and what I’d change.",
    items: [
      {
        title: "Bring developers in early.",
        text: "The system worked because engineers helped shape it from week one, not after the designs were done.",
      },
      {
        title: "Show, don’t tell.",
        text: "A simple before and after screen convinced people faster than any document I wrote.",
      },
      {
        title: "Write docs as you go.",
        text: "Next time I’d document each component the day it ships, not at the end of the project.",
      },
    ],
  },
};
