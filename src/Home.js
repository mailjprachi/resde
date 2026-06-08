
Rajendra Kumar Jain
12:23
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { 
  Play, 
  ArrowRight, 
  Activity, 
  Brain, 
  Clock, 
  CheckCircle2, 
  Menu,
  X,
  CircleX, 
  Linkedin, 
  Mail, 
  Cpu, 
  Heart,
  Network,
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('provider');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Custom Logo Component using the exact image file
  const BrandLogo = ({ className = "" }) => (
    <img 
      src="logo.png" /* Replace 'logo.png' with the actual path to your uploaded logo file */
      alt="ResDe.ai Logo" 
      className={`h-20 w-auto object-contain ${className}`} 
    />
  );

  // Navigation Items Mapping
  const navItems = [
    { name: 'The Problem', id: 'problem' },
    { name: 'Dr. Sneha', id: 'solution' },
    { name: 'Impact', id: 'vision' },
    { name: 'Leadership', id: 'founders' }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f8a21c]/20 selection:text-slate-900 overflow-x-hidden">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Updated Logo */}
          <a href="/">
            <BrandLogo />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                className="text-md font-medium hover:text-[#f8a21c] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f8a21c] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d88d16] transition-all shadow-lg shadow-[#f8a21c]/20"
            >
              Request Demo
            </motion.button>
          </div>

          <button className="md:hidden text-slate-800" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-xl overflow-hidden"
            >
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={`#${item.id}`} 
                  onClick={toggleMenu} 
                  className="text-lg font-medium"
                >
