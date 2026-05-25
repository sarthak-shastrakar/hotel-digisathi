import React from 'react';
import { motion } from 'framer-motion';

export const Badge = ({ children, className = '', variant = 'primary' }) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border backdrop-blur-md transition-all duration-300';
  
  const variants = {
    primary: 'bg-brand-violet/10 text-brand-violet border-brand-violet/20 hover:border-brand-violet/40 hover:bg-brand-violet/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]',
    cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 hover:border-brand-cyan/40 hover:bg-brand-cyan/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]',
    glow: 'bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 text-white border-white/10 hover:border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current animate-pulse"></span>
      {children}
    </motion.span>
  );
};
