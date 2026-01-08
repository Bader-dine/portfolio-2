'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';
import { Project } from '@/types/content';

export default function Home() {
  const featuredProjects = projects.filter((p: Project) => p.featured).slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section section">
        <div className="container">
          <div className="hero-content slide-up">
            <h1 className="hero-title">
              Engineering the <span className="gradient-text">Future</span> of Automation & AI
            </h1>
            <p className="hero-subtitle">
              I'm <span className="highlight">Bader Eddine Dakhli</span>, an Electrical & Automation Engineer
              specializing in Robotics, Computer Vision, and Industrial Systems.
            </p>
            <div className="hero-cta">
              <Link href="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations-section section">
        <div className="container">
          <h2 className="section-title text-center">Core Specializations</h2>
          <div className="grid grid-3">
            <div className="card spec-card">
              <div className="spec-icon">🤖</div>
              <h3>Robotics</h3>
              <p>Designing and implementing intelligent robotic systems for industrial and research applications.</p>
            </div>
            <div className="card spec-card">
              <div className="spec-icon">👁️</div>
              <h3>Computer Vision</h3>
              <p>Developing advanced vision systems for object detection, tracking, and facial recognition.</p>
            </div>
            <div className="card spec-card">
              <div className="spec-icon">🏭</div>
              <h3>Industrial Automation</h3>
              <p>Expertise in PLC programming, SCADA, and optimizing industrial manufacturing processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects section">
        <div className="container">
          <div className="flex-between mb-lg">
            <h2 className="section-title">Featured Projects</h2>
            <Link href="/projects" className="btn btn-ghost">
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-3">
            {featuredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="grid grid-4 text-center">
            <div className="stat-item">
              <span className="stat-number">1.3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">11+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">80%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          background-image: url('/images/background_home.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.5)
          );
          z-index: 1;
        }

        .hero-section .container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          color: #ffffff;
          margin-bottom: var(--spacing-lg);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-2xl);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .highlight {
          color: #ffffff;
          font-weight: 600;
          border-bottom: 2px solid var(--color-primary);
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
        }

        .section-title {
          margin-bottom: var(--spacing-2xl);
        }

        .spec-card {
          text-align: center;
        }

        .spec-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .mb-lg {
          margin-bottom: var(--spacing-lg);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-primary);
        }

        .stat-label {
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
          }
          
          .hero-section {
            min-height: 60vh;
            background-attachment: scroll;
          }
        }
      `}</style>
    </div>
  );
}
