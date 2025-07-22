import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Sarah M.",
      role: t('testimonials.role1') || "Content Creator",
      platform: "OnlyFans & Fansly",
      content: t('testimonials.content1') || "FanFirst Studio completely transformed my business. In just 3 months, my earnings increased by 400%. Their team handles everything so professionally.",
      rating: 5,
      earnings: "$45K/month"
    },
    {
      name: "Jessica L.",
      role: t('testimonials.role2') || "Model & Influencer",
      platform: "Multi-platform",
      content: t('testimonials.content2') || "The support and guidance I received was incredible. They helped me build a sustainable business while maintaining my privacy and safety.",
      rating: 5,
      earnings: "$32K/month"
    },
    {
      name: "Amanda R.",
      role: t('testimonials.role3') || "Content Creator",
      platform: "OnlyFans",
      content: t('testimonials.content3') || "I was struggling to manage everything on my own. Now I can focus on creating while they handle the business side. Best decision I ever made!",
      rating: 5,
      earnings: "$28K/month"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title') || 'Success Stories from Our Creators'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle') || 'Real results from real creators who chose to partner with FanFirst Studio.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="h-8 w-8 text-purple-600 mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-purple-600">
                    {testimonial.platform}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.earnings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('testimonials.cta.title') || 'Ready to Join Our Success Stories?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('testimonials.cta.desc') || 'Take the first step towards maximizing your earning potential with professional support.'}
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {t('testimonials.cta.button') || 'Start Your Application'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;