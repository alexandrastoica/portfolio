import './globals.scss';
import React from 'react';
import { Fira_Code, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import Logo from '@/components/Logo/logo';

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
  description:
    'On a mission to build purposeful products and delightful user experiences.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`main__layout ${inter.variable} ${fira.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <footer className="footer">
            <hr></hr>
            <div className="footer__wrapper">
              <div className="footer__content">
                <div>
                  <p>ralexandrastoica@gmail.com</p>
                  <p>&copy;{new Date().getFullYear()} Alexandra Stoica</p>
                </div>
                <Logo />
              </div>
            </div>
          </footer>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
