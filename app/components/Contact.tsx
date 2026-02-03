'use client';

import { CheckCircle, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { useState, FormEvent } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/lib/colors';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const themeVars = {
  '--primary-blue': colors.primary.DEFAULT,
  '--primary-blue-light': colors.primary.light,
  '--primary-blue-darker': colors.primary.darker,
} as CSSProperties;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const whatsappNumber = "+923444405489"; // Replace with actual WhatsApp number (with country code, no + or spaces)

  const socialLinks = {
    whatsapp: `https://wa.me/${whatsappNumber}`,
    instagram: "https://www.instagram.com/therisersconsultancy", // Replace with actual Instagram handle
    facebook: "https://www.facebook.com/therisersconsultancy", // Replace with actual Facebook page
    tiktok: "https://www.tiktok.com/@therisersconsultancy" // Replace with actual TikTok handle
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = () => {
    // Format the message for WhatsApp
    const message = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Interested in:* ${formData.service}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate validation delay
    await new Promise(resolve => setTimeout(resolve, 800));

    setIsSubmitting(false);

    // Show social modal with options
    setShowSocialModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
      style={themeVars}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: `${colors.primary.DEFAULT}1a` }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: `${colors.primary.DEFAULT}0d` }}></div>
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about studying abroad? Fill out the form below and connect with us instantly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32" style={{ background: `linear-gradient(to bottom right, ${colors.primary.DEFAULT}1a, transparent)` }}></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24" style={{ background: `linear-gradient(to top right, ${colors.primary.DEFAULT}0d, transparent)` }}></div>

          {/* Social Media Modal */}
          {showSocialModal && (
            <div className="absolute inset-0 bg-white z-20 flex items-center justify-center rounded-2xl p-8">
              <div className="text-center animate-fadeIn max-w-md">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Form Validated! ✓</h3>
                <p className="text-gray-600 mb-8">
                  Choose your preferred platform to continue the conversation:
                </p>

                {/* WhatsApp - Primary CTA */}
                <button
                  onClick={sendToWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl mb-4 cursor-pointer"
                >
                  <MessageCircle size={24} />
                  Continue on WhatsApp (Recommended)
                </button>

                {/* Other Social Options */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-linear-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all transform hover:scale-105 font-semibold"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 text-white rounded-lg transition-all transform hover:scale-105 font-semibold"
                    style={{ backgroundColor: colors.primary.DEFAULT }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.light}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.DEFAULT}
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </div>

                <button
                  onClick={() => {
                    setShowSocialModal(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      service: '',
                      message: ''
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium cursor-pointer"
                >
                  Close and start over
                </button>
              </div>
            </div>
          )}

          <div className="relative z-10">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-800 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      } focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-800 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      } focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      } focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      } focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 placeholder-gray-400`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-gray-800 mb-2">
                  Study Destination *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 ${errors.service ? 'border-red-500 bg-red-50' : 'border-gray-200'
                    } focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900`}
                >
                  <option value="">Select your preferred destination</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="usa">United States</option>
                  <option value="germany">Germany</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'
                    } focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none text-gray-900 placeholder-gray-400`}
                  placeholder="Tell us about your educational goals, preferred courses, budget, or any specific questions you have..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-500 shadow-xl cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed! scale-95' : 'hover:shadow-2xl active:scale-95'
                  }`}
                style={{ backgroundImage: `linear-gradient(to right, ${colors.primary.DEFAULT}, ${colors.primary.light}, ${colors.primary.DEFAULT})` }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Validating...
                  </>
                ) : (
                  <>
                    <MessageCircle size={24} />
                    Continue to Chat
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You&apos;ll be able to choose WhatsApp, Instagram, Facebook, or TikTok in the next step.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
