import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    grade: 'Grade 3',
    subject: 'both',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      message: formData.message,
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
        setIsSubmitted(true);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
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

  const handleSendWhatsApp = () => {
    const text = `Hello English For Kids! 🌟\n\nI would like to inquire about online individual classes:\n• Parent: ${formData.parentName || 'Parent'}\n• Student: ${formData.studentName || 'Student'}\n• Grade: ${formData.grade}\n• Subject: ${formData.subject.toUpperCase()}\n• Phone: ${formData.phone}\n• Message: ${formData.message || 'Please share class schedule and fees'}`;
    const url = `https://wa.me/94741534794?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const faqs = [
    {
      question: 'How are the individual online classes conducted?',
      answer: 'Classes are conducted 1-on-1 via Zoom or Google Meet. Each session is tailored specifically to your child’s learning pace, utilizing interactive slides, 3D visual aids, and interactive digital exercises to keep them engaged.'
    },
    {
      question: 'Which grades do you cater to?',
      answer: 'We provide English instruction for Preschool up to Grade 13 (covering Primary, O/L, and A/L syllabi), and ICT classes for Grades 6 through Grade 11.'
    },
    {
      question: 'Can we choose flexible days and time slots?',
      answer: 'Yes! Because classes are 100% individual, you can select convenient time slots on weekdays after school or during weekends.'
    },
    {
      question: 'How do I schedule a trial session or consult the teacher?',
      answer: 'You can directly call or message us on WhatsApp at 074 153 4794, or submit the inquiry form. We will arrange a friendly introductory discussion.'
    }
  ];

  return (
    <div id="contact-section-container" className="space-y-16 pb-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#f9e534]/50 text-[#706500]">
          <Phone className="w-3.5 h-3.5" />
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0061a4] font-fredoka tracking-tight">
          Let's Start Your Child's Adventure!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
          Book an online individual class or ask any questions. We are always ready to guide you.
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Contact Info & Direct Call Buttons */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Hotline Card */}
          <div className="bg-[#0061a4] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f9e534]">
                Direct Hotline & WhatsApp
              </span>
              <h3 className="text-3xl font-black font-fredoka tracking-tight">
                074 153 4794
              </h3>
              <p className="text-sm text-blue-100 font-medium">
                Call or WhatsApp anytime to speak with our head educator.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                id="contact-call-btn"
                href="tel:0741534794"
                className="flex-1 py-3 px-4 rounded-xl bg-white text-[#0061a4] font-bold text-center flex items-center justify-center gap-2 hover:bg-[#f9e534] hover:text-[#706500] transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-whatsapp-btn"
                href="https://wa.me/94741534794?text=Hello!%20I%20would%20like%20to%20enroll%20my%20child%20in%20English%20For%20Kids."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2 hover:bg-[#20b858] transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key info list */}
            <div className="border-t border-white/20 pt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-blue-50">
                <MapPin className="w-5 h-5 text-[#f9e534] flex-shrink-0" />
                <span>Colombo, Sri Lanka (Online Islandwide)</span>
              </div>
              <div className="flex items-center gap-3 text-blue-50">
                <Clock className="w-5 h-5 text-[#f9e534] flex-shrink-0" />
                <span>Weekday & Weekend Flexible Slots</span>
              </div>
              <div className="flex items-center gap-3 text-blue-50">
                <Mail className="w-5 h-5 text-[#f9e534] flex-shrink-0" />
                <a
                  href="mailto:englishforkidslk@gmail.com"
                  className="hover:underline hover:text-[#f9e534] transition"
                >
                  englishforkidslk@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Guidance Box */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3">
            <h4 className="text-lg font-bold text-gray-900 font-fredoka flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0061a4]" />
              <span>Why Choose Individual Online Classes?</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Children never feel self-conscious or shy to ask questions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Learn from the comfort and safety of your home.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Continuous direct progress updates sent to parents.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Contact / Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-fredoka">
                Thank You, {formData.parentName || 'Parent'}!
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                We have received your class inquiry for {formData.studentName || 'your child'}. We will reach out to you at <strong>{formData.phone}</strong> shortly!
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="px-6 py-2.5 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Directly on WhatsApp</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-gray-100 pb-3 mb-2">
                <h3 className="text-xl font-bold text-gray-900 font-fredoka">
                  Book a Class / Send Message
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below and we will contact you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Parent's Name *
                  </label>
                  <input
                    name="parentName"
                    type="text"
                    required
                    placeholder="e.g. Priyantha Silva"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
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
                    placeholder="e.g. Senura Silva"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="07X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Student Grade *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4] bg-white"
                  >
                    <option value="Preschool (Ages 4-6)">Preschool (Ages 4-6)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5 (Scholarship)">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10 (O/L)">Grade 10</option>
                    <option value="Grade 11 (O/L)">Grade 11</option>
                    <option value="Grade 12 (A/L)">Grade 12</option>
                    <option value="Grade 13 (A/L)">Grade 13</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Subject Interested In *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'english', label: 'English' },
                    { id: 'ict', label: 'ICT' },
                    { id: 'both', label: 'Both English & ICT' }
                  ].map((sub) => (
                    <button
                      type="button"
                      key={sub.id}
                      onClick={() => setFormData({ ...formData, subject: sub.id })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition ${
                        formData.subject === sub.id
                          ? 'bg-[#0061a4] text-white border-[#0061a4]'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Message or Specific Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any particular areas of focus (e.g. grammar, speech confidence, python programming, school exam prep)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0061a4]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 tactile-btn py-3 px-6 rounded-xl bg-[#0061a4] text-white font-fredoka font-bold text-base flex items-center justify-center gap-2 hover:bg-[#00497d] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Send Inquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-5 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20b858] transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0061a4] font-fredoka">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-sm font-medium">
            Everything you need to know about our classes and enrollment process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-900 flex items-center justify-between gap-4 font-fredoka text-base sm:text-lg"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0061a4] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed font-medium border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
