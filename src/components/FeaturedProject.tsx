import React, { useState } from 'react';
import { flagshipProject, flagshipCaseStudyDetails } from '../data/portfolioData';
import { 
  Sparkles, 
  Layers, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  ChevronRight,
  Server,
  FileCode2,
  ListFilter,
  BarChart2,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  // Simulated structured dialogue snippet matching actual project output format
  const sampleDialogue = [
    {
      speaker: 'Agent (خدمة العملاء)',
      speakerId: 'SPEAKER_00',
      time: '00:01 - 00:06',
      text: 'صباح الخير يا فندم، مع حضرتك خدمة العملاء، إزاي أقدر أساعدك النهاردة؟',
      sentiment: 'Positive',
      sentimentColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
    },
    {
      speaker: 'Customer (العميل)',
      speakerId: 'SPEAKER_01',
      time: '00:07 - 00:15',
      text: 'أهلاً بيك، أنا طلبت أوردر من تلات أيام وكان المفروض يوصل إمبارح ولحد دلوقتي ما استلمتش أي حاجة وعايز أعرف السبب.',
      sentiment: 'Negative',
      sentimentColor: 'text-rose-400 bg-rose-950/60 border-rose-800/60'
    },
    {
      speaker: 'Agent (خدمة العملاء)',
      speakerId: 'SPEAKER_00',
      time: '00:16 - 00:24',
      text: 'حقك علينا يا فندم وبعتذر جداً عن التأخير، رقم التتبع مع حضرتك أتابع مسار الشحنة فوراً؟',
      sentiment: 'Positive',
      sentimentColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
    }
  ];

  return (
    <section id="flagship-case-study" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flagship Banner Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border border-cyan-500/40 text-xs sm:text-sm font-mono text-cyan-300 dark:text-cyan-300 light:text-cyan-800 uppercase tracking-widest shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Featured Case Study &bull; Flagship Graduation Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-slate-900 tracking-tight max-w-4xl leading-tight">
            {flagshipProject.title}
          </h2>

          <p className="text-lg sm:text-xl text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-medium max-w-3xl">
            {flagshipProject.subtitle}
          </p>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl text-base">
            An AI-powered system designed to process, transcribe, and extract speaker and emotional intelligence from Egyptian Arabic customer service audio streams.
          </p>
        </div>

        {/* High-Level Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Problem */}
          <div className="p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 relative group hover:border-cyan-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 border border-rose-500/20">
              <ListFilter className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              {flagshipCaseStudyDetails.problem.title}
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              {flagshipCaseStudyDetails.problem.content}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 relative group hover:border-cyan-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              {flagshipCaseStudyDetails.solution.title}
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              {flagshipCaseStudyDetails.solution.content}
            </p>
          </div>

          {/* Architecture */}
          <div className="p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 relative group hover:border-cyan-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
              {flagshipCaseStudyDetails.architecture.title}
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              {flagshipCaseStudyDetails.architecture.content}
            </p>
          </div>

        </div>

        {/* Visual Architecture Flowchart */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#0b1120] dark:bg-[#0b1120] light:bg-white border border-cyan-900/40 dark:border-cyan-900/40 light:border-slate-200 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                System Topology
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                Decoupled Web &amp; AI Inference Architecture
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Stack &amp; AI Integration</span>
            </div>
          </div>

          {/* Flowchart Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {/* Box 1: Frontend Layer */}
            <div className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border border-slate-700 dark:border-slate-700 light:border-slate-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                  <span>01. CLIENT TIER</span>
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">Web Dashboard</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Audio file upload, interactive transcript inspection, speaker turns, &amp; sentiment timeline.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                Led Frontend Interface
              </div>
            </div>

            {/* Box 2: Django Backend */}
            <div className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border border-indigo-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
                  <span>02. APP BACKEND</span>
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">Django Web Core</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Request orchestration, database persistence, user auth, and API client to the AI engine.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-300">
                Django + REST
              </div>
            </div>

            {/* Box 3: FastAPI AI Microservice */}
            <div className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border border-cyan-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                  <span>03. AI INFERENCE</span>
                  <Workflow className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">FastAPI Microservice</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Asynchronous processing of speech models, GPU memory management, and pipeline coordination.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-300">
                FastAPI + PyTorch
              </div>
            </div>

            {/* Box 4: AI/ML Models */}
            <div className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-50 border border-teal-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-teal-400 mb-2">
                  <span>04. PIPELINE TIER</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white dark:text-white light:text-slate-900 text-sm">Sequential AI Pipeline</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Whisper/Faster-Whisper ASR &bull; Speaker Diarization &bull; AraBERT Sentiment &bull; JSON Serializer.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-teal-300">
                Masri Dialect Pipeline
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Step-by-Step AI/ML Pipeline Explorer */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Sequential Processing
              </span>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                The 6-Stage AI/ML Execution Pipeline
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Click any stage to view architectural details
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Step Selection Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {flagshipCaseStudyDetails.pipelineSteps.map((step, idx) => {
                const isActive = activePipelineStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActivePipelineStep(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-950/70 dark:bg-cyan-950/70 light:bg-cyan-50 border-cyan-500 text-white dark:text-white light:text-slate-900 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs px-2 py-1 rounded ${
                        isActive ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {step.step}
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm">{step.name}</h4>
                        <span className="text-xs font-mono text-cyan-400/90 dark:text-cyan-400/90 light:text-cyan-700">{step.tech}</span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-cyan-400' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0e1628] dark:bg-[#0e1628] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Pipeline Stage {flagshipCaseStudyDetails.pipelineSteps[activePipelineStep].step}
                  </span>
                  <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                    {flagshipCaseStudyDetails.pipelineSteps[activePipelineStep].name}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-xs font-mono text-cyan-300">
                  {flagshipCaseStudyDetails.pipelineSteps[activePipelineStep].tech}
                </div>
              </div>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base leading-relaxed mb-6">
                {flagshipCaseStudyDetails.pipelineSteps[activePipelineStep].description}
              </p>

              {/* Contextual Technical Highlights */}
              <div className="p-4 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                  Engineering Implementation
                </div>
                {activePipelineStep === 0 && (
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Standardized audio stream rates to 16kHz mono WAV format to optimize PyTorch acoustic feature extraction and minimize pipeline I/O latency.
                  </p>
                )}
                {activePipelineStep === 1 && (
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Evaluated OpenAI Whisper and Faster-Whisper (CTranslate2) specifically on colloquial Egyptian Arabic phonetic speech and vocabulary to assess transcription performance.
                  </p>
                )}
                {activePipelineStep === 2 && (
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Identified acoustic speaker transitions and assigned temporal boundary timestamps, enabling discrete attribution between agent and customer.
                  </p>
                )}
                {activePipelineStep === 3 && (
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Passed diarized Egyptian Arabic transcripts through an AraBERT transformer model fine-tuned for dialectal text sentiment classification.
                  </p>
                )}
                {activePipelineStep === 4 && (
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Engineered Python scripts to convert raw, unstructured prediction streams into normalized JSON schemas for searchability and frontend rendering.
                  </p>
                )}
                {activePipelineStep === 5 && (
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    Developed the web interface and integrated it with the Django backend and FastAPI microservice for end-to-end user evaluation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Structured JSON & Call Inspector Preview */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#090e1a] dark:bg-[#090e1a] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Pipeline Output Representation
              </span>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mt-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Structured Egyptian Arabic Call Transcription &amp; Sentiment
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">JSON Schema Output</span>
            </div>
          </div>

          {/* Dialogue Turns */}
          <div className="space-y-4 mb-6">
            {sampleDialogue.map((turn, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800/80 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <span className="font-bold text-white dark:text-white light:text-slate-900">{turn.speaker}</span>
                    <span className="text-slate-500">[{turn.speakerId}]</span>
                    <span className="text-slate-400">@{turn.time}</span>
                  </div>
                  <p className="text-base text-slate-200 dark:text-slate-200 light:text-slate-800 font-sans text-right dir-rtl leading-relaxed">
                    {turn.text}
                  </p>
                </div>
                <div className="sm:self-center shrink-0">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${turn.sentimentColor}`}>
                    {turn.sentiment}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
            <FileCode2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Structured JSON output contains per-turn start/end millisecond timestamps, speaker cluster IDs, Masri transcription tokens, and sentiment confidence vectors.</span>
          </div>
        </div>

        {/* Evaluation & Learnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Evaluation & Benchmarking */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-teal-400">Empirical Testing</span>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {flagshipCaseStudyDetails.evaluation.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                {flagshipCaseStudyDetails.evaluation.content}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Generated a specialized Egyptian Arabic evaluation dataset to evaluate speech transcription performance under real dialect conditions.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Evaluated Whisper and Faster-Whisper to benchmark transcription accuracy and model inference latency.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Integrated speaker diarization to accurately isolate overlapping speech intervals in two-party customer service dialogues.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Evaluation focused on Egyptian dialectal speech phonetics &amp; inference speed.
            </div>
          </div>

          {/* What I Learned */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-amber-400">Engineering Takeaways</span>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {flagshipCaseStudyDetails.learned.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 mb-6">
                {flagshipCaseStudyDetails.learned.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>Technologies: Django &bull; FastAPI &bull; Whisper &bull; AraBERT</span>
              <span>Python Stack</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
