'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section
      className="py-20 border-t border-dark-700"
      data-aos="fade-up"        // opsional, kalau kamu pakai AOS
      data-aos-offset="120"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          {t('cta.subtitle')}
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium text-lg transition-colors duration-200 transform transition-transform hover:scale-105 active:scale-95"
        >
          {t('cta.button')}
        </Link>
      </div>
    </section>
  )
}
