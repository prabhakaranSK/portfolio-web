// src/components/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/prabhakaranSK',
      label: 'GitHub',
      color: '#ffffff'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/prabhakarans07/',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:sprabhakaran950@gmail.com',
      label: 'Email',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Experience', section: 'experience' },
    { name: 'Contact', section: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer-section">
      <motion.div
        ref={ref}
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            variants={itemVariants}
          >
            <h3 className="brand-name">Prabhakaran</h3>
            <p className="brand-tagline">
              Full Stack & Blockchain Developer
            </p>
            <p className="brand-description">
              Crafting digital experiences with cutting-edge technologies 
              and innovative solutions.
            </p>
            
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            variants={itemVariants}
          >
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            variants={itemVariants}
          >
            <h4 className="contact-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:sprabhakaran950@gmail.com" className="contact-link">
                  sprabhakaran950@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <Linkedin size={16} />
                <a 
                  href="https://www.linkedin.com/in/prabhakarans07/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="contact-item">
                <Github size={16} />
                <a 
                  href="https://github.com/prabhakaranSK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills Highlight */}
          <motion.div 
            className="footer-skills"
            variants={itemVariants}
          >
            <h4 className="skills-title">Technologies</h4>
            <div className="skills-grid">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Solidity</span>
              <span className="skill-tag">Blockchain</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">MERN Stack</span>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <div className="footer-divider"></div>
          
          <div className="bottom-content">
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} Prabhakaran. Made with{' '}
                <Heart size={14} className="heart-icon" />{' '}
                using React & Three.js
              </p>
            </div>
            
            <div className="footer-actions">
              <button 
                onClick={scrollToTop}
                className="back-to-top"
                aria-label="Back to top"
              >
                <ExternalLink size={16} />
                Back to Top
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;