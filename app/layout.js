import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portfolio - Frontend Developer',
  description: 'Experienced frontend web developer specializing in modern web applications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}