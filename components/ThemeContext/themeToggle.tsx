'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useContext, useEffect, useState } from 'react';
import IconButton from '../IconButton/iconButton';

import { ThemeContext } from './themeContext';

const ThemeToggle = () => {
  let { theme, toggleTheme } = useContext(ThemeContext);
  let [mouted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, [theme])

  if (!mouted) {
    return null;
  }

  let helpText = theme == 'light' ? 'Dark mode' : 'Light mode';
  return (
    <IconButton icon={theme == 'light' ? <SunIcon /> : <MoonIcon />} tooltip={helpText} onClickHandler={toggleTheme} />
  );
};

export default ThemeToggle;
