'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import { faqData } from '@/data/faq'

const careerData = [
  {
    year: '2023 - Present',
    position: 'Senior Frontend Developer',
    company: 'Tech Innovate Inc.',
    description: [
      'Lead development of modern web applications using React and Next.js',
      'Mentor junior developers and conduct code reviews',
      'Implement design systems and component libraries',
    ]
  },
  {
    year: '2021 - 2023',
    position: 'Frontend Developer',
    company: 'Digital Solutions Co.',
    description: [
      'Built responsive web applications with React and TypeScript',
      'Collaborated with designers and backend teams',
      'Optimized application performance and accessibility',
    ]
  },
  {
    year: '2019 - 2021',
    position: 'Junior Frontend Developer',
    company: 'StartUp Labs',
    description: [
      'Developed user interfaces using HTML, CSS, and JavaScript',
      'Learned modern frontend frameworks and best practices',
      'Contributed to multiple client projects',
    ]
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-20"
        >
          {t('about.title')}
        </motion.h1>

        {/* My Story Section */}
        <section className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            {t('about.myStory.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-dark-700"
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>{t('about.myStory.p1')}</p>
              <p>{t('about.myStory.p2')}</p>
              <p>{t('about.myStory.p3')}</p>
            </motion.div>
          </div>
        </section>

        {/* My Career Section */}
        <section className="mb-32 border-t border-dark-700 pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            {t('about.myCareer.title')}
          </motion.h2>

          <div className="space-y-8">
            {careerData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-dark-700 rounded-2xl p-8 hover:border-accent-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.position}</h3>
                    <p className="text-accent-500 font-medium">{item.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{item.year}</span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-500 mr-3">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 border-t border-dark-700 pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            {t('about.faq.title')}
          </motion.h2>
          <AccordionFAQ items={faqData} />
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </PageTransition>
  )
}