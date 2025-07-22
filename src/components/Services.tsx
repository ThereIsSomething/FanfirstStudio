import React from 'react';
import { Camera, MessageCircle, BarChart3, Settings, Users, Shield, Sparkles, Zap, Star, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PlatformIntegration = () => {
  const platforms = [
    { name: 'OnlyFans', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Fansly', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'FansOne', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'ManyVids', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Swame', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Fanvue', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'SpankChain', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'FanCentro', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
    { name: 'Stripchat', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' }
  ];

  return (
    <div className="mt-20 animate-slide-up-fade delay-1000">
      <div className="text-center mb-12">
        <h3 className="font-display text-3xl font-black text-white mb-4">
         {t('services.platforms.title') || 'Supported'} <span className="gradient-text">{t('services.platforms.highlight') || 'Platforms'}</span>
        </h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
         {t('services.platforms.desc') || 'We manage and optimize your presence across all major creator platforms'}
        </p>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
        {platforms.map((platform, index) => (
          <div 
            key={platform.name}
            className="glass-dark rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
            style={{animationDelay: `${index * 100}ms`}}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>
              <span className="text-white text-sm font-semibold group-hover:gradient-text transition-all duration-300">
                {platform.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      title: t('services.content.title'),
      description: t('services.content.desc'),
      features: ["AI-powered strategy", "Professional shoots", "Viral optimization", "Trend prediction"],
      premium: true
    },
    {
      icon: MessageCircle,
      title: t('services.chat.title'),
      description: t('services.chat.desc'),
      features: ["Elite chat operators", "Revenue psychology", "VIP cultivation", "Retention mastery"],
      premium: false
    },
    {
      icon: BarChart3,
      title: t('services.revenue.title'),
      description: t('services.revenue.desc'),
      features: ["AI optimization", "Predictive analytics", "Dynamic pricing", "Multi-platform sync"],
      premium: true
    },
    {
      icon: Settings,
      title: t('services.account.title'),
      description: t('services.account.desc'),
      features: ["Multi-platform mastery", "Automated systems", "24/7 monitoring", "Technical warfare"],
      premium: false
    },
    {
      icon: Users,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      features: ["Viral engineering", "Celebrity collabs", "Media empire", "Brand partnerships"],
      premium: true
    },
    {
      icon: Shield,
      title: t('services.legal.title'),
      description: t('services.legal.desc'),
      features: ["Legal warfare", "Privacy fortress", "Contract mastery", "Threat elimination"],
      premium: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-smooth"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up-fade">
          <div className="inline-flex items-center glass px-6 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-sm font-semibold gradient-text tracking-wider">{(t('services.badge') || 'Complete Solution Suite').toUpperCase()}</span>
          </div>
          
          <h2 className="font-display text-responsive-xl font-black text-white mb-6 tracking-tight">
            {t('services.title') || 'Complete Creator'}
            <span className="block gradient-text"> {t('services.titleHighlight') || 'Management Suite'}</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('services.subtitle') || 'Professional services designed to maximize your success and streamline your business.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:scale-105 overflow-hidden animate-slide-up-fade`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Premium Badge */}
              {service.premium && (
                <div className="absolute top-4 right-4 aqua-gradient text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <Crown className="h-3 w-3 mr-1" />
                  PREMIUM
                </div>
              )}
              
              {/* Icon */}
              <div className={`relative mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center space-x-4`}>
                <div className="relative">
                  <div className="absolute inset-0 aqua-gradient rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative aqua-gradient p-4 rounded-2xl">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="aqua-glass px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold aqua-text tracking-wide">{service.title.toUpperCase()}</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed font-light">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 gradient-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-slide-up-fade delay-700">
          <div className="glass-dark rounded-3xl p-12 max-w-4xl mx-auto hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-purple-400 mr-3 animate-pulse" />
              <h3 className="font-display text-3xl font-black text-white">The Elite Guarantee</h3>
              <Star className="h-6 w-6 text-purple-400 ml-3 animate-pulse" />
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We don't just promise results — we <span className="font-bold gradient-text">guarantee</span> your transformation 
              into a 7-figure creator within 90 days.
            </p>
            
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-modern gradient-primary text-white px-12 py-4 rounded-2xl font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 group"
            >
              <span className="flex items-center">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Claim Your Elite Status
              </span>
            </button>
          </div>
        </div>
        
        {/* Platform Integration */}
        <PlatformIntegration />
      </div>
    </section>
  );
};

export default Services;