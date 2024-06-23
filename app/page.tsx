import { allProjects, allResearch } from '@/.contentlayer/generated'
import Header from '@/components/custom/header'
import HeroAnimation from '@/components/custom/hero-animation'
import { ListItem } from '@/components/custom/list-item'
import Nav from '@/components/custom/nav'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Wave } from '@/components/wave'
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { CSSProperties, Fragment } from 'react'

export default function Home() {
  return (
    <>
      <div className="wave-gradient">
        <Wave />
        <Header />
        <main>
          <div className="relative flex justify-center pb-8">
            <div className="pr-12">
              <h1>
                Hi there! I&apos;m Alexandra, a{' '}
                <span className="stroke">{'<'}</span>
                <span className="stroke">frontend</span>
                <span className="stroke">{'>'}</span> and<br></br>
                <span className="box">UX</span> engineer.
              </h1>
            </div>
            <div className="hidden sm:block">
              <HeroAnimation />
            </div>
          </div>
          <Nav />

          <section id="about" data-nav="about" className="mb-6">
            <div className="relative">
              <Separator
                className="line-gradient absolute -left-7 -top-5 h-[200px] dark:opacity-80"
                orientation="vertical"
                style={
                  {
                    '--degrees': '0deg',
                    '--color': 'hsl(var(--mint))',
                  } as CSSProperties
                }
              />

              <h2>About me</h2>
              <Separator
                orientation="horizontal"
                className="line-gradient absolute -left-20 bottom-0 w-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '90deg',
                    '--color': 'hsl(var(--pink) / 80%)',
                  } as CSSProperties
                }
              />
              <Separator
                orientation="horizontal"
                className="line-gradient absolute -left-20 top-8 w-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '90deg',
                    '--color': 'hsl(var(--mint) / 90%)',
                  } as CSSProperties
                }
              />
            </div>
            <p className="mb-3">
              I am passionate about crafting purposeful products{' '}
              <span aria-hidden>💡</span>
            </p>
            <p className="mb-3">
              With a background in Engineering and Human-Computer Interaction, I
              combine expertise in design systems, product thinking, and
              user-centred design to build accessible, reliable, and delightful
              user experiences.
            </p>
            <p className="mb-2">
              Currently building{' '}
              <a href="https://tryarcane.com/" className="link">
                Arcane
              </a>{' '}
              <span aria-hidden>🔮</span>. Previously, I worked with clients
              such as Google, Android Developers, Area 120, and Protocol Labs.
            </p>
            <ul className="m-0 flex list-none gap-1 p-0">
              <li className="focus-within:-translate-y-1 hover:-translate-y-1">
                <a
                  href="https://www.linkedin.com/in/alexandrastoica"
                  target="_blank"
                  className="rounded-sm"
                >
                  <Button variant="link" size="icon" tabIndex={-1}>
                    <span className="sr-only">Check out my Linkedin</span>
                    <LinkedInLogoIcon />
                  </Button>
                </a>
              </li>
              <li className="focus-within:-translate-y-1 hover:-translate-y-1">
                <a
                  href="https://github.com/alexandrastoica"
                  target="_blank"
                  className="rounded-sm"
                >
                  <Button variant="link" size="icon" tabIndex={-1}>
                    <span className="sr-only">Check out my GitHub</span>
                    <GitHubLogoIcon />
                  </Button>
                </a>
              </li>
              <li className="focus-within:-translate-y-1 hover:-translate-y-1">
                <a
                  href="https://read.cv/alexandrastoica"
                  target="_blank"
                  className="rounded-sm"
                >
                  <Button variant="link" size="icon" tabIndex={-1}>
                    <span className="sr-only">Check out my cv</span>
                    <FileTextIcon />
                  </Button>
                </a>
              </li>
            </ul>
          </section>

          <section id="projects" data-nav="projects" className="mb-6">
            <div className="relative">
              <Separator
                orientation="horizontal"
                className="line-gradient absolute -left-20 top-6 w-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '90deg',
                    '--color': 'hsl(var(--pink) / 90%)',
                  } as CSSProperties
                }
              />
              <Separator
                orientation="vertical"
                className="line-gradient absolute -left-6 -top-12 h-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '0deg',
                    '--color': 'hsl(var(--mint) / 80%)',
                  } as CSSProperties
                }
              />

              <h2>Projects</h2>
              <Separator
                orientation="horizontal"
                className="line-gradient absolute -left-12 top-7 w-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '90deg',
                    '--color': 'hsl(var(--pink) / 80%)',
                  } as CSSProperties
                }
              />
            </div>
            <ul className="custom-blur flex flex-col gap-4">
              {allProjects.map((article) => (
                <Fragment key={article._id}>
                  <ListItem
                    article={article}
                    link={article.slug}
                    cta="See more"
                  ></ListItem>
                </Fragment>
              ))}
            </ul>
          </section>

          <section id="research" data-nav="research" className="mb-8">
            <div className="relative">
              <Separator
                orientation="horizontal"
                className="line-gradient absolute -left-20 -top-1 w-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '90deg',
                    '--color': 'hsl(var(--pink) / 80%)',
                  } as CSSProperties
                }
              />
              <Separator
                orientation="vertical"
                className="line-gradient absolute -left-4 -top-8 h-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '0deg',
                    '--color': 'hsl(var(--mint) / 90%)',
                  } as CSSProperties
                }
              />
              <h2>Research</h2>
              <Separator
                orientation="vertical"
                className="line-gradient absolute -left-6 -top-12 h-[200px] dark:opacity-80"
                style={
                  {
                    '--degrees': '0deg',
                    '--color': 'hsl(var(--mint) / 70%)',
                  } as CSSProperties
                }
              />
            </div>
            <ul className="custom-blur flex flex-col gap-4">
              {allResearch.map((article) => (
                <Fragment key={article._id}>
                  <ListItem
                    article={article}
                    link={article.slug}
                    cta="See more"
                  ></ListItem>
                </Fragment>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}
