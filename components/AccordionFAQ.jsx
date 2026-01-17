'use client'

import { useState } from 'react'

export default function AccordionFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-dark-700 transition-colors hover:border-accent-500/50"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between bg-dark-800/50 px-6 py-5 text-left transition-colors hover:bg-dark-800"
            >
              <span className="pr-4 text-lg font-medium">{item.q}</span>
              <span
                className={`flex-shrink-0 text-2xl text-accent-500 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>

            {/* Konten jawaban dengan animasi height & opacity pakai Tailwind */}
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden bg-dark-800/30 px-6 py-5 leading-relaxed text-gray-400">
                {item.a}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
