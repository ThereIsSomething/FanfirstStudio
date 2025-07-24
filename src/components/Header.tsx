import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Shield, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-dark shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative gradient-primary p-2 sm:p-3 rounded-2xl">
                <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-white animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
                FanFirst
              </span>
              <span className="font-display text-xs sm:text-sm font-medium gradient-text tracking-wider">
                STUDIO
              </span>
            </div>
            <div className="hidden md:flex items-center ml-4 glass px-3 py-1 rounded-full">
              <Shield className="h-3 w-3 text-purple-400 mr-1" />
              <span className="text-xs text-purple-300 font-semibold tracking-wide">ELITE</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {[
              { key: 'services', label: t('header.services') },
              { key: 'testimonials', label: t('header.success') },
              { key: 'pricing', label: t('header.pricing') },
              { key: 'contact', label: t('header.apply') }
            ].map((item, index) => (
              <a 
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.key);
                }}
                className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide group aqua-glass-hover"
              >
                <span className="relative z-10 text-sm xl:text-base">{item.label}</span>
                <div className="absolute inset-0 aqua-gradient rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -m-2"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 aqua-gradient group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative btn-modern aqua-gradient text-white px-4 xl:px-8 py-3 rounded-xl font-bold tracking-wide hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group overflow-hidden edge-glow"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                <span className="hidden xl:inline">{t('header.joinElite').toUpperCase()}</span>
                <span className="xl:hidden">JOIN</span>
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
              <LanguageSelector />
            <button 
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="aqua-glass-dark rounded-2xl mx-4 mb-4 p-6 space-y-4 edge-glow">
            {[
              { key: 'services', label: t('header.services') },
              { key: 'testimonials', label: t('header.success') },
              { key: 'pricing', label: t('header.pricing') },
              { key: 'contact', label: t('header.apply') }
            ].map((item) => (
              <a 
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.key);
                }}
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="hidden md:flex items-center justify-between pt-4 border-t border-white/10">
              <LanguageSelector />
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }
              }}
              className="w-full aqua-gradient text-white px-6 py-3 rounded-xl font-bold tracking-wide mt-4 edge-glow"
            >
              {t('header.joinElite').toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;