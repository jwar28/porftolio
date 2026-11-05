'use client'

import { ProjectLinks } from '@/components/project-links'
import type { Project } from '@/data/resume'
import { calver, formatDate, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Image from 'next/image'
import { useState } from 'react'

type IndexedProject = Project & { descriptionText: string }

export function ProjectIndex({
  projects,
  techs,
  lang,
}: {
  projects: IndexedProject[]
  techs: string[]
  lang: Locale
}) {
  const dict = getDictionary(lang)
  const [selected, setSelected] = useState<string | null>(null)
  const visible = selected ? projects.filter(p => p.technologies.includes(selected)) : projects

  return (
    <>
      <div className='sticky top-0 z-20 -mx-4 mt-8 border-b border-line bg-bg/95 backdrop-blur-sm sm:-mx-8' role='group' aria-label={dict.projectsPage.filterLabel}>
        <div className='no-scrollbar flex gap-2 overflow-x-auto px-4 py-3 sm:px-8'>
          {[null, ...techs].map(tech => {
            const active = selected === tech
            return (
              <button
                key={tech ?? 'all'}
                type='button'
                aria-pressed={active}
                onClick={() => setSelected(active && tech !== null ? null : tech)}
                className='filter-toggle'
              >
                {tech ?? dict.projectsPage.all}
              </button>
            )
          })}
        </div>
      </div>

      <p aria-live='polite' className='mt-6 font-mono text-[12.5px] text-muted'>
        {dict.projectsPage.count(visible.length)} · {dict.projectsPage.sorted}
      </p>

      {visible.length === 0 ? (
        <p className='py-12 text-[16px] text-muted'>{dict.projectsPage.empty}</p>
      ) : (
        <ol className='mt-4'>
          {visible.map(project => {
            const primary = project.links.find(l => l.kind === 'live') ?? project.links[0]
            return (
              <li
                key={project.slug}
                className='asset-row grid gap-3 border-t border-line py-7 md:grid-cols-[12.5rem_minmax(0,1fr)] md:gap-10'
              >
                <div className='flex flex-wrap items-center gap-x-3 gap-y-1 md:flex-col md:items-start md:gap-2'>
                  {project.date ? (
                    <>
                      <span className='tag'>{calver(project.date)}</span>
                      <span className='font-mono text-[12.5px] text-muted'>{dict.releases.repo(formatDate(project.date, lang))}</span>
                    </>
                  ) : (
                    <span className='tag-quiet'>{dict.releases.undated}</span>
                  )}
                </div>
                <div className={`grid gap-4 ${project.image ? 'sm:grid-cols-[minmax(0,1fr)_15rem] sm:gap-6' : ''}`}>
                  <div className='min-w-0'>
                    <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                      <h2 className='text-[1.375rem] font-extrabold tracking-[-0.025em] text-fg'>
                        {primary ? (
                          <a href={primary.href} target='_blank' rel='noopener noreferrer' className='hover:underline hover:decoration-2 hover:underline-offset-4'>
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h2>
                      <span className='tag-quiet h-6 font-sans text-[12px]'>{dict.categories[project.category]}</span>
                    </div>
                    <p className='mt-2 text-pretty text-[16px] leading-relaxed text-muted'>{project.descriptionText}</p>
                    <p className='mt-2.5 font-mono text-[12px] text-muted'>{project.technologies.join(' · ')}</p>
                    {project.links.length ? (
                      <div className='mt-3'>
                        <ProjectLinks project={project} dict={dict} />
                      </div>
                    ) : null}
                  </div>
                  {project.image ? (
                    <a
                      href={primary?.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      tabIndex={-1}
                      aria-hidden
                      className='asset relative order-first block aspect-[16/10] sm:order-none'
                    >
                      <Image src={project.image} alt='' fill sizes='(min-width: 640px) 240px, 100vw' className='preview-img object-cover object-left-top' />
                    </a>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </>
  )
}
