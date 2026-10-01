import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Globe2,
  Radar,
  Sparkles,
  Workflow,
} from "lucide-react";

import { NileCore } from "@/components/3d/nile-core";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { whatsappUrl } from "@/lib/site";

const services: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "AI Software Systems",
    copy: "Intelligent management platforms, knowledge assistants, document systems, analytics and decision-support tools built around your organisation.",
    icon: BrainCircuit,
  },
  {
    title: "AI Agents & Automation",
    copy: "WhatsApp assistants, customer support agents, lead qualification and connected workflows that reduce repetitive work.",
    icon: Workflow,
  },
  {
    title: "Websites & Web Applications",
    copy: "Modern digital experiences that communicate your value clearly, perform well and give customers a better way to interact with you.",
    icon: Globe2,
  },
  {
    title: "Custom Software Development",
    copy: "Business systems, dashboards, portals and internal tools designed around your users, data and operational workflow.",
    icon: Code2,
  },
  {
    title: "Digital Marketing & Growth",
    copy: "Practical digital strategies that strengthen your online presence and create clearer paths from discovery to enquiry.",
    icon: Radar,
  },
  {
    title: "AI Consulting & Training",
    copy: "Hands-on guidance for teams exploring AI adoption, workflow redesign, use-case selection and responsible deployment.",
    icon: Sparkles,
  },
];

export const metadata = {
  title: "AI & Software Services",
  description: "AI software, automation, websites, custom software and digital transformation services from Nile AI Solutions.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="hero !min-h-[720px] !pb-24">
        <div className="absolute inset-0 grid-line-bg opacity-30" />
        <div className="container relative z-10 pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="hero-copy">
              <p className="eyebrow">Our services</p>
              <h1 className="display-title mt-5">
                Build the right technology for the <span className="gradient-text">real problem.</span>
              </h1>
              <p className="section-copy mt-7 max-w-xl">
                We combine AI, software engineering, automation and digital design to
                turn operational challenges into useful systems.
              </p>
              <a href={whatsappUrl("Hello Nile AI Solutions. I would like to discuss your services and a project I have in mind.")} target="_blank" rel="noopener noreferrer" className="primary-button mt-9">
                Discuss a project
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-stage !min-h-[500px]">
              <NileCore />
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--border)]">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title mt-4">Choose the layer your organisation needs.</h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="feature-card min-h-[290px]">
                <div className="flex items-center justify-between">
                  <span className="service-number">0{index + 1}</span>
                  <Icon size={23} className="text-[var(--primary)]" strokeWidth={1.7} />
                </div>
                <h2 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Our principle</p>
              <h2 className="section-title mt-4">Purpose before novelty.</h2>
            </div>
            <div className="surface p-7 sm:p-9">
              <p className="text-lg leading-8">
                AI should make work easier, information more useful or services more
                effective. We first understand the workflow, then decide whether AI,
                automation, custom software or a combination is the right answer.
              </p>
              <p className="section-copy mt-5">
                This keeps projects focused on the outcome rather than the technology for
                its own sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10 md:p-14">
            <p className="eyebrow">Start here</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.97] tracking-[-0.06em]">
              Bring us the challenge. We&apos;ll help shape the system.
            </h2>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="primary-button mt-9">
              WhatsApp Nile AI
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
