import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { SectionHeading } from './ui/SectionHeading';
import { profile } from '../data/content';

export function About() {
  return (
    <SectionWrapper id="about" className="py-24 px-4 lg:px-24 w-full max-w-5xl mx-auto">
      <SectionHeading>About</SectionHeading>
      <div className="max-w-3xl space-y-4">
        {profile.about.map((paragraph, i) => (
          <p
            key={i}
            className={`text-base leading-relaxed ${
              i === 0 ? 'text-gray-200' : 'text-gray-400'
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
