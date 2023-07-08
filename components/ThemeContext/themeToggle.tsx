'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import IconButton from '../IconButton/iconButton';

import { ThemeContext } from './themeContext';

const ThemeToggle = () => {
  let { theme, toggleTheme } = useContext(ThemeContext);
  let helpText = theme == 'light' ? 'Dark mode' : 'Light mode';

  return (
    <IconButton icon={theme == 'light' ? <SunIcon /> : <MoonIcon />} tooltip={helpText} onClickHandler={toggleTheme} />
  );
};

export default ThemeToggle;
