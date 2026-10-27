'use client'

import { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { certifications } from '@/data/certifications'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

function CertificationItem({ item, index, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="group block w-full cursor-pointer text-left"
      aria-label={`Open certificate: ${item.title}`}
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border-1)] bg-[var(--surface-1)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-2)] hover:shadow-[var(--nav-shadow)]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-[var(--surface-2)]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="px-1 pb-1 pt-4">
          <h3 className="text-base font-semibold text-[var(--foreground)]">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {item.issuer} • {item.year}
          </p>
        </div>
      </div>
    </button>
  )
}

function LightboxIconButton({ onClick, children, label, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white transition-all duration-300 hover:bg-white/20 ${className}`}
    >
      {children}
    </button>
  )
}

function CertificateLightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const activeItem = items[activeIndex]
  const shouldReduceMotion = useReducedMotion()
  if (!activeItem) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-[101] w-full max-w-6xl"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.99 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="mb-4 hidden items-center justify-between lg:flex">
          <div className="hidden sm:block" />

          <div className="flex items-center gap-3 ml-auto">
            <LightboxIconButton onClick={onPrev} label="Previous certificate">
              <FaChevronLeft />
            </LightboxIconButton>

            <LightboxIconButton onClick={onNext} label="Next certificate">
              <FaChevronRight />
            </LightboxIconButton>

            <LightboxIconButton onClick={onClose} label="Close preview">
              <FaTimes />
            </LightboxIconButton>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.id}
            className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: 'easeOut',
            }}
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white p-3 shadow-2xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] bg-slate-100">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur-md">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                Certificate Details
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                {activeItem.title}
              </h3>

              <p className="mt-3 text-sm text-white/75">
                {activeItem.issuer} • {activeItem.year}
              </p>

              <p className="mt-6 text-sm leading-8 text-white/80">
                {activeItem.description}
              </p>

              <div className="mt-8 flex items-center gap-3 lg:hidden">
                <LightboxIconButton onClick={onPrev} label="Previous certificate">
                  <FaChevronLeft />
                </LightboxIconButton>

                <LightboxIconButton onClick={onNext} label="Next certificate">
                  <FaChevronRight />
                </LightboxIconButton>

                <LightboxIconButton onClick={onClose} label="Close preview">
                  <FaTimes />
                </LightboxIconButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </motion.div>
      </motion.div>
  )
}

function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === 0 ? certifications.length - 1 : prev - 1
        )
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === certifications.length - 1 ? 0 : prev + 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  if (!certifications || certifications.length === 0) return null

  const openLightbox = (index) => setActiveIndex(index)
  const closeLightbox = () => setActiveIndex(null)

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    )
  }

  const showNext = () => {
    setActiveIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
              Certificates & Learning Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A selection of certifications and achievements that reflect my
              growth, consistency, and continuous learning in web development.
            </p>
          </ScrollReveal>

          <div className="mt-12 rounded-[2rem] border border-[var(--border-1)] bg-[var(--surface-1)] px-5 py-6 md:px-8 md:py-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 70}>
                  <CertificationItem
                    item={item}
                    index={index}
                    onOpen={openLightbox}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
        <CertificateLightbox
          items={certifications}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(CertificationsSection)