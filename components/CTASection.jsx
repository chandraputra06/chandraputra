'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 border-t border-dark-700"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          {t('cta.subtitle')}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium text-lg transition-colors duration-200"
          >
            {t('cta.button')}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}