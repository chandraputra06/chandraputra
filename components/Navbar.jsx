'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/hooks/useLanguage'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-sm border-b border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            CP
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm transition-colors hover:text-accent-500 ${
                      active ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500" />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`transition-colors ${
                  lang === 'id'
                    ? 'text-accent-500 font-medium'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                ID
              </button>
              <span className="text-gray-700">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`transition-colors ${
                  lang === 'en'
                    ? 'text-accent-500 font-medium'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
