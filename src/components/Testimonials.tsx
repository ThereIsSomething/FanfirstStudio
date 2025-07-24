import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    profileImage: '/images/testimonials/testimonial1.jpg',
    name: 'Alexa Smith',
    role: 'Fitness Model',
    earnings: '$82,500/mo',
    rating: 5,
    content: 'FanFirst helped me 10x my earnings in 3 months. The team is super responsive and supportive!',
    platform: 'OnlyFans',
    ofHandle: '@alexa_fit',
    fansoneHandle: '@alexa.fit',
    fanslyHandle: '@alexa_fans',
  },
  {
    profileImage: '/images/testimonials/testimonial2.jpg',
    name: 'Bella Rose',
    role: 'Glamour Model',
    earnings: '$45,000/mo',
    rating: 4,
    content: 'From branding to fan management, they handled it all. Now I focus on content while they grow my business.',
    platform: 'Fansly',
    ofHandle: '@bellarose',
    fansoneHandle: '@bella.rose',
    fanslyHandle: '@bellarose',
  },
  {
    profileImage: '/images/testimonials/testimonial3.jpg',
    name: 'Chloe Carter',
    role: 'Creator',
    earnings: '$60,000/mo',
    rating: 5,
    content: 'They boosted my subs with marketing, made everything seamless and stress-free.',
    platform: 'FansOne',
    ofHandle: '@chloe_c',
    fansoneHandle: '@chloe.carter',
    fanslyHandle: '@chloe_carter',
  },
  // Add more testimonials as needed...
];

const TestimonialCard = ({ testimonial, index }) => (
  <div
    className="aqua-glass-dark rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group edge-glow animate-slide-up-fade"
    style={{ animationDelay: `${index * 100}ms` }}
  >
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

    <div className="space-y-2 mb-6 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-400">OnlyFans:</span>
        <span className="text-purple-400 font-medium">{testimonial.ofHandle}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">FansOne:</span>
        <span className="text-blue-400 font-medium">{testimonial.fansoneHandle}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Fansly:</span>
        <span className="text-pink-400 font-medium">{testimonial.fanslyHandle}</span>
      </div>
    </div>

    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
      ))}
    </div>

    <Quote className="h-6 w-6 text-purple-400 mb-3 opacity-50" />
    <p className="text-gray-300 leading-relaxed text-sm mb-4">"{testimonial.content}"</p>
    <div className="text-xs text-purple-400 font-semibold">{testimonial.platform}</div>
    <div className="absolute inset-0 aqua-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-8 lg:px-16 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight aqua-text mb-4">Real Creators, Real Results</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          See how FanFirst helped creators scale from $0 to $100k+/month with custom branding, funnels, and fan retention.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 py-4 -mx-4 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div className="snap-start min-w-[85%] sm:min-w-[80%]" key={index}>
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
