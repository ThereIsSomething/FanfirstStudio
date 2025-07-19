import React, { useState } from 'react';
import { Check, Crown, Zap, Star, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useLanguage();

  const handleBillingToggle = (yearly: boolean, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsYearly(yearly);
  };

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new creators ready to begin their journey",
      monthlyPrice: 2999,
      yearlyPrice: 29999,
      icon: Sparkles,
      features: [
        "Account setup & optimization",
        "Basic content strategy",
        "Chat management (8 hours/day)",
        "Weekly performance reports",
        "Email support",
        "1 platform management"
      ],
      popular: false,
      premium: false
    },
    {
      name: "Professional",
      description: "For serious creators scaling to 6-figures",
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      icon: TrendingUp,
      features: [
        "Everything in Starter",
        "Advanced content strategy",
        "24/7 chat management",
        "Revenue optimization",
        "Priority support",
        "Up to 3 platforms",
        "Marketing campaigns",
        "Analytics dashboard"
      ],
      popular: true,
      premium: false
    },
    {
      name: "Elite Empire",
      description: "The ultimate solution for 7-figure creators",
      monthlyPrice: 9999,
      yearlyPrice: 99999,
      icon: Crown,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom content production",
        "Legal protection suite",
        "Brand partnerships",
        "Unlimited platforms",
        "Personal assistant",
        "VIP creator events",
        "Revenue guarantee"
      ],
      popular: false,
      premium: true
    }
  ];

  const formatPrice = (price: number) => {
    return (price / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      {/* Aquamorphic Background Effects */}
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
            <span className="text-sm font-bold aqua-text tracking-wider">{t('pricing.badge').toUpperCase()}</span>
          </div>
          
          <h2 className="font-display text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            {t('pricing.title')}
            <span className="block aqua-text"> {t('pricing.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16 animate-slide-up-fade delay-200">
          <div className="aqua-glass-dark rounded-2xl p-1 edge-glow">
            <div className="flex items-center min-w-[320px] relative">
              <button
                onClick={(e) => handleBillingToggle(false, e)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  !isYearly 
                    ? 'aqua-gradient text-white shadow-lg transform scale-105' 
                    : 'text-gray-300 hover:text-white'
                }`}
                disabled={false}
                type="button"
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={(e) => handleBillingToggle(true, e)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative whitespace-nowrap ${
                  isYearly 
                    ? 'aqua-gradient text-white shadow-lg transform scale-105' 
                    : 'text-gray-300 hover:text-white'
                }`}
                disabled={false}
                type="button"
              >
                {t('pricing.yearly')}
                <span className="absolute -top-2 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg z-10">
                  {t('pricing.save')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group animate-slide-up-fade ${
                plan.premium 
                  ? 'edge-glow-premium' 
                  : plan.popular 
                    ? 'edge-glow' 
                    : ''
              }`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className={`aqua-glass-dark rounded-3xl p-8 h-[650px] hover:scale-105 transition-all duration-500 relative overflow-hidden flex flex-col ${
                plan.popular ? 'ring-2 ring-purple-500/50 transform scale-105' : ''
              }`}>
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="aqua-gradient text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Zap className="h-4 w-4 mr-1" />
                      {t('pricing.mostPopular').toUpperCase()}
                    </div>
                  </div>
                )}

                {/* Premium Badge */}
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Crown className="h-4 w-4 mr-1" />
                      {t('pricing.eliteTier').toUpperCase()}
                    </div>
                  </div>
                )}

                {/* Plan Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl ${
                    plan.premium 
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500' 
                      : 'aqua-gradient'
                  }`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Plan Details */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-black text-white mb-2">
                      {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    </div>
                    <div className="text-gray-400 text-sm">
                      per {isYearly ? 'year' : 'month'}
                    </div>
                    {isYearly && (
                      <div className="text-green-400 text-sm font-semibold mt-1">
                        Save {formatPrice((plan.monthlyPrice * 12) - plan.yearlyPrice)} annually
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.premium
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:shadow-amber-500/50'
                    : plan.popular
                      ? 'aqua-gradient text-white hover:shadow-purple-500/50' 
                      : 'aqua-glass text-white border border-white/20 hover:border-white/40'
                }`}>
                  {plan.premium ? t('pricing.getElite') : plan.popular ? t('pricing.getStarted') : t('pricing.choosePlan')}
                </button>

                {/* Aquamorphic Glow Effect */}
                <div className="absolute inset-0 aqua-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="text-center mt-16">
          <div className="aqua-glass-dark rounded-3xl p-8 max-w-4xl mx-auto edge-glow">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-gray-300 mb-6">
              We're so confident in our results, if you don't see significant growth in 30 days, we'll refund every penny.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-400 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-400 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-400 mr-2" />
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