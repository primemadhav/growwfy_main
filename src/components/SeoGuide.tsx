/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Sliders, 
  Zap, 
  Activity, 
  ArrowRight, 
  TrendingUp, 
  Check, 
  MousePointerClick, 
  Eye,
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';

// Multicolored Google logo icon
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function SeoGuide({ onContactClick }: { onContactClick?: () => void }) {
  const [hoveredDay, setHoveredDay] = useState<number | null>(6); // Default highlight Sunday
  const [showModal, setShowModal] = useState(false);
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState<number | null>(null);

  const chartData = [
    { day: 'Mon', clicks: 2500, impressions: 3800 },
    { day: 'Tue', clicks: 3400, impressions: 4900 },
    { day: 'Wed', clicks: 5200, impressions: 6800 },
    { day: 'Thu', clicks: 4300, impressions: 5900 },
    { day: 'Fri', clicks: 6100, impressions: 7200 },
    { day: 'Sat', clicks: 8100, impressions: 8900 },
    { day: 'Sun', clicks: 8900, impressions: 9600 },
  ];

  const benefits = [
    {
      id: 'benefit-1',
      title: 'Rank for Searches That Matter',
      icon: <Target className="h-5 w-5 text-blue-500" />,
      description: 'Not every keyword is worth targeting. We identify the searches most closely connected to your services, customer needs, locations, and business goals, then build pages and content around that demand.'
    },
    {
      id: 'benefit-2',
      title: 'Fix Problems Holding Your Site Back',
      icon: <Sliders className="h-5 w-5 text-blue-500" />,
      description: 'Technical issues, unclear page structure, weak internal links, thin content, and indexing problems can prevent strong pages from ranking. We identify and correct the issues that make it harder for search engines and users to understand your website.'
    },
    {
      id: 'benefit-3',
      title: 'Build Long-Term Search Visibility',
      icon: <Zap className="h-5 w-5 text-blue-500" />,
      description: 'SEO takes time, but the value can continue to grow as your website gains stronger pages, better relevance, and more authority. The work is designed to create a lasting source of qualified organic traffic rather than a temporary spike.'
    },
    {
      id: 'benefit-4',
      title: 'Turn Organic Traffic Into Leads',
      icon: <Activity className="h-5 w-5 text-blue-500" />,
      description: 'Rankings alone do not grow a business. Your pages also need clear messaging, useful information, trust signals, and conversion paths that encourage visitors to contact you.'
    }
  ];

  const services = [
    {
      num: '01',
      title: 'Technical SEO',
      tagline: 'Optimize for a Strong Foundation',
      description: "Identify and resolve technical issues that may hinder your site's performance. Our in-depth technical audits ensure search engines can effectively crawl, index, and rank your content."
    },
    {
      num: '02',
      title: 'On-Page SEO',
      tagline: 'Enhance Your Visibility',
      description: "Optimize on-page elements like internal links, title tags, and meta descriptions to improve your site's visibility. We align each page's structure, metadata, internal links, content, and search intent to improve its relevance and organic-search potential."
    },
    {
      num: '03',
      title: 'Keyword Optimization',
      tagline: 'Target the Right Audience',
      description: "With thorough keyword research, we strategically optimize your content, helping you capture relevant traffic and rank for the terms that matter most to your business."
    },
    {
      num: '04',
      title: 'Content Strategy',
      tagline: 'Optimization & Creation',
      description: "Develop a content strategy that aligns with SEO goals. We optimize and create content that resonates with your audience, supports keyword rankings, and improves organic reach."
    },
    {
      num: '05',
      title: 'Local SEO',
      tagline: 'Strengthen Your Local Search Visibility',
      description: "Improve your visibility across local organic results and Google Maps through location targeting, page optimization, business-profile improvements, citations, and stronger local relevance."
    },
    {
      num: '06',
      title: 'Backlink Building',
      tagline: 'Improve Trustworthiness',
      description: "Elevate your rankings with a robust backlink strategy. We connect with reputable sites to build high-quality links that enhance your site's credibility and authority."
    }
  ];

  const activeDataPoint = hoveredDay !== null ? chartData[hoveredDay] : chartData[6];

  return (
    <div className="bg-[#fcfdfd] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen font-sans transition-colors duration-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 stitch-dots-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Breadcrumb navigation */}
              <div className="flex items-center space-x-1.5 text-[11px] font-mono tracking-widest text-[#2563eb] uppercase font-bold">
                <span>Home</span>
                <span className="text-zinc-300 dark:text-zinc-700">//</span>
                <span>Services</span>
                <span className="text-zinc-300 dark:text-zinc-700">//</span>
                <span className="text-zinc-500 dark:text-zinc-400">SEO Services</span>
              </div>

              {/* Big Display Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-none">
                SEO Services & <br />
                <span className="text-[#2563eb] bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Online Visibility</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-350 font-medium leading-relaxed max-w-2xl">
                Improve your visibility for the searches most relevant to your services, customers, and locations. Our SEO strategies strengthen your technical foundation, content, and organic presence to support long-term traffic and qualified leads.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button 
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center space-x-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 text-[11px] font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-150 group cursor-pointer"
                >
                  <span>FREE STRATEGY CALL</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Right Card (Interactive Organic Search Traffic Chart) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              
              <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] text-zinc-900 dark:text-zinc-100">
                
                {/* Header inside the card */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                      PERFORMANCE GROWTH
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      Organic Search Traffic
                    </h3>
                  </div>
                  <div className="p-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-full">
                    <GoogleIcon />
                  </div>
                </div>

                {/* Simulated Interactive SVG Chart */}
                <div className="relative h-44 w-full select-none">
                  
                  {/* Legend overlay */}
                  <div className="absolute top-0 right-0 flex items-center space-x-3 text-[10px] font-mono font-bold text-zinc-400">
                    <span className="flex items-center space-x-1">
                      <span className="h-1.5 w-3 bg-[#2563eb] rounded-full inline-block" />
                      <span>-- Clicks</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="h-0.5 w-3 border-t border-dashed border-zinc-400 inline-block" />
                      <span>-- Impressions</span>
                    </span>
                  </div>

                  {/* SVG drawing lines */}
                  <svg className="w-full h-full pt-6 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    
                    {/* Horizontal Guideline rows */}
                    <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/60" strokeWidth="0.5" />
                    <line x1="0" y1="35" x2="100" y2="35" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/60" strokeWidth="0.5" />
                    <line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/60" strokeWidth="0.5" />
                    <line x1="0" y1="85" x2="100" y2="85" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/60" strokeWidth="0.5" />

                    {/* Impressions Dashed Line (Background) */}
                    <path
                      d="M 5 80 L 20 68 L 35 52 L 50 61 L 65 50 L 80 34 L 95 28"
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                      className="opacity-70"
                    />

                    {/* Clicks Blue Solid Line */}
                    <path
                      d="M 5 85 L 20 74 L 35 58 L 50 67 L 65 53 L 80 37 L 95 30"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />

                    {/* Gradient fill under Clicks */}
                    <path
                      d="M 5 85 L 20 74 L 35 58 L 50 67 L 65 53 L 80 37 L 95 30 L 95 95 L 5 95 Z"
                      fill="url(#clicksGradient)"
                      className="opacity-[0.08]"
                    />

                    <defs>
                      <linearGradient id="clicksGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Active interactive point indicators */}
                    {chartData.map((d, index) => {
                      const posX = 5 + (index * 15);
                      // Custom Y coords mapped for aesthetic representation
                      const clickY = [85, 74, 58, 67, 53, 37, 30][index];
                      const isHovered = hoveredDay === index;

                      return (
                        <g key={index} className="cursor-pointer">
                          {/* Invis broad target to make hovering easy */}
                          <rect 
                            x={posX - 7} 
                            y="0" 
                            width="14" 
                            height="100" 
                            fill="transparent" 
                            onMouseEnter={() => setHoveredDay(index)}
                          />

                          {/* Hover vertical line rule */}
                          {isHovered && (
                            <line 
                              x1={posX} 
                              y1="5" 
                              x2={posX} 
                              y2="95" 
                              stroke="#2563eb" 
                              strokeWidth="0.8" 
                              strokeDasharray="2,2" 
                            />
                          )}

                          {/* Dot on click line */}
                          <circle
                            cx={posX}
                            cy={clickY}
                            r={isHovered ? 3.5 : 1.8}
                            className={`transition-all duration-150 ${
                              isHovered ? 'fill-white stroke-[#2563eb] stroke-2' : 'fill-[#2563eb]'
                            }`}
                          />
                        </g>
                      );
                    })}

                  </svg>

                  {/* Day labels along X axis */}
                  <div className="flex justify-between px-1 text-[9px] font-bold font-mono text-zinc-400 dark:text-zinc-500 mt-2">
                    {chartData.map((d, idx) => (
                      <span 
                        key={idx} 
                        className={`w-8 text-center transition-colors ${
                          hoveredDay === idx ? 'text-[#2563eb] font-extrabold' : ''
                        }`}
                      >
                        {d.day}
                      </span>
                    ))}
                  </div>

                  {/* Y Axis mock numbers */}
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[8px] font-bold font-mono text-zinc-300 dark:text-zinc-600 pointer-events-none pr-1">
                    <span>10k</span>
                    <span>7.5k</span>
                    <span>5k</span>
                    <span>2.5k</span>
                    <span>0</span>
                  </div>

                </div>

                {/* Bottom highlighted stat row */}
                <div className="mt-6 flex items-center justify-between p-3.5 bg-blue-50/70 dark:bg-zinc-800/50 rounded-xl border border-blue-100/50 dark:border-zinc-750 text-left">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase block font-bold">
                      {activeDataPoint.day}'s Metrics
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center text-xs font-bold text-zinc-700 dark:text-zinc-250">
                        <MousePointerClick className="h-3 w-3 text-[#2563eb] mr-1" />
                        <span>{activeDataPoint.clicks.toLocaleString()} Clicks</span>
                      </span>
                      <span className="flex items-center text-xs font-bold text-zinc-700 dark:text-zinc-250">
                        <Eye className="h-3 w-3 text-zinc-400 mr-1" />
                        <span>{activeDataPoint.impressions.toLocaleString()} Impr</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Total Performance Pill */}
                  <div className="flex items-center space-x-1.5 bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 font-display">
                    <TrendingUp className="h-3.5 w-3.5 stroke-[2.5]" />
                    <span className="text-xs font-black tracking-tight">+142%</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. SECTION: Help the Right Customers Find You in Search */}
      <section className="py-20 bg-[#f8fafc] dark:bg-zinc-900/40 border-b border-zinc-100 dark:border-zinc-900 text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Left Label */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono font-extrabold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                (01) Why SEO
              </span>
            </div>

            {/* Right Headings & Paragraph */}
            <div className="lg:col-span-9 space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight max-w-3xl">
                Help the Right Customers Find You in Search.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-semibold leading-relaxed max-w-4xl">
                Your potential customers are already using search engines to research services, compare providers, and decide who to contact. SEO improves your visibility for those searches by strengthening your website's technical foundation, page targeting, content, local relevance, and authority. The goal is not simply to increase traffic. It is to attract visitors who are more likely to become qualified leads and customers.
              </p>
            </div>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {benefits.map((b) => (
              <div 
                key={b.id}
                className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-200 text-left"
              >
                <div className="space-y-4">
                  {/* Icon badge */}
                  <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-zinc-800 flex items-center justify-center">
                    {b.icon}
                  </div>
                  
                  {/* Card Title */}
                  <h3 className="font-display text-base font-extrabold text-zinc-950 dark:text-white leading-snug">
                    {b.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SECTION: Boost Your Organic Search Visibility */}
      <section className="py-20 bg-white dark:bg-zinc-950 bg-[radial-gradient(#80808008_1px,transparent_1px)] [background-size:16px_16px] text-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Left Label */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono font-extrabold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                (02) Services
              </span>
            </div>

            {/* Right Headings & Paragraph */}
            <div className="lg:col-span-9 space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight leading-none max-w-3xl">
                Boost Your Organic Search Visibility.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-350 font-semibold leading-relaxed max-w-4xl">
                Our SEO services are designed to drive organic growth through comprehensive and tailored optimization strategies.
              </p>
            </div>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {services.map((s, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl border bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 text-left ${
                  hoveredServiceIdx === idx 
                    ? 'border-blue-500 dark:border-blue-500/80 ring-1 ring-blue-500/30' 
                    : 'border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
                onMouseEnter={() => setHoveredServiceIdx(idx)}
                onMouseLeave={() => setHoveredServiceIdx(null)}
              >
                <div className="space-y-4">
                  {/* Number */}
                  <div className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500">
                    {s.num}
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[11px] font-mono font-bold text-[#2563eb] tracking-wide uppercase">
                      {s.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Central bottom action button */}
          <div className="flex flex-col items-center justify-center pt-16 text-center space-y-4">
            <button 
              onClick={onContactClick}
              className="inline-flex items-center justify-center space-x-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 text-[11px] font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-150 group cursor-pointer"
            >
              <span>FREE STRATEGY CALL</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">
              Phone Call or WhatsApp Message
            </p>
          </div>

        </div>
      </section>

      {/* STRATEGY BOOKING MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-none">
          <div 
            className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 text-zinc-900 shadow-2xl relative"
            id="strategy-modal"
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 font-bold text-lg"
            >
              ✕
            </button>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Strategy consultation requested! We will call you within 24 hours.');
                setShowModal(false);
              }} 
              className="space-y-4 text-left"
            >
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#2563eb] uppercase">
                // START SECURING LEADS
              </div>

              <h3 className="font-display text-2xl font-black text-zinc-950 leading-none tracking-tight">
                Request Strategy Call
              </h3>

              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                Connect directly with our master strategists to craft a tailored growth map. No obligation.
              </p>

              <div className="space-y-3 pt-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg bg-zinc-50 border border-zinc-200 focus:border-[#2563eb] px-4 py-3 text-sm text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none transition-colors"
                />

                <input
                  type="email"
                  required
                  placeholder="Work Email"
                  className="w-full rounded-lg bg-zinc-50 border border-zinc-200 focus:border-[#2563eb] px-4 py-3 text-sm text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none transition-colors"
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-lg bg-zinc-50 border border-zinc-200 focus:border-[#2563eb] px-4 py-3 text-sm text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none transition-colors"
                />

                <input
                  type="url"
                  required
                  placeholder="Website URL"
                  className="w-full rounded-lg bg-zinc-50 border border-zinc-200 focus:border-[#2563eb] px-4 py-3 text-sm text-zinc-900 font-semibold placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3.5 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>BOOK MY CALL →</span>
              </button>

              <p className="text-[9px] text-zinc-400 text-center leading-normal font-medium max-w-xs mx-auto">
                By submitting this form, you agree to receive follow-up contact regarding your custom SEO and growth audit.
              </p>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
