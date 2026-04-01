import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const metadata = {
  title: "Contact - Chandra Putra",
  description:
    "Get in touch with Chandra Putra for collaborations and web development projects.",
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/chandraputra06",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/putu-chandra-putra",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/chandrputraaa",
    icon: FaInstagram,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
            Let&apos;s work together
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            Open for freelance opportunities, collaborations, and web
            development projects. If you have something in mind, feel free to
            reach out.
          </p>
        </div>

        <div className="my-12 h-px" />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-[2rem] border border-[var(--border-1)] bg-[var(--surface-1)] p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-primary)] text-white shadow-[var(--nav-shadow)]">
                <FaEnvelope className="text-lg" />
              </div>

              <p className="mt-5 text-sm font-medium text-[var(--foreground)]">
                Primary contact
              </p>

              <Link
                href="mailto:chandra.wisesa06@gmail.com"
                className="mt-2 text-base font-medium text-[var(--foreground)] transition-opacity duration-300 hover:opacity-80 md:text-lg"
              >
                chandra.wisesa06@gmail.com
              </Link>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                You can reach me directly or connect through the platforms below.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="group inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-[var(--border-1)] bg-[var(--background)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-2)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
                    >
                      <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="mailto:chandra.wisesa06@gmail.com"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--accent-primary)] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Send Email
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--border-1)] px-7 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-2)]"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}