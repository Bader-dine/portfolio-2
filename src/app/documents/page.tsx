'use client';

import documents from '@/data/documents.json';
import { Document } from '@/types/content';

export default function Documents() {
  return (
    <div className="documents-page section fade-in">
      <div className="container">
        <h1 className="section-title">Technical Documents</h1>
        <p className="section-description">
          A collection of technical specifications, research papers, and reference materials.
        </p>

        <div className="documents-grid">
          {documents.map((doc: Document) => (
            <div key={doc.id} className="document-card card">
              <div className="document-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="document-info">
                <span className="document-category">{doc.category}</span>
                <h2 className="document-title">{doc.title}</h2>
                <p className="document-description">{doc.description}</p>
                <div className="document-footer">
                  <span className="document-meta">
                    {doc.fileType} • {doc.fileSize}
                  </span>
                  <a href={doc.fileUrl} download className="btn btn-ghost btn-sm">
                    Download
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
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
          max-width: 600px;
        }

        .documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-xl);
        }

        .document-card {
          display: flex;
          gap: var(--spacing-xl);
          align-items: flex-start;
        }

        .document-icon {
          color: var(--color-primary);
          background-color: hsla(210, 100%, 55%, 0.1);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .document-info {
          flex: 1;
        }

        .document-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xs);
          display: block;
        }

        .document-title {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
        }

        .document-description {
          color: var(--color-text-secondary);
          font-size: 0.9375rem;
          margin-bottom: var(--spacing-lg);
        }

        .document-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-border);
        }

        .document-meta {
          font-size: 0.875rem;
          color: var(--color-text-tertiary);
        }

        @media (max-width: 640px) {
          .document-card {
            flex-direction: column;
            gap: var(--spacing-md);
          }
          
          .documents-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
