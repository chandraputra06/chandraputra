'use client'

import dynamic from 'next/dynamic'

const Lanyard = dynamic(() => import('./Lanyard'), {
  ssr: false,
  loading: () => (
    <div className="lanyard-skeleton" aria-hidden="true">
      <span />
    </div>
  ),
})

/**
 * Client wrapper that mounts the WebGL/physics lanyard only in the browser
 * and shows a short "drag me" hint over it.
 */
export default function LanyardStage({ className = '', ...props }) {
  return (
    <div className={`lanyard-stage ${className}`}>
      <Lanyard {...props} />
      <div className="lanyard-hint">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 11V6a2 2 0 0 1 4 0v5" />
          <path d="M13 7a2 2 0 0 1 4 0v6" />
          <path d="M17 9a2 2 0 0 1 4 0v4a7 7 0 0 1-7 7h-2a7 7 0 0 1-6-4l-2-4a2 2 0 0 1 3-2l1 2" />
        </svg>
        Drag the card
      </div>
    </div>
  )
}