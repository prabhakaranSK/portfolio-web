// src/components/Experience/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      id: 1,
      title: "Full Stack Web Developer Intern",
      company: "Ideas New Info Tech",
      location: "Remote",
      period: "8 Months",
      duration: "2023 - 2024",
      description: [
        "Developed and maintained full-stack web applications using MERN stack and Spring Boot",
        "Implemented responsive user interfaces with modern React.js components",
        "Built RESTful APIs and integrated with various databases",
        "Collaborated with team members using Agile development methodologies",
        "Participated in code reviews and contributed to technical documentation"
      ],
      technologies: ["MERN Stack", "Spring Boot", "React.js", "Node.js", "MongoDB", "MySQL", "REST APIs"],
      type: "work",
      current: false
    },
    {
      id: 2,
      title: "Master of Computer Applications (MCA)",
      company: "M. Kumarasamy College of Engineering",
      location: "Karur, Tamil Nadu",
      period: "Present",
      duration: "2024 - Present",
      description: [
        "Pursuing advanced studies in computer applications and software engineering",
        "Specializing in web technologies, cloud computing, and blockchain development",
        "Participating in research projects and technical workshops"
      ],
      technologies: ["Advanced Algorithms", "Cloud Computing", "Blockchain", "Data Structures"],
      type: "education",
      current: true
    },
    {
      id: 3,
      title: "Bachelor of Computer Applications (BCA)",
      company: "National College of Art and Science",
      location: "Coimbatore, Tamil Nadu",
      period: "Completed",
      duration: "2021 - 2024",
      description: [
        "Graduated with comprehensive knowledge in computer applications",
        "Completed projects in web development, database management, and software engineering",
        "Developed strong foundation in programming fundamentals and problem-solving"
      ],
      technologies: ["Java", "C", "Python", "HTML/CSS", "JavaScript", "DBMS"],
      type: "education",
      current: false
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Blockchain Development & Solidity",
      issuer: "Self-Taught",
      date: "2024",
      skills: ["Solidity", "Hardhat", "Truffle", "Web3.js", "Smart Contracts"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Ideas New Info Tech",
      date: "2023",
      skills: ["MERN Stack", "Spring Boot", "REST APIs", "Database Design"]
    },
    {
      id: 3,
      title: "Cloud Technologies",
      issuer: "Self-Taught",
      date: "2024",
      skills: ["AWS", "Docker", "MinIO", "Cloud Storage"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <motion.div
        ref={ref}
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Experience & Education
        </motion.h2>
        
        <motion.p variants={itemVariants} className="experience-subtitle">
          My professional journey and academic background
        </motion.p>

        <div className="experience-content">
          {/* Main Timeline */}
          <motion.div variants={itemVariants} className="timeline-section">
            <h3 className="timeline-title">Career Timeline</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`timeline-item ${exp.type} ${exp.current ? 'current' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {index < experiences.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-position">{exp.title}</h4>
                      <span className={`timeline-badge ${exp.type}`}>
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>
                    
                    <div className="timeline-company">
                      <h5 className="company-name">{exp.company}</h5>
                      <div className="company-details">
                        <div className="detail-item">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="detail-item">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="detail-item period">
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="timeline-description">
                      {exp.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>

                    <div className="timeline-technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Sidebar */}
          <motion.div variants={itemVariants} className="certifications-section">
            <h3 className="certifications-title">Certifications & Skills</h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="certification-header">
                    <h4 className="certification-name">{cert.title}</h4>
                    <ExternalLink size={16} className="certification-icon" />
                  </div>
                  
                  <div className="certification-details">
                    <span className="certification-issuer">{cert.issuer}</span>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  
                  <div className="certification-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="skills-summary">
              <h4 className="summary-title">Technical Proficiencies</h4>
              
              <div className="skill-category">
                <h5>Frontend Development</h5>
                <div className="skill-items">
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>HTML/CSS</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h5>Backend Development</h5>
                <div className="skill-items">
                  <span>Node.js</span>
                  <span>Spring Boot</span>
                  <span>Express.js</span>
                  <span>Django</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h5>Blockchain & Tools</h5>
                <div className="skill-items">
                  <span>Solidity</span>
                  <span>Hardhat</span>
                  <span>Truffle</span>
                  <span>Web3.js</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;