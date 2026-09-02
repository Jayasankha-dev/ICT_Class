import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, MessageCircle, CheckCircle2, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface JoinClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseName?: string;
}

export const JoinClassModal: React.FC<JoinClassModalProps> = ({
  isOpen,
  onClose,
  initialCourseName = '',
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    grade: 'Grade 3',
    subject: 'both',
    preferredTime: 'Weekday Evenings (4 PM - 7 PM)',
    courseNote: initialCourseName,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCourseName) {
      setFormData((prev) => ({ ...prev, courseNote: initialCourseName }));
    }
  }, [initialCourseName]);

  if (!isOpen) return null;

  // ✅ Formspree Integration - Updated handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      parentName: formData.parentName,
      studentName: formData.studentName,
      phone: formData.phone,
      grade: formData.grade,
      subject: formData.subject,
      preferredTime: formData.preferredTime,
      courseNote: formData.courseNote,
    };

    try {
      const response = await fetch('https://formspree.io/f/mzebddnb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#0061a4', '#f9e534', '#ff5748']
        });
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.error || 'Please try again or use WhatsApp.'}`);
      }
    } catch (error) {
      alert('Network error. Please check your connection or use WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello English For Kids! 🌟\n\nI want to enroll in Online Individual Classes:\n• Parent: ${formData.parentName}\n• Student: ${formData.studentName}\n• Grade: ${formData.grade}\n• Subject: ${formData.subject.toUpperCase()}\n• Course/Interest: ${formData.courseNote || 'English & ICT'}\n• Preferred Time: ${formData.preferredTime}\n• Phone: ${formData.phone}`;
    const url = `https://wa.me/94741534794?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-[#0061a4]/20 animate-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="bg-[#0061a4] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 text-[#f9e534] flex items-center justify-center font-bold text-2xl font-fredoka">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold font-fredoka text-white flex items-center gap-1.5">
                Join English For Kids
                <Sparkles className="w-4 h-4 text-[#f9e534] fill-[#f9e534]" />
              </h2>
              <p className="text-xs text-blue-100 font-medium">
                Online 1-on-1 Individual Classes • Grade 1 - 13
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-fredoka">
                Application Received!
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thank you, <strong>{formData.parentName}</strong>! We will contact you at <strong>{formData.phone}</strong> to confirm your preferred schedule.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Details on WhatsApp (Fastest)</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-700 font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formData.courseNote && (
                <div className="bg-[#f9e534]/25 p-3 rounded-xl border border-[#f9e534] text-xs font-bold text-[#706500] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>Enrolling for: {formData.courseNote}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Parent's Name *
                  </label>
                  <input
                    name="parentName"
                    type="text"
                    required
                    placeholder="e.g. Nimalka Perera"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Student's Name *
                  </label>
                  <input
                    name="studentName"
                    type="text"
                    required
                    placeholder="e.g. Oshada Perera"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="074 153 4794"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Grade *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4] bg-white"
                  >
                    <option value="Preschool (Ages 4-6)">Preschool (Ages 4-6)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                    <option value="Grade 13">Grade 13</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Subject *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'english', label: 'English' },
                    { id: 'ict', label: 'ICT' },
                    { id: 'both', label: 'Both' }
                  ].map((sub) => (
                    <button
                      type="button"
                      key={sub.id}
                      onClick={() => setFormData({ ...formData, subject: sub.id as any })}
                      className={`py-1.5 text-xs font-bold rounded-lg border text-center transition ${
                        formData.subject === sub.id
                          ? 'bg-[#0061a4] text-white border-[#0061a4]'
                          : 'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Preferred Time Slot
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4] bg-white"
                >
                  <option value="Weekday Evenings (4 PM - 8 PM)">Weekday Evenings (4 PM - 8 PM)</option>
                  <option value="Weekend Mornings (8 AM - 12 PM)">Weekend Mornings (8 AM - 12 PM)</option>
                  <option value="Weekend Afternoons (2 PM - 6 PM)">Weekend Afternoons (2 PM - 6 PM)</option>
                  <option value="Flexible / Negotiable">Flexible / Discuss with Teacher</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 tactile-btn py-3 rounded-xl bg-[#0061a4] text-white font-fredoka font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#00497d] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Enrollment'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5"
                  title="Direct WhatsApp enrollment"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
