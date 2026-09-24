import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Terminal, Brain, Globe, Smartphone, Code, Database, Palette, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Globe,
  Smartphone,
  Code,
  Database,
  Palette
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  const filterTabs = ['All', 'AI & ML', 'Web', 'Mobile', 'Languages', 'Databases', 'Design'];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60 border-y border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/40 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base sm:text-lg">
            Practical competencies developed through academic coursework, engineering projects, intensive training, and real-world implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab || (tab === 'Languages' && selectedCategory === 'Languages');
            return (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-black hover:border-slate-700'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code;
            return (
              <div
                key={category.title}
                className="rounded-2xl p-6 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 border border-cyan-800/40 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {category.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/skill relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-default ${
                          skill.highlight
                            ? 'bg-cyan-950/50 dark:bg-cyan-950/50 light:bg-cyan-50 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-cyan-700/50 hover:bg-cyan-900/60 font-semibold'
                            : 'bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-800 border border-slate-700/50 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                          <span>{skill.name}</span>
                        </div>
                        {skill.description && (
                          <div className="hidden group-hover/skill:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-md bg-[#0d1424] text-[11px] text-slate-300 border border-cyan-800/50 shadow-xl z-30 pointer-events-none text-center">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {category.title.includes('AI') && (
                  <div className="mt-5 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 flex items-center gap-1.5 text-[11px] text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Applied in Egyptian Arabic Speech AI graduation project</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
