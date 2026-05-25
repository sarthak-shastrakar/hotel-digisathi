import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ 
  tag, 
  title, 
  highlightTitle, 
  subtitle, 
  className = '', 
  align = 'center' 
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const alignmentStyles = {
    center: 'text-center items-center justify-center',
    left: 'text-left items-start justify-start',
    right: 'text-right items-end justify-end'
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`flex flex-col max-w-3xl mx-auto mb-16 ${alignmentStyles[align] || alignmentStyles.center} ${className}`}
    >
      {tag && (
        <motion.span 
          variants={itemVariants} 
          className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          {tag}
        </motion.span>
      )}
      
      <motion.h2 
        variants={itemVariants} 
        className="font-sora text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
      >
        {title}{' '}
        {highlightTitle && (
          <span className="text-gradient-cyan-violet animate-pulse-slow">
            {highlightTitle}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p 
          variants={itemVariants} 
          className="text-gray-400 font-sans text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
