import React from 'react';
import { educationAndTraining } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2, Terminal } from 'lucide-react';

export const EducationTraining: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/40 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> Academic &amp; Professional Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Education &amp; Specialized Training
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base sm:text-lg">
            Rigorous university foundations paired with top-tier specialized Egyptian tech training programs.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Guide Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {educationAndTraining.map((item) => (
              <div
                key={item.institution}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group"
              >
                {/* Timeline Icon Badge */}
                <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-[#0e172a] dark:bg-[#0e172a] light:bg-white border-2 border-cyan-500/50 items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10 group-hover:scale-110 group-hover:border-cyan-400 transition-all z-10 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>

                {/* Timeline Content Card */}
                <div className="flex-1 w-full rounded-2xl p-6 sm:p-7 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 group-hover:border-cyan-500/30 transition-all shadow-md">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                        {item.degree}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 px-3 py-1.5 rounded-lg shrink-0 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {item.gpa && (
                    <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-950/60 border border-cyan-700/60 text-cyan-300 mb-4">
                      Cumulative {item.gpa}
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-5">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
