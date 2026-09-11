import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Layers,
  BrainCircuit,
  Eye,
  ShieldCheck,
  Newspaper
} from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const getCategoryTheme = (category: string) => {
    if (category.includes('Medical') || category.includes('Research')) {
      return {
        badge: 'bg-purple-50 text-purple-700 border-purple-200',
        icon: <BrainCircuit className="w-3.5 h-3.5" />,
        accent: 'from-purple-500/10 to-transparent'
      };
    }
    if (category.includes('Ideathon') || category.includes('Winner')) {
      return {
        badge: 'bg-amber-50 text-amber-700 border-amber-200',
        icon: <Award className="w-3.5 h-3.5" />,
        accent: 'from-amber-500/10 to-transparent'
      };
    }
    if (category.includes('Vision') || category.includes('Deep Learning')) {
      return {
        badge: 'bg-sky-50 text-sky-700 border-sky-200',
        icon: <Eye className="w-3.5 h-3.5" />,
        accent: 'from-sky-500/10 to-transparent'
      };
    }
    if (category.includes('Safety') || category.includes('Spatial')) {
      return {
        badge: 'bg-rose-50 text-rose-700 border-rose-200',
        icon: <ShieldCheck className="w-3.5 h-3.5" />,
        accent: 'from-rose-500/10 to-transparent'
      };
    }
    if (category.includes('News') || category.includes('NLP')) {
      return {
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        icon: <Newspaper className="w-3.5 h-3.5" />,
        accent: 'from-emerald-500/10 to-transparent'
      };
    }
    return {
      badge: 'bg-slate-50 text-charcoal-700 border-slate-200',
      icon: <Layers className="w-3.5 h-3.5" />,
      accent: 'from-slate-100 to-transparent'
    };
  };

  const theme = getCategoryTheme(project.category);

  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:border-slate-300 hover:translate-y-[-2px]">
      
      <div>
        {/* Top Header Row: Category Badge & Achievement Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${theme.badge}`}>
            {theme.icon}
            <span className="truncate max-w-[200px]">{project.category.split('•')[0].trim()}</span>
          </div>

          {project.achievement && (
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 border border-amber-200 text-amber-800">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>1st Prize</span>
            </div>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-display font-bold text-charcoal-900 group-hover:text-purple-700 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Project Tagline if available */}
        {project.tagline && (
          <p className="text-xs font-medium text-purple-700 mb-3">
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-normal">
          {project.shortDescription}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 block">
            Key Architecture Highlights:
          </span>
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area: Technologies & Actions */}
      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-100">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-50 text-charcoal-600 border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-charcoal-400 border border-slate-200/60">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-charcoal-800 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 hover:border-purple-200 transition-all flex items-center justify-center gap-1.5 group/btn shadow-subtle"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          {/* GitHub button (clean placeholder/link) */}
          <a
            href={project.githubUrl || "https://github.com/your-username"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            title="GitHub Repository (Placeholder link)"
            aria-label={`GitHub link for ${project.title}`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
};
