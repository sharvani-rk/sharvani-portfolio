import React from 'react';
import { Briefcase, CheckCircle2, Building } from 'lucide-react';
import { INTERNSHIPS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getBadgeStyle = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 1:
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 2:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 3:
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getDotStyle = (index: number) => {
    switch (index) {
      case 0:
        return 'border-purple-500 bg-purple-50 text-purple-600';
      case 1:
        return 'border-sky-500 bg-sky-50 text-sky-600';
      case 2:
        return 'border-emerald-500 bg-emerald-50 text-emerald-600';
      case 3:
        return 'border-amber-500 bg-amber-50 text-amber-600';
      default:
        return 'border-slate-400 bg-slate-50 text-slate-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Internships & Applied Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            End-to-end data science pipelines, generative analytics, cloud AI workflows, and full-stack engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-slate-200" />

          <div className="space-y-12">
            {INTERNSHIPS.map((internship, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={internship.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 z-10">
                    <div className={`w-8 h-8 rounded-full border-2 ${getDotStyle(index)} flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform`}>
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-left' : 'sm:text-left'
                  }`}>
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-card hover:shadow-card-hover transition-all duration-200">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getBadgeStyle(index)}`}>
                          {internship.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-charcoal-500">
                          <Building className="w-3.5 h-3.5" />
                          <span className="font-semibold text-charcoal-700">{internship.organization}</span>
                        </div>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-lg font-display font-bold text-charcoal-900 mb-4">
                        {internship.role}
                      </h3>

                      {/* Responsibilities */}
                      <div className="space-y-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                        {internship.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Used */}
                      {internship.technologies && (
                        <div className="pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {internship.technologies.map(tech => (
                            <span 
                              key={tech} 
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 text-charcoal-700 border border-slate-200/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
