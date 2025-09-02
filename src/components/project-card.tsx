'use client'

import BlurFade from '@/components/magicui/blur-fade'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

interface Props {
  title: string
  href?: string
  description: string
  tags: readonly string[]
  link?: string
  image?: string
  images?: readonly string[]
  video?: string
  links?: readonly {
    icon: React.ReactNode
    type: string
    href: string
  }[]
  className?: string
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  images,
  video,
  links,
  className,
}: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [imageKey, setImageKey] = useState(0) // Para forzar re-render del BlurFade

  const projectImages = images && images.length > 0 ? [...images] : (image ? [image] : [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isHovering && projectImages.length > 1) {
      const initialTimeout = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
        setImageKey(prev => prev + 1)

        interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
          setImageKey(prev => prev + 1)
        }, 1500)
      }, 400)

      return () => {
        clearTimeout(initialTimeout)
        if (interval) clearInterval(interval)
      }
    } else {
      setCurrentImageIndex(0)
      setImageKey(0)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isHovering, projectImages.length])

  const hasMultipleImages = projectImages.length > 1
  const currentImage = hasMultipleImages && isHovering
    ? projectImages[currentImageIndex]
    : projectImages[0]
  return (
    <Card
      className={
        'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'
      }
    >
      <Link
        href={href || '#'}
        className={cn('block cursor-pointer', className)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className='pointer-events-none mx-auto h-40 w-full object-cover object-top' // needed because random black line at bottom of video
          />
        )}
        {currentImage && (
          <div className="relative h-40 w-full overflow-hidden">
            {currentImage.toLowerCase().includes('logo') ? (
              <BlurFade key={imageKey} delay={0} duration={0.3}>
                <div className="flex items-center justify-center h-40 w-full bg-white">
                  <Image
                    src={currentImage}
                    alt={title}
                    width={600}
                    height={160}
                    className="object-contain h-28 w-full px-4"
                  />
                </div>
              </BlurFade>
            ) : (
              <BlurFade key={imageKey} delay={0} duration={0.3}>
                <Image
                  src={currentImage}
                  alt={title}
                  width={500}
                  height={300}
                  className="h-40 w-full object-cover object-top"
                />
              </BlurFade>
            )}
            {hasMultipleImages && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 dark:bg-white/20 dark:rounded-full dark:px-2 dark:py-1 transition-all duration-200">
                {projectImages.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-1 h-1 rounded-full transition-all duration-300",
                      index === currentImageIndex
                        ? "bg-foreground/80 dark:bg-black"
                        : "bg-foreground/30 dark:bg-black/70"
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </Link>
      <CardHeader className='px-2'>
        <div className='space-y-1'>
          <CardTitle className='mt-1 text-base'>{title}</CardTitle>
          <div className='hidden font-sans text-xs underline print:visible'>
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <Markdown className='prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert'>
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className='mt-auto flex flex-col px-2'>
        {tags && tags.length > 0 && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {tags?.map(tag => (
              <Badge
                className='px-1 py-0 text-[10px]'
                variant='secondary'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className='px-2 pb-2'>
        {links && links.length > 0 && (
          <div className='flex flex-row flex-wrap items-start gap-1'>
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target='_blank'>
                <Badge key={idx} className='flex gap-2 px-2 py-1 text-[10px]'>
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
