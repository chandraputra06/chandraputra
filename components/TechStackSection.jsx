'use client'

import { memo } from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiNextdotjs,
} from 'react-icons/si'

// Konfigurasi tampilan level
const LEVEL_CONFIG = {
  advanced: {
    label: 'Advanced',
    className:
      'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  },
  intermediate: {
    label: 'Intermediate',
    className:
      'border-sky-500/30 bg-sky-500/5 text-sky-200',
  },
  beginner: {
    label: 'Beginner',
    className:
      'border-amber-500/30 bg-amber-500/5 text-amber-200',
  },
}

// SKILLS + LEVEL
const skills = [
  { name: 'HTML', icon: SiHtml5, level: 'advanced' },
  { name: 'CSS', icon: SiCss3, level: 'intermediate' },
  { name: 'JavaScript', icon: SiJavascript, level: 'intermediate' },
  { name: 'PHP', icon: SiPhp, level: 'intermediate' },
  { name: 'Laravel', icon: SiLaravel, level: 'intermediate' },
  { name: 'React', icon: SiReact, level: 'intermediate' },
  { name: 'Next.js', icon: SiNextdotjs, level: 'beginner' },       // 🔹 Next.js
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'intermediate' },
  { name: 'Node.js', icon: SiNodedotjs, level: 'intermediate' },
  { name: 'MySQL', icon: SiMysql, level: 'intermediate' },
]

// TOOLS + LEVEL
const tools = [
  { name: 'Git', icon: SiGit, level: 'beginner' },
  { name: 'GitHub', icon: SiGithub, level: 'intermediate' },
  { name: 'Postman', icon: SiPostman, level: 'intermediate' },
  { name: 'Figma', icon: SiFigma, level: 'advanced' },
  { name: 'Vercel', icon: SiVercel, level: 'beginner' },
]

function TechCard({ item }) {
  const Icon = item.icon
  const levelKey = item.level || 'intermediate'
  const levelCfg = LEVEL_CONFIG[levelKey] || LEVEL_CONFIG.intermediate

  return (
    <div className="flex h-full flex-col items-center justify-between rounded-2xl border border-dark-700 bg-dark-900/40 px-6 py-8 text-center shadow-sm shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-accent-500/70">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-dark-800/60">
        <Icon className="h-12 w-12 text-accent-500" />
      </div>

      <p className="mt-2 text-sm font-medium text-gray-100">
        {item.name}
      </p>

      {/* Badge level */}
      <span
        className={`mt-3 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${levelCfg.className}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {levelCfg.label}
      </span>
    </div>
  )
}

function TechStackSection() {
  return (
    <section className="mt-10 border-t border-dark-700 py-20">
      {/* HEADER – sama gaya dengan section "Siapa Saya" */}
      <div className="max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Tools &amp; Technologies I Use
        </h2>
        <p className="text-lg leading-relaxed text-gray-400">
          Kombinasi teknologi dan tools yang saya gunakan untuk membangun
          aplikasi web yang efisien, maintainable, dan nyaman digunakan. Level
          penguasaan membantu kamu lihat fokus utama saya secara lebih jelas.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {/* SKILLS */}
        <div>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Skills
          </p>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {skills.map((item) => (
              <TechCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Tools
          </p>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {tools.map((item) => (
              <TechCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(TechStackSection)
