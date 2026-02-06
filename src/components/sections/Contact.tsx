import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  Send,
  Facebook,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { contactInfo } from '../../data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      // Build mailto link with encoded subject and body
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      const mailto = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

      // Open default mail client
      window.location.href = mailto;

      setFormStatus({
        type: 'success',
        message: `Your email client should open so you can send the message. If it doesn't, please email me at ${contactInfo.email}.`
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0f1419] dark:via-[#1a1f2e] dark:to-[#0f1419] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Whether it's a project, a question, or just a friendly hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Whether you need a developer, photographer, or creative partner, 
                I'm here to help turn your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: 8, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 glass-effect rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Email Me</p>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">{contactInfo.email}</p>
                </div>
                <span className="text-gray-400 group-hover:text-cyan-500 transition-colors">→</span>
              </motion.a>

              {contactInfo.phone && (
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: 8, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-5 glass-effect rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Call Me</p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{contactInfo.phone}</p>
                  </div>
                  <span className="text-gray-400 group-hover:text-purple-500 transition-colors">→</span>
                </motion.a>
              )}

              <motion.div
                whileHover={{ x: 8, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 glass-effect rounded-2xl group"
              >
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Location</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{contactInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
                Connect With Me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {contactInfo.socialLinks.map((link, index) => {
                  const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass-effect rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all group"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                      title={link.platform}
                    >
                      <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div
                  whileFocus={{ y: -2 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ y: -2 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Form Status */}
              {formStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50/80 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/50'
                      : 'bg-red-50/80 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700/50'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary btn-hover-effect py-3 rounded-xl inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg font-semibold"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}