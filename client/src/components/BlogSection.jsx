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
    <SectionWrapper id="blog" className="py-22 px-6 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Writing</SectionHeading>
      <div className="space-y-3">
        {visibleBlogs.map((blog, i) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            target={blog.link !== '#' ? '_blank' : undefined}
            rel={blog.link !== '#' ? 'noopener noreferrer' : undefined}
            className="block card px-5 py-4 group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-body-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                {blog.title}
              </h3>
              <span className="text-micro text-neutral-600 flex-shrink-0">{blog.date}</span>
            </div>
            <p className="text-caption text-neutral-500 mt-1.5 leading-relaxed">{blog.summary}</p>
          </motion.a>
        ))}
      </div>
      {blogs.length > 3 && (
        <div className="flex justify-end mt-5">
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
