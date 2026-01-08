'use client';

import Link from 'next/link';
import { Project } from '@/types/content';

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    return (
        <div className="project-detail-page section fade-in">
            <div className="container">
                <Link href="/projects" className="back-link">
                    ← Back to Projects
                </Link>

                <div className="project-header">
                    <div className="project-meta">
                        {project.domain.map((domain: string) => (
                            <span key={domain} className="badge badge-secondary">
                                {domain}
                            </span>
                        ))}
                    </div>
                    <h1 className="project-title">{project.title}</h1>
                </div>

                <div className="project-grid">
                    <div className="project-main">
                        <section className="project-section">
                            <h2>Context</h2>
                            <p>{project.context}</p>
                        </section>

                        <section className="project-section">
                            <h2>Architecture</h2>
                            <p>{project.architecture}</p>
                        </section>

                        <section className="project-section">
                            <h2>Role</h2>
                            <p>{project.role}</p>
                        </section>

                        <section className="project-section">
                            <h2>Results & Impact</h2>
                            <ul className="results-list">
                                {project.results.map((result: string, index: number) => (
                                    <li key={index}>{result}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <aside className="project-sidebar">
                        <div className="sidebar-card">
                            <h3>Technologies</h3>
                            <div className="tech-tags">
                                {project.technologies.map((tech: string) => (
                                    <span key={tech} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.githubUrl && (
                            <div className="sidebar-card">
                                <h3>Links</h3>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-full"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </aside>
                </div>
            </div>

            <style jsx>{`
        .back-link {
          display: inline-block;
          margin-bottom: var(--spacing-xl);
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .back-link:hover {
          color: var(--color-primary);
        }

        .project-header {
          margin-bottom: var(--spacing-3xl);
        }

        .project-meta {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .project-title {
          font-size: clamp(2rem, 5vw, 3rem);
          margin: 0;
        }

        .project-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-3xl);
        }

        .project-section {
          margin-bottom: var(--spacing-3xl);
        }

        .project-section h2 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }

        .results-list {
          list-style: none;
          padding: 0;
        }

        .results-list li {
          position: relative;
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-sm);
        }

        .results-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .sidebar-card {
          background-color: var(--color-surface-elevated);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          margin-bottom: var(--spacing-lg);
        }

        .sidebar-card h3 {
          font-size: 1.125rem;
          margin-bottom: var(--spacing-md);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .btn-full {
          width: 100%;
        }

        @media (max-width: 992px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
          
          .project-sidebar {
            order: -1;
          }
        }
      `}</style>
        </div>
    );
}
