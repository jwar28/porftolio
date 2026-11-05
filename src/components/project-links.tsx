import type { Project } from '@/data/resume'
import type { Dictionary } from '@/i18n/dictionaries'
import { ArrowUpRight } from 'lucide-react'

export function ProjectLinks({ project, dict }: { project: Project; dict: Dictionary }) {
  return (
    <ul className='flex flex-wrap gap-x-4 gap-y-1 text-[13px]'>
      {project.links.map(link => (
        <li key={link.href + link.kind}>
          <a
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='arrow-link'
            aria-label={`${dict.project[link.kind]}: ${project.title}`}
          >
            {dict.project[link.kind]}
            <ArrowUpRight aria-hidden className='size-3.5' strokeWidth={1.75} />
          </a>
        </li>
      ))}
    </ul>
  )
}
