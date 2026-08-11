import {
  ArrowRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-[0.08] blur-[150px]" />

      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--secondary)] opacity-[0.08] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[var(--primary)] opacity-[0.08] blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                <Sparkles size={16} />
                Start your next project
              </div>

              <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.05em] md:text-5xl lg:text-6xl">
                The future will not build itself.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Let us design the intelligent system, digital platform or
                automation solution that moves your organisation forward.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="https://wa.me/256753523529?text=Hello%20Nile%20AI%20Solutions.%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Nile AI Solutions on WhatsApp"
                className="group flex items-center justify-between rounded-[26px] border border-[var(--border)] bg-[var(--surface-soft)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
                    <MessageCircle size={23} />
                  </div>

                  <div>
                    <p className="font-bold">Chat with us on WhatsApp</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Get quick answers and start the conversation.
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  className="shrink-0 transition duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:hello@nileai.solutions"
                aria-label="Send Nile AI Solutions an email"
                className="group flex items-center justify-between rounded-[26px] border border-[var(--border)] bg-[var(--surface-soft)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(15,191,159,0.15)] to-[rgba(20,119,248,0.15)] text-[var(--secondary)]">
                    <Mail size={23} />
                  </div>

                  <div>
                    <p className="font-bold">Send us an email</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Reach out and we will respond as soon as possible.
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  className="shrink-0 transition duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}