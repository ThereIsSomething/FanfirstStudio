import React, { useState } from 'react';
import { 
  Star, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Shield, Award, Users, TrendingUp, MessageCircle, 
  FileText, HelpCircle, BookOpen, Headphones,
  Building, Heart, Globe, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from './Modal';
import logo from '../assets/nonamelogofixed.png';

const Footer = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building, type: 'modal' },
        { name: 'Our Story', href: '/story', icon: Heart, type: 'modal' },
      ]
    },
    {
      title: 'Products & Services',
      links: [
        { name: 'Features', href: '/features', icon: Star, type: 'modal' },
        { name: 'Pricing', href: '#pricing', icon: Award },
        { name: 'Success Stories', href: '#testimonials', icon: TrendingUp },
        { name: 'Customer Testimonials', href: '/testimonials', icon: MessageCircle, type: 'modal' },
      ]
    },
    {
      title: 'Support & Resources',
      links: [
        { name: 'Help Center', href: '/help', icon: HelpCircle, type: 'modal' },
        { name: 'Documentation', href: '/docs', icon: BookOpen, type: 'modal' },
        { name: 'Contact Us', href: '#contact', icon: Mail },
      ]
    },
    {
      title: 'Legal & Compliance',
      links: [
        { name: 'Privacy Policy', href: '/privacy', icon: Shield, type: 'modal' },
        { name: 'Terms of Service', href: '/terms', icon: FileText, type: 'modal' },
        { name: 'Cookie Policy', href: '/cookies', icon: Shield, type: 'modal' },
        { name: 'Data Protection', href: '/data-protection', icon: Shield, type: 'modal' },
        { name: 'Refund Policy', href: '/refunds', icon: Award, type: 'modal' }
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

  const handleLinkClick = (link: any) => {
    if (link.type === 'modal') {
      setActiveModal(link.href);
    } else if (link.href.startsWith('#')) {
      scrollToSection(link.href);
    } else {
      // External links or other navigation
      window.open(link.href, '_blank');
    }
  };

  const getModalContent = (modalId: string) => {
    switch (modalId) {
      case '/privacy':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
            <div className="space-y-4 text-gray-300">
              <p>Last updated: January 2025</p>
              <p>At FanFirst Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Information We Collect</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal information you provide (name, email, phone number)</li>
                <li>Platform account information and handles</li>
                <li>Communication preferences and language settings</li>
                <li>Service usage data and analytics</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">How We Use Your Information</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and improve our management services</li>
                <li>To communicate with you about your account and services</li>
                <li>To optimize your content and revenue strategies</li>
                <li>To ensure compliance with platform policies</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Data Protection</h4>
              <p>We implement industry-standard security measures to protect your data, including encryption, secure servers, and limited access protocols.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Contact Us</h4>
              <p>If you have questions about this Privacy Policy, contact us at team@fanfirst.studio</p>
            </div>
          </div>
        );
      
      case '/terms':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">Terms of Service</h3>
            <div className="space-y-4 text-gray-300">
              <p>Last updated: January 2025</p>
              <p>Welcome to FanFirst Studio. By using our services, you agree to these terms and conditions.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Service Agreement</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>We provide professional content creator management services</li>
                <li>Services include account management, content strategy, and revenue optimization</li>
                <li>You retain ownership of your content and accounts</li>
                <li>We act as your authorized representative for specified platforms</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Client Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate information and maintain account access</li>
                <li>Comply with all platform terms of service</li>
                <li>Create content that meets platform guidelines</li>
                <li>Communicate promptly regarding account issues</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Payment Terms</h4>
              <p>Payment terms vary by service plan. One-time setup fees are due upon service commencement. Monthly management fees are billed in advance.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Termination</h4>
              <p>Either party may terminate services with 30 days written notice. Refund policies apply as outlined in our Refund Policy.</p>
            </div>
          </div>
        );
      
      case '/about':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">About FanFirst Studio</h3>
            <div className="space-y-4 text-gray-300">
              <p>FanFirst Studio is the premier content creator management agency specializing in the Asian market and premium platform optimization.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Our Mission</h4>
              <p>To empower content creators with professional management services that maximize their earning potential while maintaining their privacy and creative freedom.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Our Expertise</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Multi-platform account management and optimization</li>
                <li>Professional chat management and fan engagement</li>
                <li>Revenue optimization and pricing strategies</li>
                <li>Content strategy and marketing campaigns</li>
                <li>Legal protection and privacy services</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Why Choose Us</h4>
              <p>With over 500 successful creators and $50M+ in revenue generated, we have the proven track record and expertise to transform your content creation business into a thriving enterprise.</p>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Global Reach</h4>
              <p>Based in Los Angeles with multilingual support in English, Chinese, and Japanese, we serve creators worldwide with 24/7 professional support.</p>
            </div>
          </div>
        );
      
      case '/help':
        return (
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">Help Center</h3>
            <div className="space-y-4 text-gray-300">
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Frequently Asked Questions</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-white mb-2">How do I get started?</h5>
                  <p>Complete our application form and we'll schedule a consultation call to discuss your goals and create a custom strategy.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">What platforms do you support?</h5>
                  <p>We manage accounts on OnlyFans, Fansly, FansOne, ManyVids, and other premium content platforms.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">How much can I expect to earn?</h5>
                  <p>Our creators see an average 300% increase in revenue within 3 months. Individual results vary based on content quality, engagement, and market factors.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">Is my privacy protected?</h5>
                  <p>Absolutely. We implement advanced security measures and provide legal protection services to safeguard your privacy and personal information.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">What languages do you support?</h5>
                  <p>We provide support in English, Chinese (Mandarin), and Japanese with native-speaking account managers.</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white mt-8 mb-3">Contact Support</h4>
              <p>For additional questions, email us at team@fanfirst.studio or use our contact form. We respond within 24 hours.</p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-gray-300">
            <p>Content coming soon. Please check back later or contact us for more information.</p>
          </div>
        );
    }
  };
  return (
    <>
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
              Stay Updated with Model Insights
            </h3>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Get exclusive tips, English/Chinese Chat Templates, Content Startegy, industry insights, and success strategies delivered to your inbox.
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
                <div className="flex items-center">
                  <img 
  src={logo} 
  alt="FanFirst Studio Logo" 
  className="max-w-[80px] sm:max-w-[100px] h-auto object-contain filter mt-8"
/>


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
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link);
                        }}
                        className="flex items-center space-x-2 transition-all duration-300 group text-gray-200 hover:text-white hover:translate-x-1 w-full text-left"
                      >
                        <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-purple-600/30 transition-all duration-300">
                          <link.icon className="h-3 w-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                        <span className="font-medium">
                          {link.name}
                        </span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-300" />
                      </button>
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
    
    {/* Modal System */}
    <Modal
      isOpen={activeModal !== null}
      onClose={() => setActiveModal(null)}
      title={activeModal ? footerSections.flatMap(s => s.links).find(l => l.href === activeModal)?.name || 'Information' : ''}
    >
      {activeModal && getModalContent(activeModal)}
    </Modal>
    </>
  );
};

export default Footer;