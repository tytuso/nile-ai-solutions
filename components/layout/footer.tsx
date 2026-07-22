import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { services } from "@/lib/services";

const footerNavigation = [
  { name: "Home", href: "/#home" },
  { name: "AI Solutions Uganda", href: "/ai-solutions-uganda" },
  {
    name: "AI Software Uganda",
    href: "/ai-software-development-uganda",
  },
  {
    name: "AI Automation Uganda",
    href: "/ai-automation-uganda",
  },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/#about" },
  { name: "Why Nile Ai", href: "/#why-nile" },
  { name: "Contact", href: "/#contact" },
];
 

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] shadow-lg">
                <span className="text-xl font-black text-white">N</span>

                <span className="absolute -bottom-2 -left-2 h-6 w-14 rotate-[-18deg] rounded-full border-2 border-white/70" />
              </div>

              <div className="leading-none">
                <p className="text-xl font-bold tracking-[-0.03em]">Nile Ai</p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                  Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-6 text-[var(--muted)]">
              Intelligent software, automation and digital solutions designed
              to help African organisations operate smarter and grow with
              confidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/256753523529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <a
                href="mailto:hello@nileai.solutions"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold"
              >
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--foreground)] sm:text-sm">
                Navigate
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {footerNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group inline-flex w-fit items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                  >
                    {item.name}

                    <ArrowUpRight
                      size={13}
                      className="hidden opacity-0 transition group-hover:opacity-100 sm:block"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--foreground)] sm:text-sm">
                Solutions
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="text-sm leading-5 text-[var(--muted)] transition hover:text-[var(--foreground)]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:text-sm md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Nile Ai Solutions. All rights reserved.</p>

          <p>Built for Africa&apos;s digital future.</p>
        </div>
      </div>
    </footer>
  );
}