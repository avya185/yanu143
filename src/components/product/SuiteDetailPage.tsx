import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import PageHero from '../ui/PageHero';
import { PRODUCT_SUITES, type ProductSuite } from '../../data/productSuites';

interface SuiteDetailPageProps {
  suite: ProductSuite;
  onViewChange: (view: string, slug?: string) => void;
}

export default function SuiteDetailPage({ suite, onViewChange }: SuiteDetailPageProps) {
  const Icon = suite.icon;
  const otherSuites = PRODUCT_SUITES.filter((s) => s.id !== suite.id);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#07070f] text-slate-900 dark:text-white">
      <PageHero
        badge={
          <>
            <Icon size={12} />
            {suite.heroBadge}
          </>
        }
        title={
          <>
            {suite.heroTitleLead}{' '}
            <span className="text-gradient-lead">{suite.heroTitleAccent}</span>
          </>
        }
        description={suite.heroDescription}
        actions={
          <>
            <button
              type="button"
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#C800FF] dark:text-slate-950"
            >
              Explore the modules
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
        {/* Problem / Solution */}
        <div className="reveal-up rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            <div className="p-6 sm:p-8">
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">The Problem</span>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">{suite.problem}</p>
            </div>
            <div className="p-6 sm:p-8">
              <span className="text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">Our Solution</span>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-900 dark:text-white">{suite.solution}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-4 sm:py-5 text-center border-r border-slate-200 dark:border-slate-800">
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{suite.modules.length}</p>
              <p className="mt-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Modules</p>
            </div>
            <div className="px-4 py-4 sm:py-5 text-center border-r border-slate-200 dark:border-slate-800">
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{suite.howItWorks.length}</p>
              <p className="mt-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Step Workflow</p>
            </div>
            <div className="px-4 py-4 sm:py-5 text-center">
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{suite.benefits.length}</p>
              <p className="mt-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Key Benefits</p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div id="modules" className="scroll-mt-24">
          <div className="reveal-up mb-8 sm:mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 dark:border-purple-500/25 dark:bg-white/5 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 dark:text-purple-200">
              <Sparkles size={12} />
              Modules
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
              Everything inside {suite.shortName}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suite.modules.map((mod, i) => {
              const ModIcon = mod.icon;
              return (
                <div
                  key={mod.id}
                  className={`reveal-up reveal-delay-${(i % 4) + 1} group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c14] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300 border border-purple-100 dark:border-purple-900/40 group-hover:scale-105 transition-transform">
                    <ModIcon size={20} />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{mod.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{mod.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div>
          <div className="reveal-up mb-8 sm:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suite.howItWorks.map((step, i) => (
              <div
                key={i}
                className={`reveal-up reveal-delay-${i + 1} relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5 sm:p-6`}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 dark:bg-[#C800FF] text-xs font-black text-white dark:text-slate-950">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow examples (automation only) */}
        {suite.workflows && suite.workflows.length > 0 && (
          <div>
            <div className="reveal-up mb-8 sm:mb-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 dark:border-purple-500/25 dark:bg-white/5 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 dark:text-purple-200">
                Workflow examples
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                AI, orchestrating end to end
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {suite.workflows.map((wf, i) => (
                <div
                  key={wf.id}
                  className={`reveal-up reveal-delay-${(i % 4) + 1} rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c14] p-6`}
                >
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">{wf.name}</h3>
                  <p className="mt-1.5 text-[13px] text-slate-500 dark:text-slate-400">{wf.description}</p>
                  <ol className="mt-4 space-y-2">
                    {wf.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13px] text-slate-700 dark:text-slate-300">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 dark:bg-[#C800FF] text-[10px] font-black text-white dark:text-slate-950">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="reveal-up rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-6">
            Why it matters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {suite.benefits.map((benefit, i) => (
              <div key={i} className={`reveal-up reveal-delay-${(i % 4) + 1} flex items-start gap-3`}>
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-purple-700 dark:text-purple-400" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore other suites */}
        <div>
          <h2 className="reveal-up text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-6">
            Explore the rest of the ecosystem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherSuites.map((s, i) => {
              const SIcon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onViewChange('product', s.slug)}
                  className={`reveal-up reveal-delay-${(i % 4) + 1} group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c14] p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300">
                    <SIcon size={16} />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">{s.shortName}</h3>
                    <ArrowUpRight size={14} className="text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-up flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 px-6 sm:px-8 py-6 sm:py-7">
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">
              See {suite.shortName} in action
            </h3>
            <p className="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400 mt-1">
              Talk to our team or explore the full MaVionix platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => onViewChange('product')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700"
            >
              Back to platform overview
            </button>
            <button
              onClick={() => onViewChange('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-5 py-3 text-xs font-black uppercase tracking-wider text-white dark:text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request a demo
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
