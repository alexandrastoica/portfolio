'use client'
import useIntersectionObservation from '@/hooks/intersection'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SECTION_ATTR = '[data-nav]'

export default function Nav() {
  let [links, setLinks] = useState<string[]>([])
  const [active, setActive] = useState<null | string>(null)
  useIntersectionObservation(setActive, SECTION_ATTR)

  useEffect(() => {
    if (links.length > 0) return
    const sections = Array.from(document.querySelectorAll(SECTION_ATTR))
    let generatedLinks: string[] = []
    sections.forEach((section) => generatedLinks.push(section.id))
    setLinks(generatedLinks)
  }, [])

  const jumpToSection = (anchor: string) => {
    const section = document.querySelector(`#${anchor}`) as HTMLElement
    if (!section) return
    const top = section.getBoundingClientRect().top
    scrollTo({
      top: window.scrollY + top,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {links.length == 0 ? (
        <nav className="sticky top-8 h-8 w-2"></nav>
      ) : (
        <nav className="animate-scaleIn sticky top-8 z-[3] mx-auto box-content h-7 w-[fit-content] rounded-full border bg-background p-0.5 text-foreground shadow-sm">
          <span className="m-auto">
            <ul className="m-0 flex list-none p-0">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    className={cn(
                      `flex h-full w-full select-none flex-col justify-end rounded-full px-2 py-0.5 capitalize outline-none hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                        active?.toLowerCase() == link.toLowerCase()
                          ? 'bg-gradient-to-b from-muted/50 to-muted'
                          : ''
                      }`,
                    )}
                    onClick={() => jumpToSection(link)}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </span>
        </nav>
      )}
    </>
  )
}
