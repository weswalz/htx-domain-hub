
import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-houston-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">HTX Domains</h3>
            <p className="text-white/70 mb-6 max-w-xs">
              Premium Houston-based domain names for businesses, events, and individuals looking to establish a strong online presence in the heart of Texas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-houston-gold transition-colors duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-houston-gold transition-colors duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-houston-gold transition-colors duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#domains" className="text-white/70 hover:text-houston-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Available Domains
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-houston-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-houston-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Domain FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-houston-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-houston-gold mt-0.5" />
                <span className="text-white/70">Houston, Texas, USA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-houston-gold" />
                <a href="mailto:info@htxdomains.com" className="text-white/70 hover:text-houston-gold transition-colors duration-300">
                  info@htxdomains.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-houston-gold" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-houston-gold transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} HTX Domains. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
