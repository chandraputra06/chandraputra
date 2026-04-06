'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const hasTech =
    Array.isArray(project.technologies) && project.technologies.length > 0

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--border-1)] bg-[var(--surface-1)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-2)] hover:bg-[var(--surface-2)]">
      {project.thumbnail && (
        <div className="relative h-52 w-full overflow-hidden bg-[var(--surface-2)]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-snug text-[var(--foreground)]">
            {project.title}
          </h3>

          {project.year && (
            <span className="shrink-0 text-sm text-[var(--muted-2)]">
              {project.year}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          {project.shortDescription}
        </p>

        {hasTech && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border-1)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View project details: ${project.title}`}
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[var(--accent-primary)] transition-all duration-300 hover:gap-3"
          >
            View Project
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  )
}