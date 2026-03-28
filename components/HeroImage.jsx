'use client'

import { useRef } from 'react'
import Image from 'next/image'

export default function HeroImage() {
  const cardRef = useRef(null)
  const rafRef  = useRef(null)

  function handleMouseMove(e) {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const cx   = rect.left + rect.width  / 2
    const cy   = rect.top  + rect.height / 2
    const dx   = (e.clientX - cx) / (rect.width  / 2)
    const dy   = (e.clientY - cy) / (rect.height / 2)

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      card.classList.add('is-tilting')
      card.style.transform = `perspective(900px) rotateX(${(-dy * 10).toFixed(2)}deg) rotateY(${(dx * 10).toFixed(2)}deg)`
    })
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    card.style.transform  = ''
    setTimeout(() => {
      if (!card) return
      card.classList.remove('is-tilting')
      card.style.transition = ''
    }, 650)
  }

  return (
    <div className="hi-wrapper">
      {/* Glow blob — mengikuti bentuk asymmetric */}
      <div className="hi-glow" />

      {/* Dekorasi dot-grid pojok kanan atas */}
      <div className="hi-dots" aria-hidden="true" />

      {/* Ring outline animasi */}
      <div className="hi-ring" aria-hidden="true" />

      {/* Card utama */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hi-card"
      >
        {/* Shimmer masuk saat load */}
        <div className="hi-shimmer" aria-hidden="true" />

        <Image
          src="/images/pic-chandra-rm.png"
          alt="Chandra Putra"
          width={420}
          height={520}
          priority
          className="hi-photo"
        />
      </div>
    </div>
  )
}