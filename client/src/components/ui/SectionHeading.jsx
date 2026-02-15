import React from 'react';

export function SectionHeading({ children }) {
  return (
    <h2 className="text-heading-sm md:text-heading text-white mb-10 mt-2 tracking-tight">
      {children}
    </h2>
  );
}

export function SubHeading({ children }) {
  return (
    <h3 className="text-heading-sm text-white/90 mb-5 mt-2">
      {children}
    </h3>
  );
}
