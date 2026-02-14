import React from 'react';

export function SectionHeading({ children }) {
  return (
    <div className="flex items-center mb-10 mt-2">
      <span
        className="inline-block w-1.5 h-8 rounded-sm mr-3 bg-gradient-to-b from-cyan-400 to-indigo-400"
        aria-hidden="true"
      />
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-100 tracking-tight">
        {children}
      </h2>
    </div>
  );
}

export function SubHeading({ children }) {
  return (
    <div className="flex items-center mb-6 mt-2">
      <span
        className="inline-block w-1 h-6 rounded-sm mr-3 bg-gradient-to-b from-cyan-400/60 to-indigo-400/60"
        aria-hidden="true"
      />
      <h3 className="text-xl md:text-2xl font-semibold text-cyan-100">
        {children}
      </h3>
    </div>
  );
}
