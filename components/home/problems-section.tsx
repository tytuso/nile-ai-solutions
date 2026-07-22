import {
  ArrowRight,
  Clock3,
  DatabaseZap,
  FileWarning,
  Globe2,
  MessageSquareWarning,
  Network,
  Repeat2,
  Settings2,
} from "lucide-react";

const problems = [
  {
    problem: "Too much repetitive work",
    solution:
      "We automate routine tasks so your team can focus on higher-value work.",
    icon: Repeat2,
  },
  {
    problem: "Slow customer response",
    solution:
      "AI assistants respond, classify and route customer enquiries faster.",
    icon: MessageSquareWarning,
  },
  {
    problem: "Disconnected systems",
    solution:
      "We connect your platforms, workflows and information into one system.",
    icon: Network,
  },
  {
    problem: "Manual reporting",
    solution:
      "Automated dashboards turn business data into clear, timely reports.",
    icon: FileWarning,
  },
  {
    problem: "Poor access to information",
    solution:
      "Intelligent knowledge systems help teams find accurate answers quickly.",
    icon: DatabaseZap,
  },
  {
    problem: "Outdated digital platforms",
    solution:
      "We replace slow and outdated systems with modern, scalable technology.",
    icon: Globe2,
  },
  {
    problem: "Slow internal processes",
    solution:
      "Custom workflows reduce delays, errors and unnecessary approvals.",
    icon: Clock3,
  },
  {
    problem: "One-size-fits-all software",
    solution:
      "We build systems around your organisation instead of forcing you to adapt.",
    icon: Settings2,
  },
];

export function ProblemsSection() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface-soft)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[340px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-[0.05] blur-[130px]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Problems we solve
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
            Technology should remove obstacles, not create more.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            We identify the challenges slowing your organisation down and build
            practical systems that improve how work gets done.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.problem}
                className="group relative min-h-[270px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="absolute inset-0 translate-y-[72%] bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--secondary)] transition duration-500 group-hover:bg-white/15 group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] transition duration-500 group-hover:text-white/75">
                    The challenge
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-snug tracking-[-0.025em] transition duration-500 group-hover:text-white">
                    {item.problem}
                  </h3>

                  <div className="mt-auto pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--secondary)] transition duration-500 group-hover:text-white/75">
                      Nile Ai solution
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)] transition duration-500 group-hover:text-white">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20a%20business%20challenge%20that%20technology%20could%20help%20solve."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            Discuss your challenge
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}