import { notFound } from 'next/navigation';
import blogPosts from '@/data/blog-posts.json';
import { BlogPost } from '@/types/content';
import { parseMarkdown } from '@/lib/markdown';
import BlogPostClient from '@/components/Blog/BlogPostClient';

export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    id: post.id,
  }));
}

export default async function BlogPostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p: BlogPost) => p.id === id);

  if (!post) {
    notFound();
  }

  const contentHtml = parseMarkdown(post.content);

  return <BlogPostClient post={post} contentHtml={contentHtml} />;
}
