'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isLight = theme === 'light'
  const nextTheme = isLight ? 'dark' : 'light'

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${nextTheme} mode` : 'Toggle theme'}
      onClick={() => setTheme(nextTheme)}
      className={[
        'group inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-surface-1 text-muted transition-all duration-300',
        'border-surface-1 hover:border-surface-2 hover:bg-surface-2 hover:text-accent-400',
        className,
      ].filter(Boolean).join(' ')}
    >
      {mounted ? (
        isLight ? <FiMoon className="text-[18px]" /> : <FiSun className="text-[18px]" />
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  )
}

