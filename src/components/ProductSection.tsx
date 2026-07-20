import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  Cpu,
  Lock,
  Rocket,
  Sparkles,
  Store,
  Target,
  Users2,
  Workflow,
} from 'lucide-react';
import PageHero from './ui/PageHero';
import SuiteDetailPage from './product/SuiteDetailPage';
import { PRODUCT_SUITES, getSuiteBySlug } from '../data/productSuites';

const KEY_FEATURES = [
  { icon: Cpu, title: 'Natural-language building', description: 'Describe what you need -a product, a workflow, a campaign -and MaVionix builds it for you.' },
  { icon: Boxes, title: 'One connected platform', description: 'Development, creative, business, and automation share the same data and the same AI intelligence layer.' },
  { icon: Workflow, title: 'End-to-end automation', description: 'Agents and workflows carry multi-step processes through to completion with minimal human input.' },
  { icon: Rocket, title: 'Instant deployment', description: 'Ship websites, apps, and workflows straight to production without a separate DevOps step.' },
];

const BENEFITS = [
  'Replace a dozen disconnected tools with one AI-powered ecosystem.',
  'Move from idea to live product, campaign, or workflow in hours.',
  'Cut the cost and delay of hiring specialists for every task.',
  'Keep every department working from the same live data.',
  'Scale from a single suite to the full platform without switching systems.',
];

const AUDIENCE = [
  { icon: Store, title: 'Startups & Founders', description: 'Launch products and run operations without an engineering or ops team on day one.' },
  { icon: Building2, title: 'Growing Businesses', description: 'Connect sales, finance, HR, and support as headcount and complexity increase.' },
  { icon: Users2, title: 'Agencies & Teams', description: 'Produce client work -sites, campaigns, creative -at a fraction of the usual turnaround.' },
  { icon: Target, title: 'Enterprises', description: 'Automate cross-department workflows and get a live, AI-generated view of the business.' },
];

type ProductSectionProps = {
  onViewChange: (view: string, slug?: string) => void;
  activeSlug?: string | null;
};

export default function ProductSection({ onViewChange, activeSlug }: ProductSectionProps) {
  const activeSuite = getSuiteBySlug(activeSlug);

  if (activeSuite) {
    return <SuiteDetailPage suite={activeSuite} onViewChange={onViewChange} />;
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#07070f] text-slate-900 dark:text-white">
      <PageHero
        badge={
          <>
            <Sparkles size={12} />
            The MaVionix Platform
          </>
        }
        title={
          <>
            One ecosystem-{' '}
            <span className="text-gradient-royal">Build, create, </span>{' '}
            <span className="text-gradient-lead">operate, automate.</span>
          </>
        }
        description="MaVionix is a single AI-powered ecosystem that lets any organization build, create, operate, automate, and scale -all from one unified platform, without stitching together a dozen separate tools."
        actions={
          <>
            <button
              type="button"
              onClick={() => document.getElementById('solutionSuite')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#6d28d9] dark:text-slate-950"
            >
              Explore the suites
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onViewChange('contact')}
              className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200"
            >
              Request a demo
            </button>
          </>
        }
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20 sm:space-y-28">
        {/* Problem Statement */}
        <div className="reveal-up grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-6 sm:p-8">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Problem Statement</span>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Organizations today run on a patchwork of disconnected tools -one for building software, another for
              creative work, another for operations, and yet another for automation. Every handoff between them costs
              time, money, and context, and no single system ever shows the full picture.
            </p>
          </div>
          <div className="reveal-up reveal-delay-1 rounded-3xl border border-purple-200/70 dark:border-purple-500/25 bg-purple-50 dark:bg-purple-950/20 p-6 sm:p-8">
            <span className="text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">Our Solution</span>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-900 dark:text-white">
              MaVionix unifies every one of those functions into a single AI-powered ecosystem. One platform, one AI
              intelligence layer, and one login lets organizations build, create, operate, automate, and scale-
              without ever switching systems.
            </p>
          </div>
        </div>

        {/* Our Solution: the suites */}
        <div id="solutionSuite" className="scroll-mt-24">
          <div className="reveal-up mb-8 sm:mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 dark:border-purple-500/25 dark:bg-white/5 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 dark:text-purple-200">
              <Boxes size={12} />
              Diffrent suites, one platform
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
              Every suite you need, built in
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Each suite stands on its own, and every suite is connected. Pick one to start, or run them all together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_SUITES.map((suite, i) => {
              const SuiteIcon = suite.icon;
              return (
                <button
                  key={suite.id}
                  onClick={() => onViewChange('product', suite.slug)}
                  className={`reveal-up reveal-delay-${(i % 4) + 1} group text-left rounded-2xl border ${suite.overviewCardBg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${suite.overviewIconWrap} group-hover:scale-105 transition-transform`}>
                    <SuiteIcon size={20} />
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{suite.name}</h3>
                    <ArrowUpRight size={16} className="mt-0.5 flex-shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">{suite.tagline}</p>
                  <p className="mt-4 text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {suite.modules.length} modules
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <div className="reveal-up mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KEY_FEATURES.map((feature, i) => {
              const FIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`reveal-up reveal-delay-${i + 1} rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c14] p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300 border border-purple-100 dark:border-purple-900/40">
                    <FIcon size={20} />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="reveal-up rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-6">
            Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className={`reveal-up reveal-delay-${(i % 4) + 1} flex items-start gap-3`}>
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-purple-700 dark:text-purple-400" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <div className="reveal-up mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Target Audience</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUDIENCE.map((a, i) => {
              const AIcon = a.icon;
              return (
                <div
                  key={a.title}
                  className={`reveal-up reveal-delay-${i + 1} rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c14] p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300 border border-purple-100 dark:border-purple-900/40">
                    <AIcon size={20} />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{a.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{a.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      

        {/* Bottom CTA */}
        <div className="reveal-up flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 px-6 sm:px-8 py-6 sm:py-7">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">Ready to see it for yourself?</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Explore any suite in depth, or talk to our team about your use case.
            </p>
          </div>
          <button
            onClick={() => onViewChange('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 dark:bg-[#C800FF] px-5 py-3 text-xs font-black uppercase tracking-wider text-white dark:text-slate-950 whitespace-nowrap transition hover:-translate-y-0.5 hover:shadow-lg flex-shrink-0"
          >
            Request a demo
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
