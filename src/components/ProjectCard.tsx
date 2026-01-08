'use client';

import Link from 'next/link';
import { Project } from '@/types/content';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card project-card">
      <div className="project-content">
        <div className="project-domains">
          {project.domain.map((domain) => (
            <span key={domain} className="badge badge-secondary">
              {domain}
            </span>
          ))}
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.context}</p>
        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag">+{project.technologies.length - 4} more</span>
          )}
        </div>
        <div className="project-footer">
          <Link href={`/projects/${project.id}`} className="btn btn-ghost btn-sm">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-domains {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-sm);
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
          margin-top: auto;
          margin-bottom: var(--spacing-lg);
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-border);
        }

        .github-link {
          color: var(--color-text-tertiary);
          transition: color var(--transition-fast);
        }

        .github-link:hover {
          color: var(--color-text);
        }

        :global(.btn-sm) {
          padding: var(--spacing-xs) var(--spacing-md);
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}
