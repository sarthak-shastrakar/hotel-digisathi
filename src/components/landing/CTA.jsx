import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { Badge } from '../ui/Badge';

export const CTA = ({ onNavigate }) => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      
      {/* Curved glowing neon background */}
      <div className="absolute inset-0 max-w-6xl mx-auto rounded-3xl border border-white/10 overflow-hidden bg-brand-card/30 backdrop-blur-2xl">
        {/* Background Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

        {/* Dynamic backglow sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 rounded-full blur-[100px] opacity-70 pointer-events-none" />
        
        {/* Outer light sources */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-cyan/60 rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-cyan/60 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-cyan/60 rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-cyan/60 rounded-br-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center py-10 px-6">
        <Badge variant="cyan" className="mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Zap className="w-3.5 h-3.5 mr-1 text-brand-cyan" /> UNIFIED DIGITAL COMMAND
        </Badge>

        <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight max-w-3xl">
          Start Managing Your Hotel <br className="hidden sm:inline" />
          <span className="text-gradient-cyan-violet animate-pulse-slow">Smarter Today</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
          Join hundreds of progressive hotel owners across India. Replace physical ledger registers with automated high-speed cloud operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <GlassButton 
            variant="gradient" 
            className="px-8 py-4 justify-center"
            onClick={() => onNavigate('contact')}
            icon={ArrowRight}
          >
            Get Free Demo
          </GlassButton>
          <GlassButton 
            variant="outline" 
            className="px-8 py-4 justify-center"
            onClick={() => onNavigate('contact')}
            icon={MessageSquare}
          >
            Contact Sales
          </GlassButton>
        </div>

        {/* Small trust parameters */}
        <div className="mt-8 pt-6 border-t border-white/5 w-full max-w-lg flex flex-wrap justify-center items-center gap-6 text-[11px] text-gray-500 font-semibold">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>NO CREDIT CARD REQUIRED</span>
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-gray-700 hidden sm:block"></div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SETUP COMPLETED IN 5 MINUTES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
