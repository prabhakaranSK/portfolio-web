// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Floating geometric shapes for background
  const FloatingShapes = () => {
    return (
      <>
        {/* Cube */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[-3, 1, -2]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial 
              color="#00ff88" 
              transparent 
              opacity={0.1}
              wireframe
            />
          </mesh>
        </Float>

        {/* Sphere */}
        <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
          <mesh position={[3, -1, -3]}>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshStandardMaterial 
              color="#0066ff" 
              transparent 
              opacity={0.1}
              wireframe
            />
          </mesh>
        </Float>

        {/* Torus */}
        <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
          <mesh position={[0, 2, -4]}>
            <torusGeometry args={[1, 0.3, 16, 32]} />
            <meshStandardMaterial 
              color="#ff0088" 
              transparent 
              opacity={0.1}
              wireframe
            />
          </mesh>
        </Float>

        {/* Cone */}
        <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.2}>
          <mesh position={[4, -2, -1]}>
            <coneGeometry args={[0.7, 1.2, 16]} />
            <meshStandardMaterial 
              color="#00ff88" 
              transparent 
              opacity={0.1}
              wireframe
            />
          </mesh>
        </Float>
      </>
    );
  };

  return (
    <section id="hero" className="hero-section">
      {/* Animated Gradient Background */}
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
        <div className="gradient-circle circle-4"></div>
      </div>

      {/* Simple 3D Elements */}
      <div className="hero-canvas">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Prabhakaran
        </motion.h1>
        <motion.h2 variants={itemVariants} className="hero-subtitle">
          Full Stack & Blockchain Developer
        </motion.h2>
        <motion.p variants={itemVariants} className="hero-description">
          Crafting digital experiences with cutting-edge technologies including 
          MERN Stack, Spring Boot, and Blockchain development
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.button 
            className="btn-primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button 
            className="btn-secondary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;