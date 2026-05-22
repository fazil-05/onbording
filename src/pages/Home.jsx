import React, { useEffect, useRef, useState } from 'react';
import {
  Brain, SpellCheck, Calculator, Palette, PenTool,
  Award, BookOpen, Shield, Globe, GraduationCap,
  Star, ArrowRight, CheckCircle, Target, Zap,
  Trophy, ChevronRight, Users, Play, Sparkles
} from 'lucide-react';

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ end, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = Math.ceil(end / 60);
      const t = setInterval(() => {
        start += step;
        if (start >= end) { setVal(end); clearInterval(t); }
        else setVal(start);
      }, 20);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const competitions = [
  { id: 'quiz', title: 'Quiz Competition', desc: 'Test general knowledge, logic & learning with live MCQs tailored to your class level.', icon: Brain, color: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', iconColor: 'text-blue-600', tag: 'Knowledge' },
  { id: 'spell-bee', title: 'Spell Bee Competition', desc: 'Build vocabulary, spelling confidence and language skills in a structured national format.', icon: SpellCheck, color: 'from-amber-400 to-orange-500', light: 'bg-amber-50', iconColor: 'text-amber-600', tag: 'Language' },
  { id: 'math', title: 'Math Challenge', desc: 'Sharpen arithmetic speed and problem-solving logic through class-appropriate challenges.', icon: Calculator, color: 'from-emerald-400 to-teal-600', light: 'bg-emerald-50', iconColor: 'text-emerald-600', tag: 'Logic' },
  { id: 'art-craft', title: 'Art & Craft Competition', desc: 'Showcase creativity through theme-based drawing and craft submissions online or by photo.', icon: Palette, color: 'from-pink-500 to-rose-600', light: 'bg-pink-50', iconColor: 'text-pink-600', tag: 'Creativity' },
  { id: 'handwriting', title: 'Handwriting Competition', desc: 'Demonstrate neatness, precision and presentation style with live digital canvas writing.', icon: PenTool, color: 'from-violet-500 to-purple-600', light: 'bg-violet-50', iconColor: 'text-violet-600', tag: 'Fine Skills' },
];

const testimonials = [
  { quote: "My daughter secured 2nd rank in the Spell Bee. Her spelling confidence has soared — she now reads the dictionary for fun!", parent: 'Mr. Rajeev Malhotra', student: 'Sneha Malhotra (Grade 5)', stars: 5, initials: 'RM', color: 'bg-blue-600' },
  { quote: "The Art & Craft competition was so much fun! Receiving a physical certificate in the mail made her feel incredibly proud.", parent: 'Mrs. Evelyn Carter', student: 'Mia Carter (Grade 2)', stars: 5, initials: 'EC', color: 'bg-pink-600' },
  { quote: "Transparent evaluation, great parent dashboard, and friendly support. My son won the Math Challenge — we are thrilled!", parent: 'Mrs. Sunita Deshmukh', student: 'Aditya (Grade 8)', stars: 5, initials: 'SD', color: 'bg-amber-500' },
];

export default function Home({ navigateTo, setSelectedComp }) {
  const handleRegisterClick = (compName) => {
    setSelectedComp(compName);
    navigateTo('register');
  };

  return (
    <div className="relative overflow-hidden">

      {/* ── 1. HERO SECTION ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#eef2ff] via-[#f5f0ff] to-[#fff7ed] overflow-hidden py-12 sm:py-16 xl:py-20 flex items-center">
        {/* Soft blobs */}
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] bg-amber-200 rounded-full blur-[80px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-200 rounded-full blur-[80px] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">

            {/* ── LEFT: Text content ─────────────────────────────────────────── */}
            <div className="xl:col-span-7 space-y-5 text-center xl:text-left order-2 xl:order-1">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white border border-indigo-200 shadow-sm px-4 py-2 rounded-full text-indigo-700 font-bold text-xs tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>onbording Championships 2026</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="font-poppins text-4xl sm:text-5xl xl:text-[46px] 2xl:text-[54px] font-black text-[#0f172a] leading-[1.15] tracking-tight">
                  Online Competitions <br className="hidden sm:inline" />
                  for School Students
                  <span className="block mt-3 text-3xl sm:text-4xl xl:text-[38px] 2xl:text-[44px]">
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Learn, Compete </span>
                    <span className="text-amber-500">&amp; Shine!</span>
                  </span>
                </h1>
              </div>

              <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-xl mx-auto xl:mx-0">
                Unlock potential across Academic Quizzes, Handwriting, Creative Art, Spelling bees, and Math challenges designed for Kindergarten to 10th Standard.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                <button
                  onClick={() => navigateTo('register')}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-4 px-10 rounded-2xl shadow-xl shadow-amber-400/30 active:scale-95 transition-all text-base tracking-wide focus:outline-none focus:ring-4 focus:ring-amber-300/50"
                >
                  Register Now
                </button>
                <button
                  onClick={() => navigateTo('competitions')}
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-bold py-4 px-8 rounded-2xl border-2 border-slate-200 shadow-md active:scale-95 transition-all text-base focus:outline-none focus:ring-4 focus:ring-indigo-100"
                >
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span>View Contests</span>
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 max-w-md mx-auto xl:mx-0">
                <div className="text-center xl:text-left">
                  <span className="block font-poppins font-black text-2xl text-[#0f172a]">KG–10th</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Eligibility</span>
                </div>
                <div className="text-center xl:text-left">
                  <span className="block font-poppins font-black text-2xl text-indigo-600">100%</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Secure Online</span>
                </div>
                <div className="text-center xl:text-left">
                  <span className="block font-poppins font-black text-2xl text-amber-500">Digital</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wide">Certificates</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Visual panel ─────────────────────────────────────────── */}
            <div className="xl:col-span-5 relative flex flex-col items-center gap-6 order-1 xl:order-2">
              {/* 3D Student image */}
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-[48px] blur-xl scale-105" />
                <img
                  src="/hero-students.png"
                  alt="Happy school students celebrating"
                  className="relative w-full rounded-[40px] drop-shadow-2xl"
                />

                {/* Floating awards badge — top left */}
                <div className="absolute top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center space-x-3 border border-slate-100 animate-float hidden sm:flex">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <Trophy className="w-5 h-5 fill-amber-500" />
                  </div>
                  <div>
                    <span className="block font-poppins font-black text-xs text-blue-950">Awards &amp; Medals</span>
                    <span className="block text-[9px] text-slate-400 font-semibold">For top position holders</span>
                  </div>
                </div>

                {/* Floating participants badge — bottom right */}
                <div className="absolute bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center space-x-3 border border-slate-100">
                  <div className="flex -space-x-2">
                    {['bg-blue-500', 'bg-pink-500', 'bg-amber-500', 'bg-emerald-500'].map((c, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[9px] font-black`}>
                        {['A', 'S', 'M', 'R'][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="block font-poppins font-black text-sm text-blue-950">50,000+</span>
                    <span className="text-[10px] text-slate-400 font-semibold">Students enrolled</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. COMPETITION CARDS SECTION ────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="inline-block text-[10px] font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full">5 Exciting Contests</span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-black text-[#0f172a]">Explore Our Featured Competitions</h2>
            <p className="text-slate-500 font-medium">Five curated categories designed for every type of young talent — KG to 10th Standard.</p>
          </div>

          {/* Competition cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((comp) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.id}
                  className="group relative bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${comp.color}`} />

                  <div className="p-6 space-y-4">
                    {/* Icon + Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 ${comp.light} rounded-2xl flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${comp.iconColor}`} />
                      </div>
                      <span className={`text-[10px] uppercase font-black px-3 py-1 rounded-full ${comp.light} ${comp.iconColor}`}>{comp.tag}</span>
                    </div>

                    <div>
                      <h3 className="font-poppins font-extrabold text-lg text-[#0f172a] group-hover:text-indigo-700 transition-colors leading-snug">{comp.title}</h3>
                      <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">{comp.desc}</p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-2 rounded-xl">
                      <Target className="w-3.5 h-3.5" />
                      <span>Eligibility: KG to 10th Standard</span>
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="px-6 pb-6 flex gap-3">
                    <button
                      onClick={() => handleRegisterClick(comp.title)}
                      className={`flex-1 bg-gradient-to-r ${comp.color} text-white font-bold py-3 rounded-2xl hover:opacity-90 active:scale-95 transition-all text-xs tracking-wide shadow-md`}
                    >
                      Register Now
                    </button>
                    <button
                      onClick={() => navigateTo('competitions')}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-3 rounded-2xl active:scale-95 transition-all group-hover:bg-indigo-50 group-hover:text-indigo-600"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-3xl p-8 flex flex-col justify-between text-white overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-poppins font-black text-xl leading-snug mb-3">Ready to Compete?</h3>
                <p className="text-indigo-200 text-sm font-medium leading-relaxed">Register in 2 minutes and start your journey to becoming a national champion.</p>
              </div>
              <button
                onClick={() => navigateTo('register')}
                className="mt-6 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-3.5 rounded-2xl active:scale-95 transition-all text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30"
              >
                <span>Start Today — It's Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-blue-950 to-purple-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">Our Impact</span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-black text-white">Numbers That Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: 50000, suffix: '+', label: 'Happy Participants', color: 'text-amber-400', desc: 'Active student learners', icon: Users },
              { val: 15, suffix: '+', label: 'Countries Reached', color: 'text-indigo-300', desc: 'Global peer network', icon: Globe },
              { val: 250, suffix: '+', label: 'Awards Given', color: 'text-emerald-400', desc: 'Physical & e-credentials', icon: Trophy },
              { val: 100, suffix: '%', label: 'Skill Enhancement', color: 'text-pink-400', desc: 'Proven cognitive progress', icon: Zap },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl text-center space-y-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className={`block font-poppins font-black text-3xl sm:text-4xl ${s.color}`}>
                      <Counter end={s.val} suffix={s.suffix} />
                    </span>
                    <span className="block text-xs font-bold text-slate-100 tracking-wide mt-1">{s.label}</span>
                    <span className="block text-[10px] text-slate-400 font-semibold mt-0.5">{s.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full inline-block">Our Value</span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-black text-[#0f172a]">Why Students &amp; Parents Choose onbording</h2>
            <p className="text-slate-500 font-medium">We design competitions that inspire rather than intimidate — making learning joyful and rewarding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen className="w-7 h-7 text-indigo-600" />, bg: 'bg-indigo-50 border-indigo-100', title: 'Skill-First Pedagogy', desc: 'Every challenge is reviewed by pedagogy experts to support cognitive learning across grammar, math fluency, and creativity.' },
              { icon: <Shield className="w-7 h-7 text-amber-600" />, bg: 'bg-amber-50 border-amber-100', title: 'Zero Bias Evaluation', desc: 'Every handwriting sample, art sketch, or quiz answer undergoes careful double-blind evaluation for 100% fair results.' },
              { icon: <Globe className="w-7 h-7 text-emerald-600" />, bg: 'bg-emerald-50 border-emerald-100', title: 'Global Peer Benchmark', desc: 'Compete safely from home alongside students from 15+ countries, building global academic awareness and confidence.' },
            ].map((b, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${b.bg}`}>{b.icon}</div>
                <h3 className="font-poppins font-bold text-lg text-[#0f172a]">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FIND YOUR TRIBE (Community) ──────────────────────────────────── */}
      <section className="relative overflow-hidden py-0">
        <div className="relative bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e3a8a] text-white">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 50%, #6366f1 0%, transparent 60%)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="space-y-7 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Student Community</span>
                </div>
                <h2 className="font-poppins font-black text-4xl sm:text-5xl leading-tight text-white">
                  Find Your Tribe,<br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Build Your Network.</span>
                </h2>
                <p className="text-indigo-200 font-medium text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                  Connect with like-minded students across India and the world. Share preparation tips, celebrate wins, and make friends who love learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigateTo('register')}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold py-4 px-8 rounded-2xl shadow-xl shadow-amber-500/30 active:scale-95 transition-all text-sm tracking-wide flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4 fill-slate-900" />
                    <span>Join for Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTo('competitions')}
                    className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl active:scale-95 transition-all text-sm"
                  >
                    <span>Explore Competitions</span>
                  </button>
                </div>
              </div>
              {/* Visual: student avatars mosaic */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  {/* Large center circle */}
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 relative">
                    <div className="text-center space-y-2 p-4">
                      <Trophy className="w-16 h-16 text-white mx-auto" />
                      <span className="block font-poppins font-black text-white text-lg">Champions</span>
                      <span className="text-white/80 text-xs font-semibold">From KG to Grade 10</span>
                    </div>
                    {/* Orbiting avatars */}
                    {[
                      { bg: 'bg-blue-500', init: 'A', style: { top: '-16px', left: '50%', transform: 'translateX(-50%)' } },
                      { bg: 'bg-pink-500', init: 'S', style: { top: '50%', right: '-16px', transform: 'translateY(-50%)' } },
                      { bg: 'bg-violet-500', init: 'M', style: { bottom: '-16px', left: '50%', transform: 'translateX(-50%)' } },
                      { bg: 'bg-emerald-500', init: 'R', style: { top: '50%', left: '-16px', transform: 'translateY(-50%)' } },
                      { bg: 'bg-amber-500', init: 'K', style: { top: '15%', right: '15%' } },
                      { bg: 'bg-rose-500', init: 'P', style: { bottom: '15%', right: '15%' } },
                    ].map((a, i) => (
                      <div key={i} className={`absolute w-12 h-12 ${a.bg} rounded-full border-4 border-white flex items-center justify-center text-white font-black text-sm shadow-xl`} style={a.style}>
                        {a.init}
                      </div>
                    ))}
                  </div>
                  {/* Floating badges */}
                  <div className="absolute top-0 -left-6 bg-white rounded-2xl shadow-xl p-3 text-center">
                    <span className="block font-poppins font-black text-base text-indigo-900">15+</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Countries</span>
                  </div>
                  <div className="absolute bottom-0 -right-4 bg-white rounded-2xl shadow-xl p-3 text-center">
                    <span className="block font-poppins font-black text-base text-amber-600">50K+</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texts */}
            <div className="space-y-7 text-center lg:text-left">
              <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full inline-block">Be Certified</span>
              <h2 className="font-poppins text-3xl sm:text-4xl font-black text-[#0f172a]">Earn Recognized Digital &amp; Physical Certificates</h2>
              <p className="text-slate-500 font-medium leading-relaxed">Every child is celebrated! onbording provides a range of recognition awards based on ranking.</p>
              <div className="space-y-5">
                {[
                  { title: 'National Rank Certificates', desc: 'Top 3 scorers receive physical trophies, gold medals, and special rank profiles.', color: 'bg-amber-100 text-amber-600' },
                  { title: 'Excellence Certificates', desc: 'Students achieving 85%+ receive certificates validating their outstanding expertise.', color: 'bg-indigo-100 text-indigo-600' },
                  { title: 'Participation Certificates', desc: 'Every registrant gets a beautiful digital participation credential.', color: 'bg-emerald-100 text-emerald-600' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color}`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-sm text-[#0f172a]">{c.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate card mockup */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm bg-white border-2 border-amber-400 rounded-3xl p-8 shadow-2xl relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-xl" />
                <div className="text-center space-y-5 border-2 border-slate-100 rounded-2xl p-6 bg-white relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto relative">
                    <GraduationCap className="w-7 h-7 text-blue-900" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-3 h-3 fill-white text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-black text-base text-blue-950 tracking-wide">onbording Certificate</h3>
                    <span className="text-[9px] text-indigo-600 font-black tracking-widest uppercase">Of Academic Accomplishment</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Proudly Conferred To</p>
                  <h4 className="font-poppins text-xl font-extrabold text-blue-900 italic">Master Rohan Sharma</h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    for securing <span className="text-amber-500 font-bold">1st Rank</span> in the National Quiz Championship (Grade 4)
                    with an evaluation score of <span className="text-indigo-600 font-bold">98.5%</span>.
                  </p>
                  <div className="flex justify-between items-center text-[9px] border-t border-slate-100 pt-4 text-slate-400">
                    <div><span className="block text-slate-700 font-bold font-poppins">Dr. Amanda Pierce</span><span>Chief Academic Judge</span></div>
                    <div><span className="block text-slate-700 font-bold font-poppins">onbording Org.</span><span>OB-9028-4F</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full inline-block">Parent Reviews</span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-black text-[#0f172a]">What Families Say About Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 relative overflow-hidden group">
                {/* Backdrop Quote Icon */}
                <div className="absolute right-6 top-4 text-slate-100 text-7xl font-serif select-none pointer-events-none group-hover:text-indigo-50/70 transition-colors duration-300">
                  “
                </div>
                <div className="flex space-x-1 relative z-10">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic text-sm leading-relaxed font-semibold relative z-10">"{t.quote}"</p>
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-poppins font-black text-sm text-white ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-blue-950 font-poppins">{t.parent}</span>
                    <span className="block text-[11px] text-slate-400 font-medium">{t.student}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA BANNER ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden text-white text-center">
        {/* Soft background light */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-amber-400">
            <Trophy className="w-4 h-4" />
            <span>Join 50,000+ Enrolled Students</span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-5xl font-black leading-tight text-white flex flex-wrap items-center justify-center gap-3">
            <span>Ready to Help Your Child Shine?</span>
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 animate-pulse inline" />
          </h2>
          <p className="text-slate-300 font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Registration takes just 2 minutes! Choose a competition, fill in details, and access preparation worksheets instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => navigateTo('register')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold py-4 px-10 rounded-2xl shadow-xl shadow-amber-500/20 active:scale-95 transition-all text-base tracking-wide flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-amber-300/50"
            >
              <Zap className="w-5 h-5 text-white fill-white" />
              <span>Start Registration — Free</span>
            </button>
            <button
              onClick={() => navigateTo('competitions')}
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl active:scale-95 transition-all text-base focus:outline-none focus:ring-4 focus:ring-white/10"
            >
              Browse All Competitions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
