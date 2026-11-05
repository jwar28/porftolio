import { DATA } from '@/data/resume'
import { t, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'
import { FileText, Mail } from 'lucide-react'

/** Thumb-zone actions on phones. Hidden from md up, where the hero carries them. */
export function MobileBar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <nav
      aria-label={dict.hero.email}
      className='fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_auto] gap-2 border-t border-line bg-bg/95 px-4 pt-2.5 backdrop-blur-md pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden'
    >
      <a href={`mailto:${DATA.contact.email}`} className='btn btn-primary h-[52px]'>
        <Mail aria-hidden className='size-[18px]' strokeWidth={2} />
        {dict.hero.email}
      </a>
      <a href={t(DATA.cvUrl, lang)} target='_blank' rel='noopener' className='btn h-[52px]'>
        <FileText aria-hidden className='size-[18px]' strokeWidth={2} />
        CV
      </a>
    </nav>
  )
}
