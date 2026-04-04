import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "projects · akhilesh",
  description: "projects — github and live demos.",
  openGraph: {
    title: "projects · akhilesh",
    description: "projects — github and live demos.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/98381403?v=4",
        width: 460,
        height: 460,
        alt: "akhilesh",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main className="page">
      <header className="subpage-header fade-up">
        <Link href="/" className="subpage-back">
          ← home
        </Link>
      </header>

      <div className="projects-grid fade-up delay-1">
        {projects.map((p) => (
          <div
            key={p.slug}
            id={p.slug}
            className="project-card project-card-anchor"
          >
            <div className="project-top">
              <span className="project-name">{p.name}</span>
              <div className="project-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  github
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    live ↗
                  </a>
                )}
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
        <p className="projects-more">more on the way..</p>
      </div>
    </main>
  );
}
