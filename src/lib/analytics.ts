/**
 * Growwfy Enterprise Analytics & Tracking Suite
 * Handles: Google Analytics 4, Google Tag Manager, Meta Pixel, Meta Conversions API, Google Ads Conversion Tracking,
 * Enhanced Conversions, Micro-conversions, UTM Parameter persistence, and Form Analytics.
 */

import { safeLocalStorage, safeSessionStorage } from './storage';

export interface TrackingConfig {
  gaMeasurementId: string;
  gtmId: string;
  metaPixelId: string;
  googleAdsId: string;
  gadsLabels: {
    leadForm?: string;
    whatsapp?: string;
    phone?: string;
    consultation?: string;
    quote?: string;
    contactForm?: string;
    newsletter?: string;
  };
}

// Generate unique event IDs for Meta CAPI and Pixel deduplication
export function generateEventId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 7);
  return `evt_${ts}_${rand}`;
}

// Pure JS Fallback Implementation of SHA-256 for browser/iframe environments where subtle crypto is unavailable.
function sha256Fallback(ascii: string): string {
  function rightRotate(value: number, amount: number): number {
    return (value >>> amount) | (value << (32 - amount));
  }
  
  let i;
  const result: string[] = [];

  let h0 = 0x6a09e667;
  let h1 = 0xbb67ae85;
  let h2 = 0x3c6ef372;
  let h3 = 0xa54ff53a;
  let h4 = 0x510e527f;
  let h5 = 0x9b05688c;
  let h6 = 0x1f83d9ab;
  let h7 = 0x5be0cd19;

  const k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  // Padding & pre-processing
  const arr = new Uint8Array(ascii.length + 9);
  for (i = 0; i < ascii.length; i++) {
    arr[i] = ascii.charCodeAt(i);
  }
  arr[ascii.length] = 0x80;
  
  const view = new DataView(arr.buffer);
  view.setUint32(arr.length - 4, ascii.length * 8);

  // Process 512-bit chunks
  const chunkCount = arr.length / 64;
  for (let chunkIndex = 0; chunkIndex < chunkCount; chunkIndex++) {
    const w: number[] = [];
    const offset = chunkIndex * 64;
    for (i = 0; i < 16; i++) {
      w[i] = view.getUint32(offset + i * 4);
    }
    for (i = 16; i < 64; i++) {
      const s0 = rightRotate(w[i - 15], 7) ^ rightRotate(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rightRotate(w[i - 2], 17) ^ rightRotate(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }

    let [a, b, c, d, e, f, g, h] = [h0, h1, h2, h3, h4, h5, h6, h7];

    for (i = 0; i < 64; i++) {
      const S1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + k[i] + w[i]) | 0;
      const S0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) | 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;
    }

    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
    h5 = (h5 + f) | 0;
    h6 = (h6 + g) | 0;
    h7 = (h7 + h) | 0;
  }

  const hash = [h0, h1, h2, h3, h4, h5, h6, h7];
  for (i = 0; i < 8; i++) {
    const hex = (hash[i] >>> 0).toString(16).padStart(8, '0');
    result.push(hex);
  }

  return result.join('');
}

// Secure cryptographic SHA-256 hashing helper for Google Enhanced Conversions
export async function secureHash(message: string): Promise<string> {
  const cleanMessage = message.trim().toLowerCase();
  try {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      const msgUint8 = new TextEncoder().encode(cleanMessage);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {
    console.warn('[Analytics] Subtle crypto digest failed, falling back to pure-JS hash:', e);
  }
  return sha256Fallback(cleanMessage);
}

// Capture and Persist UTM Parameters
export function captureAndPersistUtms(): void {
  if (typeof window === 'undefined') return;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    let captured = false;

    utmKeys.forEach(key => {
      const val = urlParams.get(key);
      if (val) {
        safeSessionStorage.setItem(`growwfy_${key}`, val);
        captured = true;
      }
    });

    if (captured) {
      console.log('[Growwfy Analytics] UTM Parameters Captured & Persisted:', getPersistedUtms());
    }
  } catch (e) {
    console.error('Failed to capture UTM params:', e);
  }
}

// Get Persisted UTM parameters as key-value pairs
export function getPersistedUtms(): Record<string, string> {
  const utms: Record<string, string> = {};
  if (typeof window === 'undefined') return utms;
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  utmKeys.forEach(key => {
    const val = safeSessionStorage.getItem(`growwfy_${key}`);
    if (val) {
      utms[key] = val;
    }
  });
  return utms;
}

// Default tracking configuration from environment variables
const DEFAULT_CONFIG: TrackingConfig = {
  gaMeasurementId: ((import.meta as any).env?.VITE_GA4_MEASUREMENT_ID as string) || '',
  gtmId: ((import.meta as any).env?.VITE_GTM_ID as string) || '',
  metaPixelId: ((import.meta as any).env?.VITE_META_PIXEL_ID as string) || '',
  googleAdsId: ((import.meta as any).env?.VITE_GOOGLE_ADS_CONVERSION_ID as string) || '',
  gadsLabels: {
    leadForm: ((import.meta as any).env?.VITE_GADS_LABEL_LEAD_FORM as string) || '',
    whatsapp: ((import.meta as any).env?.VITE_GADS_LABEL_WHATSAPP as string) || '',
    phone: ((import.meta as any).env?.VITE_GADS_LABEL_PHONE as string) || '',
    consultation: ((import.meta as any).env?.VITE_GADS_LABEL_CONSULTATION as string) || '',
    quote: ((import.meta as any).env?.VITE_GADS_LABEL_QUOTE as string) || '',
    contactForm: ((import.meta as any).env?.VITE_GADS_LABEL_CONTACT as string) || '',
    newsletter: ((import.meta as any).env?.VITE_GADS_LABEL_NEWSLETTER as string) || '',
  }
};

const STORAGE_KEY = 'growwfy_analytics_config';

/**
 * Get active tracking configuration, preferring user overrides from localStorage
 */
export function getActiveConfig(): TrackingConfig {
  try {
    const saved = safeLocalStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_CONFIG,
        ...parsed,
        gadsLabels: {
          ...DEFAULT_CONFIG.gadsLabels,
          ...(parsed.gadsLabels || {})
        }
      };
    }
  } catch (e) {
    console.error('Failed to parse saved analytics config:', e);
  }
  return DEFAULT_CONFIG;
}

/**
 * Save custom configuration to local storage (for runtime testing via Client Dashboard)
 */
export function saveActiveConfig(config: Partial<TrackingConfig>): void {
  try {
    const current = getActiveConfig();
    const updated = {
      ...current,
      ...config,
      gadsLabels: {
        ...current.gadsLabels,
        ...(config.gadsLabels || {})
      }
    };
    safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    console.log('Growwfy Tracking Config Updated dynamically:', updated);
  } catch (e) {
    console.error('Failed to save analytics config:', e);
  }
}


/**
 * Dynamically inject scripts for GA4, GTM, and Meta Pixel if IDs are configured
 */
export function initializeTracking(): void {
  if (typeof window === 'undefined') return;
  const config = getActiveConfig();
  const w = window as any;

  // Initialize DataLayer for Google Tag Manager
  w.dataLayer = w.dataLayer || [];

  // Capture UTM parameters
  captureAndPersistUtms();

  // --- 1. Google Analytics 4 (gtag.js) ---
  if (config.gaMeasurementId && !document.getElementById('growwfy-ga-script')) {
    const gaScript = document.createElement('script');
    gaScript.id = 'growwfy-ga-script';
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`;
    document.head.appendChild(gaScript);

    w.gtag = function () {
      w.dataLayer.push(arguments);
    };
    w.gtag('js', new Date());
    w.gtag('config', config.gaMeasurementId, {
      send_page_view: false, // Handled manually on route changes
      cookie_flags: 'max-age=7200;Secure;SameSite=None'
    });
    console.log(`[Growwfy Tracking] GA4 initialized with ID: ${config.gaMeasurementId}`);
  }

  // --- 2. Google Tag Manager (gtm.js) ---
  if (config.gtmId && !document.getElementById('growwfy-gtm-script')) {
    const gtmScript = document.createElement('script');
    gtmScript.id = 'growwfy-gtm-script';
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${config.gtmId}');`;
    document.head.appendChild(gtmScript);
    console.log(`[Growwfy Tracking] GTM initialized with ID: ${config.gtmId}`);
  }

  // --- 3. Meta Pixel (fbevents.js) ---
  if (config.metaPixelId && !document.getElementById('growwfy-pixel-script')) {
    if (!w.fbq) {
      w.fbq = function (...args: any[]) {
        w.fbq.callMethod ? w.fbq.callMethod.apply(w.fbq, args) : w.fbq.queue.push(args);
      };
      if (!w._fbq) w._fbq = w.fbq;
      w.fbq.push = w.fbq;
      w.fbq.loaded = true;
      w.fbq.version = '2.0';
      w.fbq.queue = [];

      const pixelScript = document.createElement('script');
      pixelScript.id = 'growwfy-pixel-script';
      pixelScript.async = true;
      pixelScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(pixelScript);
    }

    w.fbq('init', config.metaPixelId);
    w.fbq('track', 'PageView');
    console.log(`[Growwfy Tracking] Meta Pixel initialized with ID: ${config.metaPixelId}`);
  }

  // --- 4. Google Ads Setup (via gtag) ---
  if (config.googleAdsId && !w.gtag) {
    const gadsScript = document.createElement('script');
    gadsScript.id = 'growwfy-gads-script';
    gadsScript.async = true;
    gadsScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAdsId}`;
    document.head.appendChild(gadsScript);

    w.gtag = function () {
      w.dataLayer.push(arguments);
    };
    w.gtag('js', new Date());
    console.log(`[Growwfy Tracking] Google Ads script loaded with ID: ${config.googleAdsId}`);
  }

  // Hook up automated scroll depth tracking and click-listeners
  setupAutomatedAnalytics();
}

/**
 * Core event tracking engine. Orchestrates pushes to GTM, GA4, Meta Pixel, Google Ads, and Meta CAPI.
 * Auto-resolves secure user-hashing for Enhanced Conversions.
 */
export async function trackEvent(
  eventName: string,
  params: Record<string, any> = {},
  options: {
    ga?: boolean;
    gtm?: boolean;
    fb?: boolean;
    fbStandard?: 'PageView' | 'ViewContent' | 'Lead' | 'Contact' | 'CompleteRegistration' | 'SubmitApplication' | 'Schedule' | 'Purchase';
    gadsLabelKey?: keyof TrackingConfig['gadsLabels'];
    currency?: string;
    value?: number;
  } = {}
) {
  if (typeof window === 'undefined') return;
  const config = getActiveConfig();
  const w = window as any;
  const eventId = generateEventId();

  // Combine params with active UTMs
  const utms = getPersistedUtms();
  const enrichedParams: Record<string, any> = {
    ...utms,
    ...params,
    event_id: eventId,
    timestamp: Date.now(),
    url: window.location.href,
    path: window.location.pathname
  };

  // Securely Hash Customer Info client-side for Google Enhanced Conversions if present in raw form
  const rawEmail = params.lead_email || params.email || params.email_address || '';
  const rawPhone = params.lead_phone || params.phone || params.phone_number || '';
  const rawName = params.name || params.cardName || '';

  let hashedEmail = '';
  let hashedPhone = '';
  let hashedFirstName = '';
  let hashedLastName = '';

  if (rawEmail) {
    hashedEmail = await secureHash(rawEmail);
  }
  if (rawPhone) {
    const cleanPhone = rawPhone.replace(/\D/g, '');
    hashedPhone = await secureHash(cleanPhone);
  }
  if (rawName) {
    const nameParts = rawName.trim().split(/\s+/);
    if (nameParts.length > 0) {
      hashedFirstName = await secureHash(nameParts[0]);
    }
    if (nameParts.length > 1) {
      hashedLastName = await secureHash(nameParts.slice(1).join(' '));
    }
  }

  // Feed Google Enhanced Conversions (user_data object format) prior to conversion fire
  if (w.gtag && (hashedEmail || hashedPhone || hashedFirstName || hashedLastName)) {
    const userDataPayload: Record<string, any> = {};
    if (hashedEmail) userDataPayload.sha256_email_address = hashedEmail;
    if (hashedPhone) userDataPayload.sha256_phone_number = hashedPhone;
    if (hashedFirstName || hashedLastName) {
      userDataPayload.address = {};
      if (hashedFirstName) userDataPayload.address.sha256_first_name = hashedFirstName;
      if (hashedLastName) userDataPayload.address.sha256_last_name = hashedLastName;
    }
    w.gtag('set', 'user_data', userDataPayload);
    
    // Save to enriched parameters for transparency/GTM debugging
    enrichedParams.enhanced_conversions = {
      hashed_email: hashedEmail || undefined,
      hashed_phone: hashedPhone || undefined,
      hashed_first_name: hashedFirstName || undefined,
      hashed_last_name: hashedLastName || undefined
    };
  }

  console.log(`[Growwfy Analytics] Tracking Event: "${eventName}"`, enrichedParams, options);

  // Save event log on window for real-time visualization console
  w.growwfyEventLogs = w.growwfyEventLogs || [];
  const newLog = {
    eventName,
    eventId,
    params: enrichedParams,
    options,
    timestamp: new Date().toLocaleTimeString()
  };
  w.growwfyEventLogs.unshift(newLog);
  if (w.growwfyEventLogs.length > 50) {
    w.growwfyEventLogs.pop();
  }
  window.dispatchEvent(new CustomEvent('growwfy-analytics-log', { detail: newLog }));

  // 1. Push to Google Tag Manager Data Layer
  if (options.gtm !== false && w.dataLayer) {
    w.dataLayer.push({
      event: eventName,
      eventId: eventId,
      ...enrichedParams
    });
  }

  // 2. Track on Google Analytics 4
  if (options.ga !== false && w.gtag && config.gaMeasurementId) {
    w.gtag('event', eventName, enrichedParams);
  }

  // 3. Track on Meta Pixel (Browser-side)
  if (options.fb !== false && w.fbq && config.metaPixelId) {
    const fbPayload: Record<string, any> = {
      content_name: eventName,
      value: options.value,
      currency: options.currency || 'INR',
      ...params
    };
    if (hashedEmail) fbPayload.em = hashedEmail;
    if (hashedPhone) fbPayload.ph = hashedPhone;

    if (options.fbStandard) {
      w.fbq('track', options.fbStandard, fbPayload, { eventID: eventId });
    } else {
      w.fbq('trackCustom', eventName, fbPayload, { eventID: eventId });
    }
  }

  // 4. Send to Google Ads conversion tracker
  if (config.googleAdsId && options.gadsLabelKey) {
    const label = config.gadsLabels[options.gadsLabelKey];
    if (label && w.gtag) {
      w.gtag('event', 'conversion', {
        send_to: `${config.googleAdsId}/${label}`,
        value: options.value || 0,
        currency: options.currency || 'INR',
        transaction_id: eventId
      });
      console.log(`[Growwfy Tracking] Google Ads conversion sent to label: ${label}`);
    }
  }

  // 5. Proxy to Meta Conversions API (Server-side deduplicated payload)
  if (config.metaPixelId) {
    try {
      fetch('/api/tracking/meta-capi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pixelId: config.metaPixelId,
          eventName: options.fbStandard || eventName,
          eventId: eventId,
          eventUrl: window.location.href,
          userAgent: navigator.userAgent,
          customData: {
            value: options.value,
            currency: options.currency || 'INR',
            ...params
          },
          userData: {
            em: hashedEmail || undefined,
            ph: hashedPhone || undefined,
            fn: hashedFirstName || undefined,
            ln: hashedLastName || undefined
          }
        })
      }).then(res => {
        if (!res.ok) console.warn('[Meta CAPI] Proxy warning:', res.statusText);
      }).catch(err => {
        console.warn('[Meta CAPI] Endpoint offline or blocked:', err.message);
      });
    } catch (e) {
      // Gracefully capture network errors without breaking user actions
    }
  }
}

/**
 * Automate scroll-depth, outbound clicks, button clicks, email, phone, whatsapp, CTAs, navigation, and file download listeners
 */
let automatedAnalyticsSetup = false;
function setupAutomatedAnalytics(): void {
  if (automatedAnalyticsSetup) return;
  automatedAnalyticsSetup = true;

  // 1. Scroll Depth tracking (25%, 50%, 75%, 100%)
  const recordedScrolls = new Set<number>();
  const handleScroll = () => {
    try {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      const limit = (h[sh] || b[sh]) - h.clientHeight;
      if (limit <= 0) return;
      const percent = Math.round(((h[st] || b[st]) / limit) * 100);

      const checkThresholds = [25, 50, 75, 100];
      for (const threshold of checkThresholds) {
        if (percent >= threshold && !recordedScrolls.has(threshold)) {
          recordedScrolls.add(threshold);
          trackEvent('Scroll Depth', {
            depth_percent: threshold,
            category: 'Engagement'
          });
        }
      }
    } catch (e) {
      // Quietly handle scroll errors
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 2. Session Heartbeat & Time on Page
  const startTime = Date.now();
  const sessionHeartbeat = setInterval(() => {
    try {
      const durationSec = Math.round((Date.now() - startTime) / 1000);
      trackEvent('Session Duration Pulse', {
        duration_seconds: durationSec,
        category: 'Engagement'
      }, { fb: false }); // Don't spam Meta with heartbeats
      
      trackEvent('Time on Page', {
        duration_seconds: durationSec,
        category: 'Engagement'
      }, { fb: false });
    } catch (e) {}
  }, 30000);

  // Ensure timer is cleaned up if window unloads
  window.addEventListener('beforeunload', () => {
    try {
      clearInterval(sessionHeartbeat);
      const durationSec = Math.round((Date.now() - startTime) / 1000);
      trackEvent('Session Final Duration', {
        duration_seconds: durationSec,
        category: 'Engagement'
      }, { ga: true, gtm: true, fb: false });
    } catch (e) {}
  });

  // 3. Delegate Click Handlers for interactive link, buttons, WhatsApp, Phone, downloads, and navigation elements
  document.addEventListener('click', (e) => {
    try {
      const target = e.target as HTMLElement;
      if (!target) return;
      const anchor = target.closest('a');
      const button = target.closest('button');

      // Handle Anchor Clicks
      if (anchor) {
        const href = anchor.getAttribute('href') || '';
        const text = anchor.innerText ? anchor.innerText.trim() : '';

        // Contextual Classifications
        const isHeaderNav = anchor.closest('header') || anchor.closest('nav') || anchor.closest('.nav-menu');
        const isHeroClick = anchor.closest('#hero') || anchor.closest('.hero');
        const isFooterClick = anchor.closest('footer') || anchor.closest('.footer');
        const isPortfolioClick = anchor.closest('#portfolio') || anchor.closest('.portfolio') || href.includes('/portfolio');
        const isPricingClick = anchor.closest('#pricing') || anchor.closest('.pricing') || href.includes('/pricing');
        const isServiceClick = anchor.closest('#services') || anchor.closest('.services') || href.includes('/services');

        if (isHeaderNav) {
          trackEvent('Menu Click', { nav_item: text, href });
        }
        if (isHeroClick) {
          trackEvent('Hero Button Click', { button_text: text, href });
        }
        if (isFooterClick) {
          trackEvent('Footer Button Click', { button_text: text, href });
        }
        if (isPortfolioClick) {
          trackEvent('Portfolio Click', { project_item: text, href });
        }
        if (isPricingClick) {
          trackEvent('Pricing Click', { plan_item: text, href });
        }
        if (isServiceClick) {
          trackEvent('Service Click', { service_name: text, href });
        }

        // Check for Outbound Link Click
        if (href.startsWith('http') && !href.includes(window.location.hostname)) {
          trackEvent('Outbound Link Click', {
            destination_url: href,
            link_text: text
          });
        }

        // Check for WhatsApp Link Click
        if (href.includes('wa.me') || href.includes('whatsapp.com')) {
          trackEvent('WhatsApp Click', {
            phone_number: href,
            link_text: text
          }, {
            fbStandard: 'Contact',
            gadsLabelKey: 'whatsapp'
          });
        }

        // Check for Phone Link Click
        if (href.startsWith('tel:')) {
          trackEvent('Phone Click', {
            phone_number: href,
            link_text: text
          }, {
            fbStandard: 'Contact',
            gadsLabelKey: 'phone'
          });
        }

        // Check for Email Link Click
        if (href.startsWith('mailto:')) {
          trackEvent('Email Click', {
            email_address: href,
            link_text: text
          });
        }

        // Check for Google Maps Click
        if (href.includes('google.com/maps') || href.includes('maps.google') || href.includes('maps.app.goo')) {
          trackEvent('Google Maps Click', {
            maps_url: href,
            link_text: text
          });
        }

        // Check for file download (e.g. .pdf, .zip, .png, .txt)
        const downloadRegex = /\.(zip|pdf|txt|docx|png|xlsx|csv|pptx)$/i;
        if (downloadRegex.test(href)) {
          trackEvent('File Download', {
            file_url: href,
            file_name: href.split('/').pop() || 'Unknown'
          });
        }
      }

      // Handle Button Clicks
      if (button) {
        const text = button.innerText ? button.innerText.trim() : '';
        const id = button.getAttribute('id') || '';
        
        // Check for common FAQ togglers
        const isFaqClick = button.closest('.faq-item') || button.closest('.faq') || text.includes('?') || id.includes('faq');
        if (isFaqClick) {
          trackEvent('FAQ Expand', { question: text, button_id: id });
        }

        const isCta = button.classList && (
          button.classList.contains('bg-gradient-to-r') || 
          button.classList.contains('bg-emerald-500') || 
          button.classList.contains('bg-[#2563eb]') ||
          id.includes('cta')
        );

        trackEvent('Button Click', {
          button_text: text,
          button_id: id,
          is_cta: isCta
        });

        // Contextual Classifications
        const isHeroClick = button.closest('#hero') || button.closest('.hero');
        const isFooterClick = button.closest('footer') || button.closest('.footer');
        const isPortfolioClick = button.closest('#portfolio') || button.closest('.portfolio');
        const isPricingClick = button.closest('#pricing') || button.closest('.pricing') || text.toLowerCase().includes('plan') || text.toLowerCase().includes('buy') || text.toLowerCase().includes('pricing');
        const isServiceClick = button.closest('#services') || button.closest('.services');

        if (isHeroClick) {
          trackEvent('Hero Button Click', { button_text: text, button_id: id });
        }
        if (isFooterClick) {
          trackEvent('Footer Button Click', { button_text: text, button_id: id });
        }
        if (isPortfolioClick) {
          trackEvent('Portfolio Click', { button_text: text, button_id: id });
        }
        if (isPricingClick) {
          trackEvent('Pricing Click', { plan_item: text, button_id: id });
        }
        if (isServiceClick) {
          trackEvent('Service Click', { button_text: text, button_id: id });
        }

        if (isCta) {
          trackEvent('CTA Button Click', {
            button_text: text,
            button_id: id
          }, {
            fbStandard: 'ViewContent'
          });
        }
      }
    } catch (err) {
      // Quietly ignore click tracking errors
    }
  });

  // 4. Video plays tracking
  try {
    document.querySelectorAll('video').forEach(video => {
      video.addEventListener('play', () => {
        trackEvent('Video Play', {
          video_src: video.currentSrc || video.src,
          category: 'Media'
        });
      });
    });
  } catch (err) {}

  // 5. Automated Form Fields focus, focusin, and Form Started
  try {
    document.addEventListener('focusin', (e) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        const inputEl = target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        const form = inputEl.closest('form');
        const formId = form ? (form.id || form.name || 'unnamed_form') : 'no_form';
        const fieldName = inputEl.name || (inputEl as any).placeholder || inputEl.id || 'unnamed_field';

        trackEvent('Field Focus', {
          form_id: formId,
          field_name: fieldName,
          field_type: inputEl.type || inputEl.tagName.toLowerCase()
        });

        if (form) {
          const formStartedKey = `growwfy_form_started_${formId}`;
          if (!safeSessionStorage.getItem(formStartedKey)) {
            safeSessionStorage.setItem(formStartedKey, 'true');
            trackEvent('Form Started', {
              form_id: formId,
              form_name: form.name || formId,
              started_field: fieldName
            });
          }
        }
      }
    });
  } catch (err) {}
}
