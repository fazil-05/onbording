import React from 'react';
import { Target, Heart, Eye, Users, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Inclusivity First',
      desc: 'Welcoming school students of all abilities from KG to 10th Standard across standard learning levels.',
      icon: <Users className="w-6 h-6 text-blue-900" />,
      bg: 'bg-blue-50 border-blue-100',
    },
    {
      title: 'Healthy Joyful Learning',
      desc: 'Designing quizzes and tasks that focus on positive improvement and vocabulary gains rather than performance stress.',
      icon: <Heart className="w-6 h-6 text-amber-500" />,
      bg: 'bg-amber-50 border-amber-100',
    },
    {
      title: 'Double-Blind Integrity',
      desc: 'Every art canvas and handwriting cursive worksheet undergoes dual evaluation by specialists to keep rankings unbiased.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      bg: 'bg-emerald-50 border-emerald-100',
    },
  ];

  const team = [
    { name: 'Dr. Amanda Pierce', role: 'Chief Executive & Pedagogy Lead', spec: 'Ph.D. in Child Psychology', initials: 'AP', bg: 'bg-blue-100 text-blue-900 border-blue-200' },
    { name: 'Prof. Ronald Vance', role: 'Chief Computational Math Arbitrator', spec: 'Ex-Olympiad Scholar', initials: 'RV', bg: 'bg-emerald-100 text-emerald-900 border-emerald-200' },
    { name: 'Sonia Fernandez', role: 'Dean of Fine Arts & Design Events', spec: 'Fine Arts Director', initials: 'SF', bg: 'bg-pink-100 text-pink-900 border-pink-200' },
    { name: 'Arthur Pendelton', role: 'Language Curator & Spelling Expert', spec: 'Linguistics Expert', initials: 'AP', bg: 'bg-amber-100 text-amber-900 border-amber-200' },
  ];

  return (
    <div className="bg-white">
      {/* 1. INTRO / HEADER */}
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-black tracking-widest text-indigo-600 uppercase font-poppins">Get to Know Us</span>
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950">
            Inspiring the Next Generation of Achievers
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            onboreding is a leading global online competition workspace designed to channel student competitive spirit into constructive learning and academic skill refinement.
          </p>
        </div>
      </section>

      {/* 2. HISTORY / STORY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="font-poppins text-3xl font-extrabold text-blue-950">
                A Platform Built on Passion & Play
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                onboreding was established in 2021 when a small team of educators noticed a lack of standardized online engagement during school recesses. Recognizing that children thrive under well-designed gamified goals, we built a secure platform dedicated exclusively to students from Kindergarten (KG) to 10th Standard.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our initial event started with just 100 students in a local handwriting test. Today, we have successfully managed over 50,000 registrations globally, giving children the ability to compete against national cohorts from their living rooms.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-tr from-indigo-900 to-blue-900 rounded-3xl p-8 text-white relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <h3 className="font-poppins font-black text-lg mb-4 text-white">onboreding Milestones</h3>
                <div className="space-y-4">
                  {[
                    { year: '2021', title: 'Platform Inception', detail: 'Launched with a local handwriting and vocabulary contest.' },
                    { year: '2023', title: '50,000+ Participants', detail: 'Expanded categories to cover standard arithmetic and crafts.' },
                    { year: '2026', title: '15+ Countries Reached', detail: 'Recognized as a leading secure kid-friendly contest host.' }
                  ].map((mile, idx) => (
                    <div key={idx} className="flex space-x-4">
                      <span className="font-poppins font-black text-xl text-amber-400">{mile.year}</span>
                      <div className="text-left">
                        <h4 className="font-bold text-sm text-white">{mile.title}</h4>
                        <p className="text-xs text-slate-300 font-medium mt-0.5">{mile.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-3xl flex items-center justify-center font-bold">
                <Target className="w-6 h-6 text-blue-900" />
              </div>
              <div className="space-y-4 text-left">
                <h3 className="font-poppins font-extrabold text-2xl text-blue-950">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  To democratize student talent discovery by offering structured, accessible, and high-quality online contests that motivate children to enhance their spellings, logic, arithmetic speed, fine-motor styles, and artistic thinking in a happy learning framework.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-3xl flex items-center justify-center font-bold">
                <Eye className="w-6 h-6 text-amber-500" />
              </div>
              <div className="space-y-4 text-left">
                <h3 className="font-poppins font-extrabold text-2xl text-blue-950">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  To become the world's most trusted, engaging, and transparent competitive educational ecosystem for young minds, bridging gaps between regional schools and empowering parents with diagnostic learning feedback.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-black tracking-widest text-indigo-600 uppercase font-poppins">Our Foundations</span>
            <h2 className="font-poppins text-3xl font-extrabold text-blue-950">
              The Values That Drive Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className={`p-8 border rounded-3xl text-left space-y-4 shadow-sm hover:shadow-md transition-shadow ${value.bg}`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  {value.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-slate-900">{value.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-black tracking-widest text-indigo-600 uppercase font-poppins">Who We Are</span>
            <h2 className="font-poppins text-3xl font-extrabold text-blue-950">
              Meet Our Leadership Panel
            </h2>
            <p className="text-slate-500 font-medium">
              A curated panel of teachers, specialists, and academic judges committed to healthy cognitive development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all text-center space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center font-poppins font-black text-2xl border-2 mx-auto mb-2 shadow-inner ${t.bg}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-blue-950">{t.name}</h3>
                    <span className="block text-xs font-bold text-indigo-600 mt-1">{t.role}</span>
                    <span className="block text-[10px] text-slate-400 font-semibold mt-0.5">{t.spec}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
