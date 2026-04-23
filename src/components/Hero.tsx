"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Business Consultancy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 border border-green-500/30">
              <TrendingUp size={14} /> Premier Business Advisory
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Your <span className="text-green-500">Business Value</span> For The Future
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Specializing in valuation, M&A advisory, and strategic consultancy for 
              middle-market businesses. We turn your hard work into legacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all group active:scale-95 shadow-xl shadow-green-900/20">
                Get Started Today <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all active:scale-95">
                Learn Our Process
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Overlay for Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">12+ Years</span>
              <span className="text-slate-400 text-sm">Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">120+ Deals</span>
              <span className="text-slate-400 text-sm">Closed Successfully</span>
            </div>
            <div className="flex flex-col hidden md:flex">
              <span className="text-3xl font-bold text-white">$2.5B+</span>
              <span className="text-slate-400 text-sm">Total Valuation Managed</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
        <div className="h-full w-full bg-gradient-to-l from-green-600/10 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
