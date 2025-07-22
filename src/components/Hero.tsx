import React from 'react';
import { ArrowRight, TrendingUp, Users, Shield, Sparkles, Star, Zap, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 aqua-gradient opacity-20 liquid-morph blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 aqua-gradient opacity-15 liquid-morph blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] aqua-gradient opacity-10 liquid-morph blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="relative z-10 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center aqua-glass px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-slide-up-fade edge-glow">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2 sm:mr-3 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold aqua-text tracking-wider">{(t('hero.badge') || 'Elite Creator Management').toUpperCase()}</span>
              <div className="ml-3 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
                ))}
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4 animate-slide-up-fade delay-200">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                {t('hero.title') || 'Professional Creator'}
                <span className="block aqua-text animate-gradient-shift"> {t('hero.titleHighlight') || 'Management Agency'}</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                {t('hero.subtitle') || 'The premier agency for content creator success. We provide complete management solutions to maximize your potential.'}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-fade delay-500">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative btn-modern aqua-gradient text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg tracking-wide hover:shadow-2xl hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden edge-glow"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce-gentle" />
                  {t('hero.getStarted') || 'Get Started Today'}
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('testimonials');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="aqua-glass text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 edge-glow text-sm sm:text-base"
              >
                {t('hero.viewStories') || 'View Success Stories'}
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-slide-up-fade delay-700">
              {[
                { value: "300%", label: t('hero.avgGrowth') || 'Average Growth' },
                { value: "$50M+", label: t('hero.revenue') || 'Revenue Generated' },
                { value: "500+", label: t('hero.creators') || 'Happy Creators' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black aqua-text group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Interactive Cards */}
          <div className="relative z-10 animate-slide-up-fade delay-1000 mt-12 lg:mt-0">
            <div className="space-y-6">
              {/* Main Card */}
              <div className="aqua-glass-dark rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group edge-glow">
                <div className="space-y-6">
                  {[
                    { icon: Users, title: t('hero.card1.title') || "Professional Management", desc: t('hero.card1.desc') || "Expert team dedicated to your success" },
                    { icon: TrendingUp, title: t('hero.card2.title') || "Revenue Growth", desc: t('hero.card2.desc') || "Proven strategies for income optimization" },
                    { icon: Shield, title: t('hero.card3.title') || "Complete Protection", desc: t('hero.card3.desc') || "Privacy and legal security included" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                      <div className="aqua-gradient p-2 sm:p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 group-hover:aqua-text transition-all duration-300 text-sm sm:text-base">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aqua-glass-dark rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-float-smooth edge-glow">
                  <div className="text-lg sm:text-2xl font-black aqua-text mb-1">$50K+</div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide">{t('hero.avgMonthly') || 'Average Monthly'}</div>
                </div>
                
                <div className="aqua-glass-dark rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-float-smooth delay-500 edge-glow">
                  <div className="text-lg sm:text-2xl font-black aqua-text mb-1 flex items-center justify-center">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                    {t('hero.premium') || 'Premium'}
                  </div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide">{t('hero.serviceQuality') || 'Service Quality'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;