import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Loader2, 
  Globe, 
  MessageSquare,
  Linkedin,
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Healthcare Provider',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call for your localhost environment
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', role: 'Healthcare Provider', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f8a21c]/20">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-1/3 h-[80vh] bg-gradient-to-bl from-[#f8a21c]/5 to-transparent rounded-bl-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-1/4 h-[50vh] bg-gradient-to-tr from-slate-50 to-transparent rounded-tr-[100px]"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Brand Context & Info */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 bg-[#f8a21c]/10 border border-[#f8a21c]/20 rounded-full text-[#b57614] text-xs font-bold uppercase tracking-widest mb-6">
                Get in Touch
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Let’s start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8a21c] to-orange-600">
                  conversation.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mt-6 leading-relaxed max-w-md">
                Whether you’re a provider looking to reclaim your time or an investor curious about the future of health, we’re ready to connect.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#f8a21c]/30 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#f8a21c] group-hover:bg-[#f8a21c] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500 text-sm mb-2">Inquiries & Partnerships</p>
                  <a href="mailto:hello@resde.ai" className="text-[#f8a21c] font-bold hover:underline">hello@resde.ai</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#f8a21c]/30 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#f8a21c] group-hover:bg-[#f8a21c] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-500 text-sm">New Delhi, India</p>
                  {/* <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <Clock size={12} /> Global Launch Diwali 2026
                  </p> */}
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Follow our journey</p>
              <a href="/" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#f8a21c] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="/" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#f8a21c] hover:text-white transition-all">
                <Globe size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-100">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 max-w-xs mx-auto mb-8">
                    Dr. Sneha has received your note. We'll be in touch before you can say 'Radical Simplicity'.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="bg-[#f8a21c] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#f8a21c]/20 hover:scale-105 transition-transform"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#f8a21c]/10 flex items-center justify-center text-[#f8a21c]">
                      <MessageSquare size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Direct Inquiries</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Prachi Jain" 
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#f8a21c] focus:ring-4 focus:ring-[#f8a21c]/10 outline-none transition-all placeholder:text-slate-300" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@clinic.com" 
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#f8a21c] focus:ring-4 focus:ring-[#f8a21c]/10 outline-none transition-all placeholder:text-slate-300" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">I am a...</label>
                      <select 
                        id="role" 
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#f8a21c] outline-none transition-all text-slate-600 appearance-none cursor-pointer"
                      >
                        <option>Healthcare Provider</option>
                        <option>Patient</option>
                        <option>Investor</option>
                        <option>Technology Partner</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        required 
                        id="message" 
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can ResDe.ai help you?" 
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#f8a21c] focus:ring-4 focus:ring-[#f8a21c]/10 outline-none transition-all resize-none placeholder:text-slate-300"
                      ></textarea>
                    </div>

                    <motion.button 
                      type="submit" 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === 'loading'}
                      className="w-full bg-[#f8a21c] text-white font-bold py-5 rounded-2xl hover:bg-[#d88d16] transition-all shadow-xl shadow-[#f8a21c]/20 flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {formState === 'loading' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight size={20} />
                        </>
                      )}
                    </motion.button>
                  </form>
                  <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                    We value your privacy. Your data is handled with Intelligent Precision.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;