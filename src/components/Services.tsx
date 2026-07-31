/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Palette, Search, Zap, LayoutDashboard, Code, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onLearnMore: () => void;
}

export default function Services({ onLearnMore }: ServicesProps) {
  const list = [
    {
      icon: Palette,
      title: 'Custom UX/UI Web Design',
      description: 'No generic themes or template look-alikes. We design bespoke, hand-crafted web layouts that match your brand perfectly, emphasizing gorgeous typography, spacious layouts, and a fluid mobile-first design.',
      features: ['Tailored Brand Guideline Integration', 'High Fidelity Interactive Prototyping', '100% Mobile & Desktop Fluid Grids'],
      color: 'from-emerald-500/20 to-teal-500/10',
    },
    {
      icon: Search,
      title: 'Google Search Ranking (SEO)',
      description: 'We get your website to rank at the absolute top of Google. Our team handles your local search visibility, optimizes key search keywords, and sets up search index systems so real paying clients find your business first.',
      features: ['Rank First on Google Search', 'Target Local Buyers Instantly', 'Double Your Daily Web Visitors'],
      color: 'from-cyan-500/20 to-blue-500/10',
    },
    {
      icon: Zap,
      title: 'Sub-1.0s Lightning Speed Tuning',
      description: 'We optimize your entire codebase to load in less than a second. Lightning-fast sites keep customers on your page, prevent cart drop-offs, and rank significantly higher on Google Search metrics.',
      features: ['Tree-Shaken Lightweight Codebases', 'Deferred Non-Blocking Resource Delivery', 'Lighthouse 100/100 Speed Scores'],
      color: 'from-yellow-500/20 to-amber-500/10',
    },
    {
      icon: LayoutDashboard,
      title: 'Secure Client Workspace Portal',
      description: 'Get access to your own private, secure administrative dashboard. Update your company settings, download billing invoices, and track live project development milestones in real-time.',
      features: ['Live Milestone Progress Pipeline', 'Profile Settings & Contact Log Archiving', 'Self-Serve Subscription & Billing Invoices'],
      color: 'from-purple-500/20 to-indigo-500/10',
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-zinc-900/40 border-y border-zinc-900">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Professional Web Capabilities
          </div>
          <h2 className="font-display text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
            Everything You Need <br />
            for a <span className="italic font-medium text-emerald-400">Dominant Web Presence</span>
          </h2>
          <p className="text-lg text-zinc-100 sm:text-xl font-extrabold leading-relaxed">
            We merge stunning visual designs with flawless mechanical code to elevate your business above competitors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/50"
              >
                {/* Glowing subtle hover outline */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div>
                  {/* Icon Block */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:text-emerald-300 group-hover:border-zinc-700 shadow-inner mb-6 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-black text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-base text-zinc-100 leading-relaxed font-bold mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Bullet features */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 text-sm font-extrabold text-white animate-none">
                        <span className="mt-1.5 flex h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom line CTA */}
                <div className="pt-4 border-t border-zinc-850/50 flex justify-between items-center text-xs">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider">0{idx + 1} / Agency Core</span>
                  <button 
                    onClick={onLearnMore}
                    className="font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center space-x-1 hover:underline"
                  >
                    <span>View Pricing Tier</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Quick Speed Test Badge */}
        <div className="mt-16 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <Code className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-white text-base">Static Pre-Rendering & Cache Strategies</h4>
              <p className="text-xs text-zinc-400 font-light mt-1 max-w-xl">
                We bundle our files with lightweight assets, pre-compress fonts, and code client logic directly in static modules to bypass database delays, guaranteeing sub-second load speeds.
              </p>
            </div>
          </div>
          <button 
            onClick={onLearnMore}
            className="w-full md:w-auto shrink-0 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 px-5 py-3 text-xs font-semibold transition-colors"
          >
            Compare Subscription Plans
          </button>
        </div>

      </div>
    </section>
  );
}
