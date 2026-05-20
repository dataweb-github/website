# DATAWEB — Landing Page PRD

## Problem statement (original)
> Build a landing page: for an IT company, with white background and dark green forecolor. The company core business is server and email management, user helpdesk and full-stack development. Please use a minimalist style.

## User choices
- Company name: **DATAWEB**
- Sections: Hero, Services (3 core), About, Contact
- Contact: **Static** (email/phone links, copy-to-clipboard) — no backend submissions
- Color: **White background + deep forest green (#0F3D2E)** forecolor
- Imagery: typography-only minimalist design

## Architecture
- Frontend-only React (CRA + craco), Tailwind, lucide-react icons
- Fonts: Cabinet Grotesk (display) + Satoshi (body) via Fontshare
- No backend changes; no MongoDB writes
- Sections are anchor-linked single-page (`/`)

## What's implemented (2026-05-20)
- Sticky glass-blur nav with `DATAWEB` brand, anchor links (Services / About / Contact) and CTA
- Hero with massive `DATAWEB` typography, status pill, dual-CTA, two-column tagline (asymmetric)
- Tech-stack marquee (Linux / 365 / Postfix / SPF·DKIM·DMARC / React / Node / FastAPI / Mongo / Docker / AWS)
- Services grid (tetris): Server & Email Management (wide), User Helpdesk, Full-stack Development
- About section with stats grid (12+ yrs, 99.98% uptime, <30m response, 40+ clients)
- Contact section: dark forest green flip, LET'S TALK display, mailto / tel / copy-to-clipboard / hours / office
- Smooth scroll + `scroll-margin-top` for anchor offsets
- Subtle grain texture, fade-up reveal animations (IntersectionObserver)
- `data-testid` attributes on every interactive / important element
- 100% frontend test pass (iteration_1.json)

## Personas
- IT manager / ops lead evaluating a managed-services partner
- Founder needing a single team for infra + helpdesk + product

## Backlog
- P1: Replace placeholder phone/email/stats with real values when provided
- P1: Add client logos / case-study slice when imagery is shared
- P2: Light testimonial section
- P2: Optional functional contact form (FastAPI + Mongo) if conversion needed
- P2: Pricing / engagement-tiers section
- P3: Blog / case-study CMS

## Next tasks
- Await real assets (logo, copy, contact info) from client
- Optional: enable functional contact form to capture leads directly on-site
