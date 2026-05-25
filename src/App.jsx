import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/landing/Hero';
import { Stats } from './components/landing/Stats';
import { Features } from './components/landing/Features';
import { TwoApps } from './components/landing/TwoApps';
import { HowItWorks } from './components/landing/HowItWorks';
import { Testimonials } from './components/landing/Testimonials';
import { CTA } from './components/landing/CTA';
import { AboutUs } from './components/landing/AboutUs';
import { WhoWeAre } from './components/landing/WhoWeAre';
import { ContactUs } from './components/landing/ContactUs';
import { Mail, Phone, MapPin, Activity, ShieldCheck, Heart } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Animation variants for smooth multi-page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-20"
          >
            {/* HERO SECTION */}
            <Hero />

            {/* STATS SECTION */}
            <Stats />

            <hr className="border-white/5 mx-4 sm:mx-6 lg:mx-8" />

            {/* FEATURES SECTION */}
            <Features />

            <hr className="border-white/5 mx-4 sm:mx-6 lg:mx-8" />

            {/* TWO APPS SHOWCASE */}
            <TwoApps />

            <hr className="border-white/5 mx-4 sm:mx-6 lg:mx-8" />

            {/* HOW IT WORKS timeline */}
            <HowItWorks />

            <hr className="border-white/5 mx-4 sm:mx-6 lg:mx-8" />

            {/* TESTIMONIALS */}
            <Testimonials />

            <hr className="border-white/5 mx-4 sm:mx-6 lg:mx-8" />

            {/* FINAL CALL TO ACTION */}
            <CTA onNavigate={setCurrentPage} />
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-16 pb-12"
          >
            <AboutUs />
          </motion.div>
        );

      case 'who-we-are':
        return (
          <motion.div
            key="who-we-are"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-16 pb-12"
          >
            <WhoWeAre />
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-16 pb-12"
          >
            <ContactUs />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-gray-100 selection:bg-brand-cyan selection:text-brand-bg overflow-x-hidden">
      
      {/* 1. Global Futuristic Background Gradients & Grid Lines */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0"></div>
      
      {/* Dynamic Glow Points in background (ambient lightning) */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* Sticky glass Navbar */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Structural Transition Wrapper */}
      <main className="relative z-10 pt-20 max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-80px)]">
        
        {/* Page Router with fluid exits and entry springs */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            {renderCurrentPage()}
          </AnimatePresence>
        </div>

        {/* Premium, startup-like 4-column Footer */}
        <footer className="mt-24 border-t border-white/5 bg-black/30 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            
            {/* Column 1: Branding and identity */}
            <div className="flex flex-col gap-4">
              <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-violet p-0.5 shadow-md">
                  <Activity className="w-4 h-4 text-brand-cyan" />
                </div>
                <span className="font-sora font-extrabold text-lg text-white">
                  Digi-Hotel<span className="text-brand-cyan">Saathi</span>
                </span>
              </button>
              
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Smart hotel management platform custom engineered to help small lodge operators and boutique resorts across India digitize registrations, rooms, bookings, and cash analytics.
              </p>
              
              <div className="text-[11px] text-brand-cyan font-bold tracking-widest uppercase mt-2">
                🇮🇳 SPECIPALLY BUILT FOR INDIA
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-sora font-semibold text-xs text-white uppercase tracking-widest mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                {[
                  { name: 'Home Panel', id: 'home' },
                  { name: 'About Mission', id: 'about' },
                  { name: 'Who We Are', id: 'who-we-are' },
                  { name: 'Contact & Support', id: 'contact' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => { setCurrentPage(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Support coordinates */}
            <div>
              <h4 className="font-sora font-semibold text-xs text-white uppercase tracking-widest mb-4">Contact Info</h4>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-500">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <a href="mailto:support@digihotelsaathi.in" className="hover:text-white transition-colors">support@digihotelsaathi.in</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>1, Naka No 2, Bhilgaon, Kampthi Road, Nagpur, Maharashtra</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter or commitment note */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sora font-semibold text-xs text-white uppercase tracking-widest mb-1">Our Platform Mission</h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                We believe in simplifying the technology landscape for local independent small businesses. No heavy downloads, complex trainings, or bloated pricing metrics.
              </p>
              
              <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Secure Digital Records</span>
              </div>
            </div>

          </div>

          {/* Sub footer copyrights */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>© 2026 Digi-Hotel-Saathi. All operational rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> for Indian Hoteliers.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
