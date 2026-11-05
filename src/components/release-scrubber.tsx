'use client'

import { useEffect, useRef, useState } from 'react'

export type ScrubberItem = { id: string; tag: string; label: string }

/** Sticky row of release chips that follows the release in view. */
export function ReleaseScrubber({ items, label }: { items: ScrubberItem[]; label: string }) {
  const [current, setCurrent] = useState(items[0]?.id)
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = items.map(i => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el)
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let active = items[0]?.id
      for (const el of targets) if (el.getBoundingClientRect().top < line) active = el.id
      setCurrent(active)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  useEffect(() => {
    const row = rowRef.current
    const chip = row?.querySelector<HTMLElement>(`[data-id="${current}"]`)
    if (row && chip && row.scrollWidth > row.clientWidth) {
      row.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' })
    }
  }, [current])

  return (
    <nav aria-label={label} className='sticky top-0 z-20 -mx-4 border-b border-line bg-bg/95 backdrop-blur-sm sm:-mx-8'>
      <div ref={rowRef} className='no-scrollbar flex gap-2 overflow-x-auto px-4 py-3 sm:px-8'>
        {items.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-id={item.id}
            aria-current={current === item.id ? 'true' : undefined}
            className='chip'
          >
            <span className='font-semibold'>{item.tag}</span>
            <span className='font-sans'>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
