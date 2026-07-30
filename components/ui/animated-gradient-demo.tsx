import React from "react"
import { motion } from "motion/react"
import { Sparkles, TrendingUp, Users, ArrowUpRight, CheckCircle2, Award, Zap, Activity } from "lucide-react"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[];
  delay: number;
  icon?: React.ReactNode;
  badge?: string;
  footerElement?: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
  icon,
  badge,
  footerElement,
  className,
}) => {
  const container = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.2,
        duration: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-900 bg-white dark:bg-zinc-950/40 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300/80 dark:hover:border-zinc-800 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: delay * 0.5 }}
    >
      <AnimatedGradient colors={colors} speed={0.03} blur="medium" />
      <motion.div
        className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[220px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <motion.div 
              variants={item}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
            >
              {icon}
            </motion.div>
            {badge && (
              <motion.span 
                variants={item}
                className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {badge}
              </motion.span>
            )}
          </div>

          <div className="space-y-1.5">
            <motion.h3 
              className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400" 
              variants={item}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold tracking-tight text-zinc-900 dark:text-white"
              variants={item}
            >
              {value}
            </motion.p>
          </div>
        </div>

        { (subtitle || footerElement) && (
          <motion.div 
            className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900/50 flex items-center justify-between"
            variants={item}
          >
            {subtitle && (
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-normal">
                {subtitle}
              </p>
            )}
            {footerElement}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

const AnimatedGradientDemo: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 stitch-dots-bg">
      {/* Decorative center radial background highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/2 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100/50 dark:border-blue-900/40 text-[11px] font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400"
          >
            <Sparkles className="h-3 w-3 animate-pulse text-blue-500" />
            Performance Metrics & Scaling
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-zinc-900 dark:text-white leading-none"
          >
            Driven by Real Results
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Explore live, data-backed milestones reflecting the digital authority, conversions, and growth metrics we deliver daily to our leading partners.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Total Revenue (Col Span 2 on Desktop) */}
          <BentoCard
            title="Revenue Driven for Clients"
            value="₹1,21,00,000"
            subtitle="28% average ROI increment in Q1"
            colors={["#3b82f6", "#2563eb", "#60a5fa"]}
            delay={0.1}
            icon={<TrendingUp className="h-5 w-5" />}
            badge="Live Stat"
            className="md:col-span-2"
            footerElement={
              <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <ArrowUpRight className="h-3.5 w-3.5" />
                +24.8% YoY
              </div>
            }
          />

          {/* Card 2: New Users (Col Span 1) */}
          <BentoCard
            title="Active Client Reach"
            value="6,664+"
            subtitle="Daily new organic visitors"
            colors={["#10b981", "#34d399", "#60a5fa"]}
            delay={0.2}
            icon={<Users className="h-5 w-5" />}
            badge="Audience"
            footerElement={
              <div className="flex -space-x-1.5">
                {[
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=faces"
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="Audience member" 
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 rounded-full border border-white dark:border-zinc-950 object-cover" 
                  />
                ))}
              </div>
            }
          />

          {/* Card 3: Conversion Rate (Col Span 1) */}
          <BentoCard
            title="Conversion Growth"
            value="4.62%"
            subtitle="Industry baseline is 1.8%"
            colors={["#f59e0b", "#f97316", "#8b5cf6"]}
            delay={0.3}
            icon={<Zap className="h-5 w-5" />}
            badge="Conversion"
            footerElement={
              <div className="h-1.5 w-16 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden border border-zinc-200/30 dark:border-zinc-800">
                <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full w-[78%]" />
              </div>
            }
          />

          {/* Card 4: Active Projects (Col Span 2) */}
          <BentoCard
            title="Operational Capacity"
            value="42 Active"
            subtitle="Ensuring white-glove, premium management"
            colors={["#6366f1", "#4f46e5", "#ec4899"]}
            delay={0.4}
            icon={<Activity className="h-5 w-5" />}
            badge="Campaigns"
            className="md:col-span-2"
            footerElement={
              <span className="text-[11px] font-mono font-bold text-zinc-400 dark:text-zinc-500">
                8 launched this week
              </span>
            }
          />

          {/* Card 5: Customer Satisfaction (Col Span 3) */}
          <BentoCard
            title="Customer Trust Rate"
            value="4.9 / 5.0"
            subtitle="Based on over 450 verified enterprise audits and public industry feedback"
            colors={["#ec4899", "#d946ef", "#3b82f6"]}
            delay={0.5}
            icon={<Award className="h-5 w-5" />}
            badge="Satisfaction"
            className="md:col-span-3"
            footerElement={
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                100% Client Retention
              </div>
            }
          />

        </div>
      </div>
    </section>
  )
}

export { AnimatedGradientDemo }
export default AnimatedGradientDemo;
