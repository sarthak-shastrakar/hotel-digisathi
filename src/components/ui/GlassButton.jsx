import React from 'react';
import { motion } from 'framer-motion';

export const GlassButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  icon: Icon
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center px-6 py-3 font-sora text-sm font-semibold rounded-lg transition-all duration-300 overflow-hidden cursor-pointer';
  
  const variants = {
    primary: 'text-white border border-brand-cyan/20 bg-brand-cyan/10 hover:border-brand-cyan/50 hover:bg-brand-cyan/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
    gradient: 'text-white bg-gradient-to-r from-brand-cyan to-brand-violet border-none hover:opacity-90 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]',
    outline: 'text-gray-300 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 hover:text-white',
    ghost: 'text-gray-400 hover:text-white bg-transparent hover:bg-white/5 border-none'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {/* Glow highlight effect inside primary/gradient buttons */}
      {(variant === 'primary' || variant === 'gradient') && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
        {children}
      </span>
    </motion.button>
  );
};
