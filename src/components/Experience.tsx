import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolio';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Header */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            EXPERIENCE & EDUCATION
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            From academic foundations to industry.
          </h2>
          <p className="text-textMuted text-sm sm:text-base leading-relaxed">
            Hands-on professional software development, database maintenance, technical troubleshooting, and university coursework in Information Technology.
          </p>
        </div>

        {/* Right Timeline */}
        <div className="lg:col-span-8 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-card-border" />

          <div className="space-y-12 pl-12 relative">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.type === 'work' ? (
                    <Briefcase className="w-3 h-3 text-primary" />
                  ) : (
                    <GraduationCap className="w-3 h-3 text-primary" />
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 rounded-2xl border border-card-border bg-card/70 hover:border-primary/40 hover:bg-card transition-all">
                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-xs font-bold tracking-wide">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-textMuted font-mono">
                      <MapPin className="w-3.5 h-3.5 text-primary/70" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    {item.role}
                  </h3>

                  <div className="text-sm font-medium text-primary/90 mb-4">
                    {item.organization}
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2.5">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textMuted">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
