/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  ShoppingBag, 
  Code2, 
  Check, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Sparkles,
  Zap,
  Gauge,
  Lock,
  Search
} from 'lucide-react';

interface WebsiteDevPageProps {
  onContactClick: () => void;
}

const SERVICES = [
  {
    id: "custom",
    title: "Custom Website Development",
    subtitle: "High-Performance Hand-Crafted Code",
    description: "Built from scratch using React, Vite, and Tailwind CSS. Ideal for businesses requiring maximum speed, premium custom layouts, and flawless search engine optimization.",
    icon: Code2,
    color: "emerald",
    features: [
      "Sub-second hydration & loading speeds",
      "Complete design freedom without theme restrictions",
      "Clean, semantic TypeScript codebase",
      "Perfect 100/100 Lighthouse SEO performance scores"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "shopify",
    title: "Shopify Store Development",
    subtitle: "Conversion-Focused E-Commerce",
    description: "Tailored Shopify storefronts engineered to convert visitors into loyal customers. Complete with custom Liquid coding, seamless checkout integrations, and automated inventory sync.",
    icon: ShoppingBag,
    color: "blue",
    features: [
      "Optimized checkout flows to reduce cart abandonment",
      "Responsive layout optimized for mobile shopping",
      "Integration with payment gateways and third-party APIs",
      "Easy-to-use backend for manual product & order handling"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    subtitle: "Flexible Content Management Systems",
    description: "The world's most popular CMS customized for your enterprise. We build clean, lightweight WordPress themes and block layouts that are easy for your internal marketing team to update.",
    icon: Globe,
    color: "indigo",
    features: [
      "User-friendly Gutenberg & block-based content updates",
      "Robust plugin ecosystem for immediate extensibility",
      "Optimized database structures for high security",
      "Full custom post type structures for structured data"
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  }
];

export default function WebsiteDevPage({ onContactClick }: WebsiteDevPageProps) {
  const [activeSection, setActiveSection] = useState<string>("custom");
  const [activeHubNode, setActiveHubNode] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-[#fcfdfd] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen font-sans selection:bg-emerald-500/20 selection:text-emerald-300 overflow-x-hidden stitch-dots-bg">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b border-zinc-900 overflow-hidden text-center">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-emerald-500/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Website Development Suite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight font-sans">
            Tailored Web Solutions For <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Every Scale and Vision
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We build lightning-fast web solutions matched perfectly to your needs. Choose from hand-crafted custom React systems, e-commerce ready Shopify stores, or simple WordPress content management panels.
          </p>
        </div>
      </section>

      {/* Services Grid (Simple Cards Overview) */}
      <section className="py-12 bg-zinc-950/25 backdrop-blur-[2px] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="font-sans text-2xl sm:text-3xl font-black text-white tracking-tight">
              High-Performance Custom Development Archetypes
            </h2>
            <p className="text-xs text-zinc-400 mt-1">Select an architecture tailored specifically to your product delivery requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              const isActive = activeSection === srv.id;
              
              return (
                <div 
                  key={srv.id}
                  onClick={() => scrollToSection(srv.id)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between h-full group ${
                    isActive 
                      ? 'bg-zinc-900 border-emerald-500/30 shadow-lg shadow-emerald-500/[0.02]' 
                      : 'bg-zinc-900/30 hover:bg-zinc-900/60 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Icon wrapper with custom color border */}
                    <div className={`p-3 rounded-xl inline-block ${
                      srv.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                      srv.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-indigo-500/10 text-indigo-400'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono tracking-wide uppercase font-medium">
                        {srv.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 group-hover:gap-2.5 transition-all">
                    Explore Setup
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 1.5. BRAND FLAGSHIP HUB SECTION (Our core philosophy: Website is Your Online Flagship) */}
      <section className="py-20 bg-zinc-950/25 backdrop-blur-[2px] border-b border-zinc-900 overflow-hidden text-left relative">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/[0.015] rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: The Interactive Hub Diagram */}
            <div className="lg:col-span-8 relative">
              <div className="relative aspect-[16/10] lg:aspect-[16/9.5] w-full rounded-2xl bg-[#070e12] border border-zinc-850/70 overflow-hidden p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
                {/* Visual grid backing */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                {/* SVG Connections & Arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Dynamic Glow Lines */}
                  {[
                    { id: "retail", x: 22, y: 18 },
                    { id: "marketplaces", x: 12, y: 50 },
                    { id: "social", x: 22, y: 82 },
                    { id: "events", x: 78, y: 18 },
                    { id: "campaigns", x: 88, y: 50 },
                    { id: "search", x: 78, y: 82 }
                  ].map((node) => {
                    const isActive = activeHubNode === node.id;
                    return (
                      <line
                        key={node.id}
                        x1="50"
                        y1="50"
                        x2={node.x}
                        y2={node.y}
                        className={`transition-all duration-300 ${
                          isActive 
                            ? 'stroke-emerald-400 stroke-[2.5] filter drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]' 
                            : 'stroke-zinc-800 stroke-[1]'
                        }`}
                      />
                    );
                  })}

                  {/* Downward flow indicators */}
                  <line x1="43" y1="58" x2="43" y2="74" className="stroke-zinc-800 stroke-[1]" />
                  <line x1="50" y1="58" x2="50" y2="80" className="stroke-zinc-800 stroke-[1]" />
                  <line x1="57" y1="58" x2="57" y2="74" className="stroke-zinc-800 stroke-[1]" />

                  {/* Downward arrow heads */}
                  <path d="M40.5 71 M43 74 L45.5 71" fill="none" className="stroke-zinc-800 stroke-[1]" />
                  <path d="M47.5 77 M50 80 L52.5 77" fill="none" className="stroke-zinc-800 stroke-[1]" />
                  <path d="M54.5 71 M57 74 L59.5 71" fill="none" className="stroke-zinc-800 stroke-[1]" />
                </svg>

                {/* Surrounding Interactive Node Buttons */}
                {[
                  { id: "retail", label: "RETAIL", x: 22, y: 18, desc: "Unified inventory, secure POS terminals, and fully responsive e-commerce checkout lanes." },
                  { id: "marketplaces", label: "MARKETPLACES", x: 12, y: 50, desc: "Automatic catalog syncing with global platforms like Amazon, eBay, and niche vendor frameworks." },
                  { id: "social", label: "SOCIAL", x: 22, y: 82, desc: "Capture inbound interest with high-fidelity shoppable grids, campaign assets, and custom leads." },
                  { id: "events", label: "EVENTS", x: 78, y: 18, desc: "Real-time ticket distributions, calendar integrations, and instantaneous scheduler tools." },
                  { id: "campaigns", label: "CAMPAIGNS", x: 88, y: 50, desc: "Hyper-focused promotional landing paths with zero script lag to maximize conversion thresholds." },
                  { id: "search", label: "SEARCH", x: 78, y: 82, desc: "Pristine SEO indexing structures with custom schema markups and complete XML sitemapping." }
                ].map((node) => {
                  const isActive = activeHubNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onMouseEnter={() => setActiveHubNode(node.id)}
                      onMouseLeave={() => setActiveHubNode(null)}
                      className={`absolute px-5 py-2.5 rounded-xl border text-[10px] sm:text-xs font-mono tracking-widest transition-all duration-300 uppercase z-10 font-bold ${
                        isActive
                          ? 'bg-zinc-900 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/15 scale-105'
                          : 'bg-zinc-950/95 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-white hover:scale-102'
                      }`}
                      style={{ 
                        left: `${node.x}%`, 
                        top: `${node.y}%`, 
                        transform: 'translate(-50%, -50%)' 
                      }}
                    >
                      {node.label}
                    </button>
                  );
                })}

                {/* Central Circle "YOUR WEBSITE" */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-28 sm:size-36 md:size-40 rounded-full flex items-center justify-center text-center p-4 transition-all duration-500 border border-zinc-800"
                  style={{
                    background: "radial-gradient(circle, #ce8b7b 0%, #0d2a33 100%)",
                    boxShadow: activeHubNode 
                      ? "0 0 60px rgba(206, 139, 123, 0.35)" 
                      : "0 0 40px rgba(206, 139, 123, 0.18)"
                  }}
                >
                  <div className="space-y-1">
                    <span className="block text-[9px] sm:text-[10px] tracking-widest font-mono text-zinc-300 font-bold uppercase">YOUR</span>
                    <span className="block text-[13px] sm:text-[15px] font-black tracking-widest font-mono text-white leading-tight uppercase">WEBSITE</span>
                  </div>
                </div>

                {/* Dynamic Status Display Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 border border-zinc-900 rounded-xl p-4 text-xs text-zinc-400 leading-relaxed min-h-[72px] flex items-center transition-all duration-300">
                  {activeHubNode ? (
                    <div className="space-y-1 text-left w-full">
                      <span className="font-bold text-white block uppercase tracking-wider text-[9px] font-mono text-emerald-400">
                        {activeHubNode} System Dynamics
                      </span>
                      <p className="text-[11px] sm:text-xs text-zinc-300 leading-snug">
                        {
                          [
                            { id: "retail", desc: "Unified inventory, secure POS terminals, and fully responsive e-commerce checkout lanes." },
                            { id: "marketplaces", desc: "Automatic catalog syncing with global platforms like Amazon, eBay, and niche vendor frameworks." },
                            { id: "social", desc: "Capture inbound interest with high-fidelity shoppable grids, campaign assets, and custom leads." },
                            { id: "events", desc: "Real-time ticket distributions, calendar integrations, and instantaneous scheduler tools." },
                            { id: "campaigns", desc: "Hyper-focused promotional landing paths with zero script lag to maximize conversion thresholds." },
                            { id: "search", desc: "Pristine SEO indexing structures with custom schema markups and complete XML sitemapping." }
                          ].find(n => n.id === activeHubNode)?.desc
                        }
                      </p>
                    </div>
                  ) : (
                    <span className="text-zinc-500 italic font-mono text-center w-full text-[11px] tracking-wide">
                      Hover over any node to explore connection dynamics.
                    </span>
                  )}
                </div>

                {/* Downward Text representation */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase text-center max-w-[280px] pointer-events-none">
                  BUILD CUSTOMER LOYALTY &amp; DRIVE SALES ACROSS CHANNELS
                </div>

              </div>
            </div>

            {/* Right side: Strategy copywriting & CTA */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-widest block">
                OUR CORE PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight leading-tight">
                How We See It — Your Website is Your Online Flagship
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Your website is where your brand's story comes to life—a hub for customers to learn, discover, and experience. Through customer research and journey mapping, we help brands create seamless experiences across every touchpoint, driving engagement and boosting sales not just online, but across all channels.
              </p>
              
              {/* Action button */}
              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 hover:border-emerald-500/20 text-white text-xs font-mono uppercase tracking-widest font-black transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                >
                  See Our Services
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Sections Block */}
      <section className="py-16 bg-zinc-950/25 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                id={srv.id}
                key={srv.id}
                className={`grid lg:grid-cols-12 gap-12 items-center pt-8 border-t border-zinc-900 first:border-none scroll-mt-24`}
              >
                {/* Visual Image / Highlight Box */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-last' : ''}`}>
                  <div className="relative group overflow-hidden rounded-2xl border border-zinc-900 shadow-2xl">
                    <img 
                      src={srv.image} 
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] object-cover filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="lg:col-span-7 text-left space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-400 tracking-widest">
                      <Icon className="h-4 w-4" />
                      <span>{srv.subtitle}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                    {srv.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">
                      KEY OUTCOMES & BENEFITS
                    </span>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {srv.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onContactClick}
                      className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 text-xs font-mono uppercase tracking-wider font-bold transition-all hover:border-emerald-500/20 flex items-center gap-2 cursor-pointer"
                    >
                      Configure This Solution
                      <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>




      {/* Collaboration Banner Section */}
      <section className="py-6 px-4 max-w-7xl mx-auto text-left">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-850/80 p-8 sm:py-10 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          {/* Subtle textured grid backer */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[200px] h-[100px] bg-emerald-500/[0.015] rounded-full blur-[80px] pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-black text-white relative z-10 text-center sm:text-left tracking-tight">
            Interested in collaborating on a project?
          </h3>
          <button
            onClick={onContactClick}
            className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-100 cursor-pointer relative z-10 shrink-0 shadow-lg shadow-zinc-900/10 dark:shadow-white/5"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-zinc-950/25 backdrop-blur-[2px] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Food & Beverage */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[1.3] flex flex-col justify-between p-6 transition-all duration-500 hover:scale-[1.02] shadow-xl bg-gradient-to-br from-[#832c25] via-[#c85b4d] to-[#e49b8c] border border-white/5">
              <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                {/* Custom bowl stack geometric SVG shape */}
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 8a6 6 0 0 0 12 0H6z" />
                  <path d="M6 16a6 6 0 0 1 12 0H6z" />
                </svg>
              </div>
              <h3 className="text-sm font-black tracking-wider text-white uppercase font-sans">
                Food &amp; Beverage
              </h3>
            </div>

            {/* Beauty & Skincare */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[1.3] flex flex-col justify-between p-6 transition-all duration-500 hover:scale-[1.02] shadow-xl bg-gradient-to-br from-[#13313d] via-[#395e69] to-[#8d828a] border border-white/5">
              <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                {/* 4-pointed sparkle geometric SVG shape */}
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                </svg>
              </div>
              <h3 className="text-sm font-black tracking-wider text-white uppercase font-sans">
                Beauty &amp; Skincare
              </h3>
            </div>

            {/* Health & Wellness */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[1.3] flex flex-col justify-between p-6 transition-all duration-500 hover:scale-[1.02] shadow-xl bg-gradient-to-br from-[#243e33] via-[#3d5a4d] to-[#607b6f] border border-white/5">
              <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                {/* Interlocking geometric rings SVG shape */}
                <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="15" cy="20" r="8" />
                  <circle cx="23" cy="20" r="8" />
                </svg>
              </div>
              <h3 className="text-sm font-black tracking-wider text-white uppercase font-sans">
                Health &amp; Wellness
              </h3>
            </div>

            {/* Home & Family */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[1.3] flex flex-col justify-between p-6 transition-all duration-500 hover:scale-[1.02] shadow-xl bg-gradient-to-br from-[#1c305c] via-[#395082] to-[#7f88bc] border border-white/5">
              <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                {/* 2x2 grid representing window/grid SVG */}
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="8" height="8" rx="1" />
                  <rect x="13" y="3" width="8" height="8" rx="1" />
                  <rect x="3" y="13" width="8" height="8" rx="1" />
                  <rect x="13" y="13" width="8" height="8" rx="1" />
                </svg>
              </div>
              <h3 className="text-sm font-black tracking-wider text-white uppercase font-sans">
                Home &amp; Family
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Comparison Matrix Table */}
      <section className="py-16 bg-[#02050c]/40 backdrop-blur-[2px] border-t border-b border-zinc-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-widest block">
              PLATFORM COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans">
              Choose the right fit for your goals
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Use this simple summary framework to determine which architecture satisfies your product requirements perfectly.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-900 bg-zinc-950/40">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="border-b border-zinc-900 bg-zinc-900/30 text-zinc-400 font-mono text-[10px] tracking-wider uppercase">
                  <th className="p-4 font-bold">Platform Option</th>
                  <th className="p-4 font-bold">Ideal Use Case</th>
                  <th className="p-4 font-bold">Key Strength</th>
                  <th className="p-4 font-bold">Speed Rating</th>
                  <th className="p-4 font-bold">Customizability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-zinc-900/10">
                  <td className="p-4 font-bold text-white">Custom React Website</td>
                  <td className="p-4">SaaS landing pages, portfolio sites, speed-critical designs</td>
                  <td className="p-4 text-emerald-400">Extreme speeds & custom animations</td>
                  <td className="p-4 font-mono text-emerald-400">10/10 (Sub-0.3s)</td>
                  <td className="p-4">Absolute (Infinite)</td>
                </tr>
                <tr className="hover:bg-zinc-900/10">
                  <td className="p-4 font-bold text-white">Shopify Storefront</td>
                  <td className="p-4">Direct-to-consumer online retail, e-commerce stores</td>
                  <td className="p-4 text-blue-400">Secure payments & checkout stability</td>
                  <td className="p-4 font-mono">7.5/10 (Good)</td>
                  <td className="p-4">High (Theme + Liquid Code)</td>
                </tr>
                <tr className="hover:bg-zinc-900/10">
                  <td className="p-4 font-bold text-white">WordPress CMS</td>
                  <td className="p-4">Corporate informational sites, blogs, media portals</td>
                  <td className="p-4 text-indigo-400">Simple admin panels & rich content editor</td>
                  <td className="p-4 font-mono">7/10 (Decent)</td>
                  <td className="p-4">Moderate (Block Editor)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Simple CTA Block */}
      <section className="py-20 text-center relative overflow-hidden border-t border-zinc-900 bg-zinc-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
            Ready to design your digital storefront?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Reach out with your goals and platform preference. We will draft a flat-rate proposal and get your build deployed quickly.
          </p>
          <div className="pt-4">
            <button
              onClick={onContactClick}
              className="px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-mono uppercase tracking-widest font-black transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-emerald-500/10"
            >
              Start Free Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
