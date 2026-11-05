---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/projects/page.tsx"]
---

# Surface: portfolio (home `/[lang]` and `/[lang]/projects`)

Mode: Experience (portfolio). Audience: recruiters and freelance clients equally (see PRODUCT.md). Bilingual ES/EN by route. Mobile-first: the owner asked that it look good on desktop and even better on phones.

Action: email (primary), download CV, open a project (live/code), LinkedIn/GitHub.
Proof: real shipped projects with screenshots and links; Siigo, AnniQ and NTT DATA roles with the two CV metrics (1 día → 20 s; herramientas dispersas → portal único Next.js + Supabase); education. Every fact traceable to the CV PDFs or to the public GitHub repo (project dates = repo creation month). No invented metrics, versions, dates, testimonials or response-time promises. Dead links are removed, not shown.
Constraints: keep technology filter on /projects, CV, theme toggle (light + dark), language switch, GitHub/LinkedIn/email.

## Direction contract

THESIS: The career is a project's release history. Each role, study and shipped project is a dated release with typed changes (Añadido, Mejorado, Eliminado, Migrado, En curso, Analizado); refuses the centered single-column bio-plus-cards portfolio this site just was.

OWN-WORLD: Warm paper ground (#fbfaf7) and ink; changelog semantics carry the only colour: green Añadido, blue Mejorado/En curso, red Eliminado, as soft pill fields plus a red/green diff block. Schibsted Grotesk for voice, Geist Mono for tags, dates and diffs. Rounded 10–16px cards on hairlines; CalVer tags (v2026.06), never invented semver.

STORY: The visitor reads the latest release first (who, role, metrics), scrubs releases to see trajectory and real work, and closes on "¿Siguiente versión?" with email.

FIRST VIEWPORT: Repo crumb `jwar28 / javier-guerra` left; Proyectos, CV (desktop), language and theme right. Huge name, then one row: avatar, CalVer tag, soft green "Última versión · jun 2026" pill (below the name, never a kicker above it). Role, bio with location, Escríbeme + CV on desktop. A `resultados.diff` block (red − / green + lines with semibold values: 1 día → 20 segundos, herramientas dispersas → portal único Next.js + Supabase; footer 13 proyectos · languages) sits right on desktop and starts inside the first phone viewport; it replaces a stats card, which would be the hero-metric template. Sticky release scrubber at the fold. Mobile: GitHub/LinkedIn in the tag row; fixed thumb bar with Escríbeme + CV.

FORM: Grounded direction F (changelog), chosen by the owner from 11 mock directions; position 3 on the ordered list. seed:e90066f031edf25b. Signature interaction: the sticky scrubber tracks the release in view and scrolls itself on mobile; the diff block reveals its −/+ lines when it enters the viewport.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
