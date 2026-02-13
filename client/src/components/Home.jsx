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
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 lg:px-24 w-full max-w-5xl mx-auto pt-24"
    >
      <motion.img
        src={profilePic}
        alt={`${profile.name} — ${profile.roles[0]}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 rounded-full object-cover mb-6 border-2 border-gray-700 bg-gray-800"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-3 text-cyan-200"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-cyan-300/80 mb-6 h-8"
      >
        <span className="border-r-2 border-cyan-400/60 pr-1">{typing}</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
      >
        {profile.statement}
      </motion.p>

      {/* Specialization highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl w-full"
      >
        {profile.specializations.map((spec) => (
          <div
            key={spec.title}
            className="text-left px-4 py-3 rounded-lg border border-gray-700/50 bg-gray-800/30"
          >
            <h3 className="text-sm font-semibold text-cyan-300 mb-1">{spec.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{spec.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Resume CTA with context */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyan-400 rounded-lg border border-cyan-400/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors duration-200"
        >
          <i className="fas fa-file-pdf" aria-hidden="true" />
          Download Resume
        </a>
        <span className="text-xs text-gray-500">{profile.resumeContext}</span>
      </motion.div>
    </section>
  );
}
