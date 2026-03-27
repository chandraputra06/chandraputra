'use client'

export default function PageTransition({ children }) {
  return (
    <main className="min-h-screen animate-fade-in-up">
      {children}
    </main>
  )
}
