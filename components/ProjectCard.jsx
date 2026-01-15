'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'

export default function ProjectCard({ project }) {
    const { t } = useLanguage()

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group relative border border-dark-700 rounded-2xl p-6 hover:border-accent-500/50 transition-all duration-300 bg-dark-800/50"
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                            {t(`projects.categories.${project.category}`)}
                        </span>
                        <h3 className="text-2xl font-bold mt-2 mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-500">Dev #{project.devNumber}</p>
                    </div>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.href && (
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-500 hover:text-accent-600 text-sm font-medium inline-flex items-center gap-2 group"
                    >
                        {t('projects.viewProject')}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                )}
            </div>
        </motion.div>
    )
}