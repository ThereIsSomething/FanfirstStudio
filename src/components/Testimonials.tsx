import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Xiaoyu',
    handle: '@xiaoyu_elite',
    avatar: '/creators/xiaoyu.jpg',
    earnings: '$45K/month',
    verified: true,
    quote: 'FanFirst helped me scale to six figures in just 4 months.',
    platforms: ['OnlyFans', 'Fansly'],
    services: ['Chat Management', 'Growth Strategy'],
  },
  {
    name: 'Akira',
    handle: '@akira_blossom',
    avatar: '/creators/akira.jpg',
    earnings: '$28K/month',
    verified: true,
    quote: 'They 3x my subs after taking over content planning!',
    platforms: ['FansOne'],
    services: ['Content Strategy', 'Localization'],
  },
  {
    name: 'Mina',
    handle: '@minakawaii',
    avatar: '/creators/mina.jpg',
    earnings: '$31K/month',
    verified: true,
    quote: 'Before FanFirst, I was struggling. Now I’m earning consistently and stress-free.',
    platforms: ['OnlyFans', 'FansOne', 'Fansly'],
    services: ['Automation', 'Performance Coaching'],
  },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 lg:px-24 bg-neutral-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        {t('testimonials.title')}
      </h2>

      {/* Mobile Carousel */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:hidden pb-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[85%] bg-neutral-900 rounded-2xl p-6 snap-center shrink-0 hover:scale-[1.02] transition-transform shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14">
                <img src={t.avatar} alt={t.name} className="rounded-full w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-neutral-900 rounded-full" />
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.handle}</p>
              </div>
            </div>

            <p className="italic text-lg mb-3">“{t.quote}”</p>

            <div className="text-sm text-neutral-300 mb-2">
              <strong>{t.earnings}</strong>
              {t.verified && (
                <span className="ml-2 text-green-400 inline-flex items-center gap-1">
                  <CheckCircle size={14} />
                  {t('testimonials.verified')}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {t.services.map((service, idx) => (
                <span
                  key={idx}
                  className="bg-green-800 text-xs px-2 py-1 rounded-full text-white"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              {t.platforms.map((p, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-neutral-800 text-white px-2 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-2xl p-6 hover:scale-[1.02] transition-transform shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14">
                <img src={t.avatar} alt={t.name} className="rounded-full w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-neutral-900 rounded-full" />
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.handle}</p>
              </div>
            </div>

            <p className="italic text-lg mb-3">“{t.quote}”</p>

            <div className="text-sm text-neutral-300 mb-2">
              <strong>{t.earnings}</strong>
              {t.verified && (
                <span className="ml-2 text-green-400 inline-flex items-center gap-1">
                  <CheckCircle size={14} />
                  {t('testimonials.verified')}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {t.services.map((service, idx) => (
                <span
                  key={idx}
                  className="bg-green-800 text-xs px-2 py-1 rounded-full text-white"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              {t.platforms.map((p, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-neutral-800 text-white px-2 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
