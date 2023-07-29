'use client';

import { useTheme } from 'next-themes';
import IconButton from './IconButton/iconButton';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  let helpText = theme == 'light' ? 'Dark mode' : 'Light mode';
  return (
    <IconButton
      icon={theme == 'light' ? <SunIcon /> : <MoonIcon />}
      tooltip={helpText}
      onClickHandler={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
}
