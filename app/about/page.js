import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About - Chandra Putra",
  description:
    "Learn more about Chandra Putra and his work in web development.",
};

const socialLinks = [
  {
    label: "Email",
    href: "mailto:chandra.wisesa06@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "MySQL", "Postman", "Figma", "Wordpress"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React.js", "Laravel", "Blade", "Tailwind CSS"],
  },
  {
    title: "Platforms",
    items: ["Hostinger", "cPanel", "Google OAuth", "Gmail API"],
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">

        {/* — Hero Header — */}
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-8 md:text-left">
            <h1 className="text-5xl leading-none font-semibold text-[var(--foreground)] sm:text-6xl md:text-7xl">
              Chandra
              <br />
              <span className="italic font-light">Putra</span>
            </h1>

            <div className="flex max-w-xs flex-col gap-3 md:pb-2">
              <p className="text-lg font-normal leading-snug text-[var(--foreground)] md:text-xl">
                Full Stack Developer &amp; Freelance Creative
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Based in Bali, Indonesia. I build websites and digital experiences
                for brands and businesses.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="my-8 mb-12 h-px bg-[var(--border-1)] md:mb-14" />

        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1.65fr] lg:gap-20">

          {/* — Left Column: Photo + Social — */}
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <ScrollReveal delay={100} className="w-full max-w-[280px]">
              <div className="overflow-hidden rounded-2xl border border-[var(--border-1)] aspect-[3/4]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/pic-chandra.png"
                    alt="Chandra Putra"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="w-full max-w-[280px] text-center">
                <p className="mb-4 text-base font-semibold text-[var(--foreground)]">
                  Connect
                </p>

                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http") ? "noreferrer" : undefined
                        }
                        aria-label={item.label}
                        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border-1)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--border-2)] hover:bg-[var(--surface-1)] hover:text-[var(--foreground)]"
                      >
                        <Icon className="text-base" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* — Right Column: Bio + Skills + CTA — */}
          <div>

            {/* Bio */}
            <ScrollReveal delay={100}>
              <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  <b>I am a full stack web developer</b> currently pursuing my studies
                  while actively working as a <b> freelancer</b> in website development
                  and creative design. This journey allows me to continue <b>learning
                  academically</b> while also gaining practical experience through
                  real client projects.
                </p>
                <p>
                  <b>My focus is on</b> landing pages, company profile websites, travel
                  and tour websites, and creative social media design, helping
                  brands present themselves in a more professional, clear, and
                  visually engaging way.
                </p>
                <p>
                  <b>I value</b> clean structure, responsive interfaces, and practical
                  solutions that are easy to use and maintain. <b>With experience in</b>
                  frontend, backend, and fullstack development, I aim to create
                  digital products that are useful, scalable, and aligned with
                  real business needs. <b>Beyond development,</b> I also enjoy <b>playing
                  football and futsal</b>.
                </p>
              </div>
            </ScrollReveal>

            <div className="my-10 h-px bg-[var(--border-1)]" />

            {/* Skills */}
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 text-sm font-medium text-[var(--foreground)]">
                      {group.title}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent-primary)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={200}>
              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent-primary)] px-7 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-85"
                >
                  Contact Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-1)] px-7 py-3 text-sm text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-1)]"
                >
                  View Projects
                  <span>→</span>
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
