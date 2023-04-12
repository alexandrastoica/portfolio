'use client';
import useIntersectionObservation from '@/hooks/intersection';
import { useEffect, useState } from 'react';
import styles from './nav.module.scss';

const SECTION_ATTR = '[data-nav]';

export default function Nav() {
  let [links, setLinks] = useState<string[]>([]);
  const [active, setActive] = useState<null | string>(null);
  useIntersectionObservation(setActive, SECTION_ATTR);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(SECTION_ATTR));
    let links: string[] = [];
    sections.forEach((section) => links.push(section.id));
    setLinks(links);
  }, []);

  const jumpToSection = (anchor: string) => {
    const section = document.querySelector(`#${anchor}`) as HTMLElement;
    if (!section) return;
    const top = section.getBoundingClientRect().top;
    scrollTo({
      top: window.scrollY + top,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={styles.nav}>
      <span className={styles.content}>
        <ul className={styles.link__list}>
          {links.map((link, i) => (
            <li
              key={i}
              className={`${styles.link} ${
                active?.toLowerCase() == link.toLowerCase() ? styles.active : ''
              }`}
              onClick={() => jumpToSection(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
}
