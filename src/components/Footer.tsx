import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Share2, Globe, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">BETHEL</span>
                <span className="text-[10px] tracking-[0.2em] text-slate-500 font-semibold leading-none mt-1">GROUP</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Leading business valuation and M&A advisory firm dedicated to maximizing company value and ensuring smooth transitions for business owners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Users size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Services", "M&A Deals", "Case Studies", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-green-500 transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-green-600" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Business Valuations",
                "M&A Advisory",
                "Strategic Consulting",
                "Exit Planning",
                "Financial Analysis",
                "Market Research"
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-green-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="text-green-600 shrink-0" size={20} />
                <span>123 Business Way, Suite 500,<br />New York, NY 10001</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-green-600 shrink-0" size={20} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-green-600 shrink-0" size={20} />
                <span>info@bethelgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © 2026 Bethel Group. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
