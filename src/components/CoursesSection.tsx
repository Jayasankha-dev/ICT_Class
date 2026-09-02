import React, { useState } from 'react';
import { COURSES_DATA } from '../data/courses';
import { Course } from '../types';
import { BookOpen, Sparkles, Check, ArrowRight, Star, Search, Laptop, MessageCircle } from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourseToEnroll: (courseName: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourseToEnroll,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'english', label: 'English (Grades 1-13)' },
    { id: 'ict', label: 'ICT (Grades 6-11)' },
    { id: 'preschool', label: 'Preschool' },
    { id: 'vocab', label: 'Specialized Vocabulary' },
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.grades.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="courses-section-container" className="space-y-12 pb-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#d1e4ff] text-[#00497d]">
          <BookOpen className="w-3.5 h-3.5" />
          Interactive Curriculum
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0061a4] font-fredoka tracking-tight">
          Explore Our Courses
        </h1>
        <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
          Fun, engaging, and interactive English and ICT classes designed specifically for students from Grade 1 to 13. Start learning today!
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0061a4] text-white shadow-sm scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#f5f4e8] border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search grade or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4] focus:border-transparent"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => {
          const badgeBg =
            course.badgeColor === 'secondary'
              ? 'bg-[#f9e534] text-[#706500]'
              : course.badgeColor === 'tertiary'
              ? 'bg-[#ff5748] text-white'
              : 'bg-[#0061a4] text-white';

          return (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#0061a4]/40 tactile-card flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Top Image Container with Badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${badgeBg}`}>
                    {course.badge}
                  </span>
                </div>
                {/* Grade Chip */}
                <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {course.grades}
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 font-fredoka group-hover:text-[#0061a4] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 flex items-center gap-2">
                  <button
                    onClick={() => onSelectCourseToEnroll(course.title)}
                    className="flex-1 tactile-btn py-2.5 px-4 rounded-xl bg-[#0061a4] text-white font-fredoka text-sm font-bold flex items-center justify-center gap-1.5 hover:bg-[#00497d]"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/94741534794?text=Hello!%20I%20would%20like%20more%20details%20about%20${encodeURIComponent(course.title)}%20(${encodeURIComponent(course.grades)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 transition"
                    title="Inquire via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-green-600 text-white" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Syllabus & Exam Support Banner */}
      <div className="bg-[#f9e534]/20 rounded-3xl p-8 border border-[#f9e534] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-[#706500] uppercase tracking-wider">
            Curriculum Alignment
          </span>
          <h3 className="text-2xl font-bold text-gray-900 font-fredoka">
            Targeted for Sri Lankan National, Cambridge & Edexcel Syllabi
          </h3>
          <p className="text-sm text-gray-700 max-w-2xl font-medium">
            Whether your child needs support for daily school term tests, G.C.E. Ordinary Level (O/L) preparation, Advanced Level (A/L) English, or spoken fluency, our lessons are strictly aligned to ensure top grades!
          </p>
        </div>

        <button
          onClick={() => onSelectCourseToEnroll('Grade Consultation')}
          className="tactile-btn-yellow px-6 py-3 rounded-2xl bg-[#f9e534] text-[#706500] font-fredoka text-base font-bold whitespace-nowrap hover:bg-[#eed717]"
        >
          Request Free Consultation
        </button>
      </div>
    </div>
  );
};
