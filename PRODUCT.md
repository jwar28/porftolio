# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and hiring engineers** evaluating Javier for a full-time role. They skim in under a minute, want to gauge level, stack, and real shipped work, then open the CV or reach out.
- **Prospective freelance clients** (small businesses, local brands) deciding whether Javier can deliver a site or app for them. They want to see finished, live work and an easy way to make contact.

Both arrive from LinkedIn, GitHub, a CV link, or a direct referral, on desktop or phone.

## Product Purpose

Personal portfolio of Javier Guerra, a software engineer based in Bucaramanga, Colombia. It exists to turn a visit into a conversation: an interview request, a freelance inquiry, or a CV download. Success is a visitor who leaves knowing what Javier builds, trusting it is real, and knowing how to reach him.

## Positioning

AI and automation engineer with a frontend/full stack foundation, growing toward data engineering (per the Sept 2026 CV). Builds data pipelines and automations (n8n, Power Automate, PostgreSQL, SQL, Python) and the web products around them (Next.js, Supabase), with shipped client sites and university tools as earlier proof.

## Operating Context

- Routes: `/[lang]` (es/en; release history: intro, results diff, work, featured projects, education, dependencies, contact) and `/[lang]/projects` (every project, dated, with a technology filter).
- CVs served as `/cv-es.pdf` and `/cv-en.pdf`. Light/dark theme toggle. Installed as a PWA.
- Content lives in `src/data/resume.tsx`.

## Capabilities and Constraints

- Next.js 14 App Router, Tailwind, next-themes, lucide icons. Built and deployed with pnpm on Vercel.
- Bilingual: Spanish and English, with a visitor-facing language switch. Content (descriptions, roles, degrees, project copy) must exist in both languages.
- Keep: technology filter on projects, CV download, theme toggle, links to GitHub / LinkedIn / email (X was removed at the owner's request).

## Brand Commitments

- Name: Javier Guerra. Domain: javierguerra.dev. Handle: jwar28.
- Portrait photo at `public/me.png`.
- Visual register: a developer portfolio, never an artist's ("el portafolio es de desarrollador web, no de artista"). In Nov 2026 the owner moved from the canonical single-column register to the changelog direction (career as a dated release history), chosen from 11 mock directions. Mobile must look even better than desktop.
- Accuracy rule (owner, Nov 2026: "que toda la info esté accurate"): every fact traces to the CV PDFs or a public source. Release tags are CalVer from real start dates, never invented version numbers; project dates are the month the public GitHub repo was created; projects with no public repo stay undated; dead links are removed rather than shown.

## Evidence on Hand

- Source of truth for career facts: the owner's CVs, served as `public/cv-es.pdf` and `public/cv-en.pdf` (`public/cv.pdf` mirrors the English one).
- Work: Siigo, Automation Analyst (Jun 2026–present); AnniQ, AI and Automation Engineer (Nov 2025–Jun 2026, remote USA); NTT DATA, Data/BI Analyst on the Terpel GNV billing project (Jun–Dec 2022).
- One quantified result, from the CV: a full day of manual accounting work reduced to 20 seconds. The site's diff block also contrasts scattered automation tools with the single Next.js + Supabase portal built at Siigo.
- Education: UNAB Systems Engineering (Feb 2023–Jul 2026, GPA 4.2/5, graduated), SENA technologist (Mar 2020–Jun 2022), Universidad Popular del Cesar (Feb 2020–Nov 2022, GPA 4.1/5).
- 13 projects in `src/data/resume.tsx` (9 with screenshots in `public/work/`), each dated by its GitHub repo creation month where one exists.
- No testimonials, client logos or endorsements exist; none may be invented.

## Product Principles

1. Real work first: shipped, linkable projects are the strongest proof; lead with them.
2. Respect the skim: a recruiter must get name, role, stack, and contact in the first screen.
3. Honest scale: present an early-career engineer confidently without inflating titles or claims.
4. Equal footing in both languages: neither version is a lesser translation.
