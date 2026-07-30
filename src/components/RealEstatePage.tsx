/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Search, 
  TrendingUp, 
  Megaphone, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Home, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Users, 
  MessageSquare,
  ChevronDown,
  Info
} from 'lucide-react';

interface RealEstatePageProps {
  onContactClick: () => void;
}

export default function RealEstatePage({ onContactClick }: RealEstatePageProps) {
  // Calculator state variables
  const [targetLeads, setTargetLeads] = useState<number>(100);
  const [avgHomePrice, setAvgHomePrice] = useState<number>(15000000); // Average residential home price (₹1.5 Crores)
  const [commissionRate, setCommissionRate] = useState<number>(2.0); // Average broker commission % (2%)
  const [leadToCloseRate, setLeadToCloseRate] = useState<number>(2.0); // 2% industry close rate on targeted digital leads

  // Computed variables for ROI Calculator
  const estimatedDeals = Math.round((targetLeads * (leadToCloseRate / 100)) * 10) / 10;
  const avgCommissionValue = avgHomePrice * (commissionRate / 100);
  const potentialMonthlyGrowth = estimatedDeals * avgCommissionValue;
  const potentialAnnualGrowth = potentialMonthlyGrowth * 12;

  const acquisitionPillars = [
    {
      icon: <Building2 className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
      title: "MLS & IDX Dynamic Tech Integrations",
      description: "We build custom MLS active listing feeds directly into high-speed React storefronts. Give your clients a beautiful, lightning-fast property search experience that completely outperforms clunky outdated broker templates."
    },
    {
      icon: <Megaphone className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      title: "Exclusive Seller & Valuation Funnels",
      description: "Capture listing inventory before other agents even know they are planning to sell. We construct premium localized Home Valuation funnels and targeted local search ad arrays that capture motivated sellers early."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      title: "Instant WhatsApp & CRM Autoresponders",
      description: "In real estate, response time is everything. We connect custom-triggered API hooks that initiate interactive, personalized WhatsApp and text replies within 60 seconds of any inquiry, keeping your leads completely warm."
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
      title: "Brokerage & Agent Brand Positioning",
      description: "Stop building Zillow's brand; start building your own. We design breathtaking editorial-grade brand assets, custom team profiles, and neighborhood-specific authority guides that command respect and secure premium listings."
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 bg-zinc-950 text-white border-b border-zinc-900 stitch-dots-bg">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Elite Badge */}
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-500" />
            <span>Premium Real Estate Acquisition System</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-outfit text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              Real Estate Marketing That Secures{' '}
              <span className="bg-gradient-to-r from-amber-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent">
                Exclusive High-Value Listings
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
              We design custom MLS-integrated web portals, deploy highly targeted Meta Dynamic Catalog funnels, and construct localized seller acquisition campaigns that build your long-term broker equity.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xl mx-auto pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 p-[1.5px] shadow-lg shadow-purple-500/15 group active:scale-[0.98] transition-transform duration-100 cursor-pointer animate-none"
              id="cta-re-audit"
            >
              <div className="rounded-[11px] bg-zinc-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:bg-transparent group-hover:text-zinc-950 flex items-center justify-center space-x-2">
                <span>Schedule Listing Growth Audit</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('re-roi-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Calculate Brokerage ROI</span>
              <Sliders className="h-4 w-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="font-mono text-xs text-amber-500 dark:text-amber-400 uppercase tracking-widest font-black">
              System Engineering
            </div>
            <h2 className="font-outfit text-3xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              Built Specifically for Luxury Brokerages & Top Producers
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
              We replace standard template widgets with high-speed, custom-coded web architectures and data sync channels to give you complete digital ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {acquisitionPillars.map((pillar, i) => (
              <div 
                key={i}
                className="bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-900 rounded-2xl p-6 sm:p-8 flex flex-col space-y-4 hover:border-amber-500/20 hover:shadow-lg hover:shadow-amber-500/[0.01] transition-all duration-250 text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                  {pillar.icon}
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-semibold">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ROI Calculator Section */}
      <section id="re-roi-calculator" className="py-16 sm:py-24 border-t border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="absolute -bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="font-mono text-xs text-amber-500 dark:text-amber-400 uppercase tracking-widest font-black flex items-center space-x-1.5">
                <Sliders className="h-4 w-4" />
                <span>Brokerage Growth Model</span>
              </div>
              <h2 className="font-outfit text-3xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white leading-[1.15]">
                Forecast Your Custom Commission Pipeline
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-semibold">
                Adjust the sliders to see the direct revenue potential of custom MLS-integrated buyer funnels and exclusive seller acquisition channels.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    100% Exclusive, custom-owned database (No shared leads)
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Seamless CRM API routing & rapid autoresponders
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Advanced dynamic Facebook catalog structures & home value models
                  </span>
                </div>
              </div>
            </div>

            {/* Right Calculator Interface */}
            <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-900 rounded-3xl p-6 sm:p-10 space-y-8">
              
              <div className="space-y-6 text-left">
                {/* Slider 1: Target Leads */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Monthly Exclusive Leads Generated</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="Number of targeted exclusive leads capturing buyer/seller intent." />
                    </span>
                    <span className="text-amber-500 font-bold font-mono">{targetLeads} leads</span>
                  </div>
                  <input 
                    type="range" 
                    min="30" 
                    max="500" 
                    step="10"
                    value={targetLeads} 
                    onChange={(e) => setTargetLeads(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>30 Leads</span>
                    <span>500 Leads</span>
                  </div>
                </div>

                {/* Slider 2: Average Home Price */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Average Property Value</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="The typical average transaction price in your local target areas." />
                    </span>
                    <span className="text-amber-500 font-bold font-mono">
                      ₹{avgHomePrice.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="3000000" 
                    max="100000000" 
                    step="500000"
                    value={avgHomePrice} 
                    onChange={(e) => setAvgHomePrice(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>₹30 Lakhs</span>
                    <span>₹10 Crores+</span>
                  </div>
                </div>

                {/* Slider 3: Commission rate */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Broker/Agent Commission Margin</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="Your standard side commission percentage (e.g. 2% listing or buyer side)." />
                    </span>
                    <span className="text-amber-500 font-bold font-mono">{commissionRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1.0" 
                    max="5.0" 
                    step="0.1"
                    value={commissionRate} 
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>1.0%</span>
                    <span>5.0%</span>
                  </div>
                </div>

                {/* Slider 4: Lead-to-Close Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Lead-to-Deal Close Rate</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="The conversion percentage of exclusive digital leads to fully closed transactions." />
                    </span>
                    <span className="text-amber-500 font-bold font-mono">{leadToCloseRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="6.0" 
                    step="0.5"
                    value={leadToCloseRate} 
                    onChange={(e) => setLeadToCloseRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>0.5% (Conservative)</span>
                    <span>6.0% (Highly Pro)</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-left">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    Estimated Monthly Deals
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white flex items-baseline">
                    <span>{estimatedDeals}</span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-bold">Closed Listings/Buyers</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    Avg Commission Per Deal
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white font-mono">
                    ₹{Math.round(avgCommissionValue).toLocaleString()}
                  </div>
                </div>

                <div className="sm:col-span-2 bg-slate-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 rounded-2xl p-6 text-white dark:text-zinc-950 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bypass-contrast">
                  <div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                      Projected Monthly Revenue Growth
                    </div>
                    <div className="font-outfit text-3xl font-black text-amber-400 dark:text-amber-600 font-mono">
                      ₹{Math.round(potentialMonthlyGrowth).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                      Est. Annual Commission Value
                    </div>
                    <div className="font-outfit text-xl font-bold font-mono">
                      ₹{Math.round(potentialAnnualGrowth).toLocaleString()}/yr
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Trust Banner */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900/10 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-zinc-500 dark:text-zinc-400 text-xs font-mono font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
              <span>SAC compliant campaigns</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-amber-500 shrink-0" />
              <span>Instant lead text trigger</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneCall className="h-5 w-5 text-amber-500 shrink-0" />
              <span>exclusive localized authority</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-850 p-8 sm:p-10 rounded-3xl space-y-6">
            <h3 className="font-outfit text-2xl font-black text-zinc-900 dark:text-white">Ready to scale your local market share?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm font-semibold leading-relaxed">
              We only partner with one exclusive brokerage or team leader per metropolitan area/district to prevent audience and channel conflict. Claim your local territory today.
            </p>
            <button 
              onClick={onContactClick}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-300 text-zinc-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:-translate-y-0.5 transition-all duration-150 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Verify Local Availability</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
