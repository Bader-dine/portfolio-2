'use client';

import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';
import contactInfo from '@/data/contact.json';
import { Experience, Education, SkillCategory } from '@/types/content';

export default function CV() {
  return (
    <div className="cv-page section fade-in">
      <div className="container container-md">
        <div className="cv-actions no-print">
          <button onClick={() => window.print()} className="btn btn-primary">
            Print / Save as PDF
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
          </button>
        </div>

        <div className="cv-document card">
          <header className="cv-header">
            <h1>Bader Eddine Dakhli</h1>
            <p className="cv-subtitle">Electrical & Automation Engineer</p>
            <div className="cv-contact">
              <span>{contactInfo.email}</span>
              <span className="separator">|</span>
              <span>LinkedIn: bader-dakhli</span>
              <span className="separator">|</span>
              <span>GitHub: bader-dakhli</span>
            </div>
          </header>

          <section className="cv-section">
            <h2>Professional Summary</h2>
            <p>
              Innovative Electrical & Automation Engineer with expertise in Robotics, Computer Vision,
              and AI. Proven track record in developing advanced video analytics systems, industrial
              automation solutions, and embedded systems. Skilled in Python, C++, and PLC programming.
            </p>
          </section>

          <section className="cv-section">
            <h2>Experience</h2>
            {experienceData.experience.map((exp: Experience, idx: number) => (
              <div key={idx} className="cv-item">
                <div className="cv-item-header">
                  <h3>{exp.title}</h3>
                  <span className="cv-item-date">{exp.period}</span>
                </div>
                <p className="cv-item-subtitle">{exp.company}</p>
                <ul className="cv-list">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>Education</h2>
            {experienceData.education.map((edu: Education, idx: number) => (
              <div key={idx} className="cv-item">
                <div className="cv-item-header">
                  <h3>{edu.degree}</h3>
                  <span className="cv-item-date">{edu.period}</span>
                </div>
                <p className="cv-item-subtitle">{edu.institution}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>Skills</h2>
            <div className="cv-skills-grid">
              {skillsData.map((cat: SkillCategory, idx: number) => (
                <div key={idx} className="cv-skill-cat">
                  <strong>{cat.category}:</strong> {cat.skills.map(s => s.name).join(', ')}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .cv-actions {
          display: flex;
          justify-content: flex-end;
          margin-bottom: var(--spacing-xl);
        }

        .cv-document {
          padding: var(--spacing-3xl);
          background-color: white;
          color: #1a1a1a;
          border: 1px solid #eee;
        }

        [data-theme="dark"] .cv-document {
          background-color: white;
          color: #1a1a1a;
        }

        .cv-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          border-bottom: 2px solid #333;
          padding-bottom: var(--spacing-xl);
        }

        .cv-header h1 {
          margin-bottom: 4px;
          color: #1a1a1a;
        }

        .cv-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .cv-contact {
          font-size: 0.875rem;
          color: #666;
        }

        .separator {
          margin: 0 var(--spacing-sm);
        }

        .cv-section {
          margin-bottom: var(--spacing-2xl);
        }

        .cv-section h2 {
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 1px solid #ccc;
          padding-bottom: 4px;
          margin-bottom: var(--spacing-md);
          color: #1a1a1a;
        }

        .cv-item {
          margin-bottom: var(--spacing-lg);
        }

        .cv-item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .cv-item-date {
          font-weight: 600;
          font-size: 0.875rem;
        }

        .cv-item-subtitle {
          font-weight: 600;
          color: #444;
          margin-bottom: var(--spacing-sm);
        }

        .cv-list {
          padding-left: var(--spacing-lg);
        }

        .cv-list li {
          margin-bottom: 4px;
          font-size: 0.9375rem;
        }

        .cv-skills-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .cv-skill-cat {
          font-size: 0.9375rem;
        }

        @media print {
          .no-print {
            display: none;
          }
          
          .cv-page {
            padding: 0;
          }
          
          .cv-document {
            box-shadow: none;
            border: none;
            padding: 0;
          }
          
          body {
            background-color: white !important;
          }
        }
      `}</style>
    </div>
  );
}
