import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!isHome) return;

      const sections = ['home', 'about', 'tech', 'projects', 'publications', 'blog', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Skills', to: '#tech' },
    { label: 'Projects', to: '#projects' },
    { label: 'Publications', to: '#publications' },
    { label: 'Writing', to: '#blog' },
    { label: 'Contact', to: '#contact' },
  ];

  const handleNavClick = (e, to) => {
    setIsMenuOpen(false);
    if (!isHome) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(to);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    const element = document.querySelector(to);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111111]/90 backdrop-blur-md border-b border-surface-border'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-white font-semibold text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          Aditya Mishra
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-neutral-400 hover:text-white transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => {
            const section = link.to.replace('#', '');
            const isActive = isHome && activeSection === section;
            return (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`text-caption font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed top-[64px] left-0 w-full bg-[#111111]/95 backdrop-blur-lg border-b border-surface-border transition-all duration-300 transform ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-8 space-y-5">
            {navLinks.map((link) => {
              const section = link.to.replace('#', '');
              const isActive = isHome && activeSection === section;
              return (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`text-body-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
