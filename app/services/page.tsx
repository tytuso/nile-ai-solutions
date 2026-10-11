import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { services } from "@/lib/services";
import { contactUrl } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Website, Web App & AI Development Services",
  description:
    "Premium website design, custom business systems, web apps, AI automation and consulting from Nile AI Solutions in Uganda. Discuss a solution built around your business.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital services | Nile AI Solutions",
    description:
      "Premium websites, custom software and practical AI systems built around your business.",
    url: "/services",
  },
};
export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="projects-hero">
          <div className="container">
            <p className="eyebrow">STRATEGY. DESIGN. DEVELOPMENT.</p>
            <h1>
              Built around your business.
              <br />
              <span className="quiet">Ready for your next chapter.</span>
            </h1>
            <p>
              From a first website to a custom operational system, we connect
              thoughtful design with practical engineering. Start with the
              problem. We’ll help shape the solution.
            </p>
          </div>
        </section>
        <section className="agency-section container">
          <div className="offering-grid">
            {services.map((s, i) => (
              <Link
                className="offering"
                href={`/services/${s.slug}`}
                key={s.slug}
              >
                <div className="offering-top">
                  <s.icon size={28} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <h2 style={{ fontSize: 27, marginTop: 27 }}>{s.title}</h2>
                <p>{s.shortDescription}</p>
                <div className="offering-bottom">
                  <span>{s.capabilities.slice(0, 2).join(" / ")}</span>
                  <ArrowUpRight size={21} />
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="project-cta container">
          <div>
            <p className="eyebrow">A CLEAR STARTING POINT</p>
            <h2>
              Tell us what needs
              <br />
              to work better.
            </h2>
            <p>
              Share your idea, existing website or current workflow. We’ll
              discuss a practical scope, deliverables and the right next step.
            </p>
          </div>
          <a
            href={contactUrl}
            className="button button-aqua"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss your requirements
            <ArrowUpRight size={18} />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
