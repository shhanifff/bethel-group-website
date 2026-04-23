"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Transactions", href: "/transactions" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className={cn(
        "bg-[#0f172a] text-white py-2 px-4 md:px-12 flex justify-between items-center text-xs transition-all duration-300",
        isScrolled ? "h-0 py-0 overflow-hidden opacity-0" : "h-10 opacity-100"
      )}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-green-500" /> (555) 123-4567
          </span>
          <span className="flex items-center gap-2 hidden md:flex">
            <Mail size={14} className="text-green-500" /> info@bethelgroup.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-green-500" /> 123 Business Way, Suite 500, New York
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-gray-200" 
          : "bg-white py-5 border-transparent"
      )}>
        <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">BETHEL</span>
              <span className="text-[10px] tracking-[0.2em] text-slate-500 font-semibold leading-none mt-1">GROUP</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95">
              Free Valuation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <ul className="py-6 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-lg font-medium text-slate-800 hover:text-green-600 block transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg">
                  Free Valuation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
