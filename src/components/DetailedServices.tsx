"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  BarChart3, 
  Briefcase, 
  Calculator, 
  Handshake, 
  LineChart, 
  PieChart, 
  Search, 
  TrendingUp,
  Target,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "ma-advisory",
    title: "M&A Advisory",
    category: "Strategic",
    description: "End-to-end guidance for business sales, acquisitions, and mergers. We manage the entire lifecycle from target identification to closing.",
    icon: <Handshake size={24} />,
    image: "/images/service-ma.png",
    features: ["Target Identification", "Deal Structuring", "Negotiation Support"]
  },
  {
    id: "valuation",
    title: "Business Valuation",
    category: "Financial",
    description: "Independent, defensible valuations for tax compliance, estate planning, and potential transactions using proprietary models.",
    icon: <Calculator size={24} />,
    image: "/images/service-1.png",
    features: ["Fair Market Value", "Tax & Estate Valuation", "Fairness Opinions"]
  },
  {
    id: "restructuring",
    title: "Corporate Restructuring",
    category: "Consulting",
    description: "Optimizing organizational structures and financial frameworks to improve efficiency and maximize shareholder value.",
    icon: <Briefcase size={24} />,
    image: "/images/service-restruct.png",
    features: ["Capital Structuring", "Efficiency Audits", "Asset Optimization"]
  },
  {
    id: "strategy",
    title: "Strategic Exit Planning",
    category: "Consulting",
    description: "Preparing business owners for the ultimate transition, ensuring they maximize value and secure their legacy.",
    icon: <Target size={24} />,
    image: "/images/hero.png",
    features: ["Pre-Sale Readiness", "Legacy Protection", "Wealth Integration"]
  }
];

const DetailedServices = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 gap-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="text-green-600">{service.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-900">{service.category}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Zap size={12} className="text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 group">
                  Learn Detailed Process <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
