import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { TerminalCard } from './TerminalCard';
import { ArrowRight, FileDown, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const quickTech = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "C# MVC"];

  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-emerald-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>{PERSONAL_INFO.role}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Building{' '}
              <span className="primary-gradient-text">modern web experiences</span>{' '}
              that solve real problems.
            </h1>

            <p className="text-base sm:text-lg text-textMuted max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-light hover:shadow-[0_0_25px_rgba(141,247,181,0.35)] transition-all transform hover:-translate-y-0.5"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-card-border bg-card text-white font-medium text-sm hover:border-primary/50 hover:bg-surface-900 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-primary" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Emmanuel_Kiprotich_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-card-border bg-card/60 text-textMuted font-medium text-sm hover:text-white hover:border-primary/40 transition-all"
              >
                <FileDown className="w-4 h-4 text-primary" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-6 border-t border-card-border/60">
              <span className="text-xs uppercase tracking-wider text-textMuted/70 font-mono block mb-3">
                Core Stack & Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {quickTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-card-border bg-card/50 text-textMuted hover:border-primary/50 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Card */}
          <div className="lg:col-span-5">
            <TerminalCard />
          </div>

        </div>
      </div>
    </section>
  );
};
