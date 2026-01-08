'use client';

import Link from 'next/link';
import contactInfo from '@/data/contact.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Bader Eddine Dakhli</h3>
            <p className="footer-description">
              Electrical & Automation Engineer specializing in Robotics, Computer Vision, AI & Video Analytics, Industrial Automation, and Embedded Systems.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/cv">CV</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-links">
              <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer">
                Email
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Bader Eddine Dakhli. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--gradient-surface);
          border-top: 1px solid var(--color-border);
          padding: var(--spacing-3xl) 0 var(--spacing-lg);
          margin-top: var(--spacing-3xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--spacing-sm);
        }

        .footer-description {
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-sm);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .footer-links a {
          color: var(--color-text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-primary);
        }

        .footer-bottom {
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--color-border);
          text-align: center;
          color: var(--color-text-tertiary);
        }

        .footer-bottom p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }
      `}</style>
    </footer>
  );
}
