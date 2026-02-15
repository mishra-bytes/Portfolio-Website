import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profilepic.jpeg';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { profile } from '../data/content';

export function Home() {
  const typing = useTypingEffect(profile.roles);

  return (
    <section
      id="home"
      className="relative flex flex-col items-start justify-center min-h-[90vh] px-6 lg:px-24 w-full max-w-5xl mx-auto pt-32 pb-20"
    >
      {/* Profile picture */}
      <motion.img
        src={profilePic}
        alt={`${profile.name} — ${profile.roles[0]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-20 h-20 rounded-full object-cover mb-10 grayscale hover:grayscale-0 transition-all duration-500"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-display-sm md:text-display text-white mb-4"
      >
        {profile.name}
      </motion.h1>

      {/* Typing role */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-body md:text-lg text-neutral-500 mb-8 h-7"
      >
        <span className="border-r border-neutral-600 pr-1">{typing}</span>
      </motion.p>

      {/* Statement */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-body text-neutral-400 mb-16 max-w-xl leading-relaxed"
      >
        {profile.statement}
      </motion.p>

      {/* Specialization grid */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-surface-border rounded-xl overflow-hidden mb-16 max-w-xl w-full"
      >
        {profile.specializations.map((spec) => (
          <div
            key={spec.title}
            className="bg-surface-raised text-left px-5 py-5"
          >
            <h3 className="text-body-sm font-medium text-white/90 mb-1.5">{spec.title}</h3>
            <p className="text-caption text-neutral-500 leading-relaxed">{spec.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Resume CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-2"
      >
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <i className="fas fa-arrow-down text-xs" aria-hidden="true" />
          Download Resume
        </a>
        <span className="text-micro text-neutral-600 ml-1">{profile.resumeContext}</span>
      </motion.div>
    </section>
  );
}
