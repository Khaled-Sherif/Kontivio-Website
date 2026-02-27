import { Mail, Linkedin, Instagram, Phone } from 'lucide-react';
import { Button } from './ui/button';
import logo from "@/assets/White_Logo.png";

interface FooterProps {
  onNavigateToContactUs?: () => void;
  onNavigateHome?: () => void;
}

export function Footer({ onNavigateToContactUs, onNavigateHome }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-centercursor-pointer" onClick={onNavigateHome}>
                <div className="w-10 h-10">
                <img src={logo} alt="Kontivio Logo" />
                </div>
                <span className="text-3xl font-medium text-white-800">Kontivio</span>
            </div>
            <p className="text-sm mb-4 mt-4">
              Leading provider of remote customer support solutions. 
              We help businesses deliver exceptional customer experiences through innovation and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#3b9ac9] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3b9ac9] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3b9ac9] transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={onNavigateHome} className="hover:text-[#3b9ac9] transition-colors cursor-pointer">Home</a></li>
              <li><a href="#services" className="hover:text-[#3b9ac9] transition-colors cursor-pointer">Services</a></li>
              <li><a href="#about" className="hover:text-[#3b9ac9] transition-colors cursor-pointer">About</a></li>
              <li><a href="#careers" className="hover:text-[#3b9ac9] transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#contact" onClick={onNavigateToContactUs} className="hover:text-[#3b9ac9] transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#3b9ac9] transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-[#3b9ac9] transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-[#3b9ac9] transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-[#3b9ac9] transition-colors">Sales Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            © 2025 Kontivio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#3b9ac9] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3b9ac9] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#3b9ac9] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}