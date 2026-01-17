'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'https://github.com/chandraputra', // ganti kalau username beda
      label: 'GitHub',
      icon: <FaGithub />,
    },
    {
      href: 'https://www.linkedin.com/in/chandraputra', // ganti kalau username beda
      label: 'LinkedIn',
      icon: <FaLinkedinIn />,
    },
    {
      href: 'https://www.instagram.com/chandraputra', // ganti kalau username beda
      label: 'Instagram',
      icon: <FaInstagram />,
    },
  ]

  return (
    <footer className="border-t border-dark-700 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Icon social media */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-full border border-gray-500 p-2 text-xl text-gray-300
                           transition-colors hover:border-white hover:bg-white/5 hover:text-white"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* Text hak cipta */}
          <div className="text-center text-sm text-gray-500 md:text-right">
            © {currentYear} Chandra Putra. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  )
}
