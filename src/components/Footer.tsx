import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-card-border/80 bg-[#050c09] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-primary/40 bg-card text-primary font-mono text-xs font-bold">
            {PERSONAL_INFO.initials}
          </span>
          <div className="text-xs text-textMuted">
            <span className="text-white font-medium block">
              © {currentYear} {PERSONAL_INFO.name}
            </span>
            <span>{PERSONAL_INFO.role} · {PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Center built with info */}
        <div className="flex items-center gap-1.5 text-xs text-textMuted font-mono">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          <span>using React & TypeScript</span>
        </div>

        {/* Right social & back to top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-textMuted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-textMuted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-card border border-card-border text-textMuted hover:text-primary hover:border-primary/50 transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
