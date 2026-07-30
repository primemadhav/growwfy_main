/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Building2, 
  Scale, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Award,
  Laptop,
  Home
} from 'lucide-react';

interface IndustriesPageProps {
  setActiveTab: (tab: string) => void;
  onContactClick: () => void;
}

export default function IndustriesPage({ setActiveTab, onContactClick }: IndustriesPageProps) {
  const industries = [
    {
      id: "dental",
      title: "Dental & Orthodontics",
      description: "Custom-coded medical websites, high-margin patient acquisition funnels, NexHealth / Dentrix scheduler integrations, and hyper-targeted campaigns for All-on-4 implants, veneers, and clear aligners.",
      icon: <Activity className="h-6 w-6 text-teal-400" />,
      tagline: "Implant Patients / NexHealth / HIPAA Compliant",
      colorClass: "hover:border-teal-500/40 hover:bg-teal-500/[0.02]",
      badgeText: "High-Margin Patients",
      badgeColor: "text-teal-400 border-teal-500/20 bg-teal-500/5",
      buttonText: "Explore Dental Campaigns",
      isLive: true
    },
    {
      id: "saas-apps",
      title: "SaaS & Mobile Apps",
      description: "First-party Conversion API (CAPI) syncs, custom onboarding optimizations in React, Amplitude cohort analysis, and highly targeted PPC search/programmatic ad funnels to scale MRR.",
      icon: <Laptop className="h-6 w-6 text-indigo-400" />,
      tagline: "MRR Scaling / Amplitude Sync / PLG Flow",
      colorClass: "hover:border-indigo-500/40 hover:bg-indigo-500/[0.02]",
      badgeText: "SaaS PLG Growth",
      badgeColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
      buttonText: "Explore SaaS & App Strategy",
      isLive: true
    },
    {
      id: "legal",
      title: "Legal Practices",
      description: "High-intent client search frameworks, medical injury, family, or business defense ad management. Engineered with direct negative-phrase layers to eliminate low-value consult waste.",
      icon: <Scale className="h-6 w-6 text-blue-400" />,
      tagline: "Injury Law / Case Lead Intake",
      colorClass: "hover:border-blue-500/40 hover:bg-blue-500/[0.02]",
      badgeText: "PPC Negative-Match Layers",
      badgeColor: "text-blue-400 border-blue-500/20 bg-blue-500/5",
      buttonText: "Schedule Case Intake Consultation",
      isLive: false
    },
    {
      id: "ecommerce",
      title: "E-commerce Brands",
      description: "Direct server-side conversions API (CAPI) syncing, custom Shopify storefront speed optimizations, cart flow speed improvements, and hyper-retargeting Meta and TikTok funnels.",
      icon: <ShoppingBag className="h-6 w-6 text-purple-400" />,
      tagline: "Shopify / Meta CAPI / Roas Scaling",
      colorClass: "hover:border-purple-500/40 hover:bg-purple-500/[0.02]",
      badgeText: "Conversion API Syncing",
      badgeColor: "text-purple-400 border-purple-500/20 bg-purple-500/5",
      buttonText: "Explore E-commerce Strategy",
      isLive: true
    },
    {
      id: "real-estate",
      title: "Real Estate & Development",
      description: "MLS & IDX active search databases directly wired to high-speed custom React storefronts, valuation capture pages, dynamic catalog ads, and rapid automated text triggers.",
      icon: <Home className="h-6 w-6 text-amber-400" />,
      tagline: "MLS & IDX Feed / WhatsApp / SAC Ads",
      colorClass: "hover:border-amber-500/40 hover:bg-amber-500/[0.02]",
      badgeText: "Luxury Listing Lead Gen",
      badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/5",
      buttonText: "Explore Real Estate Campaigns",
      isLive: true
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
              <span>Tailored Business Systems</span>
            </div>
            <h1 className="font-outfit text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.05]">
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Acquisition Blueprints
              </span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
              Generic templates fail when clinical accuracy or legal compliance is on the line. We build bespoke custom-coded React assets, coordinate native third-party scheduling APIs, and construct robust search funnels tailored to your target industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-10 max-w-2xl">
            <h2 className="font-outfit text-2xl sm:text-3xl font-black text-white tracking-tight">
              Bespoke Vertical Systems & Case Studies
            </h2>
            <p className="text-xs text-zinc-400 mt-1">Explore our highly targeted digital architectures and customized organic funnel structures built for specific markets.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((ind, index) => (
              <div 
                key={ind.id}
                className={`group relative rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${ind.colorClass} ${ind.id === 'dental' ? 'border-teal-500/20 shadow-lg shadow-teal-500/[0.02]' : ''}`}
              >
                <div className="space-y-6">
                  {/* Top line with Icon and Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200">
                      {ind.icon}
                    </div>
                    <div className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider ${ind.badgeColor}`}>
                      {ind.badgeText}
                    </div>
                  </div>

                  {/* Header & Tagline */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-outfit text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                        {ind.title}
                      </h3>
                      {ind.isLive && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
                      {ind.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-semibold">
                    {ind.description}
                  </p>
                </div>

                {/* Bottom Button Action */}
                <div className="pt-8">
                  <button
                    onClick={() => {
                      if (ind.isLive) {
                        setActiveTab(ind.id);
                      } else {
                        onContactClick();
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center space-x-2 text-xs font-black uppercase tracking-wider animate-none cursor-pointer group/btn ${
                      ind.isLive 
                        ? 'text-teal-400 hover:text-teal-300' 
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{ind.buttonText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}

            {/* General Industry Audit Bento Card */}
            <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900/60 border border-zinc-800 text-emerald-400">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-outfit text-lg font-bold text-white">Custom Niche Blueprint</h3>
                  <p className="text-zinc-500 text-xs">Don't see your specific industry niche here?</p>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-semibold">
                  We engineer high-performance customer conversion and brand engines for medical, high-end construction, luxury real estate, financial service advisors, and specialty manufacturers. Tell us your customer profiling goals and we will construct a bespoke acquisition pipeline.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-emerald-400 hover:text-emerald-300 animate-none cursor-pointer"
                >
                  <span>Build A Custom Niche Strategy</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Trust validation checklist banner */}
      <section className="py-8 bg-zinc-900/20 border-y border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400 text-xs font-mono font-semibold">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Strict HIPAA & Privacy Compliances</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Direct Scheduler Database (API) Syncs</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Full Digital Deliverables Asset Ownership</span>
          </div>
        </div>
      </section>

    </div>
  );
}
