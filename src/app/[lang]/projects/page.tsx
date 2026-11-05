import { DATA } from '@/data/resume'
import { isLocale, t, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import type { Metadata } from 'next'
import { ProjectIndex } from './project-index'

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = (isLocale(params.lang) ? params.lang : 'es') as Locale
  const dict = getDictionary(lang)
  return {
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
    alternates: {
      canonical: `/${lang}/projects`,
      languages: { es: '/es/projects', en: '/en/projects' },
    },
  }
}

export default function ProjectsPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = getDictionary(lang)

  // Technologies shared by 2+ projects, ordered by use, then alphabetically.
  const counts = new Map<string, number>()
  for (const p of DATA.projects) for (const tech of p.technologies) counts.set(tech, (counts.get(tech) ?? 0) + 1)
  const techs = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .filter(([, n]) => n >= 2)
    .map(([tech]) => tech)

  // Newest repo first; projects without a public repo to date them by go last.
  const projects = [...DATA.projects]
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
    .map(p => ({ ...p, descriptionText: t(p.description, lang) }))

  return (
    <div className='pt-6 md:pt-14'>
      <h1 className='text-[clamp(2.75rem,13vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-fg'>
        {dict.projectsPage.title}
      </h1>
      <p className='mt-4 max-w-[40rem] text-pretty text-[17px] leading-relaxed text-muted'>{dict.projectsPage.intro}</p>
      <ProjectIndex projects={projects} techs={techs} lang={lang} />
    </div>
  )
}
