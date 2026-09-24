import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] dark:bg-[#05080f] light:bg-slate-100 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                FA
              </div>
              <span className="font-bold text-lg text-white dark:text-white light:text-slate-900">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
              {personalInfo.headline}
            </p>

            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md leading-relaxed">
              Bachelor of Computer Science from Cairo University (Faculty of Computers and Artificial Intelligence, GPA 3.67). Practical experience in AI speech intelligence, full-stack web, and mobile app engineering.
            </p>
          </div>

          {/* Navigation Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-400 light:text-slate-700 font-semibold mb-3">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Skills &amp; Tech Stack
                </a>
              </li>
              <li>
                <a href="#flagship-case-study" className="text-cyan-400 hover:underline transition-colors">
                  Flagship AI Case Study
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Education &amp; Training
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Certifications &amp; ECPC
                </a>
              </li>
            </ul>
          </div>

          {/* Social and Contact Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-400 light:text-slate-700 font-semibold mb-3">
              Connect
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Fatma Atta. Built with React &amp; Tailwind CSS. Cairo, Egypt.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
