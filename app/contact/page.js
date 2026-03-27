'use client'

import { useState } from 'react'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactPage() {
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
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <PageTransition>
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-36">
        {/* Decorative backgrounds */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full blob-bg blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blob-bg blur-[120px]" />

        <div className="mx-auto max-w-3xl">
          <ScrollReveal as="div">
            <h1 className="mb-6 text-center text-5xl font-bold md:text-7xl">
              <span className="text-gradient">Contact</span>
            </h1>
            <p className="mb-16 text-center text-xl text-muted">
              Let&apos;s start a new project together
            </p>
          </ScrollReveal>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 rounded-2xl border border-emerald-500/25 bg-emerald-500/6 p-5 text-center backdrop-blur-sm animate-fade-in-up">
              <div className="mb-2 text-2xl">✓</div>
              <p className="text-emerald-500 font-medium">
                Message sent successfully! I will contact you soon.
              </p>
            </div>
          )}

          {/* Contact Form */}
          <ScrollReveal className="rounded-3xl border border-surface-1 bg-surface-1 p-8 md:p-10 backdrop-blur-sm" delay={80}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-glow w-full rounded-xl bg-surface-1 px-5 py-4 border text-foreground placeholder-(--muted-2) ${
                    errors.name ? 'border-red-500/50' : 'border-surface-1'
                  } transition-all duration-300`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-glow w-full rounded-xl bg-surface-1 px-5 py-4 border text-foreground placeholder-(--muted-2) ${
                    errors.email ? 'border-red-500/50' : 'border-surface-1'
                  } transition-all duration-300`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`input-glow w-full resize-none rounded-xl bg-surface-1 px-5 py-4 border text-foreground placeholder-(--muted-2) ${
                    errors.message ? 'border-red-500/50' : 'border-surface-1'
                  } transition-all duration-300`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="shimmer w-full rounded-xl bg-accent-500 px-8 py-4 font-semibold text-dark-900 transition-all duration-300 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25 transform hover:scale-[1.02] active:scale-95"
              >
                SEND
              </button>
            </form>
          </ScrollReveal>

          {/* Book a Call */}
          <div className="mt-12 text-center">
            <div className="gradient-divider mb-8" />
            <p className="mb-5 text-muted">
              Or schedule a direct call with me
            </p>
            <button
              className="rounded-xl border border-accent-500/30 bg-accent-500/5 px-8 py-3.5 font-semibold text-accent-400 transition-all duration-300 hover:border-accent-500/50 hover:bg-accent-500/10 hover:shadow-lg hover:shadow-accent-500/10 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
              type="button"
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32">
          <ScrollReveal delay={120}>
            <CTASection />
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  )
}
