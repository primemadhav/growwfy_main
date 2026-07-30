/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { trackEvent, getPersistedUtms } from '../lib/analytics';

interface ContactFormProps {
  prefilledSubject?: string;
  prefilledMessage?: string;
}

export default function ContactForm({ prefilledSubject, prefilledMessage }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Agency Inquiry');
  const [message, setMessage] = useState('');
  const [formStarted, setFormStarted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(prefilledSubject);
    }
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledSubject, prefilledMessage]);

  // Track Form View on mount
  useEffect(() => {
    trackEvent('Form View', {
      form_id: 'contact_form',
      form_name: 'Growwfy Contact Form'
    });
  }, []);

  const handleFieldChange = (field: string, val: string, setter: (v: string) => void) => {
    setter(val);
    if (!formStarted && val.trim().length > 0) {
      setFormStarted(true);
      trackEvent('Form Start', {
        form_id: 'contact_form',
        form_name: 'Growwfy Contact Form',
        started_field: field
      });
    }
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!name || !email || !subject || !message) {
      const errMsg = 'Please fill out all required fields.';
      setError(errMsg);
      setLoading(false);
      trackEvent('Validation Errors', {
        form_id: 'contact_form',
        error_message: errMsg,
        missing_fields: [
          !name ? 'name' : null,
          !email ? 'email' : null,
          !subject ? 'subject' : null,
          !message ? 'message' : null,
        ].filter(Boolean)
      });
      return;
    }

    try {
      const utms = getPersistedUtms();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message, ...utms }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormStarted(false); // Reset tracking state

        // Track successful Form Submission with UTM and raw customer data
        trackEvent('Form Submission', {
          form_id: 'contact_form',
          form_name: 'Growwfy Contact Form',
          subject: subject,
          lead_email: email,
          lead_phone: phone,
          name: name,
          ...utms
        }, {
          fbStandard: 'Lead',
          gadsLabelKey: 'contactForm'
        });
        
        // Clear inputs
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const errMsg = data.error || 'Failed to submit contact request.';
        setError(errMsg);
        trackEvent('Validation Errors', {
          form_id: 'contact_form',
          error_message: errMsg,
          server_decline: true
        });
      }
    } catch (err: any) {
      console.error(err);
      const errMsg = 'Server unreachable. Please try again.';
      setError(errMsg);
      trackEvent('Validation Errors', {
        form_id: 'contact_form',
        error_message: errMsg,
        network_error: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 text-zinc-900 dark:text-zinc-100 stitch-dots-bg">
      
      {/* Visual glowing overlay with Stitch animations */}
      <div className="absolute top-1/2 right-10 h-[250px] w-[250px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-stitch-blob-2" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Contact Copy & Card details */}
          <div className="lg:col-span-5 space-y-5 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-semibold">
                <MessageSquare className="h-2.5 w-2.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-display text-2xl font-medium text-zinc-900 dark:text-white sm:text-3xl leading-tight">
                Let's Build Something <span className="italic font-normal text-emerald-500 dark:text-emerald-400">Together</span>
              </h2>
              <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Share your goals, and let's build your roadmap.
              </p>
            </div>

            {/* Quick contact methods cards */}
            <div className="space-y-3 pt-1">
              
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 text-emerald-500 dark:text-emerald-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase leading-none mb-0.5">Direct Email</div>
                  <a href="mailto:growwfy@gmail.com" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 dark:hover:text-emerald-400">
                    growwfy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 text-emerald-500 dark:text-emerald-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase leading-none mb-0.5">Direct Hotline</div>
                  <a href="tel:+918595055802" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 dark:hover:text-emerald-400">
                    +91 8595055802
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 text-emerald-500 dark:text-emerald-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase leading-none mb-0.5">Headquarters</div>
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    New Delhi, India
                  </span>
                </div>
              </div>

            </div>

            {/* Subtle disclaimer */}
            <div className="text-[9px] text-zinc-500 font-mono">
              &copy; 2026 Growwfy. All systems secure.
            </div>
          </div>

          {/* Actual Contact Form Box */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-sm text-left relative overflow-hidden">
              <AnimatePresence mode="wait">
                
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="rounded-full bg-emerald-500/10 p-2 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-zinc-900 dark:text-white text-base">Message Sent Successfully!</h3>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto font-light leading-relaxed">
                        Thank you for reaching out. We have received your inquiry and our team will connect with you soon.
                      </p>
                    </div>
                    <button
                      onClick={() => setSuccess(false)}
                      className="rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 text-zinc-800 dark:text-zinc-200 px-3.5 py-1.5 text-[11px] font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3.5"
                  >
                    
                    {error && (
                      <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2.5 text-xs text-red-500 dark:text-red-400 flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => handleFieldChange('name', e.target.value, setName)}
                          placeholder="x"
                          className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-400 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => handleFieldChange('email', e.target.value, setEmail)}
                          placeholder="yourgmail@gmail.com"
                          className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-400 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => handleFieldChange('phone', e.target.value, setPhone)}
                          placeholder="+91 XXXXXXXXXX"
                          className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-400 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 outline-none transition-colors"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">Campaign Subject *</label>
                        <select
                          required
                          value={subject}
                          onChange={(e) => handleFieldChange('subject', e.target.value, setSubject)}
                          className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-400 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-colors"
                        >
                          <option value="General Agency Inquiry" className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">General Agency Inquiry</option>
                          <option value="Website Development" className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">Website Development</option>
                          <option value="Advanced SEO Meta Tag Audit" className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">Advanced SEO Meta Tag Audit</option>
                          <option value="Paid Advertising" className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">Paid Advertising</option>
                          <option value="Career Application" className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">Career Application / Join Core Team</option>
                          {subject && !["General Agency Inquiry", "Website Development", "Advanced SEO Meta Tag Audit", "Paid Advertising", "Career Application"].includes(subject) && (
                            <option value={subject} className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">{subject}</option>
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">Message Details *</label>
                      <textarea
                        required
                        rows={3}
                        value={message}
                        onChange={(e) => handleFieldChange('message', e.target.value, setMessage)}
                        placeholder="Detail your requirements (e.g., brand guidelines, preferred layout reference sites, or specific meta-tag keywords)..."
                        className="w-full rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-400 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <GradientButton
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:scale-[1.01] shadow-md shadow-purple-500/5 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all cursor-pointer"
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <>
                          <Send className="h-3.5 w-3.5 animate-ping text-white" />
                          <span className="text-white">Logging Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5 text-white" />
                          <span className="text-white">Send Message</span>
                        </>
                      )}
                    </GradientButton>

                  </motion.form>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
