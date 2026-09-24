import React from 'react';
import { certifications, achievements } from '../data/portfolioData';
import { Award, Trophy, CheckCircle } from 'lucide-react';

export const CertificationsAchievements: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 dark:bg-amber-950/40 light:bg-amber-50 border border-amber-800/40 text-xs font-mono text-amber-400 dark:text-amber-400 light:text-amber-800 uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" /> Factual Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Achievements &amp; Activities
            </h2>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base">
              Milestones demonstrated through competitive algorithmic contests and national technology initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border-2 border-amber-500/30 hover:border-amber-400/60 transition-all shadow-lg shadow-amber-500/5 group"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-amber-950/50 dark:bg-amber-950/50 light:bg-amber-100 text-amber-300 dark:text-amber-300 light:text-amber-900 border border-amber-800/50">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-3">
                  <span>{item.organization}</span>
                  <span>&bull;</span>
                  <span>{item.date}</span>
                </div>

                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/40 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" /> Professional Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Verified Certifications
            </h2>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base">
              Structured technical credentials verified across software development and data fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
                    <Award className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4">
                    {cert.issuer}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {cert.skillsAcquired.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 text-[11px] font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                  Verified Credential
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
