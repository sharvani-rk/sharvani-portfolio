import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Boxes, 
  Sparkles, 
  Database, 
  Layers
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4" />;
      case 'Boxes': return <Boxes className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const getColorStyles = (color: string) => {
    switch (color) {
      case 'lavender':
        return {
          cardBorder: 'border-purple-100 hover:border-purple-200',
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200/70',
          pillBg: 'bg-purple-50/60 text-purple-900 border-purple-100 hover:border-purple-300 hover:bg-purple-100/50',
          iconBg: 'bg-purple-50 text-purple-700',
        };
      case 'blue':
        return {
          cardBorder: 'border-sky-100 hover:border-sky-200',
          badgeBg: 'bg-sky-50 text-sky-700 border-sky-200/70',
          pillBg: 'bg-sky-50/60 text-sky-900 border-sky-100 hover:border-sky-300 hover:bg-sky-100/50',
          iconBg: 'bg-sky-50 text-sky-700',
        };
      case 'mint':
        return {
          cardBorder: 'border-emerald-100 hover:border-emerald-200',
          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
          pillBg: 'bg-emerald-50/60 text-emerald-900 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-100/50',
          iconBg: 'bg-emerald-50 text-emerald-700',
        };
      case 'peach':
        return {
          cardBorder: 'border-rose-100 hover:border-rose-200',
          badgeBg: 'bg-rose-50 text-rose-700 border-rose-200/70',
          pillBg: 'bg-rose-50/60 text-rose-900 border-rose-100 hover:border-rose-300 hover:bg-rose-100/50',
          iconBg: 'bg-rose-50 text-rose-700',
        };
      case 'yellow':
        return {
          cardBorder: 'border-amber-100 hover:border-amber-200',
          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/70',
          pillBg: 'bg-amber-50/60 text-amber-900 border-amber-100 hover:border-amber-300 hover:bg-amber-100/50',
          iconBg: 'bg-amber-50 text-amber-700',
        };
      default:
        return {
          cardBorder: 'border-slate-100 hover:border-slate-200',
          badgeBg: 'bg-slate-50 text-slate-700 border-slate-200',
          pillBg: 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100',
          iconBg: 'bg-slate-100 text-slate-700',
        };
    }
  };

  const filteredGroups = activeFilter === 'all' 
    ? SKILL_GROUPS 
    : SKILL_GROUPS.filter(g => g.category.toLowerCase().includes(activeFilter));

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600">
            Organized strictly from confirmed coursework, real implementations, research, and project engineering.
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-charcoal-900 text-white shadow-sm'
                : 'bg-slate-100 text-charcoal-600 hover:bg-slate-200'
            }`}
          >
            All Categories ({SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)})
          </button>
          {SKILL_GROUPS.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveFilter(group.category.toLowerCase())}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === group.category.toLowerCase()
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 text-charcoal-600 hover:bg-slate-200'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const styles = getColorStyles(group.pastelColor);
            return (
              <div 
                key={group.category}
                className={`bg-white rounded-3xl p-6 sm:p-7 border ${styles.cardBorder} shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl ${styles.iconBg} flex items-center justify-center`}>
                        {getIcon(group.iconName)}
                      </div>
                      <h3 className="text-base font-display font-bold text-charcoal-900">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-charcoal-500">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-500 leading-relaxed mb-5">
                    {group.description}
                  </p>
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-50">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${styles.pillBg} transition-colors cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
