'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from '@/components/ProjectCard'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import { projects } from '@/data/projects'
import { faqData } from '@/data/faq'

const techStack = [
  'React',
  'Next.js',
  'JavaScript',
  'Laravel',
  'PHP',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'MySQL',
  'Figma',
  'Vercel',
  'Postman',
]

export default function Home() {
  const { t } = useLanguage()

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HERO */}
        <section
          className="min-h-[80vh] flex flex-col md:flex-row items-stretch"
          data-aos="fade-up"
        >
          {/* Kiri: teks */}
          <div className="flex-1 flex flex-col justify-center gap-6 pr-0 md:pr-10">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-sm text-accent-500">
                {t('home.badge')}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                CHANDRA PUTRA
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                WEB
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                DEVELOPER
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest">
              BACKEND ENTHUSIAST YANG SELALU BELAJAR HAL BARU.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium transition-colors duration-200 inline-block transform transition-transform hover:scale-105 active:scale-95"
              >
                {t('home.contactButton')}
              </Link>

              <a
                href="mailto:chandra.wisesa06@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                chandra.wisesa06@example.com
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                {t('home.techStack')}
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm hover:border-accent-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Kanan: foto full kolom */}
          <div
            className="relative flex-1 mt-10 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="150"
          >
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
        <section
          className="py-20 border-t border-dark-700"
          data-aos="fade-up"
          data-aos-offset="120"
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('home.whoAmI.title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>{t('home.whoAmI.p1')}</p>
              <p>{t('home.whoAmI.p2')}</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className="py-20 border-t border-dark-700"
          data-aos="fade-up"
          data-aos-offset="120"
        >
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t('home.projects.title')}
            </h2>
            <Link
              href="/projects"
              className="text-accent-500 hover:text-accent-600 transition-colors font-medium"
            >
              {t('home.projects.viewAll')} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-20 border-t border-dark-700"
          data-aos="fade-up"
          data-aos-offset="120"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {t('home.faq.title')}
          </h2>
          <AccordionFAQ items={faqData} />
        </section>

        {/* CTA */}
        <CTASection />
      </div>
    </PageTransition>
  )
}
