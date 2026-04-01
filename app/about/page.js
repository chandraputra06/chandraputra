import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - Chandra Putra",
  description:
    "Learn more about Chandra Putra and his work in web development.",
};

const socialLinks = [
  { label: "Email", href: "mailto:chandra.wisesa06@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "GitHub", href: "https://github.com" },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React.js", "Laravel", "Blade", "Tailwind CSS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "MySQL", "Postman", "Figma"],
  },
  {
    title: "Platforms",
    items: ["Hostinger", "cPanel", "Google OAuth", "Gmail API"],
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h1 className="text-7xl leading-none font-semibold">
            Chandra
            <br />
            <span className="italic font-light">Putra</span>
          </h1>

          <div className="flex max-w-xs flex-col gap-3 pb-2">
            <p className="text-xl font-normal leading-snug text-[var(--foreground)]">
              Full Stack Developer &amp; Freelance Creative
            </p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Based in Bali, Indonesia. I build websites and digital experiences
              for brands and businesses.
            </p>
          </div>
        </div>

        <div className="my-8 mb-14 h-px bg-[var(--border-1)]" />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <div className="max-w-[280px] overflow-hidden rounded-2xl border border-[var(--border-1)] aspect-[3/4]">
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

            <div>
              <p className="mb-3 text-sm text-[var(--muted)]">Connect</p>
              <div className="flex flex-col">
                {socialLinks.map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="group flex items-center justify-between border-b py-3 text-sm transition-colors duration-200 hover:text-[var(--foreground)]"
                    style={{
                      color: "var(--muted)",
                      borderColor: "var(--border-1)",
                    }}
                  >
                    <div className="flex items-center gap-3">                      
                      {item.label}
                    </div>
                    <span
                      className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>
                I am a full stack web developer currently pursuing my studies
                while actively working as a freelancer in website development
                and creative design. This journey allows me to continue learning
                academically while also gaining practical experience through
                real client projects.
              </p>
              <p>
                My focus is on landing pages, company profile websites, travel
                and tour websites, and creative social media design, helping
                brands present themselves in a more professional, clear, and
                visually engaging way.
              </p>
              <p>
                I value clean structure, responsive interfaces, and practical
                solutions that are easy to use and maintain. With experience in
                frontend, backend, and fullstack development, I aim to create
                digital products that are useful, scalable, and aligned with
                real business needs. Beyond development, I also enjoy playing
                football and futsal.
              </p>
            </div>

            <div className="my-10 h-px bg-[var(--border-1)]" />

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
