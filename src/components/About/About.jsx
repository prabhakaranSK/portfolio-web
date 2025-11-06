// src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div variants={itemVariants} className="about-text">
            <motion.h3 className="about-greeting">
              Hello! I'm <span className="highlight">Prabhakaran</span>
            </motion.h3>
            
            <motion.p className="about-description">
              A passionate <span className="highlight">Full Stack Web Developer</span> and 
              <span className="highlight"> Blockchain Developer</span> with 8 months of professional 
              experience at Ideas New Info Tech, specializing in MERN Stack and Spring Boot development.
            </motion.p>
            
            <motion.p className="about-description">
              Currently pursuing my <span className="highlight">MCA at M. Kumarasamy College of Engineering</span> 
              (2024-present), building upon my strong foundation from BCA at National College of Art and Science.
            </motion.p>
            
            <motion.p className="about-description">
              I thrive on creating innovative digital solutions that blend cutting-edge web technologies 
              with blockchain capabilities. My expertise spans across modern JavaScript frameworks, 
              backend development, and smart contract programming.
            </motion.p>

            <motion.div variants={itemVariants} className="about-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-visual">
            <div className="visual-container">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
              <div className="main-visual">
                <div className="code-block">
                  <div className="code-line">const developer = &#123;</div>
                  <div className="code-line">&nbsp;&nbsp;name: "Prabhakaran",</div>
                  <div className="code-line">&nbsp;&nbsp;role: "Full Stack Developer",</div>
                  <div className="code-line">&nbsp;&nbsp;specialization: "Blockchain",</div>
                  <div className="code-line">&nbsp;&nbsp;passion: "Innovation"</div>
                  <div className="code-line">&#125;;</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;