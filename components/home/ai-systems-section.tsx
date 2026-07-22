import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  MessageSquare,
  Sparkles,
  Workflow,
} from "lucide-react";

const workflowSteps = [
  {
    title: "Customer query received",
    description: "A request enters through WhatsApp, email or your platform.",
    icon: MessageSquare,
  },
  {
    title: "AI analyses the request",
    description: "The system understands intent, urgency and required action.",
    icon: Sparkles,
  },
  {
    title: "Workflow is triggered",
    description: "The task is assigned, processed or escalated automatically.",
    icon: Workflow,
  },
  {
    title: "Results are delivered",
    description: "Customers and staff receive accurate updates immediately.",
    icon: CheckCircle2,
  },
];

const systemCapabilities = [
  {
    title: "Understand your data",
    icon: Database,
  },
  {
    title: "Automate workflows",
    icon: Workflow,
  },
  {
    title: "Generate documents",
    icon: FileText,
  },
  {
    title: "Deliver insights",
    icon: BarChart3,
  },
];

export function AiSystemsSection() {
  return (
    <section
      id="ai-systems"
      className="relative overflow-hidden border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-[0.06] blur-[130px]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Intelligent by design
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              AI software systems that work like your best team.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
              We design intelligent systems that understand information,
              automate repetitive work and help organisations make faster,
              better decisions.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4">
              {systemCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--primary)]">
                      <Icon size={20} />
                    </div>

                    <p className="text-sm font-semibold leading-5">
                      {capability.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
  href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20an%20AI%20software%20system."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  Discuss an AI system
  <ArrowRight size={18} />
</a>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-[0.08] blur-3xl" />

            <div className="glass relative overflow-hidden rounded-[32px] p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
                    <Bot size={22} />
                  </div>

                  <div>
                    <p className="font-bold">Nile Intelligent Workflow</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Live automation process
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--primary)]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--primary)]" />
                  Active
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative flex gap-4">
                      {index < workflowSteps.length - 1 && (
                        <div className="absolute left-5 top-11 h-[calc(100%+16px)] w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] opacity-35" />
                      )}

                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary)] shadow-sm">
                        <Icon size={18} />
                      </div>

                      <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold">{step.title}</p>

                            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                              {step.description}
                            </p>
                          </div>

                          <span className="rounded-full bg-[rgba(15,191,159,0.12)] px-2.5 py-1 text-[10px] font-bold text-[var(--primary)]">
                            0{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-center">
                  <p className="text-xl font-bold">24/7</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Availability
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-center">
                  <p className="text-xl font-bold">Fast</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Response
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-center">
                  <p className="text-xl font-bold">Smart</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}