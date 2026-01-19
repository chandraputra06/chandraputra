'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from '@/components/ProjectCard'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import TechStackSection from '@/components/TechStackSection'
import { projects } from '@/data/projects'
import { faqData } from '@/data/faq'

export default function Home() {
  const { t } = useLanguage()

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#020617]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* HERO */}
          <section className="flex min-h-[80vh] flex-col items-stretch pb-16 md:flex-row">
            {/* Kiri: teks */}
            <div className="flex flex-1 flex-col justify-center gap-6 pr-0 md:pr-10">
              <div className="mb-4 inline-block">
                <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm text-accent-500">
                  Open for Internship / Project
                </span>
              </div>

              <div className="mb-4 space-y-2">
                <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                  CHANDRA PUTRA
                </h1>
                <h1 className="text-4xl font-bold leading-tight text-gray-200 md:text-5xl lg:text-6xl">
                  WEB DEVELOPER
                </h1>
              </div>

              <p className="max-w-xl text-lg uppercase text-gray-300 md:text-xl">
                Backend-focused web developer yang membangun sistem web yang
                efisien, terstruktur, dan scalable.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/projects"
                  className="inline-block transform rounded-lg bg-accent-500 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-dark-900 transition duration-200 hover:scale-105 hover:bg-accent-600 active:scale-95"
                >
                  Lihat Proyek
                </Link>

                <a
                  href="/cv-chandra-putra.pdf"
                  download
                  className="inline-block transform rounded-lg border border-accent-500/60 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-accent-300 transition duration-200 hover:scale-105 hover:border-accent-400 hover:text-accent-200 active:scale-95"
                >
                  Download CV
                </a>
              </div>

              <p className="mt-3 text-sm text-gray-400">
                chandra.wisesa06@example.com
              </p>
            </div>

            {/* Kanan: foto */}
            <div className="relative mt-10 flex flex-1 md:mt-0">
              <Image
                src="/images/pic-chandra-rm.png"
                alt="Foto Chandra Putra"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-dark-900 via-dark-900/60 to-transparent" />
            </div>
          </section>

          {/* SIAPA SAYA */}
        <section className="mt-10 border-t border-dark-700 py-20">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              {t('home.whoAmI.title')}
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-400">
              <p>
                Saya Chandra Putra, mahasiswa Informatika yang berfokus pada backend
                development dan pengembangan logika aplikasi.
              </p>
              <p>
                Saya terbiasa membangun sistem web dengan struktur yang rapi, mengelola
                database, serta memahami alur aplikasi dari sisi backend hingga
                integrasi frontend.
              </p>
              <p>
                Saat ini, saya terus mengembangkan kemampuan menuju fullstack developer
                agar dapat membangun aplikasi yang efisien, scalable, dan mudah
                digunakan.
              </p>
            </div>    
          </div>
        </section>

          {/* TECH STACK */}
          <TechStackSection />

          {/* PROJECTS */}
          <section className="mt-10 border-t border-dark-700 py-20">
            <div className="mb-12 flex items-end justify-between">
              <h2 className="text-4xl font-bold md:text-5xl">
                {t('home.projects.title')}
              </h2>
              <Link
                href="/projects"
                className="font-medium text-accent-500 transition-colors hover:text-accent-600"
              >
                {t('home.projects.viewAll')} →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-10 border-t border-dark-700 py-20">
            <h2 className="mb-12 text-4xl font-bold md:text-5xl">
              {t('home.faq.title')}
            </h2>
            <AccordionFAQ items={faqData} />
          </section>

          {/* CTA */}
          <CTASection />
        </div>
      </div>
    </PageTransition>
  )
}
