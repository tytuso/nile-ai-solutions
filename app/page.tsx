import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Smartphone,
  Workflow,
  Sparkles,
  MessageCircle,
  Mail,
  Plus,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/projects/project-card";
import { projects, contactUrl } from "@/lib/projects";

export const metadata: Metadata = {
  title: {
    absolute:
      "Super Intelligence & AI Software in Uganda | Nile AI Solutions",
  },
  description:
    "Nile AI Solutions is building toward Uganda’s biggest AI company, advancing from artificial intelligence into Super Intelligence with intelligent software, agents, automation and digital products.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "From AI to SI — Super Intelligence | Nile AI Solutions",
    description:
      "Building toward Uganda’s biggest AI company and the next era of Super Intelligence.",
    url: "/",
  },
};
const offerings = [
  {
    number: "01",
    icon: Globe2,
    name: "Websites that mean business.",
    text: "A distinctive online presence that makes your business easy to understand, trust and contact.",
    href: "/services/web-development",
    tags: "Company websites / Landing pages / Online stores",
  },
  {
    number: "02",
    icon: Workflow,
    name: "Systems that simplify work.",
    text: "Bring your sales, records, documents and daily operations into a workspace built around your team.",
    href: "/services/custom-software",
    tags: "Business portals / Dashboards / Management systems",
  },
  {
    number: "03",
    icon: Sparkles,
    name: "AI with a real purpose.",
    text: "Help customers, make sense of information and reduce repetitive tasks with thoughtfully designed AI.",
    href: "/services/ai-agents-automation",
    tags: "AI assistants / Automation / Intelligent tools",
  },
  {
    number: "04",
    icon: Smartphone,
    name: "App experiences. Web freedom.",
    text: "Give people an app they can open with a link and install on their phone, with offline features where useful.",
    href: "/services/web-development",
    tags: "Progressive web apps / Interactive tools / Browser games",
  },
];
const faqs = [
  [
    "What can Nile AI Solutions build for my business?",
    "We build company websites, web applications, business management systems, AI tools and progressive web apps. We start with what your customers or team need to do, then recommend the right scope.",
  ],
  [
    "Can you improve a website or system I already have?",
    "Yes. We can review your current website or system and discuss improvements to its design, mobile experience, performance and workflows. Share the existing link when you contact us.",
  ],
  [
    "How much will my project cost?",
    "Cost depends on the pages, features, integrations and level of support you need. Tell us your requirements and budget, and we will provide a scoped quotation before development begins.",
  ],
  [
    "Do you work with businesses outside Uganda?",
    "Yes. We are based in Uganda and can work remotely with clients elsewhere. We agree on requirements, communication and delivery milestones at the start.",
  ],
  [
    "What happens after the website launches?",
    "We agree on handover, hosting and any ongoing maintenance before launch. Training, updates and further improvements can be included in the project scope.",
  ],
];
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="agency-home">
        <section id="home" className="agency-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span /> THE NEXT ERA OF INTELLIGENCE STARTS HERE.
              </p>
              <h1>
                From
                <br />
                <span className="hero-ai-evolution">
                  <del>AI</del>
                  <span className="hero-era-arrow" aria-hidden="true">
                    →
                  </span>
                  <strong>SI</strong>
                </span>
                <span className="hero-super-intelligence">
                  Super Intelligence.
                </span>
              </h1>
              <p className="hero-description">
                We’re moving beyond today’s AI toward systems that can reason,
                create and act—built for businesses and institutions ready for
                what’s next.
              </p>
              <p className="hero-ambition">
                OUR AMBITION: BUILD UGANDA’S BIGGEST AI COMPANY
              </p>
              <div className="button-row">
                <a
                  className="button button-aqua"
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let’s build your project <ArrowUpRight size={20} />
                </a>
                <Link className="hero-text-link" href="/projects">
                  Explore our work <ArrowRight size={18} />
                </Link>
              </div>
              <p className="hero-origin">
                <span className="origin-dot" /> Born in Uganda. Building
                intelligence for the world.
              </p>
            </div>
            <div
              className="hero-showcase"
              aria-label="A selection of Nile AI products"
            >
              <div className="showcase-topline">
                <span>THE NILE AI COLLECTION</span>
                <span>
                  DESIGNED & BUILT IN-HOUSE <span className="origin-dot" />
                </span>
              </div>
              <Link
                href="/projects/nile-graphics"
                className="showcase-graphics"
              >
                <div className="showcase-brand">
                  <Image
                    src="/projects/nile-graphics.svg"
                    alt=""
                    width={34}
                    height={34}
                    unoptimized
                  />
                  <span>Nile Graphics</span>
                  <ArrowUpRight size={19} />
                </div>
                <div className="design-poster">
                  <span>
                    MAKE YOUR
                    <br />
                    NEXT MOVE
                  </span>
                  <strong>
                    Impossible
                    <br />
                    <i>to ignore.</i>
                  </strong>
                  <div className="poster-orbit" />
                  <small>A LITTLE BOLD GOES A LONG WAY.</small>
                </div>
                <div className="showcase-caption">
                  <span>Your brand, in a new light.</span>
                  <span>AI DESIGN STUDIO</span>
                </div>
              </Link>
              <div className="showcase-bottom">
                <Link href="/projects/nilestock" className="showcase-stock">
                  <Image
                    src="/projects/nilestock.png"
                    alt=""
                    width={38}
                    height={38}
                    unoptimized
                  />
                  <strong>NileStock</strong>
                  <span>
                    Every sale.
                    <br />
                    Every detail.
                  </span>
                  <div className="stock-bars" aria-hidden="true">
                    {[30, 50, 42, 65, 53, 80, 95].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <small>
                    RETAIL, SIMPLIFIED <ArrowUpRight size={15} />
                  </small>
                </Link>
                <Link href="/projects/nile-rush" className="showcase-rush">
                  <Image
                    src="/projects/nile-rush.svg"
                    alt=""
                    width={38}
                    height={38}
                    unoptimized
                  />
                  <strong>Nile Rush</strong>
                  <span>
                    Chase the
                    <br />
                    <em>horizon.</em>
                  </span>
                  <div className="rush-road" aria-hidden="true" />
                  <small>
                    PLAY IN YOUR BROWSER <ArrowUpRight size={15} />
                  </small>
                </Link>
              </div>
              <p className="showcase-note">
                A glimpse of what we build. Explore each product to see it in
                action.
              </p>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>STRATEGY → DESIGN → DEVELOPMENT → LAUNCH</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>
        <section className="brand-strip" aria-label="Our products">
          <div className="container">
            <span>
              Ideas we’ve
              <br />
              <strong>made real.</strong>
            </span>
            {projects.slice(0, 5).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`}>
                <Image src={p.logo} alt="" width={25} height={25} unoptimized />
                {p.name}
              </Link>
            ))}
          </div>
        </section>
        <section className="agency-section container" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / WHAT WE BUILD</p>
              <h2>
                Good-looking is a start.
                <br />
                <span className="quiet">Useful is the goal.</span>
              </h2>
            </div>
            <p>
              Your website should do more than exist. We design digital
              experiences that help you sell, serve and run your business
              better.
            </p>
          </div>
          <div className="offering-grid">
            {offerings.map((o) => (
              <Link href={o.href} key={o.number} className="offering">
                <div className="offering-top">
                  <o.icon size={27} strokeWidth={1.5} />
                  <span>{o.number}</span>
                </div>
                <h3>{o.name}</h3>
                <p>{o.text}</p>
                <div className="offering-bottom">
                  <span>{o.tags}</span>
                  <ArrowUpRight size={21} />
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="work-section agency-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / SELECTED WORK</p>
                <h2>
                  Less talk.
                  <br />
                  <span className="quiet">More things you can use.</span>
                </h2>
              </div>
              <div>
                <p>
                  Explore the products we’ve brought to life. Real tools,
                  distinct identities and a clear purpose behind every build.
                </p>
                <Link href="/projects" className="text-link">
                  View all {projects.length} projects <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
            <div className="project-grid">
              {projects.slice(0, 3).map((p, i) => (
                <ProjectCard project={p} index={i} key={p.slug} />
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="agency-section container about-grid">
          <div>
            <p className="eyebrow">03 / THE PEOPLE BEHIND THE PRODUCTS</p>
            <h2>
              We build our own.
              <br />
              <span className="quiet">We can build yours.</span>
            </h2>
            <p className="large-copy">
              Nile AI Solutions is a technology studio based in Uganda, creating
              software for businesses and organisations ready to do things
              better.
            </p>
            <p className="body-copy">
              Our work spans retail, recruitment, education, design and
              interactive experiences. That hands-on product experience shapes
              the way we approach your project: start with a real need, keep the
              experience clear and build something worth using.
            </p>
            <a
              className="text-link"
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Meet your next technology partner <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="principles-panel">
            <p className="eyebrow">THE WAY WE THINK</p>
            {[
              [
                "Clarity before complexity",
                "The right features, a clear scope and an experience people understand.",
              ],
              [
                "Craft in the details",
                "Thoughtful typography, fast pages and interfaces that feel right on a phone.",
              ],
              [
                "Technology that earns its place",
                "AI and automation where they help. Practical software at the centre.",
              ],
            ].map(([a, b], i) => (
              <div key={a}>
                <span>0{i + 1}</span>
                <h3>{a}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="process-band">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / FROM FIRST HELLO TO LAUNCH</p>
                <h2>
                  A clear path.
                  <br />A better build.
                </h2>
              </div>
              <p>
                Stay involved without carrying the technical burden. We agree on
                what we’re building and keep you close as it takes shape.
              </p>
            </div>
            <div className="process-grid">
              {[
                [
                  "Discover",
                  "Tell us the problem, your audience and what success looks like.",
                ],
                [
                  "Design",
                  "Agree on the scope and shape a clear, distinctive experience.",
                ],
                [
                  "Build & test",
                  "Bring the system to life and check the workflows that matter.",
                ],
                [
                  "Launch & support",
                  "Go live with an agreed handover and a plan for what comes next.",
                ],
              ].map(([a, b], i) => (
                <div key={a}>
                  <span>0{i + 1}</span>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="agency-section container faq-grid">
          <div>
            <p className="eyebrow">A FEW USEFUL ANSWERS</p>
            <h2>
              Before we
              <br />
              <span className="quiet">start building.</span>
            </h2>
            <p className="body-copy">
              Have something else in mind?
              <br />
              We’re a message away.
            </p>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details className="faq" key={q}>
                <summary>
                  {q}
                  <Plus size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-band">
          <div className="container">
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>
              Let’s make
              <br />
              <span>something matter.</span>
            </h2>
            <div className="contact-bottom">
              <p>
                A premium website. A smarter system. An idea you can’t stop
                thinking about. Tell us what you have in mind.
              </p>
              <div className="button-row">
                <a
                  className="button button-aqua"
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  Start a conversation <ArrowUpRight size={19} />
                </a>
                <a
                  className="hero-text-link"
                  href="mailto:hello@nileai.solutions"
                >
                  <Mail size={18} />
                  Email us
                </a>
              </div>
            </div>
            <div className="contact-reassurance">
              <span>
                <Check size={15} />A scope tailored to your business
              </span>
              <span>
                <Check size={15} />
                Clear deliverables before we start
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
