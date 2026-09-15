import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Mail, Send, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="rounded-3xl border border-card-border bg-gradient-to-b from-[#091510] to-card p-8 sm:p-12 lg:p-16 relative overflow-hidden glow-card">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Let's build something <span className="primary-gradient-text">exceptional</span>.
            </h2>

            <p className="text-textMuted text-base sm:text-lg leading-relaxed">
              I'm actively seeking junior front-end and web engineering opportunities. Whether you have an open role, an interesting project, or just want to connect, my inbox is always open.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card border border-card-border hover:border-primary/50 text-white text-xs font-mono transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-primary" />
                    <span>Copy: {PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-background font-semibold text-xs hover:bg-primary-light transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-card-border/60">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-surface-900 border border-card-border text-textMuted hover:text-white hover:border-primary/40 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-surface-900 border border-card-border text-textMuted hover:text-white hover:border-primary/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-6 bg-card/90 border border-card-border rounded-2xl p-6 sm:p-8">
            <h3 className="font-heading font-semibold text-xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-textMuted mb-6 font-mono">
              Fill out the form below to reach out directly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center space-y-3">
                <Check className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-heading font-bold text-white text-lg">Message Prepared!</h4>
                <p className="text-xs text-textMuted">
                  Your message was drafted in your mail client. If it didn't open automatically, please send directly to <span className="text-primary font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="mt-3 px-4 py-2 rounded-lg bg-surface-900 border border-card-border text-xs text-white hover:border-primary/40 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-textMuted mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-900 border border-card-border text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-textMuted/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-textMuted mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-900 border border-card-border text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-textMuted/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-textMuted mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Emmanuel, I'd like to talk about an opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-900 border border-card-border text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-textMuted/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-background font-semibold text-sm hover:bg-primary-light transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
