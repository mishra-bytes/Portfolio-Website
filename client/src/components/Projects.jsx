import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { projects } from '../data/projects';

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <SectionWrapper id="projects" className="py-24 px-4 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((proj, idx) => (
          <Link key={proj.slug} to={`/project/${proj.slug}`} className="no-underline group">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              viewport={{ once: true, amount: 0.15 }}
              className="glass-card glass-shimmer rounded-2xl overflow-hidden h-full flex flex-col"
            >
              <div className="w-full h-40 bg-dark-50 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-cyan-200 mb-2 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
      {projects.length > 6 && (
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="btn-ghost"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
