'use client'

import Link from 'next/link'
import Image from 'next/image'

import ProjectCard from '@/components/ProjectCard'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import TechStackSection from '@/components/TechStackSection'
import ScrollReveal from '@/components/ScrollReveal'
import CertificationsSection from '@/components/CertificationsSection'
import { projects } from '@/data/projects'
import { faqData } from '@/data/faq'

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 hero-ambient" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          {/* HERO */}
          <ScrollReveal as="section" className="flex min-h-[80vh] flex-col pb-16 md:flex-row md:items-stretch">
            {/* Left: text */}
            <div className="flex flex-1 flex-col justify-center gap-6 pr-0 md:pr-10">
              <div className="mb-4 inline-block animate-fade-in-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-surface-1 bg-surface-1 px-5 py-2.5 text-sm text-muted backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse-glow" />
                  Open for Internship / Project
                </span>
              </div>

              <div className="mb-4 space-y-2 animate-fade-in-up stagger-1">
                <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                  <span className="text-gradient">CHANDRA</span>{' '}
                  <span className="text-foreground">PUTRA</span>
                </h1>
              </div>

              <p className="max-w-xl text-lg uppercase text-muted md:text-xl animate-fade-in-up stagger-2">
                Passionate software developer specializing in front-end, back-end, and fullstack web development.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center animate-fade-in-up stagger-3">
                <Link
                  href="/projects"
                  className="shimmer inline-block transform rounded-xl bg-accent-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-dark-900 transition-all duration-300 hover:scale-105 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25 active:scale-95 cursor-pointer"
                >
                  View Projects
                </Link>

                <a
                  href="/cv-chandra-putra.pdf"
                  download
                  className="inline-block transform rounded-xl border border-surface-1 bg-surface-1 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent-500/30 hover:bg-surface-2 hover:text-accent-400 active:scale-95 cursor-pointer"
                >
                  Download CV
                </a>
              </div>

              <p className="mt-3 text-sm text-muted-2 animate-fade-in-up stagger-4">
                chandra.wisesa06@gmail.com
              </p>
            </div>

            <div className="relative mt-10 h-[50vh] w-full md:mt-0 md:h-auto md:flex-1 animate-fade-in stagger-2">
              <Image
                src="/images/pic-chandra-rm.png"
                alt="Chandra Putra"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </ScrollReveal>

          {/* WHO AM I */}
          <ScrollReveal as="section" className="mt-10 py-20" delay={100}>
            <div className="gradient-divider mb-20" />
            <div className="max-w-4xl">
              <h2 className="mb-8 text-4xl font-bold md:text-5xl">
                <span className="text-gradient">Who Am I?</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  I&apos;m Chandra Putra, an Informatics student focused on backend
                  development and application logic.
                </p>
                <p>
                  I&apos;m experienced in building well-structured web systems, managing
                  databases, and understanding application flow from backend to
                  frontend integration.
                </p>
                <p>
                  Currently, I&apos;m continuously developing my skills toward becoming a
                  fullstack developer, building applications that are efficient,
                  scalable, and user-friendly.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* TECH STACK */}
          <ScrollReveal as="section" delay={150}>
            <TechStackSection />
          </ScrollReveal>

          {/* CERTIFICATIONS */}
          <ScrollReveal as="section" delay={150}>
            <CertificationsSection />
          </ScrollReveal>

          {/* PROJECTS */}
          <ScrollReveal as="section" className="mt-10 py-20" delay={150}>
            <div className="gradient-divider mb-20" />
            <div className="mb-12 flex items-end justify-between">
              <h2 className="text-4xl font-bold md:text-5xl">
                <span className="text-gradient">Projects</span>
              </h2>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-medium text-accent-500 transition-all duration-300 hover:text-accent-400"
              >
                View All
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <ScrollReveal key={project.id} delay={100}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal as="section" className="mt-10 py-20" delay={150}>
            <div className="gradient-divider mb-20" />
            <h2 className="mb-12 text-4xl font-bold md:text-5xl">
              <span className="text-gradient">Any Questions?</span>
            </h2>
            <AccordionFAQ items={faqData} />
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal as="section" delay={150}>
            <CTASection />
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  )
}
