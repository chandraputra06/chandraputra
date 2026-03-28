"use client";

import Link from "next/link";
import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";
import AccordionFAQ from "@/components/AccordionFAQ";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import TechStackSection from "@/components/TechStackSection";
import ScrollReveal from "@/components/ScrollReveal";
import CertificationsSection from "@/components/CertificationsSection";
import { projects } from "@/data/projects";
import { faqData } from "@/data/faq";
import HeroImage from "@/components/HeroImage";

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
                  href="/cv-chandra-putra.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-2)] px-7 py-3 text-base font-medium text-[var(--foreground)] transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--surface-1)]"
                >
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* WHO AM I */}
          <ScrollReveal as="section" className="py-20 md:py-28">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  About Me
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">
                  Building web solutions with clean structure and clear purpose
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                  I am a web developer who enjoys turning ideas into responsive
                  and functional digital products. I focus on building
                  interfaces that feel clean, systems that stay structured, and
                  experiences that are easy to use.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--border-1)] bg-[var(--surface-1)] p-4">
                    <h3 className="text-sm font-semibold text-[var(--foreground)]">
                      Frontend
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Clean and responsive UI development.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border-1)] bg-[var(--surface-1)] p-4">
                    <h3 className="text-sm font-semibold text-[var(--foreground)]">
                      Backend
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Structured logic and scalable systems.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border-1)] bg-[var(--surface-1)] p-4">
                    <h3 className="text-sm font-semibold text-[var(--foreground)]">
                      Fullstack
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      End-to-end web product development.
                    </p>
                  </div>
                </div>
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
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
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
  );
}
