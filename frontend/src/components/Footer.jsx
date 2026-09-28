import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Star } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="relative bg-[#2e1a47] text-white font-sans pt-10 overflow-hidden">
      
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070" 
          alt="footer-bg" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6a1b4d]/90 to-[#4a0e3a]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white/90 mb-6 sm:mb-8 md:mb-12 drop-shadow-md px-2 sm:px-4 leading-tight">
          Let's Make Your Travel Plans Perfect !
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-10 border-b border-white/20 pb-10">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-4 sm:space-y-6">
             <Link to="/" className="bg-white inline-block px-3 sm:px-4 py-2 rounded-md transition hover:scale-105 shadow-lg">
                <div className="text-xl sm:text-2xl font-bold flex items-center gap-1">
                    <span className="text-[#E91E63] text-2xl sm:text-3xl font-extrabold">V</span>
                    <span className="text-black text-base sm:text-lg">asan</span>
                    <span className="text-[9px] sm:text-[10px] text-gray-500 block -ml-6 sm:-ml-8 mt-5 sm:mt-6 font-bold uppercase tracking-tighter">Tours & Travels</span>
                </div>
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed">
                Tours and Travels is a Tamil Nadu-based leading travel brand that found its humble beginnings .
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-[#1877F2] hover:text-white p-2 rounded-full transition"><Facebook size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-[#E4405F] hover:text-white p-2 rounded-full transition"><Instagram size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-[#FF0000] hover:text-white p-2 rounded-full transition"><Youtube size={16} className="sm:w-[18px] sm:h-[18px]" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 border-b-2 border-pink-500 inline-block pb-1">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-200">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="flex items-center gap-2 hover:text-pink-300 transition">
                    <Star size={10} className="sm:w-[12px] sm:h-[12px] flex-shrink-0" fill="currentColor" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 border-b-2 border-pink-500 inline-block pb-1">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-200">
              <li><Link to="/domestic" className="hover:text-pink-300 transition flex items-center gap-2"><Star size={10} className="sm:w-[12px] sm:h-[12px] flex-shrink-0" fill="currentColor" /> Domestic Tours</Link></li>
        
              <li><Link to="/car-rental" className="hover:text-pink-300 transition flex items-center gap-2"><Star size={10} className="sm:w-[12px] sm:h-[12px] flex-shrink-0" fill="currentColor" />Car Bookings </Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 border-b-2 border-pink-500 inline-block pb-1">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-200">
              <a
                href="https://www.google.com/maps?q=Madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-pink-300 transition"
              >
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] mt-1 text-pink-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Madurai</span>
              </a>
              <a
                href="mailto:vasan2005@gmail.com"
                className="flex items-start gap-3 hover:text-pink-300 transition"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] mt-1 text-pink-400 flex-shrink-0" /> 
                <span className="break-all text-xs sm:text-sm">vasan2005@gmail.com</span>
              </a>
              <a
                href="tel:+917395875934"
                className="flex items-center gap-3 hover:text-pink-300 transition"
              >
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-pink-400 flex-shrink-0" /> <span className="text-xs sm:text-sm">+91-7395875934</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 sm:py-6 text-[9px] sm:text-[10px] text-gray-400 border-t border-white/10 gap-3 sm:gap-4">
          <p className="text-center md:text-left uppercase tracking-widest">©  Tours and Travels. All rights reserved.</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center text-[9px] sm:text-[10px]">
            <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
          <p className="text-center md:text-right text-[9px] sm:text-[10px]">Developed By <span className="text-[#FF9800] font-black uppercase tracking-tighter">Vasan</span></p>
        </div>

      </div>
    </footer>
  );
}
