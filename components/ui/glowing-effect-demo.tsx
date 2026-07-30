"use client";

import React from "react";
import { Globe, Rocket, TrendingUp, Target, Sparkles, Box, Settings, Lock, Search } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Globe className="h-4 w-4 text-blue-500" />}
        title="Website Development"
        description={
          <>
            <b className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
              Modern, Fast & Responsive Websites
            </b>
            We design professional business websites, eCommerce stores, and landing pages that are optimized for speed, SEO, and conversions.
          </>
        }
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Target className="h-4 w-4 text-rose-500" />}
        title="Meta & Google Ads"
        description={
          <>
            <b className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
              High-Converting Ad Campaigns
            </b>
            Reach the right audience with Facebook, Instagram, and Google Ads designed to deliver more leads and better conversion rates.
          </>
        }
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Rocket className="h-4 w-4 text-purple-500 animate-pulse" />}
        title="Digital Marketing"
        description={
          <>
            <b className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
              Grow Your Business Online
            </b>
            From SEO to Google Ads and Meta Ads, we create data-driven marketing campaigns that increase traffic, generate qualified leads, and maximize ROI.
          </>
        }
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<TrendingUp className="h-4 w-4 text-emerald-500" />}
        title="SEO Optimization"
        description={
          <>
            <b className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
              Rank Higher on Google
            </b>
            Improve your search rankings with technical SEO, on-page optimization, keyword research, and high-quality content strategies.
          </>
        }
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Sparkles className="h-4 w-4 text-amber-500" />}
        title="Free Strategy Audit"
        description={
          <>
            <b className="font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">
              Ready to Scale Your Growth?
            </b>
            Get a free website & Ads analysis with actionable insights to boost conversions and maximize your sales.
          </>
        }
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <div className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
