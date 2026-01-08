import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import { Project } from '@/types/content';
import ProjectDetailClient from '@/components/Projects/ProjectDetailClient';

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
