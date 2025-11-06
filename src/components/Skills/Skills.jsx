// src/components/Skills/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillCategories = {
    Languages: ['Java', 'C', 'JavaScript', 'TypeScript', 'Solidity', 'HTML', 'CSS', 'Python'],
    Frameworks: ['MERN Stack', 'Spring Boot', 'Django', 'Hardhat', 'Truffle', 'React.js', 'Express.js'],
    Tools: ['Git', 'Docker', 'AWS', 'MetaMask', 'Ganache', 'MinIO']
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;