/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Cpu, 
  Heart, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Zap, 
  Terminal,
  Code,
  LineChart,
  Megaphone,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

interface CareersPageProps {
  onContactClick: (prefilledSubject?: string) => void;
}

export default function CareersPage({ onContactClick }: CareersPageProps) {
  const perks = [
    {
      icon: Cpu,
      title: "Performance Stack",
      description: "No bloated page builders. We code from scratch with React, Vite, Node, and Tailwind. Fast stack, clean codebase."
    },
    {
      icon: Heart,
      title: "High Ownership",
      description: "We hate micromanagement. You own your metrics, your code repositories, and your calendar. Results matter, not clocked hours."
    },
    {
      icon: Zap,
      title: "Bespoke & Clean",
      description: "Join a highly dedicated team of core developers and SEO experts. 100% remote with asynchronous workspace setup."
    }
  ];

  const jobs = [
    {
      id: "fs-eng",
      title: "Senior Full-Stack Architect (React & Node)",
      type: "Full-Time",
      location: "100% Remote (Global)",
      department: "Engineering",
      salary: "₹18L - ₹24L + Equity",
      description: "Own the core client portals, server-side codebases, and performant custom front-ends. Keep site loads < 0.4 seconds.",
      requirements: [
        "4+ years with React, Tailwind CSS, TypeScript, and Node.js",
        "Deep understanding of Vite, esbuild, and build optimization",
        "Experience setting up server-side Conversions API channels (Meta & Google)"
      ]
    },
    {
      id: "seo-spec",
      title: "SEO Meta Strategist & Copywriter",
      type: "Full-Time",
      location: "100% Remote (Global)",
      department: "SEO & Growth",
      salary: "₹12L - ₹18L + Performance Bonus",
      description: "Direct content architecture, semantic tags, core schemas, and write highly localized converting landing pages.",
      requirements: [
        "Proven track record boosting organic traffic (+300% Case Studies)",
        "Deep knowledge of search indexing schemas, Google Search Console, and PageSpeed insights",
        "B2B and B2C conversion-focused technical writing style"
      ]
    },
    {
      id: "perf-marketer",
      title: "Paid Acquisition Architect (Google/Meta Ads)",
      type: "Full-Time",
      location: "100% Remote (US/Europe Timezones)",
      department: "Growth",
      salary: "₹15L - ₹20L + Profit Share",
      description: "Architect multi-channel client funnels. Optimize Google Performance Max, Meta pixel event loops, and server-side conversion schemas.",
      requirements: [
        "Managed ₹40L+/mo ad spend with positive ROAS",
        "Strong understanding of server-side data analytics & cookieless conversion tracking",
        "Expertise drafting rapid copy variations & split-testing landing pages"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Brief Pitch",
      desc: "Apply via our secure contact form below. Skip the 10-page resume—send us your most polished live work or github repository link."
    },
    {
      step: "02",
      title: "Mechanical Code Sync",
      desc: "A 30-minute async code review or marketing run with a core lead. No whiteboard puzzles, just practical client cases."
    },
    {
      step: "03",
      title: "Team Alignment",
      desc: "Final discussion on culture, communication expectations, and onboarding milestones. Offer sent within 48 hours."
    }
  ];

  return (
    <section className="relative py-20 bg-zinc-950 text-zinc-100 overflow-hidden stitch-dots-bg" id="careers-page">
      {/* Dynamic Ambient Blur */}
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] pointer-events-none animate-stitch-blob-1" />
      <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[140px] pointer-events-none animate-stitch-blob-2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 shadow-md"
          >
            <Briefcase className="h-3.5 w-3.5 text-purple-400" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
              Growwfy Core Careers
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            We don't watch clocks. <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              We build speed-first brands.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Join a small, high-agency group of engineers and conversion specialists. We're on a mission to completely replace bloated templates with high-performance digital architectures.
          </motion.p>
        </div>

        {/* Why Growwfy Perks */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bespoke Work Benefits & Culture Pillars
            </h2>
            <p className="text-xs text-zinc-400 mt-1">What you can expect when joining our speed-first, high-agency squad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.3 }}
                  className="p-6 rounded-2xl border border-zinc-850 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-850 hover:bg-zinc-900/50 transition-all group"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 text-purple-400 group-hover:text-pink-400 transition-colors mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{perk.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="border border-zinc-800/80 bg-zinc-900/10 rounded-3xl p-8 sm:p-12 mb-24 relative">
          <div className="absolute top-0 right-10 p-2 border border-t-0 border-zinc-800 bg-zinc-950/90 text-zinc-400 text-[10px] font-mono tracking-widest uppercase rounded-b-xl">
            Asynchronous Culture
          </div>
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-2xl font-bold text-white tracking-tight mb-2">Our Straightforward Hiring Model</h2>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              We respect your time. Our selection process is fast, asynchronous, and focused on pure skill. We evaluate your actual portfolio and codebase over automated coding riddles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="font-mono text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{item.step}</div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Roles */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-6">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">Active Opportunities</h2>
              <p className="text-xs text-zinc-400 mt-1">Ready to create high-impact conversion loops? Apply below.</p>
            </div>
            <div className="inline-flex items-center space-x-1.5 text-xs text-zinc-500 font-mono uppercase tracking-widest bg-zinc-900/40 px-3 py-1 rounded-md border border-zinc-850">
              <Lock className="h-3 w-3 text-emerald-400" />
              <span>Full Remote Security Guarantee</span>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{job.department}</span>
                    <span className="font-mono text-[9px] font-bold text-zinc-400 bg-zinc-800/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{job.type}</span>
                    <span className="font-mono text-[9px] font-bold text-zinc-400 bg-zinc-800/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{job.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{job.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{job.description}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, ridx) => (
                        <li key={ridx} className="flex items-start text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5 mr-2" />
                          <span className="font-light">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-3 self-stretch lg:self-auto justify-between border-t border-zinc-900 lg:border-t-0 pt-4 lg:pt-0">
                  <div className="text-left lg:text-right">
                    <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Base Compensation</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">{job.salary}</div>
                  </div>
                  
                  <GradientButton
                    onClick={() => onContactClick(`Career Inquiry: ${job.title}`)}
                    className="flex items-center justify-center space-x-1 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer"
                  >
                    <span>Apply to Position</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
