'use client'

import { useState, memo, useRef, useEffect } from 'react'

function AccordionFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={item.id || index}
            className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
              isOpen
                ? 'border-accent-500/20 bg-surface-2 shadow-lg shadow-accent-500/5'
                : 'border-surface-1 bg-surface-1 hover:border-surface-2 hover:bg-surface-2'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors cursor-pointer"
            >
              <span className={`font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-accent-400' : 'text-foreground'}`}>
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isOpen
                    ? 'rotate-180 border-accent-500/30 bg-accent-500/10 text-accent-400'
                    : 'border-surface-1 bg-surface-1 text-muted'
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <AccordionContent isOpen={isOpen}>
              <div className="px-6 pb-5 text-muted leading-relaxed">
                {item.a}
              </div>
            </AccordionContent>
          </div>
        )
      })}
    </div>
  )
}

function AccordionContent({ isOpen, children }) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return
    if (!wrapperRef.current) return

    const nextHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
    wrapperRef.current.style.maxHeight = nextHeight
  }, [isOpen])

  return (
    <div
      ref={wrapperRef}
      style={{ maxHeight: '0px' }}
      className="overflow-hidden transition-all duration-500 ease-in-out"
    >
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  )
}

export default memo(AccordionFAQ)