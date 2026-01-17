'use client'

import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from '@/components/ProjectCard'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('projects.filters.all') },
    { id: 'web', label: t('projects.filters.web') },
    { id: 'mobile', label: t('projects.filters.mobile') },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <h1 className="mb-12 text-5xl font-bold md:text-7xl">
          {t('projects.title')}
        </h1>

        {/* Tabs Filter */}
        <div className="mb-12">
          <div className="relative flex gap-8 border-b border-dark-700">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-2 pb-4 text-sm md:text-base transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span>{filter.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="transition-transform duration-200 hover:-translate-y-1"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            {t('projects.noProjects')}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-32">
          <CTASection />
        </div>
      </div>
    </PageTransition>
  )
}
