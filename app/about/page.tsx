import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { NileCore } from "@/components/3d/nile-core";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "About Nile AI Solutions",
  description: "Learn how Nile AI Solutions approaches AI, software development, automation and digital transformation across Africa.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="hero !min-h-[720px] !pb-20">
        <div className="container relative z-10 pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="eyebrow">About Nile AI Solutions</p>
              <h1 className="display-title mt-5">
                Building the technology <span className="gradient-text">Africa&apos;s next chapter</span> requires.
              </h1>
              <p className="section-copy mt-7 max-w-2xl">
                Nile AI Solutions is an African technology company focused on artificial
                intelligence, software development, automation and digital transformation.
              </p>
              <a href={whatsappUrl("Hello Nile AI Solutions. I would like to learn more about your company and the work you do.")} target="_blank" rel="noopener noreferrer" className="primary-button mt-9">
                Talk to us
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-stage !min-h-[480px]">
              <NileCore />
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--border)]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="feature-card">
              <Globe2 className="text-[var(--primary)]" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">African ambition</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                We believe African organisations should have access to modern digital
                systems that fit their realities and ambitions.
              </p>
            </article>
            <article className="feature-card">
              <Sparkles className="text-[var(--primary)]" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">Innovation with purpose</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                We explore modern technology while staying focused on useful outcomes.
              </p>
            </article>
            <article className="feature-card">
              <ShieldCheck className="text-[var(--primary)]" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">Responsible AI</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Grounded outputs, appropriate access and human oversight are part of how
                we think about AI systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">What we believe</p>
              <h2 className="section-title mt-4">Useful before impressive.</h2>
            </div>
            <blockquote className="surface p-7 sm:p-10">
              <div className="quote-mark">“</div>
              <p className="mt-4 text-2xl font-medium leading-9 tracking-[-0.035em] sm:text-3xl">
                Artificial intelligence should not only impress. It should solve real problems.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">How we think about deployment</p>
              <h2 className="section-title mt-4">People stay in control.</h2>
            </div>
            <div className="surface p-7 sm:p-10">
              <div className="grid gap-6 text-sm leading-7 text-[var(--muted)]">
                <p><strong className="text-[var(--foreground)]">Purpose before novelty.</strong> We use AI when it creates a practical benefit rather than adding AI for appearance.</p>
                <p><strong className="text-[var(--foreground)]">Grounded and understandable outputs.</strong> Where appropriate, systems work from approved organisational knowledge and make their limits clear.</p>
                <p><strong className="text-[var(--foreground)]">Human oversight.</strong> People should be able to review, correct, escalate or override AI-assisted work where the use case calls for it.</p>
                <p><strong className="text-[var(--foreground)]">Continuous evaluation.</strong> AI behaviour can change, so systems need monitoring, feedback and improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
