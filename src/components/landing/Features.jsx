import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Layout, Calendar, TrendingUp, FolderGit, BarChart3 } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';

export const Features = () => {
  const featuresList = [
    {
      title: 'Guest Registration',
      description: 'Digitize check-ins instantly. Secure digital guest registers, ID verification, and quick forms that eliminate paper logs.',
      icon: UserCheck,
      color: 'rgba(6, 182, 212, 0.15)'
    },
    {
      title: 'Room Management',
      description: 'Track room statuses dynamically. Instantly check occupied, vacant, dirty, and under-maintenance rooms at a glance.',
      icon: Layout,
      color: 'rgba(139, 92, 246, 0.15)'
    },
    {
      title: 'Booking Management',
      description: 'Streamline reservations from multiple channels. Control arrivals, departures, check-outs, and booking details effortlessly.',
      icon: Calendar,
      color: 'rgba(16, 185, 129, 0.15)'
    },
    {
      title: 'Revenue Tracking',
      description: 'Monitor financial performance live. Log earnings, handle invoices, track tax records, and generate GST-compliant billing.',
      icon: TrendingUp,
      color: 'rgba(245, 158, 11, 0.15)'
    },
    {
      title: 'Digital Records',
      description: 'Retrieve secure, cloud-saved operational records instantly. Search guest histories, booking ledgers, and audit files anytime.',
      icon: FolderGit,
      color: 'rgba(236, 72, 153, 0.15)'
    },
    {
      title: 'Hotel Dashboard',
      description: 'Unified operational control room. View room capacity percentages, real-time incomes, and pending task lists in a single screen.',
      icon: BarChart3,
      color: 'rgba(99, 102, 241, 0.15)'
    }
  ];

  return (
    <section id="features" className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader
        tag="Core Utilities"
        title="Everything You Need"
        highlightTitle="To Go Digital"
        subtitle="Custom built modules to replace slow manual ledger books with high-speed automated cloud management."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feat, index) => {
          const IconComponent = feat.icon;
          return (
            <GlowingCard 
              key={index} 
              glowColor={feat.color}
              className="flex flex-col gap-4 border border-white/5 bg-brand-card/20 hover:border-white/10 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:text-brand-cyan group-hover:border-brand-cyan/20 transition-all duration-300">
                <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="font-sora text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </GlowingCard>
          );
        })}
      </div>
    </section>
  );
};
