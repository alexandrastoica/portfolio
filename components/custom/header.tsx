'use client'
import { a, config, useSpring } from '@react-spring/web'
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import Logo from './logo'
import { ModeToggle } from '../mode-toggle'
import { cn } from '@/lib/utils'

type HeaderProps = {
  sticky?: boolean
  title?: string
}

export default function Header({ sticky, title }: HeaderProps) {
  const ref = useRef(null)
  const [isAtTop, setIsAtTop] = useState(true)

  const [{ height }, heightApi] = useSpring(() => ({
    height: '64px',
    config: config.gentle,
  }))

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    if (scrollPosition < 200) {
      setIsAtTop(true)
      heightApi.start({ height: '64px' })
    } else {
      setIsAtTop(false)
      heightApi.start({ height: '60px' })
    }
  }, [heightApi])

  useEffect(() => {
    if (sticky) {
      window.addEventListener('scroll', () => handleScroll())
    }
    return window.removeEventListener('scroll', handleScroll)
  }, [sticky, handleScroll])

  let cssClasses = 'flex items-center justify-center px-3'
  if (sticky) {
    cssClasses += ' '
    cssClasses +=
      'fixed w-full top-0 z-10 bg-background/20 backdrop-blur-[8px] transition-border duration-500 ease-linear border-b border-border/20'
  }

  return (
    <header
      ref={ref}
      className={cn(cssClasses)}
      style={
        {
          '--header-nav-border': isAtTop ? 'transparent' : 'var(--muted)',
        } as CSSProperties
      }
    >
      <a.div
        className="z-5 flex w-[min(var(--max-layout-width),100%)] items-center justify-between"
        style={{ height }}
      >
        <div>
          <Logo />
        </div>
        {title && (
          <p
            className={`h4 m-0 w-full overflow-hidden text-ellipsis whitespace-nowrap px-3 leading-6 opacity-0 transition-opacity duration-500 ease-linear`}
            style={{ opacity: isAtTop ? '0' : '1' }}
          >
            {title}
          </p>
        )}
        <div>
          <ModeToggle />
        </div>
      </a.div>
    </header>
  )
}
