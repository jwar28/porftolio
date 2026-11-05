import { Icons } from '@/components/icons'
import { ProjectLinks } from '@/components/project-links'
import { ProjectPreview } from '@/components/project-preview'
import { TechList } from '@/components/tech-list'
import { DATA } from '@/data/resume'
import { formatDate, t, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { ArrowRight, ArrowUpRight, FileText, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const dict = getDictionary(lang)
  const featured = DATA.projects.filter(p => p.featured)

  return (
    <>
      <section aria-labelledby='intro' className='reveal pb-2 pt-6 sm:pt-10'>
        <Image
          src={DATA.avatarUrl}
          alt={DATA.name}
          width={160}
          height={160}
          priority
          className='size-16 rounded-full border border-line bg-subtle object-cover sm:size-[72px]'
        />
        <h1 id='intro' className='mt-6 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-fg sm:text-[2.5rem]'>
          {DATA.name}
        </h1>
        <p className='mt-2 text-[15px] text-muted'>
          {dict.hero.role} · {DATA.location}
        </p>
        <p className='mt-6 max-w-[36rem] text-pretty text-[17px] leading-relaxed text-fg/90'>
          {t(DATA.bio, lang)}
        </p>

        <div className='mt-8 flex flex-wrap items-center gap-3'>
          <a href={`mailto:${DATA.contact.email}`} className='btn btn-primary'>
            <Mail aria-hidden className='size-4' strokeWidth={1.75} />
            {dict.hero.email}
          </a>
          <a href={t(DATA.cvUrl, lang)} target='_blank' rel='noopener' className='btn btn-secondary'>
            <FileText aria-hidden className='size-4' strokeWidth={1.75} />
            {dict.hero.cv}
          </a>
          <ul className='flex items-center gap-1 sm:ml-1'>
            {[
              { href: DATA.contact.github, label: 'GitHub', Icon: Icons.github },
              { href: DATA.contact.linkedin, label: 'LinkedIn', Icon: Icons.linkedin },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  title={label}
                  className='icon-btn'
                >
                  <Icon aria-hidden className='size-[18px]' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby='work' className='section'>
        <div className='section-head'>
          <h2 id='work'>{dict.sections.work}</h2>
          <Link href={`/${lang}/projects`} className='arrow-link text-sm'>
            {dict.sections.allProjects(DATA.projects.length)}
            <ArrowRight aria-hidden className='size-3.5' strokeWidth={1.75} />
          </Link>
        </div>
        <ul className='grid gap-x-6 gap-y-12 sm:grid-cols-2'>
          {featured.map((project, i) => {
            const primary = project.links.find(l => l.kind === 'live') ?? project.links[0]
            return (
              <li key={project.slug} className='project group'>
                <a
                  href={primary.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  tabIndex={-1}
                  aria-hidden
                  className='block'
                >
                  <ProjectPreview project={project} sizes='(min-width: 640px) 320px, 100vw' priority={i < 2} />
                </a>
                <div className='mt-4 flex items-baseline justify-between gap-3'>
                  <h3 className='text-[15px] font-semibold tracking-tight text-fg'>
                    <a href={primary.href} target='_blank' rel='noopener noreferrer' className='title-link'>
                      {project.title}
                    </a>
                  </h3>
                  <span className='shrink-0 text-[12px] text-muted'>{dict.categories[project.category]}</span>
                </div>
                <p className='mt-1.5 text-pretty text-[14px] leading-relaxed text-muted'>
                  {t(project.description, lang)}
                </p>
                <div className='mt-3 flex flex-col gap-2.5'>
                  <TechList items={project.technologies} />
                  <ProjectLinks project={project} dict={dict} />
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section aria-labelledby='experience' className='section'>
        <div className='section-head'>
          <h2 id='experience'>{dict.sections.experience}</h2>
        </div>
        <ol className='flex flex-col gap-10'>
          {DATA.work.map(job => (
            <li key={job.company + job.start} className='timeline-row'>
              <p className='timeline-date'>
                {formatDate(job.start, lang)} — {formatDate(job.end, lang)}
              </p>
              <div>
                <h3 className='text-[15px] font-semibold tracking-tight text-fg'>{t(job.title, lang)}</h3>
                <p className='mt-0.5 text-[13px] text-muted'>
                  {job.href ? (
                    <a href={job.href} target='_blank' rel='noopener noreferrer' className='title-link text-fg'>
                      {job.company}
                    </a>
                  ) : (
                    <span className='text-fg'>{job.company}</span>
                  )}
                  {job.companyDetail ? `: ${job.companyDetail}` : null} · {t(job.location, lang)}
                </p>
                <ul className='mt-3 flex list-disc flex-col gap-1.5 pl-4 text-pretty text-[14px] leading-relaxed text-fg/85 marker:text-line'>
                  {job.highlights.map(h => (
                    <li key={h.en}>{t(h, lang)}</li>
                  ))}
                </ul>
                <div className='mt-3'>
                  <TechList items={job.tools} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='education' className='section'>
        <div className='section-head'>
          <h2 id='education'>{dict.sections.education}</h2>
        </div>
        <ol className='flex flex-col gap-6'>
          {DATA.education.map(item => (
            <li key={item.school} className='timeline-row'>
              <p className='timeline-date'>
                {formatDate(item.start, lang)} — {formatDate(item.end, lang)}
              </p>
              <div className='flex items-start gap-3'>
                <Image
                  src={item.logoUrl}
                  alt=''
                  width={64}
                  height={64}
                  loading='eager'
                  className='mt-0.5 size-8 shrink-0 rounded-full border border-line bg-white object-contain'
                />
                <div>
                  <h3 className='text-[15px] font-semibold tracking-tight text-fg'>{t(item.degree, lang)}</h3>
                  <p className='mt-0.5 text-[13px] text-muted'>
                    <a href={item.href} target='_blank' rel='noopener noreferrer' className='title-link'>
                      {item.school}
                    </a>
                    {' · '}
                    {item.location}
                  </p>
                  {item.gpa ? (
                    <p className='mt-0.5 text-[13px] text-muted'>
                      {dict.gpa} {item.gpa}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='skills' className='section'>
        <div className='section-head'>
          <h2 id='skills'>{dict.sections.skills}</h2>
        </div>
        <dl className='grid gap-x-6 gap-y-4 sm:grid-cols-[10rem_1fr]'>
          {(Object.keys(DATA.skills) as (keyof typeof DATA.skills)[]).map(group => (
            <div key={group} className='contents'>
              <dt className='text-[13px] text-muted sm:pt-px'>{dict.skills[group]}</dt>
              <dd className='-mt-3 text-[15px] text-fg sm:mt-0'>{DATA.skills[group].join(', ')}</dd>
            </div>
          ))}
          <div className='contents'>
            <dt className='text-[13px] text-muted sm:pt-px'>{dict.skills.spoken}</dt>
            <dd className='-mt-3 text-[15px] text-fg sm:mt-0'>
              {DATA.spokenLanguages.map(l => `${t(l.name, lang)} (${t(l.level, lang)})`).join(', ')}
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby='contact' className='section'>
        <h2 id='contact' className='text-[1.5rem] font-semibold tracking-[-0.02em] text-fg'>
          {dict.sections.contact}
        </h2>
        <p className='mt-3 max-w-[34rem] text-pretty text-[15px] leading-relaxed text-muted'>{dict.contact.body}</p>
        <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-3'>
          <a href={`mailto:${DATA.contact.email}`} className='contact-email'>
            {DATA.contact.email}
          </a>
          <a href={DATA.contact.linkedin} target='_blank' rel='noopener noreferrer' className='arrow-link text-sm'>
            {dict.contact.linkedin}
            <ArrowUpRight aria-hidden className='size-3.5' strokeWidth={1.75} />
          </a>
        </div>
      </section>
    </>
  )
}
