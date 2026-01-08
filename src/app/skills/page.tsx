'use client';

import SkillBadge from '@/components/SkillBadge';
import skillsData from '@/data/skills.json';
import { SkillCategory, Skill } from '@/types/content';

export default function Skills() {
  return (
    <div className="skills-page section fade-in">
      <div className="container">
        <h1 className="section-title">Technical Expertise</h1>
        <p className="section-description">
          A comprehensive overview of my engineering skills and proficiencies across various domains.
        </p>

        <div className="skills-grid">
          {skillsData.map((category: SkillCategory, index: number) => (
            <div key={index} className="skill-category-card card">
              <h2 className="category-title">{category.category}</h2>
              <div className="skills-list">
                {category.skills.map((skill: Skill, sIndex: number) => (
                  <SkillBadge key={sIndex} skill={skill} />
                ))}
              </div>
            </div>
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }

        .skill-category-card {
          height: fit-content;
        }

        .category-title {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xl);
          padding-bottom: var(--spacing-sm);
          border-bottom: 2px solid var(--color-primary);
          width: fit-content;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
