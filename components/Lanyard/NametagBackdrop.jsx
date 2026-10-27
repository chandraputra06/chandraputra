'use client'

import { useEffect, useRef } from 'react'

/**
 * Interactive animated backdrop that sits behind the lanyard inside its panel.
 * - a soft glow that follows the cursor
 * - a few slowly floating accent orbs
 * - a faint grid that fades toward the center
 * It is pointer-events:none, so dragging the card is unaffected.
 */
export default function NametagBackdrop() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = el.getBoundingClientRect()
        if (!r.width || !r.height) return
        const x = ((e.clientX - r.left) / r.width) * 100
        const y = ((e.clientY - r.top) / r.height) * 100
        // ignore when the pointer is far outside the panel
        if (x < -30 || x > 130 || y < -30 || y > 130) return
        el.style.setProperty('--mx', `${x}%`)
        el.style.setProperty('--my', `${y}%`)
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="nt-backdrop" aria-hidden="true">
      <span className="nt-aurora" />
      <span className="nt-sheen" />
      <span className="nt-glow" />
      <span className="nt-grain" />
      <span className="nt-vignette" />
    </div>
  )
}