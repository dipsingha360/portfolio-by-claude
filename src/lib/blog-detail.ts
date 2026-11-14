// Article bodies. Title, summary, date, read time and category come from `articles`
// in src/lib/data.ts, so they are written once. The first article is the Figma
// "Blog detail" frame. Text in [square brackets] is for Dip to fill in.

export type Block =
  | { type: "lead"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "takeaways"; title: string; items: string[] }
  | { type: "sources"; items: { label: string; url: string }[] };

export type ArticleBody = {
  toc: { id: string; label: string }[];
  blocks: Block[];
  keepReading: string[];
};

export const articleHero = "/images/blog/hero.png";

export const articleAuthor = {
  name: "Written by Dip Singha",
  bio: "Product designer leading a team of 4. Started in graphic design, now designing ed-tech products for web and mobile.",
  avatar: "/images/blog/avatar.png",
};

const graphicToProduct: ArticleBody = {
  toc: [
    { id: "why", label: "Why I made the switch" },
    { id: "carried", label: "What carried over" },
    { id: "learn", label: "What I had to learn" },
    { id: "mindset", label: "The mindset shift" },
    { id: "switch", label: "If you are making the switch" },
  ],
  blocks: [
    {
      type: "lead",
      text: "I spent my first years in design making posters, social media posts and brand assets. Today I lead a small team designing ed-tech products for web and mobile. The switch taught me that good visuals are only half of the job.",
    },
    { type: "heading", id: "why", text: "Why I made the switch" },
    {
      type: "p",
      text: "As a graphic designer, my work was done when it looked right. I would hand over a file and move on to the next one. But I kept wondering what happened next. Did people understand it? Did it help them do anything?",
    },
    {
      type: "p",
      text: "Product design gave me a way to answer those questions. Instead of one finished piece, I get to work on something that keeps changing, based on how real people use it.",
    },
    { type: "heading", id: "carried", text: "What carried over" },
    {
      type: "p",
      text: "More than I expected. A good eye for layout, type and color still matters every single day. So does working with feedback and tight deadlines.",
    },
    {
      type: "p",
      text: "My graphic design habits helped me make clean, consistent screens from day one. Later, they made building a design system feel natural. A design system is really a brand guideline for an interface.",
    },
    { type: "heading", id: "learn", text: "What I had to learn from scratch" },
    {
      type: "p",
      text: "The hardest part was letting go of \"does it look good?\" as the main question. In product design, the first question is \"does it work for the person using it?\"",
    },
    {
      type: "p",
      text: "I had to learn how to talk to users, map flows before drawing screens, and think about every state of a screen: empty, loading, error and success. I also had to learn to work closely with developers. A design is only as good as what actually gets built.",
    },
    { type: "quote", text: "\"A screen can look perfect and still fail the person using it.\"" },
    { type: "heading", id: "mindset", text: "The mindset shift" },
    {
      type: "p",
      text: "In graphic design, I owned the final result. In product design, the result belongs to the whole team. I stopped seeing feedback as a judgment on my taste and started seeing it as useful information.",
    },
    {
      type: "p",
      text: "Now, when a usability test shows people getting stuck, I’m actually happy. It means I found the problem before launch, not after.",
    },
    { type: "heading", id: "switch", text: "If you’re making the same switch" },
    { type: "p", text: "Here’s what I’d tell my younger self:" },
    {
      type: "takeaways",
      title: "Key takeaways",
      items: [
        "Start with one real problem, not a pretty concept.",
        "Learn the basics of user research. Even 5 short interviews change how you design.",
        "Design flows before screens.",
        "Spend time with developers and learn how things get built.",
        "Keep your visual skills sharp. They are still your advantage.",
      ],
    },
    {
      type: "p",
      text: "Moving from graphic design to product design didn’t mean starting over. It meant adding new questions to the ones I already knew how to ask. If you’re thinking about it, start now, with one small problem.",
    },
  ],
  keepReading: ["design-system-from-scratch", "leading-a-design-team", "ux-copy-as-a-designer"],
};

const h = (id: string, text: string): Block => ({ type: "heading", id, text });
const p = (text: string): Block => ({ type: "p", text });
const lead = (text: string): Block => ({ type: "lead", text });
const quote = (text: string): Block => ({ type: "quote", text });
const sources = (items: { label: string; url: string }[]): Block => ({ type: "sources", items });
const takeaways = (items: string[]): Block => ({ type: "takeaways", title: "Key takeaways", items });

const designSystem: ArticleBody = {
  toc: [
    { id: "problem", label: "Why we needed one" },
    { id: "tokens", label: "Start with tokens" },
    { id: "components", label: "Build the few parts used everywhere" },
    { id: "docs", label: "Write it down as you go" },
    { id: "team", label: "Get developers in early" },
  ],
  blocks: [
    lead(
      "When I started on OneIELTS, the product felt like three different apps. Buttons, colors and spacing changed from screen to screen. A design system fixed that, but only because we built it in the right order.",
    ),
    h("problem", "Why we needed one"),
    p(
      "The app had grown fast. New features were designed quickly, by different people, for web and mobile. Every team made reasonable choices, but nothing matched. Developers kept rebuilding the same parts again and again, and each release took longer than it should.",
    ),
    p(
      "I didn’t want to start with a huge library. I wanted a small system that people would actually use every day.",
    ),
    h("tokens", "Start with tokens"),
    p(
      "Before any component, we agreed on color, type and spacing. These are called design tokens: named values like “text primary” or “space 16” instead of a loose hex code or number.",
    ),
    p(
      "Tokens felt slow at first. Then we changed a brand color and it took one edit, not 200 screens. That was the moment the whole team believed in it.",
    ),
    quote("“Change one value, not two hundred screens.”"),
    h("components", "Build the few parts used everywhere"),
    p(
      "We audited the app and listed which parts appeared most often: buttons, inputs, cards, lists and navigation. We built those first and left rare parts for later.",
    ),
    p(
      "Each component got a web version and a mobile version with the same name and the same behavior. Designers and developers now talk about the same “primary button”, whatever the screen size.",
    ),
    h("docs", "Write it down as you go"),
    p(
      "A system nobody understands is just another folder of files. For every component I wrote what it is for, when not to use it, and how it behaves in each state: default, hover, focus, disabled, loading and error.",
    ),
    p(
      "My biggest lesson: document the day a component ships, not at the end of the project. Waiting makes the docs wrong before anyone reads them.",
    ),
    h("team", "Get developers in early"),
    p(
      "The system worked because engineers helped shape it from week one. They told us what was easy to build, what was risky and what they already had in code. [Add one real example, for example a component you changed after a developer’s feedback.]",
    ),
    takeaways([
      "Start with tokens, then components.",
      "Build the parts used most often first.",
      "Use one name and one behavior for web and mobile.",
      "Document each component the day it ships.",
      "Bring developers in from the first week.",
    ]),
    p(
      "A design system is never finished. It is a small product that your team uses, so listen to them and keep improving it a little every week.",
    ),
  ],
  keepReading: ["naming-components", "leading-a-design-team", "graphic-to-product-design"],
};

const leadingTeam: ArticleBody = {
  toc: [
    { id: "start", label: "Going from maker to lead" },
    { id: "feedback", label: "Giving feedback people can use" },
    { id: "fair", label: "Sharing work fairly" },
    { id: "bottleneck", label: "Not becoming the bottleneck" },
    { id: "growing", label: "What I’m still learning" },
  ],
  blocks: [
    lead(
      "I lead a team of 4 designers. The hardest change wasn’t the work. It was learning that my job is no longer to make the best screen, but to help the team make the best product.",
    ),
    h("start", "Going from maker to lead"),
    p(
      "At first I kept designing the hard parts myself because it felt faster. It was faster, once. Then the team stopped growing, and I became the person everyone waited for.",
    ),
    p(
      "Now I try to set the direction, explain the “why” and let the team own the “how”. I still design, but I choose the work only I need to do.",
    ),
    h("feedback", "Giving feedback people can use"),
    p(
      "Good feedback is specific, kind and about the goal. I avoid “I don’t like it”. Instead I say what I see, what it might cause for the user, and what I’d try.",
    ),
    p(
      "I also ask questions first: “What problem were you solving here?” Often the designer already knows what’s weak. They just need space to say it.",
    ),
    quote("“Feedback is about the work and the goal, never the person.”"),
    h("fair", "Sharing work fairly"),
    p(
      "When one person always gets the exciting projects, the others stop learning. I try to rotate interesting work, pair people on harder tasks and make sure everyone’s name is on what they built.",
    ),
    p(
      "I also share credit out loud, in reviews and in front of other teams. It costs nothing and it matters a lot. [Add a real example from your team if you want.]",
    ),
    h("bottleneck", "Not becoming the bottleneck"),
    p(
      "If every screen needs my approval, the team moves at my speed. So we agreed on simple rules: use the design system, check the basics yourself, and bring me only the decisions that change direction.",
    ),
    p(
      "We also hold short design reviews on a fixed day. People know when feedback is coming, so they stop waiting and keep moving.",
    ),
    h("growing", "What I’m still learning"),
    p(
      "I’m still learning to say no, to protect focus time and to leave a problem alone long enough for someone else to solve it. It’s uncomfortable, and it works.",
    ),
    takeaways([
      "Set the direction, let the team own the details.",
      "Give feedback that is specific, kind and about the goal.",
      "Rotate good projects and share credit out loud.",
      "Agree on rules so you are not the approval step for everything.",
      "Keep one fixed review day.",
    ]),
    p(
      "Leading is a skill, like layout or typography. You get better with practice and honest feedback from the people you lead.",
    ),
  ],
  keepReading: ["design-system-from-scratch", "usability-test-in-one-afternoon", "graphic-to-product-design"],
};

const uxCopy: ArticleBody = {
  toc: [
    { id: "real", label: "Use real words early" },
    { id: "buttons", label: "Buttons say what happens" },
    { id: "errors", label: "Errors that help" },
    { id: "empty", label: "Empty states" },
    { id: "tone", label: "Keep the tone calm" },
  ],
  blocks: [
    lead(
      "Words are part of the interface. A screen with perfect spacing and confusing text still fails. These are the simple rules I follow when I write UX copy as a designer.",
    ),
    h("real", "Use real words early"),
    p(
      "I never design with “Lorem ipsum” for long. Placeholder text hides problems: a title that is too long, a button label that makes no sense, a message nobody can read on a small screen.",
    ),
    p(
      "Even rough real copy shows what the screen is trying to say. I fix the words together with the layout, not after.",
    ),
    h("buttons", "Buttons say what happens"),
    p(
      "A button should tell people what will happen when they tap it. “Submit” is vague. “Send message” or “Start practice test” is clear.",
    ),
    p(
      "I start with a verb, keep it short and use the same word for the same action everywhere. If it’s “Save” on one screen, it isn’t “Apply” on the next.",
    ),
    quote("“If the button needs an explanation, the label is wrong.”"),
    h("errors", "Errors that help"),
    p(
      "A good error message answers three things: what went wrong, why, and what to do next. “Something went wrong” answers none of them.",
    ),
    p(
      "Compare “Invalid input” with “Please enter an email address like name@example.com.” The second one doesn’t blame the person and fixes the problem in one step.",
    ),
    h("empty", "Empty states"),
    p(
      "An empty screen is a chance to help. I explain what will appear here and give one clear action to get started, for example “No practice tests yet. Start your first one.”",
    ),
    h("tone", "Keep the tone calm"),
    p(
      "On OneIELTS, our users are preparing for a stressful test. I avoid jokes, shouting and pressure words like “Hurry!” Calm, plain language helps people stay focused.",
    ),
    takeaways([
      "Design with real words, not placeholder text.",
      "Start button labels with a verb and keep them consistent.",
      "Errors say what happened and what to do next.",
      "Empty states explain and offer one action.",
      "Match the tone to how your user feels.",
    ]),
    p(
      "You don’t need to be a writer. Read your text out loud, cut half the words and test it with one real person. [Add a before and after example from your own work.]",
    ),
  ],
  keepReading: ["designing-ed-tech-for-test-takers", "naming-components", "usability-test-in-one-afternoon"],
};

const usability: ArticleBody = {
  toc: [
    { id: "why", label: "Why five people is enough" },
    { id: "plan", label: "Plan the morning" },
    { id: "session", label: "Run the sessions" },
    { id: "notes", label: "Take simple notes" },
    { id: "fix", label: "Fix the top three" },
  ],
  blocks: [
    lead(
      "You don’t need a lab or a big budget to test a design. With five people and one afternoon, you can find the problems that matter most before they reach your users.",
    ),
    h("why", "Why five people is enough"),
    p(
      "The first few people usually run into the same big problems. After five sessions, you are mostly hearing things you’ve already heard. A small test you actually run beats a perfect test you never do.",
    ),
    h("plan", "Plan the morning"),
    p(
      "Before the afternoon, I decide what I want to learn. I pick three to five tasks, such as “Find a practice test and start it”. I write them as small goals, not instructions.",
    ),
    p(
      "I use a clickable prototype in Figma and book five people who match our real users. I keep each session to about 30 minutes. [Add how you find participants, for example students or colleagues outside the team.]",
    ),
    h("session", "Run the sessions"),
    p(
      "I start by saying we’re testing the design, not the person. Then I give one task at a time and ask them to think out loud.",
    ),
    p(
      "The hardest part is staying quiet. When someone gets stuck, I don’t help. Where they hesitate or tap the wrong thing is exactly what I came to see.",
    ),
    quote("“When someone gets stuck, the design has a problem, not the person.”"),
    h("notes", "Take simple notes"),
    p(
      "I keep a simple table: task, what happened and how serious it was. A teammate takes notes while I run the session, so I can watch the screen.",
    ),
    p(
      "Right after the last session we sit together for 20 minutes and group the notes. Patterns show up quickly, and everyone sees the same evidence.",
    ),
    h("fix", "Fix the top three"),
    p(
      "I don’t try to fix everything. We pick the three problems that blocked the most people, change the design and, when we can, test those parts again.",
    ),
    takeaways([
      "Five people is enough to find the big problems.",
      "Test tasks, not opinions.",
      "Stay quiet and watch where people hesitate.",
      "Take notes in a simple table and review them together.",
      "Fix the top three problems first.",
    ]),
    p(
      "When a test shows people getting stuck, I’m happy. It means we found it before launch, not after.",
    ),
  ],
  keepReading: ["designing-ed-tech-for-test-takers", "ux-copy-as-a-designer", "leading-a-design-team"],
};

const edTech: ArticleBody = {
  toc: [
    { id: "who", label: "Who we design for" },
    { id: "calm", label: "Make screens calm" },
    { id: "progress", label: "Show progress and the next step" },
    { id: "phone", label: "Design for the phone first" },
    { id: "listen", label: "Keep listening" },
  ],
  blocks: [
    lead(
      "People who use OneIELTS are preparing for an important test. They are often stressed, short on time and practising on their phone. Those three facts shaped almost every decision we made.",
    ),
    h("who", "Who we design for"),
    p(
      "A student might practise on a bus, between classes or late at night. They don’t want to learn our app. They want to get better at the test. Good design here means getting out of their way.",
    ),
    h("calm", "Make screens calm"),
    p(
      "Test prep is stressful, so we used more white space, fewer colors and fewer things on each screen. One screen, one main job.",
    ),
    p(
      "We also chose words carefully. No pressure language, no flashing alerts. A calm screen helps people think about the question, not the interface.",
    ),
    quote("“The best interface for a stressed learner is the one they barely notice.”"),
    h("progress", "Show progress and the next step"),
    p(
      "Learners always want to know two things: how am I doing, and what should I do now? We made progress visible with clear steps, and every finished activity ends with one obvious next action.",
    ),
    p(
      "For timed practice, we show the time clearly but quietly, so it informs without adding panic. [Add a real detail about your timer or progress design.]",
    ),
    h("phone", "Design for the phone first"),
    p(
      "Most practice happens on mobile, so I design the phone version first. Big tap targets, short text and easy one-hand use come first, and then the web version grows from that.",
    ),
    p(
      "Because we use one design system for web and mobile, learners get the same buttons and behavior on every device.",
    ),
    h("listen", "Keep listening"),
    p(
      "We regularly talk to learners and run small tests. Their stories change what we build first. [Add one thing a learner said that changed a design.]",
    ),
    takeaways([
      "Design for stressed, busy people on their phones.",
      "One screen, one main job.",
      "Always show progress and one clear next step.",
      "Start with mobile, then grow to web.",
      "Keep talking to real learners.",
    ]),
    p(
      "Designing for test takers taught me that kindness is a design skill: clear words, calm screens and respect for people’s time.",
    ),
  ],
  keepReading: ["usability-test-in-one-afternoon", "ux-copy-as-a-designer", "design-system-from-scratch"],
};

const naming: ArticleBody = {
  toc: [
    { id: "why", label: "Why names matter" },
    { id: "rules", label: "Simple naming rules" },
    { id: "variants", label: "Variants or a new component?" },
    { id: "match", label: "Match the code" },
    { id: "check", label: "Check that people can find things" },
  ],
  blocks: [
    lead(
      "A component nobody can find is a component nobody uses. Good names are the cheapest way to make a design system easier for designers and developers.",
    ),
    h("why", "Why names matter"),
    p(
      "In a big Figma file, people search before they browse. If the button is called “Btn_final_v3”, they will make a new one. Then you have two buttons, and the mess starts again.",
    ),
    h("rules", "Simple naming rules"),
    p(
      "I use plain words, not clever ones, and I name things by what they are, not how they look. “Primary button” beats “Black rounded button” because the design may change.",
    ),
    p(
      "I also use a clear order: group, then component, then variant. For example, “Buttons / Primary / Large”. In Figma, the slashes make a tidy list in the assets panel.",
    ),
    quote("“Name things by what they do, not how they look.”"),
    h("variants", "Variants or a new component?"),
    p(
      "If two things share the same job and only the size, state or icon changes, it’s one component with variants. If the job is different, it’s a new component with its own name.",
    ),
    p(
      "Keeping this rule stops the library from growing into dozens of near-copies.",
    ),
    h("match", "Match the code"),
    p(
      "The best name is one that designers and developers both use. We try to keep the Figma name the same as the name in code, so a conversation about the “primary button” means the same thing to both.",
    ),
    p(
      "When names don’t match, we write the code name in the component description. [Add how your team does this.]",
    ),
    h("check", "Check that people can find things"),
    p(
      "Every few months, I ask a teammate to find five components by searching. If they can’t, the name is wrong, not the person. We rename it and note the change for everyone.",
    ),
    takeaways([
      "Use plain words and name by purpose, not looks.",
      "Order names as group, component, variant.",
      "Variants are for the same job; new jobs get new components.",
      "Match Figma names to code names.",
      "Test findability with a teammate.",
    ]),
    p(
      "Naming is small work that saves a lot of time. Start with your five most-used components and fix those today.",
    ),
  ],
  keepReading: ["design-system-from-scratch", "ux-copy-as-a-designer", "leading-a-design-team"],
};

const aiPatterns: ArticleBody = {
  toc: [
    { id: "shift", label: "From answers to actions" },
    { id: "checkpoints", label: "Pattern 1: Checkpoints" },
    { id: "undo", label: "Pattern 2: Undo and history" },
    { id: "uncertainty", label: "Pattern 3: Honest uncertainty" },
    { id: "errors", label: "Pattern 4: Errors that recover" },
    { id: "structure", label: "Pattern 5: Structure over chat" },
  ],
  blocks: [
    lead(
      "AI features are no longer just chat boxes. They plan, decide and act for people. That changes what good UX means: the job is to make the AI’s behavior understandable, predictable and easy to correct.",
    ),
    h("shift", "From answers to actions"),
    p(
      "The first wave of AI products answered questions. The new wave, often called agentic UX, completes multi-step tasks: booking, drafting, sorting, updating. Most 2026 design write-ups agree on one point: when software acts on a person’s behalf, trust becomes the main design problem.",
    ),
    p(
      "Microsoft’s 18 guidelines for human-AI interaction, published back in 2019, still hold up well. They ask us to set the right expectations, support correction and show why the system did what it did. Here are the five patterns I use to apply them.",
    ),
    h("checkpoints", "Pattern 1: Checkpoints before big actions"),
    p(
      "Let the AI do the routine work on its own, but pause before anything costly, public or hard to reverse. A travel assistant can compare flights freely, then ask “Book this one?” before it spends money.",
    ),
    p(
      "Good checkpoint copy is short and specific: say what will happen, what it affects and give a clear choice. “Send 12 emails to your team?” beats “Are you sure?”",
    ),
    h("undo", "Pattern 2: Undo and a visible history"),
    p(
      "People relax when they know they can go back. Show what the AI changed, keep a simple activity log and make “Undo” easy to find. If you can’t undo an action, say so before it happens.",
    ),
    quote("“The more an AI can do, the more people need a clear way to take it back.”"),
    h("uncertainty", "Pattern 3: Honest uncertainty"),
    p(
      "AI can be wrong and sound confident. Match your wording to how reliable the result really is. Use softer language, such as “This looks like…”, when confidence is low, and show where an answer came from so people can check it.",
    ),
    p(
      "Research summaries from Nielsen Norman Group suggest that people lean on the AI to explore, but go back to regular search when accuracy matters. Design for that: make checking easy, not shameful.",
    ),
    h("errors", "Pattern 4: Errors that help people recover"),
    p(
      "Every AI feature will fail sometimes. Plan for it. Say what went wrong in plain words, keep the person’s work and offer a next step: try again, edit by hand or contact support.",
    ),
    p(
      "Add a quick way to give feedback on each result, such as a thumbs-down with a short reason. It helps the team improve the system and tells the person you’re listening.",
    ),
    h("structure", "Pattern 5: Structure over open chat"),
    p(
      "A blank chat box asks users to know what to type. Many 2026 products now guide people with structured flows, suggested actions and forms, and let the AI handle the messy middle. Keep chat for open questions, and give common tasks a clear path.",
    ),
    takeaways([
      "Pause for approval before costly or hard-to-reverse actions.",
      "Always offer undo and show what the AI changed.",
      "Match your language to how reliable the answer is.",
      "Write error messages that keep the user’s work and offer a next step.",
      "Use structured flows for common tasks, chat for open questions.",
    ]),
    p(
      "These patterns are not new rules. They are old UX ideas, like feedback, control and clear language, applied to software that now acts for us. [Add one real AI feature you designed and which pattern helped most.]",
    ),
    sources([
      { label: "Microsoft HAX Toolkit: Guidelines for Human-AI Interaction", url: "https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/" },
      { label: "Contrast UX: How AI is rewiring UX in 2026", url: "https://contrastux.com/blog/how-ai-is-rewiring-ux-2026" },
      { label: "Designing for AI agents in 2026: patterns and frameworks", url: "https://shumin.design/blog/ai-agent-design-2026/" },
      { label: "Nielsen Norman Group: articles on AI and UX", url: "https://www.nngroup.com/articles/" },
    ]),
  ],
  keepReading: ["ai-design-workflow", "ai-design-job-market", "ux-copy-as-a-designer"],
};

const aiMarket: ArticleBody = {
  toc: [
    { id: "numbers", label: "What the numbers say" },
    { id: "jobs", label: "The job market is splitting" },
    { id: "exposed", label: "Which work is most exposed" },
    { id: "valued", label: "Which skills are rising" },
    { id: "do", label: "What I’d do next" },
  ],
  blocks: [
    lead(
      "Is AI replacing designers? The honest answer from 2026 data is: it’s replacing some tasks, changing most jobs and creating new ones. Here is what the research shows, and where it falls short.",
    ),
    h("numbers", "What the numbers say"),
    p(
      "The biggest study I found is the AI in Design 2026 report from Designer Fund and Foundation Capital. It surveyed 906 designers in more than 60 countries in March 2026. As reported by coverage of the study, weekly AI use among designers rose from 54% to 91%, the average designer now uses about 7 AI tools (up from 3), and around half have shipped AI-generated code to production.",
    ),
    p(
      "The same coverage reports that 73% of designers feel more pressure on speed, quality and output, while only 28% of leaders say their company has formally changed how it works. Teams are moving faster than their processes.",
    ),
    quote("“Designers are doing more, owning more and shipping more than a year ago.”"),
    h("jobs", "The job market is splitting"),
    p(
      "Two things are true at once. SignalFire’s 2026 talent report, as summarized by other writers, says design hiring at 12 large tech companies is down 48% compared with 2019. At the same time, Academy UX’s tracker showed roughly 20,700 product design postings in the US in October 2026, with AI product designer and design engineer roles growing about 15% month over month.",
    ),
    p(
      "In other words: fewer generic roles, more specialized ones. One analysis of 2,739 product designer postings found that about 18% already list generative AI skills. And Figma’s February 2026 survey of design managers reports that 73% want candidates who are proficient in AI tools.",
    ),
    h("exposed", "Which work is most exposed"),
    p(
      "Repetitive production work faces the most pressure: resizing assets, templated graphics, background removal and quick layout variants. These are tasks where speed matters more than judgment, and AI is fast.",
    ),
    p(
      "Work that depends on understanding people, choosing what to build and making trade-offs across a team is much harder to automate. Nielsen Norman Group’s 2026 coverage also points to AI fatigue: people lose patience with AI features that feel rushed or don’t solve a real need. Someone has to make the call on what actually helps.",
    ),
    h("valued", "Which skills are rising"),
    p(
      "From the sources above, four skills keep coming up: user research and problem framing, designing AI features (trust, errors, control), working closely with engineers, and using AI tools well and critically. Designers who can code a little or prototype with AI also stand out.",
    ),
    h("do", "What I’d do next"),
    p(
      "For my own career, I focus on what AI can’t do for me: talking to users, setting direction and leading a team of 4 designers. And I use AI to speed up the rest. [Add one concrete change you made to your own workflow this year.]",
    ),
    takeaways([
      "AI use among designers is now close to universal in surveys.",
      "Hiring is shifting from generic roles to specialized, AI-aware ones.",
      "Routine production work is the most exposed.",
      "Research, judgment and AI-product skills are growing in value.",
      "Companies are moving faster than their processes, so clear ways of working are an advantage.",
    ]),
    p(
      "A caution on the data: most figures here come from industry surveys, job-board trackers and secondary write-ups. They don’t always agree on definitions, so read them as direction, not exact truth, and check the original reports.",
    ),
    sources([
      { label: "Designer Fund: AI in Design 2026", url: "https://designerfund.com/blog/ai-in-design-2026" },
      { label: "Foundation Capital: How AI is reshaping design in tech", url: "https://foundationcapital.com/ideas/how-ai-is-reshaping-design-in-tech" },
      { label: "Academy UX: UX job market update", url: "https://www.academyux.com/ux-job-market-hot-or-not" },
      { label: "InterviewStack: Product designers in 2026", url: "https://interviewstack.io/blog/how-ai-is-changing-product-designer-2026" },
      { label: "Designer hiring at big tech is down 48% since 2019 (SignalFire data, via Medium)", url: "https://medium.com/design-bootcamp/designer-hiring-at-big-tech-is-down-48-since-2019-new-job-titles-keep-appearing-d02260aa305f" },
    ]),
  ],
  keepReading: ["ai-ux-patterns", "ai-design-workflow", "graphic-to-product-design"],
};

const aiWorkflow: ArticleBody = {
  toc: [
    { id: "rule", label: "My one rule" },
    { id: "research", label: "Research and synthesis" },
    { id: "explore", label: "Exploring ideas" },
    { id: "build", label: "Design and prototype" },
    { id: "words", label: "Copy and edge cases" },
    { id: "review", label: "Review with the team" },
  ],
  blocks: [
    lead(
      "AI is now part of my daily design process, but not the part that decides. This is the workflow I use with my team of 4 designers, step by step, and where I stop and think for myself.",
    ),
    h("rule", "My one rule"),
    p(
      "AI can draft, but a person decides. I use it to get to a first version faster, then I check every result against what we know about our users. If I can’t explain why a choice is right, it doesn’t ship.",
    ),
    h("research", "Research and synthesis"),
    p(
      "After interviews or tests, I use AI to cluster notes and pull out possible themes. It saves hours of sorting. Then I go back to the raw notes and recordings to confirm each theme, because summaries can miss or invent details.",
    ),
    p(
      "I never let AI replace talking to users. It helps with the paperwork after the conversation. [Add which tool you use for this.]",
    ),
    h("explore", "Exploring ideas"),
    p(
      "When I’m stuck, I ask AI for ten different ways to solve a problem, including odd ones. Most are not usable, but one or two change how I think. I treat the list as a starting point for sketching, not an answer.",
    ),
    quote("“AI gives me more options. Judgment picks the right one.”"),
    h("build", "Design and prototype"),
    p(
      "I design in Figma with our design system, so every screen already uses the same tokens, components and states. That is the guardrail: AI-assisted drafts must still use our system, or they don’t come in.",
    ),
    p(
      "For quick prototypes, AI helps me test an idea before I spend a day polishing it. Then we rebuild the winning idea properly with the design system and the engineers. [Add a prototyping tool you use, if any.]",
    ),
    h("words", "Copy and edge cases"),
    p(
      "I ask AI for first drafts of button labels, error messages and empty states, then edit them for tone. On OneIELTS, our learners are stressed, so I cut anything that sounds pushy or clever.",
    ),
    p(
      "I also ask it to list edge cases I may have missed: empty, loading, error, slow connection. It’s a good checklist, and I still verify it with the developers.",
    ),
    h("review", "Review with the team"),
    p(
      "In design review, we say when AI helped and what we changed. It keeps the team honest, and it helps everyone learn what works. Quality still has to meet the same bar, whether a person or a tool made the first draft.",
    ),
    takeaways([
      "AI drafts, people decide.",
      "Use AI to sort research notes, then verify against the source.",
      "Ask for many options, then pick with judgment.",
      "Keep AI-assisted work inside your design system.",
      "Be open in reviews about where AI helped.",
    ]),
    p(
      "The tools will change every few months. The habits that matter, like asking why, testing with real people and caring about the details, will not.",
    ),
  ],
  keepReading: ["ai-ux-patterns", "ai-design-job-market", "leading-a-design-team"],
};

export const articleBodies: Record<string, ArticleBody> = {
  "graphic-to-product-design": graphicToProduct,
  "design-system-from-scratch": designSystem,
  "leading-a-design-team": leadingTeam,
  "ux-copy-as-a-designer": uxCopy,
  "usability-test-in-one-afternoon": usability,
  "designing-ed-tech-for-test-takers": edTech,
  "naming-components": naming,
  "ai-ux-patterns": aiPatterns,
  "ai-design-job-market": aiMarket,
  "ai-design-workflow": aiWorkflow,
};
