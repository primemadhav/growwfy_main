/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GradientButton } from '@/components/ui/gradient-button';
import { 
  Terminal, 
  User, 
  Sparkles, 
  MessageSquare, 
  LayoutGrid, 
  Sun, 
  Moon, 
  ChevronDown, 
  ChevronUp,
  Code, 
  Search, 
  Megaphone, 
  TrendingUp, 
  Share2,
  Activity,
  Building2,
  Scale,
  ShoppingBag,
  Laptop,
  Home,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userActivePlan: string;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isLoggedIn: boolean;
  servicesCategory?: 'all' | 'website-dev' | 'seo' | 'google-ads' | 'meta-ads' | 'smm';
  setServicesCategory?: (category: 'all' | 'website-dev' | 'seo' | 'google-ads' | 'meta-ads' | 'smm') => void;
}

const serviceMenuItems = [
  { label: 'Paid Advertising', id: 'paid-advertising' },
  { label: 'SEO', id: 'seo' },
  { label: 'Website Development', id: 'website-dev' },
  { label: 'Consulting', id: 'consulting' },
];

export default function Header({ 
  activeTab, 
  setActiveTab, 
  userActivePlan, 
  theme, 
  toggleTheme, 
  isLoggedIn,
  servicesCategory = 'all',
  setServicesCategory 
}: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerServicesOpen, setIsDrawerServicesOpen] = useState(false);
  const [isDrawerIndustriesOpen, setIsDrawerIndustriesOpen] = useState(false);
  const [isDrawerWhoWeAreOpen, setIsDrawerWhoWeAreOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'Who we are' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Header Background layer - separated to prevent clipping fixed position elements like mobile menu */}
      <div className="absolute inset-0 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md -z-10" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex cursor-pointer items-center space-x-1.5 transition-opacity hover:opacity-90 animate-none"
        >
          <div>
            <span className="font-outfit text-2xl font-black tracking-tight sm:text-3xl text-white">
              Growwfy
            </span>
          </div>
        </div>

        {/* Navigation - Centered on large screens */}
        <nav className="hidden min-[850px]:flex items-center space-x-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            if (tab.id === 'services') {
              const serviceCategories = [
                {
                  id: 'website-dev',
                  title: 'Website Design & Dev',
                  color: 'text-emerald-400 font-bold',
                  borderColor: 'border-emerald-500/20',
                  icon: Code,
                  items: [
                    'Business Website',
                    'Corporate Website',
                    'E-commerce & Shopify',
                    'WordPress & Custom'
                  ]
                },
                {
                  id: 'seo',
                  title: 'SEO Services',
                  color: 'text-purple-400 font-bold',
                  borderColor: 'border-purple-500/20',
                  icon: Search,
                  items: [
                    'On-Page Optimization',
                    'Technical SEO Audit',
                    'Local Map Citations',
                    'Backlink Architecture'
                  ]
                },
                {
                  id: 'google-ads',
                  title: 'Google Ads',
                  color: 'text-amber-400 font-bold',
                  borderColor: 'border-amber-500/20',
                  icon: TrendingUp,
                  items: [
                    'Search & Call Ads',
                    'Performance Max',
                    'Shopping Campaigns',
                    'Conversion Tagging'
                  ]
                },
                {
                  id: 'meta-ads',
                  title: 'Meta Ads',
                  color: 'text-blue-400 font-bold',
                  borderColor: 'border-blue-500/20',
                  icon: Megaphone,
                  items: [
                    'Facebook & IG Ads',
                    'Lead Generation',
                    'Conversion API Sync',
                    'Lookalike Audiences'
                  ]
                },
                {
                  id: 'smm',
                  title: 'Social Media',
                  color: 'text-cyan-400 font-bold',
                  borderColor: 'border-cyan-500/20',
                  icon: Share2,
                  items: [
                    'IG & FB Management',
                    'LinkedIn Marketing',
                    'Monthly Content Calendar',
                    'Hashtag Strategy'
                  ]
                }
              ];

              return (
                <div 
                  key={tab.id}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (setServicesCategory) setServicesCategory('all');
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center space-x-1 ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                    id={`nav-tab-${tab.id}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute inset-0 rounded-full bg-zinc-900/80 -z-10 border border-zinc-800/50"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{tab.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-250 ${isServicesOpen ? 'rotate-180 text-emerald-400' : 'text-zinc-500'}`} />
                  </button>

                  {/* Mega Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50">
                      <div className="bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl p-3.5 shadow-2xl space-y-1.5">
                        {serviceMenuItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveTab(item.id);
                              setIsServicesOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all duration-150 text-left font-sans font-bold text-slate-850 dark:text-zinc-200 group text-[14px]"
                          >
                            <span className="tracking-wide">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (tab.id === 'industries') {
              return (
                <div 
                  key={tab.id}
                  className="relative"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center space-x-1 ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                    id={`nav-tab-${tab.id}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute inset-0 rounded-full bg-zinc-900/80 -z-10 border border-zinc-800/50"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{tab.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-250 ${isIndustriesOpen ? 'rotate-180 text-emerald-400' : 'text-zinc-500'}`} />
                  </button>

                  {/* Industries Dropdown Menu */}
                  {isIndustriesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 z-50">
                      <div className="bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl p-3 shadow-2xl space-y-1">
                        {[
                          { id: 'dental', label: 'Dental & Orthodontics', icon: Activity, color: 'text-teal-400' },
                          { id: 'saas-apps', label: 'SaaS & Mobile Apps', icon: Laptop, color: 'text-indigo-400', isContact: false },
                          { id: 'legal', label: 'Legal Practices', icon: Scale, color: 'text-blue-400', isContact: true },
                          { id: 'ecommerce', label: 'E-commerce Brands', icon: ShoppingBag, color: 'text-purple-400', isContact: false },
                          { id: 'real-estate', label: 'Real Estate & Dev', icon: Home, color: 'text-amber-400', isContact: false }
                        ].map((item) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                if (item.isContact) {
                                  setActiveTab('contact');
                                } else {
                                  setActiveTab(item.id);
                                }
                                setIsIndustriesOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="flex items-center space-x-3 w-full px-3.5 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-all duration-150 text-left font-sans text-slate-850 dark:text-zinc-200 group text-[13.5px]"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                                <IconComp className={`h-4.5 w-4.5 ${item.color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                                  {item.label}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                id={`nav-tab-${tab.id}`}
              >
                {isActive && (
                  <>
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 rounded-full bg-zinc-900/80 -z-10 border border-zinc-800/50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  </>
                )}
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Actions (Desktop Only) */}
        <div className="hidden min-[850px]:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-md shrink-0"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            id="theme-toggle-button"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-blue-400" />
            )}
          </button>

          {/* CTA Book Free Strategy Call Button */}
          <GradientButton
            onClick={() => {
              setActiveTab('contact');
            }}
            className="!min-w-0 !px-4 !py-2 !text-[11px] !rounded-lg font-mono font-bold tracking-wider uppercase shadow-md shadow-purple-600/10 cursor-pointer"
            id="nav-strategy-call"
          >
            <span>Free Strategy Call</span>
          </GradientButton>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex min-[850px]:hidden items-center space-x-2">
          {/* Call Button */}
          <button
            onClick={() => {
              window.location.href = 'tel:+918595055802';
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200/50 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/40 transition-all shadow-sm shrink-0 cursor-pointer"
            title="Call Us"
          >
            <Phone className="h-4.5 w-4.5" />
          </button>

          {/* WhatsApp Chat Button */}
          <button
            onClick={() => {
              const message = "Hi! I am inquiring from Growwfy mobile website.";
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/918595055802?text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200/50 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 transition-all shadow-sm shrink-0 cursor-pointer"
            title="WhatsApp Us"
          >
            <MessageCircle className="h-4.5 w-4.5" />
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all shadow-sm shrink-0 cursor-pointer"
            title="Menu"
          >
            <Menu className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>

      {/* Slide-out Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm min-[850px]:hidden"
            />

            {/* Main Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[100000] w-[85%] max-w-[320px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-900 p-5 shadow-2xl flex flex-col min-[850px]:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-100 dark:border-zinc-900">
                <span className="font-outfit text-xl font-black tracking-tight text-zinc-900 dark:text-white">
                  Growwfy
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Drawer Menu List */}
              <div className="flex-1 py-2 overflow-y-auto space-y-0.5">
                
                {/* Home Link */}
                <div className="border-b border-zinc-100 dark:border-zinc-900">
                  <button
                    onClick={() => {
                      setActiveTab('home');
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left py-4 px-2 font-bold text-[15px] tracking-tight transition-colors flex items-center justify-between ${
                      activeTab === 'home' ? 'text-emerald-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-emerald-500'
                    }`}
                  >
                    <span>Home</span>
                    <ArrowRight className="h-4 w-4 opacity-30" />
                  </button>
                </div>

                {/* Services Accordion */}
                <div className="border-b border-zinc-100 dark:border-zinc-900">
                  <button
                    onClick={() => setIsDrawerServicesOpen(!isDrawerServicesOpen)}
                    className="w-full text-left py-4 px-2 font-bold text-[15px] tracking-tight transition-colors flex items-center justify-between text-zinc-800 dark:text-zinc-200"
                  >
                    <span className={isDrawerServicesOpen ? 'text-emerald-500' : ''}>Services</span>
                    {isDrawerServicesOpen ? (
                      <ChevronUp className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-zinc-400" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isDrawerServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden pl-4 pr-1 pb-3 pt-1 space-y-2.5"
                      >
                        {serviceMenuItems.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => {
                              setActiveTab(srv.id);
                              setIsMobileMenuOpen(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`w-full text-left py-2 px-3 rounded-lg text-[13px] font-semibold border-l-2 transition-all block ${
                              activeTab === srv.id 
                                ? 'bg-zinc-50 dark:bg-zinc-900 text-emerald-500 border-emerald-500 pl-4' 
                                : 'border-transparent text-zinc-650 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 pl-3'
                            }`}
                          >
                            {srv.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Accordion */}
                <div className="border-b border-zinc-100 dark:border-zinc-900">
                  <button
                    onClick={() => setIsDrawerIndustriesOpen(!isDrawerIndustriesOpen)}
                    className="w-full text-left py-4 px-2 font-bold text-[15px] tracking-tight transition-colors flex items-center justify-between text-zinc-800 dark:text-zinc-200"
                  >
                    <span className={isDrawerIndustriesOpen ? 'text-emerald-500' : ''}>Industries</span>
                    {isDrawerIndustriesOpen ? (
                      <ChevronUp className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-zinc-400" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isDrawerIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden pl-4 pr-1 pb-3 pt-1 space-y-2.5"
                      >
                        {[
                          { id: 'dental', title: 'Dental & Orthodontics' },
                          { id: 'saas-apps', title: 'SaaS & Mobile Apps' },
                          { id: 'contact', title: 'Legal Practices' },
                          { id: 'ecommerce', title: 'E-commerce Brands' },
                          { id: 'real-estate', title: 'Real Estate' },
                          { id: 'contact', title: 'Healthcare' },
                          { id: 'contact', title: 'Education' },
                        ].map((ind, index) => (
                          <button
                            key={`${ind.id}-${index}`}
                            onClick={() => {
                              setActiveTab(ind.id);
                              setIsMobileMenuOpen(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`w-full text-left py-2 px-3 rounded-lg text-[13px] font-semibold border-l-2 transition-all block ${
                              activeTab === ind.id 
                                ? 'bg-zinc-50 dark:bg-zinc-900 text-emerald-500 border-emerald-500 pl-4' 
                                : 'border-transparent text-zinc-650 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 pl-3'
                            }`}
                          >
                            {ind.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Who We Are Link */}
                <div className="border-b border-zinc-100 dark:border-zinc-900">
                  <button
                    onClick={() => {
                      setActiveTab('about');
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left py-4 px-2 font-bold text-[15px] tracking-tight transition-colors flex items-center justify-between ${
                      activeTab === 'about' ? 'text-emerald-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-emerald-500'
                    }`}
                  >
                    <span>Who We Are</span>
                    <ArrowRight className="h-4 w-4 opacity-30" />
                  </button>
                </div>

                {/* Pricing Link */}
                <div className="border-b border-zinc-100 dark:border-zinc-900">
                  <button
                    onClick={() => {
                      setActiveTab('pricing');
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left py-4 px-2 font-bold text-[15px] tracking-tight transition-colors flex items-center justify-between ${
                      activeTab === 'pricing' ? 'text-emerald-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-emerald-500'
                    }`}
                  >
                    <span>Pricing</span>
                    <ArrowRight className="h-4 w-4 opacity-30" />
                  </button>
                </div>

                {/* Contact Us Link */}
                <div className="border-b border-zinc-100 dark:border-zinc-900">
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left py-4 px-2 font-bold text-[15px] tracking-tight transition-colors flex items-center justify-between ${
                      activeTab === 'contact' ? 'text-emerald-500' : 'text-zinc-800 dark:text-zinc-200 hover:text-emerald-500'
                    }`}
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="h-4 w-4 opacity-30" />
                  </button>
                </div>

                {/* Theme Toggle & CTA Call Block inside Drawer (moved up for better spacing and UX) */}
                <div className="mt-8 space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                  
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Theme Mode</span>
                    <button
                      onClick={toggleTheme}
                      className="flex h-8 px-2.5 items-center justify-center space-x-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-150 dark:hover:bg-zinc-850 transition-all shadow-sm cursor-pointer"
                    >
                      {theme === 'dark' ? (
                        <>
                          <Sun className="h-3.5 w-3.5 text-yellow-400" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Light</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-3.5 w-3.5 text-blue-500" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Dark</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Call Button Pill - Styled exactly like the blue rounded pill in the screenshot */}
                  <a
                    href="tel:+918595055802"
                    className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-full bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/40 font-bold tracking-tight text-[13px] text-center transition-all cursor-pointer shadow-sm"
                  >
                    <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>Call or Text: +91 85950 55802</span>
                  </a>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
