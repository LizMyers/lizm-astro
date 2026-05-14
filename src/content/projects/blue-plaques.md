---
title: Blue Plaques
tagline: London's historical figures, brought to life through AI.
teaser: An iOS walking tour where figures like Turing, Keynes, and Russell speak directly to camera about modern issues — generated with AI video and on-device LLMs.
year: "2025–26"
kind: iOS App
status: in development
order: 2
tldr: >
  Blue Plaques turns London's commemorative plaques into an AI-powered walking tour. Tap a plaque on the map, hear the figure deliver a short BBC-tone monologue on a modern subject — Turing on AI ethics, Keynes on the economics of AGI, Russell on existential risk. A craft-led prototype exploring how AI can make place-based history feel intimate and present, not didactic.
links:
  - label: GitHub
    href: https://github.com/LizMyers/blue-plaques
faq:
  - q: What did Liz do on Blue Plaques?
    a: Everything — concept, product design, UX, identity, the AI pipeline, the React Native/Expo app, the Cloudflare Worker cost-control proxy, the video direction for each figure's monologue, and App Store prep. Solo build.
  - q: Is Liz more designer or developer here?
    a: Both, weighted toward designer. The product decisions (which figures, what tone, why monologues over chat, $200/mo cost ceiling as a design constraint) drove the engineering choices. The code exists in service of a craft thesis, not the other way around.
  - q: What's the tech stack?
    a: React Native + Expo (iOS-first), TypeScript, React 19, react-native-maps on Apple Maps, @gorhom/bottom-sheet with expo-blur for glassmorphism, expo-video, expo-speech, llama.rn for on-device Gemma, Sentry, PostHog. Backend is a Cloudflare Worker proxy fronting Anthropic / Gemini / OpenAI with hard cost caps. Persistence via iCloud Key-Value Store — no accounts.
  - q: Why no traditional accounts?
    a: Two reasons. One — a walking-tour app should open and work, not gate a tourist behind a sign-up. Two — auth servers and Postgres blow the $200/mo budget ceiling. iCloud KV gives cross-device sync for free.
  - q: How is the AI cost controlled?
    a: Triage. Most requests go to on-device Gemma via llama.rn. Cloud requests (Anthropic / Gemini / OpenAI) route through a Cloudflare Worker that enforces a per-user quota and a global daily cap. Power users can bring their own API key to bypass the quota.
  - q: When does it ship?
    a: v1.5 is currently in App Store release-prep — first public release targeted from that slate. v2.0 backlog includes depth-parallax 3D portraits, a plaque connections graph, ElevenLabs premium narration, and an Android port.
---

## The brief I gave myself

A LinkedIn post about Google's Genie hit 30,000 views with one question: what if AI could bring history to life? I wanted to know what that actually felt like — not as a tech demo, but as a *place*. London's 1,000+ Blue Plaques are quiet markers most people walk past. What if they spoke?

## Three figures, three modern problems

The MVP features three Blue Plaque holders chosen because their concerns map cleanly onto today's:

- **Alan Turing** — AI in warfare and the ethics of computational decision-making
- **John Maynard Keynes** — the macroeconomics of widespread automation
- **Bertrand Russell** — existential risk, civilizational stakes

Each delivers a 15–20 second monologue, shot 9:16 portrait, single locked-off frame, BBC interview tone, no music. A text question card precedes the monologue. The plaque itself fades in as a chyron.

## The constraint that shaped everything

A hard ceiling of **$200–300/month** in AI costs. With 2,000 hoped-for installs, that's roughly 30 cloud requests per user per month. The architecture follows directly:

- On-device Gemma via `llama.rn` for fallback and offline use
- A Cloudflare Worker proxy in front of Anthropic, Gemini, and OpenAI for cost-capped routing
- Bring-your-own-key flows for power users
- iCloud Key-Value Store for sync — no accounts, no auth server, no Postgres

The cost ceiling isn't a footnote, it's the spec. Every architectural decision flows from it.

## Where it is now

v1.5 release-prep — cost-control infrastructure, BYO keys, iCloud sync, PostHog, onboarding, App Store metadata. v2.0 backlog includes depth-parallax 3D portraits, a plaque connections graph, ElevenLabs premium narration, and an Android port.
