export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other';
  featured: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'design' | 'tools' | 'soft';
  icon?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'photo' | 'video';
  image: string;
  thumbnail?: string;
  category: string;
  description?: string;
  featured: boolean;
  albumId?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}