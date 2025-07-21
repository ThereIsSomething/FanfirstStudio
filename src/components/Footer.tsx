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
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Stay Updated with Creator Insights
            </h3>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Get exclusive tips, industry insights, and success strategies delivered to your inbox.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/5 border-white/20 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
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
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-2xl">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    FanFirst
                  </span>
                  <span className="block text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    STUDIO
                  </span>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed text-gray-300">
                The premier content creator agency specializing in premium platform management, 
                revenue optimization, and creator success. Transforming creators into industry leaders.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">
                    team@fanfirst.studio
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">
                    Available 24/7 via email
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">
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
                    className={`p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-white/5 hover:bg-white/10 text-gray-400 ${social.color}`}
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
                <h4 className="text-lg font-bold mb-6 text-white">
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
                        className="flex items-center space-x-2 transition-all duration-300 group text-gray-300 hover:text-white"
                      >
                        <link.icon className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges & Bottom Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300"
                >
                  <badge.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{badge.name}</span>
                </div>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <div className="text-sm mb-2 text-gray-400">
                © 2025 FanFirst Studio. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
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