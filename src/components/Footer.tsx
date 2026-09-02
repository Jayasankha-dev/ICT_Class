import React from 'react';
import { GraduationCap, Phone, MessageCircle, Mail, MapPin, Heart, Sparkles, CheckCircle2, Facebook, Github, ExternalLink, Linkedin, Globe } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenJoinModal: () => void;
  onOpenGitHubGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenJoinModal
}) => {
  return (
    <footer className="bg-[#1b1c15] text-[#fbfaee] pt-14 pb-8 border-t-4 border-[#f9e534]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#0061a4] flex items-center justify-center text-[#f9e534]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-fredoka text-white">
                English For Kids
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Online individual English (Grade 1 to 13) and ICT (Grade 6 to 11) classes for school students across Sri Lanka. Inspiring curiosity, confidence, and linguistic mastery.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenJoinModal}
                className="px-4 py-2 rounded-xl bg-[#f9e534] text-[#706500] font-bold text-xs font-fredoka hover:bg-[#edd81f] transition"
              >
                Join Class Today ✨
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-fredoka uppercase tracking-wider">
              Quick Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  Explore All Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  About Our Teaching Methods
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  Our Classroom Memories & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f9e534] transition"
                >
                  Contact & Class Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Sri Lanka Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-fredoka uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f9e534] flex-shrink-0" />
                <a href="tel:0741534794" className="hover:text-white font-semibold">
                  074 153 4794
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/94741534794"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: 074 153 4794
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f9e534] flex-shrink-0" />
                <span>Colombo, Sri Lanka (Online Islandwide)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f9e534] flex-shrink-0" />
                <a
                  href="mailto:englishforkidslk@gmail.com"
                  className="hover:text-white hover:underline transition"
                >
                  englishforkidslk@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#1877F2] flex-shrink-0" />
                <a
                  href="https://web.facebook.com/EnglishforkidszLk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f9e534] transition flex items-center gap-1 font-medium"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Individual Class Delivery Highlights */}
          <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <h4 className="text-sm font-bold text-[#f9e534] font-fredoka flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#f9e534]" />
              <span>1-on-1 Individual Classes</span>
            </h4>
            <ul className="space-y-1.5 text-[11px] text-gray-300">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                <span>Dedicated individual attention for each child</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                <span>Interactive screen sharing & phonics games</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                <span>Flexible time slots (Weekdays / Weekends)</span>
              </li>
            </ul>
            <a
              href="https://wa.me/94741534794?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Individual%20Online%20class%20timeslot."
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & Developer Credit */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} English For Kids. All Rights Reserved. Online Individual Classes.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Teacher links */}
            <div className="flex items-center gap-1.5 text-xs text-gray-300">
              <span>Teacher:</span>
              <a
                id="footer-teacher-linkedin"
                href="https://www.linkedin.com/in/deshani-bandara-a0b733367/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#f9e534] hover:underline font-semibold"
                title="Deshani Bandara LinkedIn"
              >
                <span>Deshani Bandara</span>
                <Linkedin className="w-3 h-3" />
              </a>
              <span className="text-gray-600">·</span>
              <a
                id="footer-teacher-github"
                href="https://github.com/DeshaniBandara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                title="Deshani Bandara GitHub"
              >
                <Github className="w-3 h-3" />
              </a>
              <span className="text-gray-600">·</span>
              <a
                id="footer-teacher-portfolio"
                href="https://deshanibandara.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                title="Deshani Bandara Portfolio"
              >
                <Globe className="w-3 h-3" />
              </a>
            </div>

            <span className="hidden sm:inline text-gray-600">|</span>

            {/* Developer link with GitHub logo */}
            <a
              id="developer-github-credit"
              href="https://github.com/Jayasankha-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition border border-white/15 text-xs group"
              title="Visit Developer GitHub Profile: Jayasankha-dev"
            >
              <Github className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
              <span>Developer: <span className="text-[#f9e534] font-semibold group-hover:underline">Jayasankha-dev</span></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
