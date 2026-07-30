import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  Phone, 
  MessageCircle,
  ShieldCheck,
  Target,
  Globe
} from 'lucide-react';
import { LandingPageData } from '../data/seoLandingPages';
import { GradientButton } from '@/components/ui/gradient-button';

interface SeoLandingPageProps {
  data: LandingPageData;
  onContactClick: () => void;
}

export default function SeoLandingPage({ data, onContactClick }: SeoLandingPageProps) {
  // Safe WhatsApp click handler
  const handleWhatsAppClick = () => {
    const message = `Hi Growwfy! I am reading your landing page about "${data.primaryKeyword}" and would like to schedule a strategy call.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918595055802?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Breadcrumb / Intent Tag */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="inline-flex items-center space-x-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            <Target className="h-3.5 w-3.5 text-purple-400" />
            <span>Search Intent: {data.intent}</span>
          </span>
          {data.location && (
            <span className="inline-flex items-center space-x-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              <span>Target Region: {data.location}</span>
            </span>
          )}
          <span className="inline-flex items-center space-x-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            <Globe className="h-3.5 w-3.5 text-blue-400" />
            <span>100% Unique content</span>
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 px-3.5 py-1 font-mono text-[11px] text-brand-primary uppercase tracking-widest">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span>Topical Authority Blueprint</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl leading-tight">
            {data.heading}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
            {data.subheading}
          </p>
        </div>

        {/* Dynamic Metrics Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 sm:p-8">
          {data.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col space-y-1 justify-center border-l-2 border-emerald-500 pl-4 py-1">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium tracking-tight uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Our Editorial Statement for "{data.primaryKeyword}"
              </h3>
              <p className="text-zinc-350 leading-relaxed font-light text-sm sm:text-base">
                {data.intro}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500/15 bg-purple-500/5 space-y-4">
              <h4 className="text-md font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="h-4.5 w-4.5 text-purple-400" />
                <span>The Core Challenge in this Segment</span>
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                {data.uniqueChallenge}
              </p>
            </div>

            {/* Semantic Keyword cloud for GEO transparency */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-500">
                Semantic Supporting Queries
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.semanticKeywords.map((kw, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-850 px-3 py-1 rounded-md text-xs text-zinc-400 font-light">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Consultation Callout */}
          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950 space-y-6">
            <div className="space-y-2">
              <h4 className="text-md font-extrabold text-white">
                Book a Free Strategy Call
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Let\'s map out a customized technical strategy tailored precisely for {data.location || 'your brand'} with zero fluff.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <GradientButton
                onClick={handleWhatsAppClick}
                className="w-full justify-center !py-3 font-mono font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 mr-1.5 text-emerald-400" />
                <span>WhatsApp Strategy</span>
              </GradientButton>

              <button
                onClick={onContactClick}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-all cursor-pointer"
              >
                <span>Email Audit Request</span>
                <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
              </button>
            </div>

            <div className="text-center">
              <a 
                href="tel:+918595055802"
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-zinc-500 hover:text-zinc-350 transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span>Call Us Direct: +91 85950 55802</span>
              </a>
            </div>
          </div>

        </div>

        {/* Multi-Step Strategy */}
        <div className="space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight text-white font-display">
              Bespoke Execution Framework
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
              How we systematically optimize and capture the highest relevance search traffic for "{data.primaryKeyword}".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.strategySteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950 space-y-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-850 font-mono text-xs font-bold text-emerald-400">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-extrabold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-8 border-t border-zinc-900 pt-16">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Contextual Q&A</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white font-display">
              Localized Search Diagnostics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.faq.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/20 space-y-2">
                <h4 className="text-sm font-extrabold text-white flex items-start gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light pl-6.5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
