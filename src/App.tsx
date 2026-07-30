/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Terminal, ChevronUp, Sparkles, LayoutGrid, X } from 'lucide-react';
import { DashboardData, UserProfile } from './types';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FlowArtDefaultDemo from '@/components/ui/demo';
import AnimatedGradientDemo from '@/components/ui/animated-gradient-demo';
import WhatWeDo from './components/WhatWeDo';
import AboutUs from './components/AboutUs';
import SeoGuide from './components/SeoGuide';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import CheckoutModal from './components/CheckoutModal';
import CareersPage from './components/CareersPage';
import SEOManager from './components/SEOManager';
import { initializeTracking, trackEvent } from './lib/analytics';
import { safeLocalStorage } from './lib/storage';
import { FAQ } from './components/ui/faq-tabs';
import { faqCategories, faqData } from './data/faqData';

// New Sub-Page Components
import ServicesHubPage from './components/ServicesHubPage';
import WebsiteDevPage from './components/WebsiteDevPage';
import SeoPage from './components/SeoPage';
import PaidAdvertisingPage from './components/PaidAdvertisingPage';
import ConsultingPage from './components/ConsultingPage';
import DentalPage from './components/DentalPage';
import IndustriesPage from './components/IndustriesPage';
import RealEstatePage from './components/RealEstatePage';
import SaasAppsPage from './components/SaasAppsPage';
import EcommercePage from './components/EcommercePage';
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { seoLandingPages } from './data/seoLandingPages';
import SeoLandingPage from './components/SeoLandingPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [servicesCategory, setServicesCategory] = useState<'all' | 'website-dev' | 'seo' | 'google-ads' | 'meta-ads' | 'smm'>('all');
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return safeLocalStorage.getItem('growwfy-is-logged-in') === 'true';
    }
    return false;
  });
  
  // Theme state (always defaults to dark theme on initial entry)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    safeLocalStorage.setItem('site-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  // Checkout Modal triggers
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'business' | null>(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  // Prefilled contact info states for seamless careers applications
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // Fetch initial dashboard state from server-side database
  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/dashboard');
      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      }
    } catch (error) {
      console.error('Error fetching dashboard state:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    initializeTracking();
  }, []);

  useEffect(() => {
    // Track Virtual Page View on route / tab change
    trackEvent('Virtual Page View', {
      page_title: activeTab.toUpperCase(),
      page_path: `/${activeTab}`,
      category: 'Page Navigation'
    }, {
      fbStandard: 'PageView'
    });
  }, [activeTab]);

  // Submit Profile update
  const handleUpdateProfile = async (profileData: Partial<UserProfile>): Promise<boolean> => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      if (response.ok) {
        await fetchDashboardData();
        return true;
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    return false;
  };

  // Submit Subscription cancellation
  const handleCancelSubscription = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/cancel', {
        method: 'POST',
      });
      if (response.ok) {
        await fetchDashboardData();
        return true;
      }
    } catch (error) {
      console.error('Error canceling subscription:', error);
    }
    return false;
  };

  // Scroll to top or navigation helpers
  const handleStartJourney = () => {
    setActiveTab('pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToEcommerce = () => {
    setActiveTab('ecommerce');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewSeo = () => {
    setActiveTab('seo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutSuccess = (updatedUser: any) => {
    fetchDashboardData();
    setSelectedPlan(null);
    setActiveTab('dashboard'); // Pull them directly into dashboard to see subscription trigger active!
  };

  // Render a full screen dark premium loader on mount
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white">
        <div className="relative flex h-16 w-16 items-center justify-center mb-4">
          <Loader2 className="h-12 w-12 text-emerald-400 animate-spin" />
          <Terminal className="absolute h-5 w-5 text-emerald-400" />
        </div>
        <div className="space-y-1 text-center">
          <h4 className="font-display font-extrabold tracking-wide uppercase text-sm">Growwfy</h4>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest animate-pulse">Initializing Secure Workspace Database...</p>
        </div>
      </div>
    );
  }

  const activePlan = dashboardData?.user?.activePlan || 'none';

  return (
    <div className="relative bg-white dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 antialiased min-h-screen flex flex-col justify-between transition-colors duration-200">
      <SEOManager activeTab={activeTab} />
      
      {/* Top Header navbar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'contact' && tab !== 'careers') {
            setPrefilledSubject('');
            setPrefilledMessage('');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        userActivePlan={activePlan}
        theme={theme}
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        servicesCategory={servicesCategory}
        setServicesCategory={setServicesCategory}
      />

      {/* Main viewport frame */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: HOME PAGE */}
          {activeTab === 'home' && (
            <motion.div
              key="home-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Hero 
                onStartJourney={handleGoToEcommerce} 
                onViewSeo={handleViewSeo} 
              />
              <WhatWeDo 
                onNavigate={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
              <Services 
                onLearnMore={handleStartJourney} 
              />
              <AnimatedGradientDemo />
              <FAQ 
                title="Frequently Asked Questions"
                subtitle="Let's answer some questions"
                categories={faqCategories}
                faqData={faqData}
              />
              <Pricing 
                onSelectPlan={(id, cycle) => {
                  const planNames = {
                    starter: 'Starter Plan',
                    professional: 'Business Plan',
                    business: 'Enterprise Plan'
                  };
                  const planName = planNames[id] || id;
                  const cycleText = cycle === 'annually' ? 'Yearly' : 'Monthly';
                  const message = `Hi! I am interested in the ${planName} (${cycleText} billing). Please share more details about getting started.`;
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/918595055802?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                currentPlanId={activePlan}
              />
              <ContactForm />
            </motion.div>
          )}

          {/* TAB: SERVICES ROOT HUB */}
          {activeTab === 'services' && (
            <motion.div
              key="services-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ServicesHubPage 
                setActiveTab={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: WEBSITE DEV PAGE */}
          {activeTab === 'website-dev' && (
            <motion.div
              key="website-dev-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <WebsiteDevPage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: SEO DETAILED PAGE */}
          {activeTab === 'seo' && (
            <motion.div
              key="seo-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <SeoPage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: PAID ADVERTISING PAGE */}
          {activeTab === 'paid-advertising' && (
            <motion.div
              key="paid-advertising-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <PaidAdvertisingPage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: CONSULTING & SMM PAGE */}
          {activeTab === 'consulting' && (
            <motion.div
              key="consulting-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ConsultingPage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: DENTAL INDUSTRY PAGE */}
          {activeTab === 'dental' && (
            <motion.div
              key="dental-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <DentalPage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: REAL ESTATE INDUSTRY PAGE */}
          {activeTab === 'real-estate' && (
            <motion.div
              key="real-estate-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <RealEstatePage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: SAAS & APPS INDUSTRY PAGE */}
          {activeTab === 'saas-apps' && (
            <motion.div
              key="saas-apps-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <SaasAppsPage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: E-COMMERCE INDUSTRY PAGE */}
          {activeTab === 'ecommerce' && (
            <motion.div
              key="ecommerce-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <EcommercePage 
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: INDUSTRIES HUB PAGE */}
          {activeTab === 'industries' && (
            <motion.div
              key="industries-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <IndustriesPage 
                setActiveTab={setActiveTab}
                onContactClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB: WHO WE ARE */}
          {activeTab === 'about' && (
            <motion.div
              key="about-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <FlowArtDefaultDemo />
            </motion.div>
          )}

          {/* TAB 3: PRICING SECTION PAGE */}
          {activeTab === 'pricing' && (
            <motion.div
              key="pricing-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Pricing 
                onSelectPlan={(id, cycle) => {
                  const planNames = {
                    starter: 'Starter Plan',
                    professional: 'Business Plan',
                    business: 'Enterprise Plan'
                  };
                  const planName = planNames[id] || id;
                  const cycleText = cycle === 'annually' ? 'Yearly' : 'Monthly';
                  const message = `Hi! I am interested in the ${planName} (${cycleText} billing). Please share more details about getting started.`;
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/918595055802?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                currentPlanId={activePlan}
              />
              <FAQ 
                title="Frequently Asked Questions"
                subtitle="Let's answer some questions"
                categories={faqCategories}
                faqData={faqData}
              />
            </motion.div>
          )}

          {/* TAB 4: CONTACT US PAGE */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ContactForm 
                prefilledSubject={prefilledSubject}
                prefilledMessage={prefilledMessage}
              />
            </motion.div>
          )}

          {/* TAB: CAREERS PAGE */}
          {activeTab === 'careers' && (
            <motion.div
              key="careers-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <CareersPage 
                onContactClick={(prefilledSub) => {
                  setPrefilledSubject(prefilledSub || 'Career Application');
                  setPrefilledMessage('Dear Growwfy Hiring Team,\n\nI am interested in applying for the open position. Here are details about my background and a link to my work...\n');
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}

          {/* TAB 5: INTUITIVE CLIENT PORTAL DASHBOARD */}
          {activeTab === 'dashboard' && dashboardData && (
            <motion.div
              key="dashboard-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Dashboard 
                data={dashboardData}
                onUpdateProfile={handleUpdateProfile}
                onCancelSubscription={handleCancelSubscription}
                onSelectPlanTab={() => {
                  setActiveTab('pricing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                isLoggedIn={isLoggedIn}
                onLoginSuccess={() => {
                  setIsLoggedIn(true);
                  safeLocalStorage.setItem('growwfy-is-logged-in', 'true');
                }}
                onSignOut={() => {
                  setIsLoggedIn(false);
                  safeLocalStorage.removeItem('growwfy-is-logged-in');
                  setActiveTab('home');
                }}
              />
            </motion.div>
          )}

          {/* TAB: SEO DYNAMIC LANDING PAGES */}
          {activeTab.startsWith('seo-lp-') && (
            (() => {
              const lpId = activeTab.replace('seo-lp-', '');
              const lpData = seoLandingPages[lpId];
              if (!lpData) return null;
              return (
                <motion.div
                  key={`seo-lp-${lpId}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <SeoLandingPage 
                    data={lpData} 
                    onContactClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </motion.div>
              );
            })()
          )}

        </AnimatePresence>
      </main>

      {/* Floating Checkout overlay */}
      <AnimatePresence>
        {selectedPlan && (
          <CheckoutModal 
            planId={selectedPlan}
            billingCycle={selectedBillingCycle}
            onClose={() => setSelectedPlan(null)}
            onSuccess={handleCheckoutSuccess}
          />
        )}
      </AnimatePresence>

      {activeTab === 'home' && <TestimonialsSection />}

      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 text-xs mt-auto">
        {/* Top Segment: Primary columns */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 sm:gap-10">
          
          {/* Column 1: Core Brand Statement */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-1.5 animate-none">
              <span className="font-outfit text-xl font-black tracking-tight sm:text-2xl text-zinc-900 dark:text-white">
                Growwfy
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-300 leading-relaxed text-sm font-semibold max-w-sm">
              We build offline businesses into brands.
            </p>
            <div className="space-y-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              <div>Email: growwfy@gmail.com</div>
              <div>Support: 24/7/365 Portal Support</div>
              <div>Location: Rohini, Delhi</div>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <button 
                  onClick={() => { setActiveTab('home'); setPrefilledSubject(''); setPrefilledMessage(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('services'); setPrefilledSubject(''); setPrefilledMessage(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('about'); setPrefilledSubject(''); setPrefilledMessage(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('contact'); setPrefilledSubject(''); setPrefilledMessage(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('careers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <button 
                  onClick={() => { setActiveTab('paid-advertising'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Paid Advertising
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('seo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  SEO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('website-dev'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('consulting'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: INDUSTRIES */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
              Industries
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <button 
                  onClick={() => { setActiveTab('saas-apps'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  SaaS & Mobile Apps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Legal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Ecommerce
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('dental'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Dental
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('real-estate'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Real Estate
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: POLICIES */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400">
              Policies
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <button 
                  onClick={() => setSelectedPolicy('privacy')} 
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy('terms')} 
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy('cookie')} 
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedPolicy('acceptable-use')} 
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors text-left animate-none cursor-pointer text-zinc-800 dark:text-zinc-200"
                >
                  Acceptable Use Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle Segment: Human-Centric Client Trust Metrics Banner */}
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 border-y border-zinc-200 dark:border-zinc-900 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-zinc-50 dark:bg-zinc-950/40">
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight sm:text-3xl">100+</div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-mono">Custom Sites Programmed</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight sm:text-3xl">95+ Avg</div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-mono">Lighthouse Speed Score</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight sm:text-3xl">340%</div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-mono">SEO Organic Growth</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight sm:text-3xl">99.2%</div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-mono">Client Satisfaction Rate</div>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Local Time Context */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Growwfy. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-zinc-900 dark:hover:text-zinc-300 cursor-pointer" onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-900 dark:hover:text-zinc-300 cursor-pointer" onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Tech Offerings</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-900 dark:hover:text-zinc-300 cursor-pointer" onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Who We Are</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-900 dark:hover:text-zinc-300 cursor-pointer" onClick={() => { setActiveTab('seo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>SEO Blueprint</span>
          </div>
        </div>
      </footer>

      {/* Floating Policy overlay */}
      <AnimatePresence>
        {selectedPolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPolicy(null)}
              className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
            />
            
            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 animate-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-outfit font-black tracking-tight text-zinc-900 dark:text-white">
                  {policyContent[selectedPolicy]?.title}
                </h3>
                <div className="h-px bg-zinc-100 dark:bg-zinc-800" />
                
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed text-left">
                  {policyContent[selectedPolicy]?.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    onClick={() => setSelectedPolicy(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90 transition-opacity cursor-pointer animate-none bypass-contrast"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

const policyContent: Record<string, { title: string; content: string[] }> = {
  'privacy': {
    title: 'Privacy Policy',
    content: [
      'At Growwfy, we prioritize protecting your business data. This Privacy Policy outlines how we collect, process, and safeguard information through our premium server-side integrations and conversion analytics engines.',
      'We use first-party data storage systems and modern APIs (such as Meta Conversions API and server-side tracking) to ensure high-performance analytics without compromising user privacy. All tracked identifiers are secure, hashed, and processed in compliance with global standards.',
      'Growwfy does not sell, rent, or lease client database records or user identity logs to third parties. We strictly utilize authentication metadata for dashboard secure passcodes and direct client-to-agency ticket support channels.',
      'If you have any questions or concerns regarding data practices, please reach out directly via our official support inbox: growwfy@gmail.com.'
    ]
  },
  'terms': {
    title: 'Terms of Service',
    content: [
      'Welcome to Growwfy. By accessing our services, custom React/Vite storefronts, dashboards, and automated CMS speed optimization modules, you agree to comply with the following Terms of Service.',
      'All deliverables, including custom application source codes, responsive styles, dynamic configurations, and compiled static assets, become the exclusive intellectual property of the purchasing client upon full invoice clearance.',
      'Growwfy guarantees standard service level agreements (SLAs) for page optimization, with a target Largest Contentful Paint (LCP) benchmark of under 0.4 seconds under ordinary CDN server distribution.',
      'We reserve the right to suspend support ticket or customer dashboard access in instances of unpaid billing cycles, unauthorized credential sharing, or violation of our acceptable hosting resources usage guidelines.'
    ]
  },
  'cookie': {
    title: 'Cookie Policy',
    content: [
      'This Cookie Policy explains how Growwfy utilizes cookies, session trackers, and client-side storage technologies to optimize your customer experience and power state persistence.',
      'We utilize essential local state parameters (e.g., "site-theme" for dark/light mode memory, and login sessions) strictly to maintain dashboard authentication state and premium personalization preferences.',
      'Our first-party server-side scripts may place tracking pixels for organic SEO benchmarking and search traffic analysis. These cookies contain no sensitive personal identifiers and do not track users across external platforms.',
      'You can easily configure your web browser to reject standard cookie files or clear local storage, which may limit certain dashboard metrics persistence features.'
    ]
  },
  'acceptable-use': {
    title: 'Acceptable Use Policy',
    content: [
      'This Acceptable Use Policy specifies the behavior and usage guidelines required of clients interacting with Growwfy custom platforms, databases, and client dashboards.',
      'Clients are strictly prohibited from utilizing Growwfy hosted systems for distributing malware, spam, phishing frameworks, or committing security violations against standard external services.',
      'You are responsible for safeguarding your customer portal passcodes (e.g., standard passcode validations) and ensuring that unauthorized users do not access dynamic metric reporting systems.',
      'Violation of these rules will result in immediate termination of the support contract, suspension of the agency consulting agreements, and potential reporting to law enforcement where applicable.'
    ]
  }
};
