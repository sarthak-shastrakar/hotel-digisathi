import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldAlert, Sparkles, Twitter, Github, Linkedin } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassButton } from '../ui/GlassButton';

export const ContactUs = () => {
  const [form, setForm] = useState({ name: '', phone: '', hotel: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setError('Please fill in Name, Phone Number, and your message!');
      return;
    }
    setError('');
    setSubmitted(true);
    setForm({ name: '', phone: '', hotel: '', message: '' });
    
    // Auto reset submission alert after 5s
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative z-10 pt-10 px-4"
    >
      <SectionHeader
        tag="CONTACT US"
        title="Get In Touch With Our"
        highlightTitle="Operations Team"
        subtitle="Request a live screen share demo, ask about setup packages, or connect with our customer care representatives."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        {/* LEFT COLUMN: Info, Socials & Map Placeholder (5/12 width) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <GlowingCard glowColor="rgba(6, 182, 212, 0.12)" className="p-6 bg-brand-card/25 border border-white/5 flex flex-col gap-5">
            <h3 className="font-sora font-extrabold text-xl text-white mb-2">Connect Directly</h3>
            
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-4 text-gray-300 hover:text-brand-cyan transition-colors group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 transition-colors">
                  <Phone className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block uppercase tracking-wider">CALL US (IN)</span>
                  <span className="text-sm font-semibold">+91 98765 43210</span>
                </div>
              </a>

              <a href="mailto:support@digihotelsaathi.in" className="flex items-center gap-4 text-gray-300 hover:text-brand-cyan transition-colors group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 transition-colors">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block uppercase tracking-wider">EMAIL SUPPORT</span>
                  <span className="text-sm font-semibold">support@digihotelsaathi.in</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block uppercase tracking-wider">HEAD OFFICE</span>
                  <span className="text-sm font-semibold">1, Naka No 2, Bhilgaon, Kampthi Road, Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>
          </GlowingCard>

          {/* Futuristic Map Placeholder */}
          <GlowingCard glowColor="rgba(139, 92, 246, 0.1)" className="p-6 flex-1 flex flex-col justify-between relative bg-brand-card/20 border border-white/5 rounded-2xl min-h-[220px]">
            <div className="absolute inset-0 cyber-grid opacity-20 rounded-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-brand-violet/5 rounded-2xl blur-xl opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center p-4">
              <MapPin className="w-8 h-8 text-brand-cyan mb-2 animate-bounce" />
              <h4 className="font-sora font-semibold text-white text-sm mb-1">Nagpur Operations</h4>
              <p className="text-[10px] text-gray-500 max-w-xs leading-relaxed uppercase tracking-wider">
                Interactive Google Maps Node - Location Loaded Successfully
              </p>
            </div>
            
            <div className="relative z-10 pt-3 border-t border-white/5 text-center text-[10px] text-brand-cyan font-bold uppercase tracking-widest">
              📍 Click to View Directions
            </div>
          </GlowingCard>
        </div>

        {/* RIGHT COLUMN: Interactive Feedback Form (7/12 width) */}
        <div className="lg:col-span-7">
          <GlowingCard glowColor="rgba(6, 182, 212, 0.15)" className="p-8 bg-brand-card/30 border border-white/10 rounded-2xl">
            <h3 className="font-sora font-extrabold text-xl text-white mb-6">Request Callback / Demo</h3>

            {/* Error notifications */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3 rounded-lg text-xs font-semibold flex items-center gap-2 mb-6"
                >
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {submitted && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm font-semibold flex items-center gap-3 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <span className="block font-bold">Demo Request Received!</span>
                    <span className="text-xs text-emerald-500/80 font-normal">Our setup engineer will call you back on your number shortly.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name *</label>
                  <input 
                    type="text" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Hotel / Lodge Name</label>
                <input 
                  type="text" 
                  value={form.hotel}
                  onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                  placeholder="e.g. Sharma Lodge" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message *</label>
                <textarea 
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your room capacity and operations..." 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                />
              </div>

              <div className="pt-3">
                <GlassButton type="submit" variant="gradient" className="w-full py-4 justify-center" icon={Send}>
                  Submit Demo Request
                </GlassButton>
              </div>
            </form>
          </GlowingCard>
        </div>

      </div>
    </motion.div>
  );
};
