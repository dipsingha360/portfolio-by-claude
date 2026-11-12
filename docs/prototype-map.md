# Figma prototype map

Source of truth for navigation: the click reactions in the Figma file
"Portfolio Design" (section "Portfolio design full flow"). Every route and
click target in the site follows this map. Desktop and mobile frames are wired
the same way, except where noted.

## Global (navbar, footer, menu)
| Element | Target |
|---|---|
| Logo "Dip Singha" (mobile menu) | Home |
| Nav links Home / Projects / Services / About / Blog | `/`, `/projects`, `/services`, `/about`, `/blog` |
| "Let's talk" buttons (navbar, footer, About, Service detail) | **Contact** (desktop: modal overlay; mobile: full-screen form) |
| Footer "Contact" link | Contact |
| Mobile menu "Let's talk ↗" | Contact form (mobile) |
| Mobile menu close button | Back |
| Footer LinkedIn / Dribbble / Email, social icons | Not connected in the prototype (external links) |
| Hero "Download resume" | Not connected in the prototype |

## Home
| Element | Target |
|---|---|
| Hero "View my projects" | Projects |
| Project cards | Project detail (OneIELTS) |
| "See all projects" | Projects |
| Service items | Service detail (Product Design) |
| "View all services" | Services |
| Article cards | Blog detail |
| "Read all articles" | Blog |

## Lists
| Page | Element | Target |
|---|---|---|
| Projects | every project card | Project detail (OneIELTS) |
| Services | every service item | Service detail (Product Design) |
| Blog | every article card and its "Read article" button | Blog detail |

The prototype only designs one detail page per type, so every card points to
that one frame. The routes are dynamic (`/projects/[slug]`, `/services/[slug]`,
`/blog/[slug]`) and render the designed detail template.

## Detail pages
| Page | Element | Target |
|---|---|---|
| Project detail | "← All projects", "See all projects" | Projects |
| Service detail | "← All services" | Services |
| Service detail | "Let's talk about your product" | Contact |
| Service detail | "Read the OneIELTS case study", "Read the case study" | Project detail |
| Blog detail | "← All articles", "Read all articles" | Blog |
| Blog detail | "More about me" | About |

## Contact flow
- Desktop: **modal overlay** (560px dialog, 60% dark backdrop) with Full name, Email, Message and "Send message". Close button closes it. Footer line: "Prefer email? Write to dipsingha2@gmail.com".
- "Send message" goes to **Sending**, then after **1.5 seconds** to **Sent** ("Thanks, your message is on its way", "Back to the site").
- Desktop: the sent "Back to the site" and every close button close the overlay.
- Mobile: full-screen form. Close goes back. After sending, "Back to the site" goes **Home**.
