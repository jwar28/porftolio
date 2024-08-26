import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function NoDockLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 flex justify-center items-center sm:py-24 px-6',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
