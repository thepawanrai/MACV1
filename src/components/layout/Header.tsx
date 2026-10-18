import React, { useState } from 'react';
import { MACLogo } from '../common/MACLogo';
import { User, Shield, BookOpen, Menu, X, ChevronDown, Sparkles, PhoneCall, LogIn, ArrowRight } from 'lucide-react';
import { User as UserType, LeadSegment } from '../../types';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string, param?: string) => void;
  currentUser: UserType | null;
  onOpenAuth: () => void;
  onOpenInquiry: (segment?: LeadSegment, title?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  currentUser,
  onOpenAuth,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);

  const handleNav = (route: string, param?: string) => {
    onNavigate(route, param);
    setMobileMenuOpen(false);
    setCorporateDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#111111] text-white py-2 px-4 text-xs font-medium border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#D13A28] text-white tracking-wide uppercase">
              Notice
            </span>
            <span className="text-neutral-300">
              Upcoming: <span className="text-white font-semibold">Sales Master</span> offline cohort (Oct 2026) & <span className="text-white font-semibold">Life Master</span> flagship program.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px] text-neutral-400">
            <button
              onClick={() => onOpenInquiry('Keynote', 'Keynote & Speaking Inquiry')}
              className="text-[#D13A28] hover:text-red-400 font-semibold cursor-pointer"
            >
              Invite Deepak Verma as Speaker →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-22 lg:h-24">
          {/* Logo */}
          <div
            onClick={() => handleNav('home')}
            className="cursor-pointer transition-transform hover:opacity-95 py-1"
          >
            <MACLogo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-700">
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'home' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('catalogue')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'catalogue' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              All Programs
            </button>

            <button
              onClick={() => handleNav('emotional-intelligence')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'emotional-intelligence' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Emotional Intelligence
            </button>

            {/* Corporate & Industry Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleNav('corporate')}
                onMouseEnter={() => setCorporateDropdownOpen(true)}
                className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${
                  currentRoute === 'corporate' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
                }`}
              >
                <span>Corporate & Industry</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 hidden group-hover:block animate-fade-in">
                <button
                  onClick={() => handleNav('corporate')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>Corporate Overview</span>
                  <span className="text-[10px] text-[#D13A28] font-bold">B2B</span>
                </button>
                <div className="border-t border-neutral-100 my-1" />
                <button
                  onClick={() => handleNav('program-detail', 'real-estate-sales-mastery')}
                  className="w-full text-left px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Real Estate Sales Mastery
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'insurance-sales-training')}
                  className="w-full text-left px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Insurance Sales Training
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'network-marketing-training')}
                  className="w-full text-left px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Network Marketing Training
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'core-leadership-program')}
                  className="w-full text-left px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Core Leadership Program
                </button>
                <button
                  onClick={() => handleNav('program-detail', 'leadership-development-program')}
                  className="w-full text-left px-4 py-2 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                >
                  Leadership Development Program
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNav('institutional')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'institutional' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Institutional (B2G)
            </button>

            <button
              onClick={() => handleNav('keynotes')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'keynotes' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Keynotes
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'about' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              About Deepak Verma
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`transition-colors cursor-pointer ${
                currentRoute === 'contact' ? 'text-[#D13A28]' : 'hover:text-[#D13A28]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Consultation CTA */}
            <button
              onClick={() => onOpenInquiry('B2B', 'Corporate Training Proposal')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D13A28]" />
              <span>Request Proposal</span>
            </button>

            {/* User Session / Switcher */}
            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-neutral-200">
                {currentUser.role === 'admin' ? (
                  <button
                    onClick={() => handleNav('admin')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#111111] text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
                  >
                    <Shield className="w-3.5 h-3.5 text-[#D13A28]" />
                    <span>Admin Panel</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleNav('learner')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#D13A28] text-white rounded-xl text-xs font-bold hover:bg-[#b82f20] transition-all cursor-pointer shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>My Learning</span>
                  </button>
                )}

                <button
                  onClick={onOpenAuth}
                  title={`Signed in as ${currentUser.name} (${currentUser.role}). Click to switch role.`}
                  className="flex items-center gap-2 px-2.5 py-1.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl text-xs text-neutral-700 transition-colors cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-[10px]">
                    {currentUser.name.charAt(0)}
                  </span>
                  <span className="font-semibold max-w-[90px] truncate">{currentUser.name}</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In / Demo</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {currentUser && (
              <button
                onClick={() => handleNav(currentUser.role === 'admin' ? 'admin' : 'learner')}
                className="px-2.5 py-1.5 bg-[#D13A28] text-white text-[11px] font-bold rounded-lg"
              >
                {currentUser.role === 'admin' ? 'Admin' : 'Dashboard'}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-5 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-neutral-800">
            <button
              onClick={() => handleNav('home')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('catalogue')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              All Programs & Courses
            </button>
            <button
              onClick={() => handleNav('emotional-intelligence')}
              className="text-left py-2 border-b border-neutral-100 text-[#D13A28] font-bold"
            >
              Emotional Intelligence (Core Subject)
            </button>
            <button
              onClick={() => handleNav('corporate')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              Corporate & Industry Training (B2B)
            </button>
            <button
              onClick={() => handleNav('institutional')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              Institutional Training (B2G)
            </button>
            <button
              onClick={() => handleNav('keynotes')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              Keynotes & Speaker Profile
            </button>
            <button
              onClick={() => handleNav('about')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              About Deepak Verma (Founder)
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#D13A28]"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('B2B');
              }}
              className="w-full py-2.5 bg-[#D13A28] text-white text-xs font-bold rounded-xl text-center"
            >
              Request Corporate Training Proposal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 bg-neutral-100 text-neutral-800 text-xs font-bold rounded-xl text-center"
            >
              {currentUser ? `Account: ${currentUser.name} (${currentUser.role})` : 'Sign In / Switch Demo Account'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
