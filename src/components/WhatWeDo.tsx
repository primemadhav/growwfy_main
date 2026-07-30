"use client";

import React from 'react';
import { motion } from 'motion/react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';

interface WhatWeDoProps {
  onNavigate?: (tab: string) => void;
}

export default function WhatWeDo({ onNavigate }: WhatWeDoProps) {
  return (
    <section id="features" className="relative py-24 overflow-hidden border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/20">
      {/* Decorative ambient background elements */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 dark:bg-emerald-500/3 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400"
          >
            Features
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight"
          >
            Our Expertise & Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            We help businesses grow online with high-performance websites, result-driven digital marketing, and powerful advertising strategies that generate real leads and sales.
          </motion.p>
        </div>

        {/* The Glowing Effect Bento Grid */}
        <div className="w-full">
          <GlowingEffectDemo />
        </div>
      </div>
    </section>
  );
}
