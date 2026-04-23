"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Heart, Zap } from "lucide-react";

const values = [
  { 
    title: "Unwavering Integrity", 
    desc: "We prioritize ethics above all, ensuring every valuation and deal is handled with absolute transparency.",
    icon: <ShieldCheck size={32} />
  },
  { 
    title: "Strategic Precision", 
    desc: "Our data-driven approach ensures that no detail is overlooked, maximizing value for every client.",
    icon: <Target size={32} />
  },
  { 
    title: "Client-Centricity", 
    desc: "We don't just close deals; we build relationships. Your legacy is our primary responsibility.",
    icon: <Heart size={32} />
  },
  { 
    title: "Dynamic Agility", 
    desc: "The market changes rapidly; we evolve faster to ensure our clients always stay ahead of the curve.",
    icon: <Zap size={32} />
  },
];

const Values = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Our Core Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              The Principles That <span className="text-green-600">Drive Our Success</span>
            </h3>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            These values aren't just words on a wall; they are the foundation of every decision we make and every partnership we form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl hover:border-green-100 transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                {value.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
