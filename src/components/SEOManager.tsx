import React, { useEffect } from 'react';
import { seoLandingPages } from '../data/seoLandingPages';

interface SEOManagerProps {
  activeTab: string;
}

export default function SEOManager({ activeTab }: SEOManagerProps) {
  useEffect(() => {
    // 1. Define meta tag data maps
    let title = 'Growwfy | Web Development & SEO Agency';
    let description = 'Growwfy is a digital agency specializing in custom websites, Shopify development, SEO, and performance optimization to help businesses grow faster online.';
    let keywords = 'digital marketing agency, web development, SEO agency, google ads, meta ads, local seo, custom react websites';
    let canonical = 'https://growwfy.com';

    if (activeTab.startsWith('seo-lp-')) {
      const lpId = activeTab.replace('seo-lp-', '');
      const lpData = seoLandingPages[lpId];
      if (lpData) {
        title = lpData.metaTitle;
        description = lpData.metaDesc;
        keywords = `${lpData.primaryKeyword}, ${lpData.semanticKeywords.join(', ')}, Growwfy, Growwfy Agency, Growwfy Marketing`;
        canonical = `https://growwfy.com/services/${lpId}`;
      }
    } else {
      switch (activeTab) {
        case 'home':
          title = 'Growwfy | Web Development & SEO Agency';
          description = 'Growwfy is a digital agency specializing in custom websites, Shopify development, SEO, and performance optimization to help businesses grow faster online.';
          canonical = 'https://growwfy.com';
          break;
      case 'website-dev':
        title = 'Website Development Services | Growwfy';
        description = 'Get lightweight, blazing-fast, custom-coded React, WordPress, and E-commerce websites. 100% Google Lighthouse scores, robust security, and seamless API integrations.';
        canonical = 'https://growwfy.com/website-dev';
        break;
      case 'seo':
        title = 'Advanced Technical SEO & AEO/GEO Optimization Suite | Growwfy';
        description = 'Dominate search results in Google, Bing, and AI search engines (ChatGPT, Perplexity). Technical schema markup, Core Web Vitals optimization, and semantic authoring.';
        canonical = 'https://growwfy.com/seo';
        break;
      case 'paid-advertising':
        title = 'Performance Paid Media Marketing - Meta & Google Ads | Growwfy';
        description = 'Scalable lead generation pipelines and high-ROAS advertising campaigns. Server-side Meta Conversions API (CAPI), custom Gtag tracking, and high-conversion landing pages.';
        canonical = 'https://growwfy.com/paid-advertising';
        break;
      case 'ecommerce':
        title = 'Fast Shopify Liquid Theme & Headless E-commerce Development | Growwfy';
        description = 'Increase e-commerce checkout completions by up to 18%. Speed-optimized custom Shopify themes, server-side transactional tracking, and optimized category catalogs.';
        canonical = 'https://growwfy.com/ecommerce';
        break;
      case 'consulting':
        title = 'Technical Web Architecture & Growth Marketing Consulting | Growwfy';
        description = 'Collaborate with expert SEO engineers and web architects. Detailed site speed audits, ad account diagnostics, and bespoke digital scaling roadmaps.';
        canonical = 'https://growwfy.com/consulting';
        break;
      case 'dental':
        title = 'Dental Patient Acquisition & Local Map Pack Rankings | Growwfy';
        description = 'HIPAA-compliant, ultra-fast clinic booking websites and dominant Google Business local SEO setups built for cosmetic dentists and orthodontists.';
        canonical = 'https://growwfy.com/dental';
        break;
      case 'real-estate':
        title = 'High-Impact Real Estate Lead Capture & Web Portals | Growwfy';
        description = 'Engage property buyers with lightweight interactive showcases, robust lead intake webforms, and targeted localized Facebook advertising campaigns.';
        canonical = 'https://growwfy.com/real-estate';
        break;
      case 'saas-apps':
        title = 'High-Speed SaaS Landing Pages & User Acquisition | Growwfy';
        description = 'Ditch bloated templates. High-converting React product showcases, interactive feature maps, and precise multi-stage conversion funnel tracking.';
        canonical = 'https://growwfy.com/saas-apps';
        break;
      case 'industries':
        title = 'Tailored Digital Industry Solutions & Client Case Studies | Growwfy';
        description = 'Explore customized SEO, web development, and marketing systems built for Dental, SaaS, E-commerce, Legal, and Real Estate verticals.';
        canonical = 'https://growwfy.com/industries';
        break;
      case 'about':
        title = 'Who We Are - Our Code, Speed, and Performance Guarantees | Growwfy';
        description = "Learn about Growwfy's engineering culture. We reject bloated CMS pages for custom React frontends. Verified page-speed SLAs and direct transparent collaboration.";
        canonical = 'https://growwfy.com/about';
        break;
      case 'pricing':
        title = 'Growwfy Services Plans - Transparent Pricing | Starter, Business, Enterprise';
        description = 'Clear, competitive, upfront pricing. Save over ₹1,67,000 with annual billing plans. High-speed custom web development, Google & Meta Ads, and multi-channel technical SEO.';
        canonical = 'https://growwfy.com/pricing';
        break;
      case 'contact':
        title = 'Get in Touch - Book a Technical Website & SEO Audit | Growwfy';
        description = 'Submit your project brief to our engineers or connect with us immediately via WhatsApp for secure, instant digital solutions. Offices in New Delhi, India.';
        canonical = 'https://growwfy.com/contact';
        break;
      case 'careers':
        title = 'Join the Team - Current Openings for Developers & SEO Engineers | Growwfy';
        description = "We're looking for passionate frontend React developers, technical copywriters, and paid media experts. Apply to work at Growwfy today.";
        canonical = 'https://growwfy.com/careers';
        break;
      case 'dashboard':
        title = 'Client Workspace Portal & Project Milestones | Growwfy';
        description = 'Access your active campaign performance metrics, checkout bills, current engineering milestones, and interact directly with support.';
        canonical = 'https://growwfy.com/dashboard';
        break;
    }
    }

    // 2. Update Document Head
    document.title = title;

    // Set meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', description);

    // Set meta keywords
    let metaKeywordsEl = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsEl) {
      metaKeywordsEl = document.createElement('meta');
      metaKeywordsEl.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywordsEl);
    }
    metaKeywordsEl.setAttribute('content', keywords);

    // Set canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    // Set Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      let ogEl = document.querySelector(`meta[property="${property}"]`);
      if (!ogEl) {
        ogEl = document.createElement('meta');
        ogEl.setAttribute('property', property);
        document.head.appendChild(ogEl);
      }
      ogEl.setAttribute('content', content);
    };

    updateOgTag('og:title', title);
    updateOgTag('og:description', description);
    updateOgTag('og:url', canonical);
    updateOgTag('og:type', activeTab === 'home' ? 'website' : 'article');
    updateOgTag('og:image', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600');
    updateOgTag('og:site_name', 'Growwfy');

    // Set Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twEl = document.querySelector(`meta[name="${name}"]`);
      if (!twEl) {
        twEl = document.createElement('meta');
        twEl.setAttribute('name', name);
        document.head.appendChild(twEl);
      }
      twEl.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600');
    updateTwitterTag('twitter:site', '@growwfy');

    // 3. Assemble Rich JSON-LD Schemas dynamically
    const schemas: any[] = [];

    // Always include Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Growwfy',
      'url': 'https://growwfy.com',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://growwfy.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };
    schemas.push(websiteSchema);

    // Dynamic Image Schema
    const imageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      'url': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      'caption': title,
      'width': '600',
      'height': '400'
    };
    schemas.push(imageSchema);

    // Always include Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Growwfy',
      'alternateName': [
        'Growwfy Agency',
        'Growwfy Marketing',
        'Growwfy Digital',
        'Growwfy Digital Marketing',
        'Growwfy Technologies',
        'Growwfy Solutions',
        'Growwfy.com',
        'Growwfy.in'
      ],
      'legalName': 'Growwfy Digital Marketing',
      'description': 'Growwfy is a digital agency specializing in custom websites, Shopify development, SEO, and performance optimization to help businesses grow faster online.',
      'url': 'https://growwfy.com',
      'logo': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=120',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-8595055802',
        'contactType': 'customer support',
        'areaServed': 'Worldwide',
        'availableLanguage': ['English', 'Hindi']
      },
      'sameAs': [
        'https://facebook.com/growwfy',
        'https://instagram.com/growwfy',
        'https://linkedin.com/company/growwfy'
      ]
    };
    schemas.push(organizationSchema);

    // Always include Local Business Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Growwfy',
      'alternateName': [
        'Growwfy Agency',
        'Growwfy Marketing',
        'Growwfy Digital',
        'Growwfy Digital Marketing',
        'Growwfy Technologies',
        'Growwfy Solutions',
        'Growwfy.com',
        'Growwfy.in'
      ],
      'legalName': 'Growwfy Digital Marketing',
      'description': 'Growwfy is a specialized digital marketing agency located in New Delhi, India, delivering custom high-speed web development, advanced organic search campaigns, and conversion funnel optimizations globally.',
      'image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      '@id': 'https://growwfy.com/#organization',
      'url': 'https://growwfy.com',
      'telephone': '+91-8595055802',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rohini Sector 8',
        'addressLocality': 'New Delhi',
        'addressRegion': 'Delhi',
        'postalCode': '110085',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 28.7041,
        'longitude': 77.1025
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        'opens': '09:00',
        'closes': '21:00'
      }
    };
    schemas.push(localBusinessSchema);

    // Build breadcrumb items based on current active view
    const breadcrumbItems = [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://growwfy.com' }
    ];
    if (activeTab !== 'home') {
      const pageNamesMap: Record<string, string> = {
        'website-dev': 'Website Development',
        'seo': 'SEO Services',
        'paid-advertising': 'Paid Advertising',
        'ecommerce': 'Ecommerce Shopify',
        'consulting': 'Technical Consulting',
        'dental': 'Dental Case Studies',
        'real-estate': 'Real Estate Solutions',
        'saas-apps': 'SaaS Solutions',
        'industries': 'Industries served',
        'about': 'About Us',
        'pricing': 'Service Plans',
        'contact': 'Contact Us',
        'careers': 'Careers',
        'dashboard': 'Client Workspace'
      };
      const label = pageNamesMap[activeTab] || activeTab;
      breadcrumbItems.push({
        '@type': 'ListItem',
        'position': 2,
        'name': label,
        'item': canonical
      });
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems
    };
    schemas.push(breadcrumbSchema);

    // Render specialized FAQ schema if tab is 'seo', 'pricing', or 'home'
    if (activeTab === 'home' || activeTab === 'seo' || activeTab === 'pricing') {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Why do you build custom websites instead of using templates?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Templates are bloated with excess CSS/JS, slow down loading speeds, have poor mobile rendering, and score poorly on Google Core Web Vitals. Our custom React and lightweight PHP code loads in milliseconds, providing an automatic ranking and conversion advantage.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is AI Search Optimization (AEO/GEO)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Traditional search engines are evolving. AI clients (like ChatGPT and Perplexity) crawl the web differently. We write clear structured schemas (JSON-LD), secure authoritative digital PR placements, and publish logically structured text layouts so that LLMs can accurately parse, summarize, and recommend your services.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do you track campaign return on investment (ROI)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We configure full end-to-end custom telemetry in Google Analytics 4 (GA4) and set up server-side Meta Conversions API integrations. This allows us to track exact lead origins, conversion paths, and cost-per-acquisition values transparently.'
            }
          }
        ]
      };
      schemas.push(faqSchema);
    }

    // Render Review Schema
    const reviewSchema = {
      '@context': 'https://schema.org',
      '@type': 'Review',
      'itemReviewed': {
        '@type': 'LocalBusiness',
        'name': 'Growwfy',
        'image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
        'telephone': '+91-8595055802',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rohini Sector 8',
          'addressLocality': 'New Delhi',
          'addressCountry': 'IN'
        }
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': '5',
        'bestRating': '5'
      },
      'author': {
        '@type': 'Person',
        'name': 'Dr. Neha Sharma'
      },
      'reviewBody': 'Growwfy optimized our local search profiles and built a custom clinic booking page. Our localized incoming phone queries increased by 140% in less than 90 days.'
    };
    schemas.push(reviewSchema);

    // Inject specialized Service Schema depending on activeTab
    if (['website-dev', 'seo', 'paid-advertising', 'ecommerce', 'consulting'].includes(activeTab)) {
      const serviceSchemaMap: Record<string, string> = {
        'website-dev': 'Custom React Web Development',
        'seo': 'Search Engine & AI Discovery Optimization (AEO/GEO)',
        'paid-advertising': 'Performance Paid Advertising (Google & Meta Ads)',
        'ecommerce': 'Shopify Theme Customization & Cart Speed Optimization',
        'consulting': 'Technical Web Architecture & Speed Optimization Audit'
      };
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': serviceSchemaMap[activeTab],
        'provider': {
          '@type': 'ProfessionalService',
          'name': 'Growwfy',
          'url': 'https://growwfy.com'
        },
        'areaServed': 'Worldwide',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Growwfy Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': serviceSchemaMap[activeTab]
              },
              'priceSpecification': {
                '@type': 'PriceSpecification',
                'price': activeTab === 'website-dev' ? '19900' : '69900',
                'priceCurrency': 'INR'
              }
            }
          ]
        }
      };
      schemas.push(serviceSchema);
    }

    // Render Article Schema for SEO guide/blog
    if (activeTab === 'seo') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': 'The Technical SEO Audit Checklist for 2026 Core Web Vitals',
        'description': 'A comprehensive, engineer-grade guide to optimizing site response speeds, resolving layout shifts (CLS), and structuring semantic schemas for Google and AI engines.',
        'image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
        'datePublished': '2026-07-28T12:00:00+05:30',
        'dateModified': '2026-07-30T04:30:00+05:30',
        'author': {
          '@type': 'Person',
          'name': 'Madhav'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Growwfy',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=120'
          }
        }
      };
      schemas.push(articleSchema);
    }

    // Render Video Schema (VideoObject) if video explainer or interactive dashboard is present
    if (activeTab === 'website-dev' || activeTab === 'seo' || activeTab === 'saas-apps') {
      const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': `${title} - Full Interactive Platform Tour`,
        'description': 'Learn how we maximize speed index score, streamline Core Web Vitals, and automate leads pipeline conversion.',
        'thumbnailUrl': [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
        ],
        'uploadDate': '2026-07-29T14:30:00+05:30',
        'contentUrl': 'https://growwfy.com/assets/demo-video.mp4',
        'embedUrl': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        'duration': 'PT2M30S',
        'interactionStatistic': {
          '@type': 'InteractionCounter',
          'interactionType': { '@type': 'WriteAction' },
          'userInteractionCount': '2405'
        }
      };
      schemas.push(videoSchema);
    }

    // Render Dynamic LocalBusiness / WebPage Schema for SEO Landing Pages
    if (activeTab.startsWith('seo-lp-')) {
      const lpId = activeTab.replace('seo-lp-', '');
      const lpData = seoLandingPages[lpId];
      if (lpData) {
        const lpSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': lpData.metaTitle,
          'description': lpData.metaDesc,
          'url': `https://growwfy.com/services/${lpId}`,
          'mainEntity': {
            '@type': 'LocalBusiness',
            'name': 'Growwfy',
            'alternateName': lpData.primaryKeyword,
            'description': lpData.intro,
            'telephone': '+918595055802',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Rohini',
              'addressLocality': 'New Delhi',
              'addressRegion': 'Delhi',
              'postalCode': '110085',
              'addressCountry': 'IN'
            }
          }
        };
        schemas.push(lpSchema);
      }
    }

    // 4. Inject dynamically into <head>
    // Remove existing Growwfy schemas to prevent duplicates
    const existingScripts = document.querySelectorAll('script[data-seo="growwfy-jsonld"]');
    existingScripts.forEach(el => el.remove());

    // Inject all assembled schemas
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'growwfy-jsonld');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [activeTab]);

  return null; // This component handles DOM operations and does not render visual output itself
}
