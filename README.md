# Client Marketing Strategy and Roadmap — US

A production-ready client delivery repository for consultants who build premium marketing playbooks, strategy sites, and lead-generation landing pages.

This repo contains two real client deliverables built for **Regina Brooks**, literary agent and author of *You Should Really Write a Book*:

| Project | What it is | Live URL |
|---|---|---|
| **Regina Course Strategic Plan Site** | Full marketing playbook (strategy, channels, AI support, launch plan) | https://regina-course-strategic-plan-site.vercel.app/ |
| **Regina Memoir Course Landing Page** | High-conversion founding-cohort landing page with application flow | https://regina-memoir-course-landing-202609.vercel.app/ |

Both sites are currently **noindex, nofollow** and shared only for client review.

---

## Why this repo exists

When a client asks "what would you actually build for us?", the answer should not be a PDF or a slide deck. It should be:

1. A live strategy site they can read end-to-end.
2. A live landing page that can collect applications today.
3. Clear documentation so they (or another developer) can run and deploy it.

This repository packages both so the work is reproducible, inspectable, and ready to ship.

---

## Repository structure

```
client-marketing-strategy-roadmap-us/
├── README.md                                    # This file
├── LICENSE                                      # MIT License
│
├── regina-course-strategic-plan-site/           # Static HTML playbook site
│   ├── index.html                               # Playbook home + executive summary
│   ├── strategy.html                            # Positioning, offer, audience
│   ├── marketing.html                           # Channels, content engine, email lifecycle
│   ├── launch.html                              # 30-day launch checklist
│   ├── ai-support.html                          # AI automation map + safeguards
│   ├── regina-brooks.jpg                        # Instructor photo
│   ├── rajesh-kumar.jpg                         # Consultant photo
│   └── *.bak                                    # Original-file backups
│
└── regina-memoir-course-landing/              # Next.js lead-gen landing page
    ├── app/
    │   ├── page.tsx                             # Main landing page sections
    │   ├── layout.tsx                           # Root layout + metadata
    │   ├── globals.css                          # Editorial dark theme
    │   ├── ApplicationForm.tsx                  # Application form component
    │   ├── FaqAccordion.tsx                     # FAQ accordion
    │   ├── ScrollReveal.tsx                     # Scroll-triggered animations
    │   └── StickyCtaBar.tsx                     # Sticky bottom CTA
    ├── public/
    │   └── regina-brooks.jpg                    # Hero / about image
    ├── next.config.ts                           # Static export config
    ├── package.json                             # Dependencies
    └── ...
```

---

## The marketing strategy inside the playbook

### Positioning

- **Target buyer:** Serious memoir writers who have a story but no clear structure or publishing path.
- **Offer:** 6-week live cohort with Regina Brooks, limited to 12–15 writers.
- **Price:** $1,295 founding-cohort price.
- **Differentiator:** Taught by a working literary agent, not a general writing coach.

### Demand channels

1. **Owned audience** — email list, blog, podcast appearances.
2. **Social repurposing** — LinkedIn, Instagram, short-form video from live sessions.
3. **Partnerships** — writing conferences, MFA programs, author communities.
4. **SEO/GEO** — long-form articles on memoir writing, publishing, and book proposals.
5. **Paid media** — only after organic validation.

### AI support (backstage only)

- Content repurposing and first-draft outlines.
- Email sequence drafts.
- Landing-page A/B test copy.
- Reporting dashboards.

**Human approval gates:** All final content, pricing, and admissions decisions require Regina's sign-off.

### Launch plan

- **Week 1–2:** Validate demand with waitlist and soft outreach.
- **Week 3–4:** Open applications for founding cohort.
- **Week 5–6:** Reviews, acceptances, payment, onboarding.
- **Week 7+:** Live cohort begins; collect testimonials for the next launch.

---

## How to run locally

### Playbook site (static HTML)

The playbook is plain static HTML. Open any `.html` file directly in a browser, or serve it with any static server:

```bash
cd regina-course-strategic-plan-site
python3 -m http.server 8000
```

Then open http://localhost:8000.

### Landing page (Next.js)

```bash
cd regina-memoir-course-landing
npm install
npm run dev
```

Open http://localhost:3000.

To build for static export:

```bash
npm run build
```

The `dist/` folder will contain the static export.

---

## How to deploy

Both projects are configured for **Vercel**.

### Playbook site

```bash
cd regina-course-strategic-plan-site
vercel --prod
```

### Landing page

```bash
cd regina-memoir-course-landing
vercel --prod
```

The landing page uses Next.js static export (`output: 'export'`) so it can be deployed to any static host.

---

## Tech stack

| Layer | Playbook | Landing Page |
|---|---|---|
| Framework | Static HTML + CSS | Next.js 16 + React + TypeScript |
| Styling | Custom CSS | Tailwind CSS |
| Fonts | System fonts | Playfair Display + Geist Sans |
| Animation | CSS transitions | CSS + Intersection Observer |
| Form | Static placeholder | Client-side application form (demo) |
| Deployment | Vercel | Vercel |

---

## Current status

| Item | Status |
|---|---|
| Playbook content | Complete |
| Landing page design | Complete |
| Mobile responsiveness | Complete |
| Application form | Demo client-side only |
| Real form backend | Not connected |
| Indexing | Blocked (`noindex, nofollow`) |

---

## Next recommended steps

1. Connect the application form to a real backend (Tally, Typeform, or custom API).
2. Set up email confirmation flow for applicants.
3. Add analytics (Plausible, Fathom, or Vercel Analytics).
4. Remove `noindex, nofollow` after client approval.
5. Set up a custom domain.

---

## Screenshots

*Screenshots can be added here once client review is complete.*

---

## License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE).

You are free to use, modify, and reuse this structure for your own client work.

---

## Prepared by

**Rajesh Kumar** — Founder, [BrandOps Site](https://www.brandops.site)

Built for strategic client review. Not for public distribution until approved.
