import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const GlowingCard = ({ children, className = '', glowColor = 'rgba(6, 182, 212, 0.15)' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`group relative rounded-xl border border-white/5 bg-brand-card/40 backdrop-blur-xl p-6 transition-all duration-500 hover:border-white/10 ${className}`}
    >
      {/* Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* Cyber Corner Accents for premium futuristic tech look */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg"></div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
