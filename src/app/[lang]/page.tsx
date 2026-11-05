import { DiffReveal } from '@/components/diff-reveal'
import { Icons } from '@/components/icons'
import { ProjectAsset } from '@/components/project-asset'
import { ChangeList, Release } from '@/components/release'
import { ReleaseScrubber, type ScrubberItem } from '@/components/release-scrubber'
import { DATA } from '@/data/resume'
import { calver, formatDate, t, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { ArrowRight, ArrowUpRight, FileText, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/** "label: value" → label in regular weight, value in semibold so the result reads at a glance. */
function DiffText({ text }: { text: string }) {
  const i = text.lastIndexOf(': ')
  if (i < 0) return <span>{text}</span>
  return (
    <span>
      {text.slice(0, i + 1)} <b className='whitespace-nowrap font-semibold'>{text.slice(i + 2)}</b>
    </span>
  )
}

type Entry =
  | { type: 'work'; date: string; job: (typeof DATA.work)[number] }
  | { type: 'edu'; date: string; item: (typeof DATA.education)[number] }
  | { type: 'projects'; date: string }

function Socials({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-0.5 ${className}`}>
      {[
        { href: DATA.contact.github, label: 'GitHub', Icon: Icons.github },
        { href: DATA.contact.linkedin, label: 'LinkedIn', Icon: Icons.linkedin },
      ].map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label} title={label} className='icon-btn'>
            <Icon aria-hidden className='size-5' />
          </a>
        </li>
      ))}
    </ul>
  )
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const short: Record<string, string> = {
  'Universidad Autónoma de Bucaramanga': 'UNAB',
  'Servicio Nacional de Aprendizaje (SENA)': 'SENA',
  'Universidad Popular del Cesar': 'UPC',
}

export default function Home({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = getDictionary(lang)
  const featured = DATA.projects.filter(p => p.featured)
  const featuredDates = featured.map(p => p.date).filter((d): d is string => !!d).sort()
  const latest = DATA.work.map(w => w.start).sort().at(-1)!

  // Every entry is placed by its real start date; featured projects sit at their newest repo date.
  const entries: Entry[] = [
    ...DATA.work.map(job => ({ type: 'work' as const, date: job.start, job })),
    ...DATA.education.map(item => ({ type: 'edu' as const, date: item.start, item })),
    { type: 'projects' as const, date: featuredDates.at(-1)! },
  ].sort((a, b) => b.date.localeCompare(a.date))
  const oldest = entries.at(-1)

  const idOf = (e: Entry) =>
    e.type === 'work' ? slugify(e.job.company) : e.type === 'edu' ? slugify(short[e.item.school] ?? e.item.school) : 'proyectos'
  const yearRange = `${featuredDates[0].slice(0, 4)}–${featuredDates.at(-1)!.slice(0, 4)}`

  const chips: ScrubberItem[] = entries.map(e => ({
    id: idOf(e),
    tag: e.type === 'projects' ? yearRange : calver(e.date),
    label:
      e.type === 'work' ? e.job.company : e.type === 'edu' ? short[e.item.school] ?? e.item.school : dict.releases.projectsChip,
  }))

  return (
    <>
      <section aria-labelledby='intro' className='grid gap-6 pb-10 pt-3 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-end md:gap-14 md:pb-14 md:pt-14'>
        <div>
          <h1
            id='intro'
            className='text-[clamp(3rem,14vw,5.25rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-fg'
          >
            {DATA.name}
          </h1>
          <div className='mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-2 md:mt-5 md:gap-x-3'>
            <Image
              src={DATA.avatarUrl}
              alt=''
              width={80}
              height={80}
              priority
              className='size-9 rounded-full border border-line bg-subtle object-cover'
            />
            <span className='tag'>{calver(latest)}</span>
            <span className='latest'>{dict.hero.latest(formatDate(latest, lang))}</span>
            <Socials className='-ml-1 md:hidden' />
          </div>
          <p className='mt-4 text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] text-fg sm:text-[1.375rem]'>
            {dict.hero.role}
          </p>
          <p className='mt-3 max-w-[38rem] text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]'>
            {t(DATA.bio, lang)} <span className='whitespace-nowrap'>{DATA.location}.</span>
          </p>
          <div className='mt-7 hidden flex-wrap items-center gap-2.5 md:flex'>
            <a href={`mailto:${DATA.contact.email}`} className='btn btn-primary'>
              <Mail aria-hidden className='size-[18px]' strokeWidth={2} />
              {dict.hero.email}
            </a>
            <a href={t(DATA.cvUrl, lang)} target='_blank' rel='noopener' className='btn'>
              <FileText aria-hidden className='size-[18px]' strokeWidth={2} />
              {dict.hero.cv}
            </a>
            <Socials className='ml-1' />
          </div>
        </div>

        <DiffReveal className='diff'>
          <p className='diff-head'>
            <span>{lang === 'es' ? 'resultados.diff' : 'results.diff'}</span>
            <span>{dict.diff.file}</span>
          </p>
          <p className='diff-line diff-del'>
            <span aria-hidden>−</span>
            <DiffText text={dict.diff.manualLabel} />
          </p>
          <p className='diff-line diff-add'>
            <span aria-hidden>+</span>
            <DiffText text={dict.diff.machineLabel} />
          </p>
          <p className='diff-line diff-del'>
            <span aria-hidden>−</span>
            <DiffText text={dict.diff.toolingLabel} />
          </p>
          <p className='diff-line diff-add'>
            <span aria-hidden>+</span>
            <DiffText text={dict.diff.portalLabel} />
          </p>
          <p className='border-t border-line px-4 py-2.5 text-[12px] text-muted'>
            {DATA.projects.length} {lang === 'es' ? 'proyectos' : 'projects'} ·{' '}
            {DATA.spokenLanguages.map(l => `${t(l.name, lang)} ${t(l.level, lang).charAt(0).toLowerCase()}${t(l.level, lang).slice(1)}`).join(' · ')}
          </p>
        </DiffReveal>
      </section>

      <section aria-labelledby='releases'>
        <h2 id='releases' className='sr-only'>
          {dict.releases.title}
        </h2>
        <ReleaseScrubber items={chips} label={dict.releases.jump} />

        {entries.map(e => {
          const id = idOf(e)
          const initial = e === oldest ? dict.releases.initial : undefined
          if (e.type === 'work') {
            const { job } = e
            return (
              <Release
                key={id}
                id={id}
                tag={calver(job.start)}
                when={`${formatDate(job.start, lang)} — ${formatDate(job.end, lang)}`}
                org={
                  job.href ? (
                    <a href={job.href} target='_blank' rel='noopener noreferrer' className='underline decoration-line decoration-2 underline-offset-4 hover:decoration-fg'>
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )
                }
                title={t(job.title, lang)}
                sub={[job.companyDetail, t(job.location, lang)].filter(Boolean).join(' · ')}
                initial={initial}
              >
                <ChangeList items={job.highlights} lang={lang} dict={dict} />
                <p className='mt-5 font-mono text-[12px] text-muted'>{job.tools.join(' · ')}</p>
              </Release>
            )
          }
          if (e.type === 'edu') {
            const { item } = e
            return (
              <Release
                key={id}
                id={id}
                tag={calver(item.start)}
                when={`${formatDate(item.start, lang)} — ${formatDate(item.end, lang)}`}
                org={short[item.school] ?? item.school}
                title={t(item.degree, lang)}
                sub={
                  <>
                    <a href={item.href} target='_blank' rel='noopener noreferrer' className='underline decoration-line decoration-2 underline-offset-4 hover:decoration-fg'>
                      {item.school}
                    </a>{' '}
                    · {item.location}
                    {item.gpa ? (
                      <>
                        {' '}
                        · {dict.gpa} <span className='font-mono text-fg'>{item.gpa}</span>
                      </>
                    ) : null}
                  </>
                }
                initial={initial}
              />
            )
          }
          return (
            <Release
              key={id}
              id={id}
              tag={yearRange}
              when={`${lang === 'es' ? 'repos creados' : 'repos created'} · ${formatDate(featuredDates[0], lang)} — ${formatDate(featuredDates.at(-1)!, lang)}`}
              org={dict.categories.web}
              title={dict.releases.projects}
              sub={dict.releases.projectsSub}
            >
              <ul className='no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0'>
                {featured.map((project, i) => (
                  <li key={project.slug} className='w-[84%] shrink-0 snap-start sm:w-auto'>
                    <ProjectAsset project={project} lang={lang} dict={dict} sizes='(min-width: 1024px) 400px, (min-width: 640px) 45vw, 84vw' priority={i < 2} />
                  </li>
                ))}
              </ul>
              <Link href={`/${lang}/projects`} className='arrow-link mt-6 text-[15px]'>
                {dict.sections.allProjects(DATA.projects.length)}
                <ArrowRight aria-hidden className='size-4' strokeWidth={2} />
              </Link>
            </Release>
          )
        })}
      </section>

      <section aria-labelledby='deps' className='grid gap-4 border-t border-line py-9 md:grid-cols-[12.5rem_minmax(0,1fr)] md:gap-10 md:py-12'>
        <h2 id='deps' className='text-[1.625rem] font-extrabold tracking-[-0.03em] text-fg md:text-[15px] md:font-bold md:tracking-normal'>
          {dict.releases.dependencies}
        </h2>
        <dl className='overflow-hidden rounded-2xl border border-line bg-card'>
          {(Object.keys(DATA.skills) as (keyof typeof DATA.skills)[]).map(group => (
            <div key={group} className='grid gap-1 border-b border-line px-4 py-3.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4 sm:px-5'>
              <dt className='text-[14px] font-medium text-muted sm:pt-px'>{dict.skills[group]}</dt>
              <dd className='text-[15.5px] text-fg'>{DATA.skills[group].join(', ')}</dd>
            </div>
          ))}
          <div className='grid gap-1 px-4 py-3.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4 sm:px-5'>
            <dt className='text-[14px] font-medium text-muted sm:pt-px'>{dict.skills.spoken}</dt>
            <dd className='text-[15.5px] text-fg'>
              {DATA.spokenLanguages.map(l => `${t(l.name, lang)} (${t(l.level, lang)})`).join(', ')}
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby='contact' className='border-t border-line py-12 md:py-16'>
        <h2 id='contact' className='text-[clamp(2rem,9vw,3.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-fg'>
          {dict.contact.title}
        </h2>
        <p className='mt-4 max-w-[40rem] text-pretty text-[17px] leading-relaxed text-muted'>{dict.contact.body}</p>
        <div className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-3'>
          <a href={`mailto:${DATA.contact.email}`} className='btn btn-primary max-w-full'>
            <Mail aria-hidden className='size-[18px] shrink-0' strokeWidth={2} />
            <span className='truncate'>{DATA.contact.email}</span>
          </a>
          <a href={DATA.contact.linkedin} target='_blank' rel='noopener noreferrer' className='arrow-link text-[15px]'>
            {dict.contact.linkedin}
            <ArrowUpRight aria-hidden className='size-4' strokeWidth={2} />
          </a>
          <a href={DATA.contact.github} target='_blank' rel='noopener noreferrer' className='arrow-link text-[15px]'>
            GitHub
            <ArrowUpRight aria-hidden className='size-4' strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  )
}
