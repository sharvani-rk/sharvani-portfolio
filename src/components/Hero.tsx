import React from 'react';
import { ArrowDown, ArrowRight, FileText, GraduationCap } from 'lucide-react';
import { AiIllustration } from './AiIllustration';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Soft background ambient gradient washes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-charcoal-700 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Computer Science Engineering • AI/ML Enthusiast</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-charcoal-900 tracking-tight leading-[1.12]">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600">intelligent things</span> with AI & Machine Learning.
            </h1>

            {/* Smaller Intro Paragraph */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-charcoal-800">
                Hi, I'm Sharvani 👋
              </p>
              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-xl font-normal">
                A Computer Science Engineering student passionate about AI, Machine Learning, Deep Learning, and building practical technology that solves real-world challenges.
              </p>
            </div>

            {/* Academic Credential Card */}
            <div className="inline-flex flex-wrap items-center gap-2.5 p-3 rounded-2xl bg-slate-50/90 border border-slate-200/70 text-xs text-charcoal-700">
              <div className="w-7 h-7 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-charcoal-800">B.E. Computer Science Engineering</span>
                <span className="text-slate-400">•</span>
                <span className="text-charcoal-600">MVSR Engineering College</span>
                <span className="text-slate-400">•</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-100/70 text-purple-800 font-semibold text-[11px]">
                  CGPA: 9.23 / 10.00
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-charcoal-900 hover:bg-charcoal-800 shadow-sm transition-all duration-200 hover:translate-y-[-1px]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-charcoal-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-subtle hover:translate-y-[-1px]"
              >
                <FileText className="w-4 h-4 text-purple-600" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Subtle Abstract AI/ML Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <AiIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};
