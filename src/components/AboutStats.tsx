"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Transaction Value", value: "$2.5B+", prefix: "" },
  { label: "Deals Closed", value: "120+", prefix: "" },
  { label: "Advisory Projects", value: "450+", prefix: "" },
  { label: "Global Partners", value: "25+", prefix: "" },
];

const AboutStats = () => {
  return (
    <section className="relative z-20 -mt-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left md:border-r last:border-r-0 border-slate-100 pr-4"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm font-bold text-green-600 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
