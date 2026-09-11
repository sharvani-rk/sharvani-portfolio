import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-100 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Left note */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-purple-50 text-purple-700 font-bold text-xs flex items-center justify-center border border-purple-200">
              S
            </span>
            <span className="font-display font-bold text-charcoal-900 text-sm">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-charcoal-500 mt-1">
            Designed & Built by Sharvani
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200/70 text-charcoal-600 hover:text-purple-700 transition-colors"
            aria-label="GitHub Profile"
            title="GitHub (Placeholder)"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200/70 text-charcoal-600 hover:text-sky-700 transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn (Placeholder)"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200/70 text-charcoal-600 hover:text-purple-700 transition-colors"
            aria-label="Email Me"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-charcoal-700 transition-colors ml-2"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-2 text-center sm:text-left">
        <div>
          © 2026 Rampur Sharvani. Hyderabad, India.
        </div>
        <div className="text-[11px] text-charcoal-400">
          AI & Machine Learning Enthusiast • Computer Science Engineering
        </div>
      </div>
    </footer>
  );
};
