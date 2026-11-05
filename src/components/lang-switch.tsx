'use client'

import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname()
  const other: Locale = lang === 'es' ? 'en' : 'es'
  const target = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${other}`) || `/${other}`
  return (
    <Link
      href={target}
      hrefLang={other}
      lang={other}
      aria-label={label}
      title={label}
      className='nav-item font-mono text-xs uppercase tracking-wide'
    >
      {other}
    </Link>
  )
}
