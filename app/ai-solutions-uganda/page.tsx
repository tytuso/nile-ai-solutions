import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  GraduationCap,
  Landmark,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  Store,
  Workflow,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "AI Solutions Uganda | AI Software & Automation Company",

  description:
    "Nile Ai Solutions is an AI company in Uganda developing AI software, AI agents, automation systems, websites and custom digital platforms for organisations across Africa.",

  keywords: [
    "AI solutions Uganda",
    "AI company Uganda",
    "artificial intelligence Uganda",
    "AI software development Uganda",
    "AI automation Uganda",
    "AI agents Uganda",
    "business automation Uganda",
    "custom software Uganda",
    "AI consulting Uganda",
    "AI training Uganda",
    "AI solutions Africa",
  ],

  alternates: {
    canonical: "/ai-solutions-uganda",
  },

  openGraph: {
    title: "AI Solutions Uganda | Nile Ai Solutions",
    description:
      "AI software, automation, AI agents and custom digital systems for businesses and organisations in Uganda.",
    url: "/ai-solutions-uganda",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Solutions Uganda | Nile Ai Solutions",
    description:
      "AI software, automation systems and intelligent digital solutions for organisations in Uganda and across Africa.",
  },
};
const services = [
  {
    title: "AI Software Systems",
    description:
      "Intelligent platforms that analyse information, support decisions and automate organisational workflows.",
    icon: BrainCircuit,
    href: "/ai-software-development-uganda",
  },
  {
    title: "AI Agents and Automation",
    description:
      "AI assistants and automated workflows for customer support, internal operations and repetitive tasks.",
    icon: Bot,
    href: "/ai-automation-uganda",
  },
  {
    title: "Custom Software Development",
    description:
      "Business systems, dashboards, portals and digital tools designed around your organisation.",
    icon: Code2,
    href: "/services/custom-software",
  },
  {
    title: "Websites and Web Applications",
    description:
      "Fast, modern websites and web applications built for performance, credibility and growth.",
    icon: PanelsTopLeft,
    href: "/services/web-development",
  },
  {
    title: "AI Consulting and Training",
    description:
      "Practical guidance and training to help teams adopt artificial intelligence responsibly.",
    icon: GraduationCap,
    href: "/services/ai-consulting-training",
  },
  {
    title: "Business Process Automation",
    description:
      "Connected digital workflows that reduce manual work, delays and avoidable operational errors.",
    icon: Workflow,
    href: "/ai-automation-uganda",
  },
];

const organisations = [
  {
    title: "Government institutions",
    description:
      "Digital service platforms, reporting systems, knowledge assistants and intelligent public-sector workflows.",
    icon: Landmark,
  },
  {
    title: "Businesses and SMEs",
    description:
      "Automation, customer-service systems, business management tools and modern digital platforms.",
    icon: Store,
  },
  {
    title: "NGOs and organisations",
    description:
      "Data systems, field reporting tools, internal knowledge platforms and programme dashboards.",
    icon: Building2,
  },
];

const process = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "We study the organisation, its users, current workflow and the challenge technology needs to solve.",
  },
  {
    number: "02",
    title: "Design the solution",
    description:
      "We map the system architecture, user experience, data requirements and implementation plan.",
  },
  {
    number: "03",
    title: "Build and test",
    description:
      "We develop the platform, test important workflows and refine the system using practical feedback.",
  },
  {
    number: "04",
    title: "Launch and improve",
    description:
      "We deploy the solution, guide users and continue improving it as organisational needs evolve.",
  },
];

const reasons = [
  "Solutions designed around real organisational problems",
  "Understanding of Ugandan and African operating environments",
  "Modern, scalable software technologies",
  "Responsible and practical use of artificial intelligence",
  "Direct communication throughout development",
  "Systems designed for usability and long-term improvement",
];

const faqItems = [
  {
    question: "What AI solutions can Nile Ai Solutions build in Uganda?",
    answer:
      "We can develop AI agents, customer-support assistants, intelligent management systems, document-processing platforms, recommendation systems, workflow automation, dashboards and internal knowledge assistants.",
  },
  {
    question: "Do you only work with large organisations?",
    answer:
      "No. Nile Ai Solutions can work with SMEs, growing businesses, government institutions, NGOs, schools and other organisations. The scope of each system is designed around the organisation’s actual needs and budget.",
  },
  {
    question: "Can you automate WhatsApp customer support?",
    answer:
      "Yes. We can design WhatsApp-based assistants and automated workflows that respond to common questions, collect customer information, qualify enquiries and route complex requests to staff.",
  },
  {
    question: "Can Nile Ai Solutions build custom software?",
    answer:
      "Yes. We develop custom business systems, dashboards, portals, data platforms and web applications instead of limiting clients to generic off-the-shelf software.",
  },
  {
    question: "Do you provide AI training in Uganda?",
    answer:
      "Yes. We provide practical AI consulting and training for teams that want to use artificial intelligence more effectively and responsibly.",
  },
];

export default function AiSolutionsUgandaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nileai.solutions/ai-solutions-uganda/#service",
    name: "AI Solutions Uganda",
    serviceType:
      "Artificial intelligence software development and automation services",
    provider: {
      "@type": "Organization",
      "@id": "https://nileai.solutions/#organization",
      name: "Nile Ai Solutions",
      url: "https://nileai.solutions",
      telephone: "+256753523529",
      email: "hello@nileai.solutions",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Uganda",
      },
      {
        "@type": "Place",
        name: "Africa",
      },
    ],
    description:
      "AI software development, automation, AI agents, websites and custom digital platforms for organisations in Uganda and across Africa.",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute left-[-140px] top-24 h-[420px] w-[420px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-130px] top-20 h-[440px] w-[440px] rounded-full bg-[var(--secondary)] opacity-10 blur-[135px]" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)] shadow-sm sm:text-sm">
              <BrainCircuit size={17} />
              AI solutions in Uganda
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              AI Solutions Built for{" "}
              <span className="gradient-text">Ugandan Organisations.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Nile Ai Solutions develops AI-powered software, intelligent
              automation, AI agents and modern digital platforms for businesses,
              institutions and organisations in Uganda and across Africa.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20an%20AI%20solution%20for%20my%20organisation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Discuss an AI solution
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                Explore our services
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Artificial intelligence services
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Practical AI technology, not empty hype.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                We use artificial intelligence where it can genuinely improve
                productivity, customer service, information access and
                organisational decision-making.
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                Every solution begins with a real problem. We then determine
                whether AI, automation, custom software or a combination of
                technologies provides the best answer.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)] transition duration-300 group-hover:scale-110">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug tracking-[-0.025em]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {service.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]">
                      Learn more
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-soft)] py-24 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Who we support
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              AI systems for Uganda&apos;s changing economy.
            </h2>

            <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg">
              Our solutions can be adapted to different sectors, organisational
              sizes and levels of digital maturity.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {organisations.map((organisation) => {
              const Icon = organisation.icon;

              return (
                <article
                  key={organisation.title}
                  className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em]">
                    {organisation.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {organisation.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Our approach
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                From organisational challenge to working system.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Successful AI adoption requires more than connecting an API. It
                requires understanding users, processes, data, security and the
                results the organisation expects.
              </p>
            </div>

            <div className="grid gap-5">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="flex gap-5 rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                >
                  <span className="text-2xl font-black text-[var(--primary)]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.025em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-soft)] py-24 md:py-28">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg">
                <ShieldCheck size={27} />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Why Nile Ai Solutions
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Local understanding. World-class ambition.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                We are building a technology company that understands the
                realities of organisations in Uganda while maintaining modern
                engineering, design and artificial-intelligence standards.
              </p>
            </div>

            <div className="grid gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-4 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                  />

                  <p className="text-sm font-semibold leading-6">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] md:text-5xl">
              AI solutions Uganda FAQ
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold tracking-[-0.02em]">
                  {item.question}
                </summary>

                <p className="mt-4 border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] pb-24 pt-12 md:pb-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow-soft)] md:p-14">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-[0.08] blur-[120px]" />

            <div className="relative z-10">
              <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Ready to explore what AI can do for your organisation?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                Tell us about the challenge, workflow or opportunity you want
                to improve. We will help you identify a practical way forward.
              </p>

              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20am%20looking%20for%20AI%20solutions%20in%20Uganda%20and%20would%20like%20to%20discuss%20my%20organisation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Talk to Nile Ai Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}