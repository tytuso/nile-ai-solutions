import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute right-[-100px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-10 blur-[130px]" />

        <div className="container relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={17} />
            Back to services
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg">
                <Icon size={30} />
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl">
                {service.title}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {service.description}
              </p>
            </div>

            <div className="glass rounded-[30px] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                What we can build
              </p>

              <div className="mt-6 space-y-4">
                {service.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[var(--primary)]"
                    />

                    <p className="text-sm font-semibold">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-soft)] py-20 md:py-28">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Expected outcomes
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em]">
            Technology that creates practical value.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.outcomes.map((outcome, index) => (
              <article
                key={outcome}
                className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-[var(--primary)]">
                  0{index + 1}
                </p>

                <h3 className="mt-4 text-lg font-bold leading-snug">
                  {outcome}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <a
              href={`https://wa.me/256753523529?text=${encodeURIComponent(
                `Hello Nile AI Solutions. I would like to discuss ${service.title}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg"
            >
              Discuss this service
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}