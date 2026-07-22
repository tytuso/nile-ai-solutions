import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative flex min-h-[78vh] items-center overflow-hidden pb-20 pt-36 md:pt-44">
        <div className="pointer-events-none absolute left-[-130px] top-20 h-[400px] w-[400px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-0 right-[-130px] h-[400px] w-[400px] rounded-full bg-[var(--secondary)] opacity-10 blur-[130px]" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[rgba(15,191,159,0.16)] to-[rgba(20,119,248,0.16)] text-[var(--secondary)]">
              <SearchX size={29} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Error 404
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-[-0.055em] md:text-7xl">
              This page has moved beyond the map.
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              The page you requested does not exist, may have been moved or the
              address may have been entered incorrectly.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg"
              >
                <Home size={19} />
                Return home
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 font-semibold shadow-sm"
              >
                <ArrowLeft size={19} />
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}