"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: Package,
    title: "Advanced Component Pack",
    subtitle: "Version 2.1.0 • Feb 2025",
    description:
      "Ruixen UI now ships with an advanced component pack including complex layouts, enterprise-ready data tables, and animated navigation menus.",
    items: [
      "New Data Grid with sorting, filtering, and pagination",
      "Kanban board with drag-and-drop support",
      "Animated mega menu component",
      "Masonry grid layout for galleries and portfolios",
      "Extended accessibility support across all components",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    button: {
      url: "https://wa.me/918595055802?text=Hi%20there!%20I'd%20love%20to%20explore%20your%20Advanced%20Component%20Pack.",
      text: "Explore Components",
    },
  },
  {
    icon: Sparkles,
    title: "Theme Builder & Design Tokens",
    subtitle: "Version 2.0.0 • Jan 2025",
    description:
      "We've introduced a fully customizable theme builder powered by design tokens so you can tailor Ruixen UI to match any brand identity.",
    items: [
      "Real-time theme preview in the dashboard",
      "Customizable color palettes, typography, and spacing",
      "Preset themes for quick project setup",
      "Export tokens to CSS variables or JSON",
    ],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "Motion & Interaction Update",
    subtitle: "Version 1.8.0 • Dec 2024",
    description:
      "Micro-interactions across Ruixen UI have been enhanced with Framer Motion, delivering a smoother and more engaging user experience.",
    items: [
      "Animated dropdown menus and modals",
      "Smooth transitions between pages",
      "Custom easing curves for a premium feel",
      "Reduced layout shift for better stability",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Calendar,
    title: "Initial Pro Release",
    subtitle: "Version 1.5.0 • Oct 2024",
    description:
      "Ruixen UI Pro is here — a premium set of components, templates, and utilities designed for production-grade applications.",
    items: [
      "Full Figma design kit",
      "Extended form components with validation",
      "Chart components with Recharts integration",
      "Ready-to-use dashboard layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    button: {
      url: "https://wa.me/918595055802?text=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20the%20Pro%20Release.",
      text: "View Pro Features",
    },
  },
];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
  title = "Our Product Evolution Timeline",
  description = "Stay up to date with the latest components, features, and performance enhancements in our platform — built to help you launch and grow faster.",
  entries = defaultEntries,
  className = "",
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent || typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const sentinels = parent.querySelectorAll("[data-sentinel]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-index");
            if (indexAttr !== null) {
              const index = parseInt(indexAttr, 10);
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0,
      }
    );

    sentinels.forEach((sentinel) => observer.observe(sentinel));

    return () => {
      observer.disconnect();
    };
  }, [entries]);

  // Optional: ensure the first card is active on mount
  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section ref={containerRef} className={`py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-b border-zinc-200/60 dark:border-zinc-800/60 bypass-contrast ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            {title}
          </h2>
          <p className="mb-6 text-base text-zinc-600 dark:text-zinc-400 md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-20 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16 transition-all duration-300"
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-24 flex h-min w-64 shrink-0 items-center gap-4 md:sticky z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive 
                        ? "bg-indigo-600 text-white shadow-md" 
                        : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    }`}>
                      <entry.icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-800 dark:text-zinc-200"
                      }`}>
                        {entry.title}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                <div
                  data-sentinel
                  data-index={index}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0 pointer-events-none"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col w-full rounded-2xl border p-4 transition-all duration-500 " +
                    (isActive
                      ? "border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl scale-[1.01]"
                      : "border-zinc-200 dark:border-zinc-800/40 bg-zinc-100/50 dark:bg-zinc-900/20 opacity-60")
                  }
                >
                  {entry.image && (
                    <div className="overflow-hidden rounded-xl mb-4 h-64 w-full bg-zinc-100 dark:bg-zinc-800">
                      <img
                        src={entry.image}
                        alt={`${entry.title} visual`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="space-y-4">
                    {/* Header with improved typography */}
                    <div className="space-y-2">
                      <h3
                        className={
                          "text-lg font-bold leading-tight tracking-tight md:text-xl transition-colors duration-300 " +
                          (isActive ? "text-zinc-900 dark:text-white" : "text-zinc-800/80 dark:text-zinc-300/80")
                        }
                      >
                        {entry.title}
                      </h3>
                      
                      {/* Improved description with better spacing */}
                      <p
                        className={
                          "text-sm leading-relaxed transition-all duration-300 " +
                          (isActive 
                            ? "text-zinc-600 dark:text-zinc-300 line-clamp-none" 
                            : "text-zinc-500/80 dark:text-zinc-400/80 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Enhanced expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100 mt-2" 
                          : "grid-rows-[0fr] opacity-0 pointer-events-none")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 p-4">
                              <ul className="space-y-2.5">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end pt-2">
                              <Button 
                                variant="default" 
                                size="sm"
                                className="group bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 font-medium transition-all duration-200" 
                                asChild
                              >
                                <a href={entry.button.url} target="_blank" rel="noreferrer">
                                  {entry.button.text} 
                                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
