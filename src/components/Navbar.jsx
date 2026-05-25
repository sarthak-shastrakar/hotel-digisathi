import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Activity, LogIn } from 'lucide-react';
import { GlassButton } from './ui/GlassButton';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track page scroll to dynamically apply professional backdrop-blurs
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Who We Are', id: 'who-we-are' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setIsOpen(false);
    // Scroll to top cleanly when shifting pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-bg/75 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-300">
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => handleLinkClick('home')} 
              className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-violet p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-500">
                <div className="flex items-center justify-center w-full h-full bg-brand-bg rounded-xl">
                  <Activity className="w-5 h-5 text-brand-cyan group-hover:rotate-12 transition-transform duration-500" />
                </div>
                {/* Active pulse tag */}
                <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <span className="font-sora font-extrabold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-violet transition-all duration-300">
                Digi-Hotel<span className="text-brand-cyan">Saathi</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links with active-state colors and premium underbars */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative font-sans text-sm font-medium transition-colors duration-300 px-1 py-1 group/item cursor-pointer focus:outline-none ${
                    isActive ? 'text-brand-cyan font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Active/Hover border accent */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-violet transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover/item:w-full'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* CTA & Login buttons */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-xs text-brand-cyan font-semibold border border-brand-cyan/20 px-3 py-1.5 rounded-lg bg-brand-cyan/5">
              🇮🇳 Specially Built for India
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/5 bg-brand-card/95 backdrop-blur-2xl absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded-xl text-base font-medium transition-all focus:outline-none ${
                      isActive ? 'text-brand-cyan bg-brand-cyan/5 font-semibold border-l-2 border-brand-cyan' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <span className="text-center text-xs text-brand-cyan font-semibold border border-brand-cyan/25 py-2.5 rounded-xl bg-brand-cyan/5">
                  🇮🇳 Made for Indian Hoteliers & Lodges
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
