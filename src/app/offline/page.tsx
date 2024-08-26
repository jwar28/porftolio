import BlurFade from '@/components/magicui/blur-fade'
import { ModeToggle } from '@/components/mode-toggle'
import { WifiOff } from 'lucide-react'

const BLUR_FADE_DELAY = 0.04

export default function OfflinePage() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className='flex flex-col justify-center items-center'>
        <WifiOff size={54} />
        <span className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center'>
          Oops, looks like you&apos;re offline
        </span>
        <span className='my-4 text-center'>
          Please check your internet connection and try again.
        </span>
        <ModeToggle />
      </div>
    </BlurFade>
  )
}
