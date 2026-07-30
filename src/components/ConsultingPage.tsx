/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Share2, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  User,
  Users,
  Compass,
  Calendar,
  Layers,
  BarChart,
  Target,
  ChevronRight
} from 'lucide-react';

interface ConsultingPageProps {
  onContactClick: () => void;
}

export default function ConsultingPage({ onContactClick }: ConsultingPageProps) {
  const categories = [
    {
      title: "Social Media Strategy & Management (SMM)",
      description: "Grow an active, loyal customer following across top-tier digital communication networks.",
      items: [
        "Instagram & Facebook Account Management",
        "LinkedIn Thought-Leadership Copywriting",
        "Monthly Interactive Content Calendar",
        "Custom Visual Branding & Asset Packs",
        "Advanced Hashtag & Organic Algorithm Strategy",
        "Bi-weekly Engagement Performance Metrics"
      ]
    },
    {
      title: "Content Marketing & Production",
      description: "Custom editorial pipelines optimized to command authority and retain organic interest.",
      items: [
        "In-depth Blog Post Optimization",
        "Professional Business Copywriting",
        "Corporate Case-Study Generation",
        "Lead Magnet & Whitepaper Creation",
        "Newsletter Design & Campaign Automation",
        "PR & Media Placement Strategies"
      ]
    },
    {
      title: "Brand Advisory & Strategy Consulting",
      description: "Direct executive sessions to guide market positioning and design unified scaling roadmaps.",
      items: [
        "Corporate Identity & Positioning Design",
        "Competitor Market Share Analysis",
        "Comprehensive Customer Persona Modeling",
        "Marketing Channel Attribution Auditing",
        "Scaling Strategy & Operations consulting",
        "Direct 1-on-1 Marketing Advisory Sessions"
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans stitch-dots-bg pb-24 overflow-hidden text-left">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 border-b border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column */}
            <div className="space-y-6 lg:max-w-2xl">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                <span>Services</span>
                <span className="text-zinc-700">//</span>
                <span className="text-zinc-300">Organic SMM & Brand Consulting</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-none">
                Command Your Market via <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent italic font-semibold">
                  Strategic Advisory & SMM
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                We engineer organic growth funnels and provide precise operational consulting to transform passive views into loyal, high-paying advocates. From custom social templates and thought-leadership positioning to brand-relevance audits, we outline the exact roadmaps your business needs to scale.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-90 text-black px-7 py-4 text-sm font-bold tracking-wide shadow-lg shadow-cyan-500/10 transition-all duration-150 group"
                >
                  <span>Request Brand Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a 
                  href="#consulting-categories"
                  className="inline-flex items-center justify-center space-x-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-850 px-7 py-4 text-sm font-semibold transition-all"
                >
                  Explore advisory
                </a>
              </div>
            </div>

            {/* Right Column (Aesthetic SMM Stat Card) */}
            <div className="w-full lg:max-w-md bg-zinc-900/40 border border-zinc-850 rounded-2xl p-6 space-y-6 shadow-2xl relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">
                KPI Tracking
              </div>
              
              <p className="font-display text-lg font-bold text-white flex items-center space-x-2">
                <Users className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span>Audience Engagement Index</span>
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-500">COMMUNICATION CHANNELS</span>
                  <span className="text-zinc-200 font-bold">LinkedIn, IG, FB, YouTube</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-500">MONTHLY CONTENT DELIVERABLES</span>
                  <span className="text-cyan-400 font-bold">Comprehensive Custom Calendars</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2.5">
                  <span className="text-zinc-500">BRAND DESIGN STANDARDS</span>
                  <span className="text-zinc-200 font-bold">Bespoke Vector Layout Sets</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">COMMUNITY RESPONSE TRIGGER</span>
                  <span className="text-emerald-400 font-bold">Under 2 hours</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SPECIFIC ADVISORY CATEGORIES */}
      <section id="consulting-categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span>Advisory Matrix</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
            Comprehensive Organic Strategy & Consulting
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Our strategic parameters are designed to design comprehensive digital footprints, establish market authority, and coordinate high-ROI community networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {idx === 0 && <Compass className="h-5 w-5" />}
                    {idx === 1 && <Calendar className="h-5 w-5" />}
                    {idx === 2 && <User className="h-5 w-5" />}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{cat.title}</h3>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  {cat.description}
                </p>
                <div className="border-t border-zinc-800/60 my-3" />
                <ul className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-2 text-[11px] text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6">
                <button 
                  onClick={onContactClick}
                  className="flex items-center space-x-1 text-[10px] font-mono tracking-wider text-cyan-400 hover:text-cyan-300 uppercase font-bold"
                >
                  <span>Consult In This Field</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Consultation Block */}
        <div className="mt-16 rounded-2xl border border-zinc-850 bg-zinc-900/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-white font-display text-lg font-bold">Unsure which marketing channels to prioritize?</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Book a direct, non-obligatory 30-minute positioning call with our head of operations. We'll examine your product, map your competition, and outline the exact attribution targets you should focus on.
            </p>
          </div>
          <button 
            onClick={onContactClick}
            className="rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-200 font-bold px-5 py-3 transition-colors shrink-0"
          >
            Schedule Advisory Call &rarr;
          </button>
        </div>

      </section>

    </div>
  );
}
