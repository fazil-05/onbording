import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, AlertCircle, Sparkles, Landmark, Map, ArrowRight, Brain, PenTool } from 'lucide-react';

export default function Register({ selectedComp, setSelectedComp, navigateTo }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    schoolName: '',
    location: '',
    competition: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [regDetails, setRegDetails] = useState(null);

  useEffect(() => {
    if (selectedComp) {
      setFormData(prev => ({ ...prev, competition: selectedComp }));
    }
  }, [selectedComp]);

  const grades = [
    'Kindergarten (KG)',
    '1st Standard', '2nd Standard', '3rd Standard', '4th Standard', '5th Standard',
    '6th Standard', '7th Standard', '8th Standard', '9th Standard', '10th Standard',
  ];

  const competitionsList = [
    'Quiz Competition', 'Spell Bee Competition', 'Math Challenge',
    'Art & Craft Competition', 'Handwriting Competition',
  ];

  // Route competition name → page id
  const compToRoute = {
    'Quiz Competition': 'quiz',
    'Spell Bee Competition': 'quiz',
    'Math Challenge': 'quiz',
    'Art & Craft Competition': 'art-craft',
    'Handwriting Competition': 'handwriting',
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.studentName.trim()) tempErrors.studentName = 'Student Name is required.';
    if (!formData.parentName.trim()) tempErrors.parentName = 'Parent or Guardian Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address syntax.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required.';
    } else if (!/^\+?[0-9]{8,15}$/.test(formData.phone.replace(/[\s-()]/g, ''))) {
      tempErrors.phone = 'Enter a valid phone number.';
    }
    if (!formData.grade) tempErrors.grade = 'Please select Student Grade.';
    if (!formData.schoolName.trim()) tempErrors.schoolName = 'School Name is required.';
    if (!formData.location.trim()) tempErrors.location = 'City / State / Country details are required.';
    if (!formData.competition) tempErrors.competition = 'Please select a Competition.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Save student name for results page
      localStorage.setItem('onboreding_student_name', formData.studentName);
      // Save registration
      const regs = JSON.parse(localStorage.getItem('onboreding_registrations') || '[]');
      const refNo = 'REG-' + Math.floor(100000 + Math.random() * 900000);
      regs.unshift({ ...formData, refNo, date: new Date().toISOString() });
      localStorage.setItem('onboreding_registrations', JSON.stringify(regs.slice(0, 20)));
      setRegDetails({ ...formData, refNo });
      setSubmitted(true);
      setSelectedComp('');
    }
  };

  const handleGoToComp = () => {
    const route = compToRoute[regDetails.competition] || 'competitions';
    navigateTo(route, { grade: regDetails.grade, comp: regDetails.competition, name: regDetails.studentName });
  };

  const handleCloseSuccess = () => {
    setSubmitted(false);
    setFormData({ studentName: '', parentName: '', email: '', phone: '', grade: '', schoolName: '', location: '', competition: '' });
    setRegDetails(null);
    navigateTo('competitions');
  };


  return (
    <div className="bg-slate-50 py-16 text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full text-amber-900 font-bold text-xs tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Championship Open Enrollment</span>
          </div>
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950">
            Contest Registration
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">
            Fill in the details below to secure your spot. Instantly unlock free printable preparation guides upon successful submission.
          </p>
        </div>

        {/* Form panel */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl relative overflow-hidden">
          {/* Background graphics */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student's full name"
                className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                  errors.studentName 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                }`}
              />
              {errors.studentName && (
                <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.studentName}
                </span>
              )}
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Parent / Guardian Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter parent's full name"
                className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                  errors.parentName 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                }`}
              />
              {errors.parentName && (
                <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.parentName}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
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
                  placeholder="E.g. parent@email.com"
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

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="E.g. +1 (555) 019-2834"
                  className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                    errors.phone 
                      ? 'border-red-400 focus:ring-red-200' 
                      : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                  }`}
                />
                {errors.phone && (
                  <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.phone}
                  </span>
                )}
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Grade */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Grade / Class
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border font-semibold ${
                    errors.grade 
                      ? 'border-red-400 focus:ring-red-200' 
                      : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                  }`}
                >
                  <option value="">-- Choose Grade --</option>
                  {grades.map((gr, index) => (
                    <option key={index} value={gr}>{gr}</option>
                  ))}
                </select>
                {errors.grade && (
                  <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.grade}
                  </span>
                )}
              </div>

              {/* Competition selection */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Select Competition
                </label>
                <select
                  name="competition"
                  value={formData.competition}
                  onChange={handleChange}
                  className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border font-semibold ${
                    errors.competition 
                      ? 'border-red-400 focus:ring-red-200' 
                      : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                  }`}
                >
                  <option value="">-- Choose Competition --</option>
                  {competitionsList.map((comp, index) => (
                    <option key={index} value={comp}>{comp}</option>
                  ))}
                </select>
                {errors.competition && (
                  <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.competition}
                  </span>
                )}
              </div>

            </div>

            {/* School Name */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center space-x-1">
                <Landmark className="w-3.5 h-3.5 text-indigo-500" />
                <span>School Name</span>
              </label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter school full name"
                className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                  errors.schoolName 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                }`}
              />
              {errors.schoolName && (
                <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.schoolName}
                </span>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center space-x-1">
                <Map className="w-3.5 h-3.5 text-emerald-500" />
                <span>City / State / Country</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="E.g. Los Angeles, California, USA"
                className={`w-full bg-slate-50 text-slate-700 py-3.5 px-4.5 rounded-2xl text-sm focus:outline-none focus:ring-2 border ${
                  errors.location 
                    ? 'border-red-400 focus:ring-red-200' 
                    : 'border-slate-200/80 focus:ring-blue-900/20 focus:border-blue-900'
                }`}
              />
              {errors.location && (
                <span className="flex items-center text-red-500 text-xs font-semibold mt-2.5">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.location}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/25 active:scale-95 transition-all text-sm tracking-wider uppercase"
            >
              <span>Submit Registration Form</span>
            </button>

          </form>
        </div>

        {/* Success Modal Confirmation popup */}
        {submitted && regDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border-t-8 border-emerald-500 relative overflow-hidden p-6 text-center space-y-6 animate-bounce-slow">
              
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10 animate-pulse" />
              </div>

              <div className="space-y-1">
                <h3 className="font-poppins font-black text-xl text-slate-900">Registration Success!</h3>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                  Reference: {regDetails.refNo}
                </span>
              </div>

              {/* Summary table details */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs font-semibold text-slate-600 space-y-3 text-left">
                <div className="flex justify-between">
                  <span>Student Name:</span>
                  <span className="text-slate-900 font-bold">{regDetails.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Grade Level:</span>
                  <span className="text-slate-900 font-bold">{regDetails.grade}</span>
                </div>
                <div className="flex justify-between">
                  <span>Competition:</span>
                  <span className="text-indigo-600 font-extrabold">{regDetails.competition}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200/60 pt-2.5">
                  <span>School:</span>
                  <span className="text-slate-950 font-bold truncate max-w-[200px]">{regDetails.schoolName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-slate-950 font-bold truncate max-w-[200px]">{regDetails.location}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 font-medium">
                Ready to compete? Click below to start your competition now!
              </p>

              <button
                onClick={handleGoToComp}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-700 hover:opacity-95 text-white font-extrabold py-4 px-6 rounded-2xl transition-all active:scale-95 text-sm tracking-wider shadow-lg shadow-indigo-500/25"
              >
                <Brain className="w-5 h-5" />
                <span>Start Competition Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCloseSuccess}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 text-xs tracking-wider"
              >
                View All Competitions
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
