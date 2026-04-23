"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Globe } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#0f172a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/industry-fin.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 font-medium">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Industries</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 border border-green-500/30">
            <Globe size={14} /> Global Sector Expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Deep Expertise Across <span className="text-green-500">Critical Sectors</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            We bring specialized knowledge and proprietary data to 8 core industries, 
            providing business owners with sector-specific insights that drive superior outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHero;
