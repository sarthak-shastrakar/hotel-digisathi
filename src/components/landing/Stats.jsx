import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Activity } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';

export const Stats = () => {
  const statsData = [
    { 
      label: 'Partner Hotels & Lodges', 
      value: '500+', 
      description: 'Active across India',
      icon: Building2,
      color: 'rgba(6, 182, 212, 0.15)' 
    },
    { 
      label: 'Guests Managed digitally', 
      value: '50K+', 
      description: 'Seamless check-ins',
      icon: Users,
      color: 'rgba(139, 92, 246, 0.15)'
    },
    { 
      label: 'States Covered', 
      value: '15+', 
      description: 'From Kashmir to Kerala',
      icon: MapPin,
      color: 'rgba(16, 185, 129, 0.15)'
    },
    { 
      label: 'Platform Uptime', 
      value: '99.9%', 
      description: 'Reliable cloud architecture',
      icon: Activity,
      color: 'rgba(245, 158, 11, 0.15)'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="stats" className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
      {/* Structural ambient light divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div key={index} variants={cardVariants}>
              <GlowingCard 
                glowColor={stat.color} 
                className="p-6 flex flex-col justify-between h-full bg-brand-card/30 border border-white/5 relative group hover:border-white/10 transition-all duration-300"
              >
                {/* Visual Icon Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-brand-cyan transition-colors duration-300" />
                  </div>
                  
                  {/* Subtle pulsing live check point */}
                  {index === 3 && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-sora font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none mb-1.5">
                    {stat.value}
                  </h3>
                  <h4 className="font-sans font-semibold text-xs sm:text-sm text-gray-300 tracking-wide mb-1 uppercase">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                    {stat.description}
                  </p>
                </div>
              </GlowingCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
