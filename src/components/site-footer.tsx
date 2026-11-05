import { DATA } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

export function SiteFooter({ dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className='mt-24 flex flex-col gap-2 border-t border-line py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between'>
      <p>
        © {new Date().getFullYear()} {DATA.name}
      </p>
      <p>{dict.footer.built}</p>
    </footer>
  )
}
