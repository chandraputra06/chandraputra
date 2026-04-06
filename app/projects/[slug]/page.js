import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[var(--muted)] transition-all duration-300 hover:gap-3 hover:text-[var(--foreground)]"
          >
            <FaArrowLeft className="text-xs" />
            Back to Projects
          </Link>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-[var(--border-1)] bg-[var(--surface-1)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.projectUrl && (
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  View Project
                  <FaExternalLinkAlt className="text-xs" />
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border-1)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-1)]"
                >
                  GitHub
                  <FaGithub className="text-sm" />
                </Link>
              )}
            </div>

            <div className="mt-12 space-y-10">
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Study Case
                </h2>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                  {project.studyCase}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Client - Year
                </h2>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                  {project.client} - {project.year}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  Technology
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-1)] bg-[var(--surface-1)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.75rem] border border-[var(--border-1)] bg-[var(--surface-1)]"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}