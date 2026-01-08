'use client';

import Link from 'next/link';
import blogPosts from '@/data/blog-posts.json';
import { BlogPost } from '@/types/content';
import { formatDate } from '@/lib/utils';

export default function Blog() {
  return (
    <div className="blog-page section fade-in">
      <div className="container">
        <h1 className="section-title">Technical Notes & Blog</h1>
        <p className="section-description">
          Sharing my insights, learning notes, and technical deep-dives into automation and AI.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post: BlogPost) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="blog-card card">
              <div className="blog-meta">
                <span className="blog-date">{formatDate(post.date)}</span>
                <span className="blog-read-time">{post.readTime} min read</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog-footer">
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
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

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: var(--color-text-tertiary);
          margin-bottom: var(--spacing-sm);
        }

        .blog-title {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
          transition: color var(--transition-fast);
        }

        .blog-card:hover .blog-title {
          color: var(--color-primary);
        }

        .blog-excerpt {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
          flex: 1;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-lg);
        }

        .blog-footer {
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-border);
        }

        .read-more {
          font-weight: 600;
          color: var(--color-primary);
        }

        @media (max-width: 480px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
