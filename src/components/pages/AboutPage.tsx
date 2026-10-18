import React from 'react';
import { MapPin } from 'lucide-react';
import { SiteSettings, LeadSegment } from '../../types';
import { FounderPortrait } from '../common/FounderPortrait';

interface AboutPageProps {
  settings: SiteSettings;
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <span>About Mastermind Alliance Coaching</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Practical Development, Grounded Transformation.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
          Mastermind Alliance Coaching (MAC) was founded to replace superficial motivational noise with structured capability building, continuous guided practice, and ethical execution.
        </p>
      </div>

      {/* Founder Biography (Strict Adherence to Section 2 & 13) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <FounderPortrait size="lg" showBadge={true} />
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
                Founder & Mentor
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
                Deepak Verma
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D13A28]" />
                <span>Based in Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Core Mission Quote Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] text-white border-l-4 border-[#D13A28] shadow-sm my-2">
              <p className="text-sm sm:text-base font-bold italic text-neutral-100 font-['Plus_Jakarta_Sans',sans-serif]">
                “I want to empower the YUVA Power of our Country Spiritually.”
              </p>
              <span className="block mt-1 text-[11px] font-bold uppercase tracking-wider text-[#D13A28]">
                — Deepak Verma, Core Life Vision & Mission
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Deepak Verma is the founder and principal mentor behind Mastermind Alliance Coaching. At the heart of Deepak's life mission is an unwavering dedication: <strong className="text-neutral-900 font-semibold">“I want to empower the YUVA Power of our Country Spiritually.”</strong> He believes that when the youth of India combine inner spiritual groundedness and mental calm with rigorous modern vocational skills, they become unstoppable forces of positive nation-building.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Recognizing that lasting change cannot happen in isolated workshops without ongoing daily structure, Deepak developed an educational philosophy anchored in clear frameworks, deliberate roleplay drills, spiritual self-mastery, and peer accountability.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Deepak is particularly passionate about Emotional Intelligence, teaching its practical relevance to personal effectiveness, sales professionals, employees, managers, and organizational leaders. His programs serve individual learners seeking self-mastery, corporate sales organizations looking to upgrade closing rates and client trust, and public institutions aiming to enhance citizen communication and workplace dignity.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="border-t border-neutral-100 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900">1. Action Precedes Motivation</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Waiting to feel like doing hard tasks leads to delay. We teach behavioral activation and friction elimination.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900">2. Ethical Consultative Selling</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              High-pressure tactics alienate buyers. High-trust discovery questioning turns salespeople into indispensable advisors.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-neutral-900">3. The Mastermind Principle</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Shared accountability and peer alliance create the psychological friction needed to sustain long-term discipline.
            </p>
          </div>
        </div>
      </div>

      {/* Cross-Cutting Upskilling & Reskilling Vision */}
      <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Unifying Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Upskilling & Reskilling for a Changing Economy
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Whether preparing for high-stakes property consultations, managing a newly promoted team, or overcoming personal procrastination, our programs are engineered around modern cognitive upskilling—giving professionals resilient capabilities that withstand automation and industry shifts.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('catalogue')}
            className="px-6 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors"
          >
            Explore Course Offerings
          </button>
          <button
            onClick={() => onOpenInquiry('General')}
            className="px-6 py-3 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};
