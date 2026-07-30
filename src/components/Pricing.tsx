/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { Info } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";

const getTooltipText = (feature: string): string | null => {
  if (feature.includes("1 Google Workspace Email")) {
    return "Professional email (info@Growwfy.com) powered by Google Workspace with Gmail, Drive, & security.";
  }
  if (feature.includes("3 Google Workspace Emails")) {
    return "Three professional business emails powered by Google Workspace with full admin controls.";
  }
  if (feature.includes("5 Google Workspace Emails")) {
    return "Five professional business emails powered by Google Workspace to scale your entire team.";
  }
  if (feature.includes("Google Business management")) {
    return "Complete management of your Google Business Profile to rank high in local Google Maps search.";
  }
  if (feature.includes("Custom software development")) {
    return "Custom web platforms, custom APIs, automated workflows, and database integrations tailored for your operations.";
  }
  return null;
};

interface PricingProps {
  onSelectPlan: (
    planId: "starter" | "professional" | "business",
    billingCycle: "monthly" | "annually"
  ) => void;
  currentPlanId: string;
}

const plans = [
  {
    id: "starter" as const,
    name: "Starter",
    description: "Get online fast and start getting found",
    price: 19900,
    yearlyPrice: 191000,
    buttonText: "Choose Starter",
    buttonVariant: "outline" as const,
    includes: [
      "Starter includes:",
      "Custom responsive website",
      "Domain, hosting, SSL & security",
      "1 Google Workspace Email ⓘ",
      "ADA/accessibility compliant",
      "10 content updates per month",
      "Speed optimized",
      "Basic SEO setup",
      "Basic analytics",
      "Monthly uptime monitoring",
      "Basic e-commerce",
    ],
  },
  {
    id: "professional" as const,
    name: "Business",
    description: "Everything you need to outrank competitors",
    price: 69900,
    yearlyPrice: 671000,
    buttonText: "Choose Business",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Premium custom design",
      "3 Google Workspace Emails ⓘ",
      "Google Business management ⓘ",
      "On-page SEO optimization",
      "1–2 SEO blog posts per month",
      "Google Business Profile optimization",
      "Unlimited content updates",
      "Booking and CRM Systems",
      "Google Analytics & monthly report",
      "Fully customized e-commerce",
      "Priority support",
    ],
  },
  {
    id: "business" as const,
    name: "Enterprise",
    description: "Your full digital team, on demand",
    price: 119900,
    yearlyPrice: 1151000,
    buttonText: "Choose Enterprise",
    buttonVariant: "outline" as const,
    suffix: "+",
    includes: [
      "Everything in Business, plus:",
      "Custom software development ⓘ",
      "One team managing every website, storefront & listing",
      "5 Google Workspace Emails ⓘ",
      "Google Business management ⓘ",
      "Custom SEO strategy & execution",
      "AI chatbot or automation",
      "Advanced Google Analytics & dashboard",
      "Dedicated account manager",
      "Same-day support",
      "AI Editor",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors cursor-pointer",
            selected === "0" ? "text-neutral-50 animate-pulse" : "text-neutral-400",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch-pricing"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-20">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors cursor-pointer",
            selected === "1" ? "text-neutral-50 animate-pulse" : "text-neutral-400",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch-pricing"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-20 flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  );
};

export default function Pricing({ onSelectPlan, currentPlanId }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <section
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden pt-20 pb-20 border-t border-neutral-900 bypass-contrast"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="w-full h-full relative">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-6 pt-16 max-w-3xl mx-auto space-y-4 relative z-40 px-4">
        <h2 className="block text-4xl font-display font-normal text-neutral-50 leading-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center text-neutral-50 font-display font-normal"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Custom Web Development & SEO Pricing Plans
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-neutral-300 max-w-xl mx-auto font-light text-sm animate-pulse"
        >
          Trusted by millions, We help teams all around the world, Explore which
          option is right for you.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-2"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #206ce8 0%, transparent 70%)
          `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-6 py-6 px-4 mx-auto relative z-40 items-stretch">
        {plans.map((plan, index) => {
          const isCurrent = currentPlanId === plan.id;

          return (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
              className="h-full"
            >
              <Card
                className={cn(
                  "relative text-neutral-100 border-neutral-800 h-full flex flex-col justify-between transition-all duration-300",
                  "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900",
                  plan.popular
                    ? "shadow-[0px_-13px_300px_0px_#0900ff] border-blue-500/40 z-20"
                    : "z-10"
                )}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-blue-500 to-indigo-600 text-neutral-50 shadow-md">
                    Popular
                  </span>
                )}

                <CardHeader className="text-left p-6">
                  <div className="flex justify-between items-center">
                    <span className="block text-2xl font-semibold mb-1 text-neutral-50">
                      {plan.name}
                    </span>
                  </div>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold flex items-center text-neutral-50">
                      ₹
                      <NumberFlow
                        locales="en-IN"
                        format={{
                          useGrouping: true,
                        }}
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-4xl font-bold text-neutral-50"
                      />
                      {"suffix" in plan ? plan.suffix : ""}
                    </span>
                    <span className="text-neutral-300 ml-1 text-sm font-light">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 min-h-[32px] leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <button
                        onClick={() =>
                          onSelectPlan(
                            plan.id,
                            isYearly ? "annually" : "monthly"
                          )
                        }
                        className={cn(
                          "w-full mb-6 py-4 text-sm rounded-xl cursor-pointer font-semibold transition-all duration-200 hover:scale-[1.02]",
                          plan.popular
                            ? "bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800/50 border border-blue-500 text-neutral-50"
                            : "bg-gradient-to-t from-neutral-950 to-neutral-800 shadow-lg shadow-neutral-900 border border-neutral-800 text-neutral-50 hover:border-neutral-700"
                        )}
                      >
                        Choose {plan.name}
                      </button>

                      <div className="space-y-3 pt-4 border-t border-neutral-800">
                        <span className="block font-semibold text-xs mb-3 text-neutral-200 tracking-wider uppercase font-mono">
                          {plan.includes[0]}
                        </span>
                        <ul className="space-y-2.5">
                          {plan.includes.slice(1).map((feature, featureIndex) => {
                            const tooltipText = getTooltipText(feature);
                            const cleanFeatureText = feature.replace(" ⓘ", "");
                            return (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2.5 relative group/feature"
                              >
                                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5"></span>
                                <span className="text-xs text-neutral-300 font-medium flex items-center gap-1">
                                  {cleanFeatureText}
                                  {tooltipText && (
                                    <span className="relative inline-flex items-center text-neutral-400 hover:text-neutral-200 cursor-help group/tooltip ml-0.5">
                                      <Info className="h-3.5 w-3.5" />
                                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-48 p-2 rounded-lg bg-neutral-900 border border-neutral-700 text-[10px] text-neutral-200 shadow-xl leading-normal z-50 transition-all duration-200">
                                        {tooltipText}
                                      </span>
                                    </span>
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          );
        })}
      </div>
    </section>
  );
}
