import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, Smartphone, SmartphoneNfc, ArrowRight } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { GlassButton } from '../ui/GlassButton';

export const TwoApps = () => {
  return (
    <section id="apps" className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader
        tag="Dual App Ecosystem"
        title="Double Efficiency With"
        highlightTitle="Two Specialized Apps"
        subtitle="We provide hotel owners with deep operations management tools and guests with rapid, friction-free booking interfaces."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Hotel Owner App (Primary Focus - 7/12 width) */}
        <div className="lg:col-span-7 flex">
          <GlowingCard 
            glowColor="rgba(6, 182, 212, 0.15)"
            className="w-full border border-brand-cyan/20 bg-brand-card/45 p-8 flex flex-col justify-between rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Smartphone className="w-64 h-64 text-brand-cyan" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <Badge variant="cyan">⭐ MAIN PRODUCT</Badge>
                <div className="flex gap-1.5 items-center text-brand-cyan text-sm font-semibold">
                  <Smartphone className="w-4 h-4" /> Mobil + Web Panel
                </div>
              </div>

              <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mb-4">
                Hotel Owner App
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                The ultimate command center engineered exclusively for hoteliers, lodge operators, and staff members. Handles heavy backend operations with zero complexity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Live Analytical Earnings Dashboard',
                  'Instant Room Status Tracking',
                  'Secure Digital Guest Ledger',
                  'Operational Task Reminders'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Compatible with Android, iOS, Chrome & Safari</span>
              <GlassButton variant="gradient" icon={ArrowRight}>Explore Owner Features</GlassButton>
            </div>
          </GlowingCard>
        </div>

        {/* RIGHT COLUMN: Guest Booking App (Secondary Focus - 5/12 width) */}
        <div className="lg:col-span-5 flex">
          <GlowingCard 
            glowColor="rgba(139, 92, 246, 0.1)"
            className="w-full border border-white/5 bg-brand-card/25 p-8 flex flex-col justify-between rounded-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <Badge variant="primary">⚡ SUPPORT WIDGET</Badge>
                <div className="flex gap-1.5 items-center text-brand-violet text-sm font-semibold">
                  <SmartphoneNfc className="w-4 h-4" /> Guest QR Portal
                </div>
              </div>

              <h3 className="font-sora font-extrabold text-2xl text-white mb-4">
                Guest Booking App
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A simple, lightning-fast QR-based entry webapp designed for your guests. No heavy downloads required. Guests scan a counter QR, book rooms, and fill checkout papers instantly.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Scan Counter QR for Instant Check-ins',
                  'Seamless UPI & NetBanking Payments',
                  'Instant Digital Booking Receipts',
                  'Pre-fill Registration Details Online'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-400">
                    <CheckCircle className="w-4.5 h-4.5 text-brand-violet shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">QR-Powered Web Engine</span>
              <GlassButton variant="outline">Learn More</GlassButton>
            </div>
          </GlowingCard>
        </div>

      </div>
    </section>
  );
};
