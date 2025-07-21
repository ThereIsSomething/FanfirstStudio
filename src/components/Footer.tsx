import React from 'react';
import { 
  Star, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Shield, Award, Users, TrendingUp, MessageCircle, 
  FileText, HelpCircle, BookOpen, Headphones,
  Building, Heart, Globe, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Our Story', href: '/story', icon: Heart },
        { name: 'Leadership Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: TrendingUp },
        { name: 'Press & Media', href: '/press', icon: FileText }
      ]
    },
    {
      title: 'Products & Services',
      links: [
        { name: 'Features', href: '/features', icon: Star },
        { name: 'Pricing', href: '#pricing', icon: Award },
        { name: 'Success Stories', href: '#testimonials', icon: TrendingUp },
        { name: 'Customer Testimonials', href: '/testimonials', icon: MessageCircle },
        { name: 'Product Updates', href: '/updates', icon: Globe }
      ]
    },
    {
      title: 'Support & Resources',
      links: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Documentation', href: '/docs', icon: BookOpen },
        { name: 'Contact Us', href: '#contact', icon: Mail },
        { name: 'Live Chat Support', href: '/chat', icon: Headphones },
        { name: 'Community Forum', href: '/community', icon: Users }
      ]
    },
    {
      title: 'Legal & Compliance',
      links: [
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
        { name: 'Cookie Policy', href: '/cookies', icon: Shield },
        { name: 'Data Protection', href: '/data-protection', icon: Shield },
        { name: 'Refund Policy', href: '/refunds', icon: Award }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/fanfirststudio', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Twitter', href: 'https://twitter.com/fanfirststudio', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'Instagram', href: 'https://instagram.com/fanfirststudio', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/fanfirststudio', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'YouTube', href: 'https://youtube.com/@fanfirststudio', icon: Youtube, color: 'hover:text-red-500' }
  ];

  const trustBadges = [
    { name: 'SSL Secured', icon: Shield },
    { name: 'Privacy Certified', icon: Award },
    { name: 'GDPR Compliant', icon: FileText }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-600/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Stay Updated with Creator Insights
            </h3>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Get exclusive tips, industry insights, and success strategies delivered to your inbox.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/10 border-gray-500/50 text-white placeholder-gray-300 backdrop-blur-sm hover:bg-white/15"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-2xl shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white drop-shadow-md">
                    FanFirst
                  </span>
                  <span className="block text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    STUDIO
                  </span>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed text-gray-200 text-base">
                The premier content creator agency specializing in premium platform management, 
                revenue optimization, and creator success. Transforming creators into industry leaders.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600/20 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-gray-200 font-medium">
                    team@fanfirst.studio
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-200 font-medium">
                    Available 24/7 via email
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-gray-200 font-medium">
                    Los Angeles, CA
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white ${social.color} backdrop-blur-sm border border-white/10 hover:border-white/20`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-lg font-bold mb-6 text-white drop-shadow-md">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }
                        }}
                        className="flex items-center space-x-2 transition-all duration-300 group text-gray-200 hover:text-white hover:translate-x-1"
                      >
                        <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-purple-600/30 transition-all duration-300">
                          <link.icon className="h-3 w-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                        <span className="font-medium">
                          {link.name}
                        </span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges & Bottom Section */}
        <div className="py-8 border-t border-gray-600/30">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-gray-200 border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  <badge.icon className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-semibold">{badge.name}</span>
                </div>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <div className="text-sm mb-2 text-gray-200 font-medium">
                © 2025 FanFirst Studio. All rights reserved.
              </div>
              <div className="text-xs text-gray-300">
                Professional content creator management & optimization
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;