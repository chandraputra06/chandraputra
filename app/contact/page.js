import Link from 'next/link'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'

export const metadata = {
  title: 'Contact - Chandra Putra',
  description: 'Get in touch with Chandra Putra for collaborations and web development projects.',
}

const contactItems = [
  {
    title: 'Email',
    value: 'chandra.wisesa06@gmail.com',
    href: 'mailto:chandra.wisesa06@gmail.com',
    icon: FaEnvelope,
  },
  {
    title: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    icon: FaGithub,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedin,
  },
  {
    title: 'Instagram',
    value: '@yourusername',
    href: 'https://instagram.com/yourusername',
    icon: FaInstagram,
  },
]

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
            Let’s build something meaningful together
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            I’m open to collaborations, freelance opportunities, and web
            development projects. Feel free to reach out through the contact
            channels below.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-start gap-4 rounded-[1.75rem] border border-[var(--border-1)] bg-[var(--surface-1)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-2)] hover:bg-[var(--surface-2)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-primary)] text-white">
                  <Icon className="text-base" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 break-all text-sm leading-7 text-[var(--muted)]">
                    {item.value}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-14 rounded-[2rem] border border-[var(--border-1)] bg-[var(--surface-1)] p-8 text-center">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Ready to discuss your next project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Whether you need a website, an internal system, or a modern web
            interface, I’d be happy to discuss how I can help.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:chandra.wisesa06@gmail.com"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
            >
              Send Email
            </Link>

            <Link
              href="/projects"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--border-1)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-2)]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}