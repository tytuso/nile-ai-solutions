import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  Handshake,
  Layers3,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Built for African realities",
    description:
      "We design solutions with local infrastructure, users, connectivity and organisational realities in mind.",
    icon: Globe2,
  },
  {
    title: "Human-centred technology",
    description:
      "Our systems are designed to be understandable, practical and easy for real people to use.",
    icon: Users,
  },
  {
    title: "Custom, not generic",
    description:
      "We build around your workflows, goals and challenges instead of forcing your organisation into a template.",
    icon: Layers3,
  },
  {
    title: "AI with a clear purpose",
    description:
      "We use artificial intelligence where it creates meaningful value, not simply because it is fashionable.",
    icon: BrainCircuit,
  },
  {
    title: "Security and reliability",
    description:
      "We consider access control, responsible data use, maintainability and long-term system reliability.",
    icon: ShieldCheck,
  },
  {
    title: "A true technology partner",
    description:
      "We work closely with your team from discovery through launch, training and continuous improvement.",
    icon: Handshake,
  },
];

const principles = [
  "Practical solutions",
  "Clear communication",
  "Responsible AI",
  "Modern engineering",
];

export function WhyNileSection() {
  return (
    <section
      id="why-nile"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface-soft)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-[-160px] top-[-40px] h-[430px] w-[430px] rounded-full bg-[var(--secondary)] opacity-[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[440px] w-[440px] rounded-full bg-[var(--primary)] opacity-[0.06] blur-[130px]" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              Why Nile Ai
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Technology built with purpose, context and ambition.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
              We combine strategy, design, software development and artificial
              intelligence to create systems that solve real organisational
              problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold shadow-sm"
                >
                  {principle}
                </span>
              ))}
            </div>

            <div className="glass mt-9 overflow-hidden rounded-[30px] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                Our belief
              </p>

              <blockquote className="mt-4 text-2xl font-bold leading-snug tracking-[-0.035em] md:text-3xl">
                “Artificial intelligence should not only impress. It should
                solve real problems.”
              </blockquote>

              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                Every system we design must make work easier, information more
                useful or services more effective.
              </p>
            </div>

            <a
              href="https://wa.me/256753523529?text=Hello%20Nile%20Ai%20Solutions.%20I%20would%20like%20to%20discuss%20how%20technology%20can%20support%20my%20organisation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Work with Nile Ai
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className={`group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] ${
                    index === 0 || index === 5 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 blur-3xl transition duration-500 group-hover:opacity-15" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)] transition duration-300 group-hover:scale-110">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-[-0.025em]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {reason.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}