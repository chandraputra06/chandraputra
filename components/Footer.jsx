'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { href: 'https://github.com/chandraputra', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/chandraputra', label: 'LinkedIn', icon: FaLinkedinIn },
  { href: 'https://www.instagram.com/chandraputra', label: 'Instagram', icon: FaInstagram },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative">
      <div className="gradient-divider" />

      <div className="bg-background/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center rounded-xl border border-surface-1 bg-surface-1 p-2.5 text-lg text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:bg-accent-500/10 hover:text-accent-400 hover:shadow-lg hover:shadow-accent-500/10 cursor-pointer"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            <div className="text-center text-sm text-muted-2 md:text-right">
              © {currentYear} Chandra Putra. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
