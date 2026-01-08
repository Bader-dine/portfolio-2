'use client';

import contactInfo from '@/data/contact.json';

export default function Contact() {
  return (
    <div className="contact-page section fade-in">
      <div className="container container-sm">
        <h1 className="section-title text-center">Get In Touch</h1>
        <p className="section-description text-center">
          Have a project in mind or want to discuss technical opportunities?
          Feel free to reach out through any of the channels below.
        </p>

        <div className="contact-grid">
          <a href={`mailto:${contactInfo.email}`} className="contact-card card">
            <div className="contact-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Email</h3>
            <p>{contactInfo.email}</p>
            <span className="contact-action">Send Message →</span>
          </a>

          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card card">
            <div className="contact-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
            <span className="contact-action">View Profile →</span>
          </a>

          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-card card">
            <div className="contact-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>Check out my code</p>
            <span className="contact-action">View Repositories →</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .section-description {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-3xl);
        }

        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          color: inherit;
          padding: var(--spacing-2xl);
        }

        .contact-icon {
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .contact-card h3 {
          margin-bottom: var(--spacing-xs);
        }

        .contact-card p {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .contact-action {
          font-weight: 600;
          color: var(--color-primary);
          transition: transform var(--transition-fast);
        }

        .contact-card:hover .contact-action {
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
}
