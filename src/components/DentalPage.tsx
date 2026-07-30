/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  Search, 
  TrendingUp, 
  Megaphone, 
  Sparkles, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Activity, 
  Plus, 
  Minus, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  Users, 
  FileCheck,
  ChevronDown,
  Info,
  Mail
} from 'lucide-react';

interface DentalPageProps {
  onContactClick: () => void;
}

export default function DentalPage({ onContactClick }: DentalPageProps) {
  // Calculator state variables
  const [patientsWanted, setPatientsWanted] = useState<number>(25);
  const [patientValue, setPatientValue] = useState<number>(350000); // Average implants / cosmetic cases lifetime value in Rupees (₹3.5 Lakh)
  const [conversionRate, setConversionRate] = useState<number>(60); // Percentage of bookings that convert to treatments

  // Computed variables for ROI Calculator
  const estimatedLeadsNeeded = Math.round(patientsWanted / (conversionRate / 100));
  const potentialMonthlyGrowth = patientsWanted * patientValue;
  const potentialAnnualGrowth = potentialMonthlyGrowth * 12;

  const acquisitionPillars = [
    {
      icon: <Layers className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
      title: "Custom High-End Dental Brand Styling",
      description: "We completely banish cheap dental templates and static generic stock graphics. We engineer luxury, high-conversion medical websites with custom patient pathways that convey clinical authority, clean sanitation, and beautiful, high-quality aesthetic outcomes."
    },
    {
      icon: <Search className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      title: "Local Map & Dental SEO Dominance",
      description: "When prospective patients search for 'Dental Implants near me' or 'Top-Rated Cosmetic Dentist [City]', we position your practice at the absolute top of organic maps and localized search results with rigorous medical-grade schema markups."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      title: "Elective Case Search Advertising (PPC)",
      description: "We deploy hyper-targeted Google & Meta Search funnels tailored specifically to patients looking for All-on-4 implants, full-mouth reconstructions, clear aligners, and dental veneers, completely filtering out low-margin insurance-only queries."
    },
    {
      icon: <Calendar className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
      title: "NexHealth & Scheduling Integrations",
      description: "We integrate directly with your practice scheduling databases, converting incoming ad clicks into actual confirmed calendar bookings. Minimize front-desk overhead by letting high-intent implant cases self-book their diagnostic consultations."
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 bg-zinc-950 text-white border-b border-zinc-900 stitch-dots-bg">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Elite Badge */}
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-emerald-400" />
            <span>Premium Dental Practice Acquisition</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-outfit text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1] md:leading-[1.05]">
              Dental Marketing That Fills Your Chairs With{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                High-Value Patients
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
              We design medical-grade React storefronts, dominate local map rankings, and deploy laser-targeted search ad campaigns engineered specifically to secure All-on-4 implants, veneers, and full-mouth cosmetic makeovers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xl mx-auto pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 p-[1.5px] shadow-lg shadow-purple-500/15 group active:scale-[0.98] transition-transform duration-100 cursor-pointer animate-none"
              id="cta-dental-audit"
            >
              <div className="rounded-[11px] bg-zinc-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:bg-transparent group-hover:text-zinc-950 flex items-center justify-center space-x-2">
                <span>Schedule Practice Growth Audit</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('dental-roi-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Calculate Practice ROI</span>
              <Sliders className="h-4 w-4 text-emerald-400" />
            </button>
          </div>

          {/* Core Trust Statistics Banner */}
          <div className="pt-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm text-center">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">12.4x</div>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Average Paid Ad ROI</p>
              </div>
              <div className="space-y-1 border-l border-zinc-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">450+</div>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Monthly Confirmed Bookings</p>
              </div>
              <div className="space-y-1 border-l border-zinc-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">₹15 Cr</div>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider font-semibold">Avg Annual Practice Scale</p>
              </div>
              <div className="space-y-1 border-l border-zinc-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">0.3s</div>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Booking Webpage LCP Speed</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Lifetime Patient Value ROI Calculator */}
      <section id="dental-roi-calculator" className="py-20 bg-zinc-50 dark:bg-zinc-950/40 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
              <Activity className="h-4 w-4" />
              <span>Real-Time Business Intelligence</span>
            </div>
            <h2 className="text-3xl font-black font-outfit text-slate-900 dark:text-white tracking-tight sm:text-4xl">
              Calculate Your Custom Practice Revenue Potential
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              See the exact revenue left on the table. Adjust the parameters to find out how scaling elective case patient acquisition directly influences your clinical margins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">Practice Variables</h3>
                <p className="text-xs text-zinc-500">Fine-tune the sliders to match your current clinic performance and high-value treatment goals.</p>
              </div>

              <div className="space-y-6 pt-4">
                {/* Parameter 1: New Patients Wanted */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">New High-Value Patients Wanted / Mo</span>
                    <span className="font-mono font-bold text-emerald-500 dark:text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/10">
                      {patientsWanted} Patients
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setPatientsWanted(prev => Math.max(5, prev - 5))}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors animate-none"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input 
                      type="range" 
                      min="5" 
                      max="100" 
                      step="5"
                      value={patientsWanted} 
                      onChange={(e) => setPatientsWanted(Number(e.target.value))}
                      className="flex-grow accent-emerald-500 h-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 appearance-none cursor-pointer"
                    />
                    <button 
                      onClick={() => setPatientsWanted(prev => Math.min(100, prev + 5))}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors animate-none"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Parameter 2: Case Lifetime Value */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Average Case Value (Implants, Veneers, Ortho)</span>
                    <span className="font-mono font-bold text-blue-500 dark:text-blue-400 bg-blue-500/5 px-2.5 py-1 rounded-md border border-blue-500/10">
                      ₹{patientValue.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setPatientValue(prev => Math.max(50000, prev - 25000))}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors animate-none"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input 
                      type="range" 
                      min="50000" 
                      max="1000000" 
                      step="25000"
                      value={patientValue} 
                      onChange={(e) => setPatientValue(Number(e.target.value))}
                      className="flex-grow accent-blue-500 h-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 appearance-none cursor-pointer"
                    />
                    <button 
                      onClick={() => setPatientValue(prev => Math.min(1000000, prev + 25000))}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors animate-none"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-zinc-500 italic">Industry Note: Single dental implants average ₹2.5 Lakh - ₹4 Lakh; full-arch reconstructive restorations span ₹12 Lakh - ₹20 Lakh.</p>
                </div>

                {/* Parameter 3: Conversion Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Consultation-to-Treatment Conversion Rate</span>
                    <span className="font-mono font-bold text-amber-500 dark:text-amber-400 bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                      {conversionRate}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setConversionRate(prev => Math.max(20, prev - 5))}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors animate-none"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input 
                      type="range" 
                      min="20" 
                      max="100" 
                      step="5"
                      value={conversionRate} 
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="flex-grow accent-amber-500 h-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 appearance-none cursor-pointer"
                    />
                    <button 
                      onClick={() => setConversionRate(prev => Math.min(100, prev + 5))}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors animate-none"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Conversion note */}
              <div className="mt-6 flex items-start space-x-3 p-3 rounded-xl bg-zinc-55 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850">
                <Info className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  To secure <span className="font-bold text-zinc-700 dark:text-zinc-300">{patientsWanted} new treatments</span> per month at a <span className="font-bold text-zinc-700 dark:text-zinc-300">{conversionRate}% conversion speed</span>, your local practice campaigns must generate approximately <span className="text-emerald-500 font-extrabold">{estimatedLeadsNeeded} pre-qualified medical consultations</span>.
                </p>
              </div>

            </div>

            {/* Computed Output Box */}
            <div className="lg:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-emerald-400">FINANCIAL PROJECTION</span>
                  <h3 className="text-xl font-bold font-outfit text-white">Estimated Clinical Scale</h3>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="space-y-1">
                    <span className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Potential Monthly Growth</span>
                    <div className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-emerald-400 font-mono">
                      ₹{potentialMonthlyGrowth.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="h-px bg-zinc-800" />

                  <div className="space-y-1">
                    <span className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Potential Annual Practice Expansion</span>
                    <div className="text-2xl sm:text-3xl font-extrabold font-outfit tracking-tight text-white font-mono">
                      ₹{potentialAnnualGrowth.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  These metrics reflect pure local market demand. We configure direct API funnels, maps position caching, and negative search keyword exclusions to ensure you capture high-margin private patients.
                </p>
                <button 
                  onClick={onContactClick}
                  className="w-full py-4 rounded-xl text-xs font-black tracking-wider uppercase bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 hover:opacity-95 transition-opacity cursor-pointer animate-none"
                >
                  Unlock This Revenue Growth
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. The Acquisition Blueprint / Pillars */}
      <section className="py-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-purple-600 dark:text-purple-400">
              ACQUISITION STRATEGY
            </span>
            <h2 className="text-3xl font-black font-outfit tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              The Dental Patient Growth Blueprint
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              We engineer dedicated systems for dental clinics that treat clinical marketing as a rigorous mathematical science, from original brand layouts to booking checkouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {acquisitionPillars.map((pillar, i) => (
              <div 
                key={i}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 shadow-sm hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
              >
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 shrink-0 border border-zinc-100 dark:border-zinc-800/80">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Comparison Section: High-Value vs Routine Dentistry */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950/40 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              AUDIT COMPARISON
            </span>
            <h2 className="text-3xl font-black font-outfit tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              High-Value Clinical Cases vs. Routine Bloat
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              Why generic medical marketing agencies burn your ad budget on unprofitable keywords. We structure negative keyword exclusion layers to focus exclusively on your highest-margin treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* High-Value Card */}
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-md relative">
              <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">
                GROWWFY TARGET
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span>High-Value Elective Cases</span>
                </h3>
                <p className="text-xs text-zinc-500">Premium treatments with massive clinical margins that expand practice valuations.</p>
              </div>

              <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

              <ul className="space-y-3">
                {[
                  { title: "Single & Multi-Tooth Implants", desc: "Private-pay implant surgeries with ₹3 Lakh+ averages." },
                  { title: "All-on-4 Full-Arch Restorations", desc: "Major restorative cosmetic reconstructive clinical works." },
                  { title: "Premium Porcelain Veneers", desc: "Multi-tooth cosmetic smile makeovers costing up to ₹15 Lakh+." },
                  { title: "Orthodontics & Invisalign Campaigns", desc: "High-value aligner treatments with recurring clinical margins." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">{item.title}</span>
                      <span className="text-zinc-500 text-[11px] font-medium leading-relaxed block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Low-Margin Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-zinc-100/50 dark:bg-zinc-900/40 p-6 sm:p-8 space-y-6 text-zinc-500 relative">
              
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold font-outfit text-zinc-700 dark:text-zinc-400 flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-zinc-400 shrink-0" />
                  <span>Typical Agency Bloat</span>
                </h3>
                <p className="text-xs text-zinc-500">High-churn, low-value keywords that consume budget and exhaust clinical front desks.</p>
              </div>

              <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

              <ul className="space-y-3 opacity-75">
                {[
                  { title: "Routine Teeth Cleanings", desc: "Very thin margins, high customer churn, and low referral values." },
                  { title: "₹3,999 Loss-Leader Exams", desc: "Attracts bargain seekers who refuse customized care plans." },
                  { title: "Emergency Cavity Extractions", desc: "Sluggish conversions, heavily dependent on insurance copay speeds." },
                  { title: "General 'Dentist near me' keywords", desc: "Extremely broad queries that bleed budgets with zero qualification." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2.5 text-xs sm:text-sm font-medium">
                    <div className="h-4 w-4 border border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-mono text-zinc-400">✕</div>
                    <div>
                      <span className="font-bold text-zinc-600 dark:text-zinc-400 block">{item.title}</span>
                      <span className="text-[11px] leading-relaxed block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Medical Case Studies / Before & After Showcases */}
      <section className="py-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400">
              PROOF OF CLINICAL RESULTS
            </span>
            <h2 className="text-3xl font-black font-outfit tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Proven Revenue Scaling for Elite Practices
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              Explore actual high-converting blueprints and case analytics from real medical-grade dental campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Case Study 1 */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-6 sm:p-8 space-y-6 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">COSMETIC & IMPLANT CLINIC</span>
                  <span className="font-mono text-[10px] font-bold text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">90 DAYS</span>
                </div>
                
                <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">
                  Elite Cosmetic Dentistry (Mumbai, MH)
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                  This practice was spending ₹5,00,000/month on broad marketing search campaigns with zero conversion records or scheduling integrations. We completely rebuilt their frontend to load under 0.3s, deployed HIPAA-compliant form proxies, and targeted high-value porcelain veneers.
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-black text-emerald-500">+180%</div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Elective Leads</div>
                  </div>
                  <div className="text-center border-l border-zinc-100 dark:border-zinc-900">
                    <div className="text-lg sm:text-xl font-black text-emerald-500">₹1.2 Cr</div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">New Revenue</div>
                  </div>
                  <div className="text-center border-l border-zinc-100 dark:border-zinc-900">
                    <div className="text-lg sm:text-xl font-black text-emerald-500">4.1x</div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Ad ROI Ratio</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center space-x-3 text-xs text-zinc-400 font-mono italic">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Validated by Call-Tracking audits</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 p-6 sm:p-8 space-y-6 hover:border-zinc-200 dark:hover:border-zinc-800 transition-all flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">MULTI-CHAIR ORTHODONTIST</span>
                  <span className="font-mono text-[10px] font-bold text-blue-500 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10 uppercase">6 MONTHS</span>
                </div>
                
                <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">
                  Westside Family Orthodontics (Denver, CO)
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                  A multi-location practice looking to dominate the highly lucrative local clear-aligner market. We structured dynamic local map rank profiles, consolidated search citations, and linked a localized booking dashboard that syncs open chairs instantly.
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-black text-blue-500">4.8x</div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold font-semibold">Map Visibility</div>
                  </div>
                  <div className="text-center border-l border-zinc-100 dark:border-zinc-900">
                    <div className="text-lg sm:text-xl font-black text-blue-500">+85</div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold font-semibold">Aligner Sales</div>
                  </div>
                  <div className="text-center border-l border-zinc-100 dark:border-zinc-900">
                    <div className="text-lg sm:text-xl font-black text-blue-500">-45%</div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold font-semibold">Booking Cost</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center space-x-3 text-xs text-zinc-400 font-mono italic">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>Validated via NexHealth scheduler syncs</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Bottom CTA block */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white relative overflow-hidden text-center bypass-contrast">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-500/5 px-3.5 py-1 rounded-full border border-emerald-500/15 inline-block">
              GET ACTIVE LEADS IN YOUR ZIP CODE
            </span>
            <h2 className="text-3xl font-black font-outfit tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Claim Your Local Chair Revenue?
            </h2>
            <p className="mx-auto max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed font-semibold">
              Get an exclusive competitor analysis and medical ad volume audit. We will reveal exactly how many patients in your city are actively searching for high-value treatments right now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer animate-none"
            >
              Request Free Practice Audit
            </button>
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-zinc-700 hover:bg-zinc-800/40 text-white transition-colors cursor-pointer animate-none"
            >
              Contact Dental Growth Partner
            </button>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
            <div className="flex items-center space-x-1.5">
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>Direct Email: growwfy@gmail.com</span>
            </div>
            <div className="hidden sm:block">&bull;</div>
            <div className="flex items-center space-x-1.5">
              <Users className="h-4 w-4 text-emerald-400" />
              <span>No-Obligation Competitor Zip Code Analysis</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
