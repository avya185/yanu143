import type { ComponentType, ReactNode } from 'react';
import { ArrowRight, BadgeCheck, BarChart3, Bot, Building2, ChevronLeft, Factory, HeartPulse, Layers3, Rocket, ShieldCheck, Sparkles, Store, Truck, Users } from 'lucide-react';
import { motion } from 'motion/react';
import PageHero from './ui/PageHero';
<<<<<<< HEAD
import { cardFadeHorizontal, cardFadeHorizontalScale, cardViewport, useCardTransition } from '../utils/animations';
=======
import { cardFadeUp, cardFadeUpScale, cardViewport, cardTransition } from '../utils/animations';
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

type IndustryId = 'hospitality-tourism' | 'e-commerce' | 'healthcare' | 'startup-saas' | 'real-estate' | 'manufacturing-industrial' | 'logistics-supply-chain' | 'professional-services' | 'retail-consumer' | 'ai-automation';

type IndustryItem = {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  headline: string;
  overview: string;
  stats: { value: string; label: string }[];
  researchInsights: string[];
  positioningNote: string;
  painPoints: string[];
  solutions: string[];
  outcomes: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
};

const industryData: IndustryItem[] = [
  {
    id: 'hospitality-tourism',
    name: 'Hospitality & Tourism',
    tagline: 'Guest journeys that feel premium from booking to checkout.',
    description: 'AI guest concierge systems, booking automation, and revenue workflows that reduce response time and lift conversion.',
    icon: HeartPulse,
    headline: 'Smart hospitality technology for exceptional guest experiences',
    overview: 'We design digital hospitality systems that help teams handle guest requests faster, automate communication before and after arrival, and unlock more direct bookings without sacrificing the service touch that makes the brand memorable.',
    stats: [{ value: '24/7', label: 'Guest support' }, { value: '+18%', label: 'Direct booking lift' }, { value: '3x', label: 'Faster service triage' }],
    researchInsights: [
      'A large share of guests now choose properties offering mobile check-in, digital keys, and contactless payment over ones that rely on manual service alone.',
      'Roughly seven in ten guests find AI chatbots genuinely useful for simple requests like Wi-Fi access or room service, which frees staff to focus on higher-value interactions.',
      'Deloitte research links personalized guest experiences, powered by preference history and guest data, to revenue lifts of up to 15%.',
      'Millennial and Gen Z travelers are significantly more likely to have their booking decision shaped by visible hotel technology, including mobile check-in and in-app requests.',
      'Hospitality technology adoption is projected to keep growing at roughly 6% annually, reflecting sustained investment in guest-facing digital systems.',
    ],
    positioningNote: 'Guests now expect a connected digital layer around every stay, from discovery and booking to in-stay requests and post-stay engagement. Booking automation, AI concierge tools, and revenue workflows directly address the moments where hospitality brands win or lose guest loyalty.',
    painPoints: ['Slow inquiry handling', 'Low direct bookings', 'Fragmented guest communication', 'Manual upsell coordination'],
    solutions: ['AI concierge and WhatsApp assistant', 'Booking and confirmation automation', 'Guest feedback and review response workflows', 'Staff dashboards for service recovery'],
    outcomes: ['Higher guest satisfaction', 'Better occupancy control', 'Lower manual service overhead'],
    deliverables: ['Guest communication flow', 'Service recovery dashboard', 'Upsell automation scripts'],
    faqs: [
      { question: 'Can this work with our booking stack?', answer: 'Yes, the architecture can integrate with booking engines, CRMs, PMS tools, payment systems, and messaging channels.' },
      { question: 'Is it multilingual?', answer: 'Yes. Guest-facing journeys can be localized for multiple languages and regions.' },
    ],
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    tagline: 'Conversion systems that make browsing feel effortless.',
    description: 'Headless storefronts, shopping assistants, and operational automation for brands that need speed and scale.',
    icon: Store,
    headline: 'AI-driven commerce for brands that want more conversions and less friction',
    overview: 'We build commerce experiences that load quickly, adapt to mobile shoppers, recover abandoned carts, and keep inventory and order workflows connected across systems so your team spends less time fixing ops and more time growing revenue.',
    stats: [{ value: '+25-60%', label: 'Conversion improvement' }, { value: '-35%', label: 'Cart abandonment' }, { value: '2s', label: 'Target mobile load time' }],
    researchInsights: [
      'The global average cart abandonment rate sits around 70%, meaning roughly 7 in 10 shoppers who add an item to their cart leave without completing the purchase.',
      'Mobile abandonment rates run notably higher than desktop, often 75-80%+ versus 65-68%, despite mobile devices driving the majority of e-commerce traffic today.',
      'Baymard Institute research estimates hundreds of billions of dollars in revenue is recoverable industry-wide through better checkout design alone.',
      'Checkout usability improvements, such as fewer form fields and transparent shipping costs, have been shown to lift conversion by 20%+ in controlled studies.',
      'Multi-channel cart recovery across email, SMS, and personalized retargeting reliably recovers a meaningful share of otherwise-lost revenue.',
    ],
    positioningNote: 'Headless storefronts, streamlined checkout flows, and AI-assisted shopping tools directly target the two biggest levers in e-commerce economics: conversion rate and average order value, especially on mobile, where the opportunity gap is largest.',
    painPoints: ['Cart abandonment', 'Slow mobile storefronts', 'Inventory sync issues', 'High support volume'],
    solutions: ['AI shopping assistant', 'Recommendation engine', 'Abandoned cart recovery', 'Order and inventory automation'],
    outcomes: ['Higher AOV', 'Better retention', 'More predictable operations'],
    deliverables: ['Commerce audit', 'Conversion roadmap', 'Inventory sync plan'],
    faqs: [
      { question: 'Can you migrate an existing store?', answer: 'Yes, including SEO preservation, redirects, metadata migration, and performance optimization.' },
      { question: 'Do you support Shopify and WooCommerce?', answer: 'Yes, along with headless commerce builds and custom integrations.' },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    tagline: 'Compliance-first systems that give clinicians back their time.',
    description: 'Patient portals, documentation support, and workflow automation designed for care teams.',
    icon: HeartPulse,
    headline: 'Digital healthcare systems that improve care without increasing admin load',
    overview: 'Healthcare teams need secure, audit-friendly software that improves patient access and reduces administrative drag. We build the digital layer around scheduling, documentation, claims, and patient communication.',
    stats: [{ value: 'HIPAA-ready', label: 'Architecture mindset' }, { value: '-65%', label: 'Documentation time' }, { value: '+42%', label: 'Patient satisfaction' }],
    researchInsights: [
      'Physicians report spending close to two hours on administrative work for every hour of direct patient care, according to AMA/Dartmouth research.',
      'AI-assisted clinical documentation, including ambient scribing and automated note generation, is associated with time savings of two to three hours per shift for clinicians who adopt it.',
      'Roughly 45% of health systems now use AI-assisted documentation tools specifically to reduce administrative burden and support clinician wellbeing.',
      'Automated intake, scheduling, and patient communication tools reduce missed appointments and streamline the patient experience without adding staff headcount.',
      'Interoperability mandates and value-based care requirements are pushing health systems toward better-connected, automated data exchange between systems.',
    ],
    positioningNote: 'Patient portals, documentation support tools, and workflow automation give care teams back clinical time, the resource healthcare organizations consistently report as most constrained, while supporting the compliance and interoperability standards the sector requires.',
    painPoints: ['Documentation overload', 'Billing bottlenecks', 'No-show appointments', 'Disconnected systems'],
    solutions: ['Patient portal and intake forms', 'Clinical documentation support', 'Claims workflow automation', 'Secure integrations with EHR systems'],
    outcomes: ['Reduced admin burden', 'Better patient communication', 'Cleaner operational visibility'],
    deliverables: ['Patient onboarding flow', 'Privacy review checklist', 'Provider dashboard concept'],
    faqs: [
      { question: 'How do you handle security?', answer: 'With encryption, RBAC, audit logs, and compliance-first implementation patterns.' },
      { question: 'Can this integrate with existing systems?', answer: 'Yes, via APIs, secure middleware, and custom integration layers.' },
    ],
  },
  {
    id: 'startup-saas',
    name: 'Startup & SaaS',
    tagline: 'Move from idea to investor-ready product quickly.',
    description: 'MVP builds, multi-tenant architecture, and product analytics for founders who need momentum.',
    icon: Rocket,
    headline: 'Build, launch, and scale your software product with a lean delivery team',
    overview: 'For startups, speed is survival. We ship product foundations that are easy to extend, instrument for analytics, and structured to support growth without forcing a rewrite at the first sign of traction.',
    stats: [{ value: '4-8 weeks', label: 'MVP launch window' }, { value: 'Multi-tenant', label: 'Architecture ready' }, { value: 'Investor-grade', label: 'Demo readiness' }],
    researchInsights: [
      'Startups that launch a minimum viable product first are significantly more likely to scale successfully than those that skip validation and build a full product upfront.',
      'Investors increasingly evaluate startups on measurable traction signals, such as activation rate, retention, and repeat usage, rather than feature count or polish alone.',
      'A large majority of active investors research a startup\'s digital presence online before any in-person meeting, making a credible web presence a practical fundraising requirement.',
      'Startups with a professional website and active digital presence are reported to raise meaningfully more funding on average than those without one.',
      'Modern MVPs are typically built and validated within 4-16 weeks using focused, agile approaches, and AI-assisted development has compressed that timeline further.',
    ],
    positioningNote: 'Founders need investor-ready product and brand infrastructure fast. MVP builds, multi-tenant architecture, and analytics instrumentation are exactly the proof points investors expect to see before writing a check.',
    painPoints: ['Slow product delivery', 'No technical cofounder', 'Scalability concerns', 'Weak product analytics'],
    solutions: ['MVP scoping and delivery', 'SaaS admin dashboards', 'Billing and subscription flows', 'Analytics and event tracking'],
    outcomes: ['Faster launch', 'Clearer product direction', 'Better fundraising readiness'],
    deliverables: ['Product scope map', 'Sprint delivery plan', 'Analytics event model'],
    faqs: [
      { question: 'Can you support AI-native products?', answer: 'Yes, including RAG workflows, assistants, and workflow agents.' },
      { question: 'Do you work with startups pre-seed?', answer: 'Yes, we often scope lean builds that fit early-stage budgets and timelines.' },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    tagline: 'Lead handling and property workflows that move at market speed.',
    description: 'Lead routing, property portals, and tenant experiences that turn scattered operations into one pipeline.',
    icon: Building2,
    headline: 'PropTech systems for brokers, builders, and property managers',
    overview: 'Real estate teams lose business when follow-ups are slow and listings are scattered. We build systems that centralize lead management, showcase properties better, and keep tenants and agents aligned inside one connected workflow.',
    stats: [{ value: '<2 min', label: 'Lead response goal' }, { value: '+45%', label: 'Lead conversion lift' }, { value: '1 portal', label: 'Single source of truth' }],
    researchInsights: [
      'Buyers overwhelmingly work with whichever agent responds first, making speed to lead one of the strongest predictors of conversion in the industry.',
      'Leads contacted within 5 minutes are reported to be roughly 21x more likely to qualify than those contacted after 30 minutes, based on long-running Real Trends/InsideSales.com research.',
      'Roughly 60% of real estate inquiries arrive outside standard business hours, making 24/7 automated response systems a practical necessity rather than a convenience.',
      'CRM-driven, systematic follow-up is associated with a meaningful lift in lead-to-close conversion rates compared to manual, ad-hoc processes.',
      'Unified property portals and lead-routing systems help turn scattered inquiries across multiple channels into a single, trackable pipeline.',
    ],
    positioningNote: 'Real estate teams lose business when follow-ups are slow and listings are scattered. Centralized lead management, better listing presentation, and connected agent/tenant workflows directly protect the deals that speed and consistency would otherwise cost.',
    painPoints: ['Lead leakage', 'Poor follow-up', 'Scattered listings', 'Manual tenant support'],
    solutions: ['AI lead qualification', 'Property listing portals', 'Agent dashboards', 'Tenant service workflows'],
    outcomes: ['Faster responses', 'Higher lead conversion', 'Cleaner team coordination'],
    deliverables: ['Lead routing blueprint', 'Listing portal UX', 'Tenant support flow'],
    faqs: [
      { question: 'Can you build virtual tour experiences?', answer: 'Yes, including rich property visuals, map-based browsing, and guided inquiry flows.' },
      { question: 'Can the system route leads automatically?', answer: 'Yes, based on location, budget, property type, and agent availability.' },
    ],
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    tagline: 'Operations visibility that helps plants stay ahead of downtime.',
    description: 'Predictive maintenance, quality tracking, and production dashboards for modern manufacturing teams.',
    icon: Factory,
    headline: 'Industry 4.0 tools for quality, uptime, and production visibility',
    overview: 'Manufacturing teams need reliable signals, not noise. We build dashboards and automation that make maintenance proactive, quality inspection more consistent, and plant-wide performance easier to understand.',
    stats: [{ value: '-75%', label: 'Downtime reduction target' }, { value: '99%+', label: 'Inspection accuracy goal' }, { value: '4 months', label: 'Typical ROI window' }],
    researchInsights: [
      'Predictive maintenance is associated with the lowest share of unplanned downtime of any maintenance strategy, well below reactive and traditional preventive approaches.',
      'Facilities that shift from reactive to predictive maintenance commonly report a 30-50% reduction in unplanned downtime.',
      'Overall Equipment Effectiveness (OEE) averages roughly 60-67% across typical manufacturing facilities, while world-class plants operate in the 85%+ range.',
      'Real-time production dashboards and condition monitoring commonly deliver OEE improvements of 5-15 percentage points within 6-12 months of deployment.',
      'Predictive maintenance programs are also associated with lower overall maintenance costs and meaningfully extended equipment lifespan.',
    ],
    positioningNote: 'In manufacturing, unplanned downtime is one of the largest and most controllable cost centers. Predictive maintenance dashboards, quality tracking, and production visibility tools convert operational data that already exists on the plant floor into measurable uptime and cost savings.',
    painPoints: ['Unplanned downtime', 'Manual inspection', 'Data silos', 'Delayed reporting'],
    solutions: ['Predictive maintenance', 'OEE dashboards', 'Quality control automation', 'Plant performance reporting'],
    outcomes: ['Less downtime', 'Better throughput', 'Sharper quality control'],
    deliverables: ['Plant visibility map', 'Maintenance alert logic', 'OEE scorecard'],
    faqs: [
      { question: 'Can legacy equipment be included?', answer: 'Yes, with sensor layers, gateways, and phased integration.' },
      { question: 'Do you support edge and cloud setups?', answer: 'Yes, depending on latency, security, and plant architecture needs.' },
    ],
  },
  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    tagline: 'Routing, tracking, and delivery systems that make operations dependable.',
    description: 'Fleet visibility, route optimization, and delivery workflows for distribution-heavy businesses.',
    icon: Truck,
    headline: 'Connected logistics systems that improve visibility and reduce wastage',
    overview: 'Whether it is a last-mile fleet or a multi-node supply chain, we build platforms that improve tracking, make dispatching more predictable, and create clean handoffs between teams, vendors, and customers.',
    stats: [{ value: '15-25%', label: 'Fuel reduction target' }, { value: '95%+', label: 'On-time delivery potential' }, { value: 'Real-time', label: 'Tracking visibility' }],
    researchInsights: [
      'AI-driven route optimization commonly delivers fuel savings in the 10-25% range for delivery and distribution fleets, with most fleets landing around 15-20%.',
      'Large-scale deployments, such as UPS\'s route optimization platform, have demonstrated hundreds of millions of dollars in annual savings and tens of millions of gallons of fuel saved through smarter routing alone.',
      'Dynamic, real-time route optimization consistently outperforms static, pre-planned routing, typically cutting fuel consumption by 12-22%.',
      'A large majority of consumers say delivery experience directly affects their loyalty to a retailer or brand, making real-time tracking a baseline expectation.',
      'Predictive maintenance for fleet vehicles reduces unplanned breakdowns and extends vehicle lifecycles, complementing route-level efficiency gains.',
    ],
    positioningNote: 'Fleet visibility, route optimization, and delivery workflow automation turn logistics from a cost center into a measurable, controllable system, with fuel savings, faster delivery, and more predictable operations as the direct payoff.',
    painPoints: ['Poor visibility', 'Inefficient routing', 'Delivery delays', 'Manual customer updates'],
    solutions: ['Route optimization engine', 'Fleet tracking dashboard', 'Customer notifications', 'Proof-of-delivery workflows'],
    outcomes: ['Lower costs', 'Fewer complaints', 'More efficient dispatch'],
    deliverables: ['Dispatch workflow', 'Fleet dashboard', 'Delivery tracking module'],
    faqs: [
      { question: 'Can driver apps work offline?', answer: 'Yes, offline capture and sync can be built in where required.' },
      { question: 'Can tracking update in real time?', answer: 'Yes, with the right GPS and telemetry setup.' },
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Document-heavy teams need sharper workflows, not more spreadsheets.',
    description: 'Client portals, document automation, and billing workflows for firms that sell expertise.',
    icon: Users,
    headline: 'Tools for firms that need better client transparency and cleaner delivery',
    overview: 'Consultants, agencies, legal teams, and CA firms all benefit from systems that cut down review time, improve client access, and protect margin by capturing work more accurately.',
    stats: [{ value: '70-90%', label: 'Faster document review' }, { value: '-15%', label: 'Revenue leakage target' }, { value: '1 portal', label: 'Unified client access' }],
    researchInsights: [
      'Firms running structured Professional Services Automation (PSA) tools report meaningfully higher billable utilization than teams relying on generic project-management tools or spreadsheets.',
      'Client portals that centralize documents, approvals, messaging, and billing significantly reduce the administrative back-and-forth that traditionally happens over email.',
      'Automating client onboarding and document collection has been shown to reclaim substantial staff time annually that would otherwise go to manual follow-up and data entry.',
      'The global market for professional services automation software is growing at a double-digit compound annual rate, reflecting how central these systems have become to firm operations.',
      'Firms using integrated billing and time-tracking systems reduce invoicing delays and improve cash flow predictability compared to manual, spreadsheet-based billing.',
    ],
    positioningNote: 'For firms that sell expertise, time is inventory. Client portals, document automation, and billing workflows reduce the non-billable administrative load that otherwise eats directly into firm margins.',
    painPoints: ['Manual document review', 'Slow billing', 'Client communication gaps', 'Knowledge silos'],
    solutions: ['Client portals', 'Document workflows', 'Time and billing automation', 'Practice dashboards'],
    outcomes: ['Better margin', 'Faster turnaround', 'Stronger client trust'],
    deliverables: ['Client portal spec', 'Billing automation flow', 'Document intake structure'],
    faqs: [
      { question: 'Can you protect confidential data?', answer: 'Yes, through secure access design, encryption, and controlled permissions.' },
      { question: 'Do you build client-facing portals?', answer: 'Yes, with role-based access and clean document sharing.' },
    ],
  },
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer',
    tagline: 'Omnichannel commerce that keeps inventory and customer experience in sync.',
    description: 'Unified commerce systems that connect stores, inventory, customer data, and engagement.',
    icon: BadgeCheck,
    headline: 'Unified commerce that keeps offline and online from drifting apart',
    overview: 'Retail businesses need more than a storefront. They need a connected system that keeps stock accurate, improves merchandising decisions, and supports personalized customer journeys across every channel.',
    stats: [{ value: '99.5%', label: 'Inventory accuracy target' }, { value: '+22%', label: 'AOV increase target' }, { value: 'Omnichannel', label: 'One customer view' }],
    researchInsights: [
      'The large majority of consumers now use multiple channels during a single shopping journey, researching on mobile, comparing in-store, and purchasing online or vice versa.',
      'Retailers with strong omnichannel strategies retain a significantly higher share of customers year-over-year than retailers with weak or fragmented channel strategies.',
      'Omnichannel shoppers spend more per order and show meaningfully higher lifetime value than single-channel shoppers.',
      'Real-time, unified inventory visibility across channels is one of the highest-leverage investments in retail, preventing overselling and enabling services like buy-online-pickup-in-store.',
      'Personalization delivered consistently across channels is directly linked to higher customer spending and stronger brand loyalty.',
    ],
    positioningNote: 'Unified commerce systems that connect inventory, customer data, and engagement across channels directly address the two things retail leadership cares most about: conversion and retention.',
    painPoints: ['Inventory drift', 'Disconnected channels', 'Low repeat purchase', 'Manual campaign logic'],
    solutions: ['Unified inventory sync', 'Customer profile unification', 'Retail analytics dashboards', 'Loyalty and engagement flows'],
    outcomes: ['Higher AOV', 'Better retention', 'Cleaner channel performance'],
    deliverables: ['Omnichannel inventory plan', 'Loyalty flow design', 'Customer insight dashboard'],
    faqs: [
      { question: 'Can it work for multi-location retail?', answer: 'Yes, with store-level visibility and central control.' },
      { question: 'Can you integrate POS and CRM?', answer: 'Yes, across common commercial systems and custom integrations.' },
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    tagline: 'Cross-industry automation that solves real work, not just demos.',
    description: 'Agents, assistants, and workflow automation for teams that want practical gains.',
    icon: Bot,
    headline: 'AI systems that make workflows faster, smarter, and more reliable',
    overview: 'We help teams identify where AI actually saves time or improves output, then implement focused systems that support the business instead of adding complexity.',
    stats: [{ value: 'Use-case led', label: 'Implementation style' }, { value: 'Practical', label: 'Automation first' }, { value: 'Measurable', label: 'Business impact' }],
    researchInsights: [
      'A large majority of enterprises now report active use of AI in at least one core business function, with a growing share moving from pilot projects into full production deployment.',
      'Organizations using AI-driven automation commonly report measurable productivity gains, with many citing a positive return within the first year of deployment.',
      'The highest-ROI, most consistently proven use cases in 2026 include customer service automation, internal process automation, data analysis and reporting, and workflow orchestration.',
      'A substantial share of enterprise software applications are projected to include task-specific AI agents in the near term, reflecting how quickly automation is becoming a built-in expectation.',
      'Teams that pair automation with clear governance and human oversight consistently outperform those that deploy automation without those guardrails.',
    ],
    positioningNote: 'Across every industry, the common thread is the same: automation delivers the most value when it targets a specific, well-understood bottleneck. Agents, assistants, and workflow automation built around real operational pain points, not demos, is what produces practical, lasting gains for teams.',
    painPoints: ['Too much manual work', 'No automation strategy', 'Fragmented tools', 'Low visibility on ROI'],
    solutions: ['AI assistants', 'Workflow agents', 'Document processing', 'Decision support tooling'],
    outcomes: ['Lower overhead', 'Faster operations', 'Better consistency'],
    deliverables: ['Automation audit', 'AI opportunity map', 'Implementation backlog'],
    faqs: [
      { question: 'Do you start with strategy or code?', answer: 'We start with the business workflow, then build the minimum useful system.' },
      { question: 'Can automation be phased?', answer: 'Yes, almost always. That keeps risk low and ROI visible.' },
    ],
  },
];

const industryMap = Object.fromEntries(industryData.map((item) => [item.id, item])) as Record<IndustryId, IndustryItem>;

const industryHeadlineNodes: Record<IndustryId, ReactNode> = {
  'hospitality-tourism': (
    <>Smart <span className="text-gradient-royal">hospitality technology</span> for exceptional{' '}<span className="text-gradient-lead">guest experiences</span></>
  ),
  'e-commerce': (
    <>AI-driven <span className="text-gradient-royal">commerce</span> for brands that want more{' '}<span className="text-gradient-lead">conversions</span> and less friction</>
  ),
  healthcare: (
    <>Digital <span className="text-gradient-royal">healthcare systems</span> that improve care without increasing{' '}<span className="text-gradient-lead">admin load</span></>
  ),
  'startup-saas': (
    <>Build, launch, and <span className="text-gradient-royal">scale</span> your software product with a{' '}<span className="text-gradient-lead">lean delivery team</span></>
  ),
  'real-estate': (
    <><span className="text-gradient-royal">PropTech systems</span> for brokers, builders, and{' '}<span className="text-gradient-lead">property managers</span></>
  ),
  'manufacturing-industrial': (
    <><span className="text-gradient-royal">Industry 4.0 tools</span> for quality, uptime, and{' '}<span className="text-gradient-lead">production visibility</span></>
  ),
  'logistics-supply-chain': (
    <>Connected <span className="text-gradient-royal">logistics systems</span> that improve visibility and{' '}<span className="text-gradient-lead">reduce wastage</span></>
  ),
  'professional-services': (
    <>Tools for firms that need better <span className="text-gradient-royal">client transparency</span> and{' '}<span className="text-gradient-lead">cleaner delivery</span></>
  ),
  'retail-consumer': (
    <><span className="text-gradient-royal">Unified commerce</span> that keeps offline and online from{' '}<span className="text-gradient-lead">drifting apart</span></>
  ),
  'ai-automation': (
    <><span className="text-gradient-royal">AI systems</span> that make workflows faster, smarter, and{' '}<span className="text-gradient-lead">more reliable</span></>
  ),
};

interface IndustriesSectionProps {
  onViewChange: (view: string, slug?: string) => void;
  activeSlug: string | null;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight uppercase sm:text-4xl text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}

function IndustryHero({ onViewChange }: { onViewChange: (view: string, slug?: string) => void }) {
  return (
    <PageHero badgeClassName='mt-3'
      badge="Industries"
      title={
        <>
          Industry pages built for real <span className="text-gradient-royal">business</span>{' '}
          <span className="text-slate-950 dark:text-white">operations</span> and{' '}
          <span className="text-gradient-lead">workflows</span>
        </>
      }
      description="This section now works like a proper industry hub. Browse the sectors below, open a dedicated page for each one, and explore focused AI, automation, and software capabilities that feel native to the MaVionix brand."
      actions={
        <>
<<<<<<< HEAD
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
=======
        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          <button onClick={() => onViewChange('contact')} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:#C800FF, dark:text-slate-950">
            Start a project
            <ArrowRight size={16} />
          </button>
          <button onClick={() => onViewChange('services')} className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200">
            View services
          </button>
          </div>
        </>
      }
      stats={[
        { value: '10+', label: 'industry playbooks' },
        { value: 'AI', label: 'workflow design' },
        { value: '1:1', label: 'client fit mapping' },
      ]}
      className="border-b-0 pb-0"
    />
  );
}

function IndustryLanding({ onViewChange }: { onViewChange: (view: string, slug?: string) => void }) {
<<<<<<< HEAD
  const cardTransition = useCardTransition();
  return (
    <>
      <IndustryHero onViewChange={onViewChange} />
      <div className="reveal-up  mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
=======
  return (
    <>
      <IndustryHero onViewChange={onViewChange} />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
        <SectionHeading
          eyebrow="Industries"
          title="Specialized solutions for the sectors you actually serve"
          text="These pages are designed to help visitors understand how MaVionix adapts its delivery approach per industry while still keeping the same design language and brand feel across the site."
        />
<<<<<<< HEAD
        <div className="reveal-up  mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
=======
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          {industryData.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.button
                key={industry.id}
                onClick={() => onViewChange('industries', industry.id)}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
<<<<<<< HEAD
                variants={cardFadeHorizontal}
                transition={cardTransition(index)}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(59,130,246,0.35)] dark:border-slate-900 dark:bg-slate-950 dark:hover:shadow-[0_8px_32px_rgba(59,130,246,0.35)]"
              >
                <div className="reveal-up  flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                    <Icon size={22}  />
                  </div>
                  <span className="reveal-up  rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-purple-700 dark:border-purple-900/70 dark:bg-purple-950/30 dark:text-purple-300">
=======
                variants={cardFadeUp}
                transition={cardTransition(index)}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(59,130,246,0.35)] dark:border-slate-900 dark:bg-slate-950 dark:hover:shadow-[0_8px_32px_rgba(59,130,246,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                    <Icon size={22}  />
                  </div>
                  <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-purple-700 dark:border-purple-900/70 dark:bg-purple-950/30 dark:text-purple-300">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                    Deep Dive
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950 dark:text-white">{industry.name}</h3>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300">{industry.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{industry.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 dark:text-purple-300">
                  Open page
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function IndustryDetail({ industry, onViewChange }: { industry: IndustryItem; onViewChange: (view: string, slug?: string) => void }) {
  const Icon = industry.icon;
<<<<<<< HEAD
  const cardTransition = useCardTransition();
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

  return (
    <div className="bg-white mt-3 text-slate-900 dark:bg-black dark:text-white">
      <PageHero
        badge={
          <>
            <Icon size={12} />
            {industry.name}
          </>
        }
        title={industryHeadlineNodes[industry.id]}
        description={industry.overview}
        actions={
          <>
            <button onClick={() => onViewChange('contact')} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:#C800FF, dark:text-slate-950">
              Start a project
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onViewChange('services')} className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200">
              View services
            </button>
          </>
        }
        stats={industry.stats}
        className="border-b-0 pb-0"
      >
<<<<<<< HEAD
        <div className="reveal-up  mx-auto flex max-w-3xl justify-center">
=======
        <div className="mx-auto flex max-w-3xl justify-center">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          <button onClick={() => onViewChange('industries')} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 dark:text-purple-300">
            <ChevronLeft size={16} />
            Back to industries
          </button>
        </div>
      </PageHero>

<<<<<<< HEAD
      <div className="reveal-up  mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="reveal-up rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-transparent dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-800 dark:shadow-2xl">
          <div className="reveal-right flex items-center gap-2">
            <BarChart3 size={16} className="text-purple-600 dark:text-purple-300" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">Industry research</p>
          </div>
          <h2 className="reveal-up  mt-3 text-xl font-black text-slate-950 sm:text-2xl dark:text-white">What the data says about {industry.name}</h2>
          <ul className="reveal-up  mt-6 space-y-4">
=======
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-transparent dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-800 dark:shadow-2xl">
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-purple-600 dark:text-purple-300" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">Industry research</p>
          </div>
          <h2 className="mt-3 text-xl font-black text-slate-950 sm:text-2xl dark:text-white">What the data says about {industry.name}</h2>
          <ul className="mt-6 space-y-4">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            {industry.researchInsights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                <Sparkles size={15} className="mt-1 shrink-0 text-purple-600 dark:text-purple-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-slate-100 pt-6 text-sm leading-7 text-slate-600 dark:border-white/10 dark:text-slate-400">
<<<<<<< HEAD
            <span className="mr-2 text-xs font-black uppercase tracking-wide text-purple-700 dark:text-purple-300">Why it matters -</span>
=======
            <span className="mr-2 text-xs font-black uppercase tracking-wide text-purple-700 dark:text-purple-300">Why it matters —</span>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            {industry.positioningNote}
          </p>
        </div>

<<<<<<< HEAD
        <div className="reveal-up  mt-6 grid gap-6 lg:grid-cols-2">
          <div className="reveal-left rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-900 dark:bg-slate-950">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">Pain points</p>
            <ul className="reveal-up  mt-5 space-y-3">
=======
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-900 dark:bg-slate-950">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">Pain points</p>
            <ul className="mt-5 space-y-3">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              {industry.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-purple-600 dark:text-purple-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          <div className="reveal-right rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-900 dark:bg-slate-950">
=======
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-900 dark:bg-slate-950">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">Solutions</p>
            <ul className="mt-5 space-y-3">
              {industry.solutions.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <BadgeCheck size={16} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

            {/* changes3565 */}
<<<<<<< HEAD
        <div className="reveal-right mt-6 rounded-3xl bg-white border border-slate-200 p-8 text-slate-900 shadow-xl transition-colors dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-800 dark:text-white dark:border-transparent dark:shadow-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500 dark:text-white/70">
            Outcomes
          </p>
          <div className="reveal-up mt-5 grid gap-4 md:grid-cols-3">
=======
        <div className="mt-6 rounded-3xl bg-white border border-slate-200 p-8 text-slate-900 shadow-xl transition-colors dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-800 dark:text-white dark:border-transparent dark:shadow-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500 dark:text-white/70">
            Outcomes
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            {industry.outcomes.map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
<<<<<<< HEAD
                variants={cardFadeHorizontalScale}
=======
                variants={cardFadeUpScale}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                transition={cardTransition(index)}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-white/80">
                  <BarChart3 size={15} />
                  Outcome
                </div>
                <p className="mt-3 text-lg font-black text-slate-900 dark:text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className="reveal-down mt-6 grid gap-4 md:grid-cols-3">
=======
        <div className="mt-6 grid gap-4 md:grid-cols-3">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          {industry.deliverables.map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={cardViewport}
<<<<<<< HEAD
              variants={cardFadeHorizontal}
=======
              variants={cardFadeUp}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              transition={cardTransition(index)}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-900 dark:bg-slate-950"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">Deliverable</p>
              <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</p>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        <div className="reveal-up  mt-16 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
=======
        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions from teams evaluating this sector"
              text="This keeps the page useful for decision-makers without adding a contact form to the industries page."
            />
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-900 dark:bg-slate-950">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">Delivery approach</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                We usually start with a workflow audit, define the highest-impact use case, then ship a focused first release that proves value fast and leaves room to scale.
              </p>
            </div>
            {industry.faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
<<<<<<< HEAD
                variants={cardFadeHorizontal}
                transition={cardTransition(index)}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-900 dark:bg-slate-950"
              >
                <summary className="reveal-up  cursor-pointer list-none text-sm font-black text-slate-900 dark:text-white">{faq.question}</summary>
=======
                variants={cardFadeUp}
                transition={cardTransition(index)}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-900 dark:bg-slate-950"
              >
                <summary className="cursor-pointer list-none text-sm font-black text-slate-900 dark:text-white">{faq.question}</summary>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className="reveal-up mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-900 dark:bg-slate-950">
=======
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-900 dark:bg-slate-950">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">Ready when you are</p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">Need this industry adapted to your exact business model?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            We can tailor the messaging, proof points, and feature set for your market while preserving the same premium theme and turning this into a stronger lead-generation page.
          </p>
<<<<<<< HEAD
          <div className="mt-6 flex  gap-4">
=======
          <div className="mt-6 flex flex-wrap gap-4">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            <button onClick={() => onViewChange('contact')} className="inline-flex items-center gap-2 rounded-sm bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-wider text-white dark:#C800FF, dark:text-slate-950">
              Discuss project
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onViewChange('industries')} className="inline-flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              Browse all industries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesSection({ onViewChange, activeSlug }: IndustriesSectionProps) {
  const industry = activeSlug ? industryMap[activeSlug as IndustryId] : null;
  if (industry) {
    return <IndustryDetail industry={industry} onViewChange={onViewChange} />;
  }
  return <IndustryLanding onViewChange={onViewChange} />;
}
