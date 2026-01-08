'use client';

import { Skill } from '@/types/content';

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="skill-badge-container">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      <style jsx>{`
        .skill-badge-container {
          width: 100%;
          margin-bottom: var(--spacing-md);
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
        }

        .skill-name {
          font-weight: 500;
          color: var(--color-text);
        }

        .skill-level {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }

        .skill-bar-bg {
          width: 100%;
          height: 6px;
          background-color: var(--color-surface-elevated);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 3px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
