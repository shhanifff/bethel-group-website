"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-8 font-medium">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900">Our Services</span>
          </div>

          <span className="inline-block text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
            Expert Advisory
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8">
            Tailored Solutions for <span className="text-green-600">Complex Needs</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            From precise business valuations to complex M&A advisory, we provide the 
            strategic insights you need to make confident decisions for your business's future.
          </p>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-600/5 -skew-x-12 transform translate-x-20 pointer-events-none" />
    </section>
  );
};

export default ServicesHero;
