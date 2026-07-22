import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileSearch,
  Gauge,
  MessageCircle,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "AI Software Development Uganda | Custom AI Systems",

  description:
    "Nile Ai Solutions develops custom AI software, intelligent business systems, automation platforms and AI-powered applications for organisations in Uganda and across Africa.",

  keywords: [
    "AI software development Uganda",
    "AI developers Uganda",
    "custom AI software Uganda",
    "AI system development Uganda",
    "AI application development Uganda",
    "machine learning solutions Uganda",
    "custom software development Uganda",
    "business automation Uganda",
    "AI company Uganda",
    "AI solutions Africa",
  ],

  alternates: {
    canonical: "/ai-software-development-uganda",
  },

  openGraph: {
    title: "AI Software Development Uganda | Nile Ai Solutions",
    description:
      "Custom AI software, intelligent platforms and automation systems for organisations in Uganda.",
    url: "/ai-software-development-uganda",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Software Development Uganda | Nile Ai Solutions",
    description:
      "Custom AI-powered software and intelligent business platforms for organisations in Uganda and Africa.",
  },
};

const systems = [
  {
    title: "AI-Powered Management Systems",
    description:
      "Business platforms that organise information, automate processes and help management make informed decisions.",
    icon: BrainCircuit,
  },
  {
    title: "Intelligent Knowledge Assistants",
    description:
      "Secure assistants that help staff find answers from organisational documents, policies and internal information.",
    icon: FileSearch,
  },
  {
    title: "Customer-Service AI Systems",
    description:
      "AI assistants that respond to enquiries, collect information and transfer complex cases to staff.",
    icon: Bot,
  },
  {
    title: "Document Processing Platforms",
    description:
      "Systems that extract, organise, classify and analyse information from documents and submitted records.",
    icon: Database,
  },
  {
    title: "Workflow Automation Systems",
    description:
      "Connected workflows that assign tasks, trigger actions, send updates and reduce repetitive manual work.",
    icon: Workflow,
  },
  {
    title: "Analytics and Decision Dashboards",
    description:
      "Dashboards that convert operational information into clear reports, alerts and useful management insights.",
    icon: BarChart3,
  },
];

const developmentStages = [
  {
    number: "01",
    title: "Discovery and workflow analysis",
    description:
      "We understand the organisation, its users, existing tools, data and the problem the software must solve.",
  },
  {
    number: "02",
    title: "System design and architecture",
    description:
      "We define features, integrations, user roles, data flows and the technical structure of the platform.",
  },
  {
    number: "03",
    title: "Development and AI integration",
    description:
      "We build the software and connect the appropriate AI models, APIs, databases and automation services.",
  },
  {
    number: "04",
    title: "Testing and security review",
    description:
      "We test important workflows, permissions, reliability, usability and system performance before launch.",
  },
  {
    number: "05",
    title: "Deployment and user training",
    description:
      "We deploy the system, guide users and help the organisation introduce it into daily operations.",
  },
  {
    number: "06",
    title: "Maintenance and improvement",
    description:
      "We improve the software using feedback, usage information and changing organisational requirements.",
  },
];

const benefits = [
  "Software designed around your organisation’s real processes",
  "Reduced repetitive and manual work",
  "Faster access to reliable organisational information",
  "Improved reporting and management visibility",
  "Scalable systems that can grow with the organisation",
  "Integration with existing websites, databases and communication platforms",
];

const faqItems = [
  {
    question: "What is custom AI software development?",
    answer:
      "Custom AI software development involves designing an intelligent application around a particular organisation’s workflows, users, information and goals instead of relying entirely on a generic product.",
  },
  {
    question: "Can Nile Ai Solutions integrate AI into existing software?",
    answer:
      "Yes. Depending on the existing platform, we can integrate AI assistants, document processing, automated responses, data analysis and other intelligent capabilities through APIs and custom development.",
  },
  {
    question: "Can you build AI software for small businesses in Uganda?",
    answer:
      "Yes. Projects can begin with a focused system that solves one important problem and expand later as the business grows and more features become necessary.",
  },
  {
    question: "Will the organisation own the software?",
    answer:
      "Ownership and licensing arrangements are defined clearly before development begins. Custom projects can be structured around the organisation’s requirements and agreed commercial terms.",
  },
  {
    question: "How long does AI software development take?",
    answer:
      "The timeline depends on the size of the system, required integrations, data readiness and number of features. A focused first version can be delivered faster than a large organisation-wide platform.",
  },
];

export default function AiSoftwareDevelopmentUgandaPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://nileai.solutions/ai-software-development-uganda/#service",
    name: "AI Software Development Uganda",
    serviceType: "Custom artificial intelligence software development",
    description:
      "Custom AI software, intelligent business platforms, workflow automation and AI-powered applications for organisations in Uganda and across Africa.",
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
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute left-[-150px] top-20 h-[430px] w-[430px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-140px] top-32 h-[440px] w-[440px] rounded-full bg-[var(--secondary)] opacity-10 blur-[135px]" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)] shadow-sm sm:text-sm">
              <BrainCircuit size={17} />
              AI software development Uganda
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Custom AI Software Built Around{" "}
              <span className="gradient-text">Your Organisation.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Nile Ai Solutions designs and develops intelligent business
              software, automation platforms and AI-powered applications for
              organisations in Uganda and across Africa.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20custom%20AI%20software%20development."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Discuss your software idea
              </a>

              <Link
                href="/services/ai-software-systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                Explore AI systems
                <ArrowRight size={19} />
              </Link>

              <Link
  href="/ai-automation-uganda"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)]"
>
  Explore AI automation in Uganda
  <ArrowRight size={17} />
</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                What we develop
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Intelligent systems designed for real work.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                We combine software engineering, automation and artificial
                intelligence to create platforms that improve how information,
                tasks and decisions move through an organisation.
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                The system can begin as a focused solution for one workflow and
                expand over time into a larger operational platform.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {systems.map((system) => {
                const Icon = system.icon;

                return (
                  <article
                    key={system.title}
                    className="group rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)] transition duration-300 group-hover:scale-110">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug tracking-[-0.025em]">
                      {system.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {system.description}
                    </p>
                  </article>
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
              How the software connects
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              One intelligent layer across your operations.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm">
              <Database size={27} className="text-[var(--primary)]" />

              <h3 className="mt-6 text-xl font-bold">Business data</h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Information from databases, documents, forms and existing
                platforms.
              </p>
            </article>

            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm">
              <Network size={27} className="text-[var(--secondary)]" />

              <h3 className="mt-6 text-xl font-bold">Connected systems</h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Integration with websites, email, WhatsApp, APIs and internal
                tools.
              </p>
            </article>

            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm">
              <BrainCircuit size={27} className="text-[var(--primary)]" />

              <h3 className="mt-6 text-xl font-bold">AI intelligence</h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Models that understand, classify, summarise and generate useful
                responses.
              </p>
            </article>

            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm">
              <Gauge size={27} className="text-[var(--secondary)]" />

              <h3 className="mt-6 text-xl font-bold">Management insights</h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Dashboards, alerts and reports that support better decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Development process
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                From software concept to operational platform.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                We follow a structured development process so that the final
                system remains usable, secure and aligned with the
                organisation&apos;s goals.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {developmentStages.map((stage) => (
                <article
                  key={stage.number}
                  className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                >
                  <p className="text-sm font-black text-[var(--primary)]">
                    {stage.number}
                  </p>

                  <h3 className="mt-4 text-xl font-bold tracking-[-0.025em]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {stage.description}
                  </p>
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
                Why custom software
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Your organisation should not be forced into a generic system.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Custom AI software can reflect your terminology, approval
                process, users, reporting requirements and operational
                priorities.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                  />

                  <p className="text-sm font-semibold leading-6">{benefit}</p>
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
              AI software development FAQ
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
                Have an AI software idea or operational challenge?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                Tell us what you want the system to accomplish. We will help
                you translate the idea into a realistic development plan.
              </p>

              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20AI%20software%20development%20for%20my%20organisation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Discuss your software project
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}