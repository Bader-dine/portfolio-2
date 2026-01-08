export interface Project {
  id: string;
  title: string;
  domain: string[];
  context: string;
  architecture: string;
  technologies: string[];
  role: string;
  results: string[];
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}
