'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';

import { ThemeContext } from './themeContext';

const ThemeToggle = () => {
  let { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      aria-label="Toggle dark mode"
      style={{ color: 'var(--color-text)', zIndex: 4, position: 'relative' }}
      onClick={() => toggleTheme()}
    >
      {theme == 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
