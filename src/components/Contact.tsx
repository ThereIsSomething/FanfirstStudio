import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, ChevronDown, Globe, Users, Briefcase, MessageSquare, CreditCard, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../../supabaseClient';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    countryCode: '+86',
    communicationLanguage: '',
    referralCode: '',
    region: '',
    existingPlatformAccounts: '',
    serviceType: '',
    planType: '',
    selectedPlan: '',
    experience: '',
    currentEarnings: '',
    goals: '',
    contentType: '',
    audience: '',
    selectedPlatforms: [],
    message: ''
  });
  
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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

  const communicationLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'ja', name: '日本語 (Japanese)', flag: '🇯🇵' }
  ];

  const serviceTypes = [
    { value: 'onboarding', label: 'Account Onboarding & Setup', icon: Users },
    { value: 'marketing', label: 'Marketing & Promotion', icon: MessageSquare },
    { value: 'payment', label: 'Payment Setup & Optimization', icon: CreditCard },
    { value: 'management', label: 'Complete Account Management', icon: Settings },
    { value: 'consultation', label: 'Strategy Consultation', icon: Briefcase },
    { value: 'other', label: 'Other Services', icon: Globe }
  ];

  const planTypes = [
    { value: 'onetime', label: 'One-Time Setup' },
    { value: 'monthly', label: 'Monthly Management' }
  ];

  const onetimePlans = [
    { value: 'starter-setup', label: 'Starter Setup - $499' },
    { value: 'professional-launch', label: 'Professional Launch - $999' },
    { value: 'elite-empire-builder', label: 'Elite Empire Builder - $2,499' }
  ];

  const monthlyPlans = [
    { value: 'growth-partner', label: 'Growth Partner - $297/month' },
    { value: 'success-accelerator', label: 'Success Accelerator - $597/month' },
    { value: 'elite-domination', label: 'Elite Domination - $1,197/month' }
  ];

  const getAvailablePlans = () => {
    return formData.planType === 'onetime' ? onetimePlans : monthlyPlans;
  };

  const handlePlanTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      planType: e.target.value,
      selectedPlan: '' // Reset selected plan when plan type changes
    });
  };

  const availablePlatforms = [
    'OnlyFans', 'Fansly', 'FansOne', 'ManyVids', 'Swame', 'Fanvue', 
    'SpankChain', 'FanCentro', 'StripChat', 'SellyFans', 'FansMine', 
    'Instagram', 'TikTok', 'YouTube', 'Twitter/X', 'Snapchat', 'Telegram', 'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Prepare data for Supabase submission
      const submissionData = {
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        country_code: formData.countryCode,
        communication_language: formData.communicationLanguage,
        referral_code: formData.referralCode || null,
        region: formData.region,
        existing_platform_accounts: formData.existingPlatformAccounts,
        service_type: formData.serviceType,
        experience_level: formData.experience,
        current_monthly_earnings: formData.currentEarnings,
        income_goals: formData.goals,
        content_type: formData.contentType,
        audience_size: formData.audience,
        selected_platforms: formData.selectedPlatforms,
        message: formData.message,
        plan_type: formData.planType,
        selected_plan: formData.selectedPlan,
      };

      // TODO: Replace with actual Supabase integration
      const { data, error } = await supabase
      .from('client_onboarding_submissions')
      .insert([submissionData]);

      if (error) {
        console.error('Supabase Error:', error);
        throw new Error('Supabase submission failed');
      }

      
      await emailjs.send(
        'service_6zm2dfr',
        'template_0102kt2',
      {
        name: formData.name,
        email: formData.email
      },
      'k95xlGHauzgaayEvL'
);



      // Simulate API call for now
      console.log('Form submitted with data:', submissionData);
      
      // Simulate success response
      setTimeout(() => {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Hurray, Application submitted successfully! We will contact you within 24 hours. Good things are coming your way.' 
        });
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+86',
          communicationLanguage: '',
          referralCode: '',
          region: '',
          existingPlatformAccounts: '',
          serviceType: '',
          planType: '',
          selectedPlan: '',
          experience: '',
          currentEarnings: '',
          goals: '',
          contentType: '',
          audience: '',
          selectedPlatforms: [],
          message: ''
        });
      }, 1500);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit application. Please try again.' 
      });
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log('Input changed:', e.target.name, '=', e.target.value);
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
    console.log('handlePlatformChange called for:', platform);
    console.log('Current selected platforms:', formData.selectedPlatforms);
    
    const updatedPlatforms = formData.selectedPlatforms.includes(platform)
      ? formData.selectedPlatforms.filter(p => p !== platform)
      : [...formData.selectedPlatforms, platform];
    
    console.log('Updated platforms:', updatedPlatforms);
    
    setFormData({
      ...formData,
      selectedPlatforms: updatedPlatforms
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
            Complete our comprehensive onboarding form to begin your journey to creator success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="aqua-glass-dark rounded-3xl p-8 edge-glow">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="aqua-gradient p-2 rounded-lg mr-3">
                  <Send className="h-5 w-5 text-white" />
                </div>
                Client Onboarding Application
              </h3>
              
              {/* Status Messages */}
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                    Basic Information
                  </h4>
                  
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
                        placeholder="Enter your full name (Same as National ID)"
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
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
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
                        Region
                      </label>
                      <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                        placeholder="Province or State"
                      />
                    </div>
                  </div>
                </div>

                {/* Communication & Referral */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                    Communication Preferences
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Communication Language *
                      </label>
                      <select
                        name="communicationLanguage"
                        required
                        value={formData.communicationLanguage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                      >
                        <option value="" className="bg-slate-800">Select your preferred language</option>
                        {communicationLanguages.map((lang) => (
                          <option key={lang.code} value={lang.code} className="bg-slate-800">
                            {lang.flag} {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Referral Code <span className="text-gray-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                        placeholder="Enter referral code if you have one"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                    Service Requirements
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Primary Service Type *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {serviceTypes.map((service, index) => {
                        const id = `service-${service.value}-${index}`;
                        return (
                          <div key={service.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer group">
                            <div className="relative">
                              <input
                                type="radio"
                                id={id}
                                name="serviceType"
                                value={service.value}
                                checked={formData.serviceType === service.value}
                                onChange={(e) => {
                                  console.log('Service type selected:', e.target.value);
                                  handleInputChange(e);
                                }}
                                className="w-4 h-4 text-purple-400 bg-transparent border-2 border-gray-500 focus:ring-purple-400 focus:ring-2 cursor-pointer"
                                style={{ accentColor: '#a855f7' }}
                              />
                            </div>
                            <div className="flex items-center space-x-2 flex-1">
                              <service.icon className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-200" />
                              <label htmlFor={id} className="text-sm text-gray-300 cursor-pointer group-hover:text-white transition-colors duration-200 flex-1">
                                {service.label}
                              </label>
                            </div>
                          </div>
                        );
                      })}

                    </div>
                  </div>
                </div>

                {/* Plan Preference */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                    Plan Preference
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Plan Type
                      </label>
                      <select
                        name="planType"
                        value={formData.planType}
                        onChange={handlePlanTypeChange}
                        className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                      >
                        <option value="" className="bg-slate-800">Select plan type</option>
                        {planTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-slate-800">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Plan
                      </label>
                      <select
                        name="selectedPlan"
                        value={formData.selectedPlan}
                        onChange={handleInputChange}
                        disabled={!formData.planType}
                        className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="" className="bg-slate-800">
                          {formData.planType ? 'Select your preferred plan' : 'Select plan type first'}
                        </option>
                        {formData.planType && getAvailablePlans().map((plan) => (
                          <option key={plan.value} value={plan.value} className="bg-slate-800">
                            {plan.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Platform Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                    Platform Information
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Existing Platform Accounts
                    </label>
                    <textarea
                      name="existingPlatformAccounts"
                      rows={3}
                      value={formData.existingPlatformAccounts}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                      placeholder="Enter your existing social media/platform handles separated by commas (e.g., @username1, @username2, @username3)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Platforms of Interest *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {availablePlatforms.map((platform) => (
                        <div key={platform} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="checkbox"
                              id={`platform-${platform.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              checked={formData.selectedPlatforms.includes(platform)}
                              onChange={(e) => {
                                console.log('Platform toggled:', platform, 'checked:', e.target.checked);
                                handlePlatformChange(platform);
                              }}
                              className="w-4 h-4 text-purple-400 bg-transparent border-2 border-gray-500 rounded focus:ring-purple-400 focus:ring-2 cursor-pointer"
                              style={{ accentColor: '#a855f7' }}
                            />
                          </div>
                          <label 
                            htmlFor={`platform-${platform.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            className="text-sm text-gray-300 cursor-pointer group-hover:text-white transition-colors duration-200 flex-1"
                          >
                            {platform}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience & Goals */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
                    Experience & Goals
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 bg-white/5"
                      >
                        <option value="" className="bg-slate-800">Select your experience level</option>
                        <option value="beginner" className="bg-slate-800">Beginner (0-6 months)</option>
                        <option value="intermediate" className="bg-slate-800">Intermediate (6 months - 2 years)</option>
                        <option value="experienced" className="bg-slate-800">Experienced (2+ years)</option>
                      </select>
                    </div>
                    
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
                        <option value="0-0.5k" className="bg-slate-800">$0 - $500</option>
                        <option value="0.5k-1k" className="bg-slate-800">$500 - $1,000</option>
                        <option value="1k-5k" className="bg-slate-800">$1,000 - $5,000</option>
                        <option value="5k-10k" className="bg-slate-800">$5,000 - $10,000</option>
                        <option value="10k-20k" className="bg-slate-800">$10,000 - $20,000</option>
                        <option value="20k-50k" className="bg-slate-800">$20,000 - $50,000</option>
                        <option value="50k+" className="bg-slate-800">$50,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
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
                        <option value="1k-2k" className="bg-slate-800">$1,000 - $2,000</option>
                        <option value="2k-5k" className="bg-slate-800">$2,000 - $5,000</option>
                        <option value="5k-10k" className="bg-slate-800">$5,000 - $10,000</option>
                        <option value="10k-20k" className="bg-slate-800">$10,000 - $20,000</option>
                        <option value="20k-50k" className="bg-slate-800">$20,000 - $50,000</option>
                        <option value="50k+" className="bg-slate-800">$50,000+</option>
                      </select>
                    </div>
                    
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
                        <option value="" className="bg-slate-800">Select content type or Intensity</option>
                        <option value="nsfw-solo" className="bg-slate-800">NSFW(solo)</option>
                        <option value="nsfw-multi" className="bg-slate-800">NSFW(multi)</option>
                        <option value="povsex" className="bg-slate-800">POV</option>
                        <option value="tease" className="bg-slate-800">Tease</option>
                        <option value="fetish" className="bg-slate-800">Fetish</option>
                        <option value="asmr" className="bg-slate-800">ASMR</option>
                        <option value="cosplay" className="bg-slate-800">Cosplay/Roleplay</option>
                        <option value="lifestyle" className="bg-slate-800">Lifestyle</option>
                        <option value="fitness" className="bg-slate-800">Fitness</option>
                        <option value="fashion" className="bg-slate-800">Fashion</option>
                        <option value="other" className="bg-slate-800">Other</option>
                      </select>
                    </div>
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
                
                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 aqua-glass text-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 bg-white/5"
                    placeholder="Tell us about your goals, challenges, or any specific requirements you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full aqua-gradient text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex items-center justify-center edge-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
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
                Contact Information
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
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Response Time</div>
                    <div className="text-gray-300">Within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="aqua-gradient p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Languages</div>
                    <div className="text-gray-300">English, 中文, 日本語</div>
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
              <h3 className="text-xl font-bold mb-4">Application Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-white/90">Submit application form</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-white/90">Initial consultation call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-white/90">Custom strategy development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-white/90">Begin transformation</span>
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