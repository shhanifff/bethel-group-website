"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Building2, Calendar, DollarSign, Tag } from "lucide-react";

const categories = ["All Transactions", "M&A Advisory", "Valuation", "Consulting", "Restructuring"];

const transactions = [
  {
    id: 1,
    title: "Project Phoenix",
    sector: "Technology",
    type: "M&A Advisory",
    value: "$125M",
    date: "March 2025",
    status: "Closed",
    description: "Strategic sale of a leading SaaS platform to a global private equity firm.",
    image: "/images/service-ma.png"
  },
  {
    id: 2,
    title: "MedTech Innovations",
    sector: "Healthcare",
    type: "Valuation",
    value: "$45M",
    date: "February 2025",
    status: "Completed",
    description: "Comprehensive valuation for estate planning and internal restructuring.",
    image: "/images/service-1.png"
  },
  {
    id: 3,
    title: "Skyline Logistics",
    sector: "Aviation",
    type: "M&A Advisory",
    value: "$85M",
    date: "January 2025",
    status: "Closed",
    description: "Successful acquisition of a regional logistics provider by a national carrier.",
    image: "/images/industry-fin.png"
  },
  {
    id: 4,
    title: "GreenEnergy Corp",
    sector: "Energy",
    type: "Consulting",
    value: "$210M",
    date: "December 2024",
    status: "Ongoing",
    description: "Strategic growth consulting and capital raising for renewable energy expansion.",
    image: "/images/industry-tech.png"
  },
  {
    id: 5,
    title: "Global Fintech Solutions",
    sector: "Finance",
    type: "M&A Advisory",
    value: "$350M",
    date: "November 2024",
    status: "Closed",
    description: "Merger of two leading fintech startups to create a dominant market player.",
    image: "/images/hero.png"
  },
  {
    id: 6,
    title: "Precision Manufacturing",
    sector: "Industrial",
    type: "Restructuring",
    value: "$65M",
    date: "October 2024",
    status: "Completed",
    description: "Operational restructuring and efficiency audit for a mid-market manufacturer.",
    image: "/images/service-restruct.png"
  }
];

const TransactionGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All Transactions");

  const filteredTransactions = activeFilter === "All Transactions" 
    ? transactions 
    : transactions.filter(t => t.type === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat 
                  ? "bg-green-600 text-white shadow-lg shadow-green-200" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTransactions.map((tx) => (
              <motion.div
                key={tx.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tx.image}
                    alt={tx.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-green-600 uppercase tracking-widest shadow-sm">
                    {tx.status}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
                    <Tag size={14} /> {tx.sector}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{tx.title}</h4>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">
                    {tx.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Transaction Value</span>
                      <span className="text-lg font-bold text-slate-900">{tx.value}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Completion Date</span>
                      <span className="text-lg font-bold text-slate-900">{tx.date}</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-50 group-hover:bg-green-600 group-hover:text-white transition-all font-bold text-slate-900">
                    Case Study Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TransactionGrid;
