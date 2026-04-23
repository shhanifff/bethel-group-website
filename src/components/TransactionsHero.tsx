"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const TransactionsHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/transaction-hero.png")' }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 font-medium">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Transactions</span>
            </div>

            <span className="inline-block text-green-500 font-bold uppercase tracking-widest text-sm mb-4">
              Proven Track Record
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Recent <span className="text-green-500">Transactions</span> & Success Stories
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Showcasing our commitment to delivering exceptional value for middle-market 
              business owners through strategic M&A and expert advisory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-green-600 p-10 rounded-2xl shadow-2xl text-white min-w-[300px]"
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-6 opacity-80">Total Transaction Value</p>
            <p className="text-6xl font-black mb-4">$2.5B+</p>
            <div className="flex items-center gap-2 text-green-100 font-bold">
              <ArrowUpRight size={20} /> 15% increase vs 2024
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransactionsHero;
