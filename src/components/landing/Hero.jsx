import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, ShieldCheck, Star } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { Badge } from '../ui/Badge';
import { GlowingCard } from '../ui/GlowingCard';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mini earnings graph data for floating hero widget
const miniChartData = [
  { day: 'Mon', revenue: 12000 },
  { day: 'Tue', revenue: 19000 },
  { day: 'Wed', revenue: 15000 },
  { day: 'Thu', revenue: 28000 },
  { day: 'Fri', revenue: 22000 },
  { day: 'Sat', revenue: 35000 },
  { day: 'Sun', revenue: 42000 },
];

export const Hero = () => {
  // Framer Motion spring configs for cinematic smooth movements
  const transitionSpring = { type: 'spring', stiffness: 50, damping: 20 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 z-10">
      
      {/* 1. Cinematic Mesh Gradients & Floating Color Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-cyan/15 rounded-full blur-[100px] opacity-70"
        />
        <motion.div 
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-violet/15 rounded-full blur-[120px] opacity-70"
        />
      </div>

      {/* 2. Floating Cyber Particles (CSS driven) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-brand-cyan"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8]
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* 3. Outer Grid Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40 z-0"></div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Staggered Headlines & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="glow" className="shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              🚀 Smart Tech Built for Indian Hospitality
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1]"
          >
            Digital Assistant for{' '}
            <span className="text-gradient-cyan-violet animate-pulse-slow">
              Modern Hotels
            </span>{' '}
            & Lodges.
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 font-sans text-lg leading-relaxed max-w-2xl lg:max-w-none mb-8"
          >
            Manage guest registrations, online room bookings, billing records, and live earnings analytics in one cinematic interface. Customized for Indian hotel owners and local lodges.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <GlassButton 
              variant="gradient" 
              className="px-8 py-4 justify-center" 
              onClick={() => window.location.href = '#pricing'}
              icon={ArrowRight}
            >
              Start Free Trial
            </GlassButton>
            <GlassButton 
              variant="outline" 
              className="px-8 py-4 justify-center" 
              onClick={() => window.location.href = '#dashboard'}
              icon={Play}
            >
              Watch Video
            </GlassButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center gap-6 text-gray-500 text-xs sm:text-sm pt-6 border-t border-white/5 w-full justify-center lg:justify-start"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Secure Digital Records</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              ))}
              <span className="text-gray-400 ml-1 font-semibold">4.9/5 Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-6 w-full relative group"
        >
          {/* Subtle ambient backglow behind mockup */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-violet/20 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

          {/* Glassmorphic Shell */}
          <GlowingCard 
            glowColor="rgba(6, 182, 212, 0.12)" 
            className="w-full border border-white/10 p-5 rounded-2xl shadow-2xl relative"
          >
            {/* Top Bar (Browser/App control mock) */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="px-3 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-500 font-mono tracking-wider">
                saathi-dashboard-v1.0
              </div>
            </div>

            {/* Dashboard Mock Content */}
            <div className="grid grid-cols-12 gap-4">
              
              {/* Box 1: Real-time Earnings Widget */}
              <div className="col-span-12 sm:col-span-7 bg-black/40 border border-white/5 p-4 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Today's Earnings</span>
                    <h3 className="text-2xl font-bold font-sora text-white mt-0.5">₹42,500</h3>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +15.4%
                  </span>
                </div>
                
                {/* Embedded Recharts AreaChart */}
                <div className="h-28 w-full mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={miniChartData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                      <defs>
                        <linearGradient id="heroChartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="day" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#090d16', 
                          borderColor: 'rgba(255,255,255,0.08)',
                          fontSize: 10,
                          color: '#fff',
                          borderRadius: 4
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#06b6d4" 
                        strokeWidth={2.5}
                        fillOpacity={1} 
                        fill="url(#heroChartGlow)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Box 2: Quick Status Feed (Check-ins / Occupancy) */}
              <div className="col-span-12 sm:col-span-5 flex flex-col gap-4">
                {/* Occupancy card */}
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>Occupied Rooms</span>
                    <span className="font-semibold text-brand-cyan">88%</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-sora">32 / 36</h4>
                  <div className="w-full bg-white/5 h-2 rounded-full mt-2 overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                      className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet"
                    />
                  </div>
                </div>

                {/* Check-ins card */}
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex-1 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Live Check-ins</span>
                    <h4 className="text-lg font-bold text-white mt-0.5">14 Guests</h4>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-brand-violet" />
                  </div>
                </div>
              </div>

            </div>

            {/* Quick action bar inside dashboard preview */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Server Node: Mumbai-1</span>
              </span>
              <span className="text-brand-cyan font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                View Full Panel <ArrowRight className="w-3 h-3" />
              </span>
            </div>

          </GlowingCard>

          {/* Mini overlay decorative badges for high spatial layering depth */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-panel border border-brand-violet/20 rounded-xl px-4 py-2.5 shadow-xl hidden md:flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-brand-violet animate-pulse" />
            <span className="text-xs text-white font-medium">Automatic Invoicing</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-6 glass-panel border border-brand-cyan/20 rounded-xl px-4 py-2.5 shadow-xl hidden md:flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs text-white font-medium">UPI Gateway Integrated</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
