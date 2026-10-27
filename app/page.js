"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import AccordionFAQ from "@/components/AccordionFAQ";
import TechStackSection from "@/components/TechStackSection";
import ScrollReveal from "@/components/ScrollReveal";
import CertificationsSection from "@/components/CertificationsSection";
import { projects } from "@/data/projects";
import { faqData } from "@/data/faq";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 hero-ambient" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          {/* HERO */}
          <ScrollReveal
            as="section"
            className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center"
          >
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
              <h1 className="hero-fade-up text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-6xl">
                Building Seamless Experiences
              </h1>

              <h2 className="hero-fade-up-delay-1 mt-4 text-2xl font-normal text-[var(--muted)] sm:text-3xl md:text-4xl">
                crafted by{" "}
                <span className="font-semibold text-[var(--accent-primary)]">
                  Chandra Putra
                </span>
              </h2>

              <div className="hero-fade-up-delay-2 relative mt-10 w-full max-w-2xl">
                <div className="hero-float-soft absolute inset-y-3 -left-3 -right-3 rounded-[2rem] bg-[var(--accent-primary)]/20" />
                <HeroImage />
              </div>

              <p className="hero-fade-up-delay-2 mt-10 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                I&apos;m a Full Stack Web Developer focused on building clean,
                responsive, and scalable digital solutions for modern web
                experiences.
              </p>

              <div className="hero-fade-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent-primary)] px-7 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                >
                  Reach Me
                </Link>
          
                <a
                  href="/cv-chandraputra.pdf"
                  download="cv-chandraputra.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-2)] px-7 py-3 text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--surface-1)]"
                >
                  Download CV
                </a>
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
          <ScrollReveal as="section" className="py-20 md:py-28" delay={150}>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">
                  Selected Work & Recent Builds
                </h2>

                <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
                  A selection of projects that reflect my approach to building
                  clean, functional, and modern web experiences.
                </p>
              </div>

              <div>
                <Link
                  href="/projects"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--border-1)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-1)]"
                >
                  View All
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects
                .filter((project) => project.featured)
                .slice(0, 3)
                .map((project, index) => (
                  <ScrollReveal key={project.id} delay={index * 80}>
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal as="section" className="py-20 md:py-28" delay={150}>
            <div className="max-w-2xl">
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">
                Any Questions?
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
                Here are some common questions about my services, process, and
                availability.
              </p>
            </div>

            <div className="mt-10">
              <AccordionFAQ items={faqData} />
            </div>
          </ScrollReveal>
        </div>
      </div>
  );
}
