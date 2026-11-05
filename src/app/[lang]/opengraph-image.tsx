import { DATA } from '@/data/resume'
import { isLocale, t } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { ImageResponse } from 'next/og'

export const alt = DATA.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage({ params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : 'es'
  const dict = getDictionary(lang)
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#fbfaf7',
          color: '#121212',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#62625c' }}>javierguerra.dev</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>{DATA.name}</div>
          <div style={{ fontSize: 40, marginTop: 24, color: '#14804a' }}>{dict.hero.role}</div>
          <div style={{ fontSize: 28, marginTop: 28, color: '#62625c', maxWidth: 900, lineHeight: 1.4 }}>
            {t(DATA.bio, lang)}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
