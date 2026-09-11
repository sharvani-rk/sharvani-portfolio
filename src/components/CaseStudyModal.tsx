import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  Check
} from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;
  return <CaseStudyModalInner key={project.id} project={project} onClose={onClose} />;
};

const CaseStudyModalInner: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
      if (project?.screenshots && project.screenshots.length > 1) {
        if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) => (prev + 1) % project.screenshots!.length);
        } else if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev - 1 + project.screenshots!.length) % project.screenshots!.length);
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, isLightboxOpen]);

  const { caseStudy } = project;
  const screenshots = project.screenshots || [];
  const currentPhoto = screenshots[activePhotoIndex];

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-charcoal-900/60 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <div 
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 text-left shadow-modal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-charcoal-500 hover:text-charcoal-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Category and Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700">
              {project.category}
            </span>

            {project.achievement && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{project.achievement}</span>
              </span>
            )}

            {project.projectType && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-charcoal-600">
                {project.projectType}
              </span>
            )}
          </div>

          {/* Project Title & Tagline */}
          <h2 id="case-study-title" className="text-2xl sm:text-4xl font-display font-extrabold text-charcoal-900 tracking-tight mb-2">
            {project.title}
          </h2>

          {caseStudy.tagline && (
            <p className="text-sm sm:text-base font-semibold text-purple-700 mb-6">
              {caseStudy.tagline}
            </p>
          )}

          {/* SCREENSHOT GALLERY (Highlights YouMentor AI actual UI) */}
          {screenshots.length > 0 && (
            <div className="mb-10 p-4 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Project Screenshots & Working Interface</span>
                </span>
                <span className="text-xs text-charcoal-500 font-medium">
                  {activePhotoIndex + 1} of {screenshots.length}
                </span>
              </div>

              {/* Main Image Stage */}
              <div className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-subtle group">
                <img 
                  src={currentPhoto.src} 
                  alt={currentPhoto.alt}
                  className="w-full h-auto max-h-[440px] object-contain mx-auto transition-all"
                  loading="eager"
                />

                {/* Left/Right arrow navigation */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-charcoal-800 shadow-card border border-slate-200 transition-all hover:scale-105"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev + 1) % screenshots.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-charcoal-800 shadow-card border border-slate-200 transition-all hover:scale-105"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Lightbox Zoom Trigger */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-charcoal-900/80 hover:bg-charcoal-900 text-white text-xs font-medium flex items-center gap-1.5 shadow-card backdrop-blur-sm transition-all"
                  title="Zoom image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>

              {/* Caption */}
              <div className="mt-3 text-center">
                <p className="text-xs sm:text-sm font-medium text-charcoal-800">
                  {currentPhoto.caption}
                </p>
              </div>

              {/* Thumbnails row */}
              {screenshots.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200/70">
                  {screenshots.map((shot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white ${
                        activePhotoIndex === idx
                          ? 'border-purple-600 shadow-sm ring-2 ring-purple-200'
                          : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      <img 
                        src={shot.src} 
                        alt={shot.alt}
                        className="w-full h-16 sm:h-20 object-cover rounded-lg"
                      />
                      <span className="block text-[10px] font-semibold text-charcoal-700 truncate text-center py-1">
                        {shot.tag || `View ${idx + 1}`}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Overview & Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem</span>
              </span>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution</span>
              </span>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* What I Built */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
              What I Built
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              {caseStudy.whatIBuilt}
            </p>
          </div>

          {/* How It Works (Step-by-Step) */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-800 mb-4">
              How It Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.howItWorks.map((step, idx) => {
                const [num, text] = step.split(' — ');
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {num}
                    </span>
                    <div className="text-xs text-charcoal-700 leading-relaxed">
                      <strong className="block text-charcoal-900 font-semibold mb-0.5">
                        {text?.split(':')[0] || text}
                      </strong>
                      <span>{text?.split(':')[1] || ''}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-800 mb-4">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal-700 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmed Technologies */}
          <div className="mb-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-3">
              Confirmed Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-slate-200 text-charcoal-800 shadow-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          {caseStudy.myContribution && (
            <div className="mb-8 p-5 rounded-2xl bg-purple-50/40 border border-purple-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-2">
                My Contribution & Ownership
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {caseStudy.myContribution}
              </p>
            </div>
          )}

          {/* Links & Close Bar */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.githubUrl || "https://github.com/your-username"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-charcoal-700 hover:bg-slate-50 transition-colors shadow-subtle"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (Placeholder)</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-charcoal-900 text-white hover:bg-charcoal-800 transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX FOR HIGH RESOLUTION SCREENSHOT EXAMINATION */}
      {isLightboxOpen && currentPhoto && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-slate-300"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.alt}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
            
            <p className="mt-3 text-xs sm:text-sm text-slate-200 text-center font-medium">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
