import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5' 
          : 'bg-white/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-lg font-display font-bold text-charcoal-900 tracking-tight"
        >
          <span className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 font-bold text-sm shadow-subtle group-hover:scale-105 transition-transform">
            S
          </span>
          <span>
            {PERSONAL_INFO.brandName}
            <span className="text-purple-600 font-black">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-50/80 px-2.5 py-1.5 rounded-full border border-slate-200/60 shadow-subtle">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-purple-700 shadow-sm font-semibold' 
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-charcoal-700 bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700 transition-all duration-200 shadow-subtle"
          >
            <FileText className="w-3.5 h-3.5 text-purple-600" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg text-charcoal-600 hover:bg-slate-100"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4 text-purple-600" />
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-charcoal-700 hover:bg-slate-100 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-6 py-5 shadow-lg transition-all animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-charcoal-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
