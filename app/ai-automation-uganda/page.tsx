import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  Mail,
  MessageCircle,
  MessagesSquare,
  RefreshCcw,
  Route,
  ShieldCheck,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "AI Automation Uganda | Business & Workflow Automation",

  description:
    "Nile Ai Solutions builds AI automation systems, AI agents, WhatsApp assistants and intelligent workflows for businesses and organisations in Uganda and across Africa.",

  keywords: [
    "AI automation Uganda",
    "business automation Uganda",
    "workflow automation Uganda",
    "AI agents Uganda",
    "WhatsApp automation Uganda",
    "customer service automation Uganda",
    "process automation Uganda",
    "artificial intelligence Uganda",
    "AI company Uganda",
    "digital transformation Uganda",
  ],

  alternates: {
    canonical: "/ai-automation-uganda",
  },

  openGraph: {
    title: "AI Automation Uganda | Nile Ai Solutions",
    description:
      "AI agents, WhatsApp automation and intelligent business workflows for organisations in Uganda.",
    url: "/ai-automation-uganda",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Uganda | Nile Ai Solutions",
    description:
      "AI agents and intelligent workflow automation for Ugandan organisations.",
  },
};

const automationSolutions = [
  {
    title: "WhatsApp AI Assistants",
    description:
      "Assistants that answer common questions, collect customer information, qualify enquiries and transfer complex cases to staff.",
    icon: MessageCircle,
  },
  {
    title: "Customer Support Automation",
    description:
      "AI systems that classify enquiries, generate responses, route requests and maintain consistent customer communication.",
    icon: MessagesSquare,
  },
  {
    title: "Lead Qualification Systems",
    description:
      "Automated workflows that capture potential clients, ask relevant questions and direct qualified opportunities to the right team.",
    icon: UserCheck,
  },
  {
    title: "Email and Notification Automation",
    description:
      "Systems that send confirmations, reminders, alerts and follow-up messages based on specific actions or business events.",
    icon: Mail,
  },
  {
    title: "Document Workflow Automation",
    description:
      "Automated collection, classification, extraction, approval and storage of information from forms and documents.",
    icon: FileText,
  },
  {
    title: "Internal Process Automation",
    description:
      "Connected workflows that assign responsibilities, track progress and reduce unnecessary manual coordination.",
    icon: Workflow,
  },
];

const workflowExample = [
  {
    number: "01",
    title: "A request enters the system",
    description:
      "The request may arrive through WhatsApp, email, a website, an internal form or another connected platform.",
    icon: MessagesSquare,
  },
  {
    number: "02",
    title: "The AI understands the request",
    description:
      "The system identifies the customer’s intention, required service, urgency and relevant information.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "An action is triggered",
    description:
      "The system responds, creates a task, updates a database, sends a notification or routes the request.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Staff remain in control",
    description:
      "Complex, sensitive or unusual situations can be transferred to a responsible member of staff.",
    icon: UserCheck,
  },
];

const problems = [
  {
    title: "Repeated customer questions",
    solution:
      "An AI assistant answers common questions immediately and consistently.",
    icon: RefreshCcw,
  },
  {
    title: "Slow task assignment",
    solution:
      "Requests are automatically categorised and sent to the appropriate person.",
    icon: Route,
  },
  {
    title: "Missed follow-ups",
    solution:
      "Automated reminders and status updates keep customers and staff informed.",
    icon: Clock3,
  },
  {
    title: "Disconnected information",
    solution:
      "Automation connects forms, databases, messages and internal systems.",
    icon: Database,
  },
];

const benefits = [
  "Faster response to customers and internal requests",
  "Less time spent on repetitive administrative work",
  "More consistent communication and service delivery",
  "Reduced risk of missed tasks and follow-ups",
  "Better visibility into active workflows",
  "Systems that continue operating outside normal office hours",
];

const faqItems = [
  {
    question: "What business processes can be automated using AI?",
    answer:
      "AI automation can support customer enquiries, lead qualification, appointment scheduling, document processing, task assignment, reporting, reminders, email responses, data entry and many other repetitive workflows.",
  },
  {
    question: "Can Nile Ai Solutions automate WhatsApp in Uganda?",
    answer:
      "Yes. We can build WhatsApp-based assistants and workflows that answer questions, collect customer details, qualify enquiries, send updates and transfer conversations to staff where necessary.",
  },
  {
    question: "Will automation replace our employees?",
    answer:
      "The purpose of responsible automation is usually to reduce repetitive work and support employees. Staff remain important for judgement, relationships, complex cases and decisions that require human responsibility.",
  },
  {
    question: "Can automation connect with our existing systems?",
    answer:
      "In many cases, yes. We can connect automation to websites, databases, email platforms, forms, messaging services and software that provides suitable APIs or integration options.",
  },
  {
    question: "Can a small business afford AI automation?",
    answer:
      "A small business can begin with one focused workflow, such as handling common WhatsApp enquiries or automating lead collection, before expanding to more advanced systems.",
  },
];

export default function AiAutomationUgandaPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nileai.solutions/ai-automation-uganda/#service",
    name: "AI Automation Uganda",
    serviceType:
      "Artificial intelligence agents and business workflow automation",
    description:
      "AI agents, WhatsApp assistants, customer service automation and intelligent workflows for organisations in Uganda and across Africa.",
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
        <div className="pointer-events-none absolute left-[-140px] top-20 h-[430px] w-[430px] rounded-full bg-[var(--primary)] opacity-10 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-120px] top-28 h-[440px] w-[440px] rounded-full bg-[var(--secondary)] opacity-10 blur-[135px]" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)] shadow-sm sm:text-sm">
              <Workflow size={17} />
              AI automation Uganda
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.04] tracking-[-0.055em] md:text-7xl">
              Automate Repetitive Work.{" "}
              <span className="gradient-text">Focus on What Matters.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Nile Ai Solutions builds AI agents, WhatsApp assistants and
              intelligent automation systems that help organisations in Uganda
              work faster, respond better and reduce repetitive manual tasks.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20automate%20a%20business%20process."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Discuss an automation
              </a>

              <Link
                href="/services/ai-agents-automation"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                Explore AI agents
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                What we automate
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Intelligent workflows for everyday operations.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Automation works best when it solves a clearly defined
                operational problem. We identify the repeated steps, decisions
                and information movements slowing your team down.
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                We then design a system that handles routine actions while
                keeping your employees involved where human judgement is
                necessary.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {automationSolutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <article
                    key={solution.title}
                    className="group rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)] transition duration-300 group-hover:scale-110">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug tracking-[-0.025em]">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {solution.description}
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
              Example automated workflow
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              From incoming message to completed action.
            </h2>

            <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg">
              A well-designed AI workflow can understand a request, take the
              correct action and involve staff only when necessary.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="absolute bottom-10 left-[23px] top-10 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] opacity-35 sm:left-[31px]" />

            <div className="space-y-5">
              {workflowExample.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative flex gap-5 sm:gap-7"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary)] shadow-md sm:h-16 sm:w-16">
                      <Icon size={23} />
                    </div>

                    <div className="flex-1 rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)]">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                        Stage {step.number}
                      </p>

                      <h3 className="mt-2 text-xl font-bold tracking-[-0.025em] sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-24 md:py-28">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Problems automation solves
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Remove the small delays that become major costs.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Many organisations lose time through repeated questions,
                delayed follow-ups, scattered information and manual task
                coordination.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {problems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <article
                    key={problem.title}
                    className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                  >
                    <Icon size={25} className="text-[var(--secondary)]" />

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                      The challenge
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-[-0.025em]">
                      {problem.title}
                    </h3>

                    <div className="mt-5 border-t border-[var(--border)] pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                        Automated solution
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {problem.solution}
                      </p>
                    </div>
                  </article>
                );
              })}
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
                Responsible automation
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Automate routine work without losing human control.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                We design clear escalation paths, permissions and human review
                points so that automation supports employees rather than
                creating uncontrolled processes.
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
              AI automation Uganda FAQ
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
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg">
                <Bot size={27} />
              </div>

              <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
                Which repetitive process is slowing your organisation down?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                Explain the workflow to us. We will help you determine what can
                be automated and what should remain under human control.
              </p>

              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20AI%20automation%20for%20my%20organisation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Discuss an automation project
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}