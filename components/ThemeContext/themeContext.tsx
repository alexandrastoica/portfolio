'use client';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

const storeUserSetPreference = (pref: ThemeModeType) => {
  localStorage.setItem('theme', pref);
};

export type ThemeModeType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeModeType | null;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, rawSetTheme] = useState<ThemeModeType | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    let initialColorValue = root.getAttribute('data-theme');
    rawSetTheme(initialColorValue == 'dark' ? 'dark' : 'light');
  }, []);

  const contextValue = useMemo(() => {
    function toggleTheme() {
      const root = window.document.documentElement;
      const newTheme = theme == 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);
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
