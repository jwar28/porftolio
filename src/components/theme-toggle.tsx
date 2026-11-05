'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      type='button'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={label}
      title={label}
      className='nav-item grid size-8 place-items-center !px-0'
    >
      <SunIcon className='size-4 dark:hidden' strokeWidth={1.75} />
      <MoonIcon className='hidden size-4 dark:block' strokeWidth={1.75} />
    </button>
  )
}
