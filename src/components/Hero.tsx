/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';
import Meteors from './Meteors';
import { GradientButton } from '@/components/ui/gradient-button';
import { MovingBorder } from '@/components/ui/moving-border';
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
  Visual1,
} from '@/components/ui/animated-card';

interface HeroProps {
  onStartJourney: () => void;
  onViewSeo: () => void;
}

export default function Hero({ onStartJourney, onViewSeo }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 stitch-dots-bg">
      
      {/* Dynamic Animated falling Meteor/Rain Shower background */}
      <Meteors count={45} />
      
      {/* Dynamic Background Gradients with Smooth Stitch Animations */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] -z-10 animate-stitch-blob-1 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[450px] w-[440px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[100px] -z-10 animate-stitch-blob-2 pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[125px] -z-10 animate-stitch-blob-3 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            {/* Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto lg:mx-0 select-none cursor-default"
            >
              <div className="relative p-[1px] overflow-hidden rounded-full bg-transparent inline-flex items-center">
                <div className="absolute inset-0" style={{ borderRadius: '9999px' }}>
                  <MovingBorder duration={3000} rx="18px" ry="18px">
                    <div className="h-12 w-12 opacity-[0.8] bg-[radial-gradient(#10b981_40%,transparent_60%)]" />
                  </MovingBorder>
                </div>
                <div className="relative z-10 inline-flex items-center rounded-full bg-zinc-100/90 dark:bg-zinc-900/90 px-4 py-1.5 shadow-sm">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                    Performance-First Web & SEO Architect
                  </span>
                </div>
              </div>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-normal tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6.5xl leading-tight max-w-3xl lg:max-w-none text-center lg:text-left"
            >
              <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent font-medium">
                We convert
              </span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300 sm:text-lg leading-relaxed font-semibold text-center lg:text-left mx-auto lg:mx-0"
            >
              At <strong>Growwfy</strong>, we believe your digital presence shouldn't look like a generic template. The engineers at <strong>Growwfy Digital Marketing</strong> craft premium, custom-engineered digital brands designed to load in a blink, dominate organic search, and convert casual visitors into lifetime clients.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto mx-auto lg:mx-0"
            >
              <GradientButton
                onClick={onStartJourney}
                id="hero-cta-plans"
                className="group flex items-center justify-center space-x-2 rounded-xl px-6 py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-primary/25 cursor-pointer w-full sm:w-auto"
              >
                <span>E-COMMERCE</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </GradientButton>

              <GradientButton
                onClick={onViewSeo}
                id="hero-cta-seo"
                variant="variant"
                className="group flex items-center justify-center space-x-2 rounded-xl px-6 py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-primary/25 cursor-pointer w-full sm:w-auto"
              >
                <Search className="h-4 w-4 text-brand-primary/80 group-hover:text-white transition-colors" />
                <span>Our SEO Meta Strategy</span>
              </GradientButton>
            </motion.div>

            {/* Mini Trust Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-900 w-full max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              <div>
                <div className="font-sans text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">&lt; 0.4s</div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">LCP Benchmark</div>
              </div>
              <div>
                <div className="font-sans text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">100%</div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Core Web Vitals</div>
              </div>
              <div>
                <div className="font-sans text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">#1 Rank</div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Target Keywords</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Animated Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative w-full max-w-[410px] drop-shadow-xl hover:drop-shadow-2xl transition-all"
            >
              <AnimatedCard className="w-full border border-zinc-200 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md">
                <CardVisual>
                  <Visual1 mainColor="#10b981" secondaryColor="#8b5cf6" />
                </CardVisual>
                <CardBody>
                  <CardTitle id="card-title">Scale Your Business Online</CardTitle>
                  <CardDescription id="card-description">
                    Increase sales and brand visibility
                  </CardDescription>
                </CardBody>
              </AnimatedCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
