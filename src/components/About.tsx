import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Compass, Code2, Database, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-primary" />,
      title: "Frontend & Web Apps",
      desc: "Creating responsive, clean UI with React, TypeScript, and modern styling libraries."
    },
    {
      icon: <Database className="w-5 h-5 text-primary" />,
      title: "Full-Stack & APIs",
      desc: "Node.js, Express, C# MVC, and database design across SQL and NoSQL platforms."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "System Analysis & Security",
      desc: "Hands-on experience in testing, technical troubleshooting, and system workflows."
    },
    {
      icon: <Compass className="w-5 h-5 text-primary" />,
      title: "Practical Problem Solving",
      desc: "Turning real business workflows into functional, intuitive software solutions."
    }
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Heading Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            ABOUT ME
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Developer with a practical, problem-solving mindset.
          </h2>
          <p className="text-textMuted text-sm font-mono pt-2">
            Based in Kenya · BSc IT Student (2022–2026)
          </p>
        </div>

        {/* Right Content & Cards Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4 text-textMuted leading-relaxed text-base">
            {PERSONAL_INFO.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Value Proposition Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-card-border bg-card/60 hover:border-primary/40 hover:bg-card transition-all"
              >
                <div className="p-2.5 w-fit rounded-lg bg-surface-900 border border-card-border mb-3">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-textMuted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
