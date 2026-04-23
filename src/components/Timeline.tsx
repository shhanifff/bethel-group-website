"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
  { year: "2012", title: "Founding", desc: "Bethel Group was established in New York with a focus on specialized business valuations." },
  { year: "2015", title: "Expansion", desc: "Opened our first international branch and expanded into full M&A advisory services." },
  { year: "2018", title: "Major Milestone", desc: "Reached $1 Billion in managed transaction value across 50+ closed deals." },
  { year: "2020", title: "Innovation", desc: "Launched our proprietary valuation algorithm, setting a new industry standard." },
];

const Timeline = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Our History</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Building Excellence <span className="text-green-600">Since 2012</span>
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200" />

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Year Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-green-600 z-10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-900">{item.year}</span>
                </div>

                {/* Content Card */}
                <div className={`w-[45%] p-8 bg-white rounded-2xl shadow-lg border border-slate-100 relative group hover:border-green-500 transition-all ${index % 2 === 0 ? "mr-12" : "ml-12"}`}>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  
                  {/* Arrow Decoration */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-b border-r border-slate-100 rotate-45 ${index % 2 === 0 ? "-right-2 border-slate-100" : "-left-2 border-slate-100"}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
