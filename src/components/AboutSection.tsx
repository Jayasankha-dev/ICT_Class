import React, { useState } from 'react';
import { Sparkles, Star, Rocket, Laptop, Heart, Users, Video, Award, Phone, Send, CheckCircle2, MessageCircle, GraduationCap, Linkedin, Github, Globe, ExternalLink, BookOpen, Camera } from 'lucide-react';
import { Interactive3DCanvas } from './Interactive3DCanvas';
import heroImg from '../assets/images/hero_kids_learning_1788130643393.jpg';
import classroomImg from '../assets/images/modern_learning_space_1788130660467.jpg';
import teacherPortraitImg from '../assets/images/teacher_ict_lab_session_1788134051659.jpg';
import teacherLabImg from '../assets/images/IMG-20260820-WA0098.jpg';

interface AboutSectionProps {
  onOpenJoinModal: () => void;
  onNavigateCourses: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenJoinModal,
  onNavigateCourses,
}) => {
  const [activeTeacherPhoto, setActiveTeacherPhoto] = useState<'portrait' | 'lab'>('portrait');
  return (
    <div id="about-section-container" className="space-y-16 pb-12">
      {/* Hero Presentation */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f9e534]/40 text-[#706500] border border-[#f9e534]">
                <Star className="w-3.5 h-3.5 fill-[#706500]" />
                Fun Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff5748]/15 text-[#bb1614] border border-[#ff5748]/30">
                <Rocket className="w-3.5 h-3.5" />
                Playful Environment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2196f3]/15 text-[#0061a4] border border-[#2196f3]/30">
                <Laptop className="w-3.5 h-3.5" />
                Tech Education
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0061a4] tracking-tight font-fredoka leading-tight">
              Online Individual <br className="hidden sm:inline" />
              <span className="text-[#bb1614]">English</span> &{' '}
              <span className="text-[#00497d]">ICT</span> Classes!
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl font-medium">
              At <strong className="text-[#0061a4]">English For Kids</strong>, we believe that learning should be an adventure. Our mission is to make education accessible and engaging through personalized online individual classes for students across Sri Lanka. We offer comprehensive English classes for <strong>Grade 1 up to Grade 13</strong>, alongside specialized ICT classes for <strong>Grades 6-11</strong>. We blend creative teaching methods with a joyful virtual environment to inspire a lifelong love for language and technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-enroll-btn"
                onClick={onOpenJoinModal}
                className="tactile-btn px-8 py-3.5 rounded-2xl bg-[#0061a4] text-white font-fredoka text-lg font-bold flex items-center gap-2.5 hover:bg-[#00497d]"
              >
                <span>Enroll Today</span>
                <Sparkles className="w-5 h-5 text-[#f9e534]" />
              </button>

              <button
                id="hero-view-courses-btn"
                onClick={onNavigateCourses}
                className="tactile-btn-yellow px-7 py-3.5 rounded-2xl bg-[#f9e534] text-[#706500] font-fredoka text-lg font-bold hover:bg-[#ebd520]"
              >
                Explore Courses
              </button>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/94741534794?text=Hello!%20I%20am%20interested%20in%20online%20individual%20English%20and%20ICT%20classes%20for%20my%20child."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-green-300 text-green-700 font-bold hover:bg-green-50 shadow-sm transition"
              >
                <MessageCircle className="w-5 h-5 fill-green-500 text-white" />
                <span>WhatsApp: 074 153 4794</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">100% 1-on-1 Individual</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">Flexible Time Slots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">All Island Students</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white group">
              <img
                src={heroImg}
                alt="Children engaged in joyful English learning"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f9e534] text-[#706500] text-xs font-bold uppercase tracking-wider mb-2">
                    Friendly & Patient Mentoring
                  </span>
                  <p className="text-base font-bold font-fredoka drop-shadow">
                    Interactive Individual Sessions Tailored to Your Child's Pace
                  </p>
                </div>
              </div>
            </div>

            {/* Floating joyful badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#fbfaee] p-3 rounded-2xl border-2 border-[#0061a4] shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0061a4] text-[#f9e534] flex items-center justify-center font-bold text-xl font-fredoka">
                A+
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Proven Fluency</p>
                <p className="text-[11px] text-gray-500 font-medium">Confidence in speaking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Learning Blocks Demo */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0061a4]/15 tactile-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#d1e4ff] text-[#00497d]">
              <Sparkles className="w-3.5 h-3.5 text-[#0061a4]" />
              <span>Interactive Learning Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0061a4] font-fredoka">
              Hands-On Digital Exploration
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              We bring lessons to life with interactive 3D visual aids, digital whiteboards, and immersive visual storytelling. Kids don't just memorize — they touch, explore, and master each concept with pure enthusiasm!
            </p>
            <div className="flex flex-col gap-2 pt-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0061a4]"></span>
                <span>Touch or drag the blocks to rotate them in 3D space</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f9e534]"></span>
                <span>Visual alphabet connections & phonetic pronunciation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5748]"></span>
                <span>Personalized curriculum matching Sri Lankan school syllabi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Interactive3DCanvas />
          </div>
        </div>
      </section>

      {/* Our Impact Bento Grid (matching user screenshot) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#706500] bg-[#f9e534]/50 px-3 py-1 rounded-full">
            Our Milestone
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0061a4] font-fredoka">
            Our Impact in Sri Lanka
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Over a decade of bringing joyful education to students in Colombo, Kandy, Galle, Jaffna, and nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-white rounded-3xl p-8 text-center border border-[#0061a4]/10 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#d1e4ff] text-[#0061a4] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#0061a4] font-fredoka tracking-tight">
              5,000+
            </div>
            <div className="mt-2 text-sm font-bold text-gray-600 uppercase tracking-wider">
              Happy Students
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Empowered with confident speaking & ICT skills across all 9 provinces.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-3xl p-8 text-center border border-[#f9e534]/40 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#f9e534]/30 text-[#706500] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#706500] font-fredoka tracking-tight">
              200+
            </div>
            <div className="mt-2 text-sm font-bold text-gray-600 uppercase tracking-wider">
              Videos Produced
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Engaging multimedia lesson archives, pronunciation guides & quizzes.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-3xl p-8 text-center border border-[#ff5748]/20 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ff5748]/15 text-[#bb1614] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#bb1614] font-fredoka tracking-tight">
              10+
            </div>
            <div className="mt-2 text-sm font-bold text-gray-600 uppercase tracking-wider">
              Years Experience
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Dedicated teaching expertise in Cambridge, Edexcel & National curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your Teacher / Head Educator Profile */}
      <section id="meet-teacher-section" className="bg-gradient-to-br from-white via-[#fbfaee] to-white rounded-3xl p-6 sm:p-10 border-2 border-[#0061a4]/20 shadow-md">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0061a4] bg-[#d1e4ff] px-3.5 py-1 rounded-full shadow-xs">
            Head Educator & Founder
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0061a4] font-fredoka">
            Meet Your Teacher: Deshani Bandara
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Dedicated educator, software technologist, and passionate linguistics mentor guiding your child 1-on-1.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Teacher Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Photo Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-blue-200 shadow-2xs mb-3">
              <button
                type="button"
                id="tab-teacher-portrait"
                onClick={() => setActiveTeacherPhoto('portrait')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTeacherPhoto === 'portrait'
                    ? 'bg-[#0061a4] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#0061a4] hover:bg-blue-50'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Solo Portrait</span>
              </button>
              <button
                type="button"
                id="tab-teacher-lab"
                onClick={() => setActiveTeacherPhoto('lab')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTeacherPhoto === 'lab'
                    ? 'bg-[#0061a4] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#0061a4] hover:bg-blue-50'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>ICT Lab & Tech</span>
              </button>
            </div>

            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0061a4] via-[#f9e534] to-[#0061a4] rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-900">
                <img
                  key={activeTeacherPhoto}
                  src={activeTeacherPhoto === 'portrait' ? teacherPortraitImg : teacherLabImg}
                  alt={
                    activeTeacherPhoto === 'portrait'
                      ? 'Teacher Deshani Bandara - Lead Instructor'
                      : 'Teacher Deshani Bandara mentoring students in ICT lab'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Active Status Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {activeTeacherPhoto === 'portrait' ? 'Lead Educator' : 'Hands-on ICT Lab'}
                  </span>
                  
                  <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-md border border-emerald-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800">
                      {activeTeacherPhoto === 'portrait' ? 'Online Mentor' : 'Live Guidance'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Photo Switch Thumbnails */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                type="button"
                onClick={() => setActiveTeacherPhoto('portrait')}
                className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shadow-2xs ${
                  activeTeacherPhoto === 'portrait' ? 'border-[#0061a4] ring-2 ring-[#0061a4]/30 scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
                title="View Solo Portrait"
              >
                <img
                  src={teacherPortraitImg}
                  alt="Portrait thumbnail"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] font-bold text-center py-0.5">
                  Portrait
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTeacherPhoto('lab')}
                className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shadow-2xs ${
                  activeTeacherPhoto === 'lab' ? 'border-[#0061a4] ring-2 ring-[#0061a4]/30 scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
                title="View ICT Lab Mentoring Session"
              >
                <img
                  src={teacherLabImg}
                  alt="ICT Lab thumbnail"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] font-bold text-center py-0.5">
                  ICT Lab
                </span>
              </button>
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-xl font-extrabold text-[#0061a4] font-fredoka">
                Deshani Bandara
              </h3>
              <p className="text-xs font-bold text-[#706500] uppercase tracking-wide">
                BICT (Hons) Undergraduate · Univ. of Vavuniya
              </p>
            </div>

            {/* Quick Profile Verification Social Icons */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
              <a
                id="teacher-linkedin-link"
                href="https://www.linkedin.com/in/deshani-bandara-a0b733367/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white transition-all text-xs font-bold border border-[#0077B5]/20 shadow-2xs group"
                title="View Deshani Bandara's Verified LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                id="teacher-github-link"
                href="https://github.com/DeshaniBandara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gray-900/10 hover:bg-gray-900 text-gray-800 hover:text-white transition-all text-xs font-bold border border-gray-300 shadow-2xs group"
                title="View Deshani Bandara's GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 fill-current" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
              </a>

              <a
                id="teacher-portfolio-link"
                href="https://deshanibandara.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#0061a4]/10 hover:bg-[#0061a4] text-[#0061a4] hover:text-white transition-all text-xs font-bold border border-[#0061a4]/20 shadow-2xs group"
                title="View Deshani Bandara's Personal Portfolio"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Portfolio</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Teacher Bio & Competencies */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#f9e534]/30 text-[#706500]">
                <GraduationCap className="w-4 h-4 text-[#706500]" />
                <span>Academic & Professional Pedagogy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-fredoka leading-tight">
                "Combining English Linguistics with Code & Modern Technology to Shape Confident Minds."
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                Deshani Bandara is a Bachelor of Information and Communication Technology Honours (BICT Hons) undergraduate at the <strong>University of Vavuniya</strong>, specializing in software engineering systems, modern React ecosystems, and English Linguistics.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With a deep passion for early phonetic development and interactive teaching methods, she conducts 100% individual, tailor-made sessions for Sri Lankan students (Grade 1 to 13), ensuring each student masters British/Cambridge phonetic pronunciation, grammar structures, exam writing, and school ICT with genuine joy.
              </p>
            </div>

            {/* 4 Competency Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-blue-100 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0061a4]/10 text-[#0061a4] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">University of Vavuniya</h4>
                  <p className="text-[11px] text-gray-500 font-medium">BICT (Hons) Undergraduate · ICT & Software Engineering</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-yellow-100 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f9e534]/30 text-[#706500] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Phonics & Linguistics</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Early language acquisition, accents, and spoken fluency</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">School ICT Syllabi (Gr. 6-11)</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Practical computer skills, logic, and O/L exam readiness</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-rose-100 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">100% Patient Individual Mentoring</h4>
                  <p className="text-[11px] text-gray-500 font-medium">No rushing, personalized notes, and friendly coaching</p>
                </div>
              </div>
            </div>

            {/* Interactive Showcase Card for the Alternate Photo */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-amber-50/60 border border-blue-200/70 shadow-2xs flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden shrink-0 border border-blue-200 shadow-xs relative group/thumb">
                <img
                  src={activeTeacherPhoto === 'portrait' ? teacherLabImg : teacherPortraitImg}
                  alt="Teacher Session Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform"
                />
                <button
                  type="button"
                  onClick={() => setActiveTeacherPhoto(activeTeacherPhoto === 'portrait' ? 'lab' : 'portrait')}
                  className="absolute inset-0 bg-[#0061a4]/30 hover:bg-[#0061a4]/50 transition flex items-center justify-center text-white text-[10px] font-bold"
                >
                  Click to View
                </button>
              </div>
              <div className="space-y-1 text-left flex-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0061a4] bg-white px-2.5 py-0.5 rounded-md border border-blue-200 shadow-2xs">
                  {activeTeacherPhoto === 'portrait' ? 'Practical ICT Lab Experience' : 'Head Educator Profile'}
                </span>
                <h4 className="text-sm font-bold text-gray-900 font-fredoka">
                  {activeTeacherPhoto === 'portrait'
                    ? 'Hands-on Software & Technology Guidance'
                    : 'Personalized 1-on-1 English Linguistics'}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {activeTeacherPhoto === 'portrait'
                    ? 'Teacher Deshani teaches real-world computer skills, keyboard mastery, and coding logic alongside English fluency.'
                    : 'Dedicated 1-on-1 coaching focusing on phonetic pronunciation, grammar foundations, and speaking confidence.'}
                </p>
              </div>
            </div>

            {/* Action Buttons for Teacher Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="teacher-book-class-btn"
                onClick={onOpenJoinModal}
                className="tactile-btn px-6 py-2.5 rounded-xl bg-[#0061a4] text-white font-fredoka text-sm font-bold flex items-center gap-2 hover:bg-[#00497d]"
              >
                <span>Book 1-on-1 Class with Teacher</span>
                <Sparkles className="w-4 h-4 text-[#f9e534]" />
              </button>

              <a
                id="teacher-direct-whatsapp-btn"
                href="https://wa.me/94741534794?text=Hello%20Teacher%20Deshani!%20I%20would%20like%20to%20inquire%20about%20individual%20English%20or%20ICT%20classes%20for%20my%20child."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20b858] transition shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Teacher</span>
              </a>

              <a
                id="teacher-call-btn"
                href="tel:0741534794"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 hover:text-[#0061a4] hover:border-[#0061a4] font-bold text-xs transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>074 153 4794</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Where The Magic Happens (matching user screenshot) */}
      <section className="bg-[#f5f4e8] rounded-3xl p-6 sm:p-10 border border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0061a4] bg-white px-3 py-1 rounded-full shadow-sm">
            Learning Spaces
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0061a4] font-fredoka">
            Where The Magic Happens
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Take a look inside our lively virtual and creative classroom setups!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-white">
            <img
              src={classroomImg}
              alt="Interactive Classroom Space"
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[320px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 bg-white">
              <span className="text-xs font-bold text-[#0061a4] uppercase">Virtual & Physical Spaces</span>
              <h3 className="text-lg font-bold text-gray-900 font-fredoka">Interactive Classrooms</h3>
              <p className="text-xs text-gray-500 mt-1">
                Modern tools, tablets, and interactive screens designed to capture every child's imagination.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#f9e534]/40 text-[#706500] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6 fill-[#706500]" />
              </div>
              <h3 className="text-xl font-bold text-[#0061a4] font-fredoka">Cozy & Creative</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                A warm, supportive environment where questions are celebrated and curiosity is encouraged. No student feels left behind in our 1-on-1 personalized sessions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2196f3]/15 text-[#0061a4] flex items-center justify-center font-bold">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0061a4] font-fredoka">Tailored Individual Attention</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Every child has their own unique strengths and learning speed. Our individual attention ensures your child overcomes hesitation, improves pronunciation, and excels in school exams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
