import Header from '@/components/Header/header';
import HeroAnimation from '@/components/HeroAnimation/heroAnimation';
import { ListItem } from '@/components/ListItem/listItem';
import LottieArrow from '@/components/Lottie/lottie';
import Nav from '@/components/Nav/nav';
import { getAllFilesInCollection } from '@/lib/api';
// import { Frontmatter } from '@/lib/types';
import { CSSProperties } from 'react';

export default async function Home() {
  let research = await getAllFilesInCollection('research');
  let projects = await getAllFilesInCollection('projects');

  return (
    <>
      <div className="wave-bg-color">
        <div className="wave-bg">
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
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

          <section id="projects" data-nav="projects">
            <div className="heading">
              <span
                aria-hidden="true"
                className="line"
                style={
                  {
                    top: '-32px',
                    left: '-32px',
                    '--color': 'var(--mint)',
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
                    '--color': 'var(--pink)',
                  } as CSSProperties
                }
              ></span>
              <h2>Projects</h2>
              <p>A collection of case studies.</p>
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '-32px',
                    left: '-88px',
                    '--color': 'var(--pink)',
                  } as CSSProperties
                }
              ></span>
            </div>
            <ul>
              {projects.map((article, i) => (
                <ListItem
                  key={i}
                  article={article}
                  link={`/projects/${article.slug}`}
                  cta="See more"
                ></ListItem>
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
                    '--color': 'var(--pink)',
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
                    '--color': 'var(--mint)',
                  } as CSSProperties
                }
              ></span>
              <h2>Research</h2>
              <p>
                A collection of the research I conducted as part of my MSc
                Human-Computer Interaction studies.
              </p>
              <span
                aria-hidden="true"
                className="line"
                data-orientation="horizontal"
                style={
                  {
                    bottom: '-32px',
                    left: '-88px',
                    '--color': 'var(--mint)',
                  } as CSSProperties
                }
              ></span>
            </div>
            <ul>
              {/* <ListItem
                article={
                  {
                    label: 'MSc Thesis',
                    year: 2018,
                    title:
                      '"Keep Going!": Understanding the Implications of Coaching through Fitness Apps to Support Physical Training',
                  } as Frontmatter
                }
                target="_blank"
                link="https://uclic.ucl.ac.uk/content/2-study/4-current-taught-course/1-distinction-projects/12-18/stoica_ralucaalexandra_2018.pdf"
                cta="See more"
              ></ListItem> */}
              {research.map((article, i) => (
                <ListItem
                  key={i}
                  article={article}
                  link={`/research/${article.slug}`}
                  cta="See more"
                ></ListItem>
              ))}
            </ul>
          </section>

          <section id="about" data-nav="about">
            <div className="heading">
              <span
                aria-hidden="true"
                className="line"
                style={
                  {
                    top: '-48px',
                    left: '-24px',
                    '--color': 'var(--mint)',
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
                    '--color': 'var(--pink)',
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
                    '--color': 'var(--mint)',
                  } as CSSProperties
                }
              ></span>
            </div>
            <p>TODO</p>
          </section>

          <section id="contact" data-nav="contact">
            <div className="heading">
              <h2>TODO</h2>
            </div>
            <div className="contact__animation">
              <LottieArrow />
              <div className="contact__email">
                <p className="h3">ralexandrastoica@gmail.com</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
