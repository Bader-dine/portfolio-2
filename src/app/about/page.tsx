'use client';

import experienceData from '@/data/experience.json';
import TimelineItem from '@/components/TimelineItem';
import { Experience, Education } from '@/types/content';

export default function About() {
    return (
        <div className="about-page section fade-in">
            <div className="container">
                <h1 className="section-title">About Me</h1>

                <div className="about-grid">
                    <div className="about-content">
                        <section className="about-section">
                            <h2>Professional Summary</h2>
                            <p className="lead">
                                I am a passionate Electrical & Automation Engineer with a strong focus on Robotics,
                                Computer Vision, and AI. With years of experience in both industrial and research
                                environments, I specialize in creating intelligent systems that bridge the gap
                                between hardware and software.
                            </p>
                            <p>
                                My expertise spans from PLC programming and industrial SCADA systems to advanced
                                deep learning models for video analytics. I thrive on solving complex engineering
                                challenges and am committed to pushing the boundaries of what's possible in
                                automation and artificial intelligence.
                            </p>
                        </section>

                        <section className="about-section">
                            <h2>Experience</h2>
                            <div className="timeline">
                                {experienceData.experience.map((exp: Experience, index: number) => (
                                    <TimelineItem
                                        key={index}
                                        title={exp.title}
                                        subtitle={exp.company}
                                        period={exp.period}
                                        description={exp.description}
                                        achievements={exp.achievements}
                                        isLast={index === experienceData.experience.length - 1}
                                    />
                                ))}
                            </div>
                        </section>

                        <section className="about-section">
                            <h2>Education</h2>
                            <div className="timeline">
                                {experienceData.education.map((edu: Education, index: number) => (
                                    <TimelineItem
                                        key={index}
                                        title={edu.degree}
                                        subtitle={edu.institution}
                                        period={edu.period}
                                        description={edu.description}
                                        isLast={index === experienceData.education.length - 1}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-3xl);
        }

        .about-section {
          margin-bottom: var(--spacing-4xl);
        }

        .about-section h2 {
          font-size: 2rem;
          margin-bottom: var(--spacing-xl);
          color: var(--color-primary);
        }

        .lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-text);
          margin-bottom: var(--spacing-lg);
        }

        .timeline {
          margin-top: var(--spacing-2xl);
          position: relative;
        }

        @media (max-width: 768px) {
          .about-section h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
        </div>
    );
}
