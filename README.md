# lizm.dev

The source of [lizm.dev](https://lizm.dev) — Liz Myers' personal portfolio, built in Astro.

## Why this site exists

Hiring managers don't read portfolios anymore. They ask their AI.

So this site is built for that — a small, structured set of pages an LLM agent can ingest, summarise, and cite when someone asks *"what's Liz worked on?"* Humans can read it too (the typography is for them), but the architecture is designed so a busy human's agent can answer the question on their behalf — including booking a 15-minute call.

## The catalyst — Silicon Friendly

I ran [siliconfriendly.com](https://siliconfriendly.com) against another site of mine. It graded **L0 — Not Silicon Friendly Yet** and failed almost every Level 1 + 2 check: no semantic HTML, no JSON-LD, no server-side rendering, no `robots.txt`, no sitemap, no `/llms.txt`. The site looked fine to humans but was effectively invisible to agents.

That failure is what pointed me at Astro. The whole Silicon Friendly checklist is basically a list of things you get for free — or near-free — when you ship static HTML instead of a hydrated SPA.

## Why Astro

Astro ships **HTML, not JavaScript**. That matters more than ever now that the readers of the open web are increasingly agents:

- 🟢 **Zero-JS by default** — every page is static HTML on first byte. Agents see the content immediately, no hydration.
- 🟢 **Content collections** — projects live as type-checked markdown files. One file = one exhibit.
- 🟢 **MDX + components** — long-form essays can embed interactive bits where they help, without bloating pages that don't need them.
- 🟢 **Built-in image optimization, sitemaps, and SSG** — the standard "designed for crawlers" toolkit, just on.
- 🟢 **Tiny output** — full site is < 50 KB before fonts.

If you're building anything content-led (portfolio, docs, blog, marketing site) and you want agents to read it as easily as humans, this is the framework you reach for in 2026.

## What's inside

- **Editorial Museum** design language — cream + navy + orange, Newsreader serif, mono metadata placards
- **Card → TLDR → catalog essay** structure per exhibit
- **FAQ per project** — native `<details>` accordions, zero JS, exactly the format LLMs cite when answering questions about Liz's work
- **Native `<dialog>` lightbox** — ~6 lines of inline JS, no library
- **Plaque-as-signature** — full Blue Plaque on the home page, smaller monogram seal on interior pages
- **Cal.com CTA** — booking buttons that an agent can follow on a human's behalf

## Coming next

Working towards **Silicon Friendly L4 / L5**:

- `llms.txt` + per-page raw markdown endpoints (the agent-readable bundle)
- `Schema.org/Person` + `CreativeWork` JSON-LD on every page
- `sitemap.xml`, `robots.txt`
- Map + markers component for Blue Plaques walking-tour preview
- Webhook listener so Kenny (Liz's witty AI receptionist) announces new bookings out loud

## Local dev

```sh
nvm use 24      # Astro 6 needs Node 22+
npm install
npm run dev     # localhost:4321
```

Build: `npm run build` → static output in `dist/`.

## Stack

Astro 6 · TypeScript · Newsreader · Inter · JetBrains Mono · Cal.com · Vercel (deploy)

---

Built with [Claude Code](https://claude.com/claude-code). © Liz Myers.
