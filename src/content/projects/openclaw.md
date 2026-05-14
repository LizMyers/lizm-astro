---
title: Kenny
tagline: Liz's witty receptionist.
teaser: A repurposed Google AIY device that watches my calendar and inbox, then surfaces the things that matter — ambient, polite, never in the way.
year: "2026"
kind: Hardware + AI
status: in development
order: 3
tldr: >
  Kenny is a small physical receptionist. A repurposed Google AIY kit sits on my desk, listens for Cal.com booking webhooks and Gmail pushes, and lets me know — softly, ambiently — when something has happened. A 15-minute intro just got booked. A reply landed from someone I'm waiting on. Tomorrow morning has three calls back-to-back. Kenny is the answer to the question: *what if the office had a small, quiet butler whose entire job is to keep me oriented?*
links: []
faq:
  - q: What does Kenny actually do?
    a: Three things, all calmly. One — watches Cal.com webhooks and announces new bookings ("Liz, 30-min intro tomorrow at 10 with Sarah from Linear"). Two — watches Gmail via the API and surfaces messages that match a small set of rules (people I'm waiting on, important threads, anything tagged Priority). Three — gives a morning briefing on demand — today's calls, today's open threads, anything that slipped.
  - q: Why a physical device instead of an app?
    a: Apps demand attention. A small object on my desk *has* attention — the way a houseplant or a clock does. When Kenny lights up softly, I can choose to look or not. When my phone buzzes, I've already lost. The whole point is to be informed without being interrupted.
  - q: What hardware is Kenny?
    a: A repurposed Google AIY kit (the original cardboard-bodied Voice Kit) — Raspberry Pi Zero, microphone, speaker, single button, programmable LED. Replaced the cardboard housing with a small object that fits the desk. The hardware was discontinued years ago, which is part of the point — quiet reuse over new acquisition.
  - q: How does the Cal.com integration work?
    a: Cal.com fires a webhook on BOOKING_CREATED, BOOKING_RESCHEDULED, and BOOKING_CANCELLED. Kenny exposes a small listener (Cloudflare Tunnel back to the Pi) that receives the JSON, formats it, and routes to the LED + TTS pipeline. New booking = soft amber pulse + one-line spoken summary. Cancellation = single low chime.
  - q: How does the Gmail integration work?
    a: Gmail API + Google Pub/Sub push notifications. A small Cloud Function filters incoming mail against a few rules (sender allowlist, label "Priority", subject regex) and forwards only matches to Kenny. Most mail never reaches the device — that's the whole design.
  - q: Will Kenny ever speak unprompted?
    a: Rarely, and only for time-sensitive things — a meeting starting in five minutes, a calendar conflict that just appeared. Everything else waits to be asked. The button on top is the "tell me what's happening" trigger; that's the contract.
---

## The brief

I don't want another notification surface. I want an *object* that knows what's going on and tells me when I ask — or when something genuinely time-sensitive happens. Kenny is that object.

## Why a receptionist

Receptionists have a specific job in the social architecture of an office: they hold context. They know who's coming, when, and why. They tell you when the next thing is. They don't interrupt you with everything — only with the things you've asked to be interrupted about. The pattern is a thousand years old and works because it's about *triage* delegated to a calm presence in the room.

Software notifications are the opposite: every app gets equal volume; nothing is triaged; everything wants your attention now. Kenny is a deliberate inversion of that.

## What Kenny watches

**Cal.com** — every new booking, reschedule, and cancellation lands on Kenny first. Soft amber LED pulse, one-line spoken summary, then quiet. If I'm not in the room, the LED stays warm until I notice. No queue, no badge count, no list to clear.

**Gmail** — Kenny doesn't watch all mail. A small Cloud Function filters incoming messages against a tight allowlist: specific senders, specific labels, specific subject patterns. Only matches reach the device. The rest of my inbox stays an inbox.

On demand — pressing the button on top triggers a short briefing: today's calls, today's open threads, anything that needs a response. About fifteen seconds. Then quiet again.

## The hardware

Google AIY Voice Kit, original cardboard edition, repurposed. Raspberry Pi Zero, single mic, small speaker, button, programmable LED. The cardboard housing went; Kenny lives in a small turned-wood enclosure that matches the desk. The hardware was discontinued by Google years ago — using it instead of buying something new is part of the thesis. Quiet, considered, reusing what's already in the room.

## The behaviour contract

The whole system stands on one rule: **Kenny doesn't interrupt me with anything I didn't ask to be interrupted by.** That's the spec. Every other decision flows from it.

- Default state: dark LED, silent
- New booking: soft amber pulse, one short sentence, then quiet
- Match in the inbox filter: gentle blue glow until acknowledged
- Time-sensitive (meeting in 5 minutes, conflict just appeared): a single low chime, the only "push" Kenny does
- Button press: briefing on demand
- Anything else: ignored

Most software earns attention by demanding it. Kenny earns attention by deserving it.

## Where it is now

Hardware reassembled, AIY firmware swapped for a small Python service. Cal.com webhook listener tested end-to-end against the staging account. Gmail watch is next — Pub/Sub push handler half-written. Target: continuous use by July.
