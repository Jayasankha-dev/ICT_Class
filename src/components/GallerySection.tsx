import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';
import { Sparkles, Play, Eye, X, Volume2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Fun' },
    { id: 'teacher', label: 'Teacher & Mentoring' },
    { id: 'ocean', label: 'Ocean' },
    { id: 'animals', label: 'Animals' },
    { id: 'letters', label: 'Letters & Phonics' },
    { id: 'games', label: 'Grammar & Games' },
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'letters') return item.category === 'letters' || item.category === 'phonics';
    return item.category === activeCategory;
  });

  const handleCardClick = (item: GalleryItem) => {
    setSelectedItem(item);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0061a4', '#f9e534', '#ff5748', '#2E7D32']
    });
  };

  return (
    <div id="gallery-section-container" className="space-y-10 pb-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#ff5748]/15 text-[#bb1614]">
          <Sparkles className="w-3.5 h-3.5" />
          Memories & Milestones
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0061a4] font-fredoka tracking-tight">
          Our Amazing Adventures!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
          Look at all the fun things we've explored together! Click each memory to see what we learned.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
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

      {/* Gallery Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => handleCardClick(item)}
            className={`bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#0061a4]/40 tactile-card cursor-pointer transition-all duration-300 group flex flex-col ${
              item.colSpan || ''
            }`}
          >
            {/* Image Box */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (item.category === 'teacher') {
                    e.currentTarget.src = item.id === 'teacher-deshani-portrait' ? '/teacher-portrait.jpg' : '/teacher-lab.jpg';
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>

              {/* Media indicator badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-800 shadow-sm group-hover:scale-110 transition-transform">
                {item.mediaType === 'video' ? (
                  <Play className="w-4 h-4 text-[#0061a4] fill-[#0061a4]" />
                ) : (
                  <Eye className="w-4 h-4 text-[#0061a4]" />
                )}
              </div>

              {/* Overlay hover prompt */}
              <div className="absolute inset-0 bg-[#0061a4]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-[#0061a4] font-fredoka font-bold text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#f9e534] fill-[#f9e534]" />
                  <span>Click to Explore</span>
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-fredoka group-hover:text-[#0061a4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0061a4]">
                <span>View Activity Record</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Media Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-4 border-white animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="relative h-72 sm:h-80 bg-gray-900">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (selectedItem.category === 'teacher') {
                    e.currentTarget.src = selectedItem.id === 'teacher-deshani-portrait' ? '/teacher-portrait.jpg' : '/teacher-lab.jpg';
                  }
                }}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${selectedItem.tagColor}`}>
                  {selectedItem.tag}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4 bg-white">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0061a4] font-fredoka">
                {selectedItem.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {selectedItem.subtitle}
              </p>

              {/* Lesson insights */}
              <div className="bg-[#f5f4e8] rounded-2xl p-4 border border-gray-200 space-y-2">
                <div className="text-xs font-bold uppercase text-[#706500] tracking-wider">
                  Key Learning Highlights
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0061a4]"></span>
                    <span>Interactive visual retention</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f9e534]"></span>
                    <span>Confidence speaking in English</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5748]"></span>
                    <span>Sinhala-English bridge guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                    <span>Child-friendly digital practice</span>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/94741534794?text=Hello!%20I%20saw%20the%20lesson%20about%20"${encodeURIComponent(selectedItem.title)}"%20and%20want%20to%20enroll%20my%20child.`}
                  target="_blank"
                  rel="noreferrer"
                  className="tactile-btn px-6 py-2.5 rounded-xl bg-[#0061a4] text-white font-fredoka font-bold hover:bg-[#00497d]"
                >
                  Ask About This Lesson
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
