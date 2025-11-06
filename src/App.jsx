// src/App.jsx
import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar3D from './components/Navbar3D/Navbar3D';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './styles/global.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Navbar3D />
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;