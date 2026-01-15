'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="border-t border-dark-700 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} John Developer. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  )
}