"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const Advantage = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/service-1.png" 
                alt="Advisory Excellence" 
                width={800} 
                height={600} 
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-green-600 p-8 rounded-2xl shadow-xl z-20 hidden md:block max-w-[280px]">
              <p className="text-white text-3xl font-bold mb-2">98%</p>
              <p className="text-green-100 text-sm font-medium">Customer satisfaction rate across all closed deals in 2025.</p>
            </div>
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl -z-0 opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">The Advisory Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Why Leaders Choose <span className="text-green-600">Bethel Group</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our approach combines deep technical expertise with a personal touch. We don't just see numbers; we see the legacy you've built and work tirelessly to protect and grow it.
            </p>

            <div className="space-y-6">
              {[
                { title: "Unbiased Valuations", desc: "Purely objective analysis based on market data and proprietary algorithms." },
                { title: "Global Network", desc: "Access to thousands of potential buyers and investors worldwide." },
                { title: "Confidentiality First", desc: "Rigorous protocols to ensure your business information remains private." },
                { title: "Post-Deal Support", desc: "We stay with you after the closing to ensure a smooth transition." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="text-green-600 group-hover:scale-125 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all active:scale-95">
              Explore Our History
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
