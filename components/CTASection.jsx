'use client'

import { memo } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="mt-10 py-20 border-t border-dark-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          {t('cta.subtitle')}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
        >
          {t('cta.button')}
        </Link>
      </div>
    </section>
  )
}

// ✅ Wrap dengan memo untuk prevent unnecessary re-renders
export default memo(CTASection)