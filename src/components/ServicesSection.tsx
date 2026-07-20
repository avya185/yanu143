import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../data';
import { Globe, MessageSquare, Palette, Cpu, PenTool, Briefcase, CheckCircle, Calendar, ArrowRight, Layers, FileText, Sparkles, Plus, Minus, Check, Calculator, ShoppingCart, Percent, Clock, AlertCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'motion/react';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
<<<<<<< HEAD
import { cardFadeUpScale, cardViewport, useCardTransition } from '../utils/animations';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
import { createPortal } from 'react-dom';
import { div } from 'motion/react-client';

const getCategoryImage = (label: string) => {
  switch (label) {
    case "Website Development":
      return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80";
    case "Chatbot Development":
      return "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80";
    case "Graphics & Design":
      return "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80";
    case "AI & Automation":
      return "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80";
    case "Writing & Translation":
      return "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80";
    case "Other":
    default:
      return "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80";
  }
};

interface ServicesSectionProps {
  theme: 'light' | 'dark';
  onViewChange: (view: string) => void;
  onPreSelectSubService: (subSvcName: string, mainSvcName: string, customBudget?: string, notes?: string) => void;
  initialCategoryLabel?: string | null;
}

interface EstimatorItem {
  id: string;
  label: string;
  category: string;
  price: number;
  timelineDays: number;
  shortDesc: string;
}

const ESTIMATOR_ITEMS: EstimatorItem[] = [
  { id: "wp_site", label: "WordPress Business Site", category: "Website Development", price: 7999, timelineDays: 14, shortDesc: "Professional layout, essential security plugins, lead contact form & custom walkthrough training." },
  { id: "ecom_store", label: "E-commerce Storefront", category: "Website Development", price: 14999, timelineDays: 28, shortDesc: "Complete checkout flow, Razorpay gateway, shipping tax configuration & cataloging setup." },
  { id: "landing_page", label: "Responsive Landing Page", category: "Website Development", price: 4999, timelineDays: 7, shortDesc: "Single pixel-perfect page centered on a strong CTA, optimized for Google/Meta ads." },
  { id: "custom_app", label: "Custom App / SaaS Portal", category: "Website Development", price: 29999, timelineDays: 45, shortDesc: "Tailored full-stack React layout with Express server, users auth, and secure database integrations." },
  { id: "wp_bot", label: "WhatsApp Official Bot", category: "Chatbot Development", price: 7999, timelineDays: 14, shortDesc: "Official Meta Sandbox sandbox, automation keyword menus & static document dispatcher." },
  { id: "ai_bot", label: "AI RAG Cognitive Agent", category: "Chatbot Development", price: 14999, timelineDays: 21, shortDesc: "Semantic chatbot responder trained on custom company knowledge manuals via Gemini API integration." },
  { id: "logo_design", label: "Logo & Theme Assets Kit", category: "Graphics & Design", price: 999, timelineDays: 5, shortDesc: "Custom high-contrast vector concepts, selected typography pair & visual brand boards." },
  { id: "figma_screens", label: "Figma UI/UX Screens Kit", category: "Graphics & Design", price: 6999, timelineDays: 10, shortDesc: "Interactive design mockups with customized layout framework, shared in editable cloud link." },
  { id: "n8n_pipeline", label: "Make / n8n Automation Work", category: "AI & Automation", price: 9999, timelineDays: 14, shortDesc: "Triggers connecting hubspot CRM workflows, sheets trackers & automate messaging loops." },
  { id: "seo_blogs", label: "10 High-Authority Blog Pack", category: "Writing & Translation", price: 14999, timelineDays: 14, shortDesc: "SEO researched copy files with structured keywords layout built to drive organic crawl traffic." },
  { id: "technical_seo", label: "Server Speed & Cloud Audit", category: "Other", price: 3999, timelineDays: 7, shortDesc: "Accelerate site to 90+ mobile index score & configure custom Cloudflare security shielding." },
];

// ---------------------------------------------------------------------------
// PRICING TIER CONTENT DERIVATION
// Each sub-service in data.ts only carries one set of deliverables/tech/timeline.
// This derives Basic / Standard / Premium variants from that base data so the
// "Technical Deliverables" panel can change when a pricing tier button is clicked.
// Standard always mirrors the sub-service's original authored data untouched.
// ---------------------------------------------------------------------------
type PriceTier = 'basic' | 'standard' | 'premium';

const PREMIUM_DELIVERABLE_ADDONS = [
  'Priority support & dedicated project coordinator',
  'Performance & Core Web Vitals optimization pass',
  '30-day post-launch monitoring & support window',
  'Advanced analytics & conversion tracking setup',
];

const PREMIUM_TECH_ADDONS = ['Priority Support Suite', 'Advanced Monitoring & Alerts'];

const parseTimelineRange = (timelineStr?: string): [number, number] => {
  if (!timelineStr) return [7, 14];
  const nums = timelineStr.match(/\d+/g)?.map(Number) || [];
  if (nums.length === 0) return [7, 14];
  if (nums.length === 1) return [nums[0], nums[0]];
  return [nums[0], nums[1]];
};

const formatTimeline = (min: number, max: number, suffix: string) => {
  const roundedMin = Math.max(1, Math.round(min));
  const roundedMax = Math.max(roundedMin, Math.round(max));
  return roundedMin === roundedMax
    ? `${roundedMin} Days${suffix}`
    : `${roundedMin}-${roundedMax} Days${suffix}`;
};

const deriveTierContent = (sub: any, tier: PriceTier) => {
  const baseDeliverables: string[] = sub.deliverables || [];
  const baseTech: string[] = sub.tech || [];
  const [minDays, maxDays] = parseTimelineRange(sub.timeline);

  if (tier === 'basic') {
    const trimmedCount = Math.max(3, Math.ceil(baseDeliverables.length * 0.6));
    return {
      deliverables: baseDeliverables.slice(0, trimmedCount),
      tech: baseTech.slice(0, Math.max(1, Math.ceil(baseTech.length * 0.5))),
      timeline: formatTimeline(minDays * 1.3, maxDays * 1.3, ' (Standard Pace)'),
      includes: ['1 revision round (Basic)'],
    };
  }

  if (tier === 'premium') {
    const extraDeliverables = PREMIUM_DELIVERABLE_ADDONS.filter((item) => !baseDeliverables.includes(item));
    return {
      deliverables: [...baseDeliverables, ...extraDeliverables],
      tech: [...baseTech, ...PREMIUM_TECH_ADDONS.filter((t) => !baseTech.includes(t))],
      timeline: formatTimeline(Math.max(2, minDays * 0.6), Math.max(3, maxDays * 0.6), ' (Expedited)'),
      includes: ['Unlimited revisions during build phase (Premium)'],
    };
  }

<<<<<<< HEAD
  // standard -unchanged, exactly as authored in data.ts
=======
  // standard — unchanged, exactly as authored in data.ts
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  return {
    deliverables: baseDeliverables,
    tech: baseTech,
    timeline: sub.timeline || '7-14 business days',
    includes: sub.includes || ['1 revision (Basic)', '3 revisions (Premium)'],
  };
};

const TIER_LABELS: Record<PriceTier, string> = {
  basic: 'Basic Setup',
  standard: 'Standard Core',
  premium: 'Premium Exp',
};

const TIER_STYLES: Record<PriceTier, {
  badge: string;
  cardActive: string;
  textActive: string;
  buttonActive: string;
}> = {
  basic: {
    badge: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300',
    cardActive: 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-600/30',
    textActive: 'text-amber-800 dark:text-amber-300',
    buttonActive: 'bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 text-white hover:opacity-95',
  },
  standard: {
    badge: 'bg-slate-200 dark:bg-slate-700/40 text-slate-700 dark:text-slate-200',
    cardActive: 'bg-slate-100/60 dark:bg-slate-800/30 border-slate-400/40',
    textActive: 'text-slate-700 dark:text-slate-200',
    buttonActive: 'bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 text-slate-900 hover:opacity-95',
  },
  premium: {
    badge: 'bg-yellow-100 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300',
    cardActive: 'bg-yellow-50/40 dark:bg-yellow-950/20 border-yellow-500/40',
    textActive: 'text-yellow-800 dark:text-yellow-300',
    buttonActive: 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-slate-900 hover:opacity-95',
  },
};

export default function ServicesSection({ theme, onViewChange, onPreSelectSubService, initialCategoryLabel }: ServicesSectionProps) {
  const { selectedCurrency, convertAmount, formatAmount, translatePriceText } = useCurrency();
<<<<<<< HEAD
  const cardTransition = useCardTransition();
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

  // Resolve a SERVICES index from a category label (e.g. "Chatbot Development"),
  // falling back to the first tab if no match/label is provided.
  const getCategoryIndexByLabel = (label?: string | null) => {
    if (!label) return 0;
    const idx = SERVICES.findIndex((s) => s.label === label);
    return idx >= 0 ? idx : 0;
  };

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(() => getCategoryIndexByLabel(initialCategoryLabel));
  const [expandedSubIndex, setExpandedSubIndex] = useState<number | null>(0);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedPricingTier, setSelectedPricingTier] = useState<PriceTier>('standard');

  // Anchors the tabs + detail panel area so we can scroll it into view when arriving
  // from a specific "Learn More" click on the Home page.
  const catalogRef = useRef<HTMLDivElement>(null);
  // Anchors just the right-side detail/quote panel. On mobile the category tabs sit
  // stacked above this panel, so deep-linking into a specific service should land the
  // visitor directly on the expanded service + its "Request Quote" form, not the tab list.
  const detailPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialCategoryLabel) return;
    const idx = getCategoryIndexByLabel(initialCategoryLabel);
    setActiveCategoryIndex(idx);
    setExpandedSubIndex(0);
    setSelectedPricingTier('standard');

    // Delay slightly so this runs after the app-level "scroll to top on view change"
    // effect, then bring the correct area into view. Below the "lg" breakpoint the tabs
    // and detail panel stack vertically, so scroll straight to the detail/quote panel;
    // at "lg" and above they sit side by side, so scrolling the whole catalog into view
    // is correct there.
    const timer = setTimeout(() => {
      const isMobileLayout = typeof window !== 'undefined' && window.innerWidth < 1024;
      const target = isMobileLayout ? detailPanelRef.current : catalogRef.current;
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCategoryLabel]);

  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    setPortalContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPricingModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPricingModalOpen]);

<<<<<<< HEAD
useEffect(() => {
    const root = detailPanelRef.current;
    if (!root) return;

    const forceVisible = () => {
      root.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade')
        .forEach((el) => {
          el.setAttribute('data-reveal-observed', 'true');
          el.classList.add('is-visible');
        });
    };

    // Run immediately and after a short delay for AnimatePresence mount
    forceVisible();
    const timer = setTimeout(forceVisible, 50);

    // Also watch for future DOM changes inside the panel
    const observer = new MutationObserver(forceVisible);
    observer.observe(root, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeCategoryIndex, expandedSubIndex]);

=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  // SOLUTION ARCHITECT DESIGN STATES
  const [selectedEstimatorIds, setSelectedEstimatorIds] = useState<string[]>(["wp_site", "logo_design"]);
  const [revisionLevel, setRevisionLevel] = useState<'basic' | 'standard' | 'premium'>('standard');
  const [includeMaintenance, setIncludeMaintenance] = useState(false);
  const [rushLevel, setRushLevel] = useState<'normal' | 'expedited' | 'rush'>('normal');

  const activeCategory = activeCategoryIndex === -1 ? null : SERVICES[activeCategoryIndex];

  // Computations
  const selectedItems = ESTIMATOR_ITEMS.filter(it => selectedEstimatorIds.includes(it.id));
  const baseItemsPrice = selectedItems.reduce((acc, current) => acc + current.price, 0);

  const revisionPrices = { basic: 0, standard: 1999, premium: 3999 };
  const revisionPriceValue = revisionPrices[revisionLevel];

  const maintenancePriceValue = includeMaintenance ? 2499 : 0;

  const rushPrices = { normal: 0, expedited: 1999, rush: 4999 };
  const rushPriceValue = rushPrices[rushLevel];

  const subtotal = baseItemsPrice + revisionPriceValue + maintenancePriceValue + rushPriceValue;
  const promoDiscount = Math.floor(subtotal * 0.25); // 25% Off Bundled loyalty bonus
  const finalPrice = Math.max(0, subtotal - promoDiscount);

  // Dynamic business impact indicators
  const estHoursSaved = selectedItems.reduce((acc, item) => {
    switch (item.id) {
      case 'wp_site': return acc + 6;
      case 'ecom_store': return acc + 12;
      case 'landing_page': return acc + 4;
      case 'custom_app': return acc + 18;
      case 'wp_bot': return acc + 15;
      case 'ai_bot': return acc + 22;
      case 'figma_screens': return acc + 3;
      case 'n8n_pipeline': return acc + 20;
      case 'seo_blogs': return acc + 5;
      case 'technical_seo': return acc + 8;
      default: return acc + 4;
    }
  }, 0);

  let estLeadLift = 0;
  if (selectedEstimatorIds.includes('landing_page')) estLeadLift += 15;
  if (selectedEstimatorIds.includes('ecom_store')) estLeadLift += 12;
  if (selectedEstimatorIds.includes('wp_bot')) estLeadLift += 18;
  if (selectedEstimatorIds.includes('ai_bot')) estLeadLift += 25;
  if (selectedEstimatorIds.includes('n8n_pipeline')) estLeadLift += 10;
  if (selectedEstimatorIds.includes('seo_blogs')) estLeadLift += 8;
  if (selectedEstimatorIds.includes('custom_app')) estLeadLift += 14;
  if (estLeadLift === 0) estLeadLift = 5;

  const estOverheadSavedPercentage = Math.min(85, Math.ceil(selectedItems.length * 9.5 + (includeMaintenance ? 12 : 0) + (rushLevel !== 'normal' ? 5 : 0)));

  // Timeline derivation based on selected items max
  const maxBaseTimeline = selectedItems.length > 0
    ? Math.max(...selectedItems.map(it => it.timelineDays))
    : 7;

  let timelineEstimateMessage = "";
  if (rushLevel === 'normal') {
    timelineEstimateMessage = `${maxBaseTimeline} Days`;
  } else if (rushLevel === 'expedited') {
    timelineEstimateMessage = `${Math.max(3, Math.ceil(maxBaseTimeline * 0.7))} Days (Expedited)`;
  } else {
    timelineEstimateMessage = `${Math.max(2, Math.ceil(maxBaseTimeline * 0.4))} Days (Ultra-Rush Sprint)`;
  }

  const handleToggleEstimatorItem = (id: string) => {
    setSelectedEstimatorIds(prev => {
      // Keep at least one item selected
      if (prev.includes(id) && prev.length === 1) return prev;
      return prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
    });
  };

  const handleExportEstimatorPreset = () => {
    const itemsListText = selectedItems.map(it => `- ${it.label} (${it.category} - ${formatAmount(it.price, true)})`).join('\n');
    const revisionLabel = revisionLevel === 'basic' ? 'Basic (included review)' : revisionLevel === 'standard' ? `Standard (+${formatAmount(1999)})` : `Premium Design Suite (+${formatAmount(3999)})`;
    const maintenanceLabel = includeMaintenance ? `Yes (Include 1st Year Website Care Maintenance retainer - ${formatAmount(2499)})` : 'No (One-time delivery only)';
    const speedLabel = rushLevel === 'normal' ? 'Standard Pacing' : rushLevel === 'expedited' ? `Expedited Delivery (+${formatAmount(1999)})` : `Ultra-Rush Sprint Priority (+${formatAmount(4999)})`;

    const compiledMessage = `Hello MaVionix Team, I have used your Interactive Solution Architect on your website to pre-compile a project scope bundle! Here is my requested project architecture:

--- SELECTED CAPABILITIES ---
${itemsListText}

--- COMPLEMENTS ---
- Revisions Upgrade: ${revisionLabel}
- Year 1 Maintenance Support: ${maintenanceLabel}
- Deliverable Velocity Pace: ${speedLabel}

--- SUMMARY MATRIX ---
- Aggregated Subtotal: ${formatAmount(subtotal)}
- Applied 25% Bundled Discount: -${formatAmount(promoDiscount)}
- Dynamic Target Budget: ${formatAmount(finalPrice)}
- Estimated Work Horizon: ${timelineEstimateMessage}

Let's discuss my custom specifications and launch timeline!`;

    const subServicesSummary = selectedItems.map(it => it.label).join(' + ');

    // Call handlePreSelectSubService with our custom calculated details (in user-selected currency)
    onPreSelectSubService(
      selectedItems.length > 1 ? `${selectedItems.length} Services Bundle` : subServicesSummary || "Solution Bundle",
      "Custom Architect Bundle",
      String(Math.round(convertAmount(finalPrice))),
      compiledMessage
    );

    // Route the selected service into the contact form.
    onViewChange('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (idx: number) => {
    setActiveCategoryIndex(idx);
    setExpandedSubIndex(0); // autoexpand first item of new category
    setSelectedPricingTier('standard'); // reset tier selection for the newly focused category
  };

  const handleRequestQuote = (subName: string, mainName: string) => {
    // Save selections
    onPreSelectSubService(subName, mainName);
    // Navigate
    onViewChange('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    const handleLaunchCustomSolution = () => {
  setActiveCategoryIndex(-1);
  setSelectedPricingTier('standard');
  setTimeout(() => {
    const isMobileLayout = window.innerWidth < 1024;
    const target = isMobileLayout ? detailPanelRef.current : catalogRef.current;
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
};

  const handleRequestTierQuote = (subName: string, mainName: string, tierLabel: string, tierPrice: string) => {
    const notes = `Selected quote tier: ${tierLabel}\nRequested package price: ${tierPrice}\nService category: ${mainName}\nDeliverable: ${subName}`;
    onPreSelectSubService(subName, mainName, tierPrice.replace(/[^0-9]/g, ''), notes);
    onViewChange('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCategoryIcon = (iconName: string, colorClass = "text-slate-500") => {
    const props = { className: colorClass, size: 20 };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Toolbox': return <Briefcase {...props} />;
      default: return <Layers {...props} />;
    }

    

  };

  return (
    <div className="w-full relative pt-4  pb-16 bg-white dark:bg-[#07070f]">
      {/* Background radial soft light grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>

<<<<<<< HEAD
      {/* 1. INTRO SPLASH -full-bleed 100vw, no border, seamlessly merges into the page background */}
=======
      {/* 1. INTRO SPLASH — full-bleed 100vw, no border, seamlessly merges into the page background */}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
      <section className="relative w-full overflow-hidden bg-white dark:bg-[#07070f]">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.07),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(124,58,237,0.045),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.16),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.10),transparent_32%)]" />
          <div className="absolute left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-purple-200/25 dark:bg-purple-500/10 blur-[120px]" />
          <div className="absolute right-[-5%] top-[18%] h-[280px] w-[280px] rounded-full bg-purple-100/30 dark:bg-blue-500/10 blur-[110px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/35 to-transparent" />
          {/* Bottom fade so the hero dissolves into the page background instead of cutting off */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white dark:to-[#07070f]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-center sm:text-left"
            >
<<<<<<< HEAD
              
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-white/5 dark:text-purple-200">
                <Layers size={14} className="text-purple-700 dark:text-purple-300" />
                Our Solutions
              </div> 
=======
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-white/5 dark:text-purple-200">
                <Layers size={14} className="text-purple-700 dark:text-purple-300" />
                Our Solutions
              </div>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

              <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Explore Our <span className="text-gradient-royal">Comprehensive</span> Services{' '}
                <span className="text-gradient-lead">Catalog</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300 sm:mx-0">
                Compare packages starting as low as {formatAmount(499)}, and learn about our specific deliverable items. Pick a service to view full timelines, integrations, and tech stack parameters.
              </p>

<<<<<<< HEAD
           
              <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
            <button onClick={() => onViewChange('contact')} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-purple-400 dark:text-slate-950">
=======
              <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
                <button onClick={() => onViewChange('contact')} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-purple-400 dark:text-slate-950">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                  Schedule a consult
                  <ArrowRight size={16} />
                </button>
                <button onClick={() =>  handleLaunchCustomSolution()} className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200">
                  Launch a custom solution
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { value: '7+', label: 'Service lanes' },
                  { value: '24hrs', label: 'Review window' },
                  { value: '100%', label: 'Transparent scope' },
<<<<<<< HEAD
                ].map((stat, statIdx) => (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={cardViewport}
                    variants={cardFadeUpScale}
                    transition={cardTransition(statIdx)}
                    className="rounded-xl sm:rounded-2xl border border-slate-200/70 bg-white/85 p-2.5 sm:p-4 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
                  >
                    <div className="text-base sm:text-2xl font-black tracking-tight text-purple-700 dark:text-purple-300">{stat.value}</div>
                    <div className="mt-1 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.08em] sm:tracking-[0.22em] text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </motion.div>
=======
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl sm:rounded-2xl border border-slate-200/70 bg-white/85 p-2.5 sm:p-4 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
                    <div className="text-base sm:text-2xl font-black tracking-tight text-purple-700 dark:text-purple-300">{stat.value}</div>
                    <div className="mt-1 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.08em] sm:tracking-[0.22em] text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full max-w-xl justify-self-center lg:justify-self-end"
            >
              <div className="flex justify-center">
                <motion.div
                  className="services-robo-stage"
                  whileHover={{ rotateY: -7, rotateX: 4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                >
                  <div className="services-robo-orbit services-robo-orbit-one"></div>
                  <div className="services-robo-orbit services-robo-orbit-two"></div>
                  <div className="services-robo-core"></div>
                  <img
                    src="/services-robot.webp"
                    alt="MaVionix robotic solutions assistant"
                    className="services-robo-image"
                    width={760}
                    height={760}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gap between the full-bleed hero and the services section below */}
      <div ref={catalogRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12 sm:mt-16">
        {/* 2. LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

          {/* LEFT SIDE TABS */}
          <div className="lg:col-span-4 space-y-3">
            <span className="sr-only">Services Categories Navigation Tab List</span>

            {/* Desktop Side Navigation */}
<<<<<<< HEAD
            <div className="reveal-left hidden lg:flex flex-col gap-2 p-3 bg-[#fbfbfe] dark:bg-[#0b0b13] border border-slate-200/50 dark:border-slate-900 rounded-sm">
=======
            <div className="hidden lg:flex flex-col gap-2 p-3 bg-[#fbfbfe] dark:bg-[#0b0b13] border border-slate-200/50 dark:border-slate-900 rounded-sm">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              <h3 className="text-[10px] font-black text-slate-450 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
                Capacities Catalog
              </h3>
              {SERVICES.map((cat, idx) => (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryClick(idx)}
                  className={`w-full text-left px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-3 border ${activeCategoryIndex === idx
                    ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-500/20 text-blue-600 dark:text-blue-400 font-extrabold'
                    : 'border-transparent text-slate-700 dark:text-slate-350 hover:bg-slate-100/50 dark:hover:bg-slate-900/40'
                    }`}
                >
                  {renderCategoryIcon(cat.icon, activeCategoryIndex === idx ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400')}
                  <span>{cat.label}</span>
                </button>
              ))}
              <div className="h-[1px] bg-slate-205/50 dark:bg-slate-850 my-1"></div>
             <button
  onClick={() => handleCategoryClick(-1)}
  className={`w-full text-left px-4 py-3 border rounded-sm text-xs bg-slate-950 font-black uppercase tracking-wider transition-all flex items-center gap-3 ${
    activeCategoryIndex === -1
      ? 'dark:bg-purple-700 border-transparent text-white dark:shadow-sm font-black bg-slate-950'
      : 'border-purple-700/20 text-purple-700 hover:bg-purple-700/10'
  }`}
>
  <Sparkles 
    size={16} 
    className={activeCategoryIndex === -1 ? 'text-white' : 'text-purple-700'} 
  />
  <span>Custom Solution Architect</span>
</button>
            </div>

            {/* Mobile Horizon Scroller */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 snap-x select-none border-b border-slate-100 dark:border-slate-900">
              {SERVICES.map((cat, idx) => (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryClick(idx)}
                  className={`flex-shrink-0 snap-start px-4 py-2.5 rounded-sm text-xs font-bold transition-all flex items-center gap-2 border ${activeCategoryIndex === idx
<<<<<<< HEAD
                    ? 'bg-slate-900 text-white dark:bg-[#6d28d9] dark:text-slate-950 border-transparent'
=======
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-transparent'
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                    : 'bg-[#fbfbfe] dark:bg-gray-900/50 text-slate-700 dark:text-slate-350 border-slate-205 dark:border-slate-800'
                    }`}
                >
                  {renderCategoryIcon(cat.icon, activeCategoryIndex === idx ? 'text-white' : 'text-slate-400')}
                  <span>{cat.label}</span>
                </button>
              ))}
              <button
                onClick={() => handleCategoryClick(-1)}
                className={`flex-shrink-0 snap-start px-4 py-2.5 rounded-sm text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 border ${activeCategoryIndex === -1
                  ? 'bg-gradient-royal border-transparent text-white'
                  : 'bg-rose-50/10 dark:bg-rose-950/10 text-rose-600 border-rose-200 dark:border-rose-900 font-bold'
                  }`}
              >
                <Sparkles size={14} className={activeCategoryIndex === -1 ? 'text-white opacity-75' : 'text-rose-500'} />
                <span>Solution Architect</span>
              </button>
            </div>

            {/* Pricing Modal trigger Button on Desktop */}
            <div className="hidden lg:block pt-2">
              <button
                onClick={() => setIsPricingModalOpen(true)}
                className="w-full py-3 rounded-sm border border-dashed border-[#cbd5e1] hover:border-emerald-500 text-xs text-emerald-600 transition-colors font-bold inline-flex items-center justify-center gap-2 bg-emerald-50/10"
              >
                <FileText size={14} />
                Open Standard Pricing Matrix
              </button>
            </div>
          </div>

          {/* RIGHT SIDE DETAILED COLLAPSIBLE SERVICES */}
          <div ref={detailPanelRef} className="lg:col-span-8 space-y-6">
<<<<<<< HEAD
            <AnimatePresence>
=======
            <AnimatePresence mode="wait">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              <motion.div
                key={activeCategoryIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {activeCategoryIndex === -1 ? (
                  /* Custom Solution Architect Workspace */
                  <div className="space-y-6 animate-fade-in">

                    {/* Dynamic Intro Summary Block */}
                    <div className="relative overflow-hidden p-5 sm:p-6 bg-gradient-to-br from-white via-blue-50/45 to-violet-50/60 dark:from-[#080812] dark:via-[#0b0717] dark:to-[#020206] border border-blue-200/60 dark:border-violet-500/20 rounded-sm shadow-sm">
                      <div className="absolute inset-0 opacity-[0.18] dark:opacity-[0.24] pointer-events-none bg-[linear-gradient(rgba(124,58,237,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.12)_1px,transparent_1px)] [background-size:28px_28px]"></div>
                      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8">
                          <div className="flex gap-4 items-center mb-3">
                            <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-blue-600 via-violet-600 to-purple-900 flex items-center justify-center shadow-md shadow-blue-950/10 dark:shadow-violet-950/30 flex-shrink-0 ring-1 ring-white/50 dark:ring-violet-300/10">
                              <Sparkles className="text-white" size={20} />
                            </div>
                            <div>
                              <h2 className="text-base sm:text-lg font-black text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
                                Interactive Solution Architect
                              </h2>
                              <p className="text-[9px] font-bold text-blue-600 dark:text-violet-300 uppercase tracking-widest leading-none mt-1">
                                Configure custom scopes & save 25% instantly
                              </p>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 md:pl-[60px] max-w-2xl">
                            Select exactly which digital capabilities, visual assets, and backend modules your business requires for its next milestone. Combining multiple modules unlocks our standard 25% Bundled Loyalty Discount automatically.
                          </p>
                        </div>
                        <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-2">
                          <div className="rounded-sm border border-blue-200/60 dark:border-violet-500/20 bg-white/75 dark:bg-white/[0.04] p-3 shadow-sm">
                            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block">Selected</span>
                            <span className="text-lg font-black text-slate-950 dark:text-white leading-none">{selectedItems.length}</span>
                          </div>
                          <div className="rounded-sm border border-emerald-200/70 dark:border-emerald-500/20 bg-emerald-50/70 dark:bg-emerald-500/[0.06] p-3 shadow-sm">
                            <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600/70 dark:text-emerald-300 block">Savings</span>
                            <span className="text-lg font-black text-emerald-700 dark:text-emerald-300 leading-none">25%</span>
                          </div>
                          <div className="rounded-sm border border-violet-200/70 dark:border-violet-500/20 bg-violet-50/70 dark:bg-violet-500/[0.06] p-3 shadow-sm">
                            <span className="text-[8px] font-black uppercase tracking-widest text-violet-600/70 dark:text-violet-300 block">Timeline</span>
                            <span className="text-sm font-black text-violet-700 dark:text-violet-200 leading-none">{timelineEstimateMessage}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub-grid workspace */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                      {/* Cards columns checklist */}
                      <div className="md:col-span-8 space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1e1b4b] dark:text-slate-300 pb-1.5 border-b border-slate-200/70 dark:border-violet-500/20 flex items-center gap-2">
                          <Layers size={13} className="text-blue-600 dark:text-violet-300" />
                          Step 1: Choose Capabilities
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5">
                          {ESTIMATOR_ITEMS.map((item) => {
                            const isSelected = selectedEstimatorIds.includes(item.id);
                            return (
                              <div
                                key={item.id}
                                onClick={() => handleToggleEstimatorItem(item.id)}
                                className={`p-4 border rounded-sm transition-all cursor-pointer flex gap-4 items-start select-none ${isSelected
                                  ? 'bg-gradient-to-r from-purple-700/90 via-[#6d28d9] to-[#6d28d9] dark:from-purple-500/20 dark:via-indigo-500/15 dark:to-violet-500/10 border-purple-500/40 dark:border-violet-400/30 shadow-sm'
                                  : 'bg-white/90 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/10 hover:border-blue-300/70 dark:hover:border-violet-500/25 hover:bg-blue-50/30 dark:hover:bg-violet-500/[0.04]'
                                  }`}
                              >
                                <div className={`w-5 h-5 rounded-sm border flex items-center justify-center mt-0.5 transition-colors flex-shrink-0 ${isSelected
                                  ? 'bg-blue-600 dark:bg-blue-500 text-white border-transparent'
                                  : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-black/20'
                                  }`}>
                                  {isSelected && <Check size={12} strokeWidth={3} />}
                                </div>
                                <div className="flex-1 space-y-1">
                                  <div className="flex justify-between items-baseline gap-2">
                                    <span className={`text-xs font-black uppercase tracking-wider ${isSelected ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
                                      {item.label}
                                    </span>
                                    <span className={`text-xs font-bold font-mono ${isSelected ? 'text-white' : 'text-blue-700 dark:text-violet-300'}`}>
                                      {formatAmount(item.price)}
                                    </span>
                                  </div>
                                  <p className={`text-[11px] leading-relaxed ${isSelected ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
                                    {item.shortDesc}
                                  </p>
                                  <div className={`text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 pt-0.5 ${isSelected ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
                                    <span>{item.category}</span>
                                    <span>.</span>
                                    <span>{item.timelineDays} Days Deliverable</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Step 2 Controls */}
                        <div className="pt-6 space-y-4">
                          <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1e1b4b] dark:text-slate-300 pb-1.5 border-b border-slate-200/70 dark:border-violet-500/20 flex items-center gap-2">
                            <CheckCircle size={13} className="text-blue-600 dark:text-violet-300" />
                            Step 2: Execution Options
                          </h3>

                          {/* Revision levels radio rows */}
                          <div className="p-4 bg-white/80 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 rounded-sm space-y-2.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e1b4b] dark:text-slate-300 block">
                              Revision Cycles Tier
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {(['basic', 'standard', 'premium'] as const).map((lvl) => (
                                <button
                                  key={lvl}
                                  type="button"
                                  onClick={() => setRevisionLevel(lvl)}
                                  className={`py-2 px-3 border text-center rounded-sm transition-all font-bold uppercase tracking-wider text-[10px] ${revisionLevel === lvl
                                    ? ' bg-slate-950 text-white dark:text-slate-950 border-transparent dark:shadow-sm'
                                    : 'border-slate-200/70 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-blue-50/50 dark:hover:bg-violet-500/[0.06] bg-white dark:bg-black/20'
                                    }`}
                                >
                                  {lvl === 'basic' ? 'Basic (Included)' : lvl === 'standard' ? `Standard (+${formatAmount(1999)})` : `Premium Design Suite (+${formatAmount(3999)})`}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Website Maintenance care add-on card toggle */}
                          <div
                            onClick={() => setIncludeMaintenance(!includeMaintenance)}
                            className={`p-4 border rounded-sm transition-all cursor-pointer flex justify-between items-center select-none shadow-sm ${includeMaintenance
                              ? 'bg-gradient-to-r from-[#6d28d9] via-[#6d28d9] to-purple-700/90 dark:from-purple-500/20 dark:via-indigo-500/15 dark:to-violet-500/10 border-white dark:border-violet-400/30'
                              : 'bg-white/90 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/10 hover:border-blue-300/70 dark:hover:border-violet-500/25 hover:bg-blue-50/30 dark:hover:bg-violet-500/[0.04]'
                              }`}
                          >
                            <div className="space-y-1.5 pr-4">
                              <span className={`text-[10px] font-bold uppercase tracking-widest block ${includeMaintenance ? 'text-white' : 'text-[#1e1b4b] dark:text-slate-300'}`}>
                                Include Website Care retainer?
                              </span>
                              <p className={`text-[10px] ${includeMaintenance ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                Core module upgrades, offsite backups databases & malicious traffic blocking logs support (+{formatAmount(2499)})
                              </p>
                            </div>
                            <div className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 flex-shrink-0 cursor-pointer ${includeMaintenance ? 'bg-blue-600 dark:bg-violet-500' : 'bg-slate-200 dark:bg-slate-800'
                              }`}>
                              <div className={`bg-white w-5 h-5 rounded-full shadow-sm transition-transform ${includeMaintenance ? 'translate-x-5' : 'translate-x-0'
                                }`}></div>
                            </div>
                          </div>

                          {/* Velocity options */}
                          <div className="p-4 bg-white/80 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 rounded-sm space-y-2.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e1b4b] dark:text-slate-300 block">
                              Delivery Priority Velocity
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {(['normal', 'expedited', 'rush'] as const).map((lvl) => (
                                <button
                                  key={lvl}
                                  type="button"
                                  onClick={() => setRushLevel(lvl)}
                                  className={`py-2 px-3 border text-center rounded-sm transition-all font-bold uppercase tracking-wider text-[10px] ${rushLevel === lvl
                                    ? 'bg-slate-950 dark:bg-violet-300 text-white dark:text-slate-950 border-transparent dark:shadow-sm'
                                    : 'border-slate-200/70 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-blue-50/50 dark:hover:bg-violet-500/[0.06] bg-white dark:bg-black/20'
                                    }`}
                                >
                                  {lvl === 'normal' ? 'Standard Timeline' : lvl === 'expedited' ? `Expedited Delivery (+${formatAmount(1999)})` : `Ultra-Rush Sprint (+${formatAmount(4999)})`}
                                </button>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Calculator sidebar column */}
                      <div className="md:col-span-4 md:sticky md:top-28 space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1e1b4b] dark:text-slate-300 pb-1.5 border-b border-slate-200/70 dark:border-violet-500/20 flex items-center gap-2">
                          <Calculator size={13} className="text-blue-600 dark:text-violet-300" />
                          Step 3: Live Invoicing
                        </h3>
                        <div className="p-5 bg-white dark:bg-gradient-to-b dark:from-[#18142f] dark:via-[#0f1020] dark:to-[#040409] text-slate-900 dark:text-white border border-violet-200 dark:border-violet-500/20 rounded-sm shadow-md shadow-slate-200/50 dark:shadow-black/40 space-y-6">

                          <div className="space-y-1 pb-4 border-b border-slate-200 dark:border-slate-800">
                            <span className="text-[10px] font-bold text-violet-700 dark:text-violet-300 uppercase tracking-widest block leading-none">
                              Project Parameters Review
                            </span>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                              {selectedItems.length} core building block selected
                            </p>
                          </div>

                          <div className="space-y-4 text-xs">
                            <div className="flex justify-between gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
                              <span>Capabilities Subtotal</span>
                              <span className="font-mono text-slate-900 dark:text-white text-[11px]">{formatAmount(baseItemsPrice)}</span>
                            </div>
                            {revisionPriceValue > 0 && (
                              <div className="flex justify-between gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
                                <span>Revisions update</span>
                                <span className="font-mono text-slate-900 dark:text-white text-[11px]">+{formatAmount(revisionPriceValue)}</span>
                              </div>
                            )}
                            {includeMaintenance && (
                              <div className="flex justify-between gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
                                <span>Maintenance Care Support</span>
                                <span className="font-mono text-slate-900 dark:text-white text-[11px]">+{formatAmount(maintenancePriceValue)}</span>
                              </div>
                            )}
                            {rushPriceValue > 0 && (
                              <div className="flex justify-between gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
                                <span>Velocity priority</span>
                                <span className="font-mono text-slate-900 dark:text-white text-[11px]">+{formatAmount(rushPriceValue)}</span>
                              </div>
                            )}

                            <div className="h-[1px] bg-slate-200 dark:bg-slate-800/60 my-2"></div>

                            <div className="flex justify-between gap-2 text-slate-600 dark:text-slate-300 text-[11px]">
                              <span>Aggregated Sum</span>
                              <span className="font-mono text-slate-900 dark:text-white font-bold text-[11px]">{formatAmount(subtotal)}</span>
                            </div>

                            {/* Bundled Loyalty Discount Block */}
                            <div className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 py-2 px-2.5 rounded-sm font-bold border border-emerald-200 dark:border-emerald-900/10 text-[10px] uppercase tracking-wider">
                              <span className="flex items-center gap-1"><Percent size={11} /> 25% Bundle Off</span>
                              <span className="font-mono">-{formatAmount(promoDiscount)}</span>
                            </div>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                            <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">
                              ESTIMATED TARGET BUDGET
                            </span>
                            <div className="text-xl font-black text-slate-900 dark:text-white font-sans tracking-tight">
                              {formatAmount(finalPrice)}
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 pt-1.5 bg-slate-100 dark:bg-black/40 p-2 border border-slate-200 dark:border-slate-850 rounded-sm">
                              <Clock size={12} className="text-violet-600 dark:text-violet-300 flex-shrink-0" />
                              <span>Timeline: <strong className="text-slate-900 dark:text-white font-bold">{timelineEstimateMessage}</strong></span>
                            </div>
                          </div>

                          <button
                            onClick={handleExportEstimatorPreset}
                            className="w-full h-11 rounded-sm  bg-slate-950 dark:bg-[#6d28d9] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                            aria-label="Secure package criteria and advance"
                          >
                            <ShoppingCart size={13} />
                            Apply & Lock Bundle
                          </button>

                          <button
                            type="button"
                            onClick={handleExportEstimatorPreset}
                            className="w-full h-11 rounded-sm border-2 border-violet-400/60 dark:border-violet-400/30 bg-gradient-to-r from-blue-50 via-violet-50 to-indigo-50 dark:from-blue-500/10 dark:via-violet-500/10 dark:to-indigo-500/10 text-blue-700 dark:text-violet-200 font-black text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-violet-500 hover:from-blue-100 hover:via-violet-100 hover:to-indigo-100 dark:hover:from-blue-500/20 dark:hover:via-violet-500/20 dark:hover:to-indigo-500/20"
                            aria-label="Request quote for selected bundle"
                          >
                            <ArrowRight size={13} />
                            Request Quote for Bundle
                          </button>

                          {/* Operational ROI Audit Dashboard */}
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                            <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 dark:text-slate-400 shortcut-tracking uppercase tracking-widest">
                              <Calculator size={11} className="text-violet-600 dark:text-violet-300" />
                              <span>Projected Operations Impact</span>
                            </div>

                            <div className="space-y-2">
                              {/* Metric 1 */}
                              <div className="bg-slate-100 dark:bg-black/35 p-2.5 rounded-sm border border-slate-200 dark:border-slate-900 flex items-center justify-between">
                                <div>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-bold leading-normal">Weekly Task Hours Automated</span>
                                  <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">Routine human cycles redirected</span>
                                </div>
                                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 font-mono">
                                  ~{estHoursSaved} hrs/wk
                                </span>
                              </div>

                              {/* Metric 2 */}
                              <div className="bg-slate-100 dark:bg-black/35 p-2.5 rounded-sm border border-slate-200 dark:border-slate-900 flex items-center justify-between">
                                <div>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-bold leading-normal">Est. Conversion Uplift</span>
                                  <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium font-medium">Expected lead acquisition gain</span>
                                </div>
                                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 font-mono">
                                  +{estLeadLift}%
                                </span>
                              </div>

                              {/* Metric 3 */}
                              <div className="bg-slate-100 dark:bg-black/35 p-2.5 rounded-sm border border-slate-200 dark:border-slate-900 space-y-1.5">
                                <div className="flex justify-between items-baseline">
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">Overhead Friction Deflection</span>
                                  <span className="text-[10px] font-black text-slate-600 dark:text-slate-350 font-mono">{estOverheadSavedPercentage}% Saved</span>
                                </div>
                                <div className="w-full h-1 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                                    style={{ width: `${estOverheadSavedPercentage}%` }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="p-2 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/30 rounded-sm text-center">
                              <p className="text-[8px] text-indigo-700 dark:text-indigo-300 font-semibold leading-normal uppercase tracking-wider">
                                Calculated relative to Indian MSME standard pacing tables
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                ) : activeCategory ? (
                  <>
                    {/* Category summary banner */}
<<<<<<< HEAD
                    <div className="reveal p-6 bg-[#fbfbfe] dark:bg-[#0d0d16] border border-slate-200/50 dark:border-slate-900 rounded-sm">
=======
                    <div className="p-6 bg-[#fbfbfe] dark:bg-[#0d0d16] border border-slate-200/50 dark:border-slate-900 rounded-sm">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8">
                          <div className="flex gap-4 items-center mb-2">
                            <div className="w-10 h-10 rounded-sm bg-blue-50/50 dark:bg-blue-950/20 border border-blue-50 dark:border-blue-900/10 flex items-center justify-center shadow-sm flex-shrink-0">
                              {renderCategoryIcon(activeCategory.icon, "text-blue-600 dark:text-blue-400")}
                            </div>
                            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                              {activeCategory.label} Solutions
                            </h2>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2 pl-0 md:pl-14">
                            {activeCategory.descLong}
                          </p>
                        </div>
                        <div className="md:col-span-4">
                          <img
                            src={enhanceImageUrl(getCategoryImage(activeCategory.label), { width: 720, quality: 90 })}
                            srcSet={enhancedSrcSet(getCategoryImage(activeCategory.label), [360, 540, 720, 960], { quality: 90 })}
                            sizes="(min-width: 768px) 28vw, 100vw"
                            alt={`${activeCategory.label} visual representation`}
                            className="image-enhanced image-enhanced-photo w-full h-32 object-cover rounded-sm border border-slate-205 dark:border-slate-800 shadow-sm"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subservices rows stack */}
                    <div className="space-y-4 ">
                      {activeCategory.subs.map((sub, sIdx) => {
                        const isExpanded = expandedSubIndex === sIdx;
                        const tierContent = deriveTierContent(sub, selectedPricingTier);
                        return (
                          <div
                            key={sub.label}
<<<<<<< HEAD
                            className={`reveal-up border border-slate-200/50 dark:border-slate-900 rounded-sm bg-white dark:bg-[#0c0c14] overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-sm border-blue-500/20' : 'hover:border-slate-300 dark:hover:border-slate-800'
=======
                            className={`border border-slate-200/50 dark:border-slate-900 rounded-sm bg-white dark:bg-[#0c0c14] overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-sm border-blue-500/20' : 'hover:border-slate-300 dark:hover:border-slate-800'
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                              }`}
                          >
                            {/* Header trigger */}
                            <button
                              onClick={() => {
                                setExpandedSubIndex(isExpanded ? null : sIdx);
                                setSelectedPricingTier('standard'); // reset tier highlight for the newly opened deliverable
                              }}
                              className="w-full text-left p-5 flex justify-between items-center gap-4 transition-colors"
                              aria-expanded={isExpanded}
                              aria-label={`${sub.label} subservice click to expand details`}
                            >
                              <div>
                                <h3 className="text-base font-black text-slate-900 dark:text-white transition-colors">
                                  {sub.label}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 sm:line-clamp-2 leading-relaxed">
                                  {sub.short}
                                </p>
                              </div>
                              <div className="flex-shrink-0 flex items-center gap-3">
                                <span className="hidden sm:inline px-3 py-1 rounded-sm bg-slate-50 dark:bg-slate-950 text-[10px] font-bold text-slate-450 border border-slate-200/50 dark:border-slate-900">
                                  {translatePriceText(sub.pricing.basic)} Base
                                </span>
                                <div className={`w-6 h-6 rounded-sm flex items-center justify-center border text-[9px] font-bold transition-transform ${isExpanded ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent' : 'text-slate-400 border-slate-200 dark:border-slate-800'
                                  }`}>
                                  {isExpanded ? '▲' : '▼'}
                                </div>
                              </div>
                            </button>

                            {/* Expandable Body */}
                            {isExpanded && (
                              <div className="border-t border-slate-100 dark:border-slate-900 p-6 bg-slate-50/10 dark:bg-slate-950/20 space-y-6">
                                {/* 1. Long Description */}
                                <div>
                                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">Deliverable Scope Summary</h4>
                                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                                    {sub.long}
                                  </p>
                                </div>

<<<<<<< HEAD
                                {/* 2. Grid items -content below now reacts to the selected pricing tier */}
=======
                                {/* 2. Grid items — content below now reacts to the selected pricing tier */}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-900">
                                  {/* Deliverables */}
                                  <div>
                                    <div className="flex items-center justify-between mb-3">
                                      <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide">Technical Deliverables</h5>
                                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${TIER_STYLES[selectedPricingTier].badge}`}>
                                        {TIER_LABELS[selectedPricingTier]}
                                      </span>
                                    </div>
                                    <ul className="space-y-2 text-xs">
                                      {tierContent.deliverables.map(del => (
                                        <li key={del} className="flex gap-2 items-start text-slate-500 dark:text-slate-400">
                                          <CheckCircle className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={13} />
                                          <span>{del}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Timelines, Stacks */}
                                  <div className="space-y-4">
                                    <div>
                                      <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide mb-1.5">Estimated Lead Time</h5>
                                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase font-mono">
                                        <Calendar size={13} />
                                        {tierContent.timeline}
                                      </p>
                                    </div>

                                    {tierContent.tech.length > 0 && (
                                      <div>
                                        <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide mb-1.5">Standard Stack / Tools</h5>
                                        <div className="flex flex-wrap gap-1">
                                          {tierContent.tech.map(t => (
                                            <span key={t} className="px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-900 text-[10px] font-bold text-slate-500">
                                              {t}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {tierContent.includes.length > 0 && (
                                      <div>
                                        <h5 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide mb-1.5">Revision Rounds Included</h5>
                                        <p className="text-xs text-slate-500 font-medium">{tierContent.includes.join(', ')}</p>
                                      </div>
                                    )}
                                  </div>
                                </div>

<<<<<<< HEAD
                                {/* 3. Package Estimates matrix -buttons now select the active tier shown above */}
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-900">
                                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide mb-3">Package Price Estimates ({selectedCurrency.code})</h4>
                                  <div className="grid grid-cols-3 gap-3">
                                    {(['basic', 'standard', 'premium'] as const).map((tier, tierIdx) => {
                                      const isActive = selectedPricingTier === tier;
                                      const style = TIER_STYLES[tier];
                                      return (
                                        <motion.div
                                          key={tier}
                                          initial={{ opacity: 0, y: 14 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={cardTransition(tierIdx, 0.35, 0.08, 0.4)}
=======
                                {/* 3. Package Estimates matrix — buttons now select the active tier shown above */}
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-900">
                                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide mb-3">Package Price Estimates ({selectedCurrency.code})</h4>
                                  <div className="grid grid-cols-3 gap-3">
                                    {(['basic', 'standard', 'premium'] as const).map((tier) => {
                                      const isActive = selectedPricingTier === tier;
                                      const style = TIER_STYLES[tier];
                                      return (
                                        <div
                                          key={tier}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                                          className={`p-3 border rounded-sm text-center space-y-2 transition-all ${isActive ? style.cardActive : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-805'
                                            }`}
                                        >
                                          <span className={`text-[9px] font-bold uppercase tracking-wider block ${isActive ? `${style.textActive} font-black` : 'text-slate-400'
                                            }`}>
                                            {TIER_LABELS[tier]}
                                          </span>
                                          <span className={`text-xs sm:text-sm font-black block mt-1 ${isActive ? style.textActive : 'text-slate-800 dark:text-slate-200'
                                            }`}>
                                            {translatePriceText(sub.pricing[tier])}
                                          </span>
                                          <button
                                            type="button"
                                            onClick={() => setSelectedPricingTier(tier)}
                                            aria-pressed={isActive}
                                            className={`w-full rounded-sm px-3 py-2 text-[10px] font-black uppercase tracking-wider transition ${isActive ? style.buttonActive : 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-95'
                                              }`}
                                          >
                                            {isActive ? '✓ Selected' : `Choose ${tier === 'basic' ? 'Basic' : tier === 'standard' ? 'Standard' : 'Premium'}`}
                                          </button>
<<<<<<< HEAD
                                        </motion.div>
=======
                                        </div>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                                      );
                                    })}
                                  </div>
                                </div>

<<<<<<< HEAD
                                {/* 4. Action Button -submits a quote request for whichever tier is currently selected */}
=======
                                {/* 4. Action Button — submits a quote request for whichever tier is currently selected */}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-900/40 p-4 rounded-sm">
                                  <div className="text-center sm:text-left">
                                    <p className="text-[11px] text-slate-440 font-black uppercase tracking-wider">Ready to begin this deliverable?</p>
                                    <p className="text-xs text-slate-500">We'll carry this choice dynamically to your contact form documents.</p>
                                  </div>
                                  <button
                                    onClick={() => handleRequestTierQuote(
                                      sub.label,
                                      activeCategory.label,
                                      TIER_LABELS[selectedPricingTier],
                                      translatePriceText(sub.pricing[selectedPricingTier])
                                    )}
                                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-slate-900 dark:bg-purple-400 text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-sm hover:opacity-95 transition-all"
                                    aria-label={`Request custom quote for ${sub.label}`}
                                  >
                                    Request Quote
                                    <ArrowRight size={14} />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Mobile Standard Pricing list action */}
        <div className="lg:hidden text-center pt-2">
          <button
            onClick={() => setIsPricingModalOpen(true)}
            className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-450 border border-blue-200 dark:border-blue-900 rounded-sm bg-blue-50/10"
          >
            Show Full Pricing Grid
          </button>
        </div>
      </div>

      {/* 4. HIGH CONTRAST MODAL: DYNAMIC STANDARD PRICING MATRIX */}
   {isPricingModalOpen && portalContainer && createPortal(
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
    onClick={() => setIsPricingModalOpen(false)}
  >
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className="bg-white dark:bg-[#0c0c14] border border-slate-200 dark:border-slate-900 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-5 border-b border-slate-100 dark:border-slate-905 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Standard Pricing Matrix
              </h3>
              <button
                onClick={() => setIsPricingModalOpen(false)}
                className="w-8 h-8 rounded-sm bg-slate-100 dark:bg-slate-900 flex items-center justify-center font-bold text-slate-500 hover:text-black dark:hover:text-white"
                aria-label="Close pricing modal"
              >
                &times;
              </button>
            </div>

            <div className="p-6 text-xs flex-1 min-h-0">
              <span className="sr-only">Detailed list of starting costs per service deliverable</span>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-widest font-black text-[9px]">
                    <th className="py-2.5 pb-2">Service Component</th>
                    <th className="py-2.5 pb-2">Basic</th>
                    <th className="py-2.5 pb-2">Standard</th>
                    <th className="py-2.5 pb-2">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-900 text-slate-750 dark:text-slate-350 font-medium">
                  <tr>
                    <td className="py-2.5 font-bold">Website Development (WordPress focus)</td>
                    <td className="py-2.5">{formatAmount(7999)}</td>
                    <td className="py-2.5">{formatAmount(11999)}</td>
                    <td className="py-2.5">{formatAmount(15999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">E-commerce Webstore portal</td>
                    <td className="py-2.5">{formatAmount(14999)}</td>
                    <td className="py-2.5">{formatAmount(24999)}</td>
                    <td className="py-2.5">{formatAmount(39999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Responsive Ad Landing Page</td>
                    <td className="py-2.5">{formatAmount(4999)}</td>
                    <td className="py-2.5">{formatAmount(7999)}</td>
                    <td className="py-2.5">{formatAmount(10999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">WhatsApp conversational menu Bot</td>
                    <td className="py-2.5">{formatAmount(7999)}</td>
                    <td className="py-2.5">{formatAmount(14999)}</td>
                    <td className="py-2.5">{formatAmount(24999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Custom AI vector-grounded Bot</td>
                    <td className="py-2.5">{formatAmount(14999)}</td>
                    <td className="py-2.5">{formatAmount(24999)}</td>
                    <td className="py-2.5">{formatAmount(49999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Figma UI/UX layouts &amp; journey flows</td>
                    <td className="py-2.5">{formatAmount(6999)}</td>
                    <td className="py-2.5">{formatAmount(19999)}</td>
                    <td className="py-2.5">{formatAmount(39999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Process Automation pipelines (n8n/Make)</td>
                    <td className="py-2.5">{formatAmount(9999)}</td>
                    <td className="py-2.5">{formatAmount(19999)}</td>
                    <td className="py-2.5">{formatAmount(29999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Brand Logo Design Sets</td>
                    <td className="py-2.5">{formatAmount(999)}</td>
                    <td className="py-2.5">{formatAmount(2499)}</td>
                    <td className="py-2.5">{formatAmount(4999)}+</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">SEO-optimized Blog Copywriting</td>
                    <td className="py-2.5">{formatAmount(499)}</td>
                    <td className="py-2.5">{formatAmount(999)}</td>
                    <td className="py-2.5">{formatAmount(1999)}+</td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-5 text-[10px] text-slate-400 italic leading-relaxed text-center">
                Above price charts are dynamic estimates. Select on individual deliverables to check exact outlines and included revision rounds.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 text-center border-t border-slate-100 dark:border-slate-900">
              <button
                onClick={() => setIsPricingModalOpen(false)}
                className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-wider rounded-sm text-xs"
              >
                Accept &amp; Close
              </button>
            </div>
          </div>
        </div>,
        portalContainer
      )}
    </div>
  );
}
