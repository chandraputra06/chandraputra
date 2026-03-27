'use client'

import ProjectCard from '@/components/ProjectCard'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import ScrollReveal from '@/components/ScrollReveal'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-36">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full blob-bg blur-[120px]" />

        {/* Title */}
        <ScrollReveal as="h1" className="mb-6 text-5xl font-bold md:text-7xl">
          <span className="text-gradient">Projects</span>
        </ScrollReveal>

        {/* Subtitle line */}
        <div className="gradient-divider mb-12" />

        {/* Projects Grid — all projects displayed directly */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 90}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* No projects message */}
        {projects.length === 0 && (
          <div className="py-20 text-center">
            <div className="mb-4 text-4xl">🔍</div>
            <p className="text-muted-2">No projects found</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-32">
          <ScrollReveal delay={120}>
            <CTASection />
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  )
}