'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
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
  'Framer Motion',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
      <section
        className="min-h-[80vh] flex flex-col md:flex-row items-stretch"
        data-aos="fade-up"
      >
        {/* Kiri: teks */}
        <div className="flex-1 flex flex-col justify-center gap-6 pr-0 md:pr-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-sm text-accent-500">
              {t('home.badge')}
            </span>
          </motion.div>

          {/* Nama besar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2 mb-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              CHANDRA PUTRA
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              WEB
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              DEVELOPER
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest"
          >
            BACKEND ENTHUSIAST YANG SELALU BELAJAR HAL BARU.
          </motion.p>

          {/* CTA + email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                {t('home.contactButton')}
              </Link>
            </motion.div>
            <a
              href="mailto:chandra.wisesa06@example.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              chandra.wisesa06@example.com
            </a>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="mt-6"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              {t('home.techStack')}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.05 }}
                  className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm hover:border-accent-500/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kanan: foto full tinggi */}
        <div
          className="relative flex-1 mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {/* Foto memenuhi kolom kanan */}
          <Image
            src="/images/pic-chandra-rm.png"            // ganti dengan path fotomu di /public
            alt="Foto Chandra Putra"
            fill
            priority
            className="object-cover object-top"
          />

          {/* Gradient supaya teks kiri tetap kebaca kalau full width */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-dark-900 via-dark-900/60 to-transparent" />
        </div>
      </section>


        {/* Who am I Section */}
        <section
          className="border-t border-dark-700 py-20"
          data-aos="fade-up"
          data-aos-offset="120"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              {t('home.whoAmI.title')}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-400">
              <p>{t('home.whoAmI.p1')}</p>
              <p>{t('home.whoAmI.p2')}</p>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          className="border-t border-dark-700 py-20"
          data-aos="fade-up"
          data-aos-offset="120"
        >
          <div className="mb-12 flex items-end justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold md:text-5xl"
            >
              {t('home.projects.title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="font-medium text-accent-500 transition-colors hover:text-accent-600"
              >
                {t('home.projects.viewAll')} →
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="border-t border-dark-700 py-20"
          data-aos="fade-up"
          data-aos-offset="120"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-4xl font-bold md:text-5xl"
          >
            {t('home.faq.title')}
          </motion.h2>
          <AccordionFAQ items={faqData} />
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </PageTransition>
  )
}
