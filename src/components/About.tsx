import React from 'react';
import { GraduationCap, Award, Cpu, Code2, CheckCircle2, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'AI & Speech Intelligence',
      description: 'Engineered an end-to-end sequential pipeline for Egyptian Arabic customer service calls, combining speech-to-text (Whisper/Faster-Whisper), speaker diarization, and AraBERT sentiment analysis.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20'
    },
    {
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      description: 'Built scalable web backends with Django and REST Framework coupled with dynamic, component-driven frontends in React.js and modern JavaScript.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20'
    },
    {
      icon: GraduationCap,
      title: 'Mobile Architecture',
      description: 'Deep specialized training in native Android development using Kotlin and Jetpack Compose (DEPI), alongside cross-platform Flutter and Dart apps (ITI).',
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/20'
    },
    {
      icon: Award,
      title: 'Algorithmic Problem Solving',
      description: 'Strengthened algorithmic rigor through Coach Academy training and competitive programming at the Egyptian Collegiate Programming Contest (ECPC 2023 & 2024).',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/40 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> Background &amp; Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            About Fatma Atta
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base sm:text-lg">
            Software developer rooted in Computer Science theory and focused on applied systems across AI, web, and mobile environments.
          </p>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              I hold a <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Bachelor of Computer Science</strong> from the{' '}
              <strong className="text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-semibold">Faculty of Computers and Artificial Intelligence, Cairo University</strong>, graduating with a cumulative{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-100 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 font-mono font-semibold text-sm border border-cyan-800/40">GPA of 3.67</span>.
            </p>
            <p>
              Throughout my academic and project work, I have focused on solving concrete engineering challenges. For my flagship graduation project, I architected and implemented an{' '}
              <span className="text-slate-100 dark:text-slate-100 light:text-slate-900 font-medium">AI-powered system for analyzing Egyptian Arabic customer-service calls</span>, integrating speech transcription models (Whisper / Faster-Whisper), speaker diarization, and AraBERT sentiment analysis within a decoupled Django and FastAPI architecture.
            </p>
            <p>
              My professional foundation has been enriched through government-backed intensive initiatives including the{' '}
              <strong className="text-white dark:text-white light:text-slate-900 font-medium">DEPI (Digital Egypt Pioneers Initiative)</strong> mobile track—where my project StudyFlash was recognized among the{' '}
              <span className="text-indigo-400 dark:text-indigo-400 light:text-indigo-700 font-semibold">top 15 mobile applications</span>—and the{' '}
              <strong className="text-white dark:text-white light:text-slate-900 font-medium">ITI (Information Technology Institute)</strong> Flutter program.
            </p>
            <p>
              Complementing system building, my regular participation in competitive programming, including two editions of the{' '}
              <span className="text-teal-400 dark:text-teal-400 light:text-teal-700 font-semibold">Egyptian Collegiate Programming Contest (ECPC)</span>, has ingrained rigorous problem decomposition, algorithmic analysis, and collaborative debugging into my daily development practices.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Evidence-based engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Clean, modular architectures</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Continuous technical curiosity</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border ${pillar.border} hover:border-cyan-500/40 transition-colors shadow-sm`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-xl ${pillar.bg} ${pillar.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white dark:text-white light:text-slate-900">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
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
