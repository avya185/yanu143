import {
  Code2,
  Palette,
  Briefcase,
  Workflow,
  Megaphone,
  BarChart3,
  Globe,
  Smartphone,
  Layers,
  GitBranch,
  Database,
  Cloud,
  TestTube,
  Rocket,
  Settings2,
  Image as ImageIcon,
  Video,
  PenTool,
  Sparkles,
  FileText,
  Figma,
  Mic,
  Share2,
  FileEdit,
  Users,
  Building2,
  UserCog,
  CreditCard,
  Calculator,
  TrendingUp,
  Megaphone as MegaphoneIcon,
  Headphones,
  LineChart,
  FolderKanban,
  ShoppingCart,
  Package,
  Bot,
  ListChecks,
  GitBranch as GitBranchIcon,
  Brain,
  Bell,
  CalendarClock,
  Plug,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

export interface SuiteModule {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface SuiteWorkflow {
  id: string;
  name: string;
  description: string;
  steps: string[];
}

export interface ProductSuite {
  id: string;
  slug: string;
  shortName: string;
  name: string;
  tagline: string;
  heroBadge: string;
  heroTitleLead: string;
  heroTitleAccent: string;
  heroDescription: string;
  icon: LucideIcon;
  /** Fully static Tailwind class strings (light+dark baked in) -used ONLY on the
   * platform overview page's six-suite grid, per design requirements. Every other
   * part of a suite's own page (hero, modules, CTA, etc.) uses the site's standard
   * purple theme, not these suite-specific colors. */
  overviewCardBg: string;
  overviewIconWrap: string;
  problem: string;
  solution: string;
  modules: SuiteModule[];
  howItWorks: string[];
  workflows?: SuiteWorkflow[];
  benefits: string[];
}

export const PRODUCT_SUITES: ProductSuite[] = [
  {
    id: 'dev',
    slug: 'ai-development-suite',
    shortName: 'Development',
    name: 'MaVionix AI Development Suite',
    tagline: 'Build, test, and deploy -all through conversation.',
    heroBadge: 'AI Development Suite',
    heroTitleLead: 'Describe it.',
    heroTitleAccent: 'AI builds it.',
    heroDescription:
      'Describe the product you want in plain language and watch MaVionix design the architecture, write the code, provision the database, and ship it to the cloud -no engineering team required.',
    icon: Code2,
    overviewCardBg: 'border-blue-100 dark:border-blue-500/20 bg-gradient-to-br from-blue-50 via-indigo-50/70 to-white dark:from-blue-500/10 dark:via-indigo-500/5 dark:to-transparent',
    overviewIconWrap: 'text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-950 border border-blue-100 dark:border-blue-500/20',
    problem:
      'Turning an idea into a working product usually means hiring developers, writing specs, waiting weeks for a first build, and paying again for every change.',
    solution:
      'The AI Development Suite lets anyone build real, production-ready software -websites, apps, SaaS platforms, APIs, and databases -by simply describing what they need in natural language.',
    modules: [
      { id: 'website-builder', name: 'AI Website Builder', description: 'Full marketing sites and web apps generated from a prompt, complete with responsive layouts and SEO-ready pages.', icon: Globe },
      { id: 'app-builder', name: 'AI App Builder', description: 'Native-feeling iOS and Android apps built and previewed from a plain-language description.', icon: Smartphone },
      { id: 'saas-builder', name: 'AI SaaS Builder', description: 'Multi-tenant SaaS products with authentication, billing, and admin dashboards baked in.', icon: Layers },
      { id: 'api-builder', name: 'AI API Builder', description: 'REST and GraphQL APIs generated with automatic documentation and versioning.', icon: GitBranch },
      { id: 'software-builder', name: 'AI Software Builder', description: 'Custom internal tools and desktop-grade software assembled from your requirements.', icon: Boxes },
      { id: 'database-builder', name: 'AI Database Builder', description: 'Schema design, relationships, and migrations handled automatically as your product grows.', icon: Database },
      { id: 'deployment', name: 'AI Deployment', description: 'One-click provisioning to the cloud with domains, SSL, and scaling configured for you.', icon: Rocket },
      { id: 'devops', name: 'AI DevOps', description: 'CI/CD pipelines, monitoring, and infrastructure management running quietly in the background.', icon: Cloud },
      { id: 'testing', name: 'AI Testing', description: 'Automated unit, integration, and end-to-end tests generated alongside every feature.', icon: TestTube },
    ],
    howItWorks: [
      'Describe what you want to build in a single prompt -a website, an app, a SaaS product, an API, or a database.',
      'MaVionix plans the architecture, generates the code, and wires up the database and integrations automatically.',
      'Preview the working product instantly, ask for changes in plain language, and MaVionix rebuilds it in real time.',
      'When you are ready, AI Deployment and AI DevOps ship it to production with testing already in place.',
    ],
    benefits: [
      'Go from idea to working product in hours, not months.',
      'No coding, no dev team, and no hand-off delays.',
      'Every build ships with tests, monitoring, and deployment already handled.',
      'Change requests are just new prompts -not new invoices.',
    ],
  },
  {
    id: 'creative',
    slug: 'ai-creative-suite',
    shortName: 'Creative',
    name: 'MaVionix AI Creative Suite',
    tagline: 'Generate every creative asset your brand needs from one platform.',
    heroBadge: 'AI Creative Suite',
    heroTitleLead: 'One brief.',
    heroTitleAccent: 'Every creative asset.',
    heroDescription:
      'From logos and brand kits to presentations, videos, and social content -the Creative Suite turns a short brief into polished, on-brand assets in minutes.',
    icon: Palette,
    overviewCardBg: 'border-purple-100 dark:border-purple-500/20 bg-gradient-to-br from-purple-50 via-pink-50/70 to-white dark:from-purple-500/10 dark:via-pink-500/5 dark:to-transparent',
    overviewIconWrap: 'text-purple-600 dark:text-purple-400 bg-white dark:bg-slate-950 border border-purple-100 dark:border-purple-500/20',
    problem:
      'Producing consistent, professional creative work usually means juggling designers, copywriters, and video editors across separate tools and timelines.',
    solution:
      'The AI Creative Suite generates logos, brand identities, UI/UX designs, presentations, written content, images, video, and social assets from a single platform -all on-brand, every time.',
    modules: [
      { id: 'logo-generator', name: 'AI Logo Generator', description: 'Vector logo concepts and variations generated instantly from your brand brief.', icon: PenTool },
      { id: 'brand-identity', name: 'AI Brand Identity', description: 'Complete brand kits -palettes, typography, and voice guidelines -built to stay consistent everywhere.', icon: Sparkles },
      { id: 'uiux-designer', name: 'AI UI/UX Designer', description: 'Figma-ready screens and interactive prototypes generated from a product description.', icon: Figma },
      { id: 'presentation-builder', name: 'AI Presentation Builder', description: 'Pitch decks and reports with auto-layout, charts, and brand-matched styling.', icon: FileText },
      { id: 'content-writer', name: 'AI Content Writer', description: 'Blog posts, product copy, and long-form content written in your brand voice.', icon: FileEdit },
      { id: 'image-generator', name: 'AI Image Generator', description: 'Product shots, marketing visuals, and concept art generated on demand.', icon: ImageIcon },
      { id: 'video-generator', name: 'AI Video Generator', description: 'Explainer videos, ads, and social reels produced without a camera crew.', icon: Video },
      { id: 'social-generator', name: 'AI Social Media Generator', description: 'Platform-ready posts, captions, and creative variations scheduled in bulk.', icon: Share2 },
      { id: 'document-generator', name: 'AI Document Generator', description: 'Proposals, contracts, and reports formatted and generated automatically.', icon: FileText },
    ],
    howItWorks: [
      'Share a brief -your brand, your audience, and the asset you need.',
      'The Creative Suite generates on-brand options across logos, visuals, copy, video, or decks.',
      'Refine anything with a follow-up prompt instead of a redesign request.',
      'Export production-ready files or publish straight to your channels.',
    ],
    benefits: [
      'One platform replaces a stack of design, copy, and video tools.',
      'Every asset stays consistent with your brand automatically.',
      'Turn a brief into finished creative in minutes, not weeks.',
      'Scale content and campaigns without scaling your creative team.',
    ],
  },
  {
    id: 'business',
    slug: 'ai-business-suite',
    shortName: 'Business',
    name: 'MaVionix AI Business Suite',
    tagline: 'Run every department on one connected, AI-powered platform.',
    heroBadge: 'AI Business Suite',
    heroTitleLead: 'Every department.',
    heroTitleAccent: 'One intelligence layer.',
    heroDescription:
      'CRM, ERP, HR, finance, sales, marketing, support, analytics, projects, procurement, and inventory -all interconnected through a single AI intelligence layer.',
    icon: Briefcase,
    overviewCardBg: 'border-emerald-100 dark:border-emerald-500/20 bg-gradient-to-br from-emerald-50 via-teal-50/70 to-white dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-transparent',
    overviewIconWrap: 'text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-950 border border-emerald-100 dark:border-emerald-500/20',
    problem:
      'Most businesses run on a patchwork of disconnected tools -one app for sales, another for HR, another for finance -with data trapped in silos between them.',
    solution:
      'The AI Business Suite brings every core operation into one platform, with all modules interconnected through a unified AI intelligence layer so information and decisions flow seamlessly across departments.',
    modules: [
      { id: 'crm', name: 'AI CRM', description: 'Lead scoring, pipeline management, and automated follow-ups.', icon: Users },
      { id: 'erp', name: 'AI ERP', description: 'Resource planning that connects every department in real time.', icon: Building2 },
      { id: 'hrms', name: 'AI HRMS', description: 'Hiring, onboarding, payroll, and leave tracking on autopilot.', icon: UserCog },
      { id: 'finance', name: 'AI Finance', description: 'Cash flow, budgeting, and financial forecasting made visible instantly.', icon: CreditCard },
      { id: 'accounting', name: 'AI Accounting', description: 'Invoicing, reconciliation, and tax-ready reports generated automatically.', icon: Calculator },
      { id: 'sales', name: 'AI Sales', description: 'Deal tracking, quoting, and revenue forecasting in one workspace.', icon: TrendingUp },
      { id: 'marketing', name: 'AI Marketing', description: 'Campaign planning and performance insights shared straight from your CRM data.', icon: MegaphoneIcon },
      { id: 'customer-support', name: 'AI Customer Support', description: 'Ticket triage, chatbots, and SLA monitoring for every channel.', icon: Headphones },
      { id: 'analytics', name: 'AI Analytics', description: 'Cross-department dashboards and reporting without writing a query.', icon: LineChart },
      { id: 'project-management', name: 'AI Project Management', description: 'Planning, task tracking, and delivery visibility across every team.', icon: FolderKanban },
      { id: 'procurement', name: 'AI Procurement', description: 'Vendor comparison, RFQs, and purchase orders handled automatically.', icon: ShoppingCart },
      { id: 'inventory', name: 'AI Inventory Management', description: 'Stock tracking, reordering, and supplier coordination in real time.', icon: Package },
    ],
    howItWorks: [
      'Connect the modules your business needs -from CRM to inventory -on one shared platform.',
      'The unified AI intelligence layer keeps data synced across every department automatically.',
      'Teams get proactive insights and recommendations instead of hunting through spreadsheets.',
      'As you grow, add modules without migrating data or stitching together new integrations.',
    ],
    benefits: [
      'One source of truth across sales, finance, HR, and operations.',
      'Departments collaborate without manual handoffs or duplicate data entry.',
      'AI surfaces the decisions that matter instead of burying them in reports.',
      'Scale from a single module to a full back office without switching platforms.',
    ],
  },
  {
    id: 'automation',
    slug: 'ai-automation-suite',
    shortName: 'Automation',
    name: 'MaVionix AI Automation Suite',
    tagline: 'Let AI orchestrate your workflows with minimal human intervention.',
    heroBadge: 'AI Automation Suite',
    heroTitleLead: 'Set the trigger.',
    heroTitleAccent: 'AI runs the rest.',
    heroDescription:
      'Connect apps, trigger workflows, and deploy autonomous agents that carry out multi-step business processes intelligently -end to end.',
    icon: Workflow,
    overviewCardBg: 'border-amber-100 dark:border-amber-500/20 bg-gradient-to-br from-amber-50 via-yellow-50/70 to-white dark:from-amber-500/10 dark:via-yellow-500/5 dark:to-transparent',
    overviewIconWrap: 'text-amber-600 dark:text-amber-400 bg-white dark:bg-slate-950 border border-amber-100 dark:border-amber-500/20',
    problem:
      'Repetitive, multi-step processes -hiring, campaign launches, support escalations -still eat up hours of manual coordination between people and tools.',
    solution:
      'The AI Automation Suite lets you design, trigger, and monitor workflows that run themselves, from simple task automation to autonomous agents that make decisions along the way.',
    modules: [
      { id: 'workflow-automation', name: 'AI Workflow Automation', description: 'Multi-step processes that run automatically once triggered.', icon: GitBranchIcon },
      { id: 'agents', name: 'AI Agents', description: 'Autonomous agents that carry out multi-step tasks with minimal supervision.', icon: Bot },
      { id: 'task-automation', name: 'AI Task Automation', description: 'Everyday tasks -data entry, follow-ups, approvals -handled without manual effort.', icon: ListChecks },
      { id: 'bpa', name: 'AI Business Process Automation', description: 'End-to-end orchestration of core business processes across departments.', icon: Workflow },
      { id: 'decision-support', name: 'AI Decision Support', description: 'Rule-based and AI-driven logic that makes the right call at each step.', icon: Brain },
      { id: 'notifications', name: 'AI Notifications', description: 'Smart alerts that reach the right person at the right time.', icon: Bell },
      { id: 'scheduling', name: 'AI Scheduling', description: 'Cron-style and calendar-aware jobs with retries and escalation.', icon: CalendarClock },
      { id: 'integrations', name: 'AI Integrations', description: 'Connect hundreds of apps so data flows automatically between them.', icon: Plug },
      { id: 'workflow-builder', name: 'AI Workflow Builder', description: 'A visual, drag-and-drop canvas for designing automations without code.', icon: Settings2 },
    ],
    howItWorks: [
      'Choose a trigger -a new lead, a form submission, a schedule, or an event from another module.',
      'Design the workflow visually, or describe it in natural language and let AI build it.',
      'AI Agents and Decision Support carry out each step, escalating to a human only when needed.',
      'Every run is logged, monitored, and refined automatically over time.',
    ],
    workflows: [
      {
        id: 'website-creation',
        name: 'Website Creation Workflow',
        description: 'From a one-line brief to a live, deployed website -no manual handoffs.',
        steps: ['Prompt describes the site and goals', 'AI Website Builder generates the pages', 'AI Testing validates the build', 'AI Deployment publishes it live'],
      },
      {
        id: 'employee-hiring',
        name: 'Employee Hiring Workflow',
        description: 'Requisition to offer letter, coordinated automatically by AI HRMS and AI Agents.',
        steps: ['Job requisition triggers the workflow', 'AI Agents source and screen candidates', 'Interviews are scheduled automatically', 'AI HRMS generates the offer and onboarding'],
      },
      {
        id: 'marketing-campaign',
        name: 'Marketing Campaign Workflow',
        description: 'Brief to live campaign across every channel, with performance tracked automatically.',
        steps: ['Campaign brief triggers the workflow', 'AI Creative Suite generates assets and copy', 'AI Marketing schedules and launches', 'AI Analytics reports results in real time'],
      },
      {
        id: 'customer-support-automation',
        name: 'Customer Support Automation',
        description: 'Tickets triaged, resolved, or escalated without manual routing.',
        steps: ['New ticket triggers AI Customer Support', 'AI Agents resolve common issues instantly', 'Complex cases are escalated with full context', 'Notifications keep customers updated'],
      },
      {
        id: 'business-operations',
        name: 'Business Operations Automation',
        description: 'Procurement, inventory, and finance kept in sync without manual reconciliation.',
        steps: ['Inventory threshold triggers a reorder', 'AI Procurement requests vendor quotes', 'AI Decision Support selects the best offer', 'AI Finance updates budgets automatically'],
      },
    ],
    benefits: [
      'Multi-step processes run end-to-end with minimal human intervention.',
      'Agents and decision logic handle the routine so people focus on exceptions.',
      'Every workflow connects across suites -development, creative, and business alike.',
      'Full visibility into every run, trigger, and outcome.',
    ],
  },
  {
    id: 'marketing',
    slug: 'ai-marketing-suite',
    shortName: 'Marketing',
    name: 'MaVionix AI Marketing Suite',
    tagline: 'Attract, convert, and retain customers -automatically.',
    heroBadge: 'AI Marketing Suite',
    heroTitleLead: 'Every channel.',
    heroTitleAccent: 'One growth engine.',
    heroDescription:
      'SEO, content, social, ads, email, and lead generation working together from one platform, with performance visible in real time.',
    icon: Megaphone,
    overviewCardBg: 'border-rose-100 dark:border-rose-500/20 bg-gradient-to-br from-rose-50 via-orange-50/70 to-white dark:from-rose-500/10 dark:via-orange-500/5 dark:to-transparent',
    overviewIconWrap: 'text-rose-600 dark:text-rose-400 bg-white dark:bg-slate-950 border border-rose-100 dark:border-rose-500/20',
    problem:
      'Marketing teams juggle a dozen point tools for SEO, content, social, ads, and email -with no single view of what is actually driving growth.',
    solution:
      'The AI Marketing Suite plans, creates, and runs campaigns end to end, connecting SEO, content, social, paid, and email under one roof with unified analytics.',
    modules: [
      { id: 'seo', name: 'AI SEO', description: 'Keyword research, on-page optimization, and rank tracking, automated.', icon: BarChart3 },
      { id: 'content', name: 'AI Content', description: 'Blog posts, whitepapers, and campaign copy generated on brand.', icon: FileText },
      { id: 'social', name: 'AI Social Media', description: 'Scheduling, analytics, and cross-posting from one calendar.', icon: Share2 },
      { id: 'ads', name: 'AI Ads', description: 'Meta, Google, and LinkedIn campaigns managed and optimized automatically.', icon: TrendingUp },
      { id: 'email-marketing', name: 'AI Email Marketing', description: 'Drip campaigns, newsletters, and A/B tests that run themselves.', icon: FileEdit },
      { id: 'lead-generation', name: 'AI Lead Generation', description: 'Landing pages, forms, and lead magnets built to convert.', icon: Users },
    ],
    howItWorks: [
      'Set your campaign goal -traffic, leads, or revenue.',
      'The Marketing Suite generates the content, creative, and channel plan.',
      'Campaigns launch and optimize automatically based on live performance.',
      'Unified analytics show exactly what is working, across every channel.',
    ],
    benefits: [
      'Plan, create, and launch campaigns from a single workspace.',
      'Every channel reports into one dashboard, not six.',
      'AI keeps optimizing spend and content while you sleep.',
      'Faster time from campaign idea to measurable results.',
    ],
  },
  {
    id: 'analytics-suite',
    slug: 'ai-analytics-suite',
    shortName: 'Analytics',
    name: 'MaVionix AI Analytics Suite',
    tagline: 'Turn data into decisions without writing a query.',
    heroBadge: 'AI Analytics Suite',
    heroTitleLead: 'Your data,',
    heroTitleAccent: 'finally talking back.',
    heroDescription:
      'Real-time dashboards, forecasting, and AI-generated recommendations pulled from every module across the MaVionix platform.',
    icon: BarChart3,
    overviewCardBg: 'border-cyan-100 dark:border-cyan-500/20 bg-gradient-to-br from-cyan-50 via-blue-50/70 to-white dark:from-cyan-500/10 dark:via-blue-500/5 dark:to-transparent',
    overviewIconWrap: 'text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-950 border border-cyan-100 dark:border-cyan-500/20',
    problem:
      'Decision-makers often wait days for a report that is outdated the moment it lands, because the data lives in five different systems.',
    solution:
      'The AI Analytics Suite pulls data from every connected module into live dashboards, forecasts, and plain-language recommendations -no analyst required.',
    modules: [
      { id: 'dashboards', name: 'AI Dashboards', description: 'Real-time KPI dashboards that refresh automatically.', icon: LineChart },
      { id: 'bi', name: 'AI Business Intelligence', description: 'Cross-module reporting with drill-downs into any metric.', icon: BarChart3 },
      { id: 'forecasting', name: 'AI Forecasting', description: 'Revenue, demand, and churn predictions built from your live data.', icon: TrendingUp },
      { id: 'reports', name: 'AI Reports', description: 'Scheduled reports, generated and narrated automatically.', icon: FileText },
      { id: 'recommendations', name: 'AI Recommendations', description: 'Plain-language next steps based on the patterns AI detects.', icon: Brain },
    ],
    howItWorks: [
      'Connect the modules and data sources you want visibility into.',
      'AI Dashboards assemble live views without any manual setup.',
      'Forecasting and recommendations surface automatically as data changes.',
      'Share reports that explain themselves, in plain language.',
    ],
    benefits: [
      'Decisions backed by live data instead of last month\u2019s spreadsheet.',
      'No SQL, no BI team required to get an answer.',
      'Forecasts and recommendations update as your business does.',
      'One analytics layer across every MaVionix suite you use.',
    ],
  },
];

export const getSuiteBySlug = (slug: string | null | undefined) =>
  PRODUCT_SUITES.find((suite) => suite.slug === slug);
