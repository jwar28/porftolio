import { DATA } from '@/data/resume'
import { locales } from '@/i18n/config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/projects'].flatMap(path =>
    locales.map(lang => ({
      url: `${DATA.url}/${lang}${path}`,
      alternates: { languages: Object.fromEntries(locales.map(l => [l, `${DATA.url}/${l}${path}`])) },
    })),
  )
}
