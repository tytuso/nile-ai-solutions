import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/projects/project-card";
import { projects, contactUrl } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Our Projects | Websites, Business Software & AI Products",
  description:
    "Explore completed Nile AI Solutions projects: Nile Graphics, NileStock, ApplyPilot, BizDocs AI, NileSchools, Zabuni AI and Nile Rush. See features and visit each live product.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Ideas made real | Nile AI projects",
    description:
      "Explore our completed business systems, AI tools and browser experiences.",
    url: "/projects",
  },
};
export default function ProjectsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nile AI Solutions projects",
    url: "https://nileai.solutions/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `https://nileai.solutions/projects/${p.slug}`,
      })),
    },
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
        <section className="projects-hero">
          <div className="container">
            <p className="eyebrow">
              THE NILE AI COLLECTION /{" "}
              {String(projects.length).padStart(2, "0")} PROJECTS
            </p>
            <h1>
              Ideas are everywhere.
              <br />
              <span className="quiet">Here’s what we built.</span>
            </h1>
            <p>
              Business systems, AI tools and experiences made to be used.
              Explore our completed projects, learn what each one does and try
              it for yourself.
            </p>
            <div className="project-categories">
              <span>Business software</span>
              <span>Artificial intelligence</span>
              <span>Education</span>
              <span>Games & PWAs</span>
            </div>
          </div>
        </section>
        <section
          className="agency-section container projects-list"
          aria-label="Completed projects"
        >
          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>
        <section className="project-cta container">
          <div>
            <p className="eyebrow">LET’S BUILD YOURS</p>
            <h2>
              Your business deserves
              <br />
              its own great system.
            </h2>
            <p>
              Need a premium website, a custom web app or a tool for your team?
              Let’s turn your requirements into a clear project.
            </p>
          </div>
          <a
            href={contactUrl}
            className="button button-aqua"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss your project <ArrowUpRight size={19} />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
