'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  const hasTech = Array.isArray(project.tech) && project.tech.length > 0

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-1 bg-surface-1 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent-500/30 hover:bg-surface-2 hover:shadow-xl hover:shadow-accent-500/5 cursor-pointer">
      {/* Glow effect on hover */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-accent-500/0 to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-accent-500/10 group-hover:to-transparent pointer-events-none" />

      {project.image && (
        <div className="relative h-48 w-full overflow-hidden bg-background">
          <Image
            src={project.image}
            alt={project.title || 'Project image'}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 overlay-to-bg opacity-70" />
        </div>
      )}

      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent-400">
          {project.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {hasTech && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface-1 bg-surface-2 px-3 py-1 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:border-accent-500/20 group-hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/projects/${project.id}`}
          aria-label={`View project details: ${project.title}`}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent-500 transition-all duration-300 hover:text-accent-400 hover:gap-3 cursor-pointer"
        >
          Project details
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  )
}
