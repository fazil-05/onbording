import React, { useState } from 'react';
import { Menu, X, Award, Flame } from 'lucide-react';

export default function Navbar({ currentPage, navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'competitions', label: 'Competitions' },
    { id: 'about', label: 'About Us' },
    { id: 'results', label: 'Results' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 glass-nav transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-400 p-2.5 rounded-2xl shadow-md transform group-hover:rotate-12 transition-transform duration-300">
              <Award className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="font-poppins font-black text-2xl tracking-tight bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent">
                on<span className="text-amber-500">boreding</span>
              </span>
              <div className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase -mt-1 block">
                KG to 10th Grade
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
                    isActive 
                      ? 'bg-blue-50 text-blue-900 shadow-sm border border-blue-100/50' 
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Register CTA */}
          <div className="hidden xl:flex items-center">
            <button
              onClick={() => handleNavClick('register')}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-white rounded-2xl group bg-gradient-to-br from-orange-500 to-yellow-400 group-hover:from-orange-500 group-hover:to-yellow-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 mt-2 shadow-lg shadow-orange-500/20 active:scale-95 transition-transform duration-150"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-indigo-900 rounded-[14px] group-hover:bg-opacity-0 flex items-center space-x-2">
                <Flame className="w-4 h-4 text-orange-400 group-hover:text-white animate-pulse" />
                <span>Register Now</span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-blue-900 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`xl:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1.5 bg-slate-50/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold tracking-wide transition-all ${
                  isActive 
                    ? 'bg-blue-900 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-200 mt-4 px-2">
            <button
              onClick={() => handleNavClick('register')}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-orange-500/25 active:scale-95 transition-transform"
            >
              <Flame className="w-5 h-5 text-white animate-bounce" />
              <span>Register Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
