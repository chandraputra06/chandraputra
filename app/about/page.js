'use client'

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
    ],
  },
  {
    year: '2021 - 2023',
    position: 'Frontend Developer',
    company: 'Digital Solutions Co.',
    description: [
      'Built responsive web applications with React and TypeScript',
      'Collaborated with designers and backend teams',
      'Optimized application performance and accessibility',
    ],
  },
  {
    year: '2019 - 2021',
    position: 'Junior Frontend Developer',
    company: 'StartUp Labs',
    description: [
      'Developed user interfaces using HTML, CSS, and JavaScript',
      'Learned modern frontend frameworks and best practices',
      'Contributed to multiple client projects',
    ],
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <h1
          className="mb-20 text-5xl font-bold md:text-7xl"
          data-aos="fade-up"
          data-aos-offset="80"
        >
          {t('about.title')}
        </h1>

        {/* My Story Section */}
        <section className="mb-32">
          <h2
            className="mb-12 text-3xl font-bold md:text-4xl"
            data-aos="fade-up"
            data-aos-offset="80"
          >
            {t('about.myStory.title')}
          </h2>

          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Foto */}
            <div
              className="relative aspect-square overflow-hidden rounded-2xl border border-dark-700"
              data-aos="fade-right"
              data-aos-offset="100"
            >
              <Image
                src="/images/pic-chandra-rm.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Cerita */}
            <div
              className="space-y-6 text-lg leading-relaxed text-gray-400"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="100"
            >
              <p>{t('about.myStory.p1')}</p>
              <p>{t('about.myStory.p2')}</p>
              <p>{t('about.myStory.p3')}</p>
            </div>
          </div>
        </section>

        {/* My Career Section */}
        <section className="mb-32 border-t border-dark-700 pt-20">
          <h2
            className="mb-12 text-3xl font-bold md:text-4xl"
            data-aos="fade-up"
            data-aos-offset="80"
          >
            {t('about.myCareer.title')}
          </h2>

          <div className="space-y-8">
            {careerData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-dark-700 p-8 transition-colors hover:border-accent-500/50"
                data-aos="fade-up"
                data-aos-offset="80"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold">{item.position}</h3>
                    <p className="font-medium text-accent-500">
                      {item.company}
                    </p>
                  </div>
                  <span className="mt-2 text-gray-500 md:mt-0">
                    {item.year}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-accent-500">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 border-t border-dark-700 pt-20">
          <h2
            className="mb-12 text-3xl font-bold md:text-4xl"
            data-aos="fade-up"
            data-aos-offset="80"
          >
            {t('about.faq.title')}
          </h2>
          <AccordionFAQ items={faqData} />
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </PageTransition>
  )
}
