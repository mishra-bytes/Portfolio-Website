import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { techCategories } from '../data/techStack';

export function TechStack() {
  return (
    <SectionWrapper id="tech" className="py-22 px-6 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Skills &amp; Tools</SectionHeading>
      <div className="space-y-10">
        {techCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-micro text-neutral-500 uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="card flex items-center gap-2.5 px-4 py-2.5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <i
                    className={`${tech.icon} text-neutral-500 text-sm`}
                    aria-hidden="true"
                  />
                  <span className="text-body-sm text-neutral-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
