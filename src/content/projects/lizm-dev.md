---
title: lizm.dev
tagline: A portfolio designed for robots, readable by humans.
teaser: The site you're on. An exhibit about itself — why Astro, and how to build a portfolio agents can read as easily as people.
year: "2026"
kind: Web + Design System
status: in development
order: 4
tldr: >
  The premise: hiring managers don't read portfolios anymore — they ask their AI. So I built one for the AI to read. Static HTML, zero framework JavaScript on the critical path, native `<dialog>` and `<details>` elements instead of libraries, Schema.org structured data in every head, an `llms.txt` index, and raw-markdown endpoints for every page. The aesthetic — "Editorial Museum" — is borrowed from museum catalogs because that's the closest analog to what a portfolio actually is: a small curated set of objects, each with a placard and an essay.
links:
  - label: GitHub
    href: https://github.com/LizMyers/lizm-astro
faq:
  - q: Why Astro instead of Next.js?
    a: Next.js bundles a runtime; Astro ships HTML. For a content site read mostly by bots and distracted humans, every byte of JavaScript is a tax someone else pays. Astro lets me write components in a familiar syntax and get a 100% static output. The interactive bits (image lightbox) are ~10 lines of vanilla JS, opted in per-component.
  - q: What does "designed for robots" actually mean?
    a: Three things. One — semantic HTML with content in the initial response (not hydrated). Two — Schema.org JSON-LD on every page so LLMs build a confident entity profile of me and the projects. Three — an /llms.txt index plus raw-markdown endpoints so an agent can ingest the whole site in two HTTP calls.
  - q: Why cream, navy, and orange?
    a: The cream is lifted from the Blue Plaques app — a warm off-white (#F8F7F4) that reads as paper, not screen. Navy (#1B3A6F) is the classic London Blue Plaque colour and does all the heavy lifting for buttons and primary text accents. Orange (#E8763A) is the "now showing" highlight — used sparingly for selected state and link hover. Three colours, no greys-on-greys.
  - q: What's the typography?
    a: Newsreader for body and headlines (a modern serif designed for screen reading, with a wide optical-size range), Inter for UI chrome, and JetBrains Mono for metadata placards. Every size is fluid via clamp(), so the same page looks right on a 320px phone and a 4K monitor without breakpoints fighting each other.
  - q: How is the image lightbox so light?
    a: Native `<dialog>` element with showModal(). About six lines of inline JavaScript delegated at the document level handles every image on the page. No library, no portal, no focus-trap polyfill — the browser does all of that for free.
  - q: Was the whole site built with Claude?
    a: Yes. The design direction ("Editorial Museum" — Medium-style reading inside museum-exhibit framing), the palette decisions, the FAQ-instead-of-bot pivot, and the scaffolding were a collaborative session with Claude in Claude Code. The pipeline (content collections, schema, layouts, components) is the part of the site I'm most proud of — it means adding a new project is one markdown file.
---

## The premise

A friend told me her last three roles came through LinkedIn DMs and her portfolio site got eight visits in a year. I asked whose she'd looked at recently. She said: "Oh — I just ask Claude what so-and-so has worked on."

So this site is built for busy humans and their agents. Claude, ChatGPT, Perplexity, the next generation of tools that will increasingly do the reading on behalf of people who don't have time to scroll. If I can make my work *legible* to those readers, I can show up in conversations I'd otherwise be absent from — and then I can write about what I learned building it, which is the other half of what I do.

That changed the brief.

## What "agent-readable" means in practice

Three concrete moves, none of them visible to a human visitor:

### 1. Static HTML with the content in the initial response

No client-side rendering. No "hydration." The first byte the bot receives contains every word it needs. Astro is the only popular framework currently shipping this as the default — Next.js, Remix, and SvelteKit all assume a runtime.

### 2. Schema.org structured data

Every page carries JSON-LD. The homepage declares a `Person` with `sameAs` pointing at my GitHub, LinkedIn, and project URLs. Each project page declares a `CreativeWork` with explicit `creator`, `dateCreated`, `keywords`. This lets an LLM build *one* confident model of me instead of three fuzzy ones.

### 3. An `llms.txt` and raw-markdown endpoints

Following Jeremy Howard's [proposed convention](https://llmstxt.org), `/llms.txt` is a markdown index of the site — title, tagline, links — sized for one fetch. Each project has a companion `.md` route that returns the raw essay without HTML chrome. An agent can ingest the entire site in two HTTP requests.

## The Editorial Museum

The visual direction is borrowed from museum catalogs. A portfolio is exactly that: a small curated set of objects, each with a placard (year, medium, status) and an essay. So:

- **Cards** are exhibit thumbnails — image + placard + teaser
- **TLDR pages** are the vitrine — hero artifact, short label, deeper-reading CTA
- **Catalog essays** are the long-form — Medium-style serif body, drop cap, generous measure
- **FAQ at the bottom** of every exhibit — for the visitor (human or otherwise) who skimmed and still has a question

The palette commits hard: cream walls, navy plinth labels, orange "now showing" highlights. No greys-on-greys, no soft drop shadows, no glassmorphism. Restraint as a tell.

## What I learned

A site you build for agents is also a site that's faster, more accessible, and easier to maintain — those properties aren't in tension, they're the same property. The work was making myself stop adding things.
