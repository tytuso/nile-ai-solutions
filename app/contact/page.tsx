import {
  ArrowRight,
  CalendarDays,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { site, whatsappUrl } from "@/lib/site";

const emailHref =
  `mailto:${site.email}?subject=Project%20enquiry%20for%20Nile%20AI%20Solutions&body=Hello%20Nile%20AI%20Solutions.%0A%0AI%20would%20like%20to%20discuss:%20`;

export const metadata = {
  title: "Contact Nile AI Solutions",
  description: "Start a project conversation with Nile AI Solutions through WhatsApp or email.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="section pb-12 pt-36">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title mt-4 max-w-4xl">
            Have a problem worth building a system for?
          </h1>
          <p className="section-copy mt-6 max-w-2xl">
            Tell us what you are trying to improve, what your users need and what the
            ideal outcome looks like. We can take it from there.
          </p>
        </div>
      </section>

      <section className="section pt-10">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            <a href={whatsappUrl("Hello Nile AI Solutions. I would like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="feature-card group">
              <MessageCircle size={23} className="text-[var(--primary)]" />
              <p className="eyebrow mt-8">Fastest route</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">WhatsApp us</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Start a direct conversation about an AI system, website, web app,
                automation or custom software project.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                Start on WhatsApp <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </a>

            <a href={emailHref} className="feature-card group">
              <Mail size={23} className="text-[var(--primary)]" />
              <p className="eyebrow mt-8">Project brief</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">Email us</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Send a project outline, requirements document or initial idea to
                <strong className="ml-1 text-[var(--foreground)]">{site.email}</strong>.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                Open email <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)]">
        <div className="container">
          <div className="surface p-7 sm:p-10 md:p-14">
            <div className="flex h-11 w-11 items-center justify-center bg-[rgba(67,217,190,0.1)] text-[var(--primary)]">
              <CalendarDays size={20} />
            </div>
            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.045em]">Planning a project call?</h2>
            <p className="section-copy mt-4 max-w-2xl">
              We keep the first conversation practical. Share the problem, the audience,
              the workflow and what success would look like; we can then shape the next step.
            </p>
            <a href={whatsappUrl("Hello Nile AI Solutions. I would like to arrange a project discussion call.")} target="_blank" rel="noopener noreferrer" className="primary-button mt-8">
              Request a project call
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
