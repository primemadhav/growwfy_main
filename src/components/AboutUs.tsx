/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Workflow, 
  CheckCircle, 
  ShieldAlert, 
  FileText, 
  Zap, 
  Briefcase, 
  Award,
  Building 
} from 'lucide-react';

interface AboutUsProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export default function AboutUs({ onExploreServices, onContactClick }: AboutUsProps) {
  const values = [
    {
      icon: Target,
      title: 'Obsessed with Client ROI',
      description: 'We do not build software to simply look pretty. Every dynamic routing loop, semantic header, and pixel event trigger is explicitly designed to increase your click-throughs, reduce bounce rates, and boost conversions.'
    },
    {
      icon: Workflow,
      title: 'Architectural Transparency',
      description: 'Like Brand24, we believe that transparency builds lifelong trust. You get full access to the live progress pipeline, structured weekly reports, clean code repositories, and self-service account options.'
    },
    {
      icon: Zap,
      title: 'Pure Mechanical Code',
      description: 'No bloated page builders that weight down mobile load times. If we use WordPress, we build custom PHP templates; if we code custom apps, we build responsive React/Next components with minimal, static dependencies.'
    }
  ];

  const milestones = [
    { year: '2022', title: 'Agency Foundation', desc: 'Started with 3 full-stack React developers focused on stripping out slow client sites and rewriting them from scratch.' },
    { year: '2023', title: 'Shopify Core Launch', desc: 'Introduced high-converting bespoke Liquid theme developments and server-side tracking integrations.' },
    { year: '2024', title: 'Integrated Ads Portal', desc: 'Expanded into paid acquisition, coupling custom high-performance landing pages directly with server-side API setups (CAPI) for Meta and Google.' },
    { year: '2026', title: 'Real-time Client Dashboard', desc: 'Launched our proprietary billing & progress dashboard, allowing clients 100% control over their account data and milestones.' }
  ];

  return (
    <section className="relative py-20 bg-zinc-950 text-zinc-100 overflow-hidden stitch-dots-bg" id="about-us-section">
      
      {/* Visual background grids with Stitch animations */}
      <div className="absolute top-1/3 right-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[150px] pointer-events-none animate-stitch-blob-1" />
      <div className="absolute bottom-1/3 left-0 h-[450px] w-[450px] rounded-full bg-brand-secondary/10 dark:bg-brand-secondary/5 blur-[150px] pointer-events-none animate-stitch-blob-2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 px-3.5 py-1 font-mono text-[11px] text-brand-primary uppercase tracking-widest">
            <Users className="h-3 w-3" />
            <span>Growwfy Solutions &mdash; Behind the Code & Strategy</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Who We Are, What We Value, <br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              And How We Deliver Success
            </span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
            We are <strong>Growwfy Digital Marketing</strong>, a tight-knit collective of veteran developers, conversion architects, and technical SEO specialists. We believe that high-quality web platforms are the single most valuable asset a modern business can own.
          </p>
        </div>

        {/* Narrative columns - Brand24 style details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              We replace guesswork with highly optimized, modern code.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Most digital agencies follow the same repetitive script: they purchase a generic template, install dozens of bloated plugins, write a few meta-description keywords, and call it a day. The site loads slowly, has zero canonical safety, and conversions fall off a cliff.
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              At <strong>Growwfy Digital</strong>, we reject standard workflows. We approach every business with a clean slate. When our engineers at <strong>Growwfy Technologies</strong> build custom sites, we write hand-crafted React and Tailwind code. When we develop on CMS layers like WordPress or Shopify, we optimize database queries, minimize external scripts, and code features natively to maintain ultra-fast page delivery.
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              We extend this technical precision to our marketing strategy. Our Google and Meta campaigns managed by <strong>Growwfy Marketing</strong> do not rely on standard algorithms alone. We engineer custom server-side Conversions API channels so your conversion metrics remain perfectly synced, bypassing third-party cookie filters entirely.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onExploreServices}
                className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-3 text-xs font-semibold transition-colors"
              >
                Explore Full Tech Offerings
              </button>
              <button 
                onClick={onContactClick}
                className="rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-5 py-3 text-xs font-semibold transition-colors"
              >
                Schedule Team Meeting
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-zinc-900/30 border border-zinc-850 rounded-2xl p-6 sm:p-8 space-y-6 relative">
            <div className="absolute top-0 right-0 p-2.5 bg-brand-primary/10 text-brand-primary rounded-bl-xl border-l border-b border-brand-primary/20 font-mono text-[9px] uppercase tracking-wider">
              By the Numbers
            </div>
            <h3 className="font-display font-bold text-white text-base">Key Technical Accomplishments</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-3xl font-extrabold text-brand-primary font-mono">100%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Lighthouse Speed Target</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">&lt; 1.0s</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Avg Global Load Time</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-3xl font-extrabold text-purple-400 font-mono">+35%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Client Conversion Increase</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-3xl font-extrabold text-yellow-400 font-mono">24/7</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Client Portal Access</div>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-900/80 p-4 border border-zinc-800/80 flex items-start space-x-3">
              <Award className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-white">Full Stack Professional Guarantee</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                  Every subscriber is backed by our direct performance guarantee. If we build your digital store or rewrite your code, we commit to concrete speed metrics and responsive layouts or we work until we hit them.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Our Three Core Values */}
        <div className="space-y-6 mb-24">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Our Operational Philosophy</h2>
            <p className="text-xs text-zinc-500 mt-1">The fundamental values that define our everyday decisions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-xl border border-zinc-850 bg-zinc-900/20 hover:border-zinc-800 hover:bg-zinc-900/40 transition-all">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Our Journey In Milestones</h2>
            <p className="text-xs text-zinc-500 mt-1">A timeline of organic growth and technology expansions.</p>
          </div>
          
          <div className="relative border-l border-zinc-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                {/* Year dot indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-brand-primary">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded">{m.year}</span>
                    <h3 className="text-sm font-bold text-white">{m.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
