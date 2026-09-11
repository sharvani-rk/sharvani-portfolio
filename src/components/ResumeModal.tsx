import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  INTERNSHIPS, 
  PROJECTS, 
  ACHIEVEMENTS, 
  CERTIFICATIONS, 
  SKILL_GROUPS 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-charcoal-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 text-left shadow-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls: Close + Print / Download */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-purple-50 text-purple-700">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h2 id="resume-modal-title" className="text-xl font-display font-bold text-charcoal-900">
                Curriculum Vitae Preview
              </h2>
              <p className="text-xs text-charcoal-500">
                Verified resume data for Rampur Sharvani
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-slate-100 border border-slate-200 text-charcoal-700 transition-colors shadow-subtle"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="/resume.pdf"
              download="Rampur_Sharvani_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 transition-colors shadow-subtle"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-charcoal-500 hover:text-charcoal-900 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Layout */}
        <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200/70 space-y-8 text-charcoal-800">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200/80">
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 tracking-tight">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-purple-700 mt-1">
              {PERSONAL_INFO.roleTitle}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-charcoal-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-purple-700 hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>Education</span>
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map(edu => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3 rounded-xl bg-white border border-slate-200/60 shadow-subtle">
                  <div>
                    <strong className="text-charcoal-900 font-bold block">{edu.degree}</strong>
                    <span className="text-charcoal-600">{edu.institution}</span>
                  </div>
                  <div className="sm:text-right mt-1 sm:mt-0">
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 font-bold">
                      {edu.grade}
                    </span>
                    <span className="text-charcoal-500 block text-[11px] mt-0.5">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-sky-600" />
              <span>Internships & Experience</span>
            </h3>
            <div className="space-y-4">
              {INTERNSHIPS.map(intern => (
                <div key={intern.id} className="p-4 rounded-xl bg-white border border-slate-200/60 shadow-subtle">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                    <strong className="text-xs sm:text-sm font-bold text-charcoal-900">
                      {intern.role}
                    </strong>
                    <span className="text-xs font-semibold text-sky-700">
                      {intern.organization}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-charcoal-600 list-disc list-inside">
                    {intern.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Featured Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PROJECTS.map(proj => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-subtle">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-xs font-bold text-charcoal-900 truncate">
                      {proj.title}
                    </strong>
                    {proj.achievement && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        1st Prize
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-charcoal-600 line-clamp-2 mb-2">
                    {proj.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 4).map(t => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-charcoal-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Technical Skills</span>
            </h3>
            <div className="space-y-2 text-xs">
              {SKILL_GROUPS.map(grp => (
                <div key={grp.category} className="flex flex-col sm:flex-row sm:items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/60">
                  <strong className="min-w-[150px] text-charcoal-800 font-semibold">{grp.category}:</strong>
                  <span className="text-charcoal-600">{grp.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Achievements</span>
              </h3>
              <div className="space-y-2 text-xs">
                {ACHIEVEMENTS.map(ach => (
                  <div key={ach.id} className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                    <strong className="text-charcoal-900 block">{ach.title}</strong>
                    <span className="text-charcoal-600 text-[11px]">{ach.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.id} className="p-2.5 rounded-xl bg-white border border-slate-200/60">
                    <strong className="text-charcoal-900 block">{cert.name}</strong>
                    <span className="text-charcoal-500 text-[11px]">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-xs font-semibold bg-charcoal-900 text-white hover:bg-charcoal-800 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
