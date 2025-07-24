import React, { useState } from 'react';
import { Check, Crown, Zap, Star, Sparkles, Shield, TrendingUp, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PricingPlans = () => {
  const [planType, setPlanType] = useState<'onetime' | 'monthly'>('onetime');
  const { t } = useLanguage();

  const onetimePlans = [
    {
      name: "Starter Setup",
      description: "Perfect for new creators ready to launch professionally",
      price: 99,
      icon: Sparkles,
      features: [
        "Complete account setup & optimization",
        "Professional profile creation",
        "Initial content strategy consultation",
        "Platform guidelines training",
        "Basic branding package",
        "30-day email support",
        "Getting started guide",
        "Platform best practices training"
      ],
      popular: false,
      premium: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional Launch",
      description: "Comprehensive setup for serious creators",
      price: 199,
      icon: TrendingUp,
      features: [
        "Everything in Starter Setup",
        "Advanced content strategy development",
        "Professional photo shoot coordination",
        "Multi-platform account setup",
        "Custom branding & design package",
        "Marketing campaign setup",
        "Revenue optimization consultation",
        "90-day priority support",
        "Performance analytics setup"
      ],
      popular: true,
      premium: false,
      buttonText: "Launch Professional"
    },
    {
      name: "Elite Empire Builder",
      description: "The ultimate creator transformation package",
      price: 499,
      icon: Crown,
      features: [
        "Everything in Professional Launch",
        "Dedicated account manager assignment",
        "Custom website & landing pages",
        "Professional video production",
        "Legal consultation & contracts",
        "Advanced marketing automation",
        "Personal brand development",
        "VIP creator network access",
        "6-month elite support",
        "Revenue guarantee program"
      ],
      popular: false,
      premium: true,
      buttonText: "Build Empire"
    }
  ];

  const monthlyPlans = [
    {
      name: "Growth Partner",
      description: "Ongoing support for consistent growth",
      price: 49,
      icon: Sparkles,
      features: [
        "Monthly strategy sessions",
        "Content planning & optimization",
        "Basic chat management (20 hrs/week)",
        "Weekly performance reports",
        "Email & phone support",
        "Platform optimization",
        "Basic marketing campaigns",
        "Revenue tracking & analysis"
      ],
      popular: false,
      premium: false,
      buttonText: "Start Growing"
    },
    {
      name: "Success Accelerator",
      description: "Full-service management for serious creators",
      price: 99,
      icon: TrendingUp,
      features: [
        "Everything in Growth Partner",
        "Full chat management (40+ hrs/week)",
        "Advanced content strategy",
        "Daily performance monitoring",
        "Priority support (24/7)",
        "Multi-platform management",
        "Advanced marketing campaigns",
        "Revenue optimization",
        "Monthly strategy calls",
        "Custom promotional materials"
      ],
      popular: true,
      premium: false,
      buttonText: "Accelerate Success"
    },
    {
      name: "Elite Domination",
      description: "Premium management for top-tier creators",
      price: 199,
      icon: Crown,
      features: [
        "Everything in Success Accelerator",
        "Dedicated account manager",
        "Premium chat operators",
        "Advanced analytics & insights",
        "VIP support (instant response)",
        "Unlimited platform management",
        "Celebrity-level marketing",
        "Legal & privacy protection",
        "Personal assistant services",
        "Exclusive creator events",
        "Revenue guarantee",
        "Custom business development"
      ],
      popular: false,
      premium: true,
      buttonText: "Dominate Market"
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
            <span className="text-sm font-bold aqua-text tracking-wider">PREMIUM PRICING PLANS</span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Choose Your
            <span className="block aqua-text"> Success Investment</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you need a one-time setup or ongoing management, we have the perfect plan to transform your creator business.
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
                <span className="hidden sm:inline">One-Time Setup</span>
                <span className="sm:hidden">One-Time</span>
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
                <span className="hidden sm:inline">Monthly Management</span>
                <span className="sm:hidden">Monthly</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
  key={`${planType}-${plan.name}`}
  className={`relative group animate-slide-up-fade transform transition-all duration-500 hover:scale-105 ${
    plan.popular
      ? 'ring-2 ring-purple-500/50 rounded-3xl shadow-purple-500/30 shadow-xl animate-popular-glow z-10'
      : plan.premium
        ? 'ring-2 ring-yellow-400/50 rounded-3xl shadow-yellow-400/30 shadow-xl z-10'
        : ''
  } ${plan.popular ? 'md:col-span-2 lg:col-span-1' : ''}`}
  style={{ animationDelay: `${index * 200}ms` }} 
>




              <div className="aqua-glass-dark relative rounded-3xl p-6 sm:p-8 flex flex-col h-full lg:min-h-[720px] overflow-visible">


                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="aqua-gradient text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">MOST POPULAR</span>
                      <span className="sm:hidden">POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Premium Badge */}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                      <Crown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">ELITE TIER</span>
                      <span className="sm:hidden">ELITE</span>
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
                      {planType === 'onetime' ? 'one-time payment' : 'per month'}
                    </div>
                    {planType === 'monthly' && (
                      <div className="text-purple-400 text-xs sm:text-sm font-semibold mt-1">
                        Cancel anytime
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
              <h3 className="text-xl sm:text-2xl font-bold text-white">Success Guarantee</h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              {planType === 'onetime' 
                ? "30-day money-back guarantee on all setup packages. If you're not completely satisfied, we'll refund every penny."
                : "Cancel anytime with 30 days notice. We're confident you'll see results within the first month."
              }
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                No hidden fees
              </div>
              <div className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                {planType === 'onetime' ? 'Lifetime support' : 'Cancel anytime'}
              </div>
              <div className="flex items-center">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;