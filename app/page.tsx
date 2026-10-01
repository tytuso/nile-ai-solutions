import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  Network,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { NileCore } from "@/components/3d/nile-core";
import { SystemMap } from "@/components/3d/system-map";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BrandMark } from "@/components/ui/brand-mark";
import { site, whatsappUrl } from "@/lib/site";

const services: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "AI software systems",
    copy: "Intelligent platforms that analyse information, support decisions and automate useful parts of your operation.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "AI agents & automation",
    copy: "AI assistants and workflows for customer support, lead qualification, repetitive tasks and internal operations.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Websites & web apps",
    copy: "Modern, fast digital experiences built to communicate clearly, convert visitors and scale with your business.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Custom software",
    copy: "Business systems, dashboards, portals and digital tools shaped around how your organisation actually works.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Digital growth",
    copy: "Practical digital strategies that improve visibility, strengthen your brand and support measurable growth.",
    icon: Radar,
  },
  {
    number: "06",
    title: "AI consulting & training",
    copy: "Hands-on guidance for teams that want to adopt artificial intelligence usefully and responsibly.",
    icon: Sparkles,
  },
];

const industries = [
  "Businesses & SMEs",
  "Government",
  "Education",
  "Healthcare",
  "Agriculture",
  "Retail",
  "NGOs",
  "Professional services",
];

const process = [
  { step: "01", title: "Discover", copy: "We understand the problem, users, workflow and outcome before technology enters the room." },
  { step: "02", title: "Design", copy: "We map the experience, system architecture, information flow and features." },
  { step: "03", title: "Build", copy: "We develop the platform with modern software engineering and the right AI components." },
  { step: "04", title: "Launch & improve", copy: "We test, deploy, learn from real use and keep improving the system over time." },
];

const challenges = [
  "Repetitive work",
  "Slow customer response",
  "Disconnected systems",
  "Manual reporting",
  "Hard-to-find information",
  "Outdated digital tools",
];

const whatsappProjectUrl = whatsappUrl(
  "Hello Nile AI Solutions. I would like to discuss a new AI, software or website project.",
);

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      <Header />

      <section id="home" className="hero">
        <div className="absolute inset-0 grid-line-bg opacity-35" />
        <div className="pointer-events-none absolute left-[-180px] top-20 h-[460px] w-[460px] rounded-full bg-[rgba(67,217,190,0.07)] blur-[120px]" />
        <div className="pointer-events-none absolute right-[-190px] top-40 h-[520px] w-[520px] rounded-full bg-[rgba(108,157,255,0.07)] blur-[140px]" />

        <div className="container relative z-10">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="hero-chip"
              >
                <i />
                AI • SOFTWARE • AUTOMATION • AFRICA
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="display-title mt-7"
              >
                We build the{" "}
                <span className="gradient-text">systems</span>{" "}
                Africa&apos;s next chapter will run on.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18 }}
                className="section-copy mt-7 max-w-2xl"
              >
                Nile AI Solutions designs and develops AI systems, web applications,
                websites and automation for organisations that want to work smarter,
                respond faster and build for what comes next.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer" className="primary-button">
                  <MessageCircle size={18} />
                  WhatsApp us
                  <ArrowRight size={16} />
                </a>
                <Link href="#capabilities" className="secondary-button">
                  Explore what we build
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>

              <div className="hero-rail">
                <div className="hero-rail-item">
                  <strong>AI systems</strong>
                  <span>Intelligence with purpose</span>
                </div>
                <div className="hero-rail-item">
                  <strong>Digital platforms</strong>
                  <span>Websites & applications</span>
                </div>
                <div className="hero-rail-item">
                  <strong>Automation</strong>
                  <span>Workflows that keep moving</span>
                </div>
              </div>
            </div>

            <div className="hero-stage">
              <NileCore />
              <div className="node-status left-[3%] top-[24%]">
                <span>Layer 01</span>
                <strong>AI intelligence</strong>
              </div>
              <div className="node-status right-[3%] top-[32%]">
                <span>Layer 02</span>
                <strong>Connected software</strong>
              </div>
              <div className="node-status bottom-[9%] left-[22%]">
                <span>Layer 03</span>
                <strong>Automated workflows</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 className="section-title mt-4">One technology partner. Many ways to move forward.</h2>
            </div>
            <div className="lg:pl-16">
              <p className="section-copy max-w-xl">
                Start with one workflow, one website or one product idea. We can shape
                the scope around the problem instead of forcing your organisation into
                a generic template.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.04 }}
                  className="feature-card min-h-[255px]"
                >
                  <div className="flex items-start justify-between">
                    <span className="service-number">{service.number}</span>
                    <Icon size={22} strokeWidth={1.7} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="mt-9 max-w-[280px] text-[1.25rem] font-semibold tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">{service.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="section border-y border-[var(--border)]">
        <div className="container">
          <div className="product-panel surface">
            <div className="product-copy">
              <div className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                Live Nile AI product
              </div>

              <p className="eyebrow mt-8">NileFlow</p>
              <h2 className="mt-4 max-w-xl text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[0.98] tracking-[-0.055em]">
                Turn customer conversations into growth.
              </h2>
              <p className="section-copy mt-6 max-w-xl">
                NileFlow is our AI customer service, sales and automation workspace.
                It helps businesses answer customers from approved knowledge, organise
                conversations and capture potential leads in one place.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Business-trained answers",
                  "Website chat assistant",
                  "Lead capture",
                  "Conversation management",
                ].map((item) => (
                  <div key={item} className="surface-soft flex items-center gap-3 px-3.5 py-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-[rgba(67,217,190,0.12)] text-[var(--primary)]">
                      <Check size={16} />
                    </span>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="https://nileflow.nileai.solutions/" target="_blank" rel="noopener noreferrer" className="primary-button">
                  Explore NileFlow
                  <ArrowUpRight size={16} />
                </a>
                <a href="https://nileflow.nileai.solutions/signup?plan=trial" target="_blank" rel="noopener noreferrer" className="secondary-button">
                  Start the trial
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="product-visual">
              <div className="absolute inset-0 grid-line-bg opacity-20" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0d2833] to-transparent" />
              <SystemMap className="relative z-10 mt-20" />

              <div className="node-status left-6 top-6 sm:left-9 sm:top-9">
                <span>Conversation</span>
                <strong>Customer enquiry received</strong>
              </div>
              <div className="node-status right-6 top-[40%] sm:right-9">
                <span>AI action</span>
                <strong>Answer + qualify + route</strong>
              </div>
              <div className="node-status bottom-6 left-1/2 -translate-x-1/2 sm:bottom-9">
                <span>Outcome</span>
                <strong>Lead captured</strong>
              </div>

              <div className="absolute bottom-7 left-7 z-20 hidden max-w-[230px] text-xs leading-5 text-slate-400 sm:block">
                Approved business knowledge → useful AI response → organised follow-up
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="eyebrow">Built around the real problem</p>
              <h2 className="section-title mt-4 max-w-2xl">Technology should remove obstacles, not create more.</h2>
              <p className="section-copy mt-7 max-w-xl">
                We decide where AI belongs, where automation is enough and where custom
                software is the better answer. The result is a system shaped around the
                work your people actually do.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {challenges.map((item, index) => (
                  <div key={item} className="surface-soft flex items-center gap-3 px-4 py-3.5">
                    <span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/services" className="secondary-button mt-9">
                See our services
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="surface relative overflow-hidden">
              <div className="grid-line-bg absolute inset-0 opacity-35" />
              <div className="relative p-5 sm:p-8">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                  <div>
                    <p className="eyebrow">Connected system map</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">Data • software • intelligence • action</p>
                  </div>
                  <Network size={20} className="text-[var(--primary)]" />
                </div>
                <SystemMap />
                <div className="mt-1 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-4 text-center">
                  <div><strong className="block text-sm">Understand</strong><span className="text-[0.68rem] text-[var(--muted)]">Information</span></div>
                  <div><strong className="block text-sm">Automate</strong><span className="text-[0.68rem] text-[var(--muted)]">Workflows</span></div>
                  <div><strong className="block text-sm">Improve</strong><span className="text-[0.68rem] text-[var(--muted)]">Outcomes</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section border-y border-[var(--border)]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="section-title mt-4">From a real problem to a working system.</h2>
              <p className="section-copy mt-7 max-w-lg">
                Clear stages keep the project grounded. We learn first, build second,
                then improve using what happens in the real world.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[var(--primary)]">
                <Layers3 size={18} />
                Designed for practical deployment
              </div>
            </div>

            <div className="timeline grid gap-9">
              {process.map((item) => (
                <div key={item.step} className="timeline-item">
                  <p className="font-mono text-xs tracking-[0.16em] text-[var(--muted)]">{item.step}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">Why Nile AI</p>
              <h2 className="section-title mt-4">Local context. Modern engineering. AI with a reason to exist.</h2>
            </div>

            <div className="grid gap-4">
              {[
                { icon: Globe2, title: "Built for African realities", copy: "We design around the users, connectivity, infrastructure and operational context the system actually has to survive." },
                { icon: ShieldCheck, title: "Responsible by design", copy: "Clear limits, appropriate access and human oversight matter as much as the model itself." },
                { icon: Rocket, title: "Custom, not generic", copy: "Your workflows become the starting point, not a template you are expected to squeeze into." },
                { icon: Database, title: "Long-term thinking", copy: "We aim for systems that can grow, be maintained and improve as the organisation changes." },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="surface-soft grid gap-4 p-5 sm:grid-cols-[44px_1fr] sm:items-start">
                  <div className="flex h-11 w-11 items-center justify-center bg-[rgba(67,217,190,0.1)] text-[var(--primary)]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-t border-[var(--border)] pt-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow">Who we build for</p>
              <p className="mt-4 text-xl font-semibold tracking-[-0.03em]">Solutions that can adapt across industries and organisation sizes.</p>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
              {industries.map((industry) => (
                <div key={industry} className="bg-[var(--surface)] px-4 py-5 text-sm font-semibold">{industry}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10 md:p-14">
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-72 w-72 rounded-full bg-[rgba(67,217,190,0.1)] blur-[100px]" />
            <div className="pointer-events-none absolute bottom-[-140px] left-[18%] h-72 w-72 rounded-full bg-[rgba(108,157,255,0.08)] blur-[110px]" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-end">
              <div>
                <p className="eyebrow">Start a project</p>
                <h2 className="mt-4 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] font-bold leading-[0.96] tracking-[-0.06em]">
                  Tell us what you want to build.
                </h2>
                <p className="section-copy mt-7 max-w-xl">
                  A website, an AI assistant, an internal system or a bigger idea —
                  start with the problem and we&apos;ll help shape the technology.
                </p>
              </div>

              <div className="grid gap-3">
                <a href={whatsappProjectUrl} target="_blank" rel="noopener noreferrer" className="primary-button w-full">
                  <MessageCircle size={19} />
                  WhatsApp Nile AI
                  <ArrowRight size={16} />
                </a>
                <a href={`mailto:${site.email}`} className="secondary-button w-full">
                  <Mail size={18} />
                  {site.email}
                </a>
                <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                  Prefer a project call? Start on WhatsApp and we&apos;ll take it from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
