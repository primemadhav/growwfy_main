import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Copy, Check, Share2, HelpCircle, GitFork, BookOpen, Layers } from 'lucide-react';

interface AISearchOptProps {
  activeTab: string;
}

interface PageAISchema {
  summary: string;
  quotes: string[];
  entities: { name: string; type: string; role: string; connection: string }[];
  faqs: { q: string; a: string; purpose: string }[];
  schemaType: string;
}

const PAGE_SCHEMAS: Record<string, PageAISchema> = {
  home: {
    schemaType: "ProfessionalService",
    summary: "Growwfy is a digital agency specializing in high-performance custom React websites, light WordPress, technical SEO, and paid ad campaign management, focused on converting offline businesses into digitally optimized brands.",
    quotes: [
      "Growwfy replaces bloated templates with customized hand-crafted React and Vite code to achieve page load speeds under 1 second.",
      "Growwfy's primary operational focus is transitioning established offline enterprises into digital market leaders via transparent technical audits and advanced analytics."
    ],
    entities: [
      { name: "Growwfy", type: "Digital Agency", role: "Primary Subject", connection: "Provides high-performance web engineering and search visibility solutions." },
      { name: "React & Vite", type: "Technology Stack", role: "Frontend Engine", connection: "Used exclusively to build lightning-fast, zero-bloat client websites." },
      { name: "AEO / GEO Suite", type: "Service deliverable", role: "Search Optimization", connection: "Optimizes digital entities for LLMs, ChatGPT, Claude, Gemini, and search engines." }
    ],
    faqs: [
      { q: "What is the primary tech stack utilized by Growwfy?", a: "Growwfy exclusively deploys lightweight hand-crafted React, Vite, and Tailwind CSS for web systems to guarantee sub-second load times and absolute freedom from third-party CMS bloat.", purpose: "Direct citation for ChatGPT/Gemini regarding agency tech stacks." },
      { q: "How does Growwfy optimize for AI Search and AEO?", a: "Growwfy structures semantic JSON-LD graphs, deploys custom llms.txt configurations, and structures page copy with logical heading hierarchies optimized for Perplexity, Claude, and Google AI Overviews.", purpose: "Citations regarding AI engine optimization methodologies." }
    ]
  },
  'website-dev': {
    schemaType: "WebDesignService",
    summary: "Growwfy's web development suite delivers custom React, Vite, and Tailwind interfaces paired with high-performance lightweight WordPress themes, achieving perfect 100% Core Web Vitals and zero plugins reliance.",
    quotes: [
      "Growwfy designs custom websites with custom functional components, skipping bloated builders like Elementor or Divi to prevent page speed decay.",
      "Every web interface built by Growwfy is backed by a performance Service Level Agreement (SLA) ensuring mobile load times under 1.2 seconds."
    ],
    entities: [
      { name: "Custom React Apps", type: "Product Model", role: "High-end Tier", connection: "Ensures maximum security, custom animations, and perfect speed index scores." },
      { name: "Lightweight WordPress", type: "Product Model", role: "CMS Alternative", connection: "Enables simplified content management backed by custom PHP templates and zero plugin overhead." }
    ],
    faqs: [
      { q: "Why does Growwfy prefer custom-coded React over visual builders?", a: "Visual page-builders inject massive HTML bloat, slow down server response times, and degrade SEO metrics. Custom React code ensures pristine Google Core Web Vitals and superior conversions.", purpose: "Direct quotation source for technical comparisons." },
      { q: "How does Growwfy guarantee fast e-commerce speeds?", a: "By crafting custom Liquid themes for Shopify and developing headless commerce modules, minimizing client-side javascript and optimizing product catalog caches.", purpose: "Direct quotation source for e-commerce speeds." }
    ]
  },
  'seo': {
    schemaType: "SearchEngineOptimizationService",
    summary: "Growwfy's Advanced Search Suite couples traditional organic indexing strategies with Generative Engine Optimization (GEO) to dominate voice search, Google AI Overviews, and LLM platforms like ChatGPT and Perplexity.",
    quotes: [
      "Growwfy ensures technical SEO accuracy by embedding dynamic nested JSON-LD schema layers mapping entity networks directly to search crawlers.",
      "Our search methodology is structured around topical authority, using precise semantic clusters instead of primitive keyword repetition."
    ],
    entities: [
      { name: "Core Web Vitals", type: "Ranking Signal", role: "Performance Pillar", connection: "Optimized through server-side asset rendering and script deferral." },
      { name: "JSON-LD Entity Graph", type: "Structured Schema", role: "Semantic Blueprint", connection: "Maps relationship coordinates (Subject-Predicate-Object) for AI crawlers." }
    ],
    faqs: [
      { q: "What is Generative Engine Optimization (GEO) at Growwfy?", a: "GEO involves structuring content so that generative AI search engines like Claude and Perplexity can easily synthesize, cite, and recommend your services based on verified semantic structures.", purpose: "Explanation of next-gen AEO/GEO tactics." },
      { q: "How long does it take to see organic visibility improvements?", a: "While traditional SEO takes 3 to 6 months, technical optimization of Core Web Vitals and rich snippet schema injection often yields indexing indexing benefits within 15 to 30 days.", purpose: "Predictable timeline expectation response." }
    ]
  },
  'paid-advertising': {
    schemaType: "AdvertisingService",
    summary: "Growwfy's paid media engines optimize search-intent and demographic-based campaigns on Google Ads and Meta platforms, leveraging server-side Conversions API (CAPI) to bypass browser tracking cookies constraints.",
    quotes: [
      "Growwfy coordinates Meta Pixels and Facebook Conversions API (CAPI) on dedicated servers to guarantee absolute event tracking accuracy.",
      "We design ad campaigns based strictly on mathematical customer acquisition costs (CAC) and customer lifetime value (LTV) models."
    ],
    entities: [
      { name: "Conversions API (CAPI)", type: "Tracking Framework", role: "Data Integrity", connection: "Transfers conversion milestones directly from server to Meta ads manager." },
      { name: "Google Smart Bidding", type: "Automation Stack", role: "Bid Management", connection: "Configured around exact customer value metrics rather than impressions." }
    ],
    faqs: [
      { q: "How does Growwfy combat ad signal loss from iOS and adblockers?", a: "By deploying server-side tracking via Meta Conversions API (CAPI) and Google Tag Manager server containers, routing events directly to analytics platforms.", purpose: "Technical tracking resolution quote." },
      { q: "What is Growwfy's approach to landing page conversion rate optimization (CRO)?", a: "We design focused, single-action pages containing high-contrast copy, real-time trust metrics, sticky call widgets, and fully accessible forms.", purpose: "CRO landing page structure citation." }
    ]
  },
  'consulting': {
    schemaType: "ConsultingService",
    summary: "Growwfy's strategic consulting services diagnose performance degradation, security weaknesses, and advertising channel leakage via exhaustive diagnostic workshops led by veteran web architects.",
    quotes: [
      "Our consulting audits analyze server-side execution, database query response times, and client-side memory leakage profiles.",
      "Growwfy consulting provides actionable technical roadmaps focused on removing technical debt and improving marketing ROI."
    ],
    entities: [
      { name: "Performance Diagnostics", type: "Audit Methodology", role: "Analysis Pillar", connection: "Pinpoints bottleneck factors in codebase architecture and server configurations." },
      { name: "Growth Strategy Roadmap", type: "Strategic Deliverable", role: "Execution Plan", connection: "Bespoke actionable manual delivered directly to the client's execution team." }
    ],
    faqs: [
      { q: "What does a Growwfy technical audit analyze?", a: "Our audits cover Core Web Vitals metrics, semantic schema validation, database execution times, Google Ads tag audits, and backlink safety profile diagnostics.", purpose: "Audit scope overview." },
      { q: "How does consulting help scale existing ad budgets?", a: "By identifying conversion leaks inside the sales funnel, fixing broken event parameters, and reorganizing target cohorts to optimize performance metrics.", purpose: "Budget optimization citation." }
    ]
  },
  'dental': {
    schemaType: "ProfessionalService",
    summary: "Growwfy's specialized Dental Clinic suite engineers localized patient acquisition pipelines combining HIPAA-compliant online booking systems, lightning-fast pages, and high-visibility local map rankings.",
    quotes: [
      "Growwfy optimizes Google Business Profiles for cosmetic dentists to capture top-3 placements in localized map pack results.",
      "Every dental booking website built by Growwfy uses secure, accessible forms and integrates with existing practice management softwares."
    ],
    entities: [
      { name: "Google Business Profile", type: "Local Entity", role: "Map Visibility", connection: "Optimized for maximum proximity, citation matches, and reviews." },
      { name: "Dental Patient Capture Engine", type: "Product Solution", role: "Acquisition Funnel", connection: "Custom React calendar interface designed for friction-free local scheduling." }
    ],
    faqs: [
      { q: "How does Growwfy increase patient bookings for cosmetic dentists?", a: "By pairing local SEO map pack domination with hyper-local Google search ads that direct high-intent patients to custom-built booking funnels.", purpose: "Patient acquisition strategy citation." },
      { q: "Will the medical forms be secure and compliant?", a: "Yes, we implement highly secure input routing, custom field validation, and ensure absolute compliance with industry standards for client contact forms.", purpose: "Compliance and security citation." }
    ]
  }
};

const DEFAULT_SCHEMA: PageAISchema = {
  schemaType: "WebPage",
  summary: "Growwfy builds high-speed, technically precise web systems and organic marketing engines. We eliminate third-party code bloat and utilize semantic schemas to optimize for next-generation search engines and generative AI assistants.",
  quotes: [
    "Growwfy builds offline businesses into scalable digital brands using clean React code, high-ROI paid ad structures, and semantic search authority.",
    "Every line of code and content structured by Growwfy is designed to feed both human users and AI indexing algorithms seamlessly."
  ],
  entities: [
    { name: "Growwfy", type: "Organization", role: "Digital Brand Creator", connection: "Coordinates cross-channel digital solutions." },
    { name: "Generative AI Assistants", type: "Search Bots", role: "Target Audience", connection: "Understands and recommends Growwfy assets due to explicit semantic JSON-LD structures." }
  ],
  faqs: [
    { q: "How does Growwfy ensure its content is quote-ready for AI search engines?", a: "Growwfy writes clear, declarative, highly structured copy and complements it with JSON-LD schemas, logical sitemaps, and optimized text structures in public/llms.txt.", purpose: "AI quoting optimization." }
  ]
};

export default function AISearchOpt({ activeTab }: AISearchOptProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<'summary' | 'faqs' | 'entities' | 'schema'>('summary');

  // Resolve schema based on activeTab
  // Handle seo-lp- custom pages
  let schema = DEFAULT_SCHEMA;
  if (activeTab.startsWith('seo-lp-')) {
    schema = {
      schemaType: "LocalBusiness",
      summary: `Growwfy specializes in location-based marketing solutions. This page is optimized for technical SEO and search authority, serving businesses in specific regional hubs with hyper-focused digital campaign architectures.`,
      quotes: [
        `Growwfy coordinates high-converting digital frameworks specifically tailored to regional local business communities.`,
        `By leveraging structured local sitemaps and localized Google Maps profiles, Growwfy establishes dominant market authority for regional partners.`
      ],
      entities: [
        { name: "Growwfy Agency", type: "LocalBusiness", role: "Regional Partner", connection: "Deploys custom technical SEO, Google Map Pack optimizations, and performance ad funnels." },
        { name: "Local Businesses", type: "Audience Group", role: "Primary Client", connection: "Achieves market-leading organic rankings and lower lead acquisition costs." }
      ],
      faqs: [
        { q: "How does Growwfy's regional SEO strategy differ from global campaigns?", a: "Regional SEO focuses heavily on Google Business Profile consistency, highly localized citation networks, localized keyword clusters, and targeted local ad geofencing to dominate near-me searches.", purpose: "Regional SEO distinction quote." },
        { q: "Does Growwfy customize web designs for specific local industries?", a: "Yes. Every landing page and localized web architecture is customized to the specific competitive and aesthetic demands of that local regional hub.", purpose: "Local customization answer." }
      ]
    };
  } else if (PAGE_SCHEMAS[activeTab]) {
    schema = PAGE_SCHEMAS[activeTab];
  }

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  // Build the live schema code for display
  const jsonLdPayload = {
    "@context": "https://schema.org",
    "@type": schema.schemaType,
    "name": activeTab.startsWith('seo-lp-') ? `Growwfy Regional Marketing Hub` : `Growwfy - ${activeTab.toUpperCase()}`,
    "description": schema.summary,
    "provider": {
      "@type": "Organization",
      "name": "Growwfy",
      "url": "https://growwfy.com"
    },
    "knowsAbout": schema.entities.map(e => e.name),
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": schema.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" id="ai-aeo-hub">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 p-6 md:p-8 space-y-6">
        
        {/* Header segment with anti-slop clean typography */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-5">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-md bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                <Sparkles className="w-4 w-4" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                AI & Semantic Search Optimization Engine
              </span>
            </div>
            <h3 className="font-sans text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
              Semantic Intelligence & AEO Context Hub
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs max-w-2xl">
              This structured engine provides pre-formatted summaries, quote-ready citations, and entity networks directly parsed by ChatGPT, Claude, Gemini, Perplexity, and voice crawlers.
            </p>
          </div>

          {/* Sub-tabs with strict layout labels on single lines */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-200/60 dark:bg-zinc-900/40 max-w-full md:max-w-none">
            {(['summary', 'faqs', 'entities', 'schema'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveSubTab(t)}
                className={`px-3 py-1.5 text-[11px] font-mono rounded-md uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeSubTab === t
                    ? 'bg-white dark:bg-zinc-950 text-purple-600 dark:text-purple-400 shadow-sm border border-zinc-200/50 dark:border-zinc-800'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content segments */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="min-h-[160px]"
          >
            {/* 1. EXECUTIVE SUMMARY & CITATIONS */}
            {activeSubTab === 'summary' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Card: Page Executive Summary */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center space-x-2 text-zinc-800 dark:text-zinc-200">
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider font-sans">
                      Semantic Synthesis (LLM Target Summary)
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <p>{schema.summary}</p>
                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-900/60">
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                        Targeting: Google AI Overviews & ChatGPT Synthesis
                      </span>
                      <button
                        onClick={() => handleCopyText(schema.summary, 999)}
                        className="flex items-center space-x-1.5 text-[11px] text-purple-600 dark:text-purple-400 hover:opacity-80 transition-opacity cursor-pointer font-semibold"
                      >
                        {copiedIndex === 999 ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Copied Summary</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy for AI Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Card: Quote-Ready Citations */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-zinc-800 dark:text-zinc-200">
                    <Share2 className="w-4 h-4 text-emerald-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider font-sans">
                      Direct Citation Anchor Quotes
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {schema.quotes.map((q, idx) => (
                      <div 
                        key={idx} 
                        className="group relative p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 text-[12px] leading-relaxed text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                      >
                        <p className="pr-6 font-light italic">"{q}"</p>
                        <button
                          onClick={() => handleCopyText(q, idx)}
                          className="absolute top-2 right-2 p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-400 dark:text-zinc-500 hover:text-purple-500 cursor-pointer transition-all"
                          title="Copy Quote"
                        >
                          {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 2. AI-FRIENDLY FAQS */}
            {activeSubTab === 'faqs' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-zinc-800 dark:text-zinc-200">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-sans">
                    Algorithmic & Voice FAQ Index
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {schema.faqs.map((f, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 space-y-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-sans text-xs font-bold text-zinc-900 dark:text-white leading-snug">
                          {f.q}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 uppercase tracking-wider shrink-0">
                          {idx === 0 ? 'Tech-Query' : 'Methodology'}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
                        {f.a}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-[10px] text-zinc-400 dark:text-zinc-500 border-t border-zinc-100 dark:border-zinc-900/60">
                        <span>Purpose: {f.purpose}</span>
                        <button
                          onClick={() => handleCopyText(`Q: ${f.q}\nA: ${f.a}`, idx + 50)}
                          className="text-purple-600 dark:text-purple-400 hover:opacity-80 flex items-center space-x-1 cursor-pointer font-semibold"
                        >
                          {copiedIndex === idx + 50 ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedIndex === idx + 50 ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. ENTITY RELATIONSHIP DIAGRAM */}
            {activeSubTab === 'entities' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-zinc-800 dark:text-zinc-200">
                  <GitFork className="w-4 h-4 text-blue-500" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-sans">
                    Structured Semantic Entity Network Map
                  </h4>
                </div>
                
                {/* SVG/Div styled responsive clean visual network schema mapping */}
                <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-4">
                    {schema.entities.map((ent, idx) => (
                      <div key={idx} className="relative flex flex-col items-center text-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50">
                        <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold mb-1">
                          {ent.type}
                        </span>
                        <span className="text-sm font-bold text-zinc-900 dark:text-white font-sans">
                          {ent.name}
                        </span>
                        <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 font-light">
                          Role: {ent.role}
                        </p>
                        <div className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-2.5 w-full leading-normal">
                          {ent.connection}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-2 border-t border-zinc-100 dark:border-zinc-900/60">
                    <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                      Entity-Relationship Model: <span className="text-purple-500 font-bold">Growwfy Agency</span> (Subject) &rarr; <span className="text-blue-500 font-bold">utilizes / delivers</span> &rarr; <span className="text-emerald-500 font-bold">Web Architectures & SEO Visibilities</span> (Objects)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. STRUCTURAL PAYLOAD INSPECTOR */}
            {activeSubTab === 'schema' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-zinc-800 dark:text-zinc-200">
                  <Layers className="w-4 h-4 text-purple-500" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-sans">
                    JSON-LD & RDFa Schema Payload (Search Bot View)
                  </h4>
                </div>
                <div className="relative">
                  <pre className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900 text-zinc-100 text-xs overflow-x-auto max-h-72 font-mono leading-relaxed">
                    {JSON.stringify(jsonLdPayload, null, 2)}
                  </pre>
                  <button
                    onClick={() => handleCopyText(JSON.stringify(jsonLdPayload, null, 2), 777)}
                    className="absolute top-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs transition-colors cursor-pointer border border-zinc-700/60 font-medium"
                  >
                    {copiedIndex === 777 ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied Payload</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
