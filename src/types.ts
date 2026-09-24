export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  category: 'Flagship' | 'Mobile' | 'Web' | 'Systems & C++' | 'AI/ML';
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  highlightDetails?: string[];
}

export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  skillsAcquired: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  tag: string;
}
