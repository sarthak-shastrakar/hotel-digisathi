import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldAlert, Cpu } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export const AboutUs = () => {
  const values = [
    {
      title: 'Our Mission',
      description: 'To simplify and automate hotel management operations for independent hospitality businesses across India, ensuring high efficiency at affordable pricing.',
      icon: Target,
      color: 'rgba(6, 182, 212, 0.15)'
    },
    {
      title: 'Our Vision',
      description: 'To become the leading digital infrastructure backbone for mid-scale and small-scale hotels, lodges, and resorts across the Indian subcontinent.',
      icon: Compass,
      color: 'rgba(139, 92, 246, 0.15)'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative z-10 pt-10"
    >
      <SectionHeader
        tag="ABOUT US"
        title="Helping Indian Hospitality"
        highlightTitle="Go Digital"
        subtitle="Bridging the technological gap for local hoteliers, lodge operators, and boutique resorts with cutting-edge operations management."
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4">
        {/* Core Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-sora font-extrabold text-2xl text-white mb-4">
              Why Digi-Hotel-Saathi Exists
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              India has thousands of small and medium hospitality businesses, lodges, and highway motels. For decades, they have relied on heavy, physical paper ledgers to log check-ins, record room availability, and balance books. 
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Modern PMS systems are built for massive 5-star international chains with complicated settings, heavy enterprise pricing, and hard onboarding. We built **Digi-Hotel-Saathi** to solve this. It is a highly simple, affordable SaaS package that can be operated seamlessly by any staff member in under 5 minutes.
            </p>

            <div className="flex gap-2.5">
              <Badge variant="cyan">🇮🇳 LOCAL PRODUCT</Badge>
              <Badge variant="glow">⚡ CLOUD INTEGRATED</Badge>
            </div>
          </div>

          <GlowingCard glowColor="rgba(6, 182, 212, 0.08)">
            <h4 className="font-sora font-bold text-white text-lg mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-cyan" /> Traditional vs Digital Platform
            </h4>
            <div className="space-y-4 font-sans text-sm text-gray-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500 font-medium">Physical registers</span>
                <span className="text-rose-400 font-semibold">Messy & Insecure</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500 font-medium">Manual cash ledger logs</span>
                <span className="text-rose-400 font-semibold">Prone to errors</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2 flex-wrap">
                <span className="text-gray-500 font-medium">Platform availability tracking</span>
                <span className="text-rose-400 font-semibold">Constant double-booking risks</span>
              </div>
              <div className="flex justify-between text-brand-cyan font-semibold pt-2">
                <span>Digi-Hotel-Saathi Operations</span>
                <span>Automated & Cloud Secured</span>
              </div>
            </div>
          </GlowingCard>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <GlowingCard 
                key={idx} 
                glowColor={v.color}
                className="p-8 border border-white/5 bg-brand-card/20 rounded-2xl"
              >
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:text-brand-cyan group-hover:border-brand-cyan/20 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-sora text-xl font-bold text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </GlowingCard>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
