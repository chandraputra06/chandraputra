'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
          } else if (!options.once) {
            setInView(false)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
        ...options,
      }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options.once])

  return { ref, inView }
}

export default function ScrollReveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  once = true,
}) {
  const { ref, inView } = useInView({ once })
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    if (inView) {
      setHasShown(true)
    }
  }, [inView])

  const visible = inView || (once && hasShown)
  const baseClasses = 'sr-base'
  const stateClass = visible ? 'sr-visible' : 'sr-hidden'
  const mergedClassName = [baseClasses, stateClass, className].filter(Boolean).join(' ')

  return (
    <Component
      ref={ref}
      className={mergedClassName}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}

