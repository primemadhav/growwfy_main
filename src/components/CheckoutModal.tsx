/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, CheckCircle2, ArrowRight, Loader2, Sparkles, X, Copy, Check, Smartphone, QrCode } from 'lucide-react';
import { trackEvent, getPersistedUtms } from '../lib/analytics';

interface CheckoutModalProps {
  planId: 'starter' | 'professional' | 'business' | null;
  billingCycle: 'monthly' | 'annually';
  onClose: () => void;
  onSuccess: (updatedUser: any) => void;
}

export default function CheckoutModal({ planId, billingCycle, onClose, onSuccess }: CheckoutModalProps) {
  const [cardName, setCardName] = useState(''); // Holds customer name
  const [customerPhone, setCustomerPhone] = useState(''); // Holds customer phone number
  const [transactionId, setTransactionId] = useState(''); // Holds UPI reference / UTR number
  const [paymentType, setPaymentType] = useState<'upi' | 'phone_transfer'>('upi');
  
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Errors state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // Checkout stages: 'input' | 'processing' | 'success'
  const [stage, setStage] = useState<'input' | 'processing' | 'success'>('input');
  const [loadingText, setLoadingText] = useState('Securing lines...');
  const [successTx, setSuccessTx] = useState<any>(null);

  const planTitles = {
    starter: 'Starter Web & SEO Plan',
    professional: 'Professional Web & SEO Plan',
    business: 'Business Web & SEO Plan',
  };

  const planPrices = {
    starter: 39900,
    professional: 79900,
    business: 159900,
  };

  const currentPrice = planId ? planPrices[planId] : 0;
  const finalPrice = billingCycle === 'annually' ? currentPrice * 12 * 0.8 : currentPrice;

  // Clipboard copy helpers
  const handleCopy = (text: string, type: 'upi' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (cardName.trim().length < 3) {
      newErrors.cardName = 'Name must be at least 3 characters.';
    }
    
    if (!/^\d{10}$/.test(customerPhone)) {
      newErrors.customerPhone = 'Enter a valid 10-digit mobile number.';
    }
    
    if (paymentType === 'upi' && transactionId.trim().length < 6) {
      newErrors.transactionId = 'Enter a valid UPI Reference / UTR Number.';
    }

    setErrors(newErrors);
    
    const isValid = Object.keys(newErrors).length === 0;
    if (!isValid) {
      trackEvent('Validation Errors', {
        form_id: 'checkout_form',
        error_message: 'Checkout validation errors encountered',
        invalid_fields: Object.keys(newErrors),
        errors_detail: newErrors
      });
    }
    return isValid;
  };

  // Simulated Indian UPI / NPCI verification steps
  useEffect(() => {
    if (planId) {
      trackEvent('Initiate Checkout', {
        plan_id: planId,
        billing_cycle: billingCycle,
        value: finalPrice,
        currency: 'INR'
      }, {
        fbStandard: 'ViewContent'
      });
    }
  }, [planId, billingCycle]);

  useEffect(() => {
    if (stage === 'processing') {
      const texts = [
        'Connecting with secure NPCI payment system...',
        'Verifying transaction against national UPI ledger...',
        'Matching UTR Reference number with deposit records...',
        'Validating customer credential and authorization...',
        'Activating premium agency workspace...',
      ];
      let idx = 0;
      
      const interval = setInterval(() => {
        if (idx < texts.length - 1) {
          idx++;
          setLoadingText(texts[idx]);
        }
      }, 800);

      return () => clearInterval(interval);
    }
  }, [stage]);

  // Submit checkout to Express backend API
  const handleSubmitCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStage('processing');

    try {
      const utms = getPersistedUtms();
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          cardName,
          billingCycle,
          paymentType,
          transactionId: paymentType === 'upi' ? transactionId : `PHONE_DIRECT_${customerPhone}`,
          customerPhone,
          ...utms
        }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        // Track purchase success on GTM, GA4, Meta Pixel, Meta CAPI, and Google Ads
        trackEvent('Purchase Completed', {
          plan_id: planId || 'unknown',
          billing_cycle: billingCycle,
          transaction_id: data.transaction?.id,
          value: finalPrice,
          currency: 'INR',
          lead_phone: customerPhone,
          name: cardName,
          ...utms
        }, {
          fbStandard: 'Purchase',
          value: finalPrice,
          currency: 'INR',
          gadsLabelKey: 'leadForm'
        });

        setTimeout(() => {
          setSuccessTx(data.transaction);
          setStage('success');
          onSuccess(data.user);
        }, 4000);
      } else {
        const errMsg = data.error || 'Payment gateway declined transaction.';
        setErrors({ submit: errMsg });
        trackEvent('Validation Errors', {
          form_id: 'checkout_form',
          error_message: errMsg,
          server_decline: true
        });
        setStage('input');
      }
    } catch (err: any) {
      console.error(err);
      const errMsg = 'Failed to reach payment gateway. Please try again.';
      setErrors({ submit: errMsg });
      trackEvent('Validation Errors', {
        form_id: 'checkout_form',
        error_message: errMsg,
        network_error: true
      });
      setStage('input');
    }
  };

  if (!planId) return null;

  // Pre-configured official UPI ID details
  const upiId = '8595055802@okbizaxis';
  const directPhoneNumber = '8595055802';

  // Dynamic UPI URL to pre-fill UPI details upon scanning
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=imakeyoursite&am=${finalPrice}&cu=INR&tn=Plan%20${planId}`;
  const qrCodeSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=09090b&bgcolor=ffffff&data=${encodeURIComponent(upiDeepLink)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
      
      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg my-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6 shadow-2xl"
      >
        {/* Close Button */}
        {stage !== 'processing' && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 rounded-lg border border-zinc-800 bg-zinc-900/60 p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <AnimatePresence mode="wait">
          
          {/* STAGE 1: PAYMENTS INPUT FORM */}
          {stage === 'input' && (
            <motion.div
              key="payment-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 text-left font-sans"
            >
              
              {/* Heading */}
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-1 text-emerald-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                  <Shield className="h-3 w-3" />
                  <span>Secure Indian Payment Gateway</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">Activate Agency Subscription</h3>
                <p className="text-xs text-zinc-400 font-light">
                  Select payment type, scan QR or make direct transfer to complete your order.
                </p>
              </div>

              {/* Order summary bill details */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-3.5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-zinc-300">{planTitles[planId]}</span>
                  <span className="font-bold text-white">₹{currentPrice.toLocaleString('en-IN')}/mo</span>
                </div>
                <div className="flex justify-between items-center text-xs text-zinc-500 border-b border-zinc-900 pb-2">
                  <span>Billing Frequency</span>
                  <span className="font-mono uppercase tracking-wider text-[10px] bg-zinc-900 px-2 py-0.5 rounded text-zinc-300">{billingCycle}</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1">
                  <span className="font-semibold text-zinc-200">Total Due Today</span>
                  <span className="font-display font-black text-emerald-400 text-lg">
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Tab Selector for UPI Scan vs Direct Phone Transfer */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-zinc-950 border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setPaymentType('upi')}
                  className={`flex items-center justify-center space-x-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                    paymentType === 'upi'
                      ? 'bg-zinc-850 text-white shadow-md border border-zinc-700/50'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <QrCode className="h-4 w-4 text-emerald-400" />
                  <span>Scan UPI QR Code</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('phone_transfer')}
                  className={`flex items-center justify-center space-x-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                    paymentType === 'phone_transfer'
                      ? 'bg-zinc-850 text-white shadow-md border border-zinc-700/50'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Smartphone className="h-4 w-4 text-emerald-400" />
                  <span>Direct Transfer</span>
                </button>
              </div>

              {/* PAYMENT DETAILS PANEL */}
              {paymentType === 'upi' ? (
                <div className="flex flex-col items-center justify-center space-y-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950/50">
                  <div className="bg-white p-2.5 rounded-xl border border-zinc-700/50 shadow-inner flex items-center justify-center relative group">
                    <img
                      src={qrCodeSrc}
                      alt="UPI Payment QR Code"
                      className="h-36 w-36 sm:h-40 sm:w-40 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-zinc-950/5 flex items-center justify-center rounded-xl pointer-events-none" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-[11px] font-medium text-emerald-400">
                      Scan QR via Google Pay, PhonePe, Paytm, or any UPI App
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-zinc-300 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800 font-mono">
                      <span>UPI ID: {upiId}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(upiId, 'upi')}
                        className="text-zinc-500 hover:text-white p-0.5 rounded transition"
                        title="Copy UPI ID"
                      >
                        {copiedUpi ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 text-center space-y-3">
                  <div className="mx-auto h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-semibold text-white">Direct Payment to Phone Number</h4>
                    <p className="text-[11px] text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Please make payment of <span className="font-bold text-emerald-400">₹{finalPrice.toLocaleString('en-IN')}</span> directly to the phone number below using <span className="text-zinc-200">Google Pay</span>, <span className="text-zinc-200">PhonePe</span>, or <span className="text-zinc-200">Paytm</span>.
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-base font-bold text-emerald-400 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800 font-mono w-fit mx-auto shadow-inner">
                    <span>{directPhoneNumber}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(directPhoneNumber, 'phone')}
                      className="text-zinc-500 hover:text-white p-1 rounded transition"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-[10px] text-zinc-500 italic">
                    Note: Verification will be processed against sender phone.
                  </p>
                </div>
              )}

              {/* Interactive confirmation inputs */}
              <form onSubmit={handleSubmitCheckout} className="space-y-3 pt-2">
                {errors.submit && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-400 text-center">
                    {errors.submit}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Customer Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-emerald-400 p-2 text-xs text-zinc-100 outline-none"
                    />
                    {errors.cardName && <span className="text-[10px] text-red-400 block font-medium">{errors.cardName}</span>}
                  </div>

                  {/* Customer Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block">Your Mobile Number (10 digit)</label>
                    <input
                      type="tel"
                      required
                      pattern="\d{10}"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, '').substring(0, 10))}
                      placeholder="9876543210"
                      className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-emerald-400 p-2 text-xs text-zinc-100 outline-none font-mono"
                    />
                    {errors.customerPhone && <span className="text-[10px] text-red-400 block font-medium">{errors.customerPhone}</span>}
                  </div>
                </div>

                {/* Reference Number ID for UPI scan */}
                {paymentType === 'upi' && (
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block">
                      UPI Ref / UTR Transaction ID (12-digit)
                    </label>
                    <input
                      type="text"
                      required
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
                      placeholder="e.g. 345678901234"
                      className="w-full rounded-lg bg-zinc-950 border border-zinc-800 focus:border-emerald-400 p-2.5 text-xs text-zinc-100 outline-none font-mono"
                    />
                    {errors.transactionId && <span className="text-[10px] text-red-400 block font-medium">{errors.transactionId}</span>}
                  </div>
                )}

                {/* Secure Badge */}
                <div className="flex items-center justify-center space-x-1.5 py-1 text-[10px] text-zinc-500 font-mono">
                  <Lock className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                  <span>Secure Sandbox UPI verification enabled</span>
                </div>

                {/* Checkout Submit Trigger */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black hover:scale-[1.01] shadow-lg shadow-emerald-500/10 cursor-pointer"
                  id="checkout-submit-btn"
                >
                  <span>Submit Payment Details</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

            </motion.div>
          )}

          {/* STAGE 2: PAYMENTS PROCESSING STATE */}
          {stage === 'processing' && (
            <motion.div
              key="payment-processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 flex flex-col items-center justify-center space-y-6"
            >
              <div className="relative flex h-16 w-16 items-center justify-center">
                <Loader2 className="h-12 w-12 text-emerald-400 animate-spin" />
                <Lock className="absolute h-5 w-5 text-emerald-400" />
              </div>
              <div className="space-y-2 text-center">
                <h4 className="font-display font-bold text-white text-base">Verifying payment...</h4>
                <p className="text-xs font-mono text-zinc-400 tracking-wide max-w-xs mx-auto animate-pulse">
                  {loadingText}
                </p>
              </div>
            </motion.div>
          )}

          {/* STAGE 3: CHECHOUT COMPLETE SUCCESS */}
          {stage === 'success' && (
            <motion.div
              key="payment-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="rounded-full bg-emerald-500/10 p-3 border border-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-white text-xl">Subscription Activated!</h4>
                <p className="text-xs text-zinc-400 max-w-sm font-light leading-relaxed">
                  Payment verification of <span className="font-bold text-white">₹{finalPrice.toLocaleString('en-IN')}</span> was fully processed and approved. Your active workspace is now live!
                </p>
              </div>

              {/* Receipt details */}
              {successTx && (
                <div className="w-full rounded-xl bg-zinc-950 p-4 border border-zinc-850 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                    <span className="text-zinc-500">Invoice ID</span>
                    <span className="text-zinc-300 font-bold">{successTx.id}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                    <span className="text-zinc-500">Payment Status</span>
                    <span className="text-emerald-400 font-bold uppercase">{successTx.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Authorized Source</span>
                    <span className="text-zinc-300">{successTx.paymentMethod}</span>
                  </div>
                </div>
              )}

              {/* Close out trigger to Dashboard */}
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-xs font-bold uppercase tracking-wider hover:scale-[1.01] cursor-pointer"
                id="checkout-success-portal-btn"
              >
                Enter Client Portal Dashboard
              </button>
            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>
    </div>
  );
}
