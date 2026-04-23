"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ExternalLink, Share2 } from "lucide-react";

const members = [
  {
    name: "Arthur Richardson",
    role: "Managing Director",
    image: "/images/team-1.png",
    expertise: "Strategic M&A",
  },
  {
    name: "Elena Petrov",
    role: "Senior Partner",
    image: "/images/team-2.png",
    expertise: "Tax & Valuation",
  },
  {
    name: "Marcus Sterling",
    role: "Head of Advisory",
    image: "/images/team-3.png",
    expertise: "Corporate Strategy",
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-green-500 uppercase tracking-widest mb-3">Expert Minds</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Senior <span className="text-green-500">Advisory Team</span></h3>
            <p className="text-slate-400 text-lg">
              Meet the industry veterans dedicated to securing your business legacy and maximizing your future value.
            </p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all active:scale-95 shadow-xl shadow-green-900/20">
            View All Team
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <ExternalLink size={20} />
                   </div>
                   <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <Mail size={20} />
                   </div>

                </div>
              </div>
              <div className="text-center">
                <span className="text-green-500 font-bold text-xs uppercase tracking-widest block mb-2">{member.expertise}</span>
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-slate-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
