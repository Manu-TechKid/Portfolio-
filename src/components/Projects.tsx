import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Full-Stack', 'Enterprise / Systems'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            SELECTED WORK
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Projects built to solve real problems.
          </h2>
          <p className="text-textMuted text-sm sm:text-base">
            Demonstrating hands-on capability across modern front-end engineering, full-stack systems, database integration, and security concepts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-background font-semibold shadow-sm'
                  : 'bg-card border border-card-border text-textMuted hover:text-white hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-14 text-center">
        <p className="text-xs sm:text-sm text-textMuted">
          Want to see more code repositories and ongoing experiments?{' '}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primary-light font-semibold inline-flex items-center gap-1 transition-colors underline underline-offset-4"
          >
            <span>Explore my GitHub profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
};
