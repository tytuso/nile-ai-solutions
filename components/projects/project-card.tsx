import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article
      className="project-card"
      style={{ "--project-color": project.color } as CSSProperties}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="project-art"
        aria-label={`Explore ${project.name}`}
      >
        <span className="project-art-index">
          NILE AI / {String(index + 1).padStart(2, "0")}
        </span>
        <div className="project-brand">
          <Image src={project.logo} alt="" width={76} height={76} unoptimized />
          <strong>{project.name}</strong>
        </div>
        <span className="project-art-caption">{project.title}</span>
        <span className="project-art-arrow">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="project-card-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="project-card-links">
          <Link href={`/projects/${project.slug}`}>
            Explore project <ArrowUpRight size={16} />
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} website`}
          >
            Visit website <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
