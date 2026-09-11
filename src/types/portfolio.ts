export type ProjectFilter = 
  | 'all' 
  | 'ai-ml' 
  | 'deep-learning' 
  | 'full-stack' 
  | 'research';

export interface ProjectScreenshot {
  src: string;
  caption: string;
  alt: string;
  tag?: string;
}

export interface ProjectCaseStudy {
  tagline?: string;
  problem: string;
  solution: string;
  whatIBuilt: string;
  howItWorks: string[];
  keyFeatures: string[];
  myContribution?: string;
  architectureSummary?: string;
  workflowDiagram?: string[];
  screenshots?: ProjectScreenshot[];
}

export interface Project {
  id: string;
  title: string;
  tagline?: string;
  projectType?: string;
  category: string;
  filterCategories: ProjectFilter[];
  shortDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architectureSteps?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  achievement?: string;
  isSpotlight?: boolean;
  isResearch?: boolean;
  screenshots?: ProjectScreenshot[];
  caseStudy: ProjectCaseStudy;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
  iconName: string;
  pastelColor: 'lavender' | 'blue' | 'mint' | 'peach' | 'yellow';
}

export interface Internship {
  id: string;
  role: string;
  organization: string;
  badge?: string;
  technologies?: string[];
  responsibilities: string[];
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  isFeatured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  platform?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  details?: string;
}
