import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Compass } from 'lucide-react';
import { EDUCATION_DATA, CURRENTLY_EXPLORING } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/70 text-purple-700 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            Strong academic foundations in computer science, mathematics, algorithms, and analytical engineering.
          </p>
        </div>

        {/* Education 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-medium text-charcoal-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-charcoal-900 mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-xs font-semibold text-purple-700 mb-3">
                  {edu.institution}
                </p>
                {edu.details && (
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-charcoal-500 font-medium">
                <span>{edu.gradeLabel}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* "CURRENTLY EXPLORING" FUTURE-ORIENTED SECTION */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50/40 via-sky-50/30 to-emerald-50/30 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-charcoal-700 text-xs font-semibold mb-3 shadow-subtle">
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            <span>Lifelong Learning</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal-900 mb-2">
            Currently Exploring
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl mx-auto mb-6">
            Actively expanding practical knowledge, keeping up with frontier machine intelligence literature, and experimenting with emerging architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {CURRENTLY_EXPLORING.map((item, idx) => {
              const pastelTags = [
                'bg-white text-purple-800 border-purple-200 hover:border-purple-300',
                'bg-white text-sky-800 border-sky-200 hover:border-sky-300',
                'bg-white text-emerald-800 border-emerald-200 hover:border-emerald-300',
                'bg-white text-amber-800 border-amber-200 hover:border-amber-300',
                'bg-white text-rose-800 border-rose-200 hover:border-rose-300',
              ];
              const tagStyle = pastelTags[idx % pastelTags.length];

              return (
                <div
                  key={item.name}
                  className={`px-3.5 py-2 rounded-2xl border shadow-subtle text-xs transition-all ${tagStyle}`}
                >
                  <strong className="font-semibold block">{item.name}</strong>
                  <span className="text-[10px] text-charcoal-500 font-normal">{item.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
