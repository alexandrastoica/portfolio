import React from 'react';
import './globals.scss';
import { Inter, Fira_Code } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from '@/components/ThemeContext/themeContext';
import { blockingSetInitialColorMode } from '@/lib/darkMode';
import Script from 'next/script';
import Logo from '@/components/Logo/logo';

// TODO: replace this with Golos Text or Outfit
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--primary-font',
  display: 'swap',
});

const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--code-font',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Alexandra Stoica',
    template: '%s | Alexandra Stoica',
  },
  description: 'Web things',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fira.variable}`}>
      <Head>{children}</Head>
      <ThemeProvider>
        <body className="main__layout">
          <Script
            id="darkThemeScript"
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></Script>
          <>{children}</>

          <footer className="footer">
            <hr></hr>
            <div className="footer__wrapper">
              <div className="footer__content">
                <div>
                  <p>ralexandrastoica@gmail.com</p>
                  <p>&copy; {new Date().getFullYear()} Alexandra Stoica</p>
                </div>
                <Logo />
              </div>
            </div>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
