// src/components/Navbar3D/Navbar3D.jsx
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import './Navbar3D.css';

// Import your logo
import logo from '../../assets/logoProtfolio.png';

// Individual Navbar Item Component (3D)
const NavbarItem = ({ item, index, totalItems, active, setActive, scrollToSection }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.06;
    }
  });

  const { scale } = useSpring({
    scale: active === item.name ? 1.15 : 1,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const positionX = (index - (totalItems - 1) / 2) * 1.6;

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
      <a.mesh
        ref={meshRef}
        position={[positionX, 0, 0]}
        scale={scale}
        onPointerEnter={() => setActive(item.name)}
        onPointerLeave={() => setActive(null)}
        onClick={() => scrollToSection(item.section)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.6, 0.38, 0.12]} />
        <meshStandardMaterial
          color={active === item.name ? "#00ff88" : "#0066ff"}
          emissive={active === item.name ? "#00ff88" : "#0066ff"}
          emissiveIntensity={0.28}
          metalness={0.9}
          roughness={0.12}
          transparent
          opacity={0.92}
        />
        <Text
          position={[0, 0, 0.07]}
          fontSize={0.12}
          color="#ffffff"
          anchorX="center"
          anchorY="center"
        >
          {item.name}
        </Text>
      </a.mesh>
    </Float>
  );
};

const Navbar3DContent = () => {
  const [active, setActive] = useState(null);

  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Experience', section: 'experience' },
    { name: 'Contact', section: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <group position={[0, 0, 0]}>
      {navItems.map((item, index) => (
        <NavbarItem
          key={item.name}
          item={item}
          index={index}
          totalItems={navItems.length}
          active={active}
          setActive={setActive}
          scrollToSection={scrollToSection}
        />
      ))}
    </group>
  );
};

const Navbar3DScene = () => {
  return (
    <div className="navbar-3d-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{
          height: '120px',
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: 1,
          pointerEvents: 'none' // ensure canvas does not block UI clicks
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.0} />
        <Navbar3DContent />
      </Canvas>
    </div>
  );
};

const Navbar3D = () => {
  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Experience', section: 'experience' },
    { name: 'Contact', section: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // GitHub Pages compatible resume download
  const handleResumeDownload = () => {
  try {
    // Get the base URL for GitHub Pages
    const baseUrl = window.location.origin;
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    let resumePath;
    
    if (isGitHubPages) {
      // For GitHub Pages deployment with base path
      resumePath = `${baseUrl}/portfolio-web/resume/Prabhakaran-S.pdf`;
    } else {
      // For local development
      resumePath = '/resume/Prabhakaran-S.pdf';
    }
    
    console.log('Resume path:', resumePath); // Debug log
    
    // For GitHub Pages, open in new tab
    window.open(resumePath, '_blank', 'noopener,noreferrer');
    
  } catch (error) {
    console.error('Download failed:', error);
    
    // Final fallback - try different paths
    const fallbackPaths = [
      '/portfolio-web/resume/Prabhakaran-S.pdf',
      '/resume/Prabhakaran-S.pdf',
      './resume/Prabhakaran-S.pdf'
    ];
    
    for (const path of fallbackPaths) {
      try {
        const fallbackLink = document.createElement('a');
        fallbackLink.href = path;
        fallbackLink.download = 'Prabhakaran_FullStack_Developer_Resume.pdf';
        document.body.appendChild(fallbackLink);
        fallbackLink.click();
        document.body.removeChild(fallbackLink);
        console.log('Fallback successful with path:', path);
        break;
      } catch (fallbackError) {
        console.log('Fallback failed for path:', path);
      }
    }
  }
};

  const handleLogoClick = () => {
    scrollToSection('hero'); // Scroll to hero section (home)
    setMenuOpen(false); // Close mobile menu if open
  };

  // Close mobile menu on navigation
  const handleNavClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar3DScene />

      <nav className="navbar-2d">
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
             <img 
              src={logo} 
              alt="Prabhakaran Portfolio Logo" 
              className="logo-image cursor-pointer"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </motion.div>

          {/* Desktop / regular nav */}
          <motion.ul
            className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
              >
                <button
                  onClick={() => handleNavClick(item.section)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}

            {/* Mobile resume button - only visible in mobile menu */}
            {menuOpen && (
              <div className="mobile-resume-btn">
                <button
                  className="resume-download-btn"
                  onClick={handleResumeDownload}
                >
                  <Download size={16} />
                  Resume
                </button>
              </div>
            )}
          </motion.ul>

          {/* Resume button (desktop only) */}
          <motion.div
            className="resume-button-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="resume-download-btn"
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Resume
            </motion.button>
          </motion.div>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar3D;