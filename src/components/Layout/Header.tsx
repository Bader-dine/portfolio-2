'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/documents', label: 'Documents' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            <span className="gradient-text">Bader Dakhli</span>
          </Link>

          <div className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="nav-mobile-controls">
            <ThemeToggle />
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="nav-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-mobile ${pathname === link.href ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.8);
        }

        [data-theme="dark"] .header {
          background-color: rgba(28, 30, 36, 0.8);
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          text-decoration: none;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .nav-link {
          color: var(--color-text-secondary);
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        .nav-mobile-controls {
          display: none;
          align-items: center;
          gap: var(--spacing-md);
        }

        .mobile-menu-button {
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: var(--spacing-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-mobile {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) 0;
          border-top: 1px solid var(--color-border);
          margin-top: var(--spacing-md);
        }

        .nav-link-mobile {
          padding: var(--spacing-md);
          color: var(--color-text-secondary);
          font-weight: 500;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .nav-link-mobile:hover,
        .nav-link-mobile.active {
          background-color: var(--color-surface-elevated);
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .nav-mobile-controls {
            display: flex;
          }
        }

        :global(.theme-toggle) {
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: var(--spacing-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        :global(.theme-toggle:hover) {
          background-color: var(--color-surface-elevated);
        }
      `}</style>
    </header>
  );
}
