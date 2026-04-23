"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Building2, 
  Stethoscope, 
  Laptop, 
  ShoppingBag, 
  Plane, 
  Zap, 
  ShieldCheck, 
  Landmark,
  ArrowRight
} from "lucide-react";

const industries = [
  {
    id: "finance",
    title: "Financial Services",
    icon: <Landmark size={24} />,
    image: "/images/industry-fin.png",
    description: "Navigating the complex regulatory and financial landscape of global banking, insurance, and fintech.",
    expertise: ["Investment Banking", "Fintech & Payments", "Insurance Advisory"],
    stats: { value: "$850M+", deals: "35+" }
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: <Stethoscope size={24} />,
    image: "/images/industry-health.png",
    description: "Specialized advisory for medical practices, biotech firms, and healthcare infrastructure providers.",
    expertise: ["Biotech Valuation", "Medical Groups", "Pharmaceutical M&A"],
    stats: { value: "$420M+", deals: "22+" }
  },
  {
    id: "technology",
    title: "Technology & Digital",
    icon: <Laptop size={24} />,
    image: "/images/industry-tech.png",
    description: "Driving value in the high-growth sectors of software development, AI, and digital infrastructure.",
    expertise: ["SaaS Models", "AI & Data Science", "Cloud Infrastructure"],
    stats: { value: "$1.2B+", deals: "48+" }
  },
  {
    id: "retail",
    title: "Retail & Consumer",
    icon: <ShoppingBag size={24} />,
    image: "/images/hero.png",
    description: "Adapting traditional retail models and e-commerce platforms to the evolving consumer landscape.",
    expertise: ["E-commerce Growth", "D2C Brands", "Supply Chain Optimization"],
    stats: { value: "$310M+", deals: "18+" }
  }
];

const IndustryGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 gap-32">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                {/* Decorative Stats Card */}
                <div className={`absolute -bottom-8 ${index % 2 === 0 ? "-right-8" : "-left-8"} bg-white p-8 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block min-w-[200px]`}>
                  <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">Sector Performance</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-slate-900 leading-none">{item.stats.value}</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">Managed Transaction Value</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-2xl font-bold text-slate-900 leading-none">{item.stats.deals}</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">Successful Deals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-green-600 uppercase tracking-widest">Industry Expertise</h3>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">{item.title}</h4>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {item.expertise.map((exp) => (
                    <div key={exp} className="flex items-center gap-3 py-2 border-b border-slate-50">
                      <Zap size={14} className="text-green-600" />
                      <span className="text-slate-700 font-semibold">{exp}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-green-600 transition-colors group">
                  Explore Case Studies <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
