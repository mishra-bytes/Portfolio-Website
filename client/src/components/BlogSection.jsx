import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { blogs } from '../data/content';

export function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  if (blogs.length === 0) return null;

  return (
    <SectionWrapper id="blog" className="py-24 px-4 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Writing</SectionHeading>
      <div className="space-y-4">
        {visibleBlogs.map((blog, i) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            target={blog.link !== '#' ? '_blank' : undefined}
            rel={blog.link !== '#' ? 'noopener noreferrer' : undefined}
            className="block glass-card glass-shimmer rounded-2xl p-5 group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-base font-semibold text-cyan-200 group-hover:text-cyan-300 transition-colors">
                {blog.title}
              </h3>
              <span className="text-xs text-gray-500 flex-shrink-0">{blog.date}</span>
            </div>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">{blog.summary}</p>
          </motion.a>
        ))}
      </div>
      {blogs.length > 3 && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="btn-ghost"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
