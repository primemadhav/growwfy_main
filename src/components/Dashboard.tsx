/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  User, CreditCard, LayoutGrid, Calendar, AlertCircle, CheckCircle2, Clock, 
  Settings, Mail, Building, Bell, Trash2, ShieldAlert, Sparkles, FolderDot, Inbox,
  Activity, RefreshCw, Check, Copy
} from 'lucide-react';
import { DashboardData, UserProfile } from '../types';
import { getActiveConfig, saveActiveConfig, initializeTracking, trackEvent } from '../lib/analytics';

interface DashboardProps {
  data: DashboardData;
  onUpdateProfile: (profileData: Partial<UserProfile>) => Promise<boolean>;
  onCancelSubscription: () => Promise<boolean>;
  onSelectPlanTab: () => void;
  isLoggedIn: boolean;
  onLoginSuccess: () => void;
  onSignOut: () => void;
}

export default function Dashboard({ 
  data, 
  onUpdateProfile, 
  onCancelSubscription, 
  onSelectPlanTab,
  isLoggedIn,
  onLoginSuccess,
  onSignOut
}: DashboardProps) {
  const [activeSubTab, setActiveSubTab] = useState<'project' | 'profile' | 'billing' | 'inbox' | 'analytics'>('project');

  // Tracking & Analytics State
  const [gaId, setGaId] = useState(() => getActiveConfig().gaMeasurementId || '');
  const [gtmId, setGtmId] = useState(() => getActiveConfig().gtmId || '');
  const [pixelId, setPixelId] = useState(() => getActiveConfig().metaPixelId || '');
  const [googleAdsId, setGoogleAdsId] = useState(() => getActiveConfig().googleAdsId || '');
  const [gadsLabelLeadForm, setGadsLabelLeadForm] = useState(() => getActiveConfig().gadsLabels?.leadForm || '');
  const [gadsLabelWhatsApp, setGadsLabelWhatsApp] = useState(() => getActiveConfig().gadsLabels?.whatsapp || '');
  const [gadsLabelPhone, setGadsLabelPhone] = useState(() => getActiveConfig().gadsLabels?.phone || '');
  const [gadsLabelConsultation, setGadsLabelConsultation] = useState(() => getActiveConfig().gadsLabels?.consultation || '');
  const [gadsLabelQuote, setGadsLabelQuote] = useState(() => getActiveConfig().gadsLabels?.quote || '');
  const [gadsLabelContact, setGadsLabelContact] = useState(() => getActiveConfig().gadsLabels?.contactForm || '');
  const [gadsLabelNewsletter, setGadsLabelNewsletter] = useState(() => getActiveConfig().gadsLabels?.newsletter || '');

  const [analyticsSuccess, setAnalyticsSuccess] = useState(false);
  const [logs, setLogs] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      return (window as any).growwfyEventLogs || [];
    }
    return [];
  });

  // Track live analytics event stream
  useEffect(() => {
    const handleLog = (e: any) => {
      setLogs(prev => [e.detail, ...prev].slice(0, 50));
    };
    window.addEventListener('growwfy-analytics-log', handleLog);
    return () => {
      window.removeEventListener('growwfy-analytics-log', handleLog);
    };
  }, []);

  const handleSaveAnalytics = (e: React.FormEvent) => {
    e.preventDefault();
    saveActiveConfig({
      gaMeasurementId: gaId,
      gtmId,
      metaPixelId: pixelId,
      googleAdsId,
      gadsLabels: {
        leadForm: gadsLabelLeadForm,
        whatsapp: gadsLabelWhatsApp,
        phone: gadsLabelPhone,
        consultation: gadsLabelConsultation,
        quote: gadsLabelQuote,
        contactForm: gadsLabelContact,
        newsletter: gadsLabelNewsletter
      }
    });
    // Restart dynamic script tags
    initializeTracking();
    setAnalyticsSuccess(true);
    setTimeout(() => setAnalyticsSuccess(false), 3000);
  };
  
  // Login Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPasscode, setLoginPasscode] = useState('');
  const [loginError, setLoginError] = useState('');

  // Profile Form States
  const [name, setName] = useState(data.user.name);
  const [email, setEmail] = useState(data.user.email);
  const [companyName, setCompanyName] = useState(data.user.companyName);
  const [marketingNotif, setMarketingNotif] = useState(data.user.notifications.marketing);
  const [projectNotif, setProjectNotif] = useState(data.user.notifications.projectUpdates);
  const [billingNotif, setBillingNotif] = useState(data.user.notifications.billing);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);

  const planNames = {
    none: 'No Active Subscription',
    starter: 'Starter Web & SEO Plan',
    professional: 'Professional Web & SEO Plan',
    business: 'Business Web & SEO Plan',
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateLoading(true);
    setUpdateSuccess(false);

    const success = await onUpdateProfile({
      name,
      email,
      companyName,
      notifications: {
        marketing: marketingNotif,
        projectUpdates: projectNotif,
        billing: billingNotif,
      }
    });

    setUpdateLoading(false);
    if (success) {
      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
    }
  };

  const handleCancelSub = async () => {
    if (!window.confirm('Are you sure you want to cancel your premium subscription? This will halt ongoing development milestones.')) return;
    setCancelLoading(true);
    await onCancelSubscription();
    setCancelLoading(false);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim()) {
      setLoginError('Please enter a valid email address.');
      return;
    }
    if (loginPasscode && loginPasscode.toLowerCase() !== 'growwfy' && loginPasscode !== '1234') {
      setLoginError('Incorrect passcode. Hint: Use "growwfy" to log in.');
      return;
    }
    onLoginSuccess();
  };

  const handleQuickLogin = () => {
    setLoginEmail('userismadhav@gmail.com');
    setLoginPasscode('growwfy');
    onLoginSuccess();
  };

  if (!isLoggedIn) {
    return (
      <section className="relative py-20 bg-zinc-950 min-h-screen flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto w-full max-w-md px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-md space-y-6 text-left shadow-2xl"
          >
            <div className="text-center space-y-2">
              <span className="font-display font-extrabold tracking-wider text-2xl">
                <span className="text-emerald-400">GRO</span>
                <span className="text-red-400">WW</span>
                <span className="text-blue-400">FY</span>
              </span>
              <h3 className="font-display text-xl font-bold text-white tracking-wide mt-2">
                Secure Client Portal
              </h3>
              <p className="text-sm text-zinc-300 font-semibold max-w-xs mx-auto">
                Log in to check your live development pipeline, access invoices, and update project settings.
              </p>
            </div>

            {loginError && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3.5 text-xs text-red-400 flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 animate-bounce" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 h-4 w-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="userismadhav@gmail.com"
                    value={loginEmail}
                    onChange={(e) => { setLoginEmail(e.target.value); setLoginError(''); }}
                    className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-emerald-400 pl-9 pr-3 py-2.5 text-sm font-semibold text-zinc-100 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Access Passcode</label>
                  <span className="text-[9px] font-mono text-emerald-400 lowercase tracking-wide">passcode hint: growwfy</span>
                </div>
                <div className="relative flex items-center">
                  <User className="absolute left-3 h-4 w-4 text-zinc-500" />
                  <input
                    type="password"
                    required
                    placeholder="Enter portal passcode"
                    value={loginPasscode}
                    onChange={(e) => { setLoginPasscode(e.target.value); setLoginError(''); }}
                    className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-emerald-400 pl-9 pr-3 py-2.5 text-sm font-semibold text-zinc-100 outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-black py-2.5 text-sm font-bold uppercase tracking-wider hover:opacity-95 hover:scale-[1.01] transition-all shadow-md mt-2"
              >
                Sign In to Portal
              </button>
            </form>

            <div className="relative py-2.5">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-850"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-zinc-900/40 px-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">Or Quick Test</span>
              </div>
            </div>

            <button
              onClick={handleQuickLogin}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 py-2.5 text-sm font-bold transition-colors flex items-center justify-center space-x-1.5"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Instantly Log In (Madhav)</span>
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 bg-zinc-950 min-h-screen">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Dashboard Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-900 pb-6 gap-4 text-left">
          <div className="flex items-center space-x-4">
            <img 
              src={data.user.avatarUrl} 
              alt={data.user.name} 
              className="h-14 w-14 rounded-xl border border-zinc-800 object-cover shadow-lg"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-display text-2xl font-extrabold text-white">Client Portal Workspace</h2>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-[9px] font-mono text-cyan-400 font-bold uppercase">
                  Active User
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light mt-1">
                Account holder: <span className="font-semibold text-zinc-200">{data.user.name}</span> &middot; Company: <span className="font-semibold text-zinc-200">{data.user.companyName || 'None'}</span>
              </p>
            </div>
          </div>

          {/* Subscription Action Button */}
          {data.user.activePlan === 'none' ? (
            <button
              onClick={onSelectPlanTab}
              className="flex items-center space-x-1.5 rounded-lg bg-emerald-500 text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400"
              id="dash-cta-subscribe"
            >
              <Sparkles className="h-4 w-4" />
              <span>Subscribe & Trigger Code</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 font-mono text-xs text-emerald-400 uppercase tracking-wide">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 animate-bounce"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>Project Pipeline Active</span>
            </div>
          )}
        </div>

        {/* Workspace Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Sidebar Navigation tabs */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none border-b border-zinc-900 lg:border-b-0 lg:border-r border-zinc-900 lg:pr-4">
            
            <button
              onClick={() => setActiveSubTab('project')}
              className={`flex items-center space-x-2.5 rounded-lg px-4 py-3 text-xs font-semibold shrink-0 transition-colors w-full text-left ${
                activeSubTab === 'project' 
                  ? 'bg-zinc-900 text-white border border-zinc-800' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <FolderDot className="h-4 w-4 text-cyan-400" />
              <span>Active Project Pipeline</span>
            </button>

            <button
              onClick={() => setActiveSubTab('profile')}
              className={`flex items-center space-x-2.5 rounded-lg px-4 py-3 text-xs font-semibold shrink-0 transition-colors w-full text-left ${
                activeSubTab === 'profile' 
                  ? 'bg-zinc-900 text-white border border-zinc-800' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Settings className="h-4 w-4 text-cyan-400" />
              <span>Account Settings</span>
            </button>

            <button
              onClick={() => setActiveSubTab('billing')}
              className={`flex items-center space-x-2.5 rounded-lg px-4 py-3 text-xs font-semibold shrink-0 transition-colors w-full text-left ${
                activeSubTab === 'billing' 
                  ? 'bg-zinc-900 text-white border border-zinc-800' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <CreditCard className="h-4 w-4 text-cyan-400" />
              <span>Billing & Payments</span>
            </button>

            <button
              onClick={() => setActiveSubTab('inbox')}
              className={`flex items-center space-x-2.5 rounded-lg px-4 py-3 text-xs font-semibold shrink-0 transition-colors w-full text-left ${
                activeSubTab === 'inbox' 
                  ? 'bg-zinc-900 text-white border border-zinc-800' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Inbox className="h-4 w-4 text-cyan-400" />
              <span>Submitted Inbox ({data.messages?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveSubTab('analytics')}
              className={`flex items-center space-x-2.5 rounded-lg px-4 py-3 text-xs font-semibold shrink-0 transition-colors w-full text-left ${
                activeSubTab === 'analytics' 
                  ? 'bg-zinc-900 text-white border border-zinc-800' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Activity className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span>Tracking Console</span>
            </button>

            <button
              onClick={onSignOut}
              className="flex items-center space-x-2.5 rounded-lg px-4 py-3 text-xs font-semibold shrink-0 transition-all w-full text-left text-red-400 hover:text-red-300 hover:bg-red-500/5 mt-4 border border-zinc-800/10 hover:border-red-500/20"
            >
              <ShieldAlert className="h-4 w-4 text-red-400" />
              <span>Log Out Securely</span>
            </button>

          </div>

          {/* RIGHT: Dynamic Workspace Panels */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* SUBTAB 1: LIVE MILSETONES / PROJECT PIPELINE */}
            {activeSubTab === 'project' && (
              <div className="space-y-6 text-left">
                
                {/* Notice banner if they dont have subscription */}
                {data.user.activePlan === 'none' && (
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">Project On Hold</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1">
                        We have not recorded any active subscription for this workspace. Select a plan from the <span className="font-semibold text-yellow-500 hover:underline cursor-pointer" onClick={onSelectPlanTab}>Pricing Section</span> to authorize code building, technical meta tag writing, and speed tuning.
                      </p>
                    </div>
                  </div>
                )}

                {/* Main active project board */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                      <FolderDot className="h-4.5 w-4.5 text-emerald-400" />
                      <span>Development & SEO Milestones</span>
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-1">
                      Real-time status tracking for <span className="font-semibold text-white">{planNames[data.user.activePlan]}</span> pipeline.
                    </p>
                  </div>

                  {/* Milestones Stepper Line */}
                  <div className="relative border-l-2 border-zinc-800 ml-3.5 pl-6 space-y-8 py-2">
                    {data.milestones.map((step) => {
                      const isCompleted = step.status === 'completed';
                      const isInProgress = step.status === 'in_progress';
                      
                      return (
                        <div key={step.id} className="relative">
                          {/* Circle status bullet */}
                          <div className={`absolute -left-[31px] top-0.5 rounded-full h-4 w-4 flex items-center justify-center border-2 ${
                            isCompleted 
                              ? 'bg-emerald-500 border-emerald-500 text-white shadow-[0_0_8px_rgba(16,185,129,0.3)]' 
                              : isInProgress 
                                ? 'bg-zinc-950 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.3)]' 
                                : 'bg-zinc-950 border-zinc-800'
                          }`}>
                            {isInProgress && <div className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-ping" />}
                          </div>

                          {/* Milestone Information */}
                          <div className="space-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 className="text-sm font-bold text-white tracking-wide">{step.title}</h4>
                              <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded w-fit ${
                                isCompleted 
                                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                  : isInProgress 
                                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                                    : 'bg-zinc-900 text-zinc-500 border border-zinc-800/60'
                              }`}>
                                {step.status.replace('_', ' ')}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-2xl">{step.description}</p>
                            <span className="font-mono text-[9px] text-zinc-600 block pt-1">
                              Last updated: {new Date(step.updatedAt).toLocaleDateString()} at {new Date(step.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>
            )}

            {/* SUBTAB 2: ACCOUNT PROFILE SETTINGS */}
            {activeSubTab === 'profile' && (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 text-left space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                    <User className="h-4.5 w-4.5 text-cyan-400" />
                    <span>Manage Client Workspace</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    Update your client profiles, business tags, and active email notification preferences.
                  </p>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-5">
                  {updateSuccess && (
                    <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-400 flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Workspace configuration saved securely.</span>
                    </div>
                  )}

                  {/* Profile inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* User name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Full Contact Name</label>
                      <div className="relative flex items-center">
                        <User className="absolute left-3 h-4 w-4 text-zinc-500" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-cyan-400 pl-9 pr-3 py-2.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Primary Notification Email</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3 h-4 w-4 text-zinc-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-cyan-400 pl-9 pr-3 py-2.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Business Agency / Company Name</label>
                    <div className="relative flex items-center">
                      <Building className="absolute left-3 h-4 w-4 text-zinc-500" />
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company Name"
                        className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-cyan-400 pl-9 pr-3 py-2.5 text-xs text-zinc-100 outline-none"
                      />
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="space-y-3 pt-4 border-t border-zinc-850/60">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center space-x-1.5">
                      <Bell className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Security & Transmission Notifications</span>
                    </h4>

                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 cursor-pointer text-xs font-medium text-zinc-300">
                        <input
                          type="checkbox"
                          checked={projectNotif}
                          onChange={(e) => setProjectNotif(e.target.checked)}
                          className="rounded border-zinc-800 bg-zinc-950 text-cyan-500 focus:ring-0 focus:ring-offset-0 h-4 w-4"
                        />
                        <span>Send real-time developer code updates & sitemap pings.</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer text-xs font-medium text-zinc-300">
                        <input
                          type="checkbox"
                          checked={billingNotif}
                          onChange={(e) => setBillingNotif(e.target.checked)}
                          className="rounded border-zinc-800 bg-zinc-950 text-cyan-500 focus:ring-0 focus:ring-offset-0 h-4 w-4"
                        />
                        <span>Email monthly invoice receipts and subscription triggers automatically.</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer text-xs font-medium text-zinc-300">
                        <input
                          type="checkbox"
                          checked={marketingNotif}
                          onChange={(e) => setMarketingNotif(e.target.checked)}
                          className="rounded border-zinc-800 bg-zinc-950 text-cyan-500 focus:ring-0 focus:ring-offset-0 h-4 w-4"
                        />
                        <span>Receive advanced keyword audits and SEO meta advice.</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={updateLoading}
                      className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:scale-[1.01] transition-transform disabled:opacity-50"
                    >
                      {updateLoading ? 'Saving Workspace...' : 'Save Configuration'}
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* SUBTAB 3: BILLING & PAYMENTS */}
            {activeSubTab === 'billing' && (
              <div className="space-y-6 text-left">
                
                {/* Active subscription summary card */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Plan Details</div>
                    <h3 className="font-display text-lg font-bold text-white capitalize">
                      {planNames[data.user.activePlan]}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Billing frequency: <span className="font-mono text-[10px] bg-zinc-950 px-2 py-0.5 rounded text-zinc-300 capitalize">{data.user.billingCycle}</span>
                    </p>
                  </div>

                  {data.user.activePlan !== 'none' && (
                    <button
                      onClick={handleCancelSub}
                      disabled={cancelLoading}
                      className="rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 px-3.5 py-2 text-xs font-semibold flex items-center space-x-1.5 disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>{cancelLoading ? 'Cancelling...' : 'Cancel Subscription'}</span>
                    </button>
                  )}
                </div>

                {/* Payments Receipts Table */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-white flex items-center space-x-1.5">
                      <CreditCard className="h-4 w-4 text-emerald-400" />
                      <span>Transaction & Payment History</span>
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-1">
                      Check your processed invoice payments. Every checkout logs here in real-time.
                    </p>
                  </div>

                  {data.transactions.length === 0 ? (
                    <div className="rounded-xl border border-zinc-850 bg-zinc-950 p-8 text-center text-zinc-500 text-xs font-light">
                      No invoices found. Subscribe to a plan to generate a transaction log.
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-xl border border-zinc-850">
                      <table className="w-full border-collapse text-left text-xs text-zinc-300">
                        <thead className="bg-zinc-950 text-[10px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-850">
                          <tr>
                            <th className="px-4 py-3 font-medium">Invoice ID</th>
                            <th className="px-4 py-3 font-medium">Date</th>
                            <th className="px-4 py-3 font-medium">Authorized Plan</th>
                            <th className="px-4 py-3 font-medium">Payment Source</th>
                            <th className="px-4 py-3 font-medium text-right">Amount</th>
                            <th className="px-4 py-3 font-medium text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900 bg-zinc-900/10 font-medium">
                          {data.transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-zinc-900/30 transition-colors">
                              <td className="px-4 py-3.5 font-mono text-zinc-400 text-[11px]">{tx.id}</td>
                              <td className="px-4 py-3.5 font-light text-zinc-400">
                                {new Date(tx.date).toLocaleDateString()}
                              </td>
                              <td className="px-4 py-3.5 capitalize text-zinc-200">
                                {tx.planId} Tier
                              </td>
                              <td className="px-4 py-3.5 font-light text-zinc-400">{tx.paymentMethod}</td>
                              <td className="px-4 py-3.5 text-right font-display text-white font-bold">
                                ₹{tx.amount.toLocaleString()}
                              </td>
                              <td className="px-4 py-3.5 text-center">
                                <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-400 uppercase">
                                  {tx.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>

              </div>
            )}

            {/* SUBTAB 4: CLIENT SUBMITTED INBOX MESSAGES */}
            {activeSubTab === 'inbox' && (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-6 text-left">
                <div>
                  <h3 className="font-display text-lg font-bold text-white flex items-center space-x-2">
                    <Inbox className="h-4.5 w-4.5 text-cyan-400" />
                    <span>Submitted Contacts Logs</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    This represents live form database storage. Submit inquiries on the landing page, and check them logged here immediately!
                  </p>
                </div>

                {data.messages && data.messages.length === 0 ? (
                  <div className="rounded-xl border border-zinc-850 bg-zinc-950 p-8 text-center text-zinc-500 text-xs font-light">
                    Your contact inbox is currently empty.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {data.messages?.map((msg) => (
                      <div 
                        key={msg.id}
                        className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-3 shadow-sm hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-2">
                          <div>
                            <span className="text-xs font-bold text-white block capitalize">{msg.name}</span>
                            <span className="text-[10px] font-mono text-zinc-500 tracking-wide">{msg.email} &middot; {msg.phone || 'No Phone'}</span>
                          </div>
                          <span className="rounded bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-cyan-400 uppercase h-fit">
                            {msg.status}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <h5 className="text-xs font-bold text-zinc-200 uppercase tracking-wide font-display">Subject: {msg.subject}</h5>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed">{msg.message}</p>
                        </div>

                        <div className="text-[9px] font-mono text-zinc-650 pt-1 flex justify-between items-center">
                          <span>Database ID: {msg.id}</span>
                          <span>Submitted: {new Date(msg.createdAt).toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SUBTAB 5: TRACKING & ANALYTICS CONSOLE */}
            {activeSubTab === 'analytics' && (
              <div className="space-y-6 text-left font-sans">
                
                {/* Header Information */}
                <div className="rounded-2xl border border-zinc-850 bg-zinc-900/40 p-5 sm:p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                    <Activity className="h-4.5 w-4.5 text-emerald-400 animate-pulse" />
                    <span>Growwfy Conversion Engine v1.2</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">Tracking & Analytics Console</h3>
                  <p className="text-xs text-zinc-400 font-light max-w-3xl">
                    Configure your live tracking IDs for Google Analytics 4, GTM, Meta Pixel, and Google Ads below. Change them instantly without rewriting code. The live event simulator below streams conversions in real-time.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* LEFT: Configuration Fields */}
                  <form onSubmit={handleSaveAnalytics} className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-850 pb-2">
                      Tracking Credentials
                    </h4>

                    {analyticsSuccess && (
                      <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-400 flex items-center space-x-2 animate-bounce">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>Tracking IDs and Labels saved successfully. Engine re-initialized.</span>
                      </div>
                    )}

                    <div className="space-y-3.5">
                      {/* GA4 Measurement ID */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Google Analytics 4 (GA4) Measurement ID</label>
                        <input
                          type="text"
                          value={gaId}
                          onChange={(e) => setGaId(e.target.value)}
                          placeholder="e.g. G-XXXXXXXXXX"
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-850 focus:border-cyan-400 px-3 py-2 text-xs text-zinc-100 outline-none font-mono"
                        />
                      </div>

                      {/* GTM Container ID */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Google Tag Manager (GTM) Container ID</label>
                        <input
                          type="text"
                          value={gtmId}
                          onChange={(e) => setGtmId(e.target.value)}
                          placeholder="e.g. GTM-XXXXXXX"
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-850 focus:border-cyan-400 px-3 py-2 text-xs text-zinc-100 outline-none font-mono"
                        />
                      </div>

                      {/* Meta Pixel ID */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Meta (Facebook) Pixel ID</label>
                        <input
                          type="text"
                          value={pixelId}
                          onChange={(e) => setPixelId(e.target.value)}
                          placeholder="e.g. 123456789012345"
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-850 focus:border-cyan-400 px-3 py-2 text-xs text-zinc-100 outline-none font-mono"
                        />
                      </div>

                      {/* Google Ads ID */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Google Ads ID</label>
                        <input
                          type="text"
                          value={googleAdsId}
                          onChange={(e) => setGoogleAdsId(e.target.value)}
                          placeholder="e.g. AW-XXXXXXXXXX"
                          className="w-full rounded-lg bg-zinc-950 border border-zinc-850 focus:border-cyan-400 px-3 py-2 text-xs text-zinc-100 outline-none font-mono"
                        />
                      </div>

                      {/* Google Ads Labels Header */}
                      <div className="pt-3 border-t border-zinc-850/60">
                        <h5 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2.5">Google Ads Conversion Labels Mapping</h5>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Lead form submitted */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-zinc-450 block">Lead Form Submitted</label>
                            <input
                              type="text"
                              value={gadsLabelLeadForm}
                              onChange={(e) => setGadsLabelLeadForm(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono"
                            />
                          </div>

                          {/* WhatsApp Click */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-zinc-450 block">WhatsApp Click</label>
                            <input
                              type="text"
                              value={gadsLabelWhatsApp}
                              onChange={(e) => setGadsLabelWhatsApp(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono"
                            />
                          </div>

                          {/* Phone Click */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-zinc-450 block">Phone Click</label>
                            <input
                              type="text"
                              value={gadsLabelPhone}
                              onChange={(e) => setGadsLabelPhone(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono"
                            />
                          </div>

                          {/* Book Consultation */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-zinc-450 block">Book Consultation</label>
                            <input
                              type="text"
                              value={gadsLabelConsultation}
                              onChange={(e) => setGadsLabelConsultation(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono"
                            />
                          </div>

                          {/* Quote Request */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-zinc-450 block">Quote Request</label>
                            <input
                              type="text"
                              value={gadsLabelQuote}
                              onChange={(e) => setGadsLabelQuote(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono"
                            />
                          </div>

                          {/* Contact Form */}
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono text-zinc-450 block">Contact Form</label>
                            <input
                              type="text"
                              value={gadsLabelContact}
                              onChange={(e) => setGadsLabelContact(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono"
                            />
                          </div>

                          {/* Newsletter Signup */}
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-[9px] font-mono text-zinc-450 block">Newsletter Signup</label>
                            <input
                              type="text"
                              value={gadsLabelNewsletter}
                              onChange={(e) => setGadsLabelNewsletter(e.target.value)}
                              placeholder="Label key"
                              className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-100 outline-none font-mono animate-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-black py-2.5 text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center space-x-1"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Save Config & Re-initialize</span>
                    </button>
                  </form>

                  {/* RIGHT: Live Streaming Event Simulator Terminal */}
                  <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                        <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                          </span>
                          <span>Live Conversion Stream</span>
                        </h4>
                        <button
                          onClick={() => setLogs([])}
                          className="text-[9px] text-zinc-500 font-mono hover:text-white transition"
                        >
                          Clear Logs
                        </button>
                      </div>

                      {/* Interactive sandbox triggers */}
                      <div className="space-y-2">
                        <p className="text-[10px] text-zinc-400 font-light leading-relaxed">
                          Test sandbox click simulation tags instantly:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              trackEvent('WhatsApp Click Sandbox', { text: 'WhatsApp Direct Chat' }, {
                                fbStandard: 'Contact',
                                gadsLabelKey: 'whatsapp'
                              });
                            }}
                            className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-white px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer"
                          >
                            WhatsApp Click
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              trackEvent('Quote Requested Sandbox', { value: 39900 }, {
                                fbStandard: 'Schedule',
                                gadsLabelKey: 'quote'
                              });
                            }}
                            className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-white px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer"
                          >
                            Quote Request
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              trackEvent('Consultation Booked Sandbox', { value: 79900 }, {
                                fbStandard: 'Schedule',
                                gadsLabelKey: 'consultation'
                              });
                            }}
                            className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-white px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer"
                          >
                            Book Consultation
                          </button>
                        </div>
                      </div>

                      {/* Log Container Terminal */}
                      <div className="rounded-lg border border-zinc-900 bg-zinc-950 p-3 h-[320px] overflow-y-auto font-mono text-[10px] text-zinc-400 space-y-3 scrollbar-thin">
                        {logs.length === 0 ? (
                          <div className="h-full flex flex-col items-center justify-center text-center text-zinc-600 space-y-1">
                            <Activity className="h-6 w-6 text-zinc-800" />
                            <span>Awaiting conversions...</span>
                            <span className="text-[9px]">Click buttons on the landing page, submit the contact form, or trigger sandbox actions above to view payload deliveries.</span>
                          </div>
                        ) : (
                          logs.map((log, idx) => (
                            <div key={idx} className="border-b border-zinc-900 pb-2 space-y-1">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-emerald-400">⚡ {log.eventName}</span>
                                <span className="text-[9px] text-zinc-600">{log.timestamp}</span>
                              </div>
                              <div className="text-zinc-500 text-[9px] font-light truncate">
                                Event ID: <span className="text-zinc-400 font-semibold">{log.eventId}</span>
                              </div>
                              <div className="bg-zinc-900/60 p-1.5 rounded text-[9px] text-zinc-450 whitespace-pre-wrap select-all max-h-[80px] overflow-y-auto">
                                {JSON.stringify(log.params, null, 2)}
                              </div>
                              <div className="flex flex-wrap gap-1 pt-1">
                                {gtmId && (
                                  <span className="bg-blue-500/10 text-blue-400 px-1 py-0.5 rounded text-[8px] font-mono">
                                    dataLayer.push
                                  </span>
                                )}
                                {gaId && (
                                  <span className="bg-amber-500/10 text-amber-400 px-1 py-0.5 rounded text-[8px] font-mono">
                                    gtag_event
                                  </span>
                                )}
                                {pixelId && (
                                  <span className="bg-pink-500/10 text-pink-400 px-1 py-0.5 rounded text-[8px] font-mono">
                                    pixel_{log.options?.fbStandard || 'custom'}
                                  </span>
                                )}
                                {pixelId && (
                                  <span className="bg-purple-500/10 text-purple-400 px-1 py-0.5 rounded text-[8px] font-mono">
                                    CAPI_dispatched
                                  </span>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <div className="text-[9px] text-zinc-650 font-mono pt-2 border-t border-zinc-900 flex justify-between items-center">
                      <span>Log capacity: 50 session items</span>
                      <span>Ready</span>
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
