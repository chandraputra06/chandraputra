'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/hooks/useLanguage'
import { useEffect, useState, useMemo } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // ✅ PENTING: Memoize navLinks agar tidak dibuat ulang setiap render!
  const navLinks = useMemo(() => [
    { href: '/', label: t('nav.home') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ], [t])

  // ✅ PENTING: Memoize LangToggle component
  const LangToggle = useMemo(() => (
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
  ), [lang, setLang])

  // Blur kalau user sudah scroll ATAU menu mobile lagi kebuka
  const navActive = scrolled || isOpen

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navActive
            ? 'border-b border-dark-700 bg-dark-900/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              CP
            </Link>

            {/* Desktop nav + lang */}
            <div className="hidden items-center gap-8 md:flex">
              <div className="flex items-center gap-8">
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

              {LangToggle}
            </div>

            {/* Mobile: lang + hamburger */}
            <div className="flex items-center gap-4 md:hidden">
              {LangToggle}

              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-600 bg-dark-800/60 text-gray-200 transition-colors hover:border-accent-500 hover:text-accent-500"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] rounded-full bg-current transition-transform duration-200 ${
                      isOpen ? 'translate-y-[6px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-[6px] h-[2px] rounded-full bg-current transition-opacity duration-200 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-3 h-[2px] rounded-full bg-current transition-transform duration-200 ${
                      isOpen ? '-translate-y-[6px] -rotate-45' : ''
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-200 ${
              isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-4 space-y-2 border-t border-dark-700 pt-4">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-2 py-2 text-sm transition-colors ${
                      active
                        ? 'bg-dark-700 text-white'
                        : 'text-gray-400 hover:bg-dark-800 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay: klik di mana saja di halaman (kecuali navbar) untuk menutup menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}