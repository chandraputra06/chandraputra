'use client'

import { useState, useEffect } from 'react'
import { dictionary } from '@/data/i18n'

export function useLanguage() {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'id'
    }
    return 'id'
  })

  const setLang = (newLang) => {
    setLangState(newLang)
    localStorage.setItem('language', newLang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = dictionary[lang]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value || key
  }

  return { lang, setLang, t }
}