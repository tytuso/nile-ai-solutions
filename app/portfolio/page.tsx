import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Check,
  ExternalLink,
  Globe2,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const NILEFLOW_URL = "https://nileflow.nileai.solutions/";
const NILEFLOW_TRIAL_URL =
  "https://nileflow.nileai.solutions/signup?plan=trial";

const productFeatures = [
  {
    title: "Business-trained answers",
    description: "Respond from approved company knowledge, not guesswork.",
    icon: Sparkles,
  },
  {
    title: "Lead capture",
    description: "Turn high-intent conversations into organised opportunities.",
    icon: UsersRound,
  },
  {
    title: "Website assistant",
    description: "Give customers useful answers from your own website.",
    icon: Globe2,
  },
  {
    title: "Conversation workspace",
    description: "Keep enquiries, context and follow-up in one place.",
    icon: MessageCircleMore,
  },
];

const productPrinciples = [
  {
    title: "Built around real work",
    description:
      "Every product starts with an operational problem, a clear user and a measurable outcome.",
    icon: Check,
  },
  {
    title: "Responsible by design",
    description:
      "We prioritise approved knowledge, appropriate access and human oversight in AI workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Designed for African operations",
    description:
      "Products are shaped around the teams, customers and business realities they need to serve.",
    icon: Globe2,
  },
];

export const metadata: Metadata = {
  title: "AI Products & Portfolio",
  description:
    "Explore NileFlow and the intelligent software products built by Nile AI Solutions for African businesses and organisations.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NileFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: NILEFLOW_URL,
    description:
      "An AI customer service, sales and automation workspace for business-trained answers, lead capture and conversation management.",
    creator: {
      "@type": "Organization",
      name: "Nile AI Solutions",
      url: "https://nileai.solutions",
    },
  };

  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="relative overflow-hidden pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="pointer-events-none absolute left-[-140px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]" />
        <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-10 blur-[130px]" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg">
              <Bot size={29} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Nile AI products
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-[-0.055em] md:text-7xl">
              Intelligent products for{" "}
              <span className="gradient-text">real African operations.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              We turn practical business challenges into focused AI products
              that help teams respond faster, organise work and create better
              customer experiences.
            </p>

            <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-3">
              {[
                "Live product",
                "Built in Uganda",
                "Designed for African businesses",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-glass)] px-4 py-2 text-sm font-semibold text-[var(--muted)] shadow-sm backdrop-blur"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-20 md:py-28">
        <div className="container">
          <article className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-[var(--primary)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  Live now
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
                  Meet NileFlow
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.045em] md:text-5xl">
                  Turn customer conversations into growth.
                </h2>

                <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                  NileFlow is our AI customer service, sales and automation
                  workspace. It helps businesses answer customers using
                  approved knowledge, organise conversations and capture
                  potential leads.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {productFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                      >
                        <Icon size={19} className="text-[var(--primary)]" />
                        <h3 className="mt-3 text-sm font-bold">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={NILEFLOW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Explore NileFlow
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={NILEFLOW_TRIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
                  >
                    Start 5-day trial
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[560px] overflow-hidden border-t border-[var(--border)] bg-[linear-gradient(145deg,#07111e,#0b2530)] p-5 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />

                <div className="relative mx-auto flex h-full max-w-xl flex-col rounded-[28px] border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 shadow-lg">
                        <Bot size={22} />
                      </span>
                      <div>
                        <p className="font-bold">NileFlow workspace</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Customer service and sales assistant
                        </p>
                      </div>
                    </div>
                    <span className="hidden items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold text-emerald-300 sm:inline-flex">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      Active
                    </span>
                  </div>

                  <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Live conversation
                      </p>
                      <div className="mt-6 space-y-3">
                        <p className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-white/10 px-4 py-3 text-sm leading-6 text-slate-200">
                          Can your team help us respond to enquiries after
                          hours?
                        </p>
                        <p className="max-w-[94%] rounded-2xl rounded-bl-md bg-gradient-to-br from-emerald-400/20 to-sky-500/20 px-4 py-3 text-sm leading-6 text-slate-100 ring-1 ring-white/10">
                          Yes. NileFlow can answer from your approved business
                          knowledge and capture the enquiry for follow-up.
                        </p>
                      </div>
                      <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs text-slate-400">
                        Reply grounded in approved business knowledge
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                          Lead captured
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                            <UsersRound size={18} />
                          </span>
                          <div>
                            <p className="text-sm font-bold">New enquiry</p>
                            <p className="mt-1 text-xs text-slate-400">
                              Ready for follow-up
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                          One workspace
                        </p>
                        <div className="mt-5 space-y-3 text-xs text-slate-300">
                          {["Approved knowledge", "Conversation context", "Lead details"].map(
                            (item) => (
                              <p key={item} className="flex items-center gap-2">
                                <Check size={14} className="text-emerald-300" />
                                {item}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-soft)] py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Our product standard
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] md:text-5xl">
              Useful before impressive.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)] md:text-lg">
              We use AI where it creates practical value and build every
              product around the people who will rely on it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {productPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.025em]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="glass mt-12 flex flex-col items-start justify-between gap-6 rounded-[30px] p-7 sm:p-9 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                What comes next
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                More intelligent systems are in development.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                We will publish each product here when it is ready for real
                users, with a clear status and a direct way to try it.
              </p>
            </div>

            <a
              href="https://wa.me/256753523529?text=Hello%20Nile%20AI%20Solutions.%20I%20would%20like%20to%20learn%20more%20about%20your%20AI%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg"
            >
              Discuss a product
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
