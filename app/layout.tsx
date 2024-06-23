import './globals.css'
import React from 'react'
import { Fira_Code, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import Logo from '@/components/custom/logo'
import { Separator } from '@/components/ui/separator'
import { EmailCopyButton } from '@/components/custom/email-copy'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--primary-font',
  display: 'swap',
})

const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--code-font',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Alexandra Stoica',
    template: '%s | Alexandra Stoica',
  },
  description:
    'On a mission to build purposeful products and delightful user experiences.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fira.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer>
            <Separator className="w-full" />
            <div className="grid grid-cols-footer-layout items-stretch">
              <div className="col-start-2 flex items-center justify-between py-2">
                <div>
                  <EmailCopyButton />
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
  )
}
