import type { Change } from '@/data/resume'
import { t, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

/** One dated entry of the release history: tag rail on the left, notes on the right. */
export function Release({
  id,
  tag,
  when,
  org,
  title,
  sub,
  initial,
  children,
}: {
  id: string
  tag: string
  when: string
  org?: React.ReactNode
  title: string
  sub?: React.ReactNode
  initial?: string
  children?: React.ReactNode
}) {
  return (
    <article
      id={id}
      className='grid gap-4 border-t border-line py-9 md:grid-cols-[12.5rem_minmax(0,1fr)] md:gap-10 md:py-12'
    >
      <header className='flex flex-wrap items-center gap-x-3 gap-y-1.5 md:sticky md:top-24 md:flex-col md:items-start md:gap-2 md:self-start'>
        <span className='tag'>{tag}</span>
        <p className='font-mono text-[12.5px] text-muted'>{when}</p>
        {org ? <p className='text-[14px] font-semibold text-fg'>{org}</p> : null}
        {initial ? <span className='tag-quiet'>{initial}</span> : null}
      </header>
      <div className='min-w-0'>
        <h3 className='text-[1.625rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-fg sm:text-[2rem]'>
          {title}
        </h3>
        {sub ? <p className='mt-2 text-[16px] leading-relaxed text-muted'>{sub}</p> : null}
        {children}
      </div>
    </article>
  )
}

export function ChangeList({ items, lang, dict }: { items: Change[]; lang: Locale; dict: Dictionary }) {
  return (
    <ul className='mt-6 flex flex-col gap-4 sm:gap-3'>
      {items.map(item => (
        <li
          key={item.en}
          className='grid gap-1.5 text-[16px] leading-[1.55] text-fg/90 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4'
        >
          <span className={`kind kind-${item.kind} justify-self-start sm:mt-px`}>{dict.kinds[item.kind]}</span>
          <span className='text-pretty'>{t(item, lang)}</span>
        </li>
      ))}
    </ul>
  )
}
