"use client";

import type { Project } from "@/lib/config";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[0.7rem] font-semibold text-[var(--foreground)]">
            {project.name}
          </h3>
          {project.description ? (
            <p className="mt-1 text-[0.6rem] leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
          ) : null}
        </div>
      </div>

      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <a
              key={`${project.id}-${l.label}`}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-[0.58rem] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section
      className="mx-auto w-[80%] max-w-6xl px-6 pt-5 pb-12 sm:px-10 lg:px-14"
      aria-label="Projects"
    >
      <h2 className="mb-5 text-center text-[0.72rem] font-medium text-[var(--muted)] underline decoration-[var(--border)] underline-offset-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

