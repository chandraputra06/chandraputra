'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'https://github.com/your-github', // ganti dengan akunmu
      label: 'GitHub',
      icon: <FaGithub />,
    },
    {
      href: 'https://www.linkedin.com/in/your-linkedin', // ganti dengan akunmu
      label: 'LinkedIn',
      icon: <FaLinkedinIn />,
    },
    {
      href: 'https://www.instagram.com/your-instagram', // ganti dengan akunmu
      label: 'Instagram',
      icon: <FaInstagram />,
    },
  ]

  return (
    <footer className="border-t border-dark-700 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Icon social media */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-gray-500 text-gray-300
                           hover:text-white hover:border-white transition-colors
                           flex items-center justify-center text-xl"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* Text hak cipta */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            © {currentYear} Chandra Putra. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  )
}
