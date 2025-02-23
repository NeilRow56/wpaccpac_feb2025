import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import Loading from './loading'
import { Suspense } from 'react'
// import ResponsiveNavbar from '@/components/navbar/responsive-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `%s | WpAccPac`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION
  //metadataBase: new URL(SERVER_URL)  - FOR PRODUCTION ONLY
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={'/sign-in'}
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-primary hover:bg-primary/80 text-sm !shadow-none'
        }
      }}
    >
      <html
        lang='en'
        suppressHydrationWarning
        className='scroll-smooth antialiased'
      >
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
