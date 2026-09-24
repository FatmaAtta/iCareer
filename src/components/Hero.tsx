import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Brain, Smartphone, Globe, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Decorative technical grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0d_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                Available for Software Engineering & AI Roles
              </span>
              <span className="text-slate-600 dark:text-slate-600 light:text-slate-400">|</span>
              <span className="flex items-center gap-1 text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Hello, I am
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
                {personalInfo.name}
              </h1>
            </div>

            {/* Professional Headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 leading-snug">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 font-semibold">
                Software Developer
              </span>{' '}
              <span className="text-slate-500">|</span> AI &amp; ML{' '}
              <span className="text-slate-500">|</span> Web &amp; Mobile Development
            </p>

            {/* Supporting Positioning */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              {personalInfo.supportingPositioning} Computer Science graduate from{' '}
              <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">Cairo University</span>{' '}
              with practical experience spanning speech AI pipelines, modern full-stack web applications, and native/cross-platform mobile apps.
            </p>

            {/* Core Domain Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-cyan-500/30 text-xs font-mono text-cyan-300 dark:text-cyan-300 light:text-cyan-700">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI &amp; Speech Processing</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-indigo-500/30 text-xs font-mono text-indigo-300 dark:text-indigo-300 light:text-indigo-700">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>Web: React &amp; Django</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-teal-500/30 text-xs font-mono text-teal-300 dark:text-teal-300 light:text-teal-700">
                <Smartphone className="w-3.5 h-3.5 text-teal-400" />
                <span>Mobile: Kotlin &amp; Flutter</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-black hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </a>

              {/* Download CV CTA */}
              <a
                href={personalInfo.resumeUrl}
                download="Fatma_Atta_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-slate-700 transition-all text-sm"
                title="Download Fatma Atta CV (PDF)"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-teal-400 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

              <div className="relative bg-[#0d1424] dark:bg-[#0d1424] light:bg-white rounded-3xl p-6 sm:p-7 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl space-y-6">
                
                {/* Photo & Identity Header */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={personalInfo.photoUrl}
                      alt="Fatma Atta - Software Developer"
                      width="88"
                      height="88"
                      className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl object-cover object-top border-2 border-cyan-500/50 shadow-md"
                      loading="eager"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#0d1424] border border-cyan-500/40">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                      Cairo University Graduate
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                      B.Sc. in Computer Science
                    </p>
                  </div>
                </div>

                {/* Verified CV Facts Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Degree GPA</div>
                    <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">3.67 / 4.0</div>
                    <div className="text-[11px] text-slate-400">Cairo University</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">DEPI Mobile</div>
                    <div className="text-lg font-bold text-indigo-400 font-mono mt-0.5">Top 15</div>
                    <div className="text-[11px] text-slate-400">StudyFlash App</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Competitive</div>
                    <div className="text-lg font-bold text-teal-400 font-mono mt-0.5">ECPC</div>
                    <div className="text-[11px] text-slate-400">2023 &amp; 2024</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Flagship AI</div>
                    <div className="text-lg font-bold text-amber-400 font-mono mt-0.5">Whisper</div>
                    <div className="text-[11px] text-slate-400">Masri Diarization</div>
                  </div>
                </div>

                {/* Featured Project Callout Link */}
                <div className="p-3.5 rounded-xl bg-cyan-950/30 dark:bg-cyan-950/30 light:bg-cyan-50 border border-cyan-800/40">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 mb-1">
                    <span className="font-semibold uppercase tracking-wider">Featured Case Study</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-900/60 dark:bg-cyan-900/60 light:bg-cyan-200 text-cyan-200 dark:text-cyan-200 light:text-cyan-900">Flagship</span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                    AI-Powered Customer Service Call Analysis (Egyptian Arabic speech pipeline)
                  </p>
                  <a
                    href="#flagship-case-study"
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 mt-2 font-mono"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
