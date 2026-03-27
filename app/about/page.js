'use client'

import Image from 'next/image'
import AccordionFAQ from '@/components/AccordionFAQ'
import CTASection from '@/components/CTASection'
import PageTransition from '@/components/PageTransition'
import ScrollReveal from '@/components/ScrollReveal'
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
  return (
    <PageTransition>
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-36 overflow-x-hidden">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full blob-bg blur-[120px]" />

        {/* Title */}
        <ScrollReveal as="h1" className="mb-20 text-5xl font-bold md:text-7xl">
          <span className="text-gradient">About Me</span>
        </ScrollReveal>

        {/* My Story Section */}
        <section className="mb-32">
          <ScrollReveal as="h2" className="mb-12 text-3xl font-bold md:text-4xl">
            My Story
          </ScrollReveal>

          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Photo with gradient border ring */}
            <ScrollReveal className="relative" delay={50}>
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-accent-500/30 via-purple-500/20 to-sky-500/30 opacity-60 blur-sm" />
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-surface-1">
                <Image
                  src="/images/pic-chandra-rm.png"
                  alt="Chandra Putra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Story */}
            <ScrollReveal className="space-y-6 text-lg leading-relaxed text-muted" delay={100}>
              <p>
                My journey in web development started from a great curiosity about how
                websites work. What started as a hobby has now become a passion and
                career that I love.
              </p>
              <p>
                Over the years, I have worked on various projects ranging from simple
                websites to complex web applications. Each project provides valuable
                learning and helps me grow as a developer.
              </p>
              <p>
                I continue to learn and follow the latest technology developments to
                ensure I can provide the best solutions for my clients.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* My Career Section */}
        <section className="mb-32 pt-20">
          <div className="gradient-divider mb-20" />
          <ScrollReveal as="h2" className="mb-12 text-3xl font-bold md:text-4xl">
            <span className="text-gradient">My Career</span>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative space-y-6 pl-8 md:pl-12">
            {/* Vertical line */}
            <div className="absolute left-[11px] md:left-[19px] top-2 bottom-2 w-px bg-linear-to-b from-accent-500/40 via-accent-500/20 to-transparent" />

            {careerData.map((item, index) => (
              <ScrollReveal
                key={index}
                className="group relative"
                delay={index * 120}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-12 top-8 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-accent-500/60 bg-background transition-all duration-300 group-hover:border-accent-400 group-hover:bg-accent-500/20 group-hover:shadow-md group-hover:shadow-accent-500/20" />
                </div>

                <div className="rounded-2xl border border-surface-1 bg-surface-1 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent-500/20 hover:bg-surface-2 hover:shadow-lg hover:shadow-accent-500/5">
                  <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-accent-400">{item.position}</h3>
                      <p className="font-medium text-accent-500">
                        {item.company}
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center rounded-full border border-surface-1 bg-surface-1 px-4 py-1.5 text-sm text-muted-2 md:mt-0">
                      {item.year}
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/60" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 pt-20">
          <div className="gradient-divider mb-20" />
          <ScrollReveal as="h2" className="mb-12 text-3xl font-bold md:text-4xl">
            <span className="text-gradient">Any Questions?</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <AccordionFAQ items={faqData} />
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <ScrollReveal delay={120}>
          <CTASection />
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
