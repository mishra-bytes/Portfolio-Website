import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { SubHeading } from './ui/SectionHeading';

function CaseStudySection({ title, content }) {
  if (!content) return null;
  return (
    <div className="mb-10">
      <SubHeading>{title}</SubHeading>
      <p className="text-body text-neutral-400 leading-relaxed whitespace-pre-line">{content}</p>
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
      <div className="text-center py-32 text-body text-neutral-500">
        Project not found.{' '}
        <button onClick={() => navigate('/')} className="text-white hover:underline">
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
    <div className="py-22 px-6 lg:px-24 w-full max-w-3xl mx-auto">
      {/* Back navigation */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 text-caption text-neutral-500 hover:text-neutral-300 flex items-center gap-2 transition-colors duration-200 group"
      >
        <i className="fa-solid fa-arrow-left text-xs transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
        Back to Projects
      </button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-display-sm md:text-display text-white mb-5">
          {project.title}
        </h1>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-caption text-neutral-500 hover:text-neutral-300 transition-colors mb-10"
        >
          <i className="fab fa-github" aria-hidden="true" />
          View Source Code
        </a>
      </motion.div>

      {/* Project image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-12"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl border border-surface-border"
          loading="lazy"
        />
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mb-12"
      >
        <SubHeading>Overview</SubHeading>
        <p className="text-body text-neutral-400 leading-relaxed">{project.about}</p>
      </motion.div>

      {/* Case study sections */}
      {hasCaseStudy && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <SubHeading>Results &amp; Artifacts</SubHeading>
          <div className="grid md:grid-cols-2 gap-5">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="card p-4 cursor-pointer group"
                onClick={() => setModalImg(res.img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalImg(res.img)}
                aria-label={`View ${res.caption}`}
              >
                <img
                  src={res.img}
                  alt={res.caption}
                  className="w-full rounded mb-3 transition-opacity duration-200 group-hover:opacity-80"
                  loading="lazy"
                />
                <span className="text-caption text-neutral-500">{res.caption}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Image modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setModalImg(null)}
          onKeyDown={(e) => e.key === 'Escape' && setModalImg(null)}
          role="dialog"
          aria-label="Image preview"
        >
          <img
            src={modalImg}
            alt="Full screen view"
            className="max-w-3xl max-h-[90vh] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
