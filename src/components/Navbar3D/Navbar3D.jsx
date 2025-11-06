// src/components/Navbar3D/Navbar3D.jsx
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Navbar3D.css';

// Individual Navbar Item Component
const NavbarItem = ({ item, index, totalItems, active, setActive, scrollToSection }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
    }
  });

  const { scale } = useSpring({
    scale: active === item.name ? 1.3 : 1,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const positionX = (index - (totalItems - 1) / 2) * 1.8;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
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
        <boxGeometry args={[1.6, 0.4, 0.15]} />
        <meshStandardMaterial 
          color={active === item.name ? "#00ff88" : "#0066ff"}
          emissive={active === item.name ? "#00ff88" : "#0066ff"}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
        <Text
          position={[0, 0, 0.1]}
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          zIndex: '1',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fixed Resume Download Function
  const handleResumeDownload = () => {
    try {
      // Use forward slashes for web paths (not backslashes)
      const resumeUrl = '/resume/Prabhakaran-S.pdf';
      
      // Method 1: Download with proper filename
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Prabhakaran_FullStack_Blockchain_Developer.pdf';
      link.setAttribute('type', 'application/pdf');
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download failed, opening in new tab:', error);
      // Fallback: Open in new tab if download fails
      window.open('/resume/Prabhakaran-S.pdf', '_blank', 'noopener,noreferrer');
    }
  };

  // Alternative: Simple version that always works
  // const handleResumeDownload = () => {
  //   window.open('/resume/Prabhakaran-S.pdf', '_blank');
  // };

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
            <span className="logo-text">Prabhakaran</span>
          </motion.div>
          
          <motion.ul 
            className="nav-links"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <button 
                  onClick={() => scrollToSection(item.section)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>

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
        </div>
      </nav>
    </>
  );
};

export default Navbar3D;