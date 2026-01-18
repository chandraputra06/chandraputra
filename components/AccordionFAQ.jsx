'use client'

import { useState, memo } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

function AccordionFAQ({ items }) {
  const { lang } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        
        // Support untuk format q/a dengan multilingual
        const question = typeof item.q === 'object' ? item.q[lang] : item.q
        const answer = typeof item.a === 'object' ? item.a[lang] : item.a

        return (
          <div
            key={item.id || index}
            className="overflow-hidden rounded-lg border border-dark-700"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-dark-800/60"
            >
              <span className="font-medium">{question}</span>
              <span
                className={`text-2xl transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="bg-dark-800/30 px-6 py-4 text-gray-400">
                {answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(AccordionFAQ)