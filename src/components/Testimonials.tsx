import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "李美华 (Li Meihua)",
      role: t('testimonials.role1') || "Content Creator",
      platform: "OnlyFans & Fansly",
      ofHandle: "@limeihua_official",
      fansoneHandle: "@limeihua_vip",
      fanslyHandle: "@limeihua_premium",
      content: t('testimonials.content1') || "FanFirst Studio completely transformed my business. In just 3 months, my earnings increased by 400%. Their team handles everything so professionally.",
      rating: 5,
      earnings: "$45K/month",
      profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "田中さくら (Tanaka Sakura)",
      role: t('testimonials.role2') || "Model & Influencer",
      platform: "Multi-platform",
      ofHandle: "@sakura_tanaka",
      fansoneHandle: "@sakura_exclusive",
      fanslyHandle: "@sakura_premium",
      content: t('testimonials.content2') || "The support and guidance I received was incredible. They helped me build a sustainable business while maintaining my privacy and safety.",
      rating: 5,
      earnings: "$32K/month",
      profileImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "王小雨 (Wang Xiaoyu)",
      role: t('testimonials.role3') || "Content Creator",
      platform: "OnlyFans",
      ofHandle: "@xiaoyu_wang",
      fansoneHandle: "@xiaoyu_special",
      fanslyHandle: "@xiaoyu_elite",
      content: t('testimonials.content3') || "I was struggling to manage everything on my own. Now I can focus on creating while they handle the business side. Best decision I ever made!",
      rating: 5,
      earnings: "$28K/month",
      profileImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "山田ひかり (Yamada Hikari)",
      role: "Content Creator",
      platform: "Fansly & FansOne",
      ofHandle: "@hikari_yamada",
      fansoneHandle: "@hikari_vip",
      fanslyHandle: "@hikari_exclusive",
      content: "The personalized strategy they created for me was amazing. My subscriber count tripled and my income is now more stable than ever.",
      rating: 5,
      earnings: "$38K/month",
      profileImage: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "陈雨婷 (Chen Yuting)",
      role: "Model & Creator",
      platform: "Multi-platform",
      ofHandle: "@yuting_chen",
      fansoneHandle: "@yuting_premium",
      fanslyHandle: "@yuting_vip",
      content: "FanFirst Studio helped me understand the business side of content creation. Their chat management service alone increased my tips by 250%.",
      rating: 5,
      earnings: "$41K/month",
      profileImage: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "佐藤美咲 (Sato Misaki)",
      role: "Influencer & Creator",
      platform: "OnlyFans & Fansly",
      ofHandle: "@misaki_sato",
      fansoneHandle: "@misaki_special",
      fanslyHandle: "@misaki_elite",
      content: "The level of professionalism and results exceeded my expectations. They turned my hobby into a six-figure business in under 6 months.",
      rating: 5,
      earnings: "$52K/month",
      profileImage: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "刘思雨 (Liu Siyu)",
      role: "Content Creator",
      platform: "FansOne & Fansly",
      ofHandle: "@siyu_liu",
      fansoneHandle: "@siyu_exclusive",
      fanslyHandle: "@siyu_premium",
      content: "Their marketing strategies are incredible. I went from 500 followers to over 50K in just 4 months. The revenue growth has been life-changing.",
      rating: 5,
      earnings: "$35K/month",
      profileImage: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "高橋あい (Takahashi Ai)",
      role: "Model & Creator",
      platform: "Multi-platform",
      ofHandle: "@ai_takahashi",
      fansoneHandle: "@ai_vip",
      fanslyHandle: "@ai_exclusive",
      content: "The team at FanFirst Studio is amazing. They handle everything from content planning to customer service, allowing me to focus on what I love most.",
      rating: 5,
      earnings: "$43K/month",
      profileImage: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "张梦琪 (Zhang Mengqi)",
      role: "Content Creator",
      platform: "OnlyFans & FansOne",
      ofHandle: "@mengqi_zhang",
      fansoneHandle: "@mengqi_premium",
      fanslyHandle: "@mengqi_elite",
      content: "Working with FanFirst Studio was the best decision for my career. Their expertise in the Asian market helped me connect with my target audience perfectly.",
      rating: 5,
      earnings: "$39K/month",
      profileImage: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-smooth"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-smooth delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up-fade">
          <div className="inline-flex items-center aqua-glass px-6 py-3 rounded-full mb-6 edge-glow">
            <Star className="h-5 w-5 text-purple-400 mr-3 animate-pulse" />
            <span className="text-sm font-bold aqua-text tracking-wider">SUCCESS STORIES</span>
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            {t('testimonials.title') || 'Success Stories from Our Creators'}
            <span className="block aqua-text">Asian Market Leaders</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle') || 'Real results from real creators who chose to partner with FanFirst Studio.'}
          </p>
        </div>

        {/* Testimonials Grid - 3 rows of 3 cards each */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="aqua-glass-dark rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group edge-glow animate-slide-up-fade"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.profileImage}
                    alt={`${testimonial.name} profile`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-slate-900"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg group-hover:aqua-text transition-all duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mt-1 w-fit">
                    {testimonial.earnings}
                  </div>
                </div>
              </div>

              {/* Platform Handles */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">OnlyFans:</span>
                  <span className="text-purple-400 font-medium">{testimonial.ofHandle}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">FansOne:</span>
                  <span className="text-blue-400 font-medium">{testimonial.fansoneHandle}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Fansly:</span>
                  <span className="text-pink-400 font-medium">{testimonial.fanslyHandle}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="h-6 w-6 text-purple-400 mb-3 opacity-50" />
              
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                "{testimonial.content}"
              </p>

              {/* Platform Badge */}
              <div className="text-xs text-purple-400 font-semibold">
                {testimonial.platform}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 aqua-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="aqua-glass-dark rounded-3xl p-8 max-w-4xl mx-auto edge-glow">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-purple-400 mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Ready to Join Our Success Stories?</h3>
              <Star className="h-6 w-6 text-purple-400 ml-3 animate-pulse" />
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Take the first step towards maximizing your earning potential with professional support from industry experts who understand the Asian market. 
            </p>
            <button 
              onClick={scrollToContact}
              className="btn-modern aqua-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 group"
            >
              <span className="flex items-center">
                Start Your Application
                <Star className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;