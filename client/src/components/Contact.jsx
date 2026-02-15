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
    <SectionWrapper id="contact" className="py-22 px-6 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Contact</SectionHeading>
      <p className="text-body text-neutral-500 mb-8 max-w-lg leading-relaxed">
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
            className="group flex items-center gap-2.5 text-neutral-500 hover:text-white transition-colors duration-200 text-body-sm"
            aria-label={link.label}
          >
            <i className={`${link.icon} text-base`} aria-hidden="true" />
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
