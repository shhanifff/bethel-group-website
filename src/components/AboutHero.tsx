"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background with Navy Gradient */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]" />
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 font-medium">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">About Us</span>
          </div>

          <span className="inline-block text-green-500 font-bold uppercase tracking-widest text-sm mb-4">
            Our Journey & Mission
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Specialized in <span className="text-green-500">Business Legacy</span> Protection
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            For over a decade, we have been the trusted partner for middle-market business owners, 
            navigating the complexities of valuations and transitions with precision and empathy.
          </p>
        </motion.div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>
    </section>
  );
};

export default AboutHero;
