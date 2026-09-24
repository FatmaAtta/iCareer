import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  ExternalLink, 
  Terminal, 
  Award, 
  Smartphone, 
  Globe, 
  Cpu, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobile', 'Web', 'Systems & C++'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/30 dark:bg-slate-950/30 light:bg-slate-50 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/40 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> Project Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured Software Projects
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base sm:text-lg">
            A curated portfolio of mobile apps, full-stack web platforms, and systems applications built with clean code and real-world architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:text-white dark:hover:text-white light:hover:text-black hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            // Apply higher visual emphasis for top tier projects (StudyFlash, I'Supply Hackathon, Online Library)
            const isTopTier = project.id === 'studyflash' || project.id === 'online-library';

            return (
              <article
                key={project.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                  isTopTier
                    ? 'bg-gradient-to-b from-slate-900/90 to-[#0e172a] dark:from-slate-900/90 dark:to-[#0e172a] light:from-white light:to-slate-50 border-2 border-cyan-500/30 hover:border-cyan-400 shadow-xl shadow-cyan-500/5'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-slate-700 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-semibold flex items-center gap-1.5">
                      {project.category === 'Mobile' && <Smartphone className="w-3.5 h-3.5" />}
                      {project.category === 'Web' && <Globe className="w-3.5 h-3.5" />}
                      {project.category === 'Systems & C++' && <Cpu className="w-3.5 h-3.5" />}
                      <span>{project.category}</span>
                    </span>

                    {project.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-950/60 dark:bg-amber-950/60 light:bg-amber-100 text-amber-300 dark:text-amber-300 light:text-amber-900 border border-amber-800/50">
                        <Award className="w-3 h-3 text-amber-400" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wide text-slate-400 dark:text-slate-400 light:text-slate-500 font-semibold">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Verified Repository Link */}
                <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links: Only render if real verified URL exists */}
                  <div className="flex items-center justify-between">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 dark:text-cyan-400 light:text-cyan-700 hover:underline"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 italic">
                        {project.badge || 'Project Completed'}
                      </span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
