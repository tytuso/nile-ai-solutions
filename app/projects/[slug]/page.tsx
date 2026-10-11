import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects, getProject, contactUrl } from "@/lib/projects";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/projects/project-card";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.name} — ${p.category}`,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: `${p.name} | Nile AI Solutions`,
      description: p.description,
      url: `/projects/${p.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: p.name,
      description: p.description,
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: p.name,
        description: p.description,
        url: p.url,
        image: `https://nileai.solutions${p.logo}`,
        applicationCategory:
          p.slug === "nile-rush"
            ? "GameApplication"
            : p.slug === "nileschools"
              ? "EducationalApplication"
              : "BusinessApplication",
        operatingSystem: "Web",
        featureList: p.features,
        creator: {
          "@type": "Organization",
          name: "Nile AI Solutions",
          url: "https://nileai.solutions",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nileai.solutions",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://nileai.solutions/projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: p.name,
            item: `https://nileai.solutions/projects/${p.slug}`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <section className="detail-hero container">
          <Link href="/projects" className="text-link">
            <ArrowLeft size={17} /> All projects
          </Link>
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">{p.category} / A NILE AI PRODUCT</p>
              <h1>{p.name}</h1>
              <p className="detail-tagline">{p.title}</p>
              <p className="body-copy">{p.description}</p>
              <a
                className="button button-dark"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {p.name}
                <ArrowUpRight size={19} />
              </a>
            </div>
            <div
              className="detail-brand"
              style={{ "--project-color": p.color } as CSSProperties}
            >
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={128}
                height={128}
                unoptimized
              />
              <strong>{p.name}</strong>
              <span>DESIGNED & BUILT BY NILE AI SOLUTIONS</span>
            </div>
          </div>
        </section>
        <section className="detail-body container">
          <div>
            <p className="eyebrow">THE IDEA BEHIND THE PRODUCT</p>
            <h2>Built for a real need.</h2>
            <p className="large-copy">{p.story}</p>
            <div className="audience">
              <p className="eyebrow">WHO IT’S FOR</p>
              <p>{p.audience}</p>
            </div>
          </div>
          <div className="feature-panel">
            <p className="eyebrow">WHAT YOU CAN DO</p>
            {p.features.map((f) => (
              <p key={f}>
                <Check size={19} />
                {f}
              </p>
            ))}
          </div>
        </section>
        <section className="project-cta container">
          <div>
            <p className="eyebrow">INSPIRED BY {p.name.toUpperCase()}?</p>
            <h2>
              Let’s build something
              <br />
              for your business.
            </h2>
            <p>
              Tell us about your workflow, your customers and the system you
              have in mind.
            </p>
          </div>
          <a
            className="button button-aqua"
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss a custom system <ArrowUpRight size={18} />
          </a>
        </section>
        <section className="agency-section container">
          <div className="section-heading">
            <h2>More from the studio.</h2>
            <Link href="/projects" className="text-link">
              All projects <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="project-grid">
            {projects
              .filter((x) => x.slug !== p.slug)
              .slice(0, 3)
              .map((x, i) => (
                <ProjectCard project={x} key={x.slug} index={i} />
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
