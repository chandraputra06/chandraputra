'use client'

import Link from 'next/link'
import Image from 'next/image'
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
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navActive = scrolled || isOpen

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          navActive
            ? 'border-b border-[var(--border-1)] bg-[var(--glass-bg)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{
          boxShadow: navActive ? 'var(--nav-shadow)' : 'none',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="block transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <Image
                src="/images/logo-chandra.png"
                alt="Chandra Putra"
                width={100}
                height={30}
                className="logo-navbar h-10 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden md:flex md:items-center md:gap-3">
              <div className="flex items-center gap-1 rounded-full border border-[var(--border-1)] bg-[var(--surface-1)]/90 px-2 py-1.5">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        active
                          ? 'bg-[var(--accent-primary)] text-white'
                          : 'text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />

              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-1)] bg-[var(--surface-1)] text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-2)]"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                      isOpen ? 'translate-y-[6px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-[6px] h-[2px] rounded-full bg-current transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
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

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? 'mt-4 max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-1 rounded-2xl border border-[var(--border-1)] bg-[var(--surface-1)] p-2">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'bg-[var(--accent-primary)] text-white'
                        : 'text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]'
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

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[var(--overlay)] backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}