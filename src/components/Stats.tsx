import React from 'react';
import { DollarSign, Users, TrendingUp, Award, Crown, Zap, Star, Trophy } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Crown,
      value: "$50M+",
      label: "EMPIRE VALUE CREATED",
      description: "Total creator wealth generated",
      premium: true
    },
    {
      icon: Trophy,
      value: "100+",
      label: "ELITE TITANS",
      description: "7-figure creators in our empire",
      premium: true
    },
    {
      icon: Zap,
      value: "2000%",
      label: "AVERAGE ROI",
      description: "Guaranteed within 90 days",
      premium: true
    },
    {
      icon: Star,
      value: "100%",
      label: "SUCCESS RATE",
      description: "Elite tier domination",
      premium: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-black via-amber-900/20 to-black relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/10 via-transparent to-yellow-500/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-400/5 to-yellow-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-400/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-6">
            <Trophy className="h-4 w-4 text-amber-400 mr-2" />
            <span className="text-sm font-bold text-amber-400 tracking-wide">EMPIRE STATISTICS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            NUMBERS THAT
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"> DOMINATE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            These aren't just statistics - they're proof of our <span className="text-amber-400 font-bold">TOTAL DOMINATION</span> in the creator economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group relative"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-8 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
                {/* Premium badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-2 py-1 rounded-full text-xs font-black">
                  ELITE
                </div>
                
                <div className="bg-gradient-to-r from-amber-400/20 to-yellow-500/20 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-amber-400/30">
                  <stat.icon className="h-10 w-10 text-amber-400 group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
                
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                
                <div className="text-lg font-black text-white mb-2 tracking-wide">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-300 font-medium">
                  {stat.description}
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 backdrop-blur-sm border border-amber-400/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-amber-400 mr-2 animate-twinkle" />
              <h3 className="text-2xl font-black text-white">READY TO JOIN THE ELITE?</h3>
              <Star className="h-6 w-6 text-amber-400 ml-2 animate-twinkle delay-200" />
            </div>
            <p className="text-gray-300 mb-6">
              These numbers represent real creators who chose to <span className="text-amber-400 font-bold">DOMINATE</span> rather than settle for average.
            </p>
            <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 py-3 rounded-xl font-black hover:shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              CLAIM YOUR Creator+ STATUS NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;