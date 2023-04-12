'use client';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

const storeUserSetPreference = (pref: ThemeModeType) => {
  localStorage.setItem('theme', pref);
};

const getDefaultTheme = (): ThemeModeType => {
  const theme = localStorage.getItem('theme');
  if (theme !== 'light' && theme !== 'dark') {
    return 'light';
  }
  return theme;
};

export type ThemeModeType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeModeType | null;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, rawSetTheme] = useState<ThemeModeType>(getDefaultTheme());

  useEffect(() => {
    const root = window.document.documentElement;
    let initialColorValue = root.getAttribute('data-theme');
    rawSetTheme(initialColorValue == 'dark' ? 'dark' : 'light');
  }, []);

  const contextValue = useMemo(() => {
    function toggleTheme() {
      const root = window.document.documentElement;
      const newTheme = theme == 'light' ? 'dark' : 'light';
      if (newTheme == 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
      storeUserSetPreference(newTheme);
      rawSetTheme(newTheme);
    }

    return {
      theme,
      toggleTheme,
    };
  }, [theme, rawSetTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
