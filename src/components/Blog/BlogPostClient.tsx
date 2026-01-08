'use client';

import Link from 'next/link';
import { BlogPost } from '@/types/content';
import { formatDate } from '@/lib/utils';

interface BlogPostClientProps {
    post: BlogPost;
    contentHtml: string;
}

export default function BlogPostClient({ post, contentHtml }: BlogPostClientProps) {
    return (
        <div className="blog-post-page section fade-in">
            <div className="container container-md">
                <Link href="/blog" className="back-link">
                    ← Back to Blog
                </Link>

                <article className="blog-article">
                    <header className="article-header">
                        <div className="article-meta">
                            <time>{formatDate(post.date)}</time>
                            <span className="separator">•</span>
                            <span>{post.readTime} min read</span>
                        </div>
                        <h1 className="article-title">{post.title}</h1>
                        <div className="article-tags">
                            {post.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </article>
            </div>

            <style jsx>{`
        .back-link {
          display: inline-block;
          margin-bottom: var(--spacing-2xl);
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .back-link:hover {
          color: var(--color-primary);
        }

        .article-header {
          margin-bottom: var(--spacing-3xl);
          text-align: center;
        }

        .article-meta {
          font-size: 0.9375rem;
          color: var(--color-text-tertiary);
          margin-bottom: var(--spacing-sm);
        }

        .separator {
          margin: 0 var(--spacing-sm);
        }

        .article-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          margin-bottom: var(--spacing-lg);
        }

        .article-tags {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
        }

        .article-content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text);
        }

        :global(.article-content h2) {
          margin-top: var(--spacing-3xl);
          font-size: 1.75rem;
        }

        :global(.article-content h3) {
          margin-top: var(--spacing-2xl);
          font-size: 1.5rem;
        }

        :global(.article-content p) {
          margin-bottom: var(--spacing-lg);
        }

        :global(.article-content ul, .article-content ol) {
          margin-bottom: var(--spacing-lg);
          padding-left: var(--spacing-xl);
        }

        :global(.article-content li) {
          margin-bottom: var(--spacing-sm);
        }

        :global(.article-content img) {
          max-width: 100%;
          border-radius: var(--radius-md);
          margin: var(--spacing-2xl) 0;
        }

        :global(.article-content table) {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: var(--spacing-xl);
        }

        :global(.article-content th, .article-content td) {
          padding: var(--spacing-md);
          border: 1px solid var(--color-border);
          text-align: left;
        }

        :global(.article-content th) {
          background-color: var(--color-surface-elevated);
        }
      `}</style>
        </div>
    );
}
