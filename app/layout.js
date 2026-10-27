import './globals.css'
import 'lenis/dist/lenis.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import SmoothScroll from '@/components/SmoothScroll'
import ThemeProvider from '@/components/ThemeProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio - Chandra Putra',
  description: 'Experienced frontend web developer specializing in modern web applications',
  icons: {
    icon: '/images/logo-chandra.png',
    apple: '/images/logo-chandra.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className={`${poppins.className} bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <SmoothScroll />
          <Navbar />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}