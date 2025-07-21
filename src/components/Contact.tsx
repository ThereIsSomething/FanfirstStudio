import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+86',
    experience: '',
    currentEarnings: '',
    goals: '',
    contentType: '',
    audience: '',
    platforms: [],
    message: ''
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const countryCodes = [
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountryCodeChange = (code: string) => {
    setFormData({
      ...formData,
      countryCode: code
    });
    setIsCountryDropdownOpen(false);
  };

  const handlePlatformChange = (platform: string) => {
    const updatedPlatforms = formData.platforms.includes(platform)
      ? formData.platforms.filter(p => p !== platform)
      : [...formData.platforms, platform];
    
    setFormData({
      ...formData,
      platforms: updatedPlatforms
    });
  };

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-smooth"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center aqua-glass px-6 py-3 rounded-full mb-6 edge-glow">
            <Send className="h-5 w-5 text-purple-400 mr-3 animate-pulse" />
            <span className="text-sm font-bold aqua-text tracking-wider">{t('contact.badge').toUpperCase()}</span>
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            {t('contact.title')}
            <span className="block aqua-text"> {t('contact.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="aqua-glass-dark rounded-3xl p-8 edge-glow">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="aqua-gradient p-2 rounded-lg mr-3">
                  <Send className="h-5 w-5 text-white" />
                </div>
                {t('contact.formTitle')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                      placeholder={t('contact.name')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                      placeholder={t('contact.email')}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.phone')}
                    </label>
                    <div className="flex">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center px-3 py-3 aqua-glass text-white rounded-l-xl border-r border-white/20 hover:bg-white/10 transition-all duration-300 min-w-[100px]"
                        >
                          <span className="mr-2">{selectedCountry?.flag}</span>
                          <span className="text-sm">{formData.countryCode}</span>
                          <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                            isCountryDropdownOpen ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-64 aqua-glass-dark rounded-xl border border-white/20 shadow-2xl z-50 max-h-60 overflow-y-auto">
                            <div className="p-2">
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleCountryCodeChange(country.code)}
                                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                                    formData.countryCode === country.code
                                      ? 'aqua-gradient text-white'
                                      : 'text-gray-300 hover:bg-white/10'
                                  }`}
                                >
                                  <span className="text-lg">{country.flag}</span>
                                  <span className="text-sm font-medium">{country.code}</span>
                                  <span className="text-xs text-gray-400">{country.country}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 aqua-glass text-white rounded-r-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                        placeholder="123 456 7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.experience')} *
                    </label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                    >
                      <option value="" className="bg-slate-800">{t('contact.experience')}</option>
                      <option value="beginner" className="bg-slate-800">Beginner (0-6 months)</option>
                      <option value="intermediate" className="bg-slate-800">Intermediate (6 months - 2 years)</option>
                      <option value="experienced" className="bg-slate-800">Experienced (2+ years)</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Current Monthly Earnings
                    </label>
                    <select
                      name="currentEarnings"
                      value={formData.currentEarnings}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                    >
                      <option value="" className="bg-slate-800">Select earnings range</option>
                      <option value="0-1k" className="bg-slate-800">$0 - $1,000</option>
                      <option value="1k-5k" className="bg-slate-800">$1,000 - $5,000</option>
                      <option value="5k-10k" className="bg-slate-800">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-slate-800">$10,000 - $25,000</option>
                      <option value="25k+" className="bg-slate-800">$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Income Goals (Monthly)
                    </label>
                    <select
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                    >
                      <option value="" className="bg-slate-800">Select target income</option>
                      <option value="5k-10k" className="bg-slate-800">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-slate-800">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-slate-800">$25,000 - $50,000</option>
                      <option value="50k-100k" className="bg-slate-800">$50,000 - $100,000</option>
                      <option value="100k+" className="bg-slate-800">$100,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Content Type
                    </label>
                    <select
                      name="contentType"
                      value={formData.contentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                    >
                      <option value="" className="bg-slate-800">Select content type</option>
                      <option value="lifestyle" className="bg-slate-800">NSFW</option>
                      <option value="fitness" className="bg-slate-800">Fetish</option>
                      <option value="gaming" className="bg-slate-800">ASMR</option>
                      <option value="adult" className="bg-slate-800">COSPLAY/ROLEPLAY</option>
                      <option value="other" className="bg-slate-800">Humiliation</option>
                      <option value="other" className="bg-slate-800">SOFT</option>
                      <option value="other" className="bg-slate-800">Kink</option>
                      <option value="other" className="bg-slate-800">Custom (discussion will take place)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Current Audience Size
                    </label>
                    <select
                      name="audience"
                      value={formData.audience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                    >
                      <option value="" className="bg-slate-800">Select audience size</option>
                      <option value="0-1k" className="bg-slate-800">0 - 1,000 followers</option>
                      <option value="1k-10k" className="bg-slate-800">1,000 - 10,000 followers</option>
                      <option value="10k-50k" className="bg-slate-800">10,000 - 50,000 followers</option>
                      <option value="50k-100k" className="bg-slate-800">50,000 - 100,000 followers</option>
                      <option value="100k+" className="bg-slate-800">100,000+ followers</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.platforms')} *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['OnlyFans', 'Fansly', 'FansOne', 'ManyVids', 'Swame', 'Fanvue', 'SpankChain', 'FanCentro', 'StripChat', 'SellyFans', 'FansMine', 'Instagram', 'Other'].map((platform) => (
                      <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.platforms.includes(platform)}
                          onChange={() => handlePlatformChange(platform)}
                          className="w-4 h-4 text-purple-400 bg-transparent border-gray-500 rounded focus:ring-purple-400"
                        />
                        <span className="text-sm text-gray-300">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                    placeholder="Share your content creation goals, challenges you're facing, and what you hope to achieve with professional management..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full aqua-gradient text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex items-center justify-center edge-glow"
                >
                  {t('contact.submit')}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="aqua-glass-dark rounded-3xl p-8 edge-glow">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="aqua-gradient p-2 rounded-lg mr-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="aqua-gradient p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-300">team@fanfirst.studio</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="aqua-gradient p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-gray-300">let's connect via email first</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="aqua-gradient p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Hours</div>
                    <div className="text-gray-300">24/7 Support Available</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="aqua-gradient p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Location</div>
                    <div className="text-gray-300">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aqua-gradient text-white rounded-3xl p-8 edge-glow">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-white/80 mb-4">
                We typically respond to applications within 24 hours. Our team will review your application and get back to you.
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">{"< 24hrs"}</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;