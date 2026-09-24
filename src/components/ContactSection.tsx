import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Terminal, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glowing sphere */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-cyan-50 border border-cyan-800/40 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-800 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> Direct Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl text-base sm:text-lg">
            Have a project or opportunity in mind? Let&apos;s connect. I am open to software development, AI/ML, and mobile engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Direct Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT EMAIL</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <span>PHONE / WHATSAPP</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span>LOCATION</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
                {personalInfo.location}
              </div>
              <p className="text-xs text-slate-400 mt-1">Available for local &amp; remote engineering opportunities</p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                  <div className="text-xs font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400">
                    /in/fatmaatta
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GitHub</div>
                  <div className="text-xs font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400">
                    /FatmaAtta
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Quick Mail Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMessage}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Compose Direct Email Inquiry</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sender-name" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="sender-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sender-email" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="sender-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sender-subject" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="sender-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Role / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="sender-message" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="sender-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Fatma, we came across your AI and software engineering work and would love to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-white dark:text-white light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group text-sm"
              >
                <span>Open Email Draft</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                Launches your native mail client directly addressed to {personalInfo.email}
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
