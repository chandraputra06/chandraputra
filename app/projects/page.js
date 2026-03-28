import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects - Chandra Putra',
  description: 'A collection of selected projects built by Chandra Putra.',
}

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
            Selected Work & Recent Builds
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            A collection of selected projects that reflect my approach to building
            clean, functional, and modern digital experiences.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}