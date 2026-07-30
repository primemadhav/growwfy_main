/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Search, 
  TrendingUp, 
  Megaphone, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Cpu, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Users, 
  BarChart3,
  ChevronDown,
  Info
} from 'lucide-react';

interface SaasAppsPageProps {
  onContactClick: () => void;
}

export default function SaasAppsPage({ onContactClick }: SaasAppsPageProps) {
  // Calculator state variables
  const [adSpend, setAdSpend] = useState<number>(400000); // Monthly Paid Ad Budget (₹4,00,000)
  const [cac, setCac] = useState<number>(7000); // Customer Acquisition Cost (₹7,000)
  const [arpu, setArpu] = useState<number>(4000); // Average Revenue Per User / monthly plan cost (₹4,00,000)
  const [churnRate, setChurnRate] = useState<number>(4.5); // Monthly user churn %

  // Computed variables for SaaS ROI Calculator
  const estimatedNewCustomers = Math.round(adSpend / cac);
  const potentialNewMRR = estimatedNewCustomers * arpu;
  const averageCustomerLifetimeMonths = Math.round((100 / churnRate) * 10) / 10;
  const estimatedLtv = Math.round(arpu * averageCustomerLifetimeMonths);
  const ltvToCacRatio = cac > 0 ? (Math.round((estimatedLtv / cac) * 10) / 10) : 0;

  const acquisitionPillars = [
    {
      icon: <Cpu className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      title: "First-Party Attribution & GTM Server-Side Sync",
      description: "Stop flying blind with dead browser pixels. We configure complete server-to-server Conversions API (CAPI) pathways, letting you attributes trials, subscriptions, and contract LTV with absolute mathematical precision."
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      title: "Product-Led Onboarding & Funnel Design",
      description: "We optimize the exact user journey from 'Sign Up' to 'Aha! Moment.' We map activation flows, design custom setup wizards in React, and trigger behavioral emails/push prompts that turn trials into loyal paid advocates."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      title: "Hyper-Segmented Search & Programmatic Ads",
      description: "We deploy aggressive comparison campaigns targeting competitors ('Your Competitor vs You' searches), capture high-intent buyers, and deploy scalable TikTok, Meta, and LinkedIn Advantage+ arrays to scale your user base."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
      title: "Cohort Analysis & LTV Expansion Campaigns",
      description: "Getting the signup is only half the battle. We integrate Mixpanel/Amplitude tracking to trace customer retention. We design targeted re-engagement, feature launch, and annual-plan upgrade campaigns to maximize average LTV."
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 bg-zinc-950 text-white border-b border-zinc-900 stitch-dots-bg">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Elite Badge */}
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-[11px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-indigo-500" />
            <span>Premium SaaS & App Growth System</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-outfit text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              SaaS Marketing Engineered to{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Scale Monthly Recurring Revenue
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
              We design custom high-speed comparison splash pages, map frictionless onboarding flows, and construct server-side tracking pipelines that drive CAC down and scale LTV.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xl mx-auto pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 p-[1.5px] shadow-lg shadow-purple-500/15 group active:scale-[0.98] transition-transform duration-100 cursor-pointer animate-none"
              id="cta-saas-audit"
            >
              <div className="rounded-[11px] bg-zinc-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:bg-transparent group-hover:text-zinc-950 flex items-center justify-center space-x-2">
                <span>Schedule SaaS Funnel Audit</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('saas-roi-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Calculate Unit Economics</span>
              <Sliders className="h-4 w-4 text-indigo-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-black">
              Engineering Excellence
            </div>
            <h2 className="font-outfit text-3xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              Stop Guessing on CAC. Build Scalable Math.
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
              We replace unstable third-party scripts with server-side infrastructure and behavioral logs to give you full visibility over your acquisition math.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {acquisitionPillars.map((pillar, i) => (
              <div 
                key={i}
                className="bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-900 rounded-2xl p-6 sm:p-8 flex flex-col space-y-4 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/[0.01] transition-all duration-250 text-left"
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

      {/* 3. ROI / Unit Economics Calculator Section */}
      <section id="saas-roi-calculator" className="py-16 sm:py-24 border-t border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.02] blur-[120px] pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-black flex items-center space-x-1.5">
                <Sliders className="h-4 w-4" />
                <span>MRR Growth Engine</span>
              </div>
              <h2 className="font-outfit text-3xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white leading-[1.15]">
                Forecast Your Unit Economics
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-semibold">
                Adjust the sliders to simulate user acquisition loops, see your LTV:CAC ratios, and estimate the monthly recurring revenue potential of engineered funnel pipelines.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Attribution via first-party server Conversions API
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Product activation tracking (Mixpanel/Amplitude ready)
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Lightweight React comparison landers with high opt-in speeds
                  </span>
                </div>
              </div>
            </div>

            {/* Right Calculator Interface */}
            <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-900 rounded-3xl p-6 sm:p-10 space-y-8">
              
              <div className="space-y-6 text-left">
                {/* Slider 1: Monthly Ad Budget */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Monthly Paid Ad Spend</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="Budget allocated to paid search, social, and programmatic ad systems." />
                    </span>
                    <span className="text-indigo-500 font-bold font-mono">₹{adSpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000"
                    value={adSpend} 
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>₹10,000</span>
                    <span>₹10,00,000+</span>
                  </div>
                </div>

                {/* Slider 2: CAC */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Customer Acquisition Cost (CAC)</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="The total marketing cost to acquire a single paid subscriber." />
                    </span>
                    <span className="text-indigo-500 font-bold font-mono">₹{cac.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="25000" 
                    step="500"
                    value={cac} 
                    onChange={(e) => setCac(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>₹1,000</span>
                    <span>₹25,000</span>
                  </div>
                </div>

                {/* Slider 3: ARPU (Monthly Price) */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Monthly Pricing Plan (ARPU)</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="Your typical monthly subscription subscription value per user." />
                    </span>
                    <span className="text-indigo-500 font-bold font-mono">₹{arpu.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="40000" 
                    step="500"
                    value={arpu} 
                    onChange={(e) => setArpu(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>₹500/mo</span>
                    <span>₹40,000/mo</span>
                  </div>
                </div>

                {/* Slider 4: Churn Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Monthly User Churn Rate</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="The percentage of active subscribers who cancel their subscription each month." />
                    </span>
                    <span className="text-indigo-500 font-bold font-mono">{churnRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1.0" 
                    max="15.0" 
                    step="0.5"
                    value={churnRate} 
                    onChange={(e) => setChurnRate(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>1.0% (Great retention)</span>
                    <span>15.0% (High churn)</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-left">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    New Monthly Subscribers
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white flex items-baseline">
                    <span>{estimatedNewCustomers}</span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-bold">Paid Users / mo</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    Projected LTV of User
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white font-mono">
                    ₹{estimatedLtv.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    LTV : CAC Ratio
                  </div>
                  <div className="font-outfit text-2xl font-black flex items-baseline">
                    <span className={ltvToCacRatio >= 3.0 ? "text-emerald-500" : "text-amber-500"}>
                      {ltvToCacRatio}x
                    </span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-bold">
                      {ltvToCacRatio >= 3.0 ? "(Healthy SaaS)" : "(Needs Optimization)"}
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    Avg User Lifespan
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {averageCustomerLifetimeMonths} <span className="text-xs text-zinc-500 font-bold">months</span>
                  </div>
                </div>

                <div className="sm:col-span-2 bg-slate-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 rounded-2xl p-6 text-white dark:text-zinc-950 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bypass-contrast">
                  <div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                      New Monthly Recurring Revenue (MRR) Addition
                    </div>
                    <div className="font-outfit text-3xl font-black text-indigo-400 dark:text-indigo-600 font-mono">
                      ₹{potentialNewMRR.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                      Implied Added Pipeline Value (LTV)
                    </div>
                    <div className="font-outfit text-xl font-bold font-mono">
                      ₹{(estimatedNewCustomers * estimatedLtv).toLocaleString()}
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
              <ShieldCheck className="h-5 w-5 text-indigo-500 shrink-0" />
              <span>Full compliance & Cookie Consent</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-indigo-500 shrink-0" />
              <span>Attribution server mirroring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-indigo-500 shrink-0" />
              <span>Cohort and Churn reduction blueprints</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-850 p-8 sm:p-10 rounded-3xl space-y-6">
            <h3 className="font-outfit text-2xl font-black text-zinc-900 dark:text-white">Ready to scale your MRR?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm font-semibold leading-relaxed">
              We help high-growth SaaS firms and mobile applications build native Conversions API structures, map user activation triggers, and streamline subscription funnels.
            </p>
            <button 
              onClick={onContactClick}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:-translate-y-0.5 transition-all duration-150 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Build A Scalable Funnel Blueprint</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
