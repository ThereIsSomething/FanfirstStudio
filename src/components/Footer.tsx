import React from 'react';
import { Star, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FanFirst Studio</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              The premier content creator agency specializing in premium platform management, revenue optimization, and creator success.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">team@fanfirst.studio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">let's connect first!</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Los Angeles, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Content Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Chat Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Revenue Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Account Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Marketing & Promotion</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Legal Protection</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 FanFirst Studio. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Professional content creator management & optimization
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;