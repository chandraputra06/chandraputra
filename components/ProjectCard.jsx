'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} tech
 * @property {string} [image]
 */

/**
 * @param {{ project: Project }} props
 */
export default function ProjectCard({ project }) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-dark-700 bg-dark-800/60 p-4 transition-transform transition-colors hover:-translate-y-1 hover:border-accent-500/60">
            {project.image && (
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-dark-900">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="flex-1 text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-400">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-dark-900 px-3 py-1 text-xs"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <Link
                    href={`/projects/${project.id}`}
                    className="mt-3 text-sm font-medium text-accent-500 hover:text-accent-600"
                >
                    Detail proyek →
                </Link>
            </div>
        </article>
    )
}
