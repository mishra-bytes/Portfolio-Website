import React from 'react';

export function Footer() {
  return (
    <footer className="relative text-center py-12 text-sm">
      <div className="section-divider mb-8" aria-hidden="true" />
      <div className="text-gray-500">
        <p>&copy; {new Date().getFullYear()} Aditya Mishra</p>
        <p className="mt-1.5 text-xs text-gray-600">
          Built with intention &amp; precision
        </p>
      </div>
    </footer>
  );
}
