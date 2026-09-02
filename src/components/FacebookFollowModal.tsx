import React from 'react';
import { Facebook, X, Sparkles, Heart, ExternalLink, CheckCircle2, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FacebookFollowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FacebookFollowModal: React.FC<FacebookFollowModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleFollowClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1877F2', '#f9e534', '#0061a4', '#ff5748']
      });
    } catch {
      // ignore if canvas-confetti fails
    }

    window.open('https://web.facebook.com/EnglishforkidszLk', '_blank', 'noopener,noreferrer');
    sessionStorage.setItem('efk_fb_modal_dismissed', 'true');
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleDismiss = () => {
    sessionStorage.setItem('efk_fb_modal_dismissed', 'true');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-all animate-scaleUp"
      >
        {/* Banner Header with Facebook Brand Styling */}
        <div className="relative bg-gradient-to-br from-[#1877F2] via-[#0b64d8] to-[#00497d] p-6 text-white text-center overflow-hidden">
          {/* Decorative background blurs & icons */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#f9e534]/20 rounded-full blur-xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#f9e534]" />
            <span>Official Community</span>
          </div>

          {/* Central Logo */}
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#1877F2] transform -rotate-3 hover:rotate-0 transition">
            <Facebook className="w-9 h-9 fill-[#1877F2]" />
          </div>

          <h3 className="text-2xl font-bold font-fredoka tracking-tight text-white mb-1">
            Follow Us on Facebook!
          </h3>
          <p className="text-xs text-blue-100 font-medium">
            English For Kids නිල ෆේස්බුක් පිටුව සමඟ එක්වන්න 🌟
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
            දරුවන්ට දිනපතා අලුත් ඉංග්‍රීසි වචන (Daily Vocabulary), Phonics ක්‍රියාකාරකම්, ICT දැනුම සහ නොමිලේ ලැබෙන Worksheets සඳහා අපගේ Facebook පිටුව Follow කරන්න!
          </p>

          {/* Perks list */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3.5 space-y-2">
            <div className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1877F2] shrink-0" />
              <span>දිනපතා ඉංග්‍රීසි පාඩම් & Fun Word Quizzes</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1877F2] shrink-0" />
              <span>නිදහස් PDF Worksheets & Phonics Audio Clips</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1877F2] shrink-0" />
              <span>Individual Class කාලසටහන් සහ නවතම තොරතුරු</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              id="facebook-follow-btn"
              onClick={handleFollowClick}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-fredoka font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Facebook className="w-5 h-5 fill-white" />
              <span>Follow Page / පිටුවට පිවිසෙන්න</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </button>

            <button
              onClick={handleDismiss}
              className="w-full py-2.5 px-4 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 text-xs font-semibold transition"
            >
              Continue to Website (පසුවට)
            </button>
          </div>
        </div>

        {/* Mini Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
          <span>fb.com/EnglishforkidszLk</span>
          <span>•</span>
          <span className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span>5.0 Rating</span>
          </span>
        </div>
      </div>
    </div>
  );
};
