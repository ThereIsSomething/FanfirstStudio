import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-2 p-2 sm:p-2.5 rounded-xl aqua-glass hover:bg-white/10 transition-all duration-300 min-w-[70px] sm:min-w-[90px] border border-white/20 hover:border-white/40"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
        <span className="text-sm sm:text-base font-medium text-gray-300">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-xs font-medium text-gray-400">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 text-gray-300 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-52 aqua-glass-dark rounded-xl border border-white/20 shadow-2xl z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  language === lang.code
                    ? 'aqua-gradient text-white'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="text-xs text-gray-400">{lang.code.toUpperCase()}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;