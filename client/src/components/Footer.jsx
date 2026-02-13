import React from 'react';

export function Footer() {
  return (
    <footer className="text-center text-gray-600 py-8 text-xs border-t border-gray-800/50">
      &copy; {new Date().getFullYear()} Aditya Mishra
    </footer>
  );
}
