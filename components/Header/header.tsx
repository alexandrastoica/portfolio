'use client';
import { a, useSpring, config } from '@react-spring/web';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import Logo from '../Logo/logo';
import ThemeToggle from '../ThemeContext/themeToggle';
import styles from './header.module.scss';

type HeaderProps = {
  sticky?: boolean;
  title?: string;
};

export default function Header({ sticky, title }: HeaderProps) {
  const ref = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const [{ height }, heightApi] = useSpring(() => ({
    height: '120px',
    config: config.gentle,
  }));

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 200) {
      setIsAtTop(true);
      heightApi.start({ height: '120px' });
    } else {
      setIsAtTop(false);
      heightApi.start({ height: '60px' });
    }
  }, [heightApi]);

  useEffect(() => {
    if (sticky) {
      window.addEventListener('scroll', () => handleScroll());
    }
    return window.removeEventListener('scroll', handleScroll);
  }, [sticky, handleScroll]);

  let cssClasses = styles.header;
  if (sticky) {
    cssClasses += ' ';
    cssClasses += styles.sticky;
  }

  return (
    <header
      ref={ref}
      className={cssClasses}
      style={
        {
          '--header-nav-border': isAtTop ? 'transparent' : 'var(--surface2)',
        } as CSSProperties
      }
    >
      <a.div className={styles.header__content} style={{ height }}>
        <div>
          <Logo />
        </div>
        {title && (
          <p
            className={`h4 ${styles.title}`}
            style={{ opacity: isAtTop ? '0' : '1' }}
          >
            {title}
          </p>
        )}
        <div>
          <ThemeToggle />
        </div>
      </a.div>
    </header>
  );
}
