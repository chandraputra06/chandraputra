'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired')
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired')
    } else if (!formData.email.includes('@')) {
      newErrors.email = t('contact.form.errors.emailInvalid')
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired')
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Simulate success
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16">
            {t('contact.subtitle')}
          </p>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-center"
            >
              {t('contact.form.successMessage')}
            </motion.div>
          )}

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 mb-12"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-dark-800 border ${
                  errors.name ? 'border-red-500' : 'border-dark-700'
                } rounded-lg focus:outline-none focus:border-accent-500 transition-colors`}
                placeholder={t('contact.form.namePlaceholder')}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-dark-800 border ${
                  errors.email ? 'border-red-500' : 'border-dark-700'
                } rounded-lg focus:outline-none focus:border-accent-500 transition-colors`}
                placeholder={t('contact.form.emailPlaceholder')}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-dark-800 border ${
                  errors.message ? 'border-red-500' : 'border-dark-700'
                } rounded-lg focus:outline-none focus:border-accent-500 transition-colors resize-none`}
                placeholder={t('contact.form.messagePlaceholder')}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium transition-colors duration-200"
            >
              {t('contact.form.send')}
            </motion.button>
          </motion.form>

          {/* Book a Call */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center py-8 border-t border-dark-700"
          >
            <p className="text-gray-400 mb-4">{t('contact.bookCall.text')}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white rounded-lg font-medium transition-all duration-200"
            >
              {t('contact.bookCall.button')}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-32">
          <CTASection />
        </div>
      </div>
    </PageTransition>
  )
}