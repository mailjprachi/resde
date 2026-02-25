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
                  {item.name}
                </a>
              ))}
              <button className="bg-[#f8a21c] text-white w-full py-3 rounded-lg font-semibold">Request Demo</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#f8a21c]/10 to-transparent -z-10 rounded-bl-[100px]"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8a21c]/10 border border-[#f8a21c]/20 rounded-full text-[#b57614] text-sm font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#f8a21c] animate-pulse"></span>
              Empathetic Intelligence
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Restore the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8a21c] to-orange-600">Human Focus</span> <br/>
              in Healthcare.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Empower your practice with <strong>Dr. Sneha</strong>-the intelligent ecosystem that transforms fragmented data into clarity, giving you effortless command of the care journey.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a 
                href="#solution"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 group"
              >
                Meet Dr. Sneha
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#vision"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-[#f8a21c]/30 hover:bg-[#f8a21c]/5 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-slate-900" />
                Watch the Vision
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Visual - The "Invisible Layer" Concept */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* Background Circle */}
            <div className="absolute w-[400px] h-[400px] bg-[#f8a21c]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            {/* Main Image Concept (Represented by div structure) */}
            {/* <div className="relative w-full max-w-md aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-white"> */}
            <div className="relative w-full max-w-md aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-white pt-20 px-4">
              <img 
                src="/hero-sec.png" 
                alt="Female Doctor and Patient Connection" 
                className="w-full h-full object-contain object-top opacity-90 -translate-y-4 rounded-2xl"
              />
              
              {/* Dr. Sneha Overlay UI - Glassmorphism */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-8 right-[-20px] left-8 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f8a21c] to-orange-500 flex items-center justify-center text-white">
                    <Activity size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Dr. Sneha</h3>
                    <p className="text-xs text-slate-500">Intelligent Clinical Partner</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f8a21c] mt-1.5"></div>
                    <p className="text-sm text-slate-700">Patient's BP trend is elevated (150/95). Hypertension protocol drafted.</p>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                    <CheckCircle2 size={12} className="text-[#f8a21c]" />
                    <span>Cross-referenced with medication history.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* The Problem Section */}
      <section id="problem" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Healthcare is disconnected.<br/>You shouldn't have to be.</h2>
            <p className="text-lg text-slate-600">
              Cognitive overload. Fragmented data silos. Buried insights. Today’s healthcare software adds friction where there should be flow. It’s time for technology that gets out of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* The "Chaos" */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              whileHover={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-4 text-red-500 font-semibold">
                <X size={20} /> Current Reality
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-32 bg-slate-100 rounded w-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
                  Fragmented EHR Screens
                </div>
                <div className="flex gap-2">
                  <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded">Alert Fatigue</span>
                  <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded">Manual Entry</span>
                </div>
              </div>
            </motion.div>

            {/* The "Clarity" - ResDe.ai */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#f8a21c] to-orange-700 p-8 rounded-3xl shadow-2xl text-white transform md:scale-105 relative z-10"
            >
              <div className="flex items-center gap-2 mb-4 text-orange-100 font-semibold">
                <CheckCircle2 size={20} /> ResDe.ai Future
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Unified Clarity</h3>
                <p className="text-orange-50 text-sm leading-relaxed">
                  One view. One truth. Dr. Sneha automates the documentation and surfaces the right data exactly when needed, so you can focus on the patient.
                </p>
                <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#f8a21c]"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#f8a21c]"></div>
                  </div>
                  <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Zero Friction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dr. Sneha Section */}
      <section id="solution" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
             {/* Chat Interface Mockup */}
             <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 max-w-sm mx-auto relative z-10">
                <div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f8a21c]/10 flex items-center justify-center">
                      <Brain size={20} className="text-[#f8a21c]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Dr. Sneha</h4>
                      <p className="text-xs text-green-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {/* User Msg */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-end"
                  >
                    <div className="bg-slate-100 text-slate-600 px-4 py-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]">
                      Patient's glucose is 180 post-prandial.
                    </div>
                  </motion.div>
                  
                  {/* Dr Sneha Response */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#f8a21c]/10 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-sm border border-[#f8a21c]/20">
                      <p className="font-medium text-[#b57614] mb-1">Observation Noted.</p>
                      This is 20% above their baseline. I've flagged this for the nutrition review and drafted a dosage adjustment for your approval.
                    </div>
                  </motion.div>
                  
                  {/* User Msg */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1 }}
                    className="flex justify-end"
                  >
                    <div className="bg-slate-100 text-slate-600 px-4 py-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]">
                      Thanks, show me the draft.
                    </div>
                  </motion.div>
                </div>

                <div className="relative">
                  <div className="h-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center px-4 text-slate-400 text-sm">
                    Type a message...
                  </div>
                  <div className="absolute right-2 top-2 w-8 h-8 bg-[#f8a21c] rounded-lg flex items-center justify-center text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>
             </div>
             
             {/* Decorative Background for Phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#f8a21c]/20 to-blue-50 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="order-1 lg:order-2 space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-slate-900">
              Meet Dr. Sneha.<br/>
              Your Intelligent Clinical Partner.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Dr. Sneha isn’t just an algorithm; she is a proactive resident in your pocket. She bridges the gap between patient history, real-time data, and clinical protocols.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f8a21c]/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#f8a21c]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Precision Timing</h4>
                  <p className="text-slate-600 text-sm">She provides the right medical solutions exactly when and where needed within the provider's workflow.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f8a21c]/10 flex items-center justify-center shrink-0">
                  <Heart className="text-[#f8a21c]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Empathetic Guidance</h4>
                  <p className="text-slate-600 text-sm">She guides users through critical clinical moments, offering empathetic support rather than robotic alerts.</p>
                </div>
              </motion.div>
            </div>

            <motion.blockquote variants={fadeInUp} className="border-l-4 border-[#f8a21c] pl-6 italic text-slate-700 mt-8">
              "I handle the complexity so you can handle the care." <br/>
              <span className="text-[#f8a21c] font-semibold not-italic text-sm mt-2 block">— Dr. Sneha</span>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars (Added ID="vision" for navigation) */}
      <section id="vision" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">The ResDe.ai Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built on four pillars of innovation designed to restore human agency.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                icon: Brain, 
                title: "Intuitive Care Mastery", 
                desc: "Easy to learn & use. Enables providers to perform complex tasks with minimal training." 
              },
              { 
                icon: Clock, 
                title: "Context-Aware Intelligence", 
                desc: "Provides the right solutions exactly when needed, reducing search time to zero." 
              },
              { 
                icon: Cpu, 
                title: "Intelligent Efficiency", 
                desc: "Automates repetitive tasks and minimizes decision points to lower cognitive load." 
              },
              { 
                icon: Network, 
                title: "Unified Health Ecosystem", 
                desc: "Seamlessly connects diverse data sources without forcing a context switch." 
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                variants={fadeInScale}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-[#f8a21c] hover:bg-[#f8a21c] transition-colors group cursor-default"
              >
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <pillar.icon size={24} className="text-[#f8a21c] group-hover:text-[#f8a21c]" />
                </div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-white">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-white/90">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Tabs */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl font-bold mb-12"
          >
            Value for Every Stakeholder
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="bg-white rounded-3xl p-2 shadow-sm inline-flex mb-12"
          >
            <button 
              onClick={() => setActiveTab('provider')}
              className={`px-8 py-3 rounded-2xl text-md font-bold transition-all ${activeTab === 'provider' ? 'bg-[#f8a21c] text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              For Clinicians
            </button>
            <button 
              onClick={() => setActiveTab('patient')}
              className={`px-8 py-3 rounded-2xl text-md font-bold transition-all ${activeTab === 'patient' ? 'bg-[#f8a21c] text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              For Patients
            </button>
          </motion.div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 transition-all duration-500">
            <AnimatePresence mode="wait">
              {activeTab === 'provider' ? (
                <motion.div 
                  key="provider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-900">Reclaim Your Time.</h3>
                  <p className="text-lg text-slate-600">Dr. Sneha acts as your "second brain," catching errors and surfacing trends so you can focus on the patient in front of you.</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="font-bold text-[#b57614] text-xl">2 hrs</p>
                      <p className="text-xs text-slate-500">Saved daily</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="font-bold text-[#b57614] text-xl">Zero</p>
                      <p className="text-xs text-slate-500">Missed Interactions</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="patient"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-900">Own Your Journey.</h3>
                  <p className="text-lg text-slate-600">Feel confident and in control. Dr. Sneha guides you through your health plan with empathy, ensuring you never feel alone.</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="font-bold text-[#b57614] text-xl">24/7</p>
                      <p className="text-xs text-slate-500">Guidance</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="font-bold text-[#b57614] text-xl">100%</p>
                      <p className="text-xs text-slate-500">Data Clarity</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="founders" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Visionaries Bridging the Gap</h2>
            <p className="text-slate-600">Medicine meets Machine.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Prachi */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative mb-6">
                 {/* Stylized Avatar Placeholder for Prachi */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl overflow-hidden flex items-end justify-center">
                   <div className="w-48 h-48 bg-slate-200 rounded-full mb-8 relative border-4 border-white shadow-lg overflow-hidden">
                      {/* Generic professional silhouette if no image */}
                      <img src="/prachi-jain-profilepic.jpeg" alt="Prachi Jain" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors rounded-2xl"></div>
                </div>
              </div>
              {/* <h3 className="text-xl font-bold text-slate-900">Prachi Jain</h3> */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">Prachi Jain</h3>
                <a 
                  href="https://www.linkedin.com/in/prachi-jain-b6925010/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-blue-600 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56V24H.22V8zm7.4 0h4.37v2.17h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.05 5.48 7V24h-4.55v-6.74c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.58 1.75-2.58 3.56V24H7.62V8z"/>
                  </svg>
                </a>
              </div>
              <p className="text-[#f8a21c] font-medium text-sm mb-4">Founder & Design Strategist</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                {/* The "Architect of Empathy." Prachi ensures technology serves the human user first, designing for the "unthinking moment" where care flows naturally. */}
                  With over <span className='font-extrabold'>20 years of experience</span> driving design excellence for global industry leaders like <span className='font-extrabold'>Google, Philips Healthcare, etc</span>, Prachi brings a rare blend of deep technical research and strategic vision to the startup world.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                  An alumnus of <span className='font-extrabold'>IIT Kanpur (M.Des, 2005)</span>, she operates on the principle of <span className='font-extrabold'>"Empathy as a Strategy"</span>. She believes that transformative design begins with uncovering deep-seated user pain points that often go unarticulated, then solving them to deliver both tangible business value and improved human lives.
              </p>
              <p className="text-slate-400 italic text-sm">"We didn't build ResDe.ai to replace doctors, We built it to handle the complexity so you can handle the care."</p>
            </motion.div>

            {/* Vishal */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative mb-6">
                {/* Stylized Avatar Placeholder for Vishal */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl overflow-hidden flex items-end justify-center">
                    <div className="w-48 h-48 bg-slate-200 rounded-full mb-8 relative border-4 border-white shadow-lg overflow-hidden">
                       <img src="/vishal-garg-profilepic.jpeg" alt="Vishal Garg" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors rounded-2xl"></div>
                </div>
              </div>
              {/* <h3 className="text-xl font-bold text-slate-900">Vishal Garg</h3> */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">Vishal Garg</h3>
                <a 
                  href="https://www.linkedin.com/in/vishal-garg-0976848b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-blue-600 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56V24H.22V8zm7.4 0h4.37v2.17h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.05 5.48 7V24h-4.55v-6.74c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.58 1.75-2.58 3.56V24H7.62V8z"/>
                  </svg>
                </a>
                </div>
              <p className="text-[#f8a21c] font-medium text-sm mb-4">Co-Founder & Principal Engineer</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                Vishal is a software engineer with over a <span className='font-extrabold'>decade of experience</span> building and scaling customer-facing products. He has led and owned critical systems operating at scale.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
                He holds a <span className='font-extrabold'>Master’s degree in Computer Science</span> from the <span className='font-extrabold'>Rochester Institute of Technology, New York</span>. Vishal approaches engineering with a strong bias toward <span className='font-extrabold'>ownership & customer impact</span> focusing on solving real problems, making pragmatic technical decisions, and building systems that are reliable, scalable, and easy to evolve.
              </p>
              <p className="text-slate-400 italic text-sm">"In healthcare, 'fast' isn't enough. It has to be right. We engineer for certainty."</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            {/* Footer Logo */}
            <BrandLogo className="mb-6 scale-90 origin-left" />
            <p className="max-w-xs text-sm leading-relaxed mb-6">
              Simply Connected. Intelligently Human.<br/>
              Restoring the heartbeat of healthcare through unified intelligence.
            </p>
            <div className="flex gap-4">
              <a href="/" className="hover:text-[#f8a21c] transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:hello@resde.ai" className="hover:text-[#f8a21c] transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solution" className="hover:text-[#f8a21c] transition-colors">Dr. Sneha AI</a></li>
              <li><a href="/" className="hover:text-[#f8a21c] transition-colors">Provider Solutions</a></li>
              <li><a href="/" className="hover:text-[#f8a21c] transition-colors">Patient App</a></li>
              <li><a href="/" className="hover:text-[#f8a21c] transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-[#f8a21c] transition-colors">Our Story</a></li>
              <li><a href="/" className="hover:text-[#f8a21c] transition-colors">Careers</a></li>
            <li>
                <Link to="/contact" className="hover:text-[#f8a21c] transition-colors">
                    Contact
                </Link>
            </li>
              <li><a href="/" className="hover:text-[#f8a21c] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 ResDe.ai. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;