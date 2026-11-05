export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export type Localized = Record<Locale, string>

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function t(value: Localized | string, lang: Locale): string {
  return typeof value === 'string' ? value : value[lang]
}

const monthYear: Record<Locale, Intl.DateTimeFormat> = {
  es: new Intl.DateTimeFormat('es-CO', { month: 'short', year: 'numeric' }),
  en: new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }),
}

/** Formats `YYYY` or `YYYY-MM`; `null` means ongoing. */
export function formatDate(value: string | null, lang: Locale): string {
  if (value === null) return lang === 'es' ? 'Actualidad' : 'Present'
  const [year, month] = value.split('-')
  if (!month) return year
  const parts = monthYear[lang].formatToParts(new Date(Number(year), Number(month) - 1, 1))
  const m = parts.find(p => p.type === 'month')?.value.replace('.', '') ?? month
  return `${m} ${year}`
}

/** CalVer tag from a real `YYYY-MM` date: `2026-06` → `v2026.06`. */
export function calver(value: string): string {
  return `v${value.replace('-', '.')}`
}
