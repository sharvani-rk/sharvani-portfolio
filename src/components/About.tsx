import React from 'react';
import { Award, Code2, Briefcase, GraduationCap, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 border-y border-slate-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Curious about intelligence, focused on utility.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            A developer who bridges the gap between deep learning research and practical software tools.
          </p>
        </div>

        {/* Top Story & Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: Personal Story */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-card flex flex-col justify-between">
            <div className="space-y-4 text-charcoal-700 leading-relaxed text-sm sm:text-base font-normal">
              {PERSONAL_INFO.aboutParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal-600">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-600" />
                <span>Based in <strong className="text-charcoal-900 font-semibold">{PERSONAL_INFO.location}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Open for AI/ML roles & research collaboration</span>
              </div>
            </div>
          </div>

          {/* Right: Key Visual Fact Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1: CGPA */}
            <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-card flex flex-col justify-between hover:border-purple-200 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 tracking-tight">
                  9.23
                </div>
                <div className="text-xs font-semibold text-purple-800 mt-1">CGPA / 10.00</div>
                <div className="text-[11px] text-charcoal-500 mt-0.5">MVSR Engineering College</div>
              </div>
            </div>

            {/* Stat Card 2: Projects */}
            <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-card flex flex-col justify-between hover:border-sky-200 transition-all">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 tracking-tight">
                  6+
                </div>
                <div className="text-xs font-semibold text-sky-800 mt-1">AI/ML & Software</div>
                <div className="text-[11px] text-charcoal-500 mt-0.5">Engineered end-to-end</div>
              </div>
            </div>

            {/* Stat Card 3: Internships */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-card flex flex-col justify-between hover:border-emerald-200 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 tracking-tight">
                  4
                </div>
                <div className="text-xs font-semibold text-emerald-800 mt-1">Internship Programs</div>
                <div className="text-[11px] text-charcoal-500 mt-0.5">Industry & Virtual Labs</div>
              </div>
            </div>

            {/* Stat Card 4: 1st Prize */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-card flex flex-col justify-between hover:border-amber-200 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 tracking-tight">
                  1st Prize
                </div>
                <div className="text-xs font-semibold text-amber-800 mt-1">UniNoteAI Ideathon</div>
                <div className="text-[11px] text-charcoal-500 mt-0.5">Out of 30+ teams</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
