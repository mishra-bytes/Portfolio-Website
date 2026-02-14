import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profilepic.jpeg';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { profile } from '../data/content';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Home() {
  const typing = useTypingEffect(profile.roles);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 lg:px-24 w-full max-w-5xl mx-auto pt-24 pb-16"
    >
      {/* Profile picture with glow aura */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/10 blur-3xl animate-glow-pulse"
          aria-hidden="true"
        />
        <img
          src={profilePic}
          alt={`${profile.name} — ${profile.roles[0]}`}
          className="relative w-36 h-36 rounded-full object-cover border-2 border-white/10 ring-1 ring-cyan-400/10 bg-gray-800"
        />
      </motion.div>

      {/* Name with animated gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-gradient-animated tracking-tight"
      >
        {profile.name}
      </motion.h1>

      {/* Typing effect */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-xl md:text-2xl text-cyan-300/60 mb-8 h-8 font-light tracking-wide"
      >
        <span className="border-r-2 border-cyan-400/40 pr-1">{typing}</span>
      </motion.p>

      {/* Statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-base md:text-lg text-gray-400 mb-14 max-w-2xl leading-relaxed"
      >
        {profile.statement}
      </motion.p>

      {/* Specialization cards — staggered entrance */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 max-w-2xl w-full"
      >
        {profile.specializations.map((spec) => (
          <motion.div
            key={spec.title}
            variants={cardVariants}
            className="glass-card glass-shimmer rounded-xl text-left px-5 py-4"
          >
            <h3 className="text-sm font-semibold text-cyan-300 mb-1.5">{spec.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{spec.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume CTA — premium button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="flex flex-col items-center gap-3"
      >
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <i className="fas fa-file-pdf" aria-hidden="true" />
          Download Resume
        </a>
        <span className="text-xs text-gray-500">{profile.resumeContext}</span>
      </motion.div>
    </section>
  );
}
