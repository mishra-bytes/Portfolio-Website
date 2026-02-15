import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { profile } from '../data/content';

export function About() {
  return (
    <SectionWrapper id="about" className="py-22 px-6 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>About</SectionHeading>
      <div className="max-w-2xl space-y-5">
        {profile.about.map((paragraph, i) => (
          <p
            key={i}
            className={`text-body leading-relaxed ${
              i === 0 ? 'text-neutral-300' : 'text-neutral-500'
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
