import React from 'react';
import { Star, Quote } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { SectionHeader } from '../ui/SectionHeader';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Rajesh Sharma',
      role: 'Owner, Sharma Lodge',
      location: 'Manali, Himachal Pradesh',
      text: 'Digi-Hotel-Saathi ne hamare register maintenance ka jhanjhat bilkul khatam kar diya! Check-ins itne fast aur transparent ho gaye hain, guest bhi happy aur main bhi tension-free.',
      rating: 5,
      glowColor: 'rgba(6, 182, 212, 0.12)'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Manager, Heritage Residency',
      location: 'Pune, Maharashtra',
      text: 'Earlier, managing room availability across platforms was a nightmare. Now, our staff updates occupied and vacant rooms dynamically from a single dashboard. Amazing work!',
      rating: 5,
      glowColor: 'rgba(139, 92, 246, 0.12)'
    },
    {
      name: 'Gurpreet Singh',
      role: 'Managing Director, Singh Palace',
      location: 'Amritsar, Punjab',
      text: 'Weekly earnings and expense tracking is so simple now. Automatic invoices and net banking integrations have modernized our entire billing operation. GST records are perfectly sorted.',
      rating: 5,
      glowColor: 'rgba(16, 185, 129, 0.12)'
    }
  ];

  return (
    <section id="testimonials" className="relative py-12 px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader
        tag="Success Stories"
        title="Loved By Hoteliers"
        highlightTitle="Across India"
        subtitle="Read real operational feedback from small lodge operators and hotel owners who transformed their operations."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <GlowingCard 
            key={index}
            glowColor={rev.glowColor}
            className="flex flex-col justify-between p-6 bg-brand-card/20 border border-white/5 relative group hover:border-white/10"
          >
            <div>
              {/* Star Rating Layout */}
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(rev.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>

              {/* Quotation text */}
              <div className="relative">
                <Quote className="absolute -top-3.5 -left-3.5 w-8 h-8 text-white/5 pointer-events-none" />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic relative z-10">
                  "{rev.text}"
                </p>
              </div>
            </div>

            {/* User Metadata */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <h4 className="font-sora font-semibold text-sm text-white">{rev.name}</h4>
                <p className="text-xs text-gray-400">{rev.role}</p>
                <span className="text-[10px] text-brand-cyan font-medium block mt-0.5">{rev.location}</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-cyan/25 to-brand-violet/25 flex items-center justify-center font-sora font-extrabold text-sm text-white border border-white/10 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                {rev.name.charAt(0)}
              </div>
            </div>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
};
