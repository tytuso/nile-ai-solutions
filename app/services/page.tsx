import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AI software, automation, website development, custom software, digital marketing and AI consulting services from Nile Ai Solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-[var(--primary)] opacity-10 blur-[120px]" />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Our services
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-[-0.055em] md:text-7xl">
              Technology solutions built around{" "}
              <span className="gradient-text">real challenges.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              From intelligent software and automation to modern digital
              platforms, we build solutions that improve how organisations
              work, serve customers and grow.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)]">
                    <Icon size={25} />
                  </div>

                  <h2 className="mt-7 text-2xl font-bold tracking-[-0.03em]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {service.shortDescription}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]">
                    Learn more
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20help%20choosing%20the%20right%20technology%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg"
            >
              Discuss your requirements
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}