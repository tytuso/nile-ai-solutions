import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

const industries = [
  {
    name: "Government",
    icon: Landmark,
  },
  {
    name: "Businesses & SMEs",
    icon: Store,
  },
  {
    name: "Education",
    icon: GraduationCap,
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
  },
  {
    name: "Agriculture",
    icon: Leaf,
  },
  {
    name: "Retail",
    icon: ShoppingBag,
  },
  {
    name: "NGOs",
    icon: Users,
  },
  {
    name: "Professional Services",
    icon: Building2,
  },
];

const values = [
  {
    number: "01",
    title: "Innovation with purpose",
    description:
      "We explore modern technology while remaining focused on practical outcomes.",
  },
  {
    number: "02",
    title: "African ambition",
    description:
      "We believe African organisations should have access to world-class digital systems.",
  },
  {
    number: "03",
    title: "Long-term thinking",
    description:
      "We design technology that can grow, improve and remain useful over time.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--primary)] opacity-[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-140px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-[0.06] blur-[130px]" />

      <div className="container relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              About Nile AI Solutions
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">
              Building the technology Africa&apos;s next chapter requires.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
              Nile AI Solutions is an African technology company focused on
              artificial intelligence, software development, automation and
              digital transformation.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              We help organisations replace inefficient processes with modern
              systems that improve productivity, customer service, access to
              information and decision-making.
            </p>

            <a
  href="https://wa.me/256753523529?text=Hello%20Nile%20AI%20Solutions.%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  Speak with our team
  <ArrowRight size={18} />
</a>
          </div>

          <div className="grid gap-5">
            {values.map((value) => (
              <article
                key={value.number}
                className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[rgba(15,191,159,0.08)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex gap-5">
                  <span className="text-3xl font-black text-[var(--primary)]">
                    {value.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.025em]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Who we build for
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Solutions for organisations across Africa.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              Our technology can be adapted to different industries,
              organisational sizes and operational environments.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.name}
                  className="group flex min-h-[140px] flex-col justify-between rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)] transition duration-300 group-hover:scale-110">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <p className="mt-6 text-sm font-bold">{industry.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}