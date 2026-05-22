import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Student or Parent Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address syntax.';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject cannot be empty.';
    if (!formData.message.trim()) tempErrors.message = 'Message body is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error dynamically
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-black tracking-widest text-indigo-600 uppercase font-poppins">Get Support</span>
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950">
            Let's Keep in Touch!
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Have queries about competition guidelines, evaluation criteria, or physical trophy deliveries? Drop us a line below or reach out via WhatsApp support desk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. Contact Information Panel */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* WhatsApp card */}
              <a 
                href="https://api.whatsapp.com/send?phone=18005559876&text=Hello%20onboreding%20Support!"
                target="_blank"
                rel="noreferrer"
                className="block bg-emerald-50 border border-emerald-100 p-6 rounded-3xl hover:shadow-md transition-shadow text-left"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-emerald-950">Chat on WhatsApp</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">Quick responses for rule sheets.</p>
                    <span className="block text-emerald-700 font-bold text-sm mt-2 font-poppins">+1 (800) 555-9876</span>
                  </div>
                </div>
              </a>

              {/* General support */}
              <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm text-left">
                <div className="space-y-6 text-sm">
                  
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Direct Hotline</span>
                      <a href="tel:+18005559876" className="text-blue-950 hover:text-indigo-600 font-bold font-poppins">+1 (800) 555-9876</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center border border-indigo-100 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Email Support</span>
                      <a href="mailto:support@onboreding.com" className="text-blue-950 hover:text-indigo-600 font-bold font-poppins">support@onboreding.com</a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">Global Head Office</span>
                      <span className="text-blue-950 font-bold font-poppins">100 Academic Circle, San Francisco, CA, USA</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Simulated Modern Map Element */}
            <div className="bg-indigo-950 text-white rounded-3xl p-6 relative overflow-hidden shadow-lg h-48 flex flex-col justify-between">
              {/* Decorative graphic patterns */}
              <div className="absolute inset-0 bg-blue-900/40" />
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full animate-ping z-10" />
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full z-10" />
              
              <div className="relative z-10 text-left">
                <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-black">Interactive Workspace Map</span>
                <h4 className="font-poppins font-black text-sm text-white mt-1">onboreding HQ Campus</h4>
                <p className="text-[11px] text-slate-300 mt-0.5">San Francisco, California</p>
              </div>

              <div className="relative z-10 text-[10px] text-indigo-400 font-bold bg-white/5 py-2 px-3 rounded-xl border border-white/10 self-start flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Digital Geo-Code: 37.7749° N, 122.4194° W</span>
              </div>
            </div>

          </div>

          {/* 2. Interactive Validated Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-left">
            <h3 className="font-poppins font-extrabold text-xl text-blue-950 mb-6 border-b border-slate-100 pb-4 flex items-center space-x-2">
              <span>Send Us a Message</span>
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-inner">
                  <CheckCircle className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="font-poppins font-black text-lg text-emerald-950">Thank You For Writing!</h3>
                <p className="text-xs text-slate-500 font-medium max-w-sm">
                  Our academic help desk has successfully logged your ticket. We will email a response in less than 24 hours!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Name (Parent / Student)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                      errors.name 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                      errors.email 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="E.g. Registration doubt, Trophy delivery details"
                    className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                      errors.subject 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                    }`}
                  />
                  {errors.subject && (
                    <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type details here..."
                    className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border resize-none ${
                      errors.message 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/25 active:scale-95 transition-all text-sm tracking-wider uppercase"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Now</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
