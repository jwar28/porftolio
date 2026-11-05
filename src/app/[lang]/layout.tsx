import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { DATA } from '@/data/resume'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = (isLocale(params.lang) ? params.lang : 'es') as Locale
  const dict = getDictionary(lang)
  return {
    metadataBase: new URL(DATA.url),
    title: { default: dict.meta.title, template: `%s — ${DATA.name}` },
    description: dict.meta.description,
    manifest: '/manifest.json',
    alternates: {
      canonical: `/${lang}`,
      languages: { es: '/es', en: '/en', 'x-default': '/es' },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${lang}`,
      siteName: DATA.name,
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: dict.meta.title, description: dict.meta.description },
    appleWebApp: { capable: true, statusBarStyle: 'default', title: DATA.name },
    formatDetection: { telephone: false },
    robots: { index: true, follow: true },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1114' },
  ],
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: string } }>) {
  if (!isLocale(params.lang)) notFound()
  const lang = params.lang
  const dict = getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <a href='#main' className='skip-link'>
            {dict.nav.skip}
          </a>
          <div className='mx-auto flex min-h-[100dvh] w-full max-w-[42rem] flex-col px-5 sm:px-6'>
            <SiteHeader lang={lang} dict={dict} />
            <main id='main' className='flex-1'>
              {children}
            </main>
            <SiteFooter lang={lang} dict={dict} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
