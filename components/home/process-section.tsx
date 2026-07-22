import {
  ArrowRight,
  CheckCircle2,
  Compass,
  DraftingCompass,
  FlaskConical,
  Rocket,
  Settings2,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We study your organisation, users, challenges and current workflow before proposing any technology.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We map the user experience, system architecture, features and information flow.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the platform using modern, secure and scalable technologies.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Test",
    description:
      "We test performance, usability, reliability and real-world workflows before launch.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy the system, guide users and ensure the solution works correctly in production.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Improve",
    description:
      "We refine the system using feedback, performance data and changing organisational needs.",
    icon: Settings2,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute bottom-[-160px] left-[-100px] h-[420px] w-[420px] rounded-full bg-[var(--primary)] opacity-[0.06] blur-[130px]" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              How we work
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              From a real problem to a working system.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
              Every Nile Ai project follows a clear process designed to reduce
              uncertainty, improve quality and deliver technology that works in
              the real world.
            </p>

            <div className="mt-8 rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <p className="font-bold">Built around your organisation</p>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    We do not force your business into a generic template. The
                    solution is shaped around your users, processes and goals.
                  </p>
                </div>
              </div>
            </div>

            <a
  href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20developing%20a%20digital%20solution."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  Start a conversation
  <ArrowRight size={18} />
</a>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-[25px] top-10 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-35 md:left-[31px]" />

            <div className="space-y-5">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative flex gap-5 md:gap-7"
                  >
                    <div className="relative z-10 flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary)] shadow-md transition duration-300 group-hover:scale-110 md:h-16 md:w-16">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="flex-1 rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-soft)] md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                            Step {step.number}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em]">
                            {step.title}
                          </h3>
                        </div>

                        <span className="text-3xl font-black text-[var(--border)]">
                          {step.number}
                        </span>
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)] md:text-base md:leading-7">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}