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

- Routes: `/` (overview: intro, skills, experience, education, featured projects, contact) and `/projects` (full project list with a technology filter).
- CV served as `/cv.pdf`. Light/dark theme toggle. Installed as a PWA.
- Content lives in `src/data/resume.tsx`.

## Capabilities and Constraints

- Next.js 14 App Router, Tailwind, shadcn/radix primitives, framer-motion, next-themes.
- Bilingual: Spanish and English, with a visitor-facing language switch. Content (descriptions, roles, degrees, project copy) must exist in both languages.
- Keep: technology filter on projects, CV download, theme toggle, links to GitHub / LinkedIn / X / email.

## Brand Commitments

- Name: Javier Guerra. Domain: javierguerra.dev. Handle: jwar28.
- Portrait photo at `public/me.png`.
- Visual register: the owner chose the familiar, canonical developer-portfolio register over expressive directions ("el portafolio es de desarrollador web, no de artista"). Bar: leerob.com, brittanychiang.com, rauno.me.

## Evidence on Hand

- Source of truth for career facts: the owner's CVs, served as `public/cv-es.pdf` and `public/cv-en.pdf` (`public/cv.pdf` mirrors the English one).
- Work: Siigo, Automation Analyst (Jun 2026–present); AnniQ, AI and Automation Engineer (Nov 2025–present, remote USA); NTT DATA, Data/BI Analyst on the Terpel GNV billing project (Jun–Dec 2022).
- One quantified result, from the CV: a full day of manual accounting work reduced to 20 seconds. Another: LLM dependencies removed from critical pipelines, cutting their operational cost to zero.
- Education: UNAB Systems Engineering (Feb 2023–present, GPA 4.2/5), SENA technologist (Mar 2020–Jun 2022), Universidad Popular del Cesar (Feb 2020–Nov 2022, GPA 4.1/5).
- 13 projects with screenshots in `public/work/` and links in `src/data/resume.tsx`.
- No testimonials, client logos or endorsements exist; none may be invented.

## Product Principles

1. Real work first: shipped, linkable projects are the strongest proof; lead with them.
2. Respect the skim: a recruiter must get name, role, stack, and contact in the first screen.
3. Honest scale: present an early-career engineer confidently without inflating titles or claims.
4. Equal footing in both languages: neither version is a lesser translation.
