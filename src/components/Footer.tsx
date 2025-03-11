
import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-houston-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">HTX Domains</h3>
            <p className="text-white/70 mb-6 max-w-xs">
              Premium Houston-based domain names for businesses, events, and individuals looking to establish a strong online presence in the heart of Texas.
            </p>
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
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} HTX Domains. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
