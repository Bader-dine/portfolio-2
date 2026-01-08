'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements?: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  achievements,
  isLast
}: TimelineItemProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as any}
      className={`timeline-item ${isVisible ? 'visible' : ''}`}
    >
      <div className="timeline-marker">
        <div className="marker-dot" />
        {!isLast && <div className="marker-line" />}
      </div>

      <div className="timeline-content">
        <div className="timeline-header">
          <span className="timeline-period">{period}</span>
          <h3 className="timeline-title">{title}</h3>
          <h4 className="timeline-subtitle">{subtitle}</h4>
        </div>

        <p className="timeline-description">{description}</p>

        {achievements && achievements.length > 0 && (
          <ul className="timeline-achievements">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>

      <style jsx>{`
        .timeline-item {
          display: flex;
          gap: var(--spacing-xl);
          opacity: 0;
          transform: translateX(-20px);
          transition: all var(--transition-slow);
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--gradient-primary);
          border: 4px solid var(--color-surface);
          box-shadow: 0 0 0 2px var(--color-primary);
          z-index: 1;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background-color: var(--color-border);
          margin-top: 4px;
        }

        .timeline-content {
          padding-bottom: var(--spacing-2xl);
          flex: 1;
        }

        .timeline-header {
          margin-bottom: var(--spacing-md);
        }

        .timeline-period {
          display: inline-block;
          padding: 2px 10px;
          background-color: var(--color-surface-elevated);
          color: var(--color-primary);
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          margin-bottom: var(--spacing-sm);
        }

        .timeline-title {
          font-size: 1.25rem;
          margin-bottom: 2px;
        }

        .timeline-subtitle {
          font-size: 1rem;
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .timeline-description {
          color: var(--color-text);
          margin-bottom: var(--spacing-md);
        }

        .timeline-achievements {
          list-style: none;
          padding: 0;
        }

        .timeline-achievements li {
          position: relative;
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-secondary);
          font-size: 0.9375rem;
        }

        .timeline-achievements li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .timeline-item {
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
}
