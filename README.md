# Dip Singha — Portfolio

A Next.js (App Router, TypeScript, Tailwind) portfolio built from the Figma file "Portfolio Design". Page links follow the Figma prototype; see [`docs/prototype-map.md`](docs/prototype-map.md).

## Run it locally

Needs Node 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Where contact form messages go

When someone fills in the "Let's talk" form, the message is **emailed to you** through [Resend](https://resend.com). It arrives in your inbox with the visitor's name in the subject, and **Reply-To is set to the visitor's address**, so pressing Reply answers them directly. Every send also shows up in the Resend dashboard under **Emails** (delivered, bounced, and so on).

Nothing is stored on the website itself. If an email is rejected, the visitor sees an error with a link to email you instead, and the reason is written to the server log only.

### One-time setup

1. Create a free account at https://resend.com and make an API key at https://resend.com/api-keys.
2. Set these environment variables (see [`.env.example`](.env.example)):

   | Variable | What it is |
   |---|---|
   | `RESEND_API_KEY` | Your Resend API key. Server-side only, never commit it. |
   | `CONTACT_TO_EMAIL` | The inbox that receives messages. |
   | `CONTACT_FROM_EMAIL` | Optional. The sender. Default: `Portfolio <onboarding@resend.dev>`. |

   - **Locally:** copy `.env.example` to `.env.local` and fill it in. `.env.local` is git-ignored.
   - **On Vercel:** Project → Settings → Environment Variables. Add all three for **Production** and **Preview**, then **redeploy** (changes only apply to new deployments).
3. **Important:** until you verify a domain in Resend, the default sender `onboarding@resend.dev` can only deliver to **the email address you signed up to Resend with**. Set `CONTACT_TO_EMAIL` to that address at first. To send from your own domain (for example `contact@yourdomain.com`), add and verify the domain under Resend → Domains, then set `CONTACT_FROM_EMAIL="Portfolio <contact@yourdomain.com>"`.

### Safeguards

- The server validates name, email and message (it does not trust the browser).
- A hidden field catches simple spam bots (they get a fake "sent" and nothing is emailed).
- Each address can send 5 messages per 10 minutes (best effort, per server instance).
- Message text is escaped before it goes into the HTML email.

## Deploy to Vercel

1. Import the GitHub repository at https://vercel.com/new (framework is detected as Next.js).
2. Add the environment variables above.
3. Deploy. Every push to a branch gets its own preview URL.

## Project notes

- Shared page width and side padding live in `src/lib/layout.ts`; type styles and colors are tokens in `src/app/globals.css`.
- Page content is currently in `src/lib/*.ts`; moving it to MDX files is planned.
- This project uses Next.js 16, which differs from older versions. Check `node_modules/next/dist/docs/` before relying on older APIs.
- `public/resume.pdf` does not exist yet; add your PDF there for the "Download resume" buttons to work.
