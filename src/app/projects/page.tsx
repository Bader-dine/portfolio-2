'use client';

import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/content';

export default function Projects() {
    return (
        <div className="projects-page section fade-in">
            <div className="container">
                <h1 className="section-title">My Projects</h1>
                <p className="section-description">
                    A showcase of my work in Robotics, Computer Vision, Industrial Automation, and AI.
                </p>

                <div className="projects-grid">
                    {projects.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .section-description {
          color: var(--color-text-secondary);
          font-size: 1.125rem;
          margin-bottom: var(--spacing-3xl);
          max-width: 700px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
