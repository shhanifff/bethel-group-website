"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your financials, operations, and market positioning."
  },
  {
    number: "02",
    title: "Strategic Valuation",
    description: "Determining the true market value using multiple sophisticated models."
  },
  {
    number: "03",
    title: "Marketing & Outreach",
    description: "Discreetly presenting your opportunity to qualified buyers globally."
  },
  {
    number: "04",
    title: "Negotiation & Diligence",
    description: "Managing the complex interplay of legal and financial audits."
  },
  {
    number: "05",
    title: "Closing & Succession",
    description: "Finalizing the deal and ensuring your legacy is in good hands."
  }
];

const Process = () => {
  return (
    <section id="deals" className="py-24 bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-green-500 uppercase tracking-widest mb-3">The Deal Flow</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Proven <span className="text-green-500">M&A Process</span></h3>
          <p className="text-slate-400 text-lg">
            A structured, 5-step approach designed to maximize value and minimize risk at every stage of the transaction.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8 relative group hover:bg-green-600 transition-colors duration-500 cursor-default">
                  <span className="text-2xl font-bold text-white group-hover:scale-125 transition-transform">{step.number}</span>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping -z-10" />
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-500/10 active:scale-95 transition-all">
            Download Process Guide (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
