import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { SubHeading } from './ui/SectionHeading';

function CaseStudySection({ title, content }) {
  if (!content) return null;
  return (
    <div className="mb-8">
      <SubHeading>{title}</SubHeading>
      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
}

export function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalImg, setModalImg] = useState(null);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-32 text-xl text-gray-400">
        Project not found.{' '}
        <button onClick={() => navigate('/')} className="text-cyan-400 hover:underline">
          Go back
        </button>
      </div>
    );
  }

  const caseStudySections = [
    { title: 'Problem Context', content: project.problemContext },
    { title: 'Dataset & Input', content: project.datasetInfo },
    { title: 'Approach & Methodology', content: project.approach },
    { title: 'Engineering Decisions', content: project.engineeringDecisions },
    { title: 'Evaluation & Observations', content: project.evaluation },
    { title: 'Limitations & Failure Cases', content: project.limitations },
    { title: 'Future Improvements', content: project.futureImprovements },
  ];

  const hasCaseStudy = caseStudySections.some((s) => s.content);

  return (
    <div className="py-24 px-4 lg:px-24 w-full max-w-4xl mx-auto">
      {/* Back navigation */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-sm text-gray-400 hover:text-cyan-400 flex items-center gap-2 transition-all duration-300 group"
      >
        <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
        Back to Projects
      </button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-4">
          {project.title}
        </h1>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="chip"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <i className="fab fa-github" aria-hidden="true" />
          View Source Code
        </a>
      </motion.div>

      {/* Project image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-10"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl border border-white/[0.06] shadow-glass"
          loading="lazy"
        />
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mb-10"
      >
        <SubHeading>Overview</SubHeading>
        <p className="text-gray-300 leading-relaxed">{project.about}</p>
      </motion.div>

      {/* Case study sections — render only if data exists */}
      {hasCaseStudy && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {caseStudySections.map((section) => (
            <CaseStudySection
              key={section.title}
              title={section.title}
              content={section.content}
            />
          ))}
        </motion.div>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <SubHeading>Results &amp; Artifacts</SubHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="glass-card glass-shimmer rounded-xl p-4 cursor-pointer group"
                onClick={() => setModalImg(res.img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalImg(res.img)}
                aria-label={`View ${res.caption}`}
              >
                <img
                  src={res.img}
                  alt={res.caption}
                  className="w-full rounded mb-2 transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="text-sm text-gray-400">{res.caption}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Image modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setModalImg(null)}
          onKeyDown={(e) => e.key === 'Escape' && setModalImg(null)}
          role="dialog"
          aria-label="Image preview"
        >
          <img
            src={modalImg}
            alt="Full screen view"
            className="max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl border border-white/[0.06]"
          />
        </div>
      )}
    </div>
  );
}
