import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JoinClassModal } from './components/JoinClassModal';
import { FacebookFollowModal } from './components/FacebookFollowModal';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('about');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string>('');
  const [isFbModalOpen, setIsFbModalOpen] = useState(false);

  useEffect(() => {
    // Show popup to encourage visitors to follow the Facebook page
    try {
      const dismissed = sessionStorage.getItem('efk_fb_modal_dismissed');
      if (!dismissed) {
        const timer = setTimeout(() => {
          setIsFbModalOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsFbModalOpen(true);
    }
  }, []);

  const handleOpenJoinModal = (courseName: string = '') => {
    setSelectedCourseForEnroll(courseName);
    setIsJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaee] text-[#1b1c15] selection:bg-[#f9e534] selection:text-[#1b1c15]">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {activeTab === 'about' && (
          <AboutSection
            onOpenJoinModal={() => handleOpenJoinModal()}
            onNavigateCourses={() => {
              setActiveTab('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesSection
            onSelectCourseToEnroll={(courseName) => handleOpenJoinModal(courseName)}
          />
        )}

        {activeTab === 'gallery' && <GallerySection />}

        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Persistent Floating Quick WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/94741534794?text=Hello!%20I%20would%20like%20to%20inquire%20about%20Online%20Individual%20Classes%20for%20my%20child."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-2xl hover:scale-105 transition-all tactile-btn group"
          title="Direct WhatsApp with Teacher"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline font-fredoka text-sm">WhatsApp Teacher</span>
        </a>
      </div>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />

      {/* Modals */}
      <JoinClassModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        initialCourseName={selectedCourseForEnroll}
      />

      <FacebookFollowModal
        isOpen={isFbModalOpen}
        onClose={() => setIsFbModalOpen(false)}
      />
    </div>
  );
}
