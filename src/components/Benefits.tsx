import React from 'react';
import { Check, TrendingUp, Clock, Shield, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: t('benefits.revenue.title') || "300% Average Revenue Increase",
      description: t('benefits.revenue.desc') || "Our creators see dramatic income growth within the first 3 months"
    },
    {
      icon: Clock,
      title: t('benefits.time.title') || "Save 40+ Hours Per Week", 
      description: t('benefits.time.desc') || "Focus on content while we handle chat, marketing, and admin tasks"
    },
    {
      icon: Shield,
      title: t('benefits.privacy.title') || "Complete Privacy Protection",
      description: t('benefits.privacy.desc') || "Advanced security measures and legal support for your safety"
    },
    {
      icon: Users,
      title: t('benefits.manager.title') || "Dedicated Account Manager",
      description: t('benefits.manager.desc') || "Personal support from industry experts who understand your goals"
    },
    {
      icon: Zap,
      title: t('benefits.platform.title') || "Multi-Platform Optimization",
      description: t('benefits.platform.desc') || "Maximize earnings across OnlyFans, Fansly, Fansone, and more"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose FanFirst Studio?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're not just another agency. We're your partners in building a sustainable, profitable content creation business.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <benefit.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Account setup & optimization",
                  "Content strategy & planning", 
                  "24/7 chat management",
                  "Marketing & promotion",
                  "Revenue optimization",
                  "Legal & privacy protection",
                  "Analytics & reporting",
                  "Ongoing support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Success Guarantee</h3>
                <p className="text-gray-600">We're confident in our results</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">30 Days</div>
                    <div className="text-sm text-green-700">
                        Money-back guarantee if not satisfied. <br />T&C Apply
                    </div>

                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">90 Days</div>
                    <div className="text-sm text-purple-700">To see significant revenue increase</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                    <div className="text-sm text-blue-700">Ongoing support and optimization</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold">Join 500+</div>
                <div className="text-sm opacity-90">Successful Creators</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;