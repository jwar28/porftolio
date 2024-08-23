'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useEffect } from 'react'

export default function BackgroundSwitcher() {
  const { theme } = useTheme()
  const [isDarkBackground, setIsDarkBackground] = useState(false)

  useEffect(() => {
    setIsDarkBackground(theme === 'dark')
  }, [theme])

  return (
    <div className='fixed left-0 top-0 -z-10 h-full w-full'>
      {isDarkBackground  ? (
        <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      ) : (
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      )}
    </div>
  )
}
