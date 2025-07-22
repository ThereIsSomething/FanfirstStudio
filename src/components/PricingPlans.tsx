import React, { useState } from 'react';
import { Check, Crown, Zap, Star, Sparkles, Shield, TrendingUp, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PricingPlans = () => {
  const [planType, setPlanType] = useState<'onetime' | 'monthly'>('onetime');
  const { t } = useLanguage();

  const onetimePlans = [
    {
      name: t('pricing.starter.name') || "Starter Setup",
      description: t('pricing.starter.desc') || "Perfect for new creators ready to launch professionally",
      price: 499,
      icon: Sparkles,
      features: [
        t('pricing.starter.feature1') || "Complete account setup & optimization",
        t('pricing.starter.feature2') || "Professional profile creation",
        t('pricing.starter.feature3') || "Initial content strategy consultation",
        t('pricing.starter.feature4') || "Platform guidelines training",
        t('pricing.starter.feature5') || "Basic branding package",
        t('pricing.starter.feature6') || "30-day email support",
        t('pricing.starter.feature7') || "Getting started guide",
        t('pricing.starter.feature8') || "Platform best practices training"
      ],
      popular: false,
      premium: false,
      buttonText: t('pricing.getStarted') || "Get Started"
    },
    {
      name: t('pricing.professional.name') || "Professional Launch",
      description: t('pricing.professional.desc') || "Comprehensive setup for serious creators",
      price: 999,
      icon: TrendingUp,
      features: [
        t('pricing.professional.feature1') || "Everything in Starter Setup",
        t('pricing.professional.feature2') || "Advanced content strategy development",
        t('pricing.professional.feature3') || "Professional photo shoot coordination",
        t('pricing.professional.feature4') || "Multi-platform account setup",
        t('pricing.professional.feature5') || "Custom branding & design package",
        t('pricing.professional.feature6') || "Marketing campaign setup",
        t('pricing.professional.feature7') || "Revenue optimization consultation",
        t('pricing.professional.feature8') || "90-day priority support",
        t('pricing.professional.feature9') || "Performance analytics setup"
      ],
      popular: true,
      premium: false,
      buttonText: t('pricing.choosePlan') || "Launch Professional"
    },
    {
      name: t('pricing.elite.name') || "Elite Empire Builder",
      description: t('pricing.elite.desc') || "The ultimate creator transformation package",
      price: 2499,
      icon: Crown,
      features: [
        t('pricing.elite.feature1') || "Everything in Professional Launch",
        t('pricing.elite.feature2') || "Dedicated account manager assignment",
        t('pricing.elite.feature3') || "Custom website & landing pages",
        t('pricing.elite.feature4') || "Professional video production",
        t('pricing.elite.feature5') || "Legal consultation & contracts",
        t('pricing.elite.feature6') || "Advanced marketing automation",
        t('pricing.elite.feature7') || "Personal brand development",
        t('pricing.elite.feature8') || "VIP creator network access",
        t('pricing.elite.feature9') || "6-month elite support",
        t('pricing.elite.feature10') || "Revenue guarantee program"
      ],
      popular: false,
      premium: true,
      buttonText: t('pricing.getElite') || "Build Empire"
    }
  ];

  const monthlyPlans = [
    {
      name: t('pricing.growth.name') || "Growth Partner",
      description: t('pricing.growth.desc') || "Ongoing support for consistent growth",
      price: 297,
      icon: Sparkles,
      features: [
        t('pricing.growth.feature1') || "Monthly strategy sessions",
        t('pricing.growth.feature2') || "Content planning & optimization",
        t('pricing.growth.feature3') || "Basic chat management (20 hrs/week)",
        t('pricing.growth.feature4') || "Weekly performance reports",
        t('pricing.growth.feature5') || "Email & phone support",
        t('pricing.growth.feature6') || "Platform optimization",
        t('pricing.growth.feature7') || "Basic marketing campaigns",
        t('pricing.growth.feature8') || "Revenue tracking & analysis"
      ],
      popular: false,
      premium: false,
      buttonText: t('pricing.getStarted') || "Start Growing"
    },
    {
      name: t('pricing.success.name') || "Success Accelerator",
      description: t('pricing.success.desc') || "Full-service management for serious creators",
      price: 597,
      icon: TrendingUp,
      features: [
        t('pricing.success.feature1') || "Everything in Growth Partner",
        t('pricing.success.feature2') || "Full chat management (40+ hrs/week)",
        t('pricing.success.feature3') || "Advanced content strategy",
        t('pricing.success.feature4') || "Daily performance monitoring",
        t('pricing.success.feature5') || "Priority support (24/7)",
        t('pricing.success.feature6') || "Multi-platform management",
        t('pricing.success.feature7') || "Advanced marketing campaigns",
        t('pricing.success.feature8') || "Revenue optimization",
        t('pricing.success.feature9') || "Monthly strategy calls",
        t('pricing.success.feature10') || "Custom promotional materials"
      ],
      popular: true,
      premium: false,
      buttonText: t('pricing.choosePlan') || "Accelerate Success"
    },
    {
      name: t('pricing.domination.name') || "Elite Domination",
      description: t('pricing.domination.desc') || "Premium management for top-tier creators",
      price: 1197,
      icon: Crown,
      features: [
        t('pricing.domination.feature1') || "Everything in Success Accelerator",
        t('pricing.domination.feature2') || "Dedicated account manager",
        t('pricing.domination.feature3') || "Premium chat operators",
        t('pricing.domination.feature4') || "Advanced analytics & insights",
        t('pricing.domination.feature5') || "VIP support (instant response)",
        t('pricing.domination.feature6') || "Unlimited platform management",
        t('pricing.domination.feature7') || "Celebrity-level marketing",
        t('pricing.domination.feature8') || "Legal & privacy protection",
        t('pricing.domination.feature9') || "Personal assistant services",
        t('pricing.domination.feature10') || "Exclusive creator events",
        t('pricing.domination.feature11') || "Revenue guarantee",
        t('pricing.domination.feature12') || "Custom business development"
      ],
      popular: false,
      premium: true,
      buttonText: t('pricing.getElite') || "Dominate Market"
    }
  ];

  const currentPlans = planType === 'onetime' ? onetimePlans : monthlyPlans;

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 aqua-gradient opacity-20 liquid-morph blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 aqua-gradient opacity-15 liquid-morph blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] aqua-gradient opacity-10 liquid-morph blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center aqua-glass px-6 py-3 rounded-full mb-6 edge-glow">
            <Star className="h-5 w-5 text-purple-400 mr-3 animate-pulse" />
            <span className="text-sm font-bold aqua-text tracking-wider">{(t('pricing.badge') || 'PREMIUM PRICING PLANS').toUpperCase()}</span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            {t('pricing.title') || 'Choose Your'}
            <span className="block aqua-text"> {t('pricing.titleHighlight') || 'Success Investment'}</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.subtitle') || 'Whether you need a one-time setup or ongoing management, we have the perfect plan to transform your creator business.'}
          </p>
        </div>

        {/* Plan Type Toggle */}
        <div className="flex justify-center mb-12 sm:mb-16 animate-slide-up-fade delay-200">
          <div className="aqua-glass-dark rounded-2xl p-1 edge-glow w-full max-w-md sm:max-w-lg">
            <div className="flex items-center relative">
              <button
                onClick={() => setPlanType('onetime')}
                className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center text-sm sm:text-base ${
                  planType === 'onetime' 
                    ? 'aqua-gradient text-white shadow-lg transform scale-105' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t('pricing.onetime') || 'One-Time Setup'}</span>
                <span className="sm:hidden">{(t('pricing.onetime') || 'One-Time').split(' ')[0]}</span>
              </button>
              <button
                onClick={() => setPlanType('monthly')}
                className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center text-sm sm:text-base ${
                  planType === 'monthly' 
                    ? 'aqua-gradient text-white shadow-lg transform scale-105' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t('pricing.monthly') || 'Monthly Management'}</span>
                <span className="sm:hidden">{(t('pricing.monthly') || 'Monthly').split(' ')[0]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={`${planType}-${plan.name}`}
              className={`relative group animate-slide-up-fade ${
                plan.premium 
                  ? 'edge-glow-premium' 
                  : plan.popular 
                    ? 'edge-glow' 
                    : ''
              } ${plan.popular ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className={`aqua-glass-dark rounded-3xl p-6 sm:p-8 min-h-[600px] sm:min-h-[720px] hover:scale-105 transition-all duration-500 relative overflow-hidden flex flex-col ${
                plan.popular ? 'ring-2 ring-purple-500/50 transform scale-105' : ''
              }`}>
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="aqua-gradient text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">{(t('pricing.mostPopular') || 'MOST POPULAR').toUpperCase()}</span>
                      <span className="sm:hidden">{(t('pricing.mostPopular') || 'POPULAR').split(' ')[0].toUpperCase()}</span>
                    </div>
                  </div>
                )}

                {/* Premium Badge */}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                      <Crown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">{(t('pricing.eliteTier') || 'ELITE TIER').toUpperCase()}</span>
                      <span className="sm:hidden">{(t('pricing.eliteTier') || 'ELITE').split(' ')[0].toUpperCase()}</span>
                    </div>
                  </div>
                )}

                {/* Plan Icon */}
                <div className="flex justify-center mb-4 sm:mb-6 mt-6 sm:mt-8">
                  <div className={`p-4 rounded-2xl ${
                    plan.premium 
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500' 
                      : 'aqua-gradient'
                  }`}>
                    <plan.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Plan Details */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed px-2">{plan.description}</p>
                  
                  <div className="mb-4 sm:mb-6">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
                      {formatPrice(plan.price)}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      {planType === 'onetime' ? (t('pricing.onetime.payment') || 'one-time payment') : (t('pricing.monthly.payment') || 'per month')}
                    </div>
                    {planType === 'monthly' && (
                      <div className="text-purple-400 text-xs sm:text-sm font-semibold mt-1">
                        {t('pricing.cancel') || 'Cancel anytime'}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mt-auto ${
                    plan.premium
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:shadow-amber-500/50'
                      : plan.popular
                        ? 'aqua-gradient text-white hover:shadow-purple-500/50' 
                        : 'aqua-glass text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Glow Effect */}
                <div className="absolute inset-0 aqua-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="text-center mt-16">
          <div className="aqua-glass-dark rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto edge-glow">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">{t('pricing.guarantee.title') || 'Success Guarantee'}</h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              {planType === 'onetime' 
                ? (t('pricing.guarantee.onetime') || "30-day money-back guarantee on all setup packages. If you're not completely satisfied, we'll refund every penny.")
                : (t('pricing.guarantee.monthly') || "Cancel anytime with 30 days notice. We're confident you'll see results within the first month.")
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                {t('pricing.guarantee.noFees') || 'No hidden fees'}
              </div>
              <div className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                {planType === 'onetime' ? (t('pricing.guarantee.lifetime') || 'Lifetime support') : (t('pricing.guarantee.cancel') || 'Cancel anytime')}
              </div>
              <div className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                {t('pricing.guarantee.support') || '24/7 support'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;