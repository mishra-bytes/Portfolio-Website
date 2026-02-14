import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { profile } from '../data/content';

export function Contact() {
  const links = [
    { href: profile.linkedin, icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: profile.github, icon: 'fab fa-github', label: 'GitHub' },
    { href: `mailto:${profile.email}`, icon: 'fas fa-envelope', label: 'Email' },
  ];

  return (
    <SectionWrapper id="contact" className="py-24 px-4 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Contact</SectionHeading>
      <div className="glass-card rounded-2xl p-8 max-w-xl">
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Open to opportunities in ML engineering, data science, and applied AI. Feel free to
          reach out for collaborations or conversations.
        </p>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm"
              aria-label={link.label}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl glass border border-white/[0.06] group-hover:border-cyan-400/30 group-hover:shadow-glow-sm transition-all duration-300">
                <i className={`${link.icon} text-lg`} aria-hidden="true" />
              </span>
              <span className="hidden sm:inline font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
