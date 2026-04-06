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
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-[var(--border-2)] bg-[var(--surface-2)]'
                : 'border-[var(--border-1)] bg-[var(--surface-1)] hover:border-[var(--border-2)] hover:bg-[var(--surface-2)]'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
            >
              <span
                className={`pr-4 text-base font-medium leading-7 transition-colors duration-300 ${
                  isOpen
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--foreground)]'
                }`}
              >
                {item.q}
              </span>

              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'rotate-180 border-[var(--border-2)] bg-[var(--background)] text-[var(--accent-primary)]'
                    : 'border-[var(--border-1)] bg-[var(--background)] text-[var(--muted)]'
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <AccordionContent isOpen={isOpen}>
              <div className="px-6 pb-5 text-sm leading-7 text-[var(--muted)] md:text-base">
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
    if (!contentRef.current || !wrapperRef.current) return

    wrapperRef.current.style.maxHeight = isOpen
      ? `${contentRef.current.scrollHeight}px`
      : '0px'
  }, [isOpen])

  return (
    <div
      ref={wrapperRef}
      style={{ maxHeight: '0px' }}
      className="overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export default memo(AccordionFAQ)