import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import profilePic from './assets/profilepic.jpeg';

const techStack = [
  { name: 'Python', icon: 'fa-brands fa-python text-cyan-200' },
  { name: 'SQL', icon: 'fa-solid fa-database text-cyan-200' },
  { name: 'Chart', icon: 'fa-solid fa-chart-line text-cyan-200' },
  { name: 'Brain', icon: 'fa-solid fa-brain text-cyan-200' },
  { name: 'Code', icon: 'fa-solid fa-code text-cyan-200' },
  { name: 'Table', icon: 'fa-solid fa-table text-cyan-200' },
  { name: 'Project', icon: 'fa-solid fa-diagram-project text-cyan-200' },
];

const projects = [
  {
    slug: 'ml-project-1',
    title: 'ML Project 1',
    desc: 'A machine learning project using Python and Scikit-learn. This project demonstrates advanced feature engineering, model selection, and evaluation techniques on real-world datasets. It also includes a Jupyter notebook and a web dashboard for results visualization.',
    about: 'This project explores advanced ML workflows, including data preprocessing, feature engineering, model selection, and evaluation. The results are visualized using interactive charts.',
    github: 'https://github.com/your-github/project1',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'Chart'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=Accuracy+Graph', caption: 'Model Accuracy' },
      { img: 'https://placehold.co/400x200/222/fff?text=Confusion+Matrix', caption: 'Confusion Matrix' },
    ],
  },
  {
    slug: 'data-analysis-dashboard',
    title: 'Data Analysis Dashboard',
    desc: 'Interactive dashboard for data analysis with Pandas and Plotly. The dashboard allows users to upload CSV files, run exploratory data analysis, and visualize trends and correlations interactively.',
    about: 'A web-based dashboard for data analysis, supporting CSV upload, EDA, and interactive visualizations. Built with Python, Pandas, and Plotly.',
    github: 'https://github.com/your-github/project2',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'Table', 'Chart'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=EDA+Chart', caption: 'Exploratory Data Analysis' },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot',
    desc: 'Conversational AI chatbot using TensorFlow and NLP. The bot can answer questions, perform sentiment analysis, and be integrated into websites or messaging apps.',
    about: 'A chatbot built with TensorFlow and NLP techniques. It can answer questions, analyze sentiment, and be deployed on various platforms.',
    github: 'https://github.com/your-github/project3',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'Brain'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=Chat+Example', caption: 'Chatbot Conversation' },
    ],
  },
  {
    slug: 'sql-data-pipeline',
    title: 'SQL Data Pipeline',
    desc: 'Automated ETL pipeline using SQL and Python scripts. This project extracts, transforms, and loads data from multiple sources into a data warehouse, with monitoring and logging.',
    about: 'A robust ETL pipeline for data warehousing, featuring automated extraction, transformation, and loading with monitoring.',
    github: 'https://github.com/your-github/project4',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    stack: ['SQL', 'Python', 'Table'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=ETL+Flow', caption: 'ETL Flow Diagram' },
    ],
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    desc: 'This very portfolio! Built with React, Tailwind CSS, and Framer Motion, featuring modern design, animations, and responsive layout.',
    about: 'A modern, animated, and responsive portfolio website built with React, Tailwind CSS, and Framer Motion.',
    github: 'https://github.com/your-github/portfolio',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    stack: ['Code', 'Project'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=Portfolio+Screenshot', caption: 'Portfolio Screenshot' },
    ],
  },
  {
    slug: 'ml-project-2',
    title: 'ML Project 2',
    desc: 'A deep learning project using TensorFlow and Keras. This project focuses on image classification and object detection, with a custom CNN architecture and transfer learning techniques.',
    about: 'A deep learning project for image classification and object detection, using TensorFlow and Keras.',
    github: 'https://github.com/your-github/project5',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    stack: ['Python', 'Brain'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=Model+Performance', caption: 'Model Performance' },
    ],
  },
  {
    slug: 'data-visualization-tool',
    title: 'Data Visualization Tool',
    desc: 'A web-based data visualization tool built with D3.js and React. This tool allows users to create interactive charts and graphs from CSV data, with customizable themes and export options.',
    about: 'A web-based data visualization tool built with D3.js and React, supporting interactive charts and graphs.',
    github: 'https://github.com/your-github/project6',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    stack: ['Code', 'Chart'],
    results: [
      { img: 'https://placehold.co/400x200/222/fff?text=Visualization+Example', caption: 'Visualization Example' },
    ],
  },
];

function useTypingEffect(words, speed = 80, pause = 1200) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) return;
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((val) => val + (deleting ? -1 : 1));
      setDisplay(words[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed + Math.random() * 40);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    setDisplay(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return display;
}

function AnimatedBGParallax() {
  // Visibly clear parallax: gradient + SVG circles
  return (
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full bg-gradient-to-br from-cyan-900 via-gray-900 to-purple-900" />
      {/* SVG circles for parallax */}
      <svg className="absolute w-full h-full" style={{ pointerEvents: 'none' }}>
        <circle cx="20%" cy="30%" r="60" fill="#22d3ee22">
          <animate attributeName="cy" values="30%;40%;30%" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="60%" r="40" fill="#a78bfa33">
          <animate attributeName="cy" values="60%;50%;60%" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="80%" r="30" fill="#f472b633">
          <animate attributeName="cy" values="80%;70%;80%" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navLinks = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Tech', to: '#tech' },
    { label: 'Projects', to: '#projects' },
    { label: 'Contact', to: '#contact' },
  ];
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all bg-gray-950/90 shadow-lg backdrop-blur border-b border-gray-800`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-cyan-300 font-bold text-xl tracking-widest">Aditya Mishra</span>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="text-gray-200 hover:text-cyan-400 font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Home() {
  const typing = useTypingEffect([
    'Data Scientist',
    'ML Engineer',
    'AI Enthusiast',
    'Data Analyst',
    'Open Source Contributor',
  ]);
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[120vh] text-center px-4 lg:px-24 overflow-hidden w-full max-w-7xl mx-auto">
      {/* Profile picture above name */}
      <motion.img 
        src={profilePic}
        alt="Profile" 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-40 h-40 rounded-full object-cover mb-8 shadow-lg border-4 border-gray-900 bg-gray-800"
        style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0)' }}
      />
      <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold mb-6 text-cyan-300">
        Aditya Mishra
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-2xl md:text-3xl text-cyan-200 mb-8 h-12">
        <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">{typing}</span>
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
        I build intelligent solutions with data, code, and creativity. Welcome to my portfolio where you can explore my work, skills, and journey in the world of Data Science and AI.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-8"
      >
        <a 
          href="https://drive.google.com/uc?export=download&id=1ZANgd7TXx7RoJLCotrPBKO37EfiPdbxC" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-400/20 transition-all duration-300 hover:scale-105"
        >
          <i className="fas fa-file-pdf text-xl"></i>
          <span className="font-medium">Download Resume</span>
        </a>
      </motion.div>
    </section>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="flex items-center mb-12 mt-2">
      <span className="inline-block w-2 h-8 md:h-10 bg-cyan-400 rounded mr-4" />
      <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-100 leading-tight">{children}</h2>
    </div>
  );
}

function ResultsHeading({ children }) {
  return (
    <div className="flex items-center mb-8 mt-2">
      <span className="inline-block w-2 h-7 md:h-8 bg-cyan-400 rounded mr-4" />
      <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-100 leading-tight">{children}</h2>
    </div>
  );
}

function SectionWrapper({ children, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

function About() {
  return (
    <SectionWrapper id="about" className="py-32 px-4 lg:px-24 w-full max-w-7xl mx-auto text-left">
      <SectionHeading>About Me</SectionHeading>
      <div className="max-w-3xl">
        <p className="text-gray-200 text-lg mb-6 text-justify">
          I am a passionate Data Scientist and Machine Learning Engineer with a background in AI, data analysis, and automation. My goal is to turn data into actionable insights and build impactful AI-driven products.
        </p>
        <p className="text-gray-400 mb-6 text-justify">
          I love exploring new technologies, sharing knowledge, and collaborating on open-source projects. I have experience working with diverse teams and enjoy mentoring aspiring data professionals.
        </p>
        <p className="text-gray-400 mb-6 text-justify">
          My journey started with a curiosity for numbers and patterns, which led me to pursue advanced studies in statistics and computer science. Today, I focus on building robust data pipelines, deploying machine learning models, and creating interactive data visualizations.
        </p>
        <p className="text-gray-400 text-justify">
          Outside of work, I enjoy hiking, photography, and contributing to tech communities.
        </p>
      </div>
    </SectionWrapper>
  );
}

function TechStack() {
  return (
    <SectionWrapper id="tech" className="py-32 px-4 lg:px-24 w-full max-w-7xl mx-auto text-left">
      <SectionHeading>Tech Stack</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex items-center bg-gray-800 rounded-xl border border-gray-700 px-6 py-5 shadow-md"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            viewport={{ amount: 0.2 }}
          >
            <i className={`${tech.icon} text-4xl mr-5`} aria-label={tech.name} />
            <span className="text-lg text-cyan-100 font-semibold">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <SectionWrapper id="projects" className="py-32 px-4 lg:px-24 w-full max-w-7xl mx-auto text-left">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid md:grid-cols-3 gap-12">
        {visibleProjects.map((proj, idx) => (
          <Link
            key={proj.slug}
            to={`/project/${proj.slug}`}
            className="no-underline"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -6 }}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.12, type: 'spring' }}
              viewport={{ amount: 0.2 }}
              className="bg-gray-800/80 rounded-2xl p-0 shadow-lg border border-gray-700 transition-all flex flex-col items-center overflow-hidden group cursor-pointer"
              aria-label={proj.title}
            >
              <div className="w-full h-44 bg-gray-900 flex items-center justify-center overflow-hidden border-b-2 border-gray-700 relative">
                <img src={proj.image} alt={proj.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between w-full">
                <h3 className="text-xl font-semibold text-cyan-200 mb-3 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                <p className="text-gray-300 mb-5 text-sm">{proj.desc}</p>
                <div className="flex flex-wrap gap-3 justify-center mt-2">
                  {proj.stack.map((tech) => {
                    const t = techStack.find((t) => t.name === tech);
                    return t ? (
                      <span key={tech} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900/70 rounded-full text-cyan-200 text-sm font-medium border border-gray-700">
                        <i className={`${t.icon} text-lg`} aria-label={tech} />
                        {tech}
                      </span>
                    ) : (
                      <span key={tech} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900/70 rounded-full text-cyan-200 text-sm font-medium border border-gray-700">
                        <i className="fa-solid fa-circle-question text-lg" aria-label={tech} />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      {projects.length > 6 && (
        <div className="flex justify-end mt-8">
          <button onClick={() => setShowAll((v) => !v)} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow transition">
            {showAll ? 'Show Less' : 'More'}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}

const publications = [
  { 
    title: 'Machine Learning in Healthcare', 
    date: '2023-01', 
    desc: 'A study on the application of machine learning in healthcare.', 
    link: '#', 
    img: 'https://placehold.co/200x200/23272f/fff?text=Pub1', 
    paperName: 'ML in Healthcare', 
    conference: 'HealthTech Conference', 
    venue: 'New York', 
    summary: 'This paper explores the use of machine learning algorithms to improve patient outcomes in healthcare settings.' 
  }
];

const certifications = [
  { title: 'TensorFlow Developer', company: 'Google', completedOn: '2023-04', brief: 'Certified in developing and deploying machine learning models using TensorFlow.', link: '#', img: 'https://placehold.co/200x200/23272f/fff?text=Cert1' },
  { title: 'Data Science Professional', company: 'IBM', completedOn: '2022-12', brief: 'Professional certification in data science and analytics.', link: '#', img: 'https://placehold.co/200x200/23272f/fff?text=Cert2' },
  { title: 'AWS Certified ML', company: 'Amazon', completedOn: '2021-09', brief: 'Specialized certification in machine learning on AWS.', link: '#', img: 'https://placehold.co/200x200/23272f/fff?text=Cert3' }
];

function PublicationsCertifications() {
  const [showAllPubs, setShowAllPubs] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % publications.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [publications.length]);

  return (
    <SectionWrapper id="publications" className="py-32 px-4 lg:px-24 w-full max-w-7xl mx-auto text-left">
      <SectionHeading>Publications & Certifications</SectionHeading>
      
      {/* Publications Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-cyan-100 mb-8">Publications</h2>
        <div className="flex flex-col gap-10">
          {publications.map((item, i) => (
            <motion.div key={item.title} className="flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl border border-gray-700 p-7 shadow-lg gap-7" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} viewport={{ amount: 0.2 }}>
              <motion.img
                src={publications[currentIndex].img}
                alt={publications[currentIndex].title}
                className="w-48 h-48 rounded-xl object-cover mb-4 md:mb-0 md:mr-8 border-2 border-cyan-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-200 mb-2">{item.title}</h3>
                <span className="text-gray-400 text-sm mb-2 block">{item.date}</span>
                <p className="text-gray-300 text-justify mb-4">{item.desc}</p>
                <p className="text-gray-300 text-justify mb-2"><strong>Paper:</strong> {item.paperName}</p>
                <p className="text-gray-300 text-justify mb-2"><strong>Conference:</strong> {item.conference}</p>
                <p className="text-gray-300 text-justify mb-2"><strong>Venue:</strong> {item.venue}</p>
                <p className="text-gray-300 text-justify mb-4"><strong>Summary:</strong> {item.summary}</p>
                <a href={item.link} className="text-cyan-400 hover:underline text-base font-semibold" target="_blank" rel="noopener noreferrer">View Publication &rarr;</a>
              </div>
            </motion.div>
          ))}
        </div>
        {publications.length > 1 && (
          <div className="flex justify-end mt-8">
            <button onClick={() => setShowAllPubs((v) => !v)} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow transition">
              {showAllPubs ? 'Show Less' : 'More'}
            </button>
          </div>
        )}
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-2xl font-bold text-cyan-100 mb-8">Certifications</h2>
        <div className="flex flex-col gap-10">
          {certifications.slice(0, showAllCerts ? certifications.length : 3).map((item, i) => (
            <motion.div key={item.title} className="flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl border border-gray-700 p-7 shadow-lg gap-7" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} viewport={{ amount: 0.2 }}>
              <img src={item.img} alt={item.title} className="w-48 h-48 rounded-xl object-cover mb-4 md:mb-0 md:mr-8 border-2 border-cyan-400" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-200 mb-2">{item.title}</h3>
                <span className="text-gray-400 text-sm mb-2 block">{item.completedOn}</span>
                <p className="text-gray-300 text-justify mb-4">{item.brief}</p>
                <p className="text-gray-300 text-justify mb-2"><strong>Company:</strong> {item.company}</p>
                <a href={item.link} className="text-cyan-400 hover:underline text-base font-semibold" target="_blank" rel="noopener noreferrer">View Certificate &rarr;</a>
              </div>
            </motion.div>
          ))}
        </div>
        {certifications.length > 3 && (
          <div className="flex justify-end mt-8">
            <button onClick={() => setShowAllCerts((v) => !v)} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow transition">
              {showAllCerts ? 'Show Less' : 'More'}
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

function BlogSection() {
  const blogs = [
    { title: 'How to Start with Machine Learning', date: '2024-05-01', summary: 'A practical guide for beginners to get started with ML, including resources and project ideas.', link: '#' },
    { title: 'Data Science in the Real World', date: '2024-04-15', summary: 'Lessons learned from real-world data science projects, with tips for aspiring professionals.', link: '#' },
    { title: 'AI Trends in 2024', date: '2024-03-28', summary: 'A look at the latest trends and breakthroughs in AI, and what to expect in the coming year.', link: '#' },
    { title: 'Building a Data Pipeline', date: '2024-02-10', summary: 'A step-by-step guide to building a robust data pipeline using Python and SQL, with best practices and common pitfalls.', link: '#' },
  ];
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);
  return (
    <SectionWrapper id="blog" className="py-32 px-4 lg:px-24 w-full max-w-7xl mx-auto text-left">
      <SectionHeading>Blog & Insights</SectionHeading>
      <div className="grid md:grid-cols-3 gap-10">
        {visibleBlogs.map((blog, i) => (
          <motion.div key={blog.title} className="bg-gray-800 rounded-2xl border border-gray-700 p-7 shadow-lg flex flex-col justify-between" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }} viewport={{ amount: 0.2 }}>
            <h3 className="text-cyan-200 text-xl font-bold mb-2">{blog.title}</h3>
            <span className="text-gray-400 text-xs mb-3">{blog.date}</span>
            <p className="text-gray-300 text-justify mb-4">{blog.summary}</p>
            <a href={blog.link} className="text-cyan-400 hover:underline text-sm font-semibold mt-auto">Read More &rarr;</a>
          </motion.div>
        ))}
      </div>
      {blogs.length > 3 && (
        <div className="flex justify-end mt-8">
          <button onClick={() => setShowAll((v) => !v)} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow transition">
            {showAll ? 'Show Less' : 'More'}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact" className="py-32 px-4 lg:px-24 w-full max-w-7xl mx-auto text-left">
      <SectionHeading>Contact</SectionHeading>
      <div className="flex justify-start gap-10 mt-2">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-4xl text-cyan-400 hover:text-white transition">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/mishra-bytes" target="_blank" rel="noopener noreferrer" className="text-4xl text-cyan-400 hover:text-white transition">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:your.email@example.com" className="text-4xl text-cyan-400 hover:text-white transition">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </SectionWrapper>
  );
}

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalImg, setModalImg] = useState(null);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div className="text-center py-32 text-2xl text-red-400">Project not found.</div>;
  return (
    <div className="py-32 px-4 lg:px-24 w-full max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-8 text-cyan-400 flex items-center gap-2 text-lg hover:no-underline focus:no-underline">
        <i className="fa-solid fa-arrow-left" /> Back to Projects
      </button>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={project.image} alt={project.title} className="w-full rounded-2xl shadow-lg border border-gray-700 mb-4" />
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white text-xl font-semibold mt-2">
            <i className="fab fa-github text-2xl" /> View on GitHub
          </a>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-4">{project.title}</h1>
          <p className="text-gray-200 text-lg mb-4 text-justify">{project.about}</p>
          <div className="mb-4">
            <span className="font-semibold text-cyan-200">Tech Stack: </span>
            <span className="text-gray-200">{project.stack.join(', ')}</span>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <ResultsHeading>Results &amp; Graphs</ResultsHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {project.results.map((res, i) => (
            <div key={i} className="bg-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col items-center cursor-pointer group" onClick={() => setModalImg(res.img)}>
              <img src={res.img} alt={res.caption} className="w-full rounded mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl" />
              <span className="text-gray-200 text-base text-justify">{res.caption}</span>
            </div>
          ))}
        </div>
        {modalImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Full screen graph" className="max-w-3xl max-h-[90vh] rounded-xl shadow-2xl border-4 border-cyan-400" />
          </div>
        )}
      </div>
    </div>
  );
}

function ResumeDownloadButton() {
  return (
    <a href="/assests/Aditya_Mishra_Resume.pdf" download className="inline-block mt-6 px-7 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full shadow-lg transition-colors text-lg">
      <i className="fa-solid fa-download mr-2" /> Download Resume
    </a>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <TechStack />
              <Projects />
              <PublicationsCertifications />
              <BlogSection />
              <Contact />
              <footer className="text-center text-gray-600 py-8 text-sm">&copy; {new Date().getFullYear()} Aditya Mishra. All rights reserved.</footer>
            </>
          } />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 