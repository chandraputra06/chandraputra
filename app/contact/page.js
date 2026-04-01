import Link from "next/link";

export const metadata = {
  title: "Contact - Chandra Putra",
  description:
    "Get in touch with Chandra Putra for collaborations and web development projects.",
};

const contactItems = [
  {
    title: "Email",
    value: "chandra.wisesa06@gmail.com",
    href: "mailto:chandra.wisesa06@gmail.com",
  },
  {
    title: "GitHub",
    value: "chandraputra06",
    href: "https://github.com/chandraputra06",
  },
  {
    title: "LinkedIn",
    value: "I Gusti Putu Chandra Putra Artha Kusuma",
    href: "https://www.linkedin.com/in/putu-chandra-putra",
  },
  {
    title: "Instagram",
    value: "@chandrputraaa",
    href: "https://instagram.com/chandrputraaa",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-ambient opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="mx-auto text-center">
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Let&apos;s connect and build something meaningful with me
          </h1>

          <p className="mx-auto mt-5 text-base leading-8 md:text-lg">
            I&apos;m open to freelance work, collaborations, and creative digital
            projects. If you&apos;d like to work together, you can reach me
            through the contact details below.
          </p>
        </div>

        <div className="my-14 h-px bg-[var(--border-1)]" />

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold">
              Contact details
            </p>

            <p className="mt-4 text-sm leading-7 md:text-base">
              Feel free to reach out for web development projects, collaborations,
              or creative work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="mailto:chandra.wisesa06@gmail.com"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--accent-primary)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
              >
                Send Email
              </Link>

              <Link
                href="/projects"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--border-1)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--surface-1)]"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {contactItems.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-[1.5rem] border border-[var(--border-1)] bg-[var(--surface-1)] px-5 py-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[var(--border-2)] hover:bg-[var(--surface-2)]"
              >
                <div className="flex items-start gap-4">                  
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                      {item.value}
                    </p>
                  </div>
                </div>

                <span className="text-[var(--accent-primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}