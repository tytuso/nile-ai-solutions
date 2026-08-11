import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="pointer-events-none absolute left-[-140px] top-20 h-[400px] w-[400px] rounded-full bg-[var(--primary)] opacity-[0.08] blur-[130px]" />
        <div className="pointer-events-none absolute right-[-120px] top-56 h-[360px] w-[360px] rounded-full bg-[var(--secondary)] opacity-[0.08] blur-[130px]" />

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                {eyebrow}
              </p>
              <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-[-0.055em] md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-sm font-medium text-[var(--muted)]">
                Effective 11 August 2026
              </p>
            </div>

            <article className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] sm:p-9 md:p-11">
              <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                {introduction}
              </p>

              <div className="mt-10 space-y-10">
                {sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-bold tracking-[-0.03em]">
                      {section.title}
                    </h2>

                    <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)] md:text-base">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-[24px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <p className="font-bold">Questions or requests?</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Contact Nile AI Solutions and we will respond as soon as
                  reasonably possible.
                </p>
                <a
                  href="mailto:hello@nileai.solutions"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
                >
                  <Mail size={17} />
                  hello@nileai.solutions
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
