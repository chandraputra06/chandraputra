'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccordionFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4 max-w-4xl">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="border border-dark-700 rounded-xl overflow-hidden hover:border-accent-500/50 transition-colors"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left bg-dark-800/50 hover:bg-dark-800 transition-colors"
          >
            <span className="text-lg font-medium pr-4">{item.q}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-accent-500 text-2xl flex-shrink-0"
            >
              ↓
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 py-5 text-gray-400 leading-relaxed bg-dark-800/30">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}