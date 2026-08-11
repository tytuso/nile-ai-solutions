import {
  ArrowRight,
  Bot,
  Check,
  ExternalLink,
  Globe2,
  MessageCircleMore,
  Sparkles,
  UsersRound,
} from "lucide-react";

const NILEFLOW_URL =
  "https://nileflow.nileai.solutions/";

const NILEFLOW_TRIAL_URL =
  "https://nileflow.nileai.solutions/signup?plan=trial";

const features = [
  {
    title: "Business-trained answers",
    icon: Sparkles,
  },
  {
    title: "Website chat assistant",
    icon: Globe2,
  },
  {
    title: "Lead capture",
    icon: UsersRound,
  },
  {
    title: "Conversation management",
    icon: MessageCircleMore,
  },
];

export function NileFlowSection() {
  return (
    <section
      id="nileflow"
      aria-labelledby="nileflow-heading"
      className="relative scroll-mt-20 overflow-hidden border-t border-[var(--border)] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute left-[-160px] top-10 h-[380px] w-[380px] rounded-full bg-[var(--primary)] opacity-[0.08] blur-[125px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[430px] w-[430px] rounded-full bg-[var(--secondary)] opacity-[0.08] blur-[135px]" />

      <div className="container relative z-10">
        <div className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
          <div className="grid items-stretch lg:grid-cols-[0.93fr_1.07fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-xs font-bold text-[var(--primary)] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-40" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                </span>

                A Nile AI product · Now live
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                Meet NileFlow
              </p>

              <h2
                id="nileflow-heading"
                className="mt-4 max-w-2xl text-4xl font-bold leading-[1.06] tracking-[-0.045em] md:text-5xl"
              >
                Turn customer conversations into growth.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                NileFlow is our AI customer service, sales and
                automation platform. It helps businesses answer
                customers using approved business knowledge,
                organise conversations and capture potential leads
                from one intelligent workspace.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(15,191,159,0.16)] to-[rgba(20,119,248,0.16)] text-[var(--primary)]">
                        <Icon size={17} />
                      </span>

                      <span className="text-sm font-semibold">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={NILEFLOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the NileFlow platform"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore NileFlow

                  <ExternalLink size={17} />
                </a>

                <a
                  href={NILEFLOW_TRIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start a five-day NileFlow trial"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]"
                >
                  Start 5-day trial

                  <ArrowRight size={17} />
                </a>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
                <Check
                  size={15}
                  className="text-[var(--primary)]"
                />

                Five-day trial with 50 AI responses.
              </p>
            </div>

            <div className="relative min-h-[500px] overflow-hidden border-t border-[var(--border)] bg-[linear-gradient(145deg,#07111e,#0b2530)] p-5 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />

              <div className="relative mx-auto flex h-full max-w-xl flex-col rounded-[28px] border border-white/10 bg-white/[0.055] p-4 shadow-2xl backdrop-blur sm:p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white shadow-lg">
                      <Bot size={22} />
                    </span>

                    <div>
                      <p className="font-bold tracking-[-0.02em]">
                        NileFlow workspace
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Customer service and sales assistant
                      </p>
                    </div>
                  </div>

                  <span className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold text-emerald-300 sm:inline-flex">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />

                    Active
                  </span>
                </div>

                <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Live conversation
                      </p>

                      <MessageCircleMore
                        size={16}
                        className="text-emerald-300"
                      />
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-white/10 px-4 py-3 text-sm leading-6 text-slate-200">
                        Do you provide same-day installation?
                      </div>

                      <div className="max-w-[94%] rounded-2xl rounded-bl-md bg-gradient-to-br from-emerald-400/20 to-sky-500/20 px-4 py-3 text-sm leading-6 text-slate-100 ring-1 ring-white/10">
                        Yes. Based on your location, our team can
                        confirm an available installation slot and
                        prepare a quotation.
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs text-slate-400">
                      Reply generated from approved business knowledge
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Lead captured
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                          <UsersRound size={18} />
                        </span>

                        <div>
                          <p className="text-sm font-bold">
                            New enquiry
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            High purchase intent
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2 text-xs text-slate-300">
                        <p className="flex items-center justify-between gap-3">
                          <span className="text-slate-500">
                            Interest
                          </span>

                          <span className="font-semibold">
                            Installation
                          </span>
                        </p>

                        <p className="flex items-center justify-between gap-3">
                          <span className="text-slate-500">
                            Priority
                          </span>

                          <span className="font-semibold text-amber-300">
                            High
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Example activity
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white/[0.06] p-3">
                          <p className="text-2xl font-bold tracking-[-0.04em]">
                            24
                          </p>

                          <p className="mt-1 text-[11px] text-slate-400">
                            Conversations
                          </p>
                        </div>

                        <div className="rounded-xl bg-white/[0.06] p-3">
                          <p className="text-2xl font-bold tracking-[-0.04em]">
                            7
                          </p>

                          <p className="mt-1 text-[11px] text-slate-400">
                            New leads
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div>
                    <p className="text-xs font-bold text-slate-200">
                      Built by Nile AI Solutions
                    </p>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Intelligent systems designed for real
                      businesses
                    </p>
                  </div>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold text-emerald-300">
                    NILEFLOW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}