import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-[var(--border)] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[360px] w-[360px] rounded-full bg-[var(--primary)] opacity-[0.06] blur-[120px]" />

      <div className="container relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Solutions that drive real change.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-7 text-[var(--muted)]">
              End-to-end technology services designed around your challenges,
              goals and future growth.
            </p>

            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]"
            >
              View all services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 blur-3xl transition duration-500 group-hover:opacity-15" />

                <div className="relative z-10">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.14)] to-[rgba(20,119,248,0.14)] text-[var(--primary)] transition duration-300 group-hover:scale-110">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 max-w-[270px] text-xl font-bold leading-snug tracking-[-0.025em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {service.shortDescription}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]">
                    Explore service

                    <ArrowUpRight
                      size={17}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}