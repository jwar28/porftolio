import type { Project } from '@/data/resume'
import { calver, formatDate, t, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import Image from 'next/image'
import { ProjectLinks } from './project-links'

/** A project shown as a release asset: capture, dated tag, notes, links. */
export function ProjectAsset({
  project,
  lang,
  dict,
  sizes,
  priority = false,
}: {
  project: Project
  lang: Locale
  dict: Dictionary
  sizes: string
  priority?: boolean
}) {
  const primary = project.links.find(l => l.kind === 'live') ?? project.links[0]
  return (
    <article className='asset h-full'>
      {project.image ? (
        <a
          href={primary?.href}
          target='_blank'
          rel='noopener noreferrer'
          tabIndex={-1}
          aria-hidden
          className='relative block aspect-[4/3] overflow-hidden border-b border-line bg-subtle sm:aspect-[16/10]'
        >
          <Image
            src={project.image}
            alt=''
            fill
            sizes={sizes}
            priority={priority}
            className='preview-img object-cover object-left-top'
          />
        </a>
      ) : null}
      <div className='flex flex-1 flex-col p-4 sm:p-5'>
        <div className='flex flex-wrap items-center gap-x-2.5 gap-y-1'>
          <h4 className='text-[18px] font-bold tracking-[-0.015em] text-fg'>{project.title}</h4>
          <span className='font-mono text-[12px] text-muted'>
            {project.date ? `${calver(project.date)} · ${dict.releases.repo(formatDate(project.date, lang))}` : dict.releases.undated}
          </span>
        </div>
        <p className='mt-1.5 text-pretty text-[15px] leading-relaxed text-muted'>{t(project.description, lang)}</p>
        <p className='mt-2.5 font-mono text-[12px] text-muted'>{project.technologies.join(' · ')}</p>
        {project.links.length ? (
          <div className='mt-auto pt-3'>
            <ProjectLinks project={project} dict={dict} />
          </div>
        ) : null}
      </div>
    </article>
  )
}
