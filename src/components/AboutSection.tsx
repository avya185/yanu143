import React, { useEffect, useState } from 'react';
import { FUTURE_GOALS, CERTIFICATIONS } from '../data';
import { Award, ShieldAlert, BadgeCheck, CheckCircle, Milestone, MapPin, Mail, Phone, ArrowUpRight, Cpu, Palette, Users, Building2  } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
import PageHero from './ui/PageHero';
<<<<<<< HEAD
import { cardViewport, useCardTransition } from '../utils/animations';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

interface AboutSectionProps {
  onViewChange: (view: string) => void;
}

const ABOUT_SLIDES = [
  {
    src: '/mavionix-about-campus.png',
    alt: 'MaVionix office campus at dusk with illuminated branding',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional product team discussing digital strategy in a modern workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    alt: 'Developer working on a responsive web interface with code visible',
  },
  {
    src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Analytics dashboard and data review in a collaborative business environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Executive team planning automation and operational workflows',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Product design review with a modern digital interface',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Creative design and digital prototyping with team collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Flexible collaborative workspace for planning scalable software solutions',
  },
  {
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    alt: 'City skyline representing a business hub and corporate presence',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern creative workspace with branding and digital imagery tools',
  },
];

const DELHI_LOCATION_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80',
    alt: 'India Gate in New Delhi representing the MaVionix NCR headquarters region',
  },
  {
    src: 'https://images.unsplash.com/photo-1595928607828-6fdaee9c0942?auto=format&fit=crop&w=900&q=80',
    alt: 'New Delhi city architecture and civic district',
  },
  {
    src: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=900&q=80',
    alt: 'Delhi urban skyline and NCR business corridor',
  },
  {
    src: 'https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?auto=format&fit=crop&w=900&q=80',
    alt: 'New Delhi urban streets and NCR business movement',
  },
];

export default function AboutSection({ onViewChange }: AboutSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeLocationSlide, setActiveLocationSlide] = useState(0);
<<<<<<< HEAD
  const cardTransition = useCardTransition();
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % ABOUT_SLIDES.length);
    }, 3500);

    return () => window.clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const locationTimer = window.setInterval(() => {
      setActiveLocationSlide((current) => (current + 1) % DELHI_LOCATION_SLIDES.length);
    }, 4200);

    return () => window.clearInterval(locationTimer);
  }, []);

  const renderBadgeIcon = (type: string) => {
    switch (type) {
      case 'medal': return <Award className="text-purple-700 dark:text-purple-300" size={18} />;
      case 'shield': return <ShieldAlert className="text-amber-500" size={18} />;
      case 'check': return <BadgeCheck className="text-emerald-500" size={18} />;
      default: return <CheckCircle className="text-violet-600 dark:text-violet-300" size={18} />;
    }
  };

  return (
    <div className="w-full relative pt-12 pb-16 overflow-hidden bg-white dark:bg-[#07070f]">
      {/* Subtle dotted grid decoration */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16"
        >
          {/* changes3565 */}
          <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[440px] flex items-end justify-center pt-10 sm:pt-14" aria-hidden="true">
            <div className="about-robo-stage">
              <span className="about-robo-core"></span>
              <span className="about-robo-ring about-robo-ring-one"></span>
              <span className="about-robo-ring about-robo-ring-two"></span>
              <span className="about-robo-grid"></span>
              <span className="about-robo-beam"></span>
              <img
                src="/mavionix-robo.png"
                alt="MaVionix branded robot assistant illustration"
                className="about-robo-image"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

<<<<<<< HEAD
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 pt-6">
=======
          <div className="lg:col-span-7 text-center lg:text-left space-y-4">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-white/5 dark:text-purple-200 mx-auto lg:mx-0">
  <Building2 size={12} />
  About MaVionix
</div> <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight">
              Connecting Traditional Workflows with <span className="text-gradient-royal">Smart</span>{' '}
              <span className="text-slate-900 dark:text-white">Systems</span> and{' '}
              <span className="text-gradient-lead">Intelligence</span>
            </h1>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 mx-auto lg:mx-0"></div>
            <p className="text-xs sm:text-base text-slate-505 dark:text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
<<<<<<< HEAD
              Headquartered in A-1/86, Sector-17, Rohini, Delhi - 110089, with an office in Modinagar, Ghaziabad - 201204, MaVionix bridges the gap between manual business routines and modern, automated tech stacks.
=======
              Headquartered in Rohini, Delhi - 110085, with an office in Modinagar, Ghaziabad - 201204, MaVionix bridges the gap between manual business routines and modern, automated tech stacks.
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            </p>
          </div>
        </motion.div>

        {/* 2. THE STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Detailed textual info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
              Our Journey &amp; Operational Ideals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              MaVionix originated from a key observation: while advanced AI models (such as Gemini or OpenAI) are incredibly powerful, most traditional businesses struggle to implement them into practical, everyday workflows. We resolved to make these technologies highly accessible.
            </p>
            <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
              We shifted away from generic digital templates. By developing robust web pages, integrating official communication APIs, and deploying precise code bases, we construct digital solutions that solve real business bottlenecks. Our focus is on clean architectures, measurable lead conversions, and rapid support.
            </p>

            {/* Premium Journey Slider */}
            <div className="pt-2">
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-sm border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={ABOUT_SLIDES[activeSlide].src}
                    src={enhanceImageUrl(ABOUT_SLIDES[activeSlide].src, { width: 1200, quality: 90 })}
                    srcSet={enhancedSrcSet(ABOUT_SLIDES[activeSlide].src, [640, 960, 1200, 1440], { quality: 90 })}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    alt={ABOUT_SLIDES[activeSlide].alt}
                    className="image-enhanced image-enhanced-photo absolute inset-0 h-full w-full object-cover"
                    loading={activeSlide === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pb-3 pt-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    {String(activeSlide + 1).padStart(2, '0')} / {ABOUT_SLIDES.length}
                  </span>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {ABOUT_SLIDES.map((slide, index) => (
                      <span
                        key={slide.src}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/45'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="pt-4 flex gap-4 items-center">
=======
            <div className="pt-4 flex flex-wrap gap-4 items-center">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              <button
                onClick={() => onViewChange('services')}
                className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider hover:underline"
              >
                Browse our Catalog &rarr;
              </button>
              <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">|</span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium italic block">
                Official MSME Registered Enterprise.
              </span>
            </div>
          </motion.div>

          {/* Clean White/Slate Credentials Card (rounded-sm) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 bg-[#fbfbfe] dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 p-6 sm:p-8 rounded-sm shadow-sm"
          >
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Corporate Registrations
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  viewport={cardViewport}
                  transition={cardTransition(index, 0.4, 0.08, 0.32)}
=======
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.32), ease: [0.22, 1, 0.36, 1] }}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                  className="flex gap-4 items-start p-3 rounded-sm bg-white dark:bg-slate-950/60 border border-slate-100 dark:border-slate-900 hover:border-blue-500/25 transition-all"
                >
                  <div className="w-9 h-9 rounded-sm bg-blue-50/50 dark:bg-blue-950/10 border border-blue-50 dark:border-blue-900/10 flex items-center justify-center flex-shrink-0">
                    {renderBadgeIcon(cert.badgeType)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 leading-tight">
                      {cert.name}
                    </h4>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase block mt-0.5">{cert.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SPECIAL EXPERTS SECTION */}
        <section className="py-16 mb-20 bg-slate-50/40 dark:bg-[#09090f]/50 border border-slate-200/50 dark:border-slate-900/60 rounded-sm p-8 sm:p-12 relative overflow-hidden" aria-labelledby="specialists-heading">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 block">Our Specialists</span>
            <h2 id="specialists-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase leading-snug tracking-tight">
              Certified Engineering Team
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 mx-auto"></div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold max-w-xl mx-auto mb-2">
              Our core experts combine technical rigor with user experience flow optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Team Mate 1: Prateek Sharma */}
<<<<<<< HEAD
            <div
              className="reveal-up bg-white dark:bg-[#0c0c14] border border-slate-205/60 p-6 rounded-sm text-center space-y-4 shadow-sm hover:border-indigo-500/30 dark:hover:border-indigo-400/20 hover:glow-indigo-shimmer hover:-translate-y-1 transition-all duration-300 group accent-line-indigo"
=======
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0c0c14] border border-slate-205/60 p-6 rounded-sm text-center space-y-4 shadow-sm hover:border-indigo-500/30 dark:hover:border-indigo-400/20 hover:glow-indigo-shimmer hover:-translate-y-1 transition-all duration-300 group accent-line-indigo"
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            >
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-50/50 dark:bg-slate-950 flex items-center justify-center border border-[#ebdff7] relative select-none">
                <span className="text-lg sm:text-xl font-black text-indigo-600 uppercase font-mono group-hover:scale-105 transition-transform duration-200">PS</span>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-indigo-500 border-2 border-white dark:border-[#0c0c14] flex items-center justify-center shadow-xs" title="Lead Solutions Architect">
                  <Cpu size={11} className="text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Prateek Sharma</h3>
                <p className="text-xs text-indigo-600 font-extrabold uppercase tracking-wider">Lead Solutions Architect</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Over 8 years of database design, secure Express configurations, and cloud deployment. Alumnus of NCR engineering academies.
              </p>
<<<<<<< HEAD
            </div>

            {/* Team Mate 2: Neha Chawla */}
            <div
              className="reveal-up bg-white dark:bg-[#0c0c14] border border-slate-205/60 p-6 rounded-sm text-center space-y-4 shadow-sm hover:border-rose-500/30 dark:hover:border-rose-400/20 hover:glow-rose-shimmer hover:-translate-y-1 transition-all duration-300 group accent-line-rose"
=======
            </motion.div>

            {/* Team Mate 2: Neha Chawla */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0c0c14] border border-slate-205/60 p-6 rounded-sm text-center space-y-4 shadow-sm hover:border-rose-500/30 dark:hover:border-rose-400/20 hover:glow-rose-shimmer hover:-translate-y-1 transition-all duration-300 group accent-line-rose"
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            >
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-50/50 dark:bg-slate-950 flex items-center justify-center border border-[#ebdff7] relative select-none">
                <span className="text-lg sm:text-xl font-black text-rose-500 uppercase font-mono group-hover:scale-105 transition-transform duration-200">NC</span>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-rose-500 border-2 border-white dark:border-[#0c0c14] flex items-center justify-center shadow-xs" title="Principal UI/UX Designer">
                  <Palette size={11} className="text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Neha Chawla</h3>
                <p className="text-xs text-rose-500 font-extrabold uppercase tracking-wider">Principal UI/UX Designer</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Focuses strictly on conversion optimization maps, mobile screen layouts (Figma), and seamless interactive wireframe structures.
              </p>
<<<<<<< HEAD
            </div>

            {/* Team Mate 3: Anu Sharma */}
            <div
              className="reveal-up bg-white dark:bg-[#0c0c14] border border-slate-205/60 p-6 rounded-sm text-center space-y-4 shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-400/20 hover:glow-emerald-shimmer hover:-translate-y-1 transition-all duration-300 group accent-line-emerald"
=======
            </motion.div>

            {/* Team Mate 3: Anu Sharma */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0c0c14] border border-slate-205/60 p-6 rounded-sm text-center space-y-4 shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-400/20 hover:glow-emerald-shimmer hover:-translate-y-1 transition-all duration-300 group accent-line-emerald"
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            >
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50/50 dark:bg-slate-950 flex items-center justify-center border border-[#ebdff7] relative select-none">
                <span className="text-lg sm:text-xl font-black text-emerald-600 uppercase font-mono group-hover:scale-105 transition-transform duration-200">AS</span>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0c0c14] flex items-center justify-center shadow-xs" title="Automation Specialist">
                  <Cpu size={11} className="text-white" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">Anu Sharma</h3>
                <p className="text-xs text-emerald-600 font-extrabold uppercase tracking-wider">Automation Specialist</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Deploys official Meta Sandbox sandboxes, n8n databases flows, OpenAI vector embeddings, and LangChain chatbot systems.
              </p>
<<<<<<< HEAD
            </div>
=======
            </motion.div>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          </div>
        </section>

        {/* 3. COHESIVE VERTICAL TIMELINE ROADMAP */}
        <div className="bg-[#fbfbfe] dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 rounded-sm p-8 sm:p-12 mb-16 relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 rounded-sm w-10 h-10 bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center border border-purple-100 dark:border-purple-900 text-purple-600 dark:text-purple-300" aria-hidden="true">
            <Milestone size={18} />
          </div>

          <div className="max-w-2xl mx-auto space-y-4 text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
              Forward Corporate Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Charting our strategic steps to scale operations and deploy helpful AI automation pipelines.
            </p>
          </div>

          {/* Timeline points stack */}
          <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10">
            {FUTURE_GOALS.map((goal, idx) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
                viewport={cardViewport}
                transition={cardTransition(idx)}
=======
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                className="relative"
              >
                {/* Year tag dot - clean blue minimalism */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#07070f] border-2 border-purple-600 transition-colors" />

                <div className="bg-white dark:bg-slate-950 p-6 rounded-sm border border-slate-200/50 dark:border-slate-900 shadow-sm transition-all hover:border-blue-500/10">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-sm text-[10px] sm:text-xs font-black bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300">
                      {goal.year} Goal
                    </span>
                    <span className="h-[2px] w-6 bg-slate-100 dark:bg-slate-800 hidden sm:inline"></span>
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-wider uppercase">
                      {goal.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. OFFICE REGION MAP INDICATOR / BRIEF INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-white dark:bg-purple-950  border border-purple-900 rounded-sm p-4 sm:p-6 lg:p-8 text-left shadow-md overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"></div>

          <div className="lg:col-span-5 relative min-h-[260px] overflow-hidden rounded-sm border border-purple-700/70 bg-purple-900/50 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={DELHI_LOCATION_SLIDES[activeLocationSlide].src}
                src={enhanceImageUrl(DELHI_LOCATION_SLIDES[activeLocationSlide].src, { width: 900, quality: 90 })}
                srcSet={enhancedSrcSet(DELHI_LOCATION_SLIDES[activeLocationSlide].src, [520, 760, 960, 1200], { quality: 90 })}
                sizes="(min-width: 1024px) 42vw, 100vw"
                alt={DELHI_LOCATION_SLIDES[activeLocationSlide].alt}
                className="image-enhanced image-enhanced-photo absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-200 block">Delhi NCR Operations</span>
                  {/* changes3565 */}
                  <span
                    className="text-sm sm:text-base font-white uppercase tracking-tight"
                    style={{ color: '#ffffff' }}
                  >
                    Rohini HQ + Modinagar Office
                  </span>
                </div>
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  {DELHI_LOCATION_SLIDES.map((slide, index) => (
                    <span
                      key={slide.src}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === activeLocationSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/45'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative z-10 bg-white/95 dark:bg-slate-950/80 border border-white/30 dark:border-purple-700/40 rounded-sm p-5 sm:p-6 lg:p-8 shadow-lg">
            <span className="text-[10px] font-black text-purple-700 dark:text-purple-200 uppercase tracking-widest block mb-2">Our Base</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Headquarters &amp; Office
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed max-w-2xl">
              From our Delhi NCR presence, MaVionix coordinates product strategy, automation builds, support workflows, and remote integrations for clients globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              <div className="rounded-sm border border-purple-100 dark:border-purple-800/60 bg-purple-50/70 dark:bg-purple-950/25 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-purple-700 dark:text-purple-300" />
                  <span className="text-[10px] font-black text-purple-700 dark:text-purple-200 uppercase tracking-widest">Headquarters</span>
                </div>
<<<<<<< HEAD
                <p className="text-sm font-black text-slate-900 dark:text-white">HQ: A-1/86, Sector-17,<br></br> Rohini, Delhi - 110089</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-300 mt-0.5">Pincode: 110089</p>
=======
                <p className="text-sm font-black text-slate-900 dark:text-white">Rohini, Delhi</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-300 mt-0.5">Pincode: 110085</p>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              </div>

              <div className="rounded-sm border border-purple-100 dark:border-purple-800/60 bg-purple-50/70 dark:bg-purple-950/25 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-purple-700 dark:text-purple-300" />
                  <span className="text-[10px] font-black text-purple-700 dark:text-purple-200 uppercase tracking-widest">Office</span>
                </div>
                <p className="text-sm font-black text-slate-900 dark:text-white">Modinagar, Ghaziabad</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-300 mt-0.5">Pincode: 201204</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-purple-100 dark:border-purple-800/60 pt-5">
              <div>
                <span className="text-[10px] text-purple-700 dark:text-purple-200 font-black uppercase tracking-wider block">Coordination Desk</span>
<<<<<<< HEAD
                <a href="mailto:mavionix360@gmail.com" className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-slate-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-200 mt-1">
                  <Mail size={15} />
                  mavionix360@gmail.com
                </a>
                <a href="tel:+917818037404" className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold mt-1 hover:text-purple-700 dark:hover:text-purple-200">
                  <Phone size={14} />
                  WhatsApp: +91 7065132579
=======
                <a href="mailto:contactmavionix@gmail.com" className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-slate-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-200 mt-1">
                  <Mail size={15} />
                  contactmavionix@gmail.com
                </a>
                <a href="tel:+917818037404" className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold mt-1 hover:text-purple-700 dark:hover:text-purple-200">
                  <Phone size={14} />
                  WhatsApp: +91 78180 37404
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                </a>
              </div>

              <button
                onClick={() => onViewChange('contact')}
                className="px-6 py-3 rounded-sm bg-slate-950 dark:bg-[#6d28d9] text-white font-black text-xs uppercase tracking-wider shadow-sm hover:bg-purple-800 active:scale-[0.99] transition-transform inline-flex items-center justify-center gap-2"
              >
                Contact Support
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
