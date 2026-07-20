import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, TESTIMONIALS } from '../data';
import { Globe, MessageSquare, Palette, Cpu, PenTool, Briefcase, ShieldCheck, Award, Zap, HeartHandshake, Smile, RefreshCw, Star, Users, ArrowRight, Clock, Sparkles, TrendingUp, BarChart3, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCurrency } from '../context/CurrencyContext';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
import { cardFadeUp, cardFadeUpScale, cardViewport, useCardTransition } from '../utils/animations';

interface HomeSectionProps {
  theme: 'light' | 'dark';
  onViewChange: (view: string, categoryOrSlug?: string) => void;
  onBookingSubmit: (bookingData: { mainService: string; subService: string; preferredDate: string; budget: string }) => void;
}
export default function HomeSection({ theme, onViewChange, onBookingSubmit }: HomeSectionProps) {
  const { selectedCurrency, convertAmount, formatAmount } = useCurrency();
  const cardTransition = useCardTransition();

  // Interactive Widgets State
  const [activeBlueprintStep, setActiveBlueprintStep] = useState(0);

  // Form State
  const [mainService, setMainService] = useState('');
  const [subServicesList, setSubServicesList] = useState<string[]>([]);
  const [subService, setSubService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [budget, setBudget] = useState('');

  // Validation feedback
  const [mainSvcErr, setMainSvcErr] = useState('');
  const [subSvcErr, setSubSvcErr] = useState('');
  const [dateErr, setDateErr] = useState('');
  const [budgetErr, setBudgetErr] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [formErrMsg, setFormErrMsg] = useState('');

  // Date boundary values
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  // Testimonial scroller ref

  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const emeraldCardRef = useRef<HTMLDivElement>(null);
  const indigoCardRef = useRef<HTMLDivElement>(null);
  const roseCardRef = useRef<HTMLDivElement>(null);
  const blueCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Limits: today to +3 months (90 days)
    const today = new Date();
    const future = new Date();
    future.setDate(today.getDate() + 90);

    const pad = (n: number) => String(n).padStart(2, '0');
    const format = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

    setMinDate(format(today));
    setMaxDate(format(future));
  }, []);

  // Update sub-services list on main service change
  const handleMainServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setMainService(selected);
    setMainSvcErr('');

    const cat = SERVICES.find(c => c.label === selected);
    if (cat) {
      setSubServicesList(cat.subs.map(s => s.label));
      setSubService('');
      setBudget('');
      setInfoMsg('');
    } else {
      setSubServicesList([]);
      setSubService('');
    }
  };

  const handleSubServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSubService(selected);
    setSubSvcErr('');

    // Pricing estimation & show special offer
    const cat = SERVICES.find(c => c.label === mainService);
    const subObj = cat?.subs.find(s => s.label === selected);
    if (subObj) {
      // Extract numeric estimate if present
      const priceStr = subObj.pricing.basic;
      const numMatch = priceStr.replace(/[^0-9]/g, '');
      const originalPrice = numMatch ? parseInt(numMatch, 10) : 10000;
      // 25% discount logic from index.html raw code
      const promoPrice = Math.floor(originalPrice * 0.75);

      const convertedPromoValue = Math.round(convertAmount(promoPrice));
      setBudget(String(convertedPromoValue));

      const convertedOriginalStr = formatAmount(originalPrice, true);
      const convertedPromoStr = formatAmount(promoPrice, true);
      setInfoMsg(`Special Offer: <s>${convertedOriginalStr}</s> ${convertedPromoStr} (25% Off)`);
      setBudgetErr('');
    } else {
      setInfoMsg('');
    }
  };

  // Synchronize target budget estimate when currency changes
  useEffect(() => {
    if (mainService && subService) {
      const cat = SERVICES.find(c => c.label === mainService);
      const subObj = cat?.subs.find(s => s.label === subService);
      if (subObj) {
        const priceStr = subObj.pricing.basic;
        const numMatch = priceStr.replace(/[^0-9]/g, '');
        const originalPrice = numMatch ? parseInt(numMatch, 10) : 10000;
        const promoPrice = Math.floor(originalPrice * 0.75);

        const convertedPromoValue = Math.round(convertAmount(promoPrice));
        setBudget(String(convertedPromoValue));

        const convertedOriginalStr = formatAmount(originalPrice, true);
        const convertedPromoStr = formatAmount(promoPrice, true);
        setInfoMsg(`Special Offer: <s>${convertedOriginalStr}</s> ${convertedPromoStr} (25% Off)`);
      }
    }
  }, [selectedCurrency.code, mainService, subService]);

  // Submit redirect to ContactUs mapping Form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErr = false;
    setFormErrMsg('');

    if (!mainService) {
      setMainSvcErr('Select one main service capability');
      hasErr = true;
    }
    if (!subService) {
      setSubSvcErr('Choose a subservice deliverable');
      hasErr = true;
    }
    if (!preferredDate) {
      setDateErr('Pick a valid start date');
      hasErr = true;
    } else if (preferredDate < minDate || preferredDate > maxDate) {
      setDateErr(`Date must be between ${minDate} and ${maxDate}`);
      hasErr = true;
    }

    const rate = convertAmount(1);
    const budgetInINR = Number(budget) / (rate || 1);
    if (!budget || isNaN(Number(budget)) || budgetInINR < 1000) {
      setBudgetErr(`Specify a realistic budget above ${formatAmount(1000, true)}`);
      hasErr = true;
    }

    if (hasErr) {
      setFormErrMsg('Please fill out the highlighted fields correctly before proceeding.');
      return;
    }

    // Direct redirection carrying parameters
    onBookingSubmit({
      mainService,
      subService,
      preferredDate,
      budget
    });
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialScrollRef.current) {
        const el = testimonialScrollRef.current;
        const totalScrollableWidth = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= totalScrollableWidth - 5) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Map icon strings to Lucide components
  const renderCategoryIcon = (iconName: string) => {
    const props = { className: "text-purple-700 dark:text-purple-300 flex-shrink-0", size: 36 };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Toolbox': return <Briefcase {...props} />;
      default: return <Zap {...props} />;
    }
  };

  const industries = [
    { label: "E-commerce", icon: "🛒" },
    { label: "Healthcare", icon: "🩺" },
    { label: "EdTech", icon: "📚" },
    { label: "Real Estate", icon: "🏠" },
    { label: "B2B Services", icon: "👔" },
    { label: "Travel & Hospitality", icon: "✈️" },
    { label: "Finance & Retail", icon: "💳" },
    { label: "Energy & Utilities", icon: "⚡" },
  ];

  const doubledIndustries = [...industries, ...industries];

  return (
    <div className="w-full">
      {/* 1. FUTURISTIC HERO BANNER */}
      <section
        className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 dark:border-slate-900/50 dark:from-[#09090f] dark:to-[#07070f]"
        aria-label="Welcome banner"
      >
        {/* Intricate premium multi-color gradient digital glow overlays */}
   {/* Intricate premium multi-color gradient digital glow overlays */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.07),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(124,58,237,0.045),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.16),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.10),transparent_32%)]" />
<div className="absolute top-[10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-purple-200/25 dark:bg-purple-500/10 blur-[120px] pointer-events-none z-0"></div>
<div className="absolute top-[40%] left-[-10%] h-[400px] w-[400px] rounded-full bg-purple-100/30 dark:bg-blue-500/10 blur-[110px] pointer-events-none z-0"></div>
      <div className="relative z-10 mx-auto max-w-7xl">
          <div className=" reveal-down grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-center sm:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-white/5 dark:text-purple-200">
                <Zap size={12} />
                Operational Digital Intelligence
              </div>
              <h1 className="mt-6 text-4xl font-black uppercase leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
                Build with <span className="text-gradient-royal">Intelligence,</span> designed to{' '}
                <span className="text-gradient-lead">Lead.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300 sm:mx-0">
                MaVionix helps startups and established service businesses accelerate operations. We deploy custom websites, conversational support chatbots, workflow automations, and live dashboards that cut out manual tasks and turn your concepts into self-running operational pipelines.
              </p>

              <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
                <button onClick={() => onViewChange('services')} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-#6d28d9  dark:text-slate-950">
                  Explore services  
                  <ArrowRight size={16} color={theme === 'light' ? 'white' : 'white'} />
                </button>
                <button onClick={() => onViewChange('contact')} className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200">
                  Book a strategy call
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { value: '50+', label: 'Launch Builds' },
                  { value: '24h', label: 'Avg Respond' },
                  { value: '98%', label: 'Direct Rating' },
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
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full max-w-xl justify-self-center lg:justify-self-end"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.10)] dark:border-slate-800/80 dark:bg-[#0c0c14] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500"></div>

                <div className="relative z-10 mb-6">
                  <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    Draft Your Digital Scope
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                    Tell us what you want to build. We'll map the parameters instantly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10" noValidate>
                  {/* Select Main Service */}
                  <div className="space-y-1.5">
                    <label htmlFor="mainService" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Main Service Sector <span className="text-purple-700">*</span>
                    </label>
                    <select
                      id="mainService"
                      value={mainService}
                      onChange={handleMainServiceChange}
                      className="w-full h-11 px-3 py-2 rounded-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-600"
                      required
                    >
                      <option value="" disabled>Select Capability</option>
                      {SERVICES.map(c => (
                        <option key={c.label} value={c.label}>{c.label}</option>
                      ))}
                    </select>
                    {mainSvcErr && <p className="text-xs text-red-500 font-semibold" role="alert">{mainSvcErr}</p>}
                  </div>

                  {/* Select Sub Service */}
                  <div className="space-y-1.5">
                    <label htmlFor="subService" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Target Deliverable <span className="text-purple-700">*</span>
                    </label>
                    <select
                      id="subService"
                      value={subService}
                      onChange={handleSubServiceChange}
                      disabled={subServicesList.length === 0}
                      className="w-full h-11 px-3 py-2 rounded-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 disabled:opacity-50"
                      required
                    >
                      <option value="" disabled>Select Sub-Service</option>
                      {subServicesList.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {subSvcErr && <p className="text-xs text-red-500 font-semibold" role="alert">{subSvcErr}</p>}
                  </div>

                  {/* Preferred Date picker */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredDate" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Ideal Launch Week <span className="text-purple-700">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      value={preferredDate}
                      min={minDate}
                      max={maxDate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPreferredDate(e.target.value);
                        setDateErr('');
                      }}
                      className="w-full h-11 px-3 py-2 rounded-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-600"
                      required
                    />
                    {dateErr && <p className="text-xs text-red-500 font-semibold" role="alert">{dateErr}</p>}
                  </div>

                  {/* Pricing estimate display */}
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Target Budget ({selectedCurrency.code}) <span className="text-purple-700">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                        {selectedCurrency.symbol}
                      </span>
                      <input
                        type="number"
                        id="budget"
                        value={budget}
                        placeholder={`   Expected budget in ${selectedCurrency.code}`}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setBudget(e.target.value);
                          setBudgetErr('');
                        }}
                        className="w-full h-11 pl-8 pr-3 py-2 rounded-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-600"
                        required
                      />
                    </div>
                    {budgetErr && <p className="text-xs text-red-500 font-semibold" role="alert">{budgetErr}</p>}
                  </div>

                  {/* Promo Banner Banner */}
                  {infoMsg && (
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/40 rounded-sm text-emerald-800 dark:text-emerald-400 text-xs font-semibold leading-relaxed flex items-center gap-2">
                      <Zap size={14} className="flex-shrink-0 text-emerald-500" />
                      <span dangerouslySetInnerHTML={{ __html: infoMsg }}></span>
                    </div>
                  )}

                  {/* Form-level Error Message banner */}
                  {formErrMsg && (
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-sm text-red-800 dark:text-red-400 text-xs font-semibold leading-relaxed flex items-center gap-2" role="alert">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                      <span>{formErrMsg}</span>
                    </div>
                  )}

                  {/* Submission */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-slate-900 text-white dark:bg-blue-600 font-bold text-sm uppercase tracking-wider rounded-sm hover:opacity-95 active:scale-[0.99] transition-all shadow mt-2"
                  >
                    Lock Scope
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING INDUSTRIES TAPE */}
      <section className="relative py-4 bg-purple-950 overflow-hidden border-y border-purple-900 flex" aria-label="Industries we specialize in">


        {/* changes3565 no need of this */}
        {/* Soft left & right transparency masks for tape depth */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-purple-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-950 to-transparent z-10 pointer-events-none"></div> */}

        <div className="flex items-center gap-8 whitespace-nowrap animate-infinite-scroll py-2 bg-transparent">
          {doubledIndustries.map((ind, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 border border-purple-800 rounded-sm bg-purple-900 text-white text-xs sm:text-sm font-bold shadow-md hover:border-purple-400/50 transition-colors cursor-default"
            >
              <span>{ind.icon}</span>
              <span>{ind.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5. GRAPHITE CLIENT TRUST HUB */}
      <section className="py-12 bg-white dark:bg-[#07070f] border-b border-slate-100 dark:border-slate-900/40 relative overflow-hidden" aria-label="Partner and Brand Trust row">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-loose mb-6">
            Supporting forward-thinking companies & local MSMEs scale operations
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:grid md:grid-cols-5 md:items-center md:justify-items-center opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity duration-300">
  <div className="flex items-center gap-1.5 focus:outline-none select-none basis-[28%] justify-center md:basis-auto">
    <span className="font-sans font-black text-slate-800 dark:text-slate-200 tracking-tighter text-sm uppercase">HIRING<span className="text-purple-700 font-extrabold">TECH</span></span>
  </div>
  <div className="flex items-center gap-1.5 focus:outline-none select-none basis-[28%] justify-center md:basis-auto">
    <span className="font-sans font-black text-slate-800 dark:text-slate-200 tracking-tighter text-sm uppercase">D2C<span className="text-purple-700 font-extrabold">APPAREL</span></span>
  </div>
  <div className="flex items-center gap-1.5 focus:outline-none select-none basis-[28%] justify-center md:basis-auto">
    <span className="font-sans font-black text-slate-800 dark:text-slate-200 tracking-tighter text-sm uppercase">ROHINI<span className="text-purple-700 font-extrabold">WELLNESS</span></span>
  </div>
  <div className="flex items-center gap-1.5 focus:outline-none select-none basis-[28%] justify-center md:basis-auto">
    <span className="font-mono font-bold text-slate-800 dark:text-slate-200 tracking-tighter text-sm">GZ_SENSORS</span>
  </div>
  <div className="flex items-center gap-1.5 focus:outline-none select-none basis-[28%] justify-center md:basis-auto">
    <span className="font-sans font-black text-slate-800 dark:text-slate-200 tracking-tighter text-sm uppercase">DELHI<span className="text-emerald-500 font-extrabold">SaaS</span></span>
  </div>
</div>
        </div>
      </section>

      {/* 3. FLIP-CARD OVERVIEW SERVICE TIERS */}
      <section className="py-24 bg-[#fbfbfe] dark:bg-[#08080c] relative" aria-labelledby="home-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <h2 id="home-services-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              Choose the Capability Your Business Needs
            </h2>
            <div className="w-16 h-[4px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Pruning manual blocks is straightforward. Choose a focused service tier or map multiple scopes together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((cat, idx) => (
              <motion.div
                key={cat.label}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                variants={cardFadeUp}
                transition={cardTransition(idx)}
                className="relative group min-h-[260px] p-6 bg-white dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/25 hover:-translate-y-1"
              >
                <div className="space-y-6">
                  {/* Category icon */}
                  <div className="w-12 h-12 rounded-sm bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center p-2 border border-blue-100/40 dark:border-blue-800/20 group-hover:scale-105 transition-transform">
                    {renderCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{cat.label}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {cat.descShort} {cat.descLong}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-900">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starts Low</span>
                    {/* changes3565 */}
                    <button
                      onClick={() => onViewChange('services', cat.label)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(37,99,235,0.7)] dark:group-hover:[text-shadow:0_0_10px_rgba(96,165,250,0.7)] group-hover:scale-[1.03]"
                    >
                      Learn More &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. FEATURED CASE STUDIES & WORK METRICS GRID */}
      <section className="py-24 bg-[#fafbff] dark:bg-[#07070d] border-t border-slate-100 dark:border-slate-900/40 relative overflow-hidden" aria-labelledby="cases-heading">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-[80px] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 block">Proven Performance</span>
            <h2 id="cases-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              Operational Case Studies
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Explore how custom architectures and targeted integrations have driven direct growth for our partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0c0c14] border border-slate-205/60 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-rose-500/40 hover:shadow-[0_0_40px_rgba(244,63,94,0.35)] hover:-translate-y-1 transition-all duration-300 shadow-sm accent-line-rose"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 text-[10px] bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 rounded-sm font-bold uppercase tracking-wider border border-rose-500/20">
                    E-Commerce
                  </span>
                  <div className="flex items-center gap-1 text-rose-600 font-extrabold text-xs">
                    <TrendingUp size={12} />
                    <span>+140% Conversions</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                  Rohini Wellness Store (D2C)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Redesigned checkout workflows, compressed site assets for sub-2s mobile loading, and set up automatic inventory synchronization pipelines.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">Shopify</span>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">Vite React</span>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">SEO</span>
                </div>
              </div>
              <div className="p-4 bg-rose-50/10 dark:bg-[#12020a]/30 border-t border-slate-100 dark:border-slate-900 text-center">
                <span className="text-[10px] text-rose-500 font-extrabold uppercase tracking-wider block">Average Speed Up: 68% Loading Reductions</span>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0c0c14] border border-slate-205/60 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:-translate-y-1 transition-all duration-300 shadow-sm accent-line-emerald"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 text-[10px] bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-600 rounded-sm font-bold uppercase tracking-wider border border-emerald-500/20">
                    AI Chatbot
                  </span>
                  <div className="flex items-center gap-1 text-emerald-600 font-extrabold text-xs">
                    <TrendingUp size={12} />
                    <span>40% Time Saved</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                  HiringTech Qualifying system
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Engineered an official Meta API customer bot with conversational menus for candidate pre-screening and qualification. Bypassed manual triage steps entirely.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-[#111119] text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">Meta WhatsApp</span>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-[#111119] text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">Node JS</span>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-[#111119] text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">Google Sheets API</span>
                </div>
              </div>
              <div className="p-4 bg-emerald-50/10 dark:bg-[#02120e]/30 border-t border-slate-100 dark:border-slate-900 text-center">
                <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider block">Deflection Rate: 9,200 Queries Logged</span>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ ease: "easeOut" }}
              className="bg-white dark:bg-[#0c0c14] border border-slate-205/60 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:-translate-y-1 transition-all duration-300 shadow-sm accent-line-indigo"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 text-[10px] bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 rounded-sm font-bold uppercase tracking-wider border border-indigo-500/20">
                    Workflow Automation
                  </span>
                  <div className="flex items-center gap-1 text-indigo-600 font-extrabold text-xs">
                    <TrendingUp size={12} />
                    <span>20h / Wk Automated</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                  Delhi SaaS Pipeline Engine
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Integrated HubSpot CRM fields with n8n workflow systems. Programmed real-time leads scores routing, sales meetings sync, and slack notifications alerts.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">n8n Engine</span>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">HubSpot CRM</span>
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 text-[10px] text-slate-450 dark:text-slate-400 font-bold border border-slate-100 dark:border-slate-900">Zapier</span>
                </div>
              </div>
              <div className="p-4 bg-indigo-50/10 dark:bg-[#040212]/30 border-t border-slate-100 dark:border-slate-900 text-center">
                <span className="text-[10px] text-indigo-600 font-extrabold uppercase tracking-wider block">Friction Deflected: Error Retries Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE MAVIONIX SECTION */}
      <section className="py-24 bg-white dark:bg-[#07070f] border-t border-slate-100 dark:border-slate-800" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text layout */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight uppercase">
                Why Partners Choose <span className="text-purple-700 dark:text-purple-300">MaVionix</span>
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500"></div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                We replace empty digital promises with practical engineering, transparent timelines, and automated systems. Every single page or pipeline we construct serves a clear business goal: capturing data, deflecting helpdesk, or accelerating checkouts.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onViewChange('contact')}
                  className="px-8 py-3.5 rounded-sm bg-slate-900 text-white dark:bg-#6d28d9  dark:text-slate-900 font-extrabold text-xs tracking-wider uppercase shadow-sm cursor-pointer transition-all hover:opacity-90"
                >
                  Book Free Consult
                </button>
              </div>
            </motion.div>

            {/* Right side briefing illustration mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-12 xl:col-span-5 lg:col-start-8"
            >
              <img
                src={enhanceImageUrl('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80', { width: 860, quality: 90 })}
                srcSet={enhancedSrcSet('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80', [520, 760, 960], { quality: 90 })}
                sizes="(min-width: 1280px) 42vw, 100vw"
                alt="MaVionix design team aligning custom app layouts and UI components"
                className="image-enhanced image-enhanced-photo w-full h-64 object-cover rounded-sm border border-slate-200 dark:border-slate-800 shadow"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Grid Cards Container */}
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <motion.div
                ref={emeraldCardRef}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                onMouseEnter={() => {
                  emeraldCardRef.current?.style.setProperty('box-shadow', '0 0 30px rgba(16,185,129,0.5)', 'important');
                }}
                onMouseLeave={() => {
                  emeraldCardRef.current?.style.removeProperty('box-shadow');
                }}
                className="p-6 bg-[#fbfbfe] dark:bg-[#0d0d14] border border-slate-200/50 dark:border-slate-900 rounded-sm shadow-sm hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 font-bold shadow-xs">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">Government Compliant</h3>
                <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-400 leading-relaxed">
                  Registered under India's micro business registry (MSME Registered Co.) and active in Department of Startup India review logs.
                </p>
              </motion.div>

              <motion.div
                ref={indigoCardRef}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                onMouseEnter={() => {
                  indigoCardRef.current?.style.setProperty('box-shadow', '0 0 30px rgba(99,102,241,0.5)', 'important');
                }}
                onMouseLeave={() => {
                  indigoCardRef.current?.style.removeProperty('box-shadow');
                }}
                className="p-6 bg-[#fbfbfe] dark:bg-[#0d0d14] border border-slate-200/50 dark:border-slate-900 rounded-sm shadow-sm hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 font-bold shadow-xs">
                  <Award size={20} />
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">Certified Specialists</h3>
                <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-400 leading-relaxed">
                  Deeply specialized inside OpenAI fine-tuning paradigms, Google Gemini LLMs SDKs, and LangChain vector structures.
                </p>
              </motion.div>

              <motion.div
                ref={roseCardRef}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                onMouseEnter={() => {
                  roseCardRef.current?.style.setProperty('box-shadow', '0 0 30px rgba(244,63,94,0.5)', 'important');
                }}
                onMouseLeave={() => {
                  roseCardRef.current?.style.removeProperty('box-shadow');
                }}
                className="p-6 bg-[#fbfbfe] dark:bg-[#0d0d14] border border-slate-200/50 dark:border-slate-900 rounded-sm shadow-sm hover:border-rose-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4 font-bold shadow-xs">
                  <HeartHandshake size={20} />
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">24/7 Operations</h3>
                <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-400 leading-relaxed">
                  Active monitoring checks and custom, monthly SLA agreements to resolve server issues before customers or staff are affected.
                </p>
              </motion.div>

              <motion.div
                ref={blueCardRef}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                onMouseEnter={() => {
                  blueCardRef.current?.style.setProperty('box-shadow', '0 0 30px rgba(59,130,246,0.5)', 'important');
                }}
                onMouseLeave={() => {
                  blueCardRef.current?.style.removeProperty('box-shadow');
                }}
                className="p-6 bg-[#fbfbfe] dark:bg-[#0d0d14] border border-slate-200/50 dark:border-slate-900 rounded-sm shadow-sm hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 font-bold shadow-xs">
                  <Users size={20} />
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">Expert Engineers</h3>
                <p className="text-xs sm:text-sm text-slate-450 dark:text-slate-400 leading-relaxed">
                  Clear, prompt communication from veteran developers who map user experience cleanly before writing code libraries.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.1. INTERACTIVE PARTNERSHIP BLUEPRINT (ROADMAP) */}
      <section className="py-24 bg-[#fafbff] dark:bg-[#07070d] border-t border-slate-100 dark:border-slate-900/40 relative overflow-hidden" aria-labelledby="blueprint-heading">
        <div className="absolute top-[20%] right-[-15%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-[90px] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 block">Our Process Blueprint</span>
            <h2 id="blueprint-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              How We Work Together
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              A structured, client-centric timeline from the initial scope session to scaling your active pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Steps Selection List Column */}
            <div className="lg:col-span-4 space-y-3.5">
              {[
                { step: "01", title: "Discovery Audit", label: "24h Scope Draft" },
                { step: "02", title: "Interactive UI/UX", label: "Figma wireframing" },
                { step: "03", title: "Agile Sandbox Sprints", label: "Coding & systems integrations" },
                { step: "04", title: "Automated QA Test", label: "Simulated load checks" },
                { step: "05", title: "Launch & Support", label: "Walkthroughs & retainers" }
              ].map((item, idx) => (
                <motion.button
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={cardViewport}
                  variants={cardFadeUp}
                  transition={cardTransition(idx)}
                  onClick={() => setActiveBlueprintStep(idx)}
                  className={`w-full text-left p-4 rounded-sm border flex items-center justify-between transition-all duration-200 group ${activeBlueprintStep === idx
                    ? "bg-slate-900 dark:bg-blue-600 text-white border-transparent shadow"
                    : "bg-white dark:bg-[#0c0c14] text-slate-700 dark:text-white border-slate-200/50 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800"
                    }`}
                  aria-label={`Show details for phase ${item.step}: ${item.title}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-black font-mono tracking-wider ${activeBlueprintStep === idx ? "text-blue-200 dark:text-blue-250" : "text-blue-600 dark:text-blue-400"
                      }`}>
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-tight">{item.title}</h3>
                      <p className={`text-[10px] sm:text-xs font-semibold ${activeBlueprintStep === idx ? "text-slate-250" : "text-slate-450 dark:text-slate-500"
                        }`}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={14} className={`transition-transform duration-200 group-hover:translate-x-1 ${activeBlueprintStep === idx ? "text-white" : "text-slate-400"
                    }`} />
                </motion.button>
              ))}
            </div>

            {/* Step Detail Content Card Column */}
            <div className="lg:col-span-8 bg-white dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 rounded-sm p-8 shadow-sm min-h-[340px] flex flex-col justify-between relative overflow-hidden">
              {/* Abs grid pattern behind card */}
              <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBlueprintStep}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="h-full flex flex-col justify-between relative z-10"
                >
                  {activeBlueprintStep === 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Clock size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Phase 01 &bull; 24h Initiation</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase leading-snug">
                        Discovery Audit &amp; Technical Scope Mapping
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        We start with a thorough analysis of your team's existing manual procedures. We research what applications you use (e.g., spreadsheets, legacy CRM databases, or manual messaging queues), identify friction points, and present a structured digital blueprint with a fixed, transparent proposal.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-450 dark:text-slate-500 uppercase tracking-widest block">Core Deliverables</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">Data flow charts &amp; quote proposal</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-455 dark:text-slate-500 uppercase tracking-widest block">Average Duration</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">1 - 2 Business Days</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeBlueprintStep === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <Palette size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Phase 02 &bull; Visual Architecture</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase leading-snug">
                        Interactive Figma UI/UX Design Models
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        Before writing any frontend code, our design unit constructs pixel-perfect layout blueprints inside collaborative Figma workspace frames. This includes actual mock screen states, wireframe links, key user paths, and detailed spacing component charts.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-450 dark:text-slate-500 uppercase tracking-widest block">Core Deliverables</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">Clickable high-fidelity Figma links</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-455 dark:text-slate-500 uppercase tracking-widest block">Average Duration</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">3 - 7 Business Days</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeBlueprintStep === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Cpu size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Phase 03 &bull; Core Development</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase leading-snug">
                        Agile Sprints inside Private Dev Sandboxes
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        Our developers write production-grade, modular code libraries on Vite React architectures. We connect CRM hooks, deploy Pinecone vector nodes, implement robust server routes, and connect your systems to automated, self-running operations pipelines.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-450 dark:text-slate-500 uppercase tracking-widest block">Core Deliverables</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">Weekly testable codebase previews</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-455 dark:text-slate-500 uppercase tracking-widest block">Average Duration</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">2 - 5 Business Weeks</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeBlueprintStep === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-amber-500">
                        <ShieldCheck size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Phase 04 &bull; Stress Testing</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase leading-snug">
                        Automated Quality Gates &amp; Edge Case Testing
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        We initiate multiple functional checks. We scan of potential script errors under our typescript configurations, simulate chatbot boundaries to ensure safe responses, analyze Core Web Vitals targets, and run responsive resolution stress checks.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-450 dark:text-slate-500 uppercase tracking-widest block">Core Deliverables</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">Performance, SEO &amp; responsive logs</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-455 dark:text-slate-500 uppercase tracking-widest block">Average Duration</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">2 - 5 Business Days</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeBlueprintStep === 4 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Phase 05 &bull; Operational Launch</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase leading-snug">
                        Handoff Video Manuals &amp; Retainer SLA Provisioning
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        To keep handoff seamless, we record custom walkthrough recordings teaching your team how to scale copy or databases. Standard retainers enable security sweeps, automated cloud databases backups, and immediate troubleshooting support.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                        <div>
                          <span className="text-[10px] font-extrabold text-slate-450 dark:text-slate-500 uppercase tracking-widest block">Core Deliverables</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">Credentials key, tutorial loops &amp; Retainer SLA</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold text-[#94a3b8] dark:text-slate-500 uppercase tracking-widest block">Average Duration</span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-bold mt-1">Ongoing Operations Support</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-900/50 flex justify-end">
                <button
                  onClick={() => onViewChange('contact')}
                  className="px-6 py-2.5 bg-slate-900 text-white dark:bg-#6d28d9  dark:text-slate-950 font-black text-xs uppercase tracking-wider rounded-sm hover:opacity-90 active:scale-[0.99] transition-transform shadow-sm"
                >
                  Consult on your Scope &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION WITH CAROUSEL */}
      <section className="py-24 bg-[#fbfbfe] dark:bg-[#08080c] relative" aria-labelledby="testimonial-header-text">
        {/* Abstract subtle line decorations */}
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[linear-gradient(45deg,#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 block">Client Testimonials</span>
            <h2 id="testimonial-header-text" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              What Our Partners Say
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 mx-auto"></div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Read how specialized automation chatbots and website performance tuneups accelerated direct growth.
            </p>
          </div>

          <div
            ref={testimonialScrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((test, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                variants={cardFadeUp}
                transition={cardTransition(index)}
                className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 p-6 rounded-sm shadow-sm snap-start flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars row */}
                  <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars review">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-150 dark:border-slate-900">
                  <img
                    src={enhanceImageUrl(test.avatar, { width: 96, height: 96, quality: 90, crop: 'faces' })}
                    alt={`${test.name} client avatar`}
                    className="image-enhanced image-enhanced-photo w-11 h-11 rounded-full object-cover border border-slate-200"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight">{test.name}</h3>
                    <p className="text-[10px] text-slate-400">{test.role}, <span className="text-blue-600 dark:text-blue-400 font-extrabold">{test.company}</span></p>
                    <span className="text-[9px] text-slate-400 block mt-0.5">{test.reviewDate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center text-xs text-slate-400 mt-2">
            Swipe left or right to explore more reviews
          </div>
        </div>
      </section>


    </div>
  );
}
