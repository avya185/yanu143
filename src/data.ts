import { ServiceCategory, ServiceFaq, Testimonial, FutureGoal, Certification } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    label: "Website Development",
    icon: "Globe",
    descShort: "Fast websites and web apps built for clarity, speed, and conversions.",
    descLong: "From fast marketing pages to e-commerce and custom web apps - designed for speed, search engines, and high conversion rates.",
    subs: [
      {
        label: "WordPress Site",
        short: "A clean business website your team can update easily.",
        long: "We set up and customize a professional WordPress website with responsive layouts, essential security plugins, custom contact forms, search engine readiness, and clear handoff training.",
        deliverables: ["Theme setup & custom branding", "Fully responsive build", "Security & caching optimization", "Contact/Lead capture forms", "In-built SEO settings", "Walkthrough training session"],
        timeline: "7-14 days",
        pricing: { basic: "INR 7,999", standard: "INR 11,999", premium: "INR 15,999+" },
        tech: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO"],
        includes: ["1 revision (Basic)", "3 revisions (Premium)"],
        addOns: ["Multi-language translation", "Membership system portal", "Advanced Speed Booster"],
        faq: [{ q: "Can I update the content myself?", a: "Yes. We record a customized helper walkthrough video showing you how to edit text and images without touching code." }]
      },
      {
        label: "E-commerce",
        short: "A complete online store built to sell smoothly.",
        long: "Launch your customized e-commerce storefront with product cataloging, secure checkout workflows, domestic/international shipping rules, tax calculations, email notifications, and comprehensive sales dashboard tools.",
        deliverables: ["Fluid Storefront UI", "Full Cataloging & Categorization", "Payment Gateway Integration", "Shipping & Tax rules configured", "Automated transaction emails", "Web analytics setup"],
        timeline: "2-4 weeks",
        pricing: { basic: "INR 14,999", standard: "INR 24,999", premium: "INR 39,999+" },
        tech: ["WooCommerce", "Shopify", "Razorpay", "Stripe API"],
        includes: ["10 products (Basic)", "50 products (Standard)", "Bulk import CSV tools (Premium)"],
        addOns: ["E-commerce product recommendations", "Abandoned cart retrieval flows", "Subscription billing portal"],
        faq: [{ q: "Which platform is best for me?", a: "We analyze your targeted product count, checkout requirements, and long-term plans to recommend Shopify, WooCommerce, or custom React code." }]
      },
      {
        label: "Landing Page",
        short: "A focused page for campaigns, launches, and lead generation.",
        long: "A single, highly optimized page designed around a clear Call-To-Action (CTA). Highly suitable for running Google/Meta ads, business promotions, or launching a targeted product service.",
        deliverables: ["High-impact Hero & Offer copy", "Lead acquisition forms", "Trust blocks & social proof", "Vite/Tailwind high speed code", "Google Analytics & pixel tracking"],
        timeline: "3-7 days",
        pricing: { basic: "INR 4,999", standard: "INR 7,999", premium: "INR 10,999+" },
        tech: ["HTML5 / Tailwind CSS", "React", "Vite", "Webflow"],
        includes: ["Copywriting guidance", "Speed-loading optimizations"],
        addOns: ["WhatsApp interactive CTA", "Countdown urgency timer", "HubSpot CRM submission hook"],
        faq: [{ q: "Do you write the page copy?", a: "We provide strategic layouts and copy templates. Professional copywriting is available as a quick add-on." }]
      },
      {
        label: "Custom Web App",
        short: "A tailored portal, dashboard, or SaaS-style product.",
        long: "For requirements where templates fall short. We build robust, custom web applications utilizing modern backend architectures, complete with role-based auth, custom dashboards, database systems, and secure API gateways.",
        deliverables: ["Product wireframing & UX design", "Polished frontend design", "API Architecture & server logic", "User authentication flow", "Secure SQL/noSQL database", "Production cloud deployment"],
        timeline: "4-12+ weeks",
        pricing: { basic: "INR 29,999 start", standard: "INR 75k - 2L", premium: "Enterprise Custom" },
        tech: ["React / Vue", "Node.js (Express)", "Postgres / Mongo", "AWS / GCP Cloud"],
        includes: ["Git Repo Access", "Staging environment pipeline"],
        addOns: ["Hybrid mobile wrapper", "PWA push notifications", "AI Assistant Integration"],
        faq: [{ q: "Can we build this in phases?", a: "Yes. We highly recommend building an MVP (Minimum Viable Product) first, launching quickly, and scaling based on user metrics." }]
      },
      {
        label: "Website Care & Maintenance",
        short: "Regular updates, cloud backups, and active uptime checks.",
        long: "Ongoing website health monitoring. We handle core updates, plugin maintenance, security audits, automated database backups, database adjustments, and minor copy edits so you never worry about your site crashing.",
        deliverables: ["Twice-weekly updates", "Malware scanning & malware logs", "Off-site daily backups", "Minor formatting/content edits", "Uptime monitor alarms"],
        timeline: "Monthly Retainer",
        pricing: { basic: "INR 2,499/mo", standard: "INR 4,999/mo", premium: "INR 9,999/mo+" },
        tech: ["Linux WP-CLI", "UpdraftPlus", "Cloudflare CDN"],
        includes: ["Monthly health reports", "Response times under 4 hours (Prem)"],
        addOns: ["Ad-hoc coding blocks", "Staging server testing environment", "Monthly conversion audits"],
        faq: [{ q: "What happens if our site goes offline?", a: "With our automated monitoring tools, we are alerted instantly and resolve host-level issues before you or your customers even notice." }]
      },
      {
        label: "Speed & Security Optimization",
        short: "Make your page load fast and secure against bots.",
        long: "Fix Core Web Vitals (LCP, CLS, FID) to rank higher on Google. We compress resources, setup efficient media delivery pipelines, setup Cloudflare firewall configurations, and block malicious attacks.",
        deliverables: ["Lighthouse optimization audit", "Lossless asset compression", "Minified scripts & style bundling", "DNS/SSL routing adjustments", "Server firewall rules configuration"],
        timeline: "3-10 days",
        pricing: { basic: "INR 3,999", standard: "INR 7,999", premium: "INR 14,999+" },
        tech: ["Google Lighthouse", "WebPageTest", "Cloudflare WAF"],
        includes: ["Before-and-after performance metrics", "Clean backup state saved"],
        addOns: ["Uptime alert monitors", "Malware removal guarantee"],
        faq: [{ q: "Can we achieve a 90+ score on mobile?", a: "In most cases, yes! We prune unused legacy plugins, configure lazy loading, set correct dimensions, and optimize cache rules to maximize speed." }]
      }
    ]
  },
  {
    label: "Chatbot Development",
    icon: "MessageSquare",
    descShort: "AI and rule-based chat systems to capture leads and deflect support requests.",
    descLong: "Deploy helpful, responsive assistants directly to WhatsApp, Telegram, or your website using intelligent flows matched to your actual business processes.",
    subs: [
      {
        label: "WhatsApp Bot",
        short: "Interactive customer flows directly inside WhatsApp.",
        long: "Convert prospects into leads, schedule bookings, and trigger template alerts. Connect your official WhatsApp Business API to custom automation backends for reliable 24/7 engagement.",
        deliverables: ["WhatsApp API setup", "Interactions & keyword menu", "Lead capture forms inside chat", "Pre-approved templates setup", "Document/media dispatch logic"],
        timeline: "7-21 days",
        pricing: { basic: "INR 7,999", standard: "INR 14,999", premium: "INR 24,999+" },
        tech: ["Meta API Sandbox", "Twilio API", "360dialog Connector", "NodeJS"],
        includes: ["Up to 5 FAQ conversational flows", "CSV lead exports"],
        addOns: ["In-chat payments processing", "Multi-language menu", "AI fallback fallback reasoning"],
        faq: [{ q: "Will we need a verified business account?", a: "Yes, to launch public API workflows Meta requires business verification. We will help you navigate this step seamlessly." }]
      },
      {
        label: "AI Chatbot",
        short: "A smart assistant trained on your business knowledge bases.",
        long: "An AI system utilizing advanced LLMs of Gemini/OpenAI. Grounded strictly on your manuals, PDFs, guidelines, and pricing docs, meaning it answers accurately without fabricating facts.",
        deliverables: ["Data ingest pipelines", "Knowledge base vector store", "AI response mapping", "Responsive chat overlay widget", "Admin chat logs review UI"],
        timeline: "2-4 weeks",
        pricing: { basic: "INR 14,999", standard: "INR 24,999", premium: "INR 49,999+" },
        tech: ["Gemini 3.5 Flash", "Pinecone Vector Store", "LangChain Suite"],
        includes: ["Processing of up to 100 knowledge base pages", "Security boundaries configured"],
        addOns: ["Microphone audio input", "CRM integration", "Customer agent human handoff"],
        faq: [{ q: "How do we prevent AI from telling lies?", a: "We apply rigorous system instructions, strict RAG (Retrieval-Augmented Generation) grounding, and boundary constraints to keep responses based 100% on your provided data." }]
      },
      {
        label: "Multiplatform Bot",
        short: "One single conversational brain, active on all channels.",
        long: "A robust conversation management system. Configure your FAQ tree and AI agent once, then automatically deploy to Web, WhatsApp, Messenger, and Telegram channels simultaneously.",
        deliverables: ["Unified conversational design", "Connector adaptors setup", "State sync controller", "Multi-channel analytics board", "Failover failcheck system"],
        timeline: "3-6 weeks",
        pricing: { basic: "INR 19,999", standard: "INR 34,999", premium: "INR 59,999+" },
        tech: ["Botpress", "Dialogflow CX", "Kore.ai", "Node.js Server"],
        includes: ["Activation across 3 channels", "Operational documentation"],
        addOns: ["IVR Telephony routing", "Custom Stripe billing blocks", "Salesforce dashboard connector"],
        faq: [{ q: "Can we have different responses per channel?", a: "Yes. Standard text replies are kept uniform, but you can deploy rich slider buttons on web pages while WhatsApp utilizes text numbers." }]
      },
      {
        label: "Lead Capture Widget Bot",
        short: "A micro popup helper that qualifies site visitors.",
        long: "An interactive website overlay widget that prompts visitors with multiple-choice questions about what they are seeking, collects their info, and alerts your sales rep instantly.",
        deliverables: ["Embeddable widget javascript", "Interactive pricing calculator inside bot", "Automated email notifications", "Google Sheets CRM hookup", "Custom trigger rules (exit intent, delay)"],
        timeline: "3-7 days",
        pricing: { basic: "INR 4,999", standard: "INR 7,999", premium: "INR 12,999+" },
        tech: ["Vanilla JavaScript", "Zapier integrations", "Webhooks"],
        includes: ["Automated Excel lead syncing", "Brand styling matches your site"],
        addOns: ["OTP verification during chat", "Lead qualification score rating"],
        faq: [{ q: "Is this easy to place on our existing website?", a: "Absolutely. We supply a lightweight script tag. Just copy-paste it right above your closing body tag on any website structure." }]
      },
      {
        label: "Support Helpdesk Bot",
        short: "Automate tier-1 customer help and ticket routing.",
        long: "Connect with support tools like Freshdesk or Zendesk. The bot qualifies issues, guides users to self-help answers, and creates rich support tickets for human agents when needed.",
        deliverables: ["Zendesk/Freshdesk API client setup", "Auto-suggest articles algorithm", "Ticket capture formatting", "User satisfaction check (CSAT)", "Support routing logic"],
        timeline: "2-5 weeks",
        pricing: { basic: "INR 9,999", standard: "INR 19,999", premium: "INR 39,999+" },
        tech: ["Zendesk API", "Freshdesk API", "RAG vector docs", "NodeJS"],
        includes: ["Integrates with your Zen/Fresh databases", "Up to 3 product segments mapping"],
        addOns: ["Human Agent Live Handoff", "Multi-language support translation", "Voice support routing"],
        faq: [{ q: "How much support load does this deflect?", a: "Our support bots typically deflect between 25% and 45% of repetitive Tier-1 issues, freeing your team to resolve deeper requests." }]
      },
      {
        label: "Voicebot / IVR AI",
        short: "Conversational voice assistant over standard phone lines.",
        long: "An advanced, conversational voice response system. It talks, listens, gathers user responses, passes them to your CRM, and transfers callers to the right departments.",
        deliverables: ["Virtual phone number setup", "Prompt logic (Speech-to-text/Text-to-speech)", "Dynamic call-flow script", "Call outcomes mapping tool", "Call logs archive storage"],
        timeline: "3-8 weeks",
        pricing: { basic: "INR 14,999", standard: "INR 29,999", premium: "INR 59,999+" },
        tech: ["Twilio Voice Service", "Asterisk", "Google TTS & STT", "FastAPI"],
        includes: ["Standard IVR selection tree", "Up to 5 caller scenarios mapping"],
        addOns: ["Fine-tuned LLM reasoning", "Agent hot-transfer hook", "Anonymization filters (PCI compliance)"],
        faq: [{ q: "Are Indian accents supported?", a: "Yes. The AI pipeline is trained heavily to understand diverse Indian accents, local terms, and conversational rhythms in English, Hindi, and Hinglish mixtures." }]
      }
    ]
  },
  {
    label: "Graphics & Design",
    icon: "Palette",
    descShort: "Branding materials, UI templates, and visuals that build authority.",
    descLong: "Cohesive visual systems from high-contrast brand boards to pitch decks and campaign creatives that make your company easier to buy from.",
    subs: [
      {
        label: "Logo Design",
        short: "A clean logo system that works across web, print, and social.",
        long: "We design a distinctive, custom logo system that represents your brand values. Delivered with thorough color palettes, vector files, high-res PNGs, and social media layout sizing.",
        deliverables: ["3-5 Custom Concepts", "Full vector master files (.ai, .svg)", "High-res transparent PNG variants", "Mini Typography overview sheet"],
        timeline: "5-10 days",
        pricing: { basic: "INR 999", standard: "INR 2,499", premium: "INR 4,999+" },
        tech: ["Adobe Illustrator", "Figma", "Photoshop"],
        includes: ["Social media profile avatars layout", "2 refinement revisions (Basic)"],
        addOns: ["Animated SVG logo dynamic version", "Full identity style book"],
        faq: [{ q: "Do we own the full copyright?", a: "Yes. Once the invoices match, full vector assets and complete design rights are permanently yours." }]
      },
      {
        label: "Social Media Posts",
        short: "Custom layouts and story assets to drive attention.",
        long: "Engage your feed with modern, high-contrast social post layouts, carousel cards, and Reel headers styled with your specific brand elements.",
        deliverables: ["Static posts / carousels", "Easily editable Figma/Canva sources", "Ready-to-use PNG exports", "Grid visual preview schema"],
        timeline: "3-7 days",
        pricing: { basic: "INR 499 (5 posts)", standard: "INR 1,499 (20 posts)", premium: "INR 2,999+" },
        tech: ["Figma", "Canva Team", "Adobe Photoshop"],
        includes: ["Fully reusable card layouts", "Color guidelines sheet"],
        addOns: ["Animated motion GFX reel covers", "A/B variant tests for paid ads"],
        faq: [{ q: "Do you supply the caption copy?", a: "We focus on aesthetics. For caption strategies, we suggest bundling our SEO Content services." }]
      },
      {
        label: "UI/UX Design",
        short: "User-friendly screens for apps and corporate pages.",
        long: "Prioritize seamless navigation. We map user journeys, design wireframe architectures, create polished mobile/desktop mockups, and bundle developer-ready exports in Figma.",
        deliverables: ["Interactive user journey flows", "Low-fidelity wireframes", "High-fidelity Figma screens", "Tailored styling rules sheet", "Responsive specs mockup"],
        timeline: "2-6 weeks",
        pricing: { basic: "INR 6,999", standard: "INR 19,999", premium: "INR 39,999+" },
        tech: ["Figma", "Adobe XD", "Zeplin"],
        includes: ["Clickable interactive Figma proto", "Typography/Color components setup"],
        addOns: ["A/B usability testing report", "Full multi-state design system"],
        faq: [{ q: "Can our developer build directly from your designs?", a: "Yes. We handoff developer-ready Figma links utilizing complete grids, components, autolayouts, and CSS token tags." }]
      },
      {
        label: "Brand Identity Kit",
        short: "Complete package of typography, grids, and style parameters.",
        long: "The baseline visual rulebook. Defines your exact brand colors, typography spacing rules, photographic styles, logo offsets, and layout systems to keep all team departments consistent.",
        deliverables: ["Consolidated brand board", "Strict hex/CMYK color codes", "Recommended heading pairings", "Logo safety parameters", "Brand imagery guideline sheets"],
        timeline: "1-2 weeks",
        pricing: { basic: "INR 3,499", standard: "INR 7,999", premium: "INR 14,999+" },
        tech: ["Figma", "Adobe Illustrator"],
        includes: ["Print-ready PDF overview book", "Color pallet codes"],
        addOns: ["Email layout HTML templates", "Stationery card design assets"],
        faq: [{ q: "What if we don't have a logo yet?", a: "We highly recommend starting with our unified Logo + Identity Kit bundle for optimal outcomes." }]
      },
      {
        label: "Pitch Deck Design",
        short: "Clean slides that convince investors and enterprise buyers.",
        long: "We format and style pitch decks and sales decks that clarify your value. We design custom charts, select relevant visual assets, and format slides for optimal readability.",
        deliverables: ["Presentation structure outline", "Unique slide template design", "Infographics & data visualizations", "Icons and asset pack selection", "PowerPoint / Keynote master + PDF"],
        timeline: "5-14 days",
        pricing: { basic: "INR 1,999", standard: "INR 4,999", premium: "INR 9,999+" },
        tech: ["Microsoft PowerPoint", "Figma", "Apple Keynote"],
        includes: ["Full template source libraries", "Sized for standard widescreen (16:9)"],
        addOns: ["Audio rehearsal cues guide", "Interactive animated PDF copy"],
        faq: [{ q: "Is our data kept confidential?", a: "Strictly. We sign an NDA before you share any pitch text, research slides, or cap tables." }]
      },
      {
        label: "Marketing Collateral Pack",
        short: "Print-ready brochures, flyers, and event banner designs.",
        long: "Sleek offline assets. Tri-folds, custom banners, stickers, letterheads, and package templates designed for professional printing.",
        deliverables: ["Tri-fold / corporate folder", "Banner/Ad layout designs", "Email marketing headers", "Print-configured PDF files", "Color bleed guides set"],
        timeline: "5-10 days",
        pricing: { basic: "INR 1,499", standard: "INR 3,999", premium: "INR 8,999+" },
        tech: ["Adobe InDesign", "Adobe Illustrator", "Photoshop"],
        includes: ["Correct print specs setup", "CMYK + Spot color mappings"],
        addOns: ["Dynamic variable printing sheets", "Local print-shop management"],
        faq: [{ q: "Do you print the items?", a: "No. We design and deliver print-ready files configured with bleed margins, vector paths, and CMYK color profiles, ready for any local print shop." }]
      }
    ]
  },
  {
    label: "AI & Automation",
    icon: "Cpu",
    descShort: "Operational automation pipelines, metric dashboards, and AI bots.",
    descLong: "Strip manual tasks out of your day. Connect your CRM, email databases, and active pipelines together into self-running, reliable operations.",
    subs: [
      {
        label: "Custom AI Tools",
        short: "An internal AI utility built to process your target tasks.",
        long: "Tailor artificial intelligence to your operational tasks. We develop document summarizing pipelines, data grading models, auto-taggers, and report compilers with easy admin panels.",
        deliverables: ["Operational workflow map", "Model fine-tuning or prompt routing", "Custom web interface panel", "Analytics metrics database", "API deployment"],
        timeline: "3-8 weeks",
        pricing: { basic: "INR 19,999", standard: "INR 49,999", premium: "Custom Enterprise Docs" },
        tech: ["Gemini 3.5 Flash", "LlamaIndex API", "React Dashboard", "FastAPI Server"],
        includes: ["Security guards configured", "Developer code annotations"],
        addOns: ["Local model deployment", "Dynamic model retraining scheduler"],
        faq: [{ q: "How is our proprietary data secured?", a: "We utilize API setups that do not use your prompt data for training, and configure strict access policies to keep your knowledge base isolated." }]
      },
      {
        label: "Process Automation",
        short: "Synchronize applications to eliminate manual data entry.",
        long: "Save precious hours weekly. Trigger spreadsheets from email leads, assign sales reps automatically on booking events, sync CRM fields, and alert Slack/WhatsApp reps instantly.",
        deliverables: ["Data flow diagrams", "Operational automation config", "Application connections mapping", "System failure alert rules", "Logs dashboard"],
        timeline: "5-14 days",
        pricing: { basic: "INR 9,999", standard: "INR 19,999", premium: "INR 29,999+" },
        tech: ["n8n Workflow Engine", "Make.com Node API", "Zapier Integration", "Python Scripts"],
        includes: ["Up to 5 workflow connections", "Support for up to 10k monthly runs"],
        addOns: ["On-premise n8n setup", "Advanced custom payload scripts"],
        faq: [{ q: "What if a connected service goes offline?", a: "We configure persistent retry queues, error alert routes, and backup triggers to keep your data flowing once services reconnect." }]
      },
      {
        label: "Dashboards",
        short: "Unified, live operations reporting in one single view.",
        long: "Prune multiple tabs. We map database setups, CRM endpoints, marketing pipelines, and spreadsheet rows to serve clear metrics on one screen.",
        deliverables: ["Cloud database connects", "Automated ETL formatting scripts", "Metric KPI calculation algorithms", "Desktop/Mobile responsive layout", "Scheduled PDF deliveries"],
        timeline: "2-5 weeks",
        pricing: { basic: "INR 9,999", standard: "INR 24,999", premium: "INR 49,999+" },
        tech: ["Metabase", "Looker Studio", "Grafana", "NodeJS / SQLite"],
        includes: ["3 major dashboard views mapping", "User auth settings setup"],
        addOns: ["Real-time socket streams", "Anomalous metric auto alerts"],
        faq: [{ q: "Is our reporting data kept real-time?", a: "We optimize sync timings to match source limits; most marketing setups sync hourly, while database connections load live on request." }]
      },
      {
        label: "CRM & Lead Scoring Automation",
        short: "Grade and route inbound leads to sales reps in seconds.",
        long: "Automate inbound routing. Score leads based on field variables (company size, location, intent), assign sales reps immediately via calendar events, and trigger follow-up emails.",
        deliverables: ["Scoring logic setup", "CRM schema update maps", "Assigned sales rep algorithms", "Notification alert templates", "Nurture sequence setup"],
        timeline: "2-4 weeks",
        pricing: { basic: "INR 14,999", standard: "INR 29,999", premium: "INR 59,999+" },
        tech: ["HubSpot CRM API", "Zoho Developer Console", "Zapier Logic", "Python SDKs"],
        includes: ["Qualification score system built", "Up to 3 distinct routing sequences"],
        addOns: ["Predictive ML scoring model", "Abuse form-submission filter"],
        faq: [{ q: "Under what CRMs does this run?", a: "We configure scoring and routing across HubSpot, Zoho CRM, Salesforce, Pipedrive, and Custom SQL tables." }]
      },
      {
        label: "Predictive Analytics / ML",
        short: "Forecast trend paths and customer churn using ML.",
        long: "Leverage standard machine learning models to forecast inventory demands, flag high-risk accounts likely to churn, or identify cross-selling opportunities based on purchasing trends.",
        deliverables: ["Historical database review", "Features engineering logic", "Selected model validation reports", "API predictive output gateway", "Operations documentation"],
        timeline: "4-10+ weeks",
        pricing: { basic: "INR 24,999", standard: "INR 74,999", premium: "Enterprise Scope" },
        tech: ["Python Data Stack", "Scikit Learn Lib", "TensorFlow Analytics", "Docker"],
        includes: ["Model verification metrics report", "REST API predictive hooks"],
        addOns: ["Model retraining pipelines", "Cloud server orchestrations"],
        faq: [{ q: "How much data history is required?", a: "For seasonal forecasts, we recommend at least 12 to 24 months of historical records to achieve reliable outputs." }]
      },
      {
        label: "Data Prep & ETL Pipelines",
        short: "Clean, translate, and pipe operational databases easily.",
        long: "Tame database chaos. We construct ETL pipelines that extract raw client metrics, format structural columns, run quality tests, and deposit uniform outputs into clean databases.",
        deliverables: ["Database schema maps", "Transformations code scripts", "Automated scheduling system", "System error reports tracker", "Master datastore setup"],
        timeline: "2-6 weeks",
        pricing: { basic: "INR 9,999", standard: "INR 29,999", premium: "INR 59,999+" },
        tech: ["Airbyte Connection Engine", "dbt Engine", "Apache Airflow SDK", "PostgreSQL"],
        includes: ["Data quality test framework setup", "Unified schema master file"],
        addOns: ["Real-time event streaming setup", "Strict encryption-at-rest profiles"],
        faq: [{ q: "Can we sync on-premise hardware databases?", a: "Yes, we construct secure SSH/VPN gateways to pull data safely from physical servers to your target cloud system." }]
      }
    ]
  },
  {
    label: "Writing & Translation",
    icon: "PenTool",
    descShort: "Articles, blogs, product texts, and translations optimized for search visibility.",
    descLong: "Written content aligned directly with your brand tone, planned around actual search keyword density, and translated clearly into English and Hindi.",
    subs: [
      {
        label: "Blog Writing",
        short: "Detailed articles to drive organic search views and brand trust.",
        long: "Pragmatic, engaging articles. We map structural keywords, research domain information, structure headings for readability, and write copy designed to keep readers engaged.",
        deliverables: ["Target queries research document", "Article outline drafts", "Complete SEO-optimized copy", "Snippet meta titles suggestions", "Revision cycles support"],
        timeline: "2-5 days per article",
        pricing: { basic: "INR 499 (500 words)", standard: "INR 999 (1000 words)", premium: "INR 1,999+" },
        tech: ["SurferSEO Analyzer", "Grammarly Editor", "WordPress Admin Console"],
        includes: ["High-res stock image search", "Heading visual tags structured"],
        addOns: ["Interactive layout graphics builder", "Metadata upload directly inside CMS"],
        faq: [{ q: "How are the writings checked for plagiarism?", a: "Each blog is verified using Copyscape Premium and delivered with an audit verification report." }]
      },
      {
        label: "Product Description",
        short: "Conversion-focused copy to sell inventory items easily.",
        long: "Attract potential buyers. We replace generic specs sheets with copy structured around distinct user benefits, incorporating search terms to rank on retail platforms.",
        deliverables: ["Short-form summary block", "Benefit-oriented bullet list", "Optimized search tag arrays", "Competitor keywords analysis", "Product listing spreadsheet format"],
        timeline: "1-3 days (typical batch)",
        pricing: { basic: "INR 299 / product", standard: "Bulk package discount", premium: "Enterprise Custom" },
        tech: ["Excel / CSV spreadsheets", "Shopify Store Config", "Amazon Seller API Tools"],
        includes: ["Formulated search tags mapping", "A/B copy options for key products"],
        addOns: ["A+ Rich-Media layout guidelines", "Visual infographics text copy"],
        faq: [{ q: "Do you support catalog updates?", a: "Yes, we support bulk imports via structured CSV matching Shopify or Amazon requirements." }]
      },
      {
        label: "Translation (EN-HI)",
        short: "Context-aware transition between English and Hindi languages.",
        long: "Evade bad machine translations. Our professional Indian translators align text context, verify localized phrasing, and translate documents between Hindi and English.",
        deliverables: ["Target context review", "Translated Hindi/English text blocks", "Grammatical punctuation proofread", "Consolidated business terms glossary"],
        timeline: "2-5 days (Typical word count)",
        pricing: { basic: "INR 0.80 / word", standard: "INR 1.50 / word (Expert)", premium: "Enterprise SLA" },
        tech: ["Lilt translation framework", "Google Docs Suite", "Local Hindi/English Lexicons"],
        includes: ["Localization tone variations", "Double-proofread verification step"],
        addOns: ["Speech narration audio guide", "Subtitles SRT file generator"],
        faq: [{ q: "Is the Hindi output written in Devanagari script?", a: "Yes. We supply Devanagari Unicode formatting, and can additionally map Romanized Hindi (Hinglish) if requested." }]
      },
      {
        label: "Website Copywriting",
        short: "Clean, persuasive copy for your landing, home, and about pages.",
        long: "Convert visitors into prospects. We draft clear heading hierarchies, map conversational sections, highlight values, and write CTAs tailored to your conversion paths.",
        deliverables: ["Brand tone discovery outline", "Page copy layouts structured", "Target SEO metas mapping", "CTA button text suggestions", "Revision cycles support"],
        timeline: "3-10 days",
        pricing: { basic: "INR 1,499 / page", standard: "INR 4,999 Site Pack", premium: "Custom Enterprise Scope" },
        tech: ["Google Docs", "Figma Design Tags", "WordPress Page Editors"],
        includes: ["Keyword research mapping", "Conversational layout wireframes"],
        addOns: ["Interactive copy variants tests", "Localization adaptions mapping"],
        faq: [{ q: "Can you review our current page copy?", a: "Yes. We offer rapid page audits with suggested copywriting improvements to boot." }]
      },
      {
        label: "Social & Ad Copy Pack",
        short: "Captions, hook headlines, and visual text scripts designed for ads.",
        long: "Increase click-through rates. We author brief, high-contrast ad structures (hooks, body, CTAs) tailored for LinkedIn, Facebook, and Instagram campaigns.",
        deliverables: ["5-10 hook headlines options", "Focused post copy structures", "Ad copy text blocks", "CTA variations test options", "Target hashtag suggestions array"],
        timeline: "2-5 days",
        pricing: { basic: "INR 999 (10 post pack)", standard: "INR 2,499 (30 post pack)", premium: "INR 4,999+" },
        tech: ["Meta Ads console layout", "Google Sheets Framework"],
        includes: ["Target audience matching rules", "Hashtag clusters built"],
        addOns: ["Localized language variants", "Figma creative copy boards"],
        faq: [{ q: "Do you manage our ad accounts?", a: "No, we act strictly as creative partners. We supply the copy layouts for you or your marketing group." }]
      },
      {
        label: "Technical Documentation",
        short: "Clear product manuals, operational SOPs, and developer API guides.",
        long: "Clarify technical complexity. We study your software structure or hardware procedures to compile documentation, ensuring ease of use for clients.",
        deliverables: ["Product documentation layout", "Process draft review", "Accompanying screenshots guide", "Refinement cycle support", "API Markdown / PDF master"],
        timeline: "5-20 days",
        pricing: { basic: "INR 2,499", standard: "INR 9,999", premium: "Custom Enterprise Docs" },
        tech: ["Markdown (git flavored)", "ReadTheDocs system", "Git repositories"],
        includes: ["PDF export version", "Accompanying glossary"],
        addOns: ["Walking Loom video guide", "Web-view wiki hosting configuration"],
        faq: [{ q: "Do you keep up with product code updates?", a: "Yes. We offer ongoing maintenance retainers to keep docs synchronized as your code evolved." }]
      }
    ]
  },
  {
    label: "Other",
    icon: "Toolbox",
    descShort: "SEO audits, server hosting, consulting, and maintenance support.",
    descLong: "Complete digital advisory support of cloud provisioning, SEO checks, priority debugging SLAs, and workshops to help teams use AI daily.",
    subs: [
      {
        label: "SEO Services",
        short: "Enhance index rankings with technical and content tuning.",
        long: "Climb Google search queries. We trace site index failures, setup semantic schema listings, configure automated sitemaps, optimize loading delays, and improve metadata tags.",
        deliverables: ["Current index health audit report", "Target keyword mapping sheet", "Technical layout code corrections", "Dynamic XML sitemaps setup", "Mobile layout optimizations"],
        timeline: "2-6 weeks",
        pricing: { basic: "INR 3,999", standard: "INR 7,999", premium: "Sustained Retainer" },
        tech: ["Google Analytics (GA4)", "Google Search Console", "Screaming Frog Crawler"],
        includes: ["End of month optimization achievements report", "Index status verification tests"],
        addOns: ["Backlink acquisition strategy", "SEO-optimized monthly blog packs"],
        faq: [{ q: "How soon do we see results?", a: "SEO is a medium-term framework. On-page corrections register index updates in 2-4 weeks; authority ranking growth registers in 3-6 months depending on local competition." }]
      },
      {
        label: "Cloud Setup",
        short: "Deploy code securely to AWS or Google Cloud servers.",
        long: "Avoid host crashes. We provision server hardware, configure SSL routing, map domain DNS setups, configure automated weekly server snapshots, and deploy CDN configurations.",
        deliverables: ["Cloud server instance setup", "Automated DNS & SSL integration", "Github CI/CD deployment pipeline", "Uptime alarm alerts setup", "Operation credentials handoff"],
        timeline: "3-10 days",
        pricing: { basic: "INR 5,999", standard: "INR 11,999", premium: "INR 25,000+" },
        tech: ["AWS Systems", "Google Cloud Engine", "Vercel deployments", "cPanel Console"],
        includes: ["Comprehensive credentials vault setup", "Standard architecture guide docs"],
        addOns: ["High-availability load balancers", "Strict Postgres encryption configurations"],
        faq: [{ q: "Can you migration our old host setup?", a: "Yes. We migration old databases, configurations, and scripts with zero downtime in over 90% of setups." }]
      },
      {
        label: "Consulting",
        short: "Comprehensive tech stack and workflow strategy roadmap.",
        long: "Pragmatic digital roadmap sessions. We trace what works inside your team, spot bottlenecks, test tools, and structure detailed roadmap choices before you purchase software.",
        deliverables: ["Discovery interviews", "Prioritized roadmap draft", "Recommended tools evaluation", "Budget requirements outline"],
        timeline: "Per Hour / Day",
        pricing: { basic: "INR 1,499 / hr", standard: "INR 9,999 / day", premium: "Quarterly Retainer" },
        tech: ["Architecture Diagrams", "Lucidchart workflows"],
        includes: ["Session video recordings archive", "Draft review session"],
        addOns: ["Interactive tool pilot runs", "Detailed technical specification writing"],
        faq: [{ q: "Do you sign confidentiality agreements?", a: "Yes, we require mutual NDA agreements prior to sharing proprietary business specs." }]
      },
      {
        label: "Maintenance & Support Retainer",
        short: "Priority support, software updates, and rapid debugging.",
        long: "Keep your operations up. A pre-purchased block of monthly developer support hours to implement page updates, patch security updates, adjust automations, and repair bugs.",
        deliverables: ["Dedicated support ticket channel", "Rapid codebase bug-fixes", "Copy formatting adjustments", "Monthly library security updates", "Consolidated hours logging"],
        timeline: "Monthly Retainer",
        pricing: { basic: "INR 1,999 / mo", standard: "INR 4,999 / mo", premium: "INR 14,999 / mo+" },
        tech: ["Jira / Linear tracking", "Github branches", "Slack Support Sync"],
        includes: ["Guaranteed 24-hr SLAs (Standard)", "Unused hours rollover support (30 days limit)"],
        addOns: ["24/7 emergency pager setup", "Staging environment hosting"],
        faq: [{ q: "What happens if we require more hours in a month?", a: "Retainer tier users get priority over-allocation at discounted rates, billed at standard end-of-month cycles." }]
      },
      {
        label: "Training & Workshops",
        short: "Help your staff adopt generative AI and automation tools.",
        long: "Upskill your staff. We instruct on AI prompting strategies, n8n pipeline operations, metadata editing, analytics dashboard reading, and data quality check procedures.",
        deliverables: ["Target learning curriculum", "Live virtual sessions", "Recorded lessons archives", "Handy cheat-sheet docs", "Operational assessments"],
        timeline: "1-3 sessions",
        pricing: { basic: "INR 2,999", standard: "INR 7,999", premium: "INR 19,999+ On-Site" },
        tech: ["Google Meet", "Zoom", "Slide decks"],
        includes: ["Full lesson access for up to 10 staff", "Interactive prompt exercises library"],
        addOns: ["In-person board training", "Custom sandbox exercise environment"],
        faq: [{ q: "Can sessions be saved for future hires?", a: "Yes. All workshop assets, code blocks, and records are yours to store and use on internal wikis." }]
      },
      {
        label: "Audits & Strategy Reviews",
        short: "Complete technical, code quality, and speed checks.",
        long: "Discover structural issues. We audit site loading delays, check codebase structures, verify automation security levels, trace UX hurdles, and build a checklist to optimize performance.",
        deliverables: ["Pre-audit alignment call", "Site technical tests & logs", "Prioritized items catalog", "Suggested code corrections overview", "Review call session"],
        timeline: "5-15 days",
        pricing: { basic: "INR 2,499", standard: "INR 7,499", premium: "INR 19,999+" },
        tech: ["Wighthouse analyzer", "Cloud security crawlers", "A/B UX heatmaps"],
        includes: ["Pragmatic audit outcomes catalog PDF", "1-hr discussion session"],
        addOns: ["Direct codebase optimization support", "Quarterly automated audit runs"],
        faq: [{ q: "Do you implement the suggested improvements?", a: "We outline them clearly. You can assign them to your internal group or commission MaVionix to implement them as a detailed project." }]
      }
    ]
  }
];

export const FAQ_LIST: ServiceFaq[] = [
  {
    category: "services",
    q: "What services does MaVionix offer?",
    a: "MaVionix delivers end-to-end digital and AI solutions for startups, service businesses, and growing teams: Website & Web App Development (modern, responsive builds), AI Chatbots (support, lead generation, FAQ), Branding & Creative Assets (logos, complete stylekits, UI/UX screens), AI-powered Automation (CRM syncs, repetitive spreadsheet scrapers), Content & Copy (SEO articles, product copy, Hindi-English translations), and tech consulting / server cloud setup configurations.",
    keywords: ["what", "services", "offer", "capabilities", "skills", "agency", "provide"]
  },
  {
    category: "timeline",
    q: "How long does a typical project take?",
    a: "Small to mid-size deliverables (e.g., standard landing page, WordPress business setup, catalog bot, or branding asset kits) typically take 2-6 weeks. Custom engineering platforms, SaaS-style portals, or extensive operations bundles take 6-12+ weeks, structured around precise milestones: 1) Strategy & Discovery, 2) Mockups & UX Design, 3) Active Building & Tests, 4) Integration & Quality Check, and 5) Launch Handoff & maintenance walkthroughs.",
    keywords: ["how long", "timeline", "duration", "duration time", "weeks", "months", "days", "milestones"]
  },
  {
    category: "pricing",
    q: "What are your pricing options?",
    a: "We structure pricing to suit project requirements: 1) Fixed-Scope Packages (ideal for defined deliverables such as a corporate landing page or standard WhatsApp menu bot), 2) Milestone-Based Billing (ideal for larger Custom Client Apps, paying as each chunk completes), and 3) Monthly Retainers (for priority coding, cloud hosting, automated backups, and daily SEO checks). Sharing your target budget range allows us to configure optimal options.",
    keywords: ["pricing", "cost", "options", "models", "budget", "billing", "how much", "rate", "rate cards"]
  },
  {
    category: "support",
    q: "Do you provide support after delivery?",
    a: "Yes. Each MaVionix package is delivered with custom staff video guides and standard handoff documentation. We offer dedicated Monthly Maintenance Retainers (handling regular security patches, off-site cloud backups, speed audits, and support-ticket response times under 4 hours) so your services maintain peak performance.",
    keywords: ["support", "maintenance", "after delivery", "help desk", "bug fixes", "service agreements", "sla", "crashes"]
  },
  {
    category: "technical",
    q: "Which technologies do you work with?",
    a: "We deploy modern developers. Frontends: React, TypeScript, Next.js, and Tailwind CSS. Backends: Node.js, Express, Python (FastAPI/Flask), SQL, and NoSQL databases. Hosting cloud: Amazon Web Services (AWS), Google Cloud Platform (GCP), Vercel, Firebase, and Cloudflare. AI logic: Google Gemini SDK, OpenAI API, LangChain frameworks, vector databases, and n8n/Make-driven automation pipelines.",
    keywords: ["technologies", "tech stack", "languages", "libraries", "node", "react", "tailwindcss", "python", "aws", "gcp", "database"]
  },
  {
    category: "services",
    q: "How do I start a project with MaVionix?",
    a: "To begin, submit your project brief through our online Project Request Form, or message us directly on WhatsApp. We typically review your context in 24 hours, coordinate a brief 30-minute Strategy Call to align on deliverables, write a clear scope and quote proposal, and begin active coding once the plan is approved.",
    keywords: ["start project", "onboarding", "briefs", "how to start", "proposal", "contract", "kickoff"]
  },
  {
    category: "services",
    q: "Which industries do you specialize in?",
    a: "We work across diverse, high-growth sectors, specifically tailoring our code structures for: E-commerce storefronts, Healthcare / clinical workflows, online EdTech classes, real-estate agency portfolios, corporate B2B services, and digital SaaS products.",
    keywords: ["industries", "sectors", "clients", "healthcare", "real estate", "ecommerce", "edtech", "saas", "domains"]
  },
  {
    category: "technical",
    q: "Can you build a custom AI chatbot for my business?",
    a: "Yes. We build AI chatbots trained specifically on your product PDFs, FAQs, documentation, or site links using RAG vectors. The chat reads, interprets, and answers users accurately without making up values, complete with human helper handoff paths, support ticket integrations (e.g. Zendesk), or sales lead qualifications.",
    keywords: ["bot", "chatbot", "custom chatbot", "ai bot", "sales assistant", "grounding", "lies", "meta", "whatsapp"]
  },
  {
    category: "services",
    q: "Can MaVionix redesign my existing website instead of building from scratch?",
    a: "Yes. We can audit your current website, preserve the useful content and brand assets, then rebuild weak sections for better speed, mobile layout, conversion flow, accessibility, and SEO structure. If the old stack is limiting growth, we recommend a phased rebuild so your live business is not disrupted.",
    keywords: ["redesign", "existing website", "revamp", "old site", "conversion", "mobile layout"]
  },
  {
    category: "services",
    q: "Do you provide both design and development in one package?",
    a: "Yes. Many projects include UI/UX planning, visual design, frontend development, backend setup, integrations, testing, launch support, and handoff documentation. For smaller budgets, we can also split the work into design-only, development-only, or implementation phases.",
    keywords: ["design and development", "full package", "ui ux", "frontend", "backend", "handoff"]
  },
  {
    category: "services",
    q: "Can you connect my website with WhatsApp, forms, CRM, or Google Sheets?",
    a: "Yes. We regularly connect websites and bots with WhatsApp click-to-chat flows, form submissions, Google Sheets, email alerts, HubSpot, Zoho CRM, payment gateways, booking calendars, and custom dashboards. The exact integration plan depends on your tools and approval access.",
    keywords: ["integrations", "whatsapp", "forms", "crm", "google sheets", "hubspot", "zoho", "calendar"]
  },
  {
    category: "services",
    q: "Do you build e-commerce stores?",
    a: "Yes. We build e-commerce storefronts with product catalogs, checkout flows, payment gateway setup, shipping rules, basic analytics, and mobile-optimized product pages. Depending on your product count and operations needs, we may recommend Shopify, WooCommerce, or a custom web app.",
    keywords: ["ecommerce", "shopify", "woocommerce", "store", "checkout", "products", "payment"]
  },
  {
    category: "services",
    q: "Can you create brand assets like logos, pitch decks, and social media creatives?",
    a: "Yes. Our creative services include logo concepts, identity kits, color and typography systems, pitch decks, social media templates, ad creatives, brochures, and print-ready files. These can be bundled with website or app work for a more consistent brand launch.",
    keywords: ["logo", "branding", "pitch deck", "social media", "creative", "brochure", "identity"]
  },
  {
    category: "timeline",
    q: "Can you deliver urgent projects faster?",
    a: "Sometimes. We can offer expedited delivery when the scope is clear, content is ready, and required approvals are available quickly. Rush timelines may require a priority fee and a reduced first-release scope so quality does not suffer.",
    keywords: ["urgent", "rush", "fast delivery", "expedited", "quick", "deadline"]
  },
  {
    category: "timeline",
    q: "What can delay a project timeline?",
    a: "Common delays include late content, unclear requirements, pending payment gateway approvals, slow domain or hosting access, third-party API restrictions, and large revision changes after approval. We reduce delays by defining milestones and access requirements before active build work begins.",
    keywords: ["delay", "late", "requirements", "access", "approval", "revision", "gateway"]
  },
  {
    category: "timeline",
    q: "Do you work in milestones?",
    a: "Yes. Larger projects are usually divided into discovery, design, build, integration, testing, launch, and handoff milestones. This keeps progress visible and lets you approve each major stage before the next one begins.",
    keywords: ["milestones", "stages", "phases", "approval", "progress", "workflow"]
  },
  {
    category: "timeline",
    q: "How quickly can a landing page go live?",
    a: "A focused landing page can often go live within 5-10 working days if copy, brand assets, domain access, and form requirements are ready. More advanced animation, payment, CRM, or multilingual content can extend the schedule.",
    keywords: ["landing page", "go live", "launch", "5 days", "10 days", "domain"]
  },
  {
    category: "pricing",
    q: "Do you require advance payment?",
    a: "Yes. Most projects begin with an advance payment to reserve production time and confirm the scope. Larger projects can be split into milestone payments tied to design approval, build completion, integration, and launch handoff.",
    keywords: ["advance", "payment", "deposit", "milestone payment", "invoice", "billing"]
  },
  {
    category: "pricing",
    q: "Can you work within a fixed budget?",
    a: "Yes. Share your target budget and must-have outcomes, and we will recommend the strongest scope that fits. If the requested scope is larger than the budget, we suggest a phased MVP plan instead of overpromising.",
    keywords: ["fixed budget", "budget", "mvp", "scope", "affordable", "phased"]
  },
  {
    category: "pricing",
    q: "Are domain, hosting, paid plugins, or API fees included?",
    a: "Third-party costs such as domains, hosting, premium plugins, email services, API usage, WhatsApp provider fees, and payment gateway charges are usually billed separately unless they are explicitly included in your proposal. We list expected external costs before launch.",
    keywords: ["domain", "hosting", "plugins", "api fees", "third party", "whatsapp fees", "gateway"]
  },
  {
    category: "pricing",
    q: "Do you offer monthly retainers?",
    a: "Yes. Retainers can cover website care, content updates, uptime checks, analytics reviews, automation monitoring, bug support, and priority development hours. The right retainer depends on how often your systems change after launch.",
    keywords: ["retainer", "monthly", "maintenance", "priority", "updates", "support plan"]
  },
  {
    category: "support",
    q: "What happens after launch?",
    a: "After launch, we verify forms, links, analytics, performance, mobile layouts, and core integrations. We also provide handoff guidance so your team understands how to request edits, review leads, and manage routine content.",
    keywords: ["after launch", "handoff", "forms", "analytics", "performance", "training"]
  },
  {
    category: "support",
    q: "Do you fix bugs after delivery?",
    a: "Yes. Bugs related to the agreed project scope are handled during the included post-delivery support window. New features, major design changes, third-party policy changes, or issues caused by external edits may require a separate update quote.",
    keywords: ["bugs", "bug fix", "warranty", "post delivery", "support window", "changes"]
  },
  {
    category: "support",
    q: "Will you train my team to use the website or dashboard?",
    a: "Yes. We provide practical handoff guidance, and for many packages we record a walkthrough showing how to update content, check submissions, manage products, or use admin dashboards. Team workshops can be added for larger workflows.",
    keywords: ["training", "walkthrough", "team", "dashboard", "admin", "content updates"]
  },
  {
    category: "support",
    q: "Can you maintain websites built by another developer?",
    a: "Yes, after a technical audit. We first review the codebase, hosting, plugins, security status, and access setup. If the current build is unstable, we may recommend repair work before accepting a maintenance retainer.",
    keywords: ["maintain old website", "another developer", "audit", "plugins", "security", "repair"]
  },
  {
    category: "technical",
    q: "Will my website be mobile responsive?",
    a: "Yes. Mobile responsiveness is standard across our website and app builds. We test core pages across common screen sizes and tune spacing, navigation, text scaling, forms, and call-to-action layouts for mobile users.",
    keywords: ["mobile", "responsive", "screen sizes", "phone", "tablet", "layout"]
  },
  {
    category: "technical",
    q: "Do you set up analytics and conversion tracking?",
    a: "Yes. We can configure tools such as Google Analytics, Google Tag Manager, Meta Pixel, event tracking, form submission tracking, and basic conversion funnels. Exact setup depends on your marketing stack and consent requirements.",
    keywords: ["analytics", "tracking", "gtm", "meta pixel", "conversion", "events", "funnels"]
  },
  {
    category: "technical",
    q: "How do you protect business data in AI automations?",
    a: "We use scoped access, environment variables, private API keys, minimal data sharing, role-based permissions where available, and clear separation between client knowledge bases. For sensitive projects, we can also sign NDAs and document data handling boundaries.",
    keywords: ["security", "data protection", "ai automation", "api keys", "nda", "privacy", "permissions"]
  },
  {
    category: "technical",
    q: "Can you migrate my old website to a new platform?",
    a: "Yes. We can migrate content, media, pages, forms, domains, DNS settings, and basic SEO metadata to a new platform. For larger sites, we create a migration checklist to reduce downtime and preserve important URLs.",
    keywords: ["migration", "old website", "new platform", "dns", "seo", "urls", "downtime"]
  },
  {
    category: "technical",
    q: "Do you optimize site speed and Core Web Vitals?",
    a: "Yes. We optimize images, scripts, caching, layout stability, font loading, hosting configuration, and unnecessary plugin usage. For existing sites, we begin with a speed audit and then prioritize fixes based on business impact.",
    keywords: ["speed", "core web vitals", "performance", "cache", "images", "lcp", "cls"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohit Sneha",
    role: "HR Head",
    company: "HiringTech",
    reviewDate: "Aug 2025",
    content: "MaVionix's team designed and deployed an automated WhatsApp candidate qualifying chatbot for our recruitment cycles. It deflects repetitive questions, tracks basic credentials, and exports results directly into our Sheet databases. Our onboarding turnaround times plummeted by 40%!",
    ratingValue: 5.0,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Aman Kapoor",
    role: "CEO",
    company: "D2C Apparel Brand",
    reviewDate: "Aug 2025",
    content: "We partnered with MaVionix for an entire website redesign and conversion audit. They optimized our page loading times from 6.8 seconds to sub-2 seconds, set up seamless Shopify catalog syncs, and mapped streamlined cart checkouts. Our paid ads conversion metrics jumped 40% in a single month!",
    ratingValue: 5.0,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Priya Arora",
    role: "Sales Head",
    company: "UrbanBuild Realty",
    reviewDate: "Aug 2025",
    content: "Our team needed an active, reliable lead qualification chatbot to coordinate 24/7 inbound inquiries on multiplatform layouts. The Botpress/Node-driven hybrid designed by MaVionix gathers prospect locations, matches matching properties, and notifies on-duty reps on WhatsApp instantly. Flawless execution!",
    ratingValue: 5.0,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Sneha Malhotra",
    role: "Founder",
    company: "EduLeap",
    reviewDate: "Aug 2025",
    content: "From unified brand collateral kits, beautiful logo systems, and custom UI mockup screens in Figma, to implementing a robust, auto-scoring lead qualifying backend, MaVionix delivered a comprehensive digital package. Professional communication and measurable business results.",
    ratingValue: 5.0,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150&q=80"
  }
];

export const FUTURE_GOALS: FutureGoal[] = [
  {
    year: "2026",
    title: "Global Client Expansion",
    description: "Servicing small business operations and digital agencies beyond Indian boundaries through fully structured, rapid, remote-delivery pipelines."
  },
  {
    year: "2027",
    title: "Proprietary AI SaaS Assets",
    description: "Designing and deploying focused, subscription-based AI tools to make database operations and automated qualifying accesible for small businesses."
  },
  {
    year: "2028",
    title: "Applied AI Innovations Hub",
    description: "Opening an experimental research segment between Rohini, Delhi - 110089 and Modinagar, Ghaziabad - 201204 to experiment with optimized micro-LLM configurations and custom on-premise pipeline setups."
  },
  {
    year: "2029",
    title: "Domain-Specific AI Classrooms",
    description: "Developing pre-configured, context-aligned training packages for EdTech, automated Healthcare routing, and clinical scheduling databases."
  },
  {
    year: "2030",
    title: "Global Automation Excellence",
    description: "To be recognized as a premier, high-quality full-scale digital transformation partner known for clean code, prompt delivery timelines, and measurable outcomes."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Ministry of MSME, Govt. of India Registered", status: "Active Status", badgeType: "award" },
  { name: "DPIIT Department of Startup India Recognition", status: "Applied / Active Review", badgeType: "shield" },
  { name: "National Career Services Govt. of India Registered", status: "Active Status Verified", badgeType: "check" },
  { name: "OpenAI API Integration Specialized Partners Focus", status: "Applied Expert Focus", badgeType: "medal" }
];
