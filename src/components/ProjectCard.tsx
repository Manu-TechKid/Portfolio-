import React from 'react';
import { Project } from '../data/portfolio';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isFeatured = project.featured;

  return (
    <article
      className={`rounded-2xl border border-card-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl group flex flex-col ${
        isFeatured ? 'lg:col-span-2 lg:grid lg:grid-cols-12' : ''
      }`}
    >
      {/* Visual Header / Banner */}
      <div
        className={`relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br ${project.accentColor} min-h-[220px] ${
          isFeatured ? 'lg:col-span-5 lg:min-h-full' : ''
        }`}
      >
        {/* Background visual circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:scale-105 transition-transform duration-500">
          <div className="w-56 h-56 rounded-full border border-primary/20 absolute" />
          <div className="w-32 h-32 rounded-full border border-primary/30 absolute" />
        </div>

        {/* Project Number Badge */}
        <div className="absolute top-4 left-4 font-mono text-[11px] tracking-wider text-textMuted/80 uppercase px-2.5 py-1 rounded bg-background/60 backdrop-blur-sm border border-card-border">
          {project.number}
        </div>

        {/* Title display in visual */}
        <div className="relative z-10 text-center">
          <span className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight uppercase block leading-tight">
            {project.title.split(' ')[0]} <br />
            <span className="text-primary">{project.title.split(' ').slice(1).join(' ')}</span>
          </span>
          <span className="inline-block mt-3 text-xs font-mono px-2.5 py-0.5 rounded-full bg-surface-900/90 text-textMuted border border-card-border">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Body */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-between flex-grow ${
          isFeatured ? 'lg:col-span-7' : ''
        }`}
      >
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-900 border border-card-border text-[#a8b8b0]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-primary transition-colors mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-textMuted leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a7b7af]">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-card-border/60">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors group/link"
            >
              <span>Live Project</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-textMuted hover:text-white transition-colors group/link"
            >
              <GithubIcon className="w-3.5 h-3.5 text-primary" />
              <span>View Source Code</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
