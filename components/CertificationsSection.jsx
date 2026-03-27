'use client'

import { memo } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { certifications } from '@/data/certifications'

function CertificationCard({ item }) {
  const content = (
    <div className="group flex h-full flex-col rounded-2xl border border-surface-1 bg-surface-1 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-surface-2 hover:bg-surface-2 hover:shadow-lg hover:shadow-accent-500/5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-accent-400">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {item.issuer}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-surface-1 bg-surface-1 px-3 py-1 text-xs font-semibold text-muted-2">
          {item.year}
        </span>
      </div>

      {item.url ? (
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-500 transition-all duration-300 group-hover:text-accent-400">
          View credential <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      ) : (
        <div className="mt-4 text-xs text-muted-2">
          Add credential link anytime
        </div>
      )}
    </div>
  )

  if (!item.url) return content

  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open credential: ${item.title}`}
      className="block cursor-pointer"
    >
      {content}
    </Link>
  )
}

function CertificationsSection() {
  if (!certifications || certifications.length === 0) return null

  return (
    <section className="mt-10 py-20">
      <div className="gradient-divider mb-20" />

      <ScrollReveal className="max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-lg leading-relaxed text-muted">
          Professional certificates and learning milestones that support my work.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 70}>
            <CertificationCard item={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default memo(CertificationsSection)

