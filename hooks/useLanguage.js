'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { dictionary } from '@/data/i18n'

export function useLanguage() {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('language')
      return (saved === 'id' || saved === 'en') ? saved : 'id'
    }
    return 'id'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', lang)
    }
  }, [lang])

  const setLang = useCallback((newLang) => {
    if (newLang === 'id' || newLang === 'en') {
      setLangState(newLang)
    }
  }, [])

  const t = useCallback((key) => {
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
  }, [lang])

  return useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
}