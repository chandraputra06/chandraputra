'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import ProjectCard from '@/components/ProjectCard'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import { projects } from '@/data/projects'
import { faqData } from '@/data/faq'

const techStack = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 
  'Tailwind CSS', 'Node.js', 'Git', 'Framer Motion'
]

export default function Home() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block mb-8"
          >
            <span className="px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-sm text-accent-500">
              {t('home.badge')}
            </span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2 mb-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight"
            >
              JOHN
            </motion.h1>
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight"
            >
              FRONTEND
            </motion.h1>
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold leading-tight"
            >
              DEVELOPER
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 uppercase tracking-widest mb-8"
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-accent-500 hover:bg-accent-600 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                {t('home.contactButton')}
              </Link>
            </motion.div>
            <a 
              href="mailto:john.dev@example.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              john.dev@example.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
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
        </section>

        {/* Who am I Section */}
        <section className="py-20 border-t border-dark-700">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('home.whoAmI.title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>{t('home.whoAmI.p1')}</p>
              <p>{t('home.whoAmI.p2')}</p>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20 border-t border-dark-700">
          <div className="flex justify-between items-end mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
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
                className="text-accent-500 hover:text-accent-600 transition-colors font-medium"
              >
                {t('home.projects.viewAll')} →
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 border-t border-dark-700">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12"
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