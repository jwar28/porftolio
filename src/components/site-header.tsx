import { DATA } from '@/data/resume'
import { t, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import Link from 'next/link'
import { LangSwitch } from './lang-switch'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className='flex items-center justify-between gap-4 py-6 sm:py-8'>
      <Link
        href={`/${lang}`}
        className='-mx-1 rounded px-1 text-[15px] font-semibold tracking-tight text-fg'
      >
        {DATA.name}
      </Link>
      <nav aria-label={lang === 'es' ? 'Principal' : 'Main'} className='flex items-center gap-1 text-sm'>
        <NavLink href={`/${lang}/projects`}>{dict.nav.projects}</NavLink>
        <a href={t(DATA.cvUrl, lang)} target='_blank' rel='noopener' className='nav-item'>
          {dict.nav.cv}
        </a>
        <span aria-hidden className='mx-1.5 h-4 w-px bg-line' />
        <LangSwitch lang={lang} label={dict.nav.switchLanguage} />
        <ThemeToggle label={dict.nav.toggleTheme} />
      </nav>
    </header>
  )
}
