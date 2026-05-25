import React from 'react';
import { motion } from 'framer-motion';
import { Building, LayoutGrid, Users2, LineChart } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';

export const HowItWorks = () => {
  const stepsList = [
    {
      step: '01',
      title: 'Register Hotel',
      description: 'Fill in your hotel, lodge, or resort details and submit business information to quickly instantiate your online account.',
      icon: Building,
      glowColor: 'rgba(6, 182, 212, 0.15)'
    },
    {
      step: '02',
      title: 'Add Rooms',
      description: 'Create rooms dynamically. Assign numbers, configure pricing scales, specify amenities, and map check-out defaults.',
      icon: LayoutGrid,
      glowColor: 'rgba(139, 92, 246, 0.15)'
    },
    {
      step: '03',
      title: 'Manage Guests',
      description: 'Execute paperless registration, monitor occupancy levels in real-time, handle room status sweeps, and process billings.',
      icon: Users2,
      glowColor: 'rgba(16, 185, 129, 0.15)'
    },
    {
      step: '04',
      title: 'Track Earnings',
      description: 'Generate high-fidelity reports instantly. Track daily bookings, extract income ledgers, and supervise cash and online flows.',
      icon: LineChart,
      glowColor: 'rgba(245, 158, 11, 0.15)'
    }
  ];

  return (
    <section id="timeline" className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader
        tag="Onboarding Flow"
        title="4 Simple Steps To"
        highlightTitle="Digital Success"
        subtitle="Ditch complicated tech manual setup folders. Our streamlined interface gets you completely digitized within minutes."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Horizontal Connector Line in desktop */}
        <div className="absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-brand-cyan/20 via-brand-violet/20 to-brand-cyan/20 hidden lg:block z-0" />

        {stepsList.map((stepItem, index) => {
          const IconComponent = stepItem.icon;
          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              {/* Animated number bubble */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-16 h-16 rounded-2xl bg-brand-card border border-white/10 flex items-center justify-center font-sora font-extrabold text-xl text-white mb-6 relative group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-violet opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="text-gradient-cyan-violet">{stepItem.step}</span>
              </motion.div>

              <GlowingCard 
                glowColor={stepItem.glowColor}
                className="w-full text-center p-6 bg-brand-card/25 border border-white/5 hover:border-white/10"
              >
                <div className="mx-auto w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-4 text-gray-300 group-hover:text-brand-cyan transition-colors duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-sora font-bold text-lg text-white mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {stepItem.description}
                </p>
              </GlowingCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};
