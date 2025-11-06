// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'PetShop - Blockchain DApp',
      description: 'Blockchain-based pet shop using Truffle, Web3.js, Solidity, and React.js with MetaMask integration',
      tech: ['Truffle', 'Web3.js', 'Solidity', 'React.js', 'MetaMask', 'Ganache'],
      github: 'https://github.com/prabhakaranSK/PetShop',
      category: 'Blockchain',
      image: '/assets/petshop.jpg'
    },
    {
      id: 2,
      title: 'Todo List with Authentication',
      description: 'Full-stack todo application with user authentication built with Spring Boot and Thymeleaf',
      tech: ['Spring Boot', 'Thymeleaf', 'Java', 'MySQL'],
      github: 'https://github.com/prabhakaranSK/TO-DO-SpringBoot',
      category: 'Web Development',
      image: '/assets/todo-spring.jpg'
    },
    {
      id: 3,
      title: 'Face Recognition Attendance',
      description: 'Python-based face recognition system for automated attendance tracking',
      tech: ['Python', 'OpenCV', 'HTML', 'CSS'],
      github: 'https://github.com/prabhakaranSK/FaceRecognition',
      category: 'Machine Learning',
      image: '/assets/face-recognition.jpg'
    },
    {
      id: 4,
      title: 'Studify - Django Web App',
      description: 'Comprehensive Django web application for student management and learning',
      tech: ['Django', 'Python', 'HTML', 'CSS', 'SQLite'],
      github: 'https://github.com/prabhakaranSK/Studify',
      category: 'Web Development',
      image: '/assets/studify.jpg'
    },
    {
      id: 5,
      title: 'AWS S3 Video Storage',
      description: 'Video storage application using MinIO server and Express.js backend',
      tech: ['Express.js', 'MinIO', 'AWS S3', 'HTML', 'CSS'],
      github: 'https://github.com/prabhakaranSK/AWSS3-sample',
      category: 'Cloud Development',
      image: '/assets/aws-s3.jpg'
    },
    {
      id: 6,
      title: 'Todo-Blockchain',
      description: 'Blockchain-based todo application using Hardhat framework and Solidity',
      tech: ['Hardhat', 'Solidity', 'HTML', 'CSS'],
      github: 'https://github.com/prabhakaranSK/ToDo',
      category: 'Blockchain',
      image: '/assets/todo-blockchain.jpg'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        ref={ref}
        className="projects-container"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title">
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    {project.title.split(' ')[0]}
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={20} />
                      </a>
                      <button className="project-link">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;