import React, { useState } from 'react';
import { NavTab } from '../types';
import { Sparkles, Phone, Menu, X, BookOpen, GraduationCap, Facebook } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenJoinModal: () => void;
  onOpenGitHubGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbfaee]/95 backdrop-blur-md border-b border-[#0061a4]/10 transition-colors">
      {/* Top micro-banner for Sri Lanka hotline & info */}
      <div className="bg-[#0061a4] text-white py-1.5 px-3 sm:px-4 text-xs font-medium">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f9e534] animate-pulse shrink-0"></span>
            <span className="hidden lg:inline truncate">Online Individual Classes for Kids across Sri Lanka (Grade 1 - 13)</span>
            <span className="hidden sm:inline lg:hidden truncate text-[11px] sm:text-xs text-blue-50">Online Individual Classes (Grade 1 - 13) • Sri Lanka</span>
            <span className="sm:hidden text-[11px] font-medium truncate text-blue-100">Individual Classes (Gr. 1 - 13)</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 shrink-0">
            <a
              id="header-facebook-link"
              href="https://web.facebook.com/EnglishforkidszLk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/15 hover:bg-white/25 px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] font-medium transition shrink-0"
              title="Follow English For Kids on Facebook"
            >
              <Facebook className="w-3 h-3 fill-white" />
              <span className="hidden lg:inline">Follow on Facebook</span>
              <span className="hidden sm:inline lg:hidden">Facebook</span>
            </a>
            {/* Call Us button - compact pill on mobile, full phone number on larger screens */}
            <a
              id="header-phone-link"
              href="tel:0741534794"
              className="flex items-center gap-1 sm:gap-1.5 bg-[#f9e534] hover:bg-[#edd81f] text-[#706500] sm:bg-white/15 sm:hover:bg-white/25 sm:text-white px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-xs shrink-0"
              title="Call Hotline: 074 153 4794"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#706500] sm:fill-none text-[#706500] sm:text-white" />
              <span className="sm:hidden">Call Us</span>
              <span className="hidden sm:inline">074 153 4794</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-2xl bg-[#0061a4] flex items-center justify-center text-[#f9e534] shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="shrink-0">
            <div className="text-base sm:text-lg lg:text-2xl font-bold tracking-tight text-[#0061a4] font-fredoka flex items-center gap-1 leading-tight">
              <span>English For Kids</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f9e534] fill-[#f9e534] shrink-0" />
            </div>
            <div className="text-[9.5px] sm:text-[10px] lg:text-[11px] font-semibold text-[#706500] uppercase tracking-wider">
              Online Individual Classes
            </div>
          </div>
        </button>

        {/* Desktop & Tablet Navigation Links */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-[#f5f4e8] p-1 lg:p-1.5 rounded-full border border-gray-200/90 shrink-0 shadow-xs">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0061a4] text-white shadow-sm'
                    : 'text-gray-700 hover:text-[#0061a4] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          <button
            id="nav-join-class-btn"
            onClick={onOpenJoinModal}
            className="tactile-btn px-3.5 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2.5 rounded-xl bg-[#0061a4] text-white font-fredoka text-xs sm:text-sm lg:text-base font-bold flex items-center gap-1.5 lg:gap-2 hover:bg-[#00497d] transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Join Class</span>
            <span className="text-[#f9e534]">✨</span>
          </button>
        </div>

        {/* Mobile menu hamburger button (visible only on mobile < md) */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            id="mobile-join-class-btn"
            onClick={onOpenJoinModal}
            className="px-3 py-1.5 rounded-lg bg-[#0061a4] text-white font-fredoka text-xs sm:text-sm font-bold shrink-0"
          >
            Join Class
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-xl bg-[#f5f4e8] border border-gray-200 text-gray-700 hover:text-[#0061a4] focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfaee] border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#0061a4] text-white'
                    : 'text-gray-800 hover:bg-[#f5f4e8]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <a
              href="https://web.facebook.com/EnglishforkidszLk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#1877F2] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Facebook className="w-4 h-4 fill-white" />
              <span>Follow Facebook Page</span>
            </a>
            <a
              href="tel:0741534794"
              className="w-full py-2.5 px-4 rounded-xl bg-[#f9e534] text-[#706500] font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Teacher: 074 153 4794</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
