import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { techCategories } from '../data/techStack';

export function TechStack() {
  return (
    <SectionWrapper id="tech" className="py-24 px-4 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Skills &amp; Tools</SectionHeading>
      <div className="space-y-10">
        {techCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="glass-card glass-shimmer rounded-xl flex items-center gap-2.5 px-4 py-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <i
                    className={`${tech.icon} text-cyan-300/70 text-lg`}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-200 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
