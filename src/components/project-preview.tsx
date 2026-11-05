import type { Project } from '@/data/resume'
import Image from 'next/image'

/** Screenshot in a thin frame. Callers render nothing for projects without one. */
export function ProjectPreview({
  project,
  sizes,
  priority = false,
}: {
  project: Project
  sizes: string
  priority?: boolean
}) {
  return (
    <div className='preview relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-subtle'>
      {project.image && (
        <Image
          src={project.image}
          alt=''
          fill
          sizes={sizes}
          priority={priority}
          className='preview-img object-cover object-left-top'
        />
      )}
    </div>
  )
}
