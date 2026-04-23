"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calculator, LineChart, Briefcase, Handshake, Search, Target } from "lucide-react";

const services = [
  {
    title: "Business Valuations",
    description: "Accurate and defensible valuations for tax, estate planning, and potential sales.",
    icon: <Calculator className="text-green-600" size={32} />,
    image: "/images/service-1.png"
  },
  {
    title: "M&A Advisory",
    description: "Expert guidance through the complex process of buying or selling a business.",
    icon: <Handshake className="text-green-600" size={32} />,
    image: "/images/hero.png" // Placeholder or different image
  },
  {
    title: "Strategic Consulting",
    description: "Growth strategies designed to maximize your company's value over time.",
    icon: <Target className="text-green-600" size={32} />,
    image: "/images/service-1.png"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Comprehensive Solutions for <span className="text-green-600">Business Success</span>
            </h3>
          </div>
          <p className="text-slate-600 max-w-sm mb-2">
            We provide specialized advisory services tailored to the unique needs of middle-market business owners and executives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
