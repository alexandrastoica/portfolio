'use client'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { LottieArrow } from '@/components/custom/lottie'

export default function HeroAnimation() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative h-full w-[200px] translate-y-[calc(100%-80px)] select-none">
      <span
        className="relative block h-16 w-16 translate-x-[22px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className={cn(
            `absolute left-0 top-0 h-16 w-16 rounded-full ${isHovered ? 'opacity-100' : 'opacity-0'}`,
          )}
          alt=""
          src={'/memoji/wink.png'}
          width="64"
          height="64"
        />
        <span
          className={cn(
            `absolute left-0 top-0 h-16 w-16 rounded-full ${isHovered ? 'opacity-0' : 'opacity-100'}`,
          )}
        >
          <Image
            className="absolute left-0 top-0 hidden h-16 w-16 rounded-full dark:block"
            alt=""
            src={'/memoji/clouds.png'}
            width="64"
            height="64"
          />
          <Image
            className="absolute left-0 top-0 block h-16 w-16 rounded-full dark:hidden"
            alt=""
            src={'/memoji/smile.png'}
            width="64"
            height="64"
          />
        </span>
      </span>
      <div
        className={cn(
          `pointer-events-none absolute -top-4 right-1 whitespace-nowrap rounded-full bg-muted px-4 py-2 transition-opacity duration-500 ease-linear ${isHovered ? 'opacity-100' : 'opacity-0'}`,
        )}
      >
        <span className="absolute bottom-0 left-0 border-b-[15px] border-r-[15px] border-b-muted border-r-transparent"></span>
        <p className="text-xs font-medium leading-tight text-muted-foreground">
          Explore my work
        </p>
      </div>
      <span
        className={cn(
          `pointer-events-none block h-16 w-16 translate-x-[-32px] translate-y-[-16px] rotate-[90deg] transform duration-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`,
        )}
      >
        <LottieArrow key={`${isHovered ? '1' : '0'}`} />
      </span>
    </div>
  )
}
