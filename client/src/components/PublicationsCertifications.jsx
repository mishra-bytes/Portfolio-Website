import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { publications, certifications } from '../data/content';

export function PublicationsCertifications() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <SectionWrapper id="publications" className="py-24 px-4 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>Publications &amp; Certifications</SectionHeading>

      {/* Publications */}
      {publications.length > 0 && (
        <div className="mb-14">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Publications
          </h3>
          <div className="space-y-6">
            {publications.map((item, i) => (
              <motion.article
                key={item.title}
                className="flex flex-col md:flex-row glass-card glass-shimmer rounded-2xl p-6 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-36 h-36 rounded-lg object-cover border border-white/[0.06] flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-cyan-200 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 mb-3">
                    {item.conference} · {item.venue} · {item.date}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-3">{item.summary}</p>
                  <a
                    href={item.link}
                    className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications
              .slice(0, showAllCerts ? certifications.length : 3)
              .map((item, i) => (
                <motion.article
                  key={item.title}
                  className="flex flex-col sm:flex-row glass-card glass-shimmer rounded-2xl p-5 gap-5 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover border border-white/[0.06] flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-cyan-200 mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">
                      {item.company} · {item.completedOn}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">{item.brief}</p>
                    <a
                      href={item.link}
                      className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </motion.article>
              ))}
          </div>
          {certifications.length > 3 && (
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAllCerts((v) => !v)}
                className="btn-ghost"
              >
                {showAllCerts ? 'Show Less' : 'View All'}
              </button>
            </div>
          )}
        </div>
      )}
    </SectionWrapper>
  );
}
