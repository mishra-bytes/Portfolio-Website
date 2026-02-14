import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { ProjectDetails } from './components/ProjectDetails';
import { PublicationsCertifications } from './components/PublicationsCertifications';
import { BlogSection } from './components/BlogSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function SectionDivider() {
  return <div className="section-divider max-w-5xl mx-auto" aria-hidden="true" />;
}

function MainPage() {
  return (
    <>
      <Home />
      <SectionDivider />
      <About />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <PublicationsCertifications />
      <SectionDivider />
      <BlogSection />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Layered depth background */}
      <div className="bg-depth" aria-hidden="true" />
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />

      <Navbar />
      <main className="pt-20 relative">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
