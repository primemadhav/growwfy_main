/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Info,
  ShieldCheck,
  Percent,
  Clock,
  Sparkles,
  RefreshCw,
  Eye,
  ChevronDown,
  BarChart3,
  Flame,
  Truck,
  Code,
  Shield,
  Layers,
  Lock,
  FileCode,
  Search
} from 'lucide-react';

interface EcommercePageProps {
  onContactClick: () => void;
}

export default function EcommercePage({ onContactClick }: EcommercePageProps) {
  // Calculator state variables
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(1500000); // Monthly sales
  const [adSpend, setAdSpend] = useState<number>(400000); // Ad budget
  const [blendedRoas, setBlendedRoas] = useState<number>(2.8); // ROAS
  const [aov, setAov] = useState<number>(1500); // Average Order Value

  // Computed variables for Ecommerce scale
  const revenueFromAds = adSpend * blendedRoas;
  const totalTransactions = Math.round(revenueFromAds / aov);
  const blendedCpa = Math.round(adSpend / (totalTransactions || 1));
  const expectedProfitMargin = Math.round((revenueFromAds - adSpend) * 0.4); // Assuming 40% net margin after COGS/Ads

  const pillars = [
    {
      icon: <Cpu className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      title: "First-Party Attribution & Cloud Proxy Sync",
      description: "Stop relying on broken browser pixels. We engineer a server-to-server Conversions API path that guarantees complete attribution transparency and restores your algorithm targeting efficiency."
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
      title: "Headless React Storefronts (< 0.5s loads)",
      description: "We code custom high-speed headless storefronts in React. By bypassing bloated themes and standard liquid templates, we unlock ultra-lightweight loads that double conversion rates."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
      title: "High-Velocity Meta & TikTok Creative Matrices",
      description: "Creative is the ultimate leverage in modern ad systems. We produce custom high-converting direct response assets, hook tests, and dynamic pricing catalogs that scale ROAS."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      title: "Retention Loops & Advanced LTV Automation",
      description: "We deploy automated email, SMS, and WhatsApp pipelines utilizing customer behavioral data. Keep your users active with personalized back-in-stock, cart abandon, and loyalty sequences."
    }
  ];

  const customPillars = [
    {
      icon: <Code className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
      title: "Custom Design & Code Control",
      description: "We design and code every part of your website from scratch using React. Your site can grow as big as you want without any platform limits."
    },
    {
      icon: <Shield className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
      title: "High Security & Protection",
      description: "With no default admin login pages or database holes, your custom-coded website is extremely safe from hackers and automated attacks."
    },
    {
      icon: <Search className="h-6 w-6 text-sky-500 dark:text-sky-400" />,
      title: "Search Engine Optimization (SEO)",
      description: "We write clean, simple code and set up Google search structure properly to help your website rank as high as possible."
    },
    {
      icon: <Layers className="h-6 w-6 text-violet-500 dark:text-violet-400" />,
      title: "Super Fast Global Loading",
      description: "We host your website on fast cloud networks so it loads instantly for visitors all over the world, even during high traffic."
    }
  ];

  const wordpressPillars = [
    {
      icon: <FileCode className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      title: "Custom WordPress Themes",
      description: "We do not use heavy page builders like Elementor or Divi. We write clean code to ensure your WordPress site runs as fast as possible."
    },
    {
      icon: <Lock className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
      title: "Locked-Down Security",
      description: "We secure the standard login paths, use safe databases, and block spam or hacking attempts before they reach your site."
    },
    {
      icon: <Sliders className="h-6 w-6 text-teal-500 dark:text-teal-400" />,
      title: "Easy to Edit Admin Panel",
      description: "We create custom drag-and-drop blocks, so your team can easily change text, images, and pages without any coding knowledge."
    },
    {
      icon: <Flame className="h-6 w-6 text-orange-500 dark:text-orange-400" />,
      title: "Super Fast Caching & Tuning",
      description: "We set up advanced caching systems so your database runs fast and your pages load without delay."
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen text-left">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-zinc-950 text-white border-b border-zinc-900 stitch-dots-bg">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen E-Commerce Scaling</span>
              </div>
              
              <h1 className="font-display text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl leading-[1.1]">
                Scale Your Store With <br />
                <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400">
                  Headless Speed & Server-Side Tracking
                </span>
              </h1>
              
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                Tired of losing 30% of sales attribution to iOS limitations? Stop building on bloated, clunky standard themes. We code custom headless React storefronts with absolute pixel speed and native server-to-server tracking APIs that double your conversion and scale ROAS.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 p-[1.5px] shadow-lg shadow-purple-500/15 group active:scale-[0.98] transition-transform duration-100 cursor-pointer animate-none"
                  id="ecommerce-hero-btn"
                >
                  <div className="rounded-[11px] bg-zinc-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:bg-transparent group-hover:text-zinc-950 flex items-center justify-center space-x-2">
                    <span>Schedule Free E-Com Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
                <a
                  href="#calculator"
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <span>Forecast ROAS Potential</span>
                </a>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-900/60 text-left">
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-white">+45%</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-extrabold">Conversion Lift</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-white">&lt; 0.5s</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-extrabold">Mobile Page Load</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-white">35%</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-extrabold">CPA Reduction</div>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Asset Panel */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 pointer-events-none" />
              <div className="relative border border-zinc-800 bg-zinc-900/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md text-left">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      Attribution Pipeline: LIVE
                    </span>
                  </div>
                  <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[9px] font-bold text-purple-400 font-mono">
                    Meta & TikTok GTM Sync
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-900 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <ShoppingBag className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Purchase Event (Server-Side)</div>
                        <div className="text-[9px] font-mono text-zinc-500">Shopify Webhook Sync</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">₹4,200</span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-900 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">ITP Cookie Restored</div>
                        <div className="text-[9px] font-mono text-zinc-500">First-Party Handshake</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-yellow-400">100% Match</span>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-900 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Blended ROAS Scale</div>
                        <div className="text-[9px] font-mono text-zinc-500">Automated Campaign Tuning</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">+42% Growth</span>
                  </div>
                </div>

                {/* Performance Chart Simulation */}
                <div className="mt-6 pt-5 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">Page speed:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-white">0.38s LCP</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold text-emerald-400 font-mono uppercase">
                      Grade A
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2A. CUSTOM WEBSITE PILLARS */}
      <section className="py-20 sm:py-28 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
              Custom Website Development
            </div>
            <h2 className="font-display text-3xl font-normal tracking-tight text-slate-900 dark:text-white sm:text-4xl leading-tight">
              Custom-Coded Websites Built to Outperform <br />
              <span className="italic font-medium text-emerald-500 dark:text-emerald-400">Standard Page Builders</span>
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto font-semibold leading-relaxed">
              We replace heavy plugins and restrictive design templates with fast, custom-coded HTML & React websites designed to rank high and load instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {customPillars.map((p, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 shadow-sm shadow-zinc-100/50 dark:shadow-none hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-emerald-500/[0.03] dark:hover:shadow-emerald-500/[0.02] hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="h-12 w-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 flex items-center justify-center mb-5 shrink-0 shadow-sm group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2B. WORDPRESS WEBSITE PILLARS */}
      <section className="py-20 sm:py-28 bg-zinc-50/50 dark:bg-zinc-900/10 border-b border-zinc-100 dark:border-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue-500 dark:text-blue-400">
              Custom WordPress Websites
            </div>
            <h2 className="font-display text-3xl font-normal tracking-tight text-slate-900 dark:text-white sm:text-4xl leading-tight">
              WordPress Websites Optimized to Outperform <br />
              <span className="italic font-medium text-blue-500 dark:text-blue-400">Sluggish Visual Builders</span>
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto font-semibold leading-relaxed">
              We replace heavy pre-made themes and bloated page builders with fast, clean, and easy-to-edit WordPress setups built specifically for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {wordpressPillars.map((p, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 shadow-sm shadow-zinc-100/50 dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-blue-500/[0.03] dark:hover:shadow-blue-500/[0.02] hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="h-12 w-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 flex items-center justify-center mb-5 shrink-0 shadow-sm group-hover:scale-105 group-hover:border-blue-500/30 transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CORE ACQUISITION PILLARS */}
      <section className="py-20 sm:py-28 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-purple-500 dark:text-purple-400">
              The Architecture of E-commerce Scale
            </div>
            <h2 className="font-display text-3xl font-normal tracking-tight text-slate-900 dark:text-white sm:text-4xl leading-tight">
              A Complete System Built to Outperform <br />
              <span className="italic font-medium text-purple-500 dark:text-purple-400">Standard Shopify Bloat</span>
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto font-semibold leading-relaxed">
              We replace clunky apps and unreliable third-party pixels with clean, custom, server-authoritative code designed to maximize sales and order values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 shadow-sm shadow-zinc-100/50 dark:shadow-none hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:bg-white dark:hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-purple-500/[0.03] dark:hover:shadow-purple-500/[0.02] hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="h-12 w-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 flex items-center justify-center mb-5 shrink-0 shadow-sm group-hover:scale-105 group-hover:border-purple-500/30 transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ROAS & SCALE CALCULATOR */}
      <section id="calculator" className="relative py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-900/10 border-b border-zinc-100 dark:border-zinc-900 stitch-dots-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-purple-500 dark:text-purple-400">
                Performance Forecaster
              </div>
              <h2 className="font-outfit text-3xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white leading-[1.15]">
                Forecast Your E-commerce Scale
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-semibold">
                Adjust the sliders to simulate paid marketing loops, set average order values (AOV), and estimate the net profit potential of an optimized server-side attribution engine.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Attribution recovery of up to 35% previously unrecorded revenue
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    LCP mobile speed conversion boost (&lt; 0.5s mobile checkouts)
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-650 dark:text-zinc-300 font-semibold">
                    Highly-personalized automated Klaviyo retention flows
                  </span>
                </div>
              </div>
            </div>

            {/* Right Calculator Interface */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
              
              <div className="space-y-6 text-left">
                {/* Slider 1: Monthly Ad Budget */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Monthly Paid Ad Spend</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="Budget allocated to paid search, social, and programmatic ad systems." />
                    </span>
                    <span className="text-purple-500 font-bold font-mono">₹{adSpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000"
                    value={adSpend} 
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>₹10,000</span>
                    <span>₹10,00,000+</span>
                  </div>
                </div>

                {/* Slider 2: Blended ROAS */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Target Blended ROAS</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="Return on Ad Spend (Blended ad spend / total tracked store revenue generated)." />
                    </span>
                    <span className="text-purple-500 font-bold font-mono">{blendedRoas}x</span>
                  </div>
                  <input 
                    type="range" 
                    min="1.0" 
                    max="20.0" 
                    step="0.1"
                    value={blendedRoas} 
                    onChange={(e) => setBlendedRoas(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>1.0x (Break-even)</span>
                    <span>20.0x (High Scale)</span>
                  </div>
                </div>

                {/* Slider 3: Average Order Value */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-xs sm:text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1">
                      <span>Average Order Value (AOV)</span>
                      <Info className="h-3.5 w-3.5 text-zinc-400 cursor-help" title="The average transaction ticket price on your storefront." />
                    </span>
                    <span className="text-purple-500 font-bold font-mono">₹{aov.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="200" 
                    max="10000" 
                    step="100"
                    value={aov} 
                    onChange={(e) => setAov(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                    <span>₹200</span>
                    <span>₹10,000</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-left">
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    Transactions Generated
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white flex items-baseline">
                    <span>{totalTransactions}</span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-bold">orders / mo</span>
                  </div>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
                  <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                    Estimated Blended CPA
                  </div>
                  <div className="font-outfit text-2xl font-black text-slate-900 dark:text-white font-mono">
                    ₹{blendedCpa.toLocaleString()}
                  </div>
                </div>

                <div className="sm:col-span-2 bg-slate-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 rounded-2xl p-6 text-white dark:text-zinc-950 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bypass-contrast">
                  <div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                      New Monthly Sales Revenue Added
                    </div>
                    <div className="font-outfit text-3xl font-black text-purple-400 dark:text-purple-600 font-mono">
                      ₹{revenueFromAds.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-extrabold mb-1">
                      Estimated Net Added Profit
                    </div>
                    <div className="font-outfit text-xl font-bold font-mono text-emerald-400 dark:text-emerald-600">
                      ₹{expectedProfitMargin.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. TRUST FLAGS */}
      <section className="py-12 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-zinc-500 dark:text-zinc-400 text-xs font-mono font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-purple-500 shrink-0" />
              <span>Attribution SLA Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-500 shrink-0" />
              <span>0.5s mobile checkout targets</span>
            </div>
            <div className="flex items-center space-x-2">
              <Percent className="h-5 w-5 text-purple-500 shrink-0" />
              <span>LTV automation setups included</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="bg-zinc-950 py-20 relative overflow-hidden text-center text-white border-t border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative space-y-6">
          <div className="inline-flex items-center space-x-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-mono font-bold">
            <Flame className="h-3.5 w-3.5" />
            <span>Limited Consulting Slots Available</span>
          </div>
          <h2 className="font-display text-3xl font-normal sm:text-4xl leading-tight">
            Ready to Build a Headless, <br />
            <span className="italic font-medium text-purple-400">High-Attribution Store?</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm font-light leading-relaxed">
            Get a comprehensive, completely customized analysis of your site’s current mobile load speeds, core attribution accuracy, and automated retention loops.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-purple-500 hover:bg-purple-600 text-white transition-all cursor-pointer animate-none"
            >
              Schedule Free Growth Audit
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all cursor-pointer animate-none"
            >
              Talk with an Engineer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
