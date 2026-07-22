import type { Metadata } from "next";
import { ArrowRight, Boxes, Sparkles } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore AI products, software platforms and digital solutions developed by Nile Ai Solutions.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative flex min-h-[82vh] items-center overflow-hidden pb-20 pt-36 md:pt-44">
        <div className="pointer-events-none absolute left-[-140px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-10 blur-[130px]" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg">
              <Boxes size={29} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Nile Ai portfolio
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-[-0.055em] md:text-7xl">
              Intelligent products{" "}
              <span className="gradient-text">built by us.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              This space will showcase our own AI products, software systems
              and digital platforms as they become available.
            </p>

            <div className="glass mx-auto mt-10 max-w-2xl rounded-[30px] p-7">
              <Sparkles
                size={24}
                className="mx-auto text-[var(--primary)]"
              />

              <p className="mt-4 text-xl font-bold">Our first solutions are coming.</p>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                We are currently developing intelligent tools designed around
                real African business and organisational needs.
              </p>
            </div>

            <a
              href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20learn%20about%20your%20upcoming%20AI%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg"
            >
              Talk to our team
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}