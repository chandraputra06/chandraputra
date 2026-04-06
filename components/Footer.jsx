"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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

export default function Footer() {
  const pathname = usePathname();

  const hideSocial =
    pathname === "/about" || pathname === "/contact";

  return (
    <footer className="border-t border-[var(--border-1)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-5 px-6 py-8 text-center md:px-10">
        {!hideSocial && (
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border-1)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--border-2)] hover:bg-[var(--surface-1)] hover:text-[var(--foreground)]"
                >
                  <Icon className="text-base" />
                </Link>
              );
            })}
          </div>
        )}

        <p className="text-sm text-[var(--muted)]">
          © 2026 Chandra Putra. Full Stack Developer & Freelance Creative.
        </p>
      </div>
    </footer>
  );
}