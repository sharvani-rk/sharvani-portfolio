import React from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  CheckCircle2, 
  BookCheck
} from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const AchievementsCertifications: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Achievements Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-800 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            Validated leadership and competitive innovation recognized by university and NGO panels.
          </p>
        </div>

        {/* Prominent Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className={`rounded-3xl p-7 sm:p-8 border shadow-card transition-all duration-300 flex flex-col justify-between ${
                ach.isFeatured
                  ? 'bg-gradient-to-br from-amber-50/60 via-white to-white border-amber-200/90 hover:border-amber-300 hover:shadow-card-hover'
                  : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-card-hover'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    ach.isFeatured 
                      ? 'bg-amber-100/70 text-amber-700' 
                      : 'bg-purple-50 text-purple-700'
                  }`}>
                    {ach.isFeatured ? <Trophy className="w-6 h-6" /> : <Medal className="w-6 h-6" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    ach.isFeatured 
                      ? 'bg-amber-50 text-amber-800 border-amber-200' 
                      : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}>
                    {ach.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal-900 mb-1">
                  {ach.title}
                </h3>
                <p className="text-xs font-semibold text-purple-700 mb-4">
                  {ach.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-charcoal-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Academic & NGO Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section Header */}
        <div id="certifications" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/70 text-purple-700 text-xs font-semibold mb-3">
              <BookCheck className="w-3.5 h-3.5" />
              <span>Verified Coursework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
              Certifications & Programs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600">
              Rigorous certifications across machine learning, SQL, Python programming, and professional readiness.
            </p>
          </div>

          {/* Certifications Grid (5 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, index) => {
              const pastelBadges = [
                'bg-purple-50 text-purple-700 border-purple-200',
                'bg-sky-50 text-sky-700 border-sky-200',
                'bg-emerald-50 text-emerald-700 border-emerald-200',
                'bg-amber-50 text-amber-700 border-amber-200',
                'bg-rose-50 text-rose-700 border-rose-200',
              ];
              const badgeClass = pastelBadges[index % pastelBadges.length];

              return (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badgeClass}`}>
                        {cert.platform || "Certified"}
                      </span>
                      <Award className="w-4 h-4 text-slate-400" />
                    </div>

                    <h3 className="text-sm sm:text-base font-display font-bold text-charcoal-900 mb-2 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-medium text-charcoal-500">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-charcoal-500 font-medium">
                    <span>Verified Credential</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
