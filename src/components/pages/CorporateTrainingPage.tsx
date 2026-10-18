import React from 'react';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Users, Target, Award, Calendar } from 'lucide-react';
import { Program, LeadSegment } from '../../types';

interface CorporateTrainingPageProps {
  programs: Program[];
  onNavigate: (route: string, param?: string) => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const CorporateTrainingPage: React.FC<CorporateTrainingPageProps> = ({
  programs,
  onNavigate,
  onOpenInquiry,
}) => {
  const corporatePrograms = programs.filter(p => p.audience === 'Corporate & Teams (B2B)' || p.category === 'Industry Training');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#111111] via-[#1c1c1c] to-[#111111] text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-[#D13A28] rounded-full text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          <span>B2B Corporate & Industry Training</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] max-w-3xl leading-tight">
          Strengthen Sales Execution, Leadership Culture & Team Results
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
          Mastermind Alliance Coaching partners with companies to deliver targeted workshops, executive coaching, and industry sales blueprints tailored to your team's specific market challenges.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => onOpenInquiry('B2B', 'Corporate Training Proposal')}
            className="px-6 py-3.5 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors cursor-pointer shadow-md shadow-[#D13A28]/20"
          >
            Request Corporate Proposal
          </button>
          <button
            onClick={() => onNavigate('catalogue')}
            className="px-6 py-3.5 bg-neutral-800 text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Browse All Curriculum
          </button>
        </div>
      </div>

      {/* Priority Industry Blueprints */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Industry Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Specialized Industry Sales Training
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-2xl">
            Generic sales advice fails in specialized sectors. We teach field-tested buyer psychology, trust discovery, and closing rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blueprint 1: Real Estate */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#D13A28] px-2.5 py-1 rounded">
                Property & Realty
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Real Estate Sales Mastery
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Lead qualification, buyer trust, high-impact site visits, handling completion concerns, and closing high-ticket deals without heavy discounting.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Site-visit experiential choreography</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Objection drills: Pricing & documentation</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('program-detail', 'real-estate-sales-mastery')}
              className="w-full mt-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
            >
              View Blueprint Details →
            </button>
          </div>

          {/* Blueprint 2: Insurance */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                Financial Protection
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Insurance Sales Training
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Respectful needs analysis, ethical risk protection communication, overcoming skeptical hesitancy, and long-term policy retention. (No financial guarantees).
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Consultative family needs discovery</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>High-retention ethical advisory habits</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('program-detail', 'insurance-sales-training')}
              className="w-full mt-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
            >
              View Blueprint Details →
            </button>
          </div>

          {/* Blueprint 3: Network Marketing */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-1 rounded">
                Direct Selling
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Network Marketing Training
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ethical prospecting, pressure-free invitations, relationship building, team onboarding, and sustained leadership habits. (No income guarantees).
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-600 pt-2">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Protecting personal relationships</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Consistent 30-day team onboarding plan</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('program-detail', 'network-marketing-training')}
              className="w-full mt-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 text-xs font-bold rounded-xl border border-neutral-200 transition-colors"
            >
              View Blueprint Details →
            </button>
          </div>
        </div>
      </section>

      {/* Leadership & Executive Programs */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-[#D13A28] uppercase tracking-wider">
            Leadership Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            Core & Executive Leadership Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Core Leadership Program</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Equip supervisors and first-time managers with the transition from individual execution to collective enablement. Covers self-awareness, radical ownership, active delegation, clear communication, and goal alignment.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs text-neutral-500">Duration: 4 Weeks or 2-Day Corporate Workshop</span>
              <button
                onClick={() => onNavigate('program-detail', 'core-leadership-program')}
                className="text-xs font-bold text-[#D13A28] hover:underline"
              >
                View Details →
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Leadership Development Program</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Designed for senior leaders and business heads. Focuses on coaching frameworks (GROW model), constructive conflict resolution, high-trust psychological safety, and driving execution without micromanagement.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
              <span className="text-xs text-neutral-500">Duration: 6 Weeks Modular / Executive Offsite</span>
              <button
                onClick={() => onNavigate('program-detail', 'leadership-development-program')}
                className="text-xs font-bold text-[#D13A28] hover:underline"
              >
                View Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Intelligence for Organizations */}
      <section className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D13A28] bg-red-950/80 px-2.5 py-0.5 rounded border border-red-800">
              Core Subject • Organization-Wide Training
            </span>
            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif]">
              Emotional Intelligence: The Human Advantage in a Changing World
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Equip your frontline employees, managers, and executives with self-awareness, active listening, psychological safety, and stress self-regulation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('emotional-intelligence')}
            className="px-6 py-3 bg-[#D13A28] hover:bg-[#b82f20] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0 shadow-md shadow-[#D13A28]/25"
          >
            Explore EI Curriculum →
          </button>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="bg-neutral-50 p-8 sm:p-10 rounded-3xl border border-neutral-200/80 space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
            Flexible Delivery Formats
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Programs are scheduled according to your team's operational calendar.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-center">
            <div className="font-bold text-sm text-neutral-900">Keynote</div>
            <div className="text-[11px] text-neutral-500 mt-1">45 to 90 mins</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-center">
            <div className="font-bold text-sm text-neutral-900">Half-Day</div>
            <div className="text-[11px] text-neutral-500 mt-1">3.5 hours focused</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-center">
            <div className="font-bold text-sm text-neutral-900">Full-Day</div>
            <div className="text-[11px] text-neutral-500 mt-1">7 hours intensive</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-center">
            <div className="font-bold text-sm text-neutral-900">Multi-Day</div>
            <div className="text-[11px] text-neutral-500 mt-1">Modular sprints</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-center">
            <div className="font-bold text-sm text-neutral-900">Offsite Retreat</div>
            <div className="text-[11px] text-neutral-500 mt-1">Residential leadership</div>
          </div>
        </div>
      </section>

      {/* Inquiry Call to Action */}
      <div className="bg-[#111111] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">Request a Tailored Corporate Proposal</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Let us know your team size, target competencies, and preferred workshop dates.
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry('B2B', 'Corporate Training Proposal')}
          className="px-6 py-3 bg-[#D13A28] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b82f20] transition-colors shrink-0"
        >
          Request Proposal Now
        </button>
      </div>
    </div>
  );
};
