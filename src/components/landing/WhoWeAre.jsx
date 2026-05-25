import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Sparkles, Building2, Check } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export const WhoWeAre = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative z-10 pt-10"
    >
      <SectionHeader
        tag="WHO WE ARE"
        title="Pioneers In Indian"
        highlightTitle="Hotel Technology"
        subtitle="A highly dedicated team of developers, designers, and hospitality tech experts committed to elevating local businesses."
      />

      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16 mb-16">
        
        {/* Main Pitch Card */}
        <GlowingCard glowColor="rgba(139, 92, 246, 0.1)" className="p-8 border border-white/5 bg-brand-card/20 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <Badge variant="cyan" className="mb-4">⚡ SIMPLICITY & AFFORDABILITY</Badge>
              <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mb-4">
                We Are a Modern Hotel-Tech Platform
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Our main identity is to serve as a bridge. We take complex, powerful enterprise-level PMS logic (Property Management Systems) and package it into a highly visual, simple dashboard that feels as friendly as using WhatsApp.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                By focusing strictly on the specific needs of **small hotels, medium-scale lodges, and highway dhabas/inns**, we exclude bloated parameters and deliver pure operational speed at a fraction of the market cost.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="h-44 w-44 rounded-3xl bg-gradient-to-tr from-brand-cyan to-brand-violet p-0.5 shadow-2xl relative flex items-center justify-center">
                <div className="absolute inset-2 rounded-2xl bg-brand-bg flex flex-col items-center justify-center text-center p-3">
                  <Sparkles className="w-8 h-8 text-brand-cyan mb-2 animate-pulse" />
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Startup Voted</span>
                  <span className="text-sm text-white font-extrabold font-sora mt-0.5">🇮🇳 Best Hotel Tech</span>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>

        {/* 3 Core pillars: Simplicity, Affordability, Speed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Shifting to Digital',
              description: 'We guide hoteliers step-by-step from chaotic manual ledger registers to clean, automated cloud dashboards.',
              icon: Building2,
              glow: 'rgba(6, 182, 212, 0.15)'
            },
            {
              title: 'Focus on Simplicity',
              description: 'We believe technology should fit the user, not the other way around. No special technical training required for staff.',
              icon: Zap,
              glow: 'rgba(139, 92, 246, 0.15)'
            },
            {
              title: 'Affordable SaaS',
              description: 'Enterprise operational power priced fairly for local Indian small business budgets. No hidden monthly licensing fees.',
              icon: ShieldCheck,
              glow: 'rgba(16, 185, 129, 0.15)'
            }
          ].map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <GlowingCard 
                key={index} 
                glowColor={pillar.glow}
                className="p-6 bg-brand-card/25 border border-white/5 hover:border-white/10"
              >
                <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-sora font-extrabold text-lg text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{pillar.description}</p>
              </GlowingCard>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
};
