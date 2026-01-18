'use client'

import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
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
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-center text-5xl font-bold md:text-7xl">
            {t('contact.title')}
          </h1>
          <p className="mb-16 text-center text-xl text-gray-400">
            {t('contact.subtitle')}
          </p>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-center text-green-500 transition-opacity">
              {t('contact.form.successMessage')}
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mb-12 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-lg bg-dark-800 px-4 py-3 border ${
                  errors.name ? 'border-red-500' : 'border-dark-700'
                } focus:outline-none focus:border-accent-500 transition-colors`}
                placeholder={t('contact.form.namePlaceholder')}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-lg bg-dark-800 px-4 py-3 border ${
                  errors.email ? 'border-red-500' : 'border-dark-700'
                } focus:outline-none focus:border-accent-500 transition-colors`}
                placeholder={t('contact.form.emailPlaceholder')}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full resize-none rounded-lg bg-dark-800 px-4 py-3 border ${
                  errors.message ? 'border-red-500' : 'border-dark-700'
                } focus:outline-none focus:border-accent-500 transition-colors`}
                placeholder={t('contact.form.messagePlaceholder')}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent-500 px-8 py-4 font-medium transition-colors duration-200 hover:bg-accent-600 transform transition-transform hover:scale-105 active:scale-95"
            >
              {t('contact.form.send')}
            </button>
          </form>

          {/* Book a Call */}
          <div className="border-t border-dark-700 py-8 text-center">
            <p className="mb-4 text-gray-400">
              {t('contact.bookCall.text')}
            </p>
            <button
              className="rounded-lg border border-accent-500 px-8 py-3 font-medium text-accent-500 transition-all duration-200 hover:bg-accent-500 hover:text-white transform transition-transform hover:scale-105 active:scale-95"
              type="button"
            >
              {t('contact.bookCall.button')}
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32">
          <CTASection />
        </div>
      </div>
    </PageTransition>
  )
}
