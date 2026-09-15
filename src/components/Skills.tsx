import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { Layout, Server, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-primary" />;
      case 'Server':
        return <Server className="w-5 h-5 text-primary" />;
      case 'Database':
        return <Database className="w-5 h-5 text-primary" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-primary" />;
      default:
        return <Layout className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          TECHNICAL TOOLKIT
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Technologies I work with
        </h2>
        <p className="text-textMuted text-sm sm:text-base">
          A balanced set of modern frontend engineering frameworks, backend services, databases, and development tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <article
            key={category.id}
            className="rounded-2xl border border-card-border bg-gradient-to-b from-card to-[#07110d] p-6 flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              {/* Header with Icon and Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-surface-900 border border-card-border group-hover:border-primary/40 transition-colors">
                  {getCategoryIcon(category.iconName)}
                </div>
                <span className="font-mono text-xs text-textMuted/70 group-hover:text-primary transition-colors">
                  {category.number}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <p className="text-xs text-textMuted mb-6 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-card-border/60">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-900/80 border border-card-border text-[#b9c9c1] hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
