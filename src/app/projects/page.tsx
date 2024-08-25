'use client'

import BlurFade from '@/components/magicui/blur-fade'
import { ProjectCard } from '@/components/project-card'
import { Combobox } from '@/components/ui/combobox'
import { DATA } from '@/data/resume'
import { useState } from 'react'
import { TECHS } from './techs'

const BLUR_FADE_DELAY = 0.04

export default function ProjectsPage() {
  const [selectedTechnology, setSelectedTechnology] = useState('')

  const filteredProjects = selectedTechnology
    ? DATA.projects.filter((project: any) =>
        (project.technologies as string[]).includes(selectedTechnology),
      )
    : DATA.projects

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className='space-y-12 w-full'>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className='flex flex-col space-y-4'>
            <div className='space-y-2'>
              <div className='text-xl font-bold'>My Projects</div>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Here you can find the complete collection of projects i&apos;ve
                worked on.
              </p>
            </div>
          </div>
          <div className='pt-5 flex max-sm:justify-center'>
            <Combobox
              options={TECHS}
              label='Select technology...'
              onValueChange={setSelectedTechnology}
            />
          </div>
        </BlurFade>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
          {filteredProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </BlurFade>
  )
}
