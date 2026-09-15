import React from 'react';
import { STATS } from '../data/portfolio';

export const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-card-border/60 bg-card/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative pl-6 border-l border-primary/30 hover:border-primary transition-colors group"
            >
              <div className="font-heading text-3xl sm:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-textMuted mt-1">
                {stat.label}
              </div>
              {stat.detail && (
                <div className="text-xs text-textMuted/60 font-mono mt-0.5">
                  {stat.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
