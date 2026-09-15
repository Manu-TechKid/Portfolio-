import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-card-border/80 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 font-heading font-bold text-lg tracking-tight group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-primary/40 bg-card text-primary font-mono text-xs group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(141,247,181,0.25)] transition-all">
              {PERSONAL_INFO.initials}
            </span>
            <span className="text-white group-hover:text-primary transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.cvPath}
              download="Emmanuel_Kiprotich_CV.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-card-border bg-card/80 text-xs font-semibold text-textMuted hover:text-white hover:border-primary/50 transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-primary" />
              <span>Resume</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary/50 bg-primary/10 text-xs font-semibold text-primary hover:bg-primary hover:text-background transition-all"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-textMuted hover:text-white hover:bg-surface-900 border border-card-border transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-card-border px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-textMuted hover:text-primary py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-card-border/60 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.cvPath}
                download="Emmanuel_Kiprotich_CV.pdf"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-card-border bg-card text-xs font-semibold text-textMuted hover:text-white"
              >
                <FileDown className="w-4 h-4 text-primary" />
                <span>Download Resume (CV)</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-background font-semibold text-xs"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
