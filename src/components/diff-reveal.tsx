'use client'

import { useEffect, useRef } from 'react'

/** Reveals the diff's lines once, when the block scrolls into view. Lines are visible without JS. */
export function DiffReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Already on screen at load: arm, then reveal on the next frame.
      el.dataset.armed = 'true'
      requestAnimationFrame(() => requestAnimationFrame(() => (el.dataset.seen = 'true')))
      return
    }
    el.dataset.armed = 'true'
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = 'true'
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
