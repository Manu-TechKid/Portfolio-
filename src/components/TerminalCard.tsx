import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Check, Copy } from 'lucide-react';

export const TerminalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.role}",
  location: "${PERSONAL_INFO.location}",
  focus: ["Web Apps", "UI/UX", "APIs", "TypeScript"],
  mindset: "Build. Learn. Improve."
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-2xl border border-card-border bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 glow-card">
      {/* Terminal Top Bar */}
      <div className="h-11 border-b border-card-border/80 flex items-center justify-between px-4 bg-[#0a1511]/90">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block transition-transform hover:scale-110"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block transition-transform hover:scale-110"></span>
          <span className="w-3 h-3 rounded-full bg-primary/80 inline-block transition-transform hover:scale-110"></span>
          <span className="ml-2 text-xs font-mono text-textMuted/80">developer.profile.ts</span>
        </div>

        <button
          onClick={copyCode}
          aria-label="Copy snippet"
          className="flex items-center gap-1.5 text-xs text-textMuted hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-surface-900/60"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-mono text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Code Body */}
      <div className="p-6 font-mono text-sm leading-relaxed text-[#c9e8d6]/90">
        <p>
          <span className="text-primary font-semibold">const</span>{' '}
          <span className="text-white">developer</span> = &#123;
        </p>
        <p className="pl-5">
          <span className="text-textMuted">name:</span> <span className="text-primary">"{PERSONAL_INFO.name}"</span>,
        </p>
        <p className="pl-5">
          <span className="text-textMuted">role:</span> <span className="text-primary">"{PERSONAL_INFO.role}"</span>,
        </p>
        <p className="pl-5">
          <span className="text-textMuted">location:</span> <span className="text-primary">"{PERSONAL_INFO.location}"</span>,
        </p>
        <p className="pl-5">
          <span className="text-textMuted">focus:</span>{' '}
          <span className="text-emerald-300">[</span>
          <span className="text-primary">"Web Apps"</span>, <span className="text-primary">"UI/UX"</span>,{' '}
          <span className="text-primary">"APIs"</span>
          <span className="text-emerald-300">]</span>,
        </p>
        <p className="pl-5">
          <span className="text-textMuted">mindset:</span> <span className="text-primary">"Build. Learn. Improve."</span>
        </p>
        <p>&#125;;</p>

        {/* Live Status Indicator */}
        <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-primary/90 font-medium">{PERSONAL_INFO.status}</span>
          </div>
          <span className="text-textMuted/70 text-[11px]">TypeScript v5.7</span>
        </div>
      </div>
    </div>
  );
};
