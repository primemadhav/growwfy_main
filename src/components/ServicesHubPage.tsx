/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Search, 
  Megaphone, 
  Share2, 
  ArrowRight, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface ServicesHubPageProps {
  setActiveTab: (tab: string) => void;
  onContactClick: () => void;
}

export default function ServicesHubPage({ setActiveTab, onContactClick }: ServicesHubPageProps) {
  const departments = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description: "Complete organic visibility strategy incorporating technical schemas, on-page optimization, content calendars, keyword discovery, sitemap pipelines, and high-trust local backlinking setups.",
      icon: <Search className="h-6 w-6 text-purple-400" />,
      tagline: "Organic Authority / JSON-LD",
      colorClass: "hover:border-purple-500/40 hover:bg-purple-500/[0.02]",
      badgeText: "Category 01",
      badgeColor: "text-purple-400 border-purple-500/20 bg-purple-500/5",
      buttonText: "Explore Organic Growth & Guide"
    },
    {
      id: "paid-advertising",
      title: "Paid Advertising",
      description: "Meticulous Google Search and Meta Ads campaigns managed on a developer-grade performance setup. Includes custom Server Conversions API (CAPI) telemetry and strict daily negative list scrubs.",
      icon: <Megaphone className="h-6 w-6 text-red-400" />,
      tagline: "Search / Meta / Conversions API",
      colorClass: "hover:border-red-500/40 hover:bg-red-500/[0.02]",
      badgeText: "Category 02",
      badgeColor: "text-red-400 border-red-500/20 bg-red-500/5",
      buttonText: "Explore Conversions & Auditing"
    },
    {
      id: "website-dev",
      title: "Website Development",
      description: "High-performance custom design and web development engineered for speed, secure hosting, and dynamic layouts. Using modern frameworks to deliver the exact user experiences your business needs.",
      icon: <Code className="h-6 w-6 text-emerald-400" />,
      tagline: "React / Next.js / Custom Code / CMS",
      colorClass: "hover:border-emerald-500/40 hover:bg-emerald-500/[0.02]",
      badgeText: "Category 03",
      badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      buttonText: "Explore Website Development"
    },
    {
      id: "consulting",
      title: "Consulting & Social Media",
      description: "Strategic positioning, competitor analytics, audience profiling, and organic SMM accounts management designed to outline and execute the exact attribution models your brand needs to scale.",
      icon: <Share2 className="h-6 w-6 text-cyan-400" />,
      tagline: "SMM / Brand Advisory / Positioning",
      colorClass: "hover:border-cyan-500/40 hover:bg-cyan-500/[0.02]",
      badgeText: "Category 04",
      badgeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      buttonText: "Explore SMM & Brand Consulting"
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans stitch-dots-bg pb-24 overflow-hidden text-left">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-emerald-500/[0.03] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/3 h-[600px] w-[600px] rounded-full bg-indigo-500/[0.03] blur-[150px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 border-b border-zinc-900 bg-zinc-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-extrabold">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span>Full Service Ecosystem</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-none">
              Strategic Growth, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent italic font-semibold">
                Engineered For Scale
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
              We separate our services into four primary, high-performance departments. Each is managed by master developers and seasoned analytics strategists to deliver maximum structural value.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-white tracking-tight">
            Four Core Specialized Performance Departments
          </h2>
          <p className="text-xs text-zinc-400 mt-1">Select any segment to explore exact deliverables, technical specifications, and custom billing matrices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div 
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`p-8 rounded-2xl bg-zinc-900/20 border border-zinc-850 cursor-pointer transition-all duration-300 flex flex-col justify-between group ${dept.colorClass}`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800">
                    {dept.icon}
                  </div>
                  <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${dept.badgeColor}`}>
                    {dept.badgeText}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                    {dept.tagline}
                  </span>
                  <h3 className="font-display text-2xl font-normal text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {dept.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>{dept.buttonText}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose us statement banner */}
        <div className="mt-20 rounded-2xl border border-zinc-850 bg-gradient-to-tr from-zinc-900/40 via-zinc-900/10 to-emerald-950/15 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-emerald-400/5 rounded-full blur-[80px] pointer-events-none" />
          <h3 className="font-display text-2xl font-normal text-white mb-4">
            Custom-Programmed & Marketed For <span className="italic font-medium text-emerald-400">Ultimate Performance</span>
          </h3>
          <p className="text-xs text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            We do not sell pre-fabricated templates. Whether you contract our team for professional website engineering, keyword indices setup, high-ROI Google search advertising, or social media management campaigns, everything is crafted by professional developers and analytics experts.
          </p>
          <button 
            onClick={onContactClick}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-6 py-3 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Get a Custom Consultation &rarr;
          </button>
        </div>
      </section>

    </div>
  );
}
