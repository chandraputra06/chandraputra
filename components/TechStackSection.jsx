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
  SiWordpress,
} from 'react-icons/si'
import ScrollReveal from '@/components/ScrollReveal'

const LEVEL_CONFIG = {
  advanced: {
    label: 'Advanced',
    className: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/20',
    iconGlow: 'group-hover:text-emerald-400',
  },
  intermediate: {
    label: 'Intermediate',
    className: 'border-sky-500/20 bg-sky-500/5 text-sky-400',
    glow: 'group-hover:shadow-sky-500/20',
    iconGlow: 'group-hover:text-sky-400',
  },
  beginner: {
    label: 'Beginner',
    className: 'border-amber-500/20 bg-amber-500/5 text-amber-400',
    glow: 'group-hover:shadow-amber-500/20',
    iconGlow: 'group-hover:text-amber-400',
  },
}

const skills = [
  { name: 'HTML', icon: SiHtml5, level: 'advanced' },
  { name: 'CSS', icon: SiCss3, level: 'intermediate' },
  { name: 'JavaScript', icon: SiJavascript, level: 'intermediate' },
  { name: 'PHP', icon: SiPhp, level: 'intermediate' },
  { name: 'Laravel', icon: SiLaravel, level: 'intermediate' },
  { name: 'React', icon: SiReact, level: 'intermediate' },
  { name: 'Next.js', icon: SiNextdotjs, level: 'beginner' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'intermediate' },
  { name: 'Node.js', icon: SiNodedotjs, level: 'intermediate' },
  { name: 'MySQL', icon: SiMysql, level: 'intermediate' },
  { name: 'WordPress', icon: SiWordpress, level: 'intermediate' },
]

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
    <div className={`group flex h-full flex-col items-center justify-between rounded-2xl border border-surface-1 bg-surface-1 px-6 py-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-surface-2 hover:bg-surface-2 hover:shadow-lg ${levelCfg.glow}`}>
      {/* Icon with glow background */}
      <div className="relative mb-4">
        <div className="absolute -inset-3 rounded-full bg-accent-500/0 blur-xl transition-all duration-500 group-hover:bg-accent-500/10" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-1 bg-surface-2 transition-all duration-500 group-hover:border-surface-2 group-hover:bg-surface-2">
          <Icon className={`h-8 w-8 text-muted transition-all duration-500 ${levelCfg.iconGlow}`} />
        </div>
      </div>

      <p className="mt-2 text-sm font-semibold text-foreground tracking-tight">
        {item.name}
      </p>

      <span
        className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${levelCfg.className}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {levelCfg.label}
      </span>
    </div>
  )
}

function TechStackSection() {
  return (
    <section className="mt-10 py-20">
      <div className="gradient-divider mb-20" />

      <ScrollReveal className="max-w-4xl">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-gradient">Tools & Technologies</span>{' '}
          I Use
        </h2>
        <p className="text-lg leading-relaxed text-muted">
          A combination of technologies and tools I use to build efficient,
          maintainable, and user-friendly web applications.
        </p>
      </ScrollReveal>

      <div className="mt-14 space-y-16">
        <div>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-2">
            Skills
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {skills.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 60}>
                <TechCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-2">
            Tools
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {tools.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 60}>
                <TechCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(TechStackSection)
