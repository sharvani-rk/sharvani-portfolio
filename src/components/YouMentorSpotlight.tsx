import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  BookmarkCheck, 
  Shuffle, 
  Maximize2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface YouMentorSpotlightProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const YouMentorSpotlight: React.FC<YouMentorSpotlightProps> = ({ 
  onOpenCaseStudy 
}) => {
  const project = PROJECTS.find(p => p.id === 'youmentor-ai')!;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const screenshots = project.screenshots || [];
  const currentScreenshot = screenshots[activeImageIndex] || screenshots[0];

  const workflowSteps = [
    { label: "YouTube Video", desc: "Source Content", color: "bg-slate-50 border-slate-200 text-charcoal-700" },
    { label: "YouMentor AI", desc: "Browser Activation", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { label: "Understand", desc: "Transcript Extraction", color: "bg-sky-50 border-sky-200 text-sky-700" },
    { label: "Summarize", desc: "Overview & Takeaways", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { label: "Learn Vocabulary", desc: "Contextual Definitions", color: "bg-amber-50 border-amber-200 text-amber-700" },
    { label: "Test Yourself", desc: "Comprehension Quizzes", color: "bg-rose-50 border-rose-200 text-rose-700" },
    { label: "Create Flashcards", desc: "Active Recall Decks", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { label: "Save Notes", desc: "Study Page (notes.html)", color: "bg-sky-50 border-sky-200 text-sky-700" },
  ];

  const featurePillars = [
    {
      title: "AI Summary",
      icon: <FileText className="w-4 h-4 text-purple-600" />,
      desc: "Instant breakdown into Overview, Key Points, and Final Takeaway extracted from transcripts.",
      color: "border-purple-100 bg-purple-50/40"
    },
    {
      title: "Explain & Concepts",
      icon: <HelpCircle className="w-4 h-4 text-sky-600" />,
      desc: "Contextual breakdowns with Simple Meaning, 'In This Video' context, and practical examples.",
      color: "border-sky-100 bg-sky-50/40"
    },
    {
      title: "Interactive Flashcards",
      icon: <Shuffle className="w-4 h-4 text-emerald-600" />,
      desc: "Progress-tracked active recall cards (Card 1/8) with difficulty tags and shuffle options.",
      color: "border-emerald-100 bg-emerald-50/40"
    },
    {
      title: "Vocabulary Assistant",
      icon: <BookOpen className="w-4 h-4 text-amber-600" />,
      desc: "Identifies domain-specific jargon with simplified definitions and contextual usage.",
      color: "border-amber-100 bg-amber-50/40"
    },
    {
      title: "Interactive Quizzes",
      icon: <Sparkles className="w-4 h-4 text-rose-600" />,
      desc: "Generates quick assessment questions to test understanding right after viewing key segments.",
      color: "border-rose-100 bg-rose-50/40"
    },
    {
      title: "Notes & Study Page",
      icon: <BookmarkCheck className="w-4 h-4 text-indigo-600" />,
      desc: "One-click 'Add to Notes' saving to a dedicated study workspace (notes.html) for later review.",
      color: "border-indigo-100 bg-indigo-50/40"
    },
  ];

  return (
    <div className="relative rounded-3xl bg-white border-2 border-purple-100/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden mb-16 p-6 sm:p-10">
      
      {/* Delicate background pastel glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold flex items-center gap-1.5 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>FEATURED PROJECT</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-medium">
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-charcoal-700">Chrome Extension</span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-charcoal-700">AI</span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-charcoal-700">Education</span>
          </div>
        </div>

        <button
          onClick={() => onOpenCaseStudy('youmentor-ai')}
          className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100/80 px-4 py-2 rounded-full border border-purple-200 transition-all shadow-subtle hover:translate-x-0.5"
        >
          <span>View Complete Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Hero Layout: Content Left, Interactive Screenshot Showcase Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Left Column: Project Identity & Value Proposition */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 tracking-tight">
              YouMentor AI
            </h3>
            <p className="text-sm font-semibold text-purple-700 mt-1">
              AI-Powered Learning Assistant for YouTube
            </p>
          </div>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
            Designed to turn passive online video learning into an interactive study experience. It works alongside YouTube to provide AI-powered summaries, conceptual explanations, active-recall flashcards, quizzes, vocabulary extraction, and a dedicated personal study dashboard.
          </p>

          {/* Problem & Solution Compact Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
                The Problem
              </span>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Frequent pauses, separate note apps, and passive video viewing create high friction and poor study retention.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/70">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800 block mb-1">
                The Solution
              </span>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Brings an end-to-end learning workflow directly alongside YouTube videos with zero tab-switching.
              </p>
            </div>
          </div>

          {/* Confirmed Technologies Badges */}
          <div>
            <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider block mb-2">
              Confirmed Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 border border-slate-200/80 text-charcoal-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Actual Project Screenshots with Tab Navigator */}
        <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-subtle">
          
          {/* Screenshot Tab Navigator */}
          <div className="flex flex-wrap items-center gap-1.5 pb-4 mb-4 border-b border-slate-200/70">
            {screenshots.map((shot, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeImageIndex === idx
                    ? 'bg-white text-purple-700 shadow-sm border border-purple-200 font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/60'
                }`}
              >
                {shot.tag || `View ${idx + 1}`}
              </button>
            ))}
          </div>

          {/* Active Screenshot Display */}
          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
            <img 
              src={currentScreenshot.src} 
              alt={currentScreenshot.alt}
              className="w-full h-auto max-h-[380px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
              loading="eager"
            />
            
            {/* Click to Expand Action */}
            <button
              onClick={() => onOpenCaseStudy('youmentor-ai')}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-charcoal-900/80 hover:bg-charcoal-900 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm opacity-90 hover:opacity-100 transition-opacity"
              title="Open full case study and zoom"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full View</span>
            </button>
          </div>

          {/* Caption */}
          <p className="text-xs text-charcoal-600 text-center mt-3 font-medium">
            📸 <span className="text-charcoal-800">{currentScreenshot.caption}</span>
          </p>
        </div>

      </div>

      {/* Visual Learning Workflow Diagram */}
      <div className="pt-8 border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            The Interactive Learning Workflow
          </span>
          <h4 className="text-lg font-display font-bold text-charcoal-900 mt-1">
            From Video Ingestion to Long-Term Retention
          </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {workflowSteps.map((step, idx) => (
            <div 
              key={idx}
              className={`p-3 rounded-2xl border ${step.color} shadow-subtle flex flex-col justify-between text-center relative group hover:shadow-card transition-all`}
            >
              <div className="text-[10px] font-mono font-bold text-charcoal-400 mb-1">
                0{idx + 1}
              </div>
              <div className="text-xs font-bold leading-snug">
                {step.label}
              </div>
              <div className="text-[10px] text-charcoal-500 mt-1">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visible Core Features Pillars Grid */}
      <div className="pt-10 mt-8 border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Core Features Built & Tested
          </span>
          <h4 className="text-lg font-display font-bold text-charcoal-900 mt-1">
            Everything Inside the YouMentor AI Interface
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featurePillars.map((feat, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border ${feat.color} bg-white shadow-subtle hover:shadow-card transition-all flex items-start gap-3`}
            >
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                {feat.icon}
              </div>
              <div>
                <h5 className="text-sm font-bold text-charcoal-900 mb-1">
                  {feat.title}
                </h5>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step How It Works Section */}
      <div className="pt-10 mt-8 border-t border-slate-100 bg-slate-50/60 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-10">
        <div className="text-center max-w-lg mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            User Experience
          </span>
          <h4 className="text-xl font-display font-bold text-charcoal-900 mt-1">
            How It Works in 4 Steps
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.caseStudy.howItWorks.map((step, idx) => {
            const [num, text] = step.split(' — ');
            return (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 font-bold text-xs flex items-center justify-center mb-3">
                  {num}
                </div>
                <h5 className="text-xs font-bold text-charcoal-900 mb-1">
                  {text?.split(':')[0] || text}
                </h5>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {text?.split(':')[1] || ''}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Open Detailed Case Study */}
        <div className="text-center mt-8">
          <button
            onClick={() => onOpenCaseStudy('youmentor-ai')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-charcoal-900 hover:bg-charcoal-800 shadow-sm transition-all hover:translate-y-[-1px]"
          >
            <span>Read Deep-Dive YouMentor Case Study & Screenshots Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
