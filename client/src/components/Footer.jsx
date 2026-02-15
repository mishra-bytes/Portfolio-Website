import React from 'react';

export function Footer() {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="section-divider max-w-5xl mx-auto mb-10" aria-hidden="true" />
      <p className="text-micro text-neutral-600">
        &copy; {new Date().getFullYear()} Aditya Mishra
      </p>
    </footer>
  );
}
