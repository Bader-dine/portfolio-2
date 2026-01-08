import projects from '@/data/projects.json';
import skills from '@/data/skills.json';
import experience from '@/data/experience.json';
import blogPosts from '@/data/blog-posts.json';
import { vectorStore, VectorDocument } from './vectorStore';
import { generateEmbedding } from './embeddings';

export async function indexContent() {
  const documents: VectorDocument[] = [];

  for (const project of projects) {
    const content = `Project: ${project.title}
Domain: ${project.domain.join(', ')}
Context: ${project.context}
Architecture: ${project.architecture}
Technologies: ${project.technologies.join(', ')}
Role: ${project.role}
Results: ${project.results.join('. ')}`;

    const embedding = await generateEmbedding(content);
    
    documents.push({
      id: `project-${project.id}`,
      content,
      embedding,
      metadata: {
        type: 'project',
        title: project.title,
        projectId: project.id
      }
    });
  }

  for (const category of skills) {
    const content = `Skill Category: ${category.category}
Skills: ${category.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}`;

    const embedding = await generateEmbedding(content);
    
    documents.push({
      id: `skills-${category.category}`,
      content,
      embedding,
      metadata: {
        type: 'skill',
        category: category.category
      }
    });
  }

  for (const exp of experience.experience) {
    const content = `Position: ${exp.title} at ${exp.company}
Period: ${exp.period}
Description: ${exp.description}
Achievements: ${exp.achievements.join('. ')}`;

    const embedding = await generateEmbedding(content);
    
    documents.push({
      id: `experience-${exp.company}`,
      content,
      embedding,
      metadata: {
        type: 'experience',
        title: exp.title,
        company: exp.company
      }
    });
  }

  for (const post of blogPosts) {
    const content = `Blog Post: ${post.title}
Excerpt: ${post.excerpt}
Tags: ${post.tags.join(', ')}
Content: ${post.content.substring(0, 500)}`;

    const embedding = await generateEmbedding(content);
    
    documents.push({
      id: `blog-${post.id}`,
      content,
      embedding,
      metadata: {
        type: 'blog',
        title: post.title,
        postId: post.id
      }
    });
  }

  const generalInfo = `Bader Eddine Dakhli is an Electrical & Automation Engineer specializing in Robotics, Computer Vision, AI & Video Analytics, Industrial Automation, and Embedded Systems. 
He has extensive experience with video analytics systems, facial recognition, object detection and tracking, PLC programming, and embedded systems development.
Key technologies include: GStreamer, OpenVINO, DL Streamer, Docker, OpenCV, PyTorch, TensorFlow, YOLO, Kalman Filters, PLC, TIA Portal, SCADA, and more.`;

  const generalEmbedding = await generateEmbedding(generalInfo);
  documents.push({
    id: 'general-info',
    content: generalInfo,
    embedding: generalEmbedding,
    metadata: {
      type: 'general'
    }
  });

  vectorStore.clear();
  vectorStore.addDocuments(documents);
  
  console.log(`Indexed ${documents.length} documents`);
}
