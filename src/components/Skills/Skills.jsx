// src/components/Skills/Skills.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiPython, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiSpringboot, SiDjango, SiGit, SiDocker
} from 'react-icons/si';
import { FaJava, FaEthereum, FaAws } from 'react-icons/fa';


const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef(null);

  // Text-based fallback icons
  const TextIcon = ({ children, className = "" }) => (
    <div className={`text-icon ${className}`}>
      {children}
    </div>
  );

  const skillCategories = {
    "Languages": [
      { name: 'Java', icon: <FaJava />, level: 90 },
      { name: 'C', icon: <TextIcon>C</TextIcon>, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
      { name: 'Solidity', icon: <FaEthereum />, level: 80 },
      { name: 'HTML', icon: <SiHtml5 />, level: 95 },
      { name: 'CSS', icon: <SiCss3 />, level: 90 },
      { name: 'Python', icon: <SiPython />, level: 85 }
    ],
    "Frameworks": [
      { name: 'React.js', icon: <SiReact />, level: 92 },
      { name: 'Express.js', icon: <SiExpress />, level: 88 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 82 },
      { name: 'Django', icon: <SiDjango />, level: 80 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
      { name: 'Hardhat', icon: <FaEthereum />, level: 78 },
      { name: 'Truffle', icon: <FaEthereum />, level: 75 }
    ],
    "Tools": [
      { name: 'Git', icon: <SiGit />, level: 90 },
      { name: 'Docker', icon: <SiDocker />, level: 80 },
      { name: 'AWS', icon: <FaAws />, level: 75 }, // Using FaAws instead
      { name: 'MetaMask', icon: <FaEthereum />, level: 85 },
      { name: 'Ganache', icon: <FaEthereum />, level: 80 },
      { name: 'MinIO', icon: <FaAws />, level: 70 } // Using FaAws for MinIO as well
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: {
      y: 60,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const categoryVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 30
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="section-header" variants={titleVariants}>
          <motion.h1 className="section-title">
            SKILLS
          </motion.h1>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Technologies & Tools I Master
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={categoryVariants}
            >
              <h2 className="category-title">{category}</h2>
              <div className="skills-container-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-card ${activeSkill === skill.name ? 'active' : ''}`}
                    variants={skillVariants}
                    whileHover="hover"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    custom={index}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>

                    <div className="skill-progress">
                      <motion.div
                        className="progress-bar"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                      />
                      <span className="skill-level">{skill.level}%</span>
                    </div>

                    <AnimatePresence>
                      {activeSkill === skill.name && (
                        <motion.div
                          className="skill-hover-effect"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="background-elements">
          <motion.div
            className="bg-shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="bg-shape shape-2"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="bg-shape shape-3"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;