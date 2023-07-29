import { allProjects, allResearch } from '@/.contentlayer/generated';
import Header from '@/components/Header/header';
import HeroAnimation from '@/components/HeroAnimation/heroAnimation';
import IconButton from '@/components/IconButton/iconButton';
import { ListItem } from '@/components/ListItem/listItem';
import Nav from '@/components/Nav/nav';
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { CSSProperties } from 'react';

export default function Home() {
  return (
    <>
      <div className="wave-bg-color">
        <div className="wave-bg">
          <svg
            className="wave"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="page-divide"
                fill="var(--color-wave)"
                x="50"
                y="0"
                d="M-160 44c30 0 
                  58-18 88-18s
                  58 18 88 18 
                  58-18 88-18 
                  58 18 88 18
                  v44h-352z"
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#page-divide"
                x="50"
                y="0"
                fill="var(--color-wave)"
              ></use>
            </g>
          </svg>
        </div>

        <Header />
        <main>
          <div className="header__content">
            <div className="header__text">
              <h1>
                Hi there! I&apos;m Alexandra, a{' '}
                <span className="stroke">frontend</span> and<br></br>
                <span className="box">UX</span> engineer.
              </h1>
            </div>
            <div className="header__animation">
              <HeroAnimation />
            </div>
          </div>
          <Nav />

          <section id="about" data-nav="about">
            <div className="heading">
              <span
                aria-hidden="true"
                className="line"
                style={
                  {
                    top: '-48px',
                    left: '-24px',
                    height: '200px',
                    '--color': 'hsl(var(--mint) / 40%)',
                  } as CSSProperties
                }
              ></span>
              <h2>About me</h2>
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '0',
                    left: '-88px',
                    '--color': 'hsl(var(--pink) / 20%)',
                  } as CSSProperties
                }
              ></span>
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '-10px',
                    left: '-88px',
                    '--color': 'hsl(var(--mint) / 40%)',
                  } as CSSProperties
                }
              ></span>
            </div>
            <p>
              I am passionate about crafting purposeful products{' '}
              <span aria-hidden>💡</span>
            </p>
            <br></br>
            <p>
              With a background in Engineering and{' '}
              <a
                href="https://uclic.ucl.ac.uk/content/2-study/4-current-taught-course/1-distinction-projects/12-18/stoica_ralucaalexandra_2018.pdf"
                target="_blank"
              >
                Human-Computer Interaction
              </a>
              , I combine expertise in design systems, product thinking, and
              user-centred design to create accessible, reliable, and delightful
              user experiences.{' '}
            </p>
            <br></br>
            <p>
              Currently building{' '}
              <a href="https://hicoral.com/" target="_blank">
                Coral
              </a>{' '}
              <span aria-hidden>🪸</span>. Previously, I worked with clients
              such as Google, Android Developers, Area 120, and Protocol Labs.
            </p>
            <br></br>
            <ul className="social__layout">
              <li>
                <IconButton
                  icon={<LinkedInLogoIcon />}
                  tooltip="LinkedIn"
                  target="_blank"
                  href="https://www.linkedin.com/in/alexandrastoica"
                />
              </li>
              <li>
                <IconButton
                  icon={<GitHubLogoIcon />}
                  tooltip="GitHub"
                  target="_blank"
                  href="https://github.com/alexandrastoica"
                />
              </li>
              <li>
                <IconButton
                  icon={<FileTextIcon />}
                  tooltip="CV"
                  href="https://read.cv/alexandrastoica"
                  target="_blank"
                />
              </li>
            </ul>
          </section>

          <section id="projects" data-nav="projects">
            <div className="heading">
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '0',
                    left: '-88px',
                    '--color': 'hsl(var(--pink) / 20%)',
                  } as CSSProperties
                }
              ></span>
              <span
                aria-hidden="true"
                className="line"
                style={
                  {
                    top: '-48px',
                    left: '-24px',
                    height: '200px',
                    '--color': 'hsl(var(--mint) / 40%)',
                  } as CSSProperties
                }
              ></span>
              <h2>Projects</h2>
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '-10px',
                    left: '-88px',
                    '--color': 'hsl(var(--pink) / 30%)',
                  } as CSSProperties
                }
              ></span>
            </div>
            <ul className="card__layout">
              {allProjects.map((article) => (
                <article key={article._id}>
                  <ListItem
                    article={article}
                    link={article.slug}
                    cta="See more"
                  ></ListItem>
                </article>
              ))}
            </ul>
          </section>

          <section id="research" data-nav="research">
            <div className="heading">
              <span
                aria-hidden="true"
                className="line"
                style={
                  {
                    top: '-32px',
                    left: '-32px',
                    height: '200px',
                    '--color': 'hsl(var(--pink) / 30%)',
                  } as CSSProperties
                }
              ></span>
              <span
                aria-hidden="true"
                className="line"
                style={
                  {
                    top: '-48px',
                    left: '-48px',
                    height: '200px',
                    '--color': 'hsl(var(--mint) / 30%)',
                  } as CSSProperties
                }
              ></span>
              <h2>Research</h2>
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '-10px',
                    left: '-88px',
                    '--color': 'hsl(var(--mint) / 30%)',
                  } as CSSProperties
                }
              ></span>
            </div>
            <ul className="card__layout">
              {allResearch.map((article) => (
                <article key={article._id}>
                  <ListItem
                    article={article}
                    link={article.slug}
                    cta="See more"
                  ></ListItem>
                </article>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
