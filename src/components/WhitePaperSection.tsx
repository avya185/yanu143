import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Building2,
  FileText,
  Globe2,
  Layers3,
  Megaphone,
  Palette,
  Sparkles,
  Target,
  Users2,
} from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from './ui/PageHero';
import { cardFadeUp, cardViewport, cardTransition } from '../utils/animations';

interface WhitePaperSectionProps {
  onViewChange: (view: string, slug?: string) => void;
}

const marketLandscape = [
  {
    icon: Globe2,
    domain: 'Web Development',
    size: 'USD 9.4B (India, 2026)',
    cagr: '12–15%',
    driver: 'Post-COVID SaaS & e-commerce growth',
  },
  {
    icon: Bot,
    domain: 'AI Chatbots & Automation',
    size: 'USD 27.3B (Global, 2030)',
    cagr: '~23%',
    driver: 'LLM adoption replacing rule-based bots',
  },
  {
    icon: Layers3,
    domain: 'Workflow Automation',
    size: 'High-growth category',
    cagr: '20%+',
    driver: 'Operational efficiency mandates',
  },
  {
    icon: FileText,
    domain: 'Content & SEO',
    size: 'USD 150B SEO by 2030',
    cagr: '~17%',
    driver: 'Search-first buyer behaviour',
  },
  {
    icon: Users2,
    domain: 'HR Technology',
    size: 'USD 28–40B by 2030',
    cagr: '10–13%',
    driver: 'AI screening & conversational recruitment',
  },
  {
    icon: Palette,
    domain: 'Design & UI/UX',
    size: 'USD 48B (Global design services)',
    cagr: '7–10%',
    driver: 'Subscription design & SaaS UI demand',
  },
];

const marketTrends = [
  {
    icon: Brain,
    title: 'AI Is Now Table Stakes',
    description:
      'Buyers no longer see AI as a premium add-on — from chatbots to SEO to workflow automation, they expect intelligent, LLM-backed capability built into every digital service from day one.',
  },
  {
    icon: Building2,
    title: 'Fragmented Vendor Fatigue',
    description:
      'Most growing businesses juggle 3–7 separate vendors for their website, chatbots, design, SEO, and automation — creating coordination overhead, inconsistent branding, and duplicated spend.',
  },
  {
    icon: Sparkles,
    title: 'Managed Services Over DIY Tools',
    description:
      'The market is full of self-serve SaaS platforms, but far fewer partners who will actually build, document, and manage the solution — a gap that favours hands-on, service-led delivery.',
  },
  {
    icon: Target,
    title: 'Pricing Transparency as a Differentiator',
    description:
      'Many established platforms gate pricing behind sales calls. Businesses evaluating vendors increasingly favour partners who publish clear, upfront pricing they can self-qualify against.',
  },
  {
    icon: Megaphone,
    title: 'Regional & Multilingual Demand',
    description:
      "India's Hindi and regional-language internet user base is growing faster than English-first adoption, creating real demand for WhatsApp-native, regional-language digital services.",
  },
  {
    icon: BarChart3,
    title: 'SMEs Are Underserved at the Middle',
    description:
      'The market splits sharply between expensive enterprise platforms and inconsistent freelancers — leaving a wide-open middle ground for quality, affordable, professionally delivered work.',
  },
];

const positioningPillars = [
  {
    pillar: 'Quality',
    reality: 'Enterprise-grade quality usually requires enterprise-sized budgets.',
    promise: 'Enterprise-grade delivery at startup- and SME-friendly pricing.',
  },
  {
    pillar: 'Completeness',
    reality: 'Clients typically manage several separate vendors for design, dev, SEO, and automation.',
    promise: 'One agency covering web, AI, SEO, design, and automation under one roof.',
  },
  {
    pillar: 'Transparency',
    reality: 'Many platforms hide pricing behind discovery calls and sales pipelines.',
    promise: 'Clear, published packages and deliverables — no guesswork required.',
  },
  {
    pillar: 'Management',
    reality: 'DIY SaaS tools require clients to learn, configure, and maintain them.',
    promise: 'We build it, document it, and manage it — not just hand over a tool.',
  },
  {
    pillar: 'Local Understanding',
    reality: 'Global platforms often overlook Indian market nuances and language needs.',
    promise: 'Built for India: WhatsApp-native, Hindi-ready, and locally responsive.',
  },
];

const usps = [
  {
    title: 'The Smart Agency',
    statement:
      'Combining the code quality and process discipline of large IT firms with the speed, pricing, and personal care of a boutique studio.',
    audience: 'SMEs wanting enterprise quality without enterprise cost',
  },
  {
    title: 'Managed Operations, Not Just Tools',
    statement:
      'Your chatbot and workflows built, documented, and managed — not just another DIY builder you have to learn yourself.',
    audience: 'Non-technical founders and operations managers',
  },
  {
    title: 'Agnostic AI Brains',
    statement: "Choose your AI model — OpenAI, Claude, or Gemini. Your intelligence, your choice.",
    audience: 'Tech-aware startups and product teams',
  },
  {
    title: 'Zero Platform Fragmentation',
    statement:
      'From landing pages to WhatsApp bots to SEO — one strategic partner, one invoice, zero platform confusion.',
    audience: 'Busy founders managing multiple agencies',
  },
  {
    title: 'Regional India Ready',
    statement:
      "Built for Bharat — Hindi-first chatbots, regional SEO, and WhatsApp automations that speak your customers' language.",
    audience: 'Tier 2 city businesses and regional brands',
  },
  {
    title: 'Low-Risk First Step',
    statement:
      "A short, focused diagnostic that maps your biggest automation or digital opportunity before you commit to a full engagement.",
    audience: 'Risk-averse decision makers evaluating a new partner',
  },
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight uppercase sm:text-4xl text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}

export default function WhitePaperSection({ onViewChange }: WhitePaperSectionProps) {
  return (
    <div className="w-full bg-white dark:bg-[#07070f]">
      <PageHero
        badge={
          <>
            <FileText size={12} />
            White Paper
          </>
        }
        title={
          <>
            Where <span className="text-gradient-royal">MaVionix</span> stands in a{' '}
            <span className="text-gradient-lead">fragmented digital market</span>
          </>
        }
        description="A look at the digital services landscape MaVionix operates in — market size and growth across our core domains, the trends reshaping buyer expectations, and how we've chosen to position ourselves within it."
        actions={
          <>
            <button
              onClick={() => onViewChange('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#C800FF] dark:text-slate-950"
            >
              Talk to us
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onViewChange('services')}
              className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200"
            >
              View services
            </button>
          </>
        }
        stats={[
          { value: '6', label: 'Core Service Domains' },
          { value: '20%+', label: 'CAGR in Automation' },
          { value: '1', label: 'Unified Delivery Partner' },
        ]}
        className="border-b-0 pb-0"
      />

      {/* Introduction */}
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          The digital services market — spanning web development, AI chatbots, workflow automation, content, SEO,
          HR technology, and design — is large, fast-growing, and increasingly shaped by AI. Yet most businesses
          experience it as fragmented: a different vendor for the website, another for the chatbot, another for
          SEO, and no one owning the outcome end-to-end. This white paper summarizes what our research into these
          markets shows, and where MaVionix has chosen to position itself within them.
        </p>
      </div>

      {/* Market Landscape */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Market Landscape"
          title="Growth across our core domains"
          text="Each of the domains MaVionix operates in is experiencing double-digit growth, driven largely by AI adoption and digital transformation."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Domain</th>
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Market Size</th>
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">CAGR</th>
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Key Growth Driver</th>
              </tr>
            </thead>
            <tbody>
              {marketLandscape.map((row) => {
                const Icon = row.icon;
                return (
                  <tr key={row.domain} className="border-b border-slate-100 last:border-0 dark:border-slate-900">
                    <td className="px-5 py-4 font-bold text-slate-950 dark:text-white">
                      <span className="inline-flex items-center gap-2">
                        <Icon size={16} className="text-purple-600 dark:text-purple-300" />
                        {row.domain}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.size}</td>
                    <td className="px-5 py-4 text-purple-700 dark:text-purple-300">{row.cagr}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.driver}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
          Figures synthesized from public industry research (Grand View Research, Nasscom, and comparable market
          studies) as of 2026.
        </p>
      </div>

      {/* Market Trends */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-20 dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What We're Seeing"
            title="Trends reshaping buyer expectations"
            text="Patterns that show up consistently across every domain we operate in."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketTrends.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={cardViewport}
                  variants={cardFadeUp}
                  transition={cardTransition(index)}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Where MaVionix Stands */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Where We Stand"
          title="Positioned between boutique and enterprise"
          text="The market splits sharply between expensive enterprise platforms on one end and inconsistent, unsupported freelance work on the other — leaving a wide gap in the middle for reliable, professionally delivered, fairly priced work. That's the space MaVionix has chosen to occupy: high-quality delivery, transparent pricing, and a single point of accountability across every service we offer."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Pillar</th>
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Current Market Reality</th>
                <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">The MaVionix Promise</th>
              </tr>
            </thead>
            <tbody>
              {positioningPillars.map((row) => (
                <tr key={row.pillar} className="border-b border-slate-100 last:border-0 dark:border-slate-900">
                  <td className="px-5 py-4 font-bold text-slate-950 dark:text-white">{row.pillar}</td>
                  <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.reality}</td>
                  <td className="px-5 py-4 text-purple-700 dark:text-purple-300">{row.promise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* USPs */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-20 dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What Sets Us Apart"
            title="Our positioning, in our own words"
            text="Six statements that summarize how MaVionix differentiates itself in a crowded market."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                variants={cardFadeUp}
                transition={cardTransition(index)}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.statement}</p>
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300">
                  {item.audience}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}
