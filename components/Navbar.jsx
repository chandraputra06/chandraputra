'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navActive = scrolled || isOpen

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navActive
            ? 'border-b border-surface-1 bg-background/80 backdrop-blur-2xl shadow-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative text-2xl font-bold tracking-tight cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-accent-400">CP</span>
              <span className="absolute -inset-2 z-0 rounded-lg bg-accent-500/0 transition-all duration-300 group-hover:bg-accent-500/10" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center md:flex">
              <div className="flex items-center gap-1 rounded-full border border-surface-1 bg-surface-1 px-2 py-1.5">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                        active
                          ? 'bg-accent-500/15 text-accent-400 shadow-sm shadow-accent-500/10'
                          : 'text-muted hover:text-foreground hover:bg-surface-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Actions (theme + hamburger on mobile) */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Mobile: theme + hamburger */}
              <div className="flex items-center gap-2 md:hidden">
                <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative z-50 flex h-9 w-9 items-center justify-center rounded-xl border border-surface-1 bg-surface-1 text-muted transition-all duration-300 hover:border-accent-500/50 hover:text-accent-400 hover:shadow-md hover:shadow-accent-500/10"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                      isOpen ? 'translate-y-[6px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-[6px] h-[2px] rounded-full bg-current transition-all duration-300 ${
                      isOpen ? 'opacity-0 scale-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-3 h-[2px] rounded-full bg-current transition-all duration-300 ${
                      isOpen ? '-translate-y-[6px] -rotate-45' : ''
                    }`}
                  />
                </span>
              </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-400 ${
              isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-1 rounded-2xl border border-surface-1 bg-surface-1 p-2 backdrop-blur-xl">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-accent-500/15 text-accent-400'
                        : 'text-muted hover:bg-surface-2 hover:text-foreground'
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-overlay backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}