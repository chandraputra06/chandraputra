'use client'

import { memo } from 'react'
import Link from 'next/link'

function CTASection() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-3xl py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 cta-bg animate-gradient-x" style={{ backgroundSize: '200% 200%' }} />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full blob-bg blur-3xl blob-slow" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full blob-bg blur-3xl blob-slow" style={{ animationDelay: '5s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 cta-grid text-foreground" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Let&apos;s Talk About Your Next Project!</span>
        </h2>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
          Ready to bring your ideas to life
        </p>
        <Link
          href="/contact"
          className="shimmer inline-block px-10 py-4 bg-accent-500 hover:bg-accent-400 rounded-xl font-semibold text-dark-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25 active:scale-95 cursor-pointer"
        >
          Contact Me
        </Link>
      </div>
    </section>
  )
}

export default memo(CTASection)