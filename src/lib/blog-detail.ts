// Article content from the Figma "Blog detail" frame.

export type Block =
  | { type: "lead"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "takeaways"; title: string; items: string[] };

export const blogDetail = {
  category: "Career",
  title: "From graphic design to product design: what changed for me",
  subtitle:
    "The skills that carried over, the ones I had to learn from scratch, and what I’d tell anyone making the same switch.",
  meta: [
    { label: "Written by", value: "Dip Singha" },
    { label: "Published", value: "Nov 12, 2026" },
    { label: "Reading time", value: "6 min read" },
  ],
  hero: "/images/blog/hero.png",
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
  ] as Block[],
  author: {
    name: "Written by Dip Singha",
    bio: "Product designer leading a team of 4. Started in graphic design, now designing ed-tech products for web and mobile.",
    avatar: "/images/blog/avatar.png",
  },
  keepReading: ["design-system-from-scratch", "leading-a-design-team", "ux-copy-as-a-designer"],
};
