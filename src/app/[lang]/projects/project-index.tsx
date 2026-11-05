'use client'

import { ProjectLinks } from '@/components/project-links'
import { ProjectPreview } from '@/components/project-preview'
import { TechList } from '@/components/tech-list'
import type { Project } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
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
      <div className='mt-10' role='group' aria-label={dict.projectsPage.filterLabel}>
        <p className='mb-3 text-[13px] text-muted'>{dict.projectsPage.filterLabel}</p>
        <div className='-mx-1 flex gap-x-4 overflow-x-auto px-1 [scrollbar-width:none]'>
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

      <p aria-live='polite' className='mt-10 border-b border-line pb-3 text-[13px] text-muted'>
        {dict.projectsPage.count(visible.length)}
      </p>

      {visible.length === 0 ? (
        <p className='py-12 text-[15px] text-muted'>{dict.projectsPage.empty}</p>
      ) : (
        <ul>
          {visible.map(project => {
            const primary = project.links.find(l => l.kind === 'live') ?? project.links[0]
            return (
              <li
                key={project.slug}
                className={`project group grid gap-4 border-b border-line py-7 sm:gap-6 ${project.image ? 'sm:grid-cols-[11rem_1fr]' : ''}`}
              >
                {project.image ? (
                  <a href={primary.href} target='_blank' rel='noopener noreferrer' tabIndex={-1} aria-hidden>
                    <ProjectPreview project={project} sizes='(min-width: 640px) 176px, 100vw' />
                  </a>
                ) : null}
                <div className='min-w-0'>
                  <div className='flex items-baseline justify-between gap-3'>
                    <h2 className='text-[15px] font-semibold tracking-tight text-fg'>
                      <a href={primary.href} target='_blank' rel='noopener noreferrer' className='title-link'>
                        {project.title}
                      </a>
                    </h2>
                    <span className='shrink-0 text-[12px] text-muted'>{dict.categories[project.category]}</span>
                  </div>
                  <p className='mt-1.5 text-pretty text-[14px] leading-relaxed text-muted'>{project.descriptionText}</p>
                  <div className='mt-3 flex flex-col gap-2.5'>
                    <TechList items={project.technologies} />
                    <ProjectLinks project={project} dict={dict} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
