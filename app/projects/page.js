'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-12"
        >
          {t('projects.title')}
        </motion.h1>

        {/* Tabs Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex gap-8 border-b border-dark-700 relative">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`pb-4 px-2 relative transition-colors ${
                  activeFilter === filter.id 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            {t('projects.noProjects')}
          </motion.div>
        )}

        {/* CTA Section */}
        <div className="mt-32">
          <CTASection />
        </div>
      </div>
    </PageTransition>
  )
}