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

When someone fills in the "Let's talk" form, two things happen, in this order:

1. **A copy is saved in Supabase** (table `contact_messages`). Read them in the Supabase dashboard: **Table Editor → `contact_messages`** (newest first by `created_at`; tick the `read` column as you go).
2. **The message is emailed to you** through [Resend](https://resend.com). It arrives in your inbox with the visitor's name in the subject, and **Reply-To is the visitor's address**, so pressing Reply answers them directly. Every send also shows in the Resend dashboard under **Emails**.

The visitor sees "sent" if **either** step worked, so a failing email service no longer loses a message. They only see an error (with an "Email me instead" link) if both fail. The real reason is written to the server log with a `[contact]` prefix, never shown to visitors.

Both steps are optional: each one is skipped when its settings are missing.

### Settings (environment variables)

See [`.env.example`](.env.example).

| Variable | What it is |
|---|---|
| `RESEND_API_KEY` | Your Resend API key. Server-side only, never commit it. |
| `CONTACT_TO_EMAIL` | The inbox that receives messages. |
| `CONTACT_FROM_EMAIL` | Optional. The sender. Default: `Portfolio <onboarding@resend.dev>`. |
| `SUPABASE_URL` | Your Supabase project URL. |
| `SUPABASE_PUBLISHABLE_KEY` | The project's publishable key (`sb_publishable_...`). It can only add rows; row level security stops anyone reading them. |

- **Locally:** copy `.env.example` to `.env.local` and fill it in. `.env.local` is git-ignored.
- **On Vercel:** Project → Settings → Environment Variables. Add them for **Production** and **Preview**, then **redeploy** (changes only apply to new deployments).

### One-time setup

**Resend (email)**
1. Create a free account at https://resend.com and make an API key at https://resend.com/api-keys (permission: *Sending access*).
2. **Important:** until you verify a domain in Resend, the default sender `onboarding@resend.dev` can only deliver to **the email address you signed up to Resend with**. Set `CONTACT_TO_EMAIL` to that address at first (forward it to another inbox from your mail settings if you like). To send from your own domain, add and verify it under Resend → Domains, then set `CONTACT_FROM_EMAIL="Portfolio <contact@yourdomain.com>"`.

**Supabase (saved copy)**
1. The `contact_messages` table is created by the migration in [`supabase/migrations`](supabase/migrations). It allows the public key to **insert only**: no reading, changing or deleting.
2. Copy the project URL and the publishable key from the Supabase dashboard → Project Settings → API Keys.
3. Free Supabase projects **pause after about a week without activity**. If that happens, press **Restore** in the dashboard. Email still goes out in the meantime, so nothing is lost.

### Safeguards

- The server validates name, email and message (it does not trust the browser).
- A hidden field catches simple spam bots (they get a fake "sent" and nothing is saved or emailed).
- Each address can send 5 messages per 10 minutes (best effort, per server instance).
- Message text is escaped before it goes into the HTML email.
- The database enforces length limits and row level security, even against direct API calls.

## Deploy to Vercel

1. Import the GitHub repository at https://vercel.com/new (framework is detected as Next.js).
2. Add the environment variables above.
3. Deploy. Every push to a branch gets its own preview URL.

## Project notes

- Shared page width and side padding live in `src/lib/layout.ts`; type styles and colors are tokens in `src/app/globals.css`.
- Page content is currently in `src/lib/*.ts`; moving it to MDX files is planned.
- This project uses Next.js 16, which differs from older versions. Check `node_modules/next/dist/docs/` before relying on older APIs.
- `public/resume.pdf` does not exist yet; add your PDF there for the "Download resume" buttons to work.
