import type { Locale } from '@/i18n/config'
import { t } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { DATA } from '@/data/resume'
import Link from 'next/link'
import { LangSwitch } from './lang-switch'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className='flex items-center justify-between gap-3 py-4 sm:py-5'>
      <Link href={`/${lang}`} className='-mx-1 min-w-0 truncate rounded-md px-1 font-mono text-[13px] text-muted sm:text-[14px]'>
        <span className='hidden min-[380px]:inline'>jwar28 / </span><span className='font-semibold text-fg'>javier-guerra</span>
      </Link>
      <nav aria-label={lang === 'es' ? 'Principal' : 'Main'} className='flex items-center gap-0.5'>
        <NavLink href={`/${lang}/projects`}>{dict.nav.projects}</NavLink>
        <a href={t(DATA.cvUrl, lang)} target='_blank' rel='noopener' className='nav-item hidden sm:inline-flex'>
          {dict.nav.cv}
        </a>
        <LangSwitch lang={lang} label={dict.nav.switchLanguage} />
        <ThemeToggle label={dict.nav.toggleTheme} />
      </nav>
    </header>
  )
}
