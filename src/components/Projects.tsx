import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { YouMentorSpotlight } from './YouMentorSpotlight';
import type { ProjectFilter } from '../types/portfolio';

interface ProjectsProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  // Exclude spotlight from the secondary grid so YouMentor AI gets primary focus above
  const secondaryProjects = PROJECTS.filter(p => !p.isSpotlight);

  const filteredProjects = activeFilter === 'all'
    ? secondaryProjects
    : secondaryProjects.filter(p => p.filterCategories.includes(activeFilter));

  const filterButtons: { label: string; value: ProjectFilter; count: number }[] = [
    { label: 'All Projects', value: 'all', count: secondaryProjects.length },
    { 
      label: 'Deep Learning & Vision', 
      value: 'deep-learning', 
      count: secondaryProjects.filter(p => p.filterCategories.includes('deep-learning')).length 
    },
    { 
      label: 'AI & Agents', 
      value: 'ai-ml', 
      count: secondaryProjects.filter(p => p.filterCategories.includes('ai-ml')).length 
    },
    { 
      label: 'Research', 
      value: 'research', 
      count: secondaryProjects.filter(p => p.filterCategories.includes('research')).length 
    },
    { 
      label: 'Full-Stack AI', 
      value: 'full-stack', 
      count: secondaryProjects.filter(p => p.filterCategories.includes('full-stack')).length 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Projects & Research
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            Real implementations covering agentic Chrome extensions, medical deep learning research, accessibility translators, and spatial AI.
          </p>
        </div>

        {/* PRIMARY HIGHLIGHT: YOUMENTOR AI FLAGSHIP SPOTLIGHT */}
        <YouMentorSpotlight onOpenCaseStudy={onOpenCaseStudy} />

        {/* Section Sub-header for Other Projects */}
        <div className="mt-20 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-charcoal-900">
              Other Notable Projects
            </h3>
            <p className="text-xs text-charcoal-500 mt-1">
              Explore medical vision research, multi-agent planners, gesture recognition, and safety intelligence platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1.5 rounded-full border border-slate-200/80">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === btn.value
                    ? 'bg-white text-purple-700 font-semibold shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/50'
                }`}
              >
                {btn.label} ({btn.count})
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
