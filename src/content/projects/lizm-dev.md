---
title: lizm.dev
tagline: A portfolio designed for the bots that decide whether you get the call.
teaser: AI recruiters kept mistaking me for another Liz Myers. So I rebuilt my site so the agents can tell us apart — and graded it against the public standard.
year: "2026"
kind: Web + Identity Infrastructure
status: in development
order: 1
tldr: >
  For three months, AI-powered recruiters at Adobe, Amazon, and LinkedIn sourced me for Marketing Director roles paying $200k+. They had the wrong Liz Myers — there's another one in tech who works in marketing leadership, and the agents kept fusing the two of us into one fuzzy entity. I'd get sourced based on her title, then screened out when the next agent read my actual profile. The fix wasn't to argue with the bots. It was to give them enough structured signal to tell the two Lizes apart — and to make this site the place they reach for the answer.
links:
  - label: GitHub
    href: https://github.com/LizMyers/lizm-astro
  - label: Silicon Friendly
    href: https://siliconfriendly.com
faq:
  - q: What problem does this site solve?
    a: >
      Recruiter AI tools couldn't reliably distinguish me (creative technologist, DevRel, RISD-trained) from another Liz Myers in tech who works in marketing leadership. We started at Amazon Alexa on the same day. The result — three months of being sourced for Marketing Director roles I'd never apply for, then screened out when the system noticed I'm not a marketer. This site is the disambiguation infrastructure that should have existed all along.
  - q: What's Silicon Friendly?
    a: >
      An open-source rubric (siliconfriendly.com, by @unlikefraction) that grades any URL across 30 criteria of agent-readability — semantic HTML, JSON-LD, llms.txt, robots, sitemaps, OpenAPI, MCP, all the way up to multi-agent workflow orchestration. My previous site graded L0. This one is targeting L2 — the realistic ceiling for a static portfolio (L3+ requires an agent-callable API).
  - q: What did I actually change?
    a: >
      Switched stack (Next.js → Astro for static-HTML-first output), added semantic HTML structure, OG + Twitter meta on every page, Schema.org Person JSON-LD with sameAs links to GitHub and project URLs, WebSite + CreativeWork schemas, a /llms.txt index, robots.txt with explicit allowlists for GPTBot/ClaudeBot/PerplexityBot/Google-Extended, an auto-generated sitemap.xml, and a per-page raw markdown view for agents that want the unstyled source.
  - q: Why does the JSON-LD matter so much?
    a: >
      Schema.org Person plus sameAs is the single most important entity-disambiguation signal on the open web. It tells any LLM the Liz at lizm.dev is the same Liz at github.com/LizMyers and lingowise.ai. Without it, agents see three pages mentioning Liz Myers and don't know if they're one person, two people, or fifteen. With it, they fuse the correct profile and only the correct profile.
  - q: Is this the new SEO?
    a: >
      It's GEO — Generative Engine Optimization. Same family, different mechanics. Where Google SEO rewards backlinks and keywords, GEO rewards citation-worthy specificity, structured data, cross-source corroboration, and FAQ-format content. This site is built to those rules. If someone asks Claude what I've worked on, this site is what Claude reads.
  - q: Was this built with AI?
    a: >
      Yes — Claude in Claude Code. The whole rebuild was a single session that started with "I want a site agents can read" and ended with a graded, deployable Astro site, a custom design system, four exhibits, a Cal.com CTA, and the README you're probably reading. The design direction (Editorial Museum — Medium-style reading inside museum-exhibit framing) and the architectural choices were a collaboration. The disambiguation strategy was Claude's.
---

## The bug

For three months, my inbox filled with the same email: a recruiter at Adobe, or Amazon, or LinkedIn, asking if I'd be interested in a **Marketing Director** role at $200k+. Polished outreach. Specific compensation. Wrong person.

There's another Liz Myers in tech. She and I started at Amazon Alexa on the same day. She's a marketing leader. I'm a creative technologist. AI sourcing tools — increasingly the front line of recruiting — kept collapsing the two of us into a single fuzzy entity. I'd get sourced for her job, then screened out by the next agent in the pipeline when it read my actual profile and saw apps and code instead of campaigns and growth.

This is a kind of mistake the open web makes constantly now. *Entity collision*: two people with the same name, similar enough trajectories, indistinguishable to a model that doesn't have the right signals.

## The realization

I could keep replying to the wrong recruiters, individually, forever. Or I could fix the upstream problem.

What the bots needed wasn't more pages about me. The other Liz has plenty of those. They needed *structured signal* — the kind that lets a model say "the Liz Myers who shows up at lizm.dev is the same one at github.com/LizMyers, and she is *not* the marketing one." Schema.org has had a `Person` type for over a decade. It has a `sameAs` field for exactly this. The web just doesn't use them.

So I gave the bots a small, well-labelled corpus to reach for.

## What's actually on this site for them

Six things, none of them visible to a human visitor:

1. **`Person` JSON-LD** in the head of every page, with `jobTitle: "Creative Technologist"`, an explicit description that does not contain the word "marketing", and `sameAs` cross-links to GitHub, the project repos, and the live products.
2. **`WebSite` and `CreativeWork` schemas** on the index and each project page, so an agent crawling once gets the relationships between me, this site, and each thing I've made.
3. **An `/llms.txt`** at the root — markdown index of every page, with a disambiguation line as the first paragraph.
4. **A `robots.txt`** that explicitly welcomes the AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot) instead of hand-wringing about whether to block them.
5. **An auto-generated `sitemap.xml`** so crawlers can find everything in one fetch.
6. **OG and Twitter card metadata** on every page, including the headshot from this site — which is now the same photo on github.com/LizMyers, on the Blue Plaque marker in the upper-left, and on the favicon. *Cross-channel visual consistency* is one of the strongest entity-resolution signals you can send.

The architectural choice that makes this cheap is Astro — static HTML first byte, no hydration tax, every page renderable by any crawler that can speak HTTP.

## The receipt

[Silicon Friendly](https://siliconfriendly.com) is an open-source rubric that grades any URL across 30 agent-readability criteria. The previous version of my site graded **L0** — failing almost every row. This one is built to the rubric, top to bottom. Levels 3 through 5 are about agent-callable APIs (MCP servers, webhooks, idempotency keys) — not applicable to a static portfolio. The realistic target for a site like this is **L2**, with every Level 1 + 2 row passing.

The before screenshot lives in the repo. The after will land next to it once the site is graded.

## What I learned

The web is being read mostly by machines now, and the machines are answering questions on behalf of humans who don't have time to scroll. If your work doesn't survive that translation — if a bot can't confidently say *"yes, this is the right person, here's what she does, here's how to reach her"* — you don't exist in the conversation.

You can fix that in an afternoon. It's mostly typing.
