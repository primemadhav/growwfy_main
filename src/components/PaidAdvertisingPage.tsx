/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Megaphone, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Database,
  Cpu,
  Target,
  Layers,
  Flame,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Zap,
  DollarSign
} from 'lucide-react';

interface PaidAdvertisingPageProps {
  onContactClick: () => void;
}

export default function PaidAdvertisingPage({ onContactClick }: PaidAdvertisingPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'differentiation'>('overview');

  const comparisonData = [
    {
      feature: "Conversion Telemetry",
      growwfy: "Advanced Conversions API (CAPI) & first-party server-side tracking. Zero data loss from iOS 14+ blocks.",
      competitors: "Basic browser-side pixel tracking only. Major data gaps and inaccurate performance metrics."
    },
    {
      feature: "Landing Page Speed",
      growwfy: "Custom React/Vite server-side optimized landing pages. Loads under 0.4s to reduce bounce rates and boost Quality Scores.",
      competitors: "Heavy WordPress templates or drag-and-drop page builders. Slow load speeds leading to higher ad spend waist."
    },
    {
      feature: "Auditing & Negative Match Frequency",
      growwfy: "Daily keyword auditing. Negative lists are scrubbed and updated every 24 hours to block irrelevant search terms.",
      competitors: "Once-a-month review. Google and Meta are allowed to burn budget on irrelevant broad matches."
    },
    {
      feature: "Copywriting & Creative Rotation",
      growwfy: "Continuous variation tests. Highly optimized copy paired with dynamic creative assets that match direct search intent.",
      competitors: "Set-and-forget creatives. Ad sets run for months without updating, causing fatigue and declining click-through rates."
    },
    {
      feature: "Client Transparency",
      growwfy: "Real-time client acquisition dashboard showing exact cost-per-lead, conversion channels, and actual ROI.",
      competitors: "Convoluted PDF reports delivered once a month with confusing vanity metrics (impressions, clicks) to hide low conversion rates."
    }
  ];

  const adChannels = [
    {
      title: "Google Search & Call Ads",
      description: "Direct response search ads displayed precisely when users actively search for your service. High-intent keyword targeting minimizes waste.",
      icon: <Target className="h-5 w-5 text-amber-400" />,
      color: "border-amber-500/20 bg-amber-500/5 text-amber-400"
    },
    {
      title: "Meta (Facebook & Instagram) Funnels",
      description: "Highly engaging video and dynamic visual ad carousels. Targets user lifestyles, lookalike audiences, and direct local regions.",
      icon: <Megaphone className="h-5 w-5 text-blue-400" />,
      color: "border-blue-500/20 bg-blue-500/5 text-blue-400"
    },
    {
      title: "Performance Max & Shopping",
      description: "Fully automated, asset-grouped product catalogs pushed across Youtube, Gmail, Discover, and Google Maps to maximize sales.",
      icon: <TrendingUp className="h-5 w-5 text-emerald-400" />,
      color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
    },
    {
      title: "Conversion API & GA4 Telemetry",
      description: "Server-to-server data synchronization that bypasses ad-blockers and feeds search algorithms with clean, deduplicated conversion events.",
      icon: <Database className="h-5 w-5 text-purple-400" />,
      color: "border-purple-500/20 bg-purple-500/5 text-purple-400"
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans stitch-dots-bg pb-24 overflow-hidden text-left">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 border-b border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column */}
            <div className="space-y-6 lg:max-w-2xl">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono tracking-widest text-red-400 uppercase font-bold">
                <span>Services</span>
                <span className="text-zinc-700">//</span>
                <span className="text-zinc-300">Paid Advertising Services</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-none">
                Bypass the Noise with <br />
                <span className="bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent italic font-semibold">
                  ROI-Driven Paid Advertising
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Most agencies simply set up an ad campaign and let it run on autopilot, letting Google and Meta burn through your hard-earned marketing budget. We do the exact opposite. We write custom tracking integrations, design lightweight landing pages, and execute strict daily optimizations to ensure every single rupee works to earn you high-quality acquisitions.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 hover:opacity-90 text-black px-7 py-4 text-sm font-bold tracking-wide shadow-lg shadow-red-500/10 transition-all duration-150 group"
                >
                  <span>Request Custom Ad Audit</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a 
                  href="#performance-system"
                  className="inline-flex items-center justify-center space-x-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-850 px-7 py-4 text-sm font-semibold transition-all"
                >
                  See How We Do It
                </a>
              </div>
            </div>

            {/* Right Column (Aesthetic Ad ROI Badge) */}
            <div className="w-full lg:max-w-md bg-zinc-900/40 border border-zinc-850 rounded-2xl p-6 space-y-6 shadow-2xl relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono uppercase bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-0.5 rounded">
                Telemetry ACTIVE
              </div>
              
              <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                <Flame className="h-5 w-5 text-red-400 animate-pulse" />
                <span>Conversion Metrics Overview</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950/60 border border-zinc-900 rounded-xl">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">AVERAGE CTR</span>
                  <span className="text-2xl font-display font-black text-white mt-1 block">5.42%</span>
                  <span className="text-[10px] text-emerald-400 font-mono">+112% vs. Industry</span>
                </div>
                <div className="p-4 bg-zinc-950/60 border border-zinc-900 rounded-xl">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">ACQUISITION COST</span>
                  <span className="text-2xl font-display font-black text-emerald-400 mt-1 block">-35%</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Reduced Waste</span>
                </div>
              </div>

              <div className="p-4 bg-zinc-950/60 border border-zinc-900 rounded-xl space-y-2.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Ad Spend Return (ROAS)</span>
                  <span className="text-white font-bold">4.8x Average</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-amber-400 h-full w-[85%]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE CHANNELS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-red-500/30 bg-red-500/5 px-3 py-1 font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold">
            <Sparkles className="h-3 w-3 text-red-400" />
            <span>Target Channels</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
            High-Yield Paid Channels We Command
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            We target customers precisely where they are online. Whether actively searching on Google, browsing social channels, or scrolling through media pipelines, we capture attention immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adChannels.map((channel, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 hover:border-zinc-800 transition-all duration-300 space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${channel.color}`}>
                  {channel.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white">{channel.title}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PERFORMANCE MAXIMIZATION SYSTEM */}
      <section id="performance-system" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-amber-500/30 bg-amber-500/5 px-3 py-1 font-mono text-[10px] text-amber-400 uppercase tracking-widest font-bold">
            <Cpu className="h-3 w-3 text-amber-400" />
            <span>Operational Excellence</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
            How We Maximize Ad Performance
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            We do not guess. We operate with meticulous, developer-led system architectures designed to optimize every event, eliminate bounce-rates, and maximize quality scores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Server-Side Telemetry Setup",
              desc: "We establish first-party server-side tracking (Meta CAPI & GA4 Server Containers). This preserves data from ad-blockers, ensures 100% accurate conversion signals, and helps ad algorithms optimize bidding faster."
            },
            {
              step: "02",
              title: "High-Speed React Landers",
              desc: "A slow loading page kills conversions. We code customized, lightning-fast landing pages in React that score 100/100 on Google Lighthouse, reducing ad bounce rates by up to 45% immediately."
            },
            {
              step: "03",
              title: "Daily Negative Scrubbing",
              desc: "Competitors set keywords and leave them. We audit user search terms daily, adding hundreds of exact negative search filters every single week to protect your budget from burning on useless clicks."
            },
            {
              step: "04",
              title: "Algorithmic Smart Bidding",
              desc: "We feed highly accurate data arrays into Google and Meta target systems. This teaches search engines exactly which users convert, driving down cost-per-acquisition (CPA) month-after-month."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all duration-300 relative">
              <span className="font-mono text-xs text-red-500 font-extrabold block mb-4">{item.step} // STAGE</span>
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR COMPETITIVE EDGE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>The Competitive Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
            Why Growwfy is Structurally Superior
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Most agencies are operated by marketers who don't understand code or system architectures. We are a developer-driven collective who treat paid advertising as an engineering problem.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-zinc-850 rounded-2xl bg-zinc-900/20 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/60 border-b border-zinc-850 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  <th className="p-5 font-extrabold">Ad Feature / Standard</th>
                  <th className="p-5 text-emerald-400 font-extrabold">Growwfy Strategy</th>
                  <th className="p-5 text-red-400 font-extrabold">Average Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 font-sans text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/10 transition-colors">
                    <td className="p-5 font-bold text-white max-w-[150px]">{row.feature}</td>
                    <td className="p-5 text-zinc-300 max-w-xs leading-relaxed">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.growwfy}</span>
                      </div>
                    </td>
                    <td className="p-5 text-zinc-500 max-w-xs leading-relaxed">
                      <div className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-red-500/60 shrink-0 mt-0.5" />
                        <span>{row.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to action section */}
        <div className="mt-24 rounded-2xl border border-zinc-850 bg-gradient-to-tr from-zinc-900/40 via-zinc-900/10 to-red-950/10 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-red-400/5 rounded-full blur-[80px] pointer-events-none" />
          <h3 className="font-display text-2xl font-normal text-white mb-4">
            Stop Burning Capital on Autopilot Campaigns
          </h3>
          <p className="text-xs text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            Contact us today for a completely free audit of your current Google Ads or Meta Ads configurations. We frequently identify 30% to 50% spend waste on our very first analysis.
          </p>
          <button 
            onClick={onContactClick}
            className="rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-black px-6 py-3 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Get Your Free Ads Audit &rarr;
          </button>
        </div>

      </section>

    </div>
  );
}
