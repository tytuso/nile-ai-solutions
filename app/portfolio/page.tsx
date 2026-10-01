import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { SystemMap } from "@/components/3d/system-map";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Products & Work",
  description: "Explore Nile AI Solutions products and the kinds of intelligent systems we build.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Header />

      <section className="section pb-14 pt-36">
        <div className="container">
          <p className="eyebrow">Products & work</p>
          <h1 className="section-title mt-4 max-w-4xl">
            Useful technology, shipped with a clear purpose.
          </h1>
          <p className="section-copy mt-6 max-w-2xl">
            Our public product portfolio starts with NileFlow. Alongside our own products,
            we design and develop custom systems around specific organisational needs.
          </p>
        </div>
      </section>

      <section className="section pt-10">
        <div className="container">
          <div className="product-panel surface">
            <div className="product-copy">
              <div className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                Live product
              </div>

              <h2 className="mt-8 text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-[0.96] tracking-[-0.055em]">
                NileFlow
              </h2>
              <p className="mt-5 text-xl font-medium tracking-[-0.03em]">
                Turn customer conversations into growth.
              </p>
              <p className="section-copy mt-5">
                An AI customer service, sales and automation workspace that helps
                businesses answer from approved knowledge, organise conversations and
                capture potential leads.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Business-trained answers",
                  "Website chat assistant",
                  "Lead capture",
                  "Conversation management",
                  "Human handover",
                  "Controlled actions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <Check size={16} className="text-[var(--primary)]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="https://nileflow.nileai.solutions/" target="_blank" rel="noopener noreferrer" className="primary-button">
                  Explore NileFlow
                  <ArrowUpRight size={16} />
                </a>
                <a href={whatsappUrl("Hello Nile AI Solutions. I am interested in NileFlow.")} target="_blank" rel="noopener noreferrer" className="secondary-button">
                  Ask about NileFlow
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            <div className="product-visual">
              <SystemMap className="mt-24" />
              <div className="node-status left-6 top-8">
                <span>Input</span>
                <strong>Customer message</strong>
              </div>
              <div className="node-status right-6 top-[39%]">
                <span>Intelligence</span>
                <strong>Understand + respond</strong>
              </div>
              <div className="node-status bottom-8 left-1/2 -translate-x-1/2">
                <span>Outcome</span>
                <strong>Lead + follow-up</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)]">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="feature-card">
              <Bot className="text-[var(--primary)]" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">AI systems</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Knowledge assistants, document systems, management platforms and other
                intelligent applications.
              </p>
            </article>
            <article className="feature-card">
              <ShieldCheck className="text-[var(--primary)]" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">Human control</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                We design clear limits, access rules, escalation paths and review points
                where the use case requires them.
              </p>
            </article>
            <article className="feature-card">
              <ArrowRight className="text-[var(--primary)]" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-0.04em]">Custom builds</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Bring us a process, product idea or business problem and we can scope a
                purpose-built digital system.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="surface overflow-hidden p-7 sm:p-10 md:p-14">
            <p className="eyebrow">Have an idea?</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.97] tracking-[-0.06em]">
              Let&apos;s turn the workflow into something people can use.
            </h2>
            <a href={whatsappUrl("Hello Nile AI Solutions. I have a product or system idea I would like to discuss.")} target="_blank" rel="noopener noreferrer" className="primary-button mt-9">
              Start the conversation
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
