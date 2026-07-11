/**
 * portfolio.js — Canonical portfolio content for MaVionix.
 * Structured for scalable additions: add projects to PORTFOLIO_PROJECTS array.
 */

export const PORTFOLIO_SEO = {
  title: 'MaVionix Portfolio — Web Development & Digital Solutions',
  description:
    'Explore MaVionix portfolio of website development, e-commerce websites, landing page design, AI chatbot development, mobile app development, and digital agency case studies. Proof-of-work for businesses that demand results.',
  canonical: 'https://www.mavionix.in/portfolio',
  ogImage:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
};

/** Blueprint Section 5 — grouped filter categories mapped to project `category` values */
export const WEBSITE_PROJECT_CATEGORIES = [
  'corporate',
  'ecommerce',
  'landing-page',
  'portfolio-site',
  'service-site',
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'chatbot', label: 'AI & Chatbots' },
  { id: 'branding', label: 'Graphic Design' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'marketing', label: 'Digital Mktg' },
  { id: 'seo', label: 'SEO' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
];

export const SERVICE_CATEGORIES = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    description:
      'End-to-end development of fully responsive, cross-browser compatible websites tailored to your brand identity and business goals.',
    purpose:
      'To provide businesses with a professional digital presence that loads fast, looks great on all devices, and drives user engagement.',
    icon: 'Globe',
  },
  {
    id: 'ecommerce-development',
    number: '02',
    title: 'E-Commerce Development',
    description:
      'Building feature-rich online stores with product catalog management, secure payment gateways, shopping cart systems, and order tracking.',
    purpose:
      'To help businesses sell online with a seamless, conversion-optimized shopping experience for their customers.',
    icon: 'ShoppingCart',
  },
  {
    id: 'landing-page-design',
    number: '03',
    title: 'Landing Page Design',
    description:
      'High-conversion single-page websites designed specifically for marketing campaigns, product launches, and lead generation funnels.',
    purpose:
      'To maximize conversions and minimize bounce rates by presenting a focused, action-oriented page to targeted audiences.',
    icon: 'Rocket',
  },
  {
    id: 'corporate-websites',
    number: '04',
    title: 'Corporate Websites',
    description:
      'Professional multi-page websites designed for enterprises and established businesses, featuring service listings, team pages, and client portals.',
    purpose:
      'To build a strong digital brand presence that communicates authority, trust, and professionalism to potential clients and partners.',
    icon: 'Building2',
  },
  {
    id: 'portfolio-websites',
    number: '05',
    title: 'Portfolio Websites',
    description:
      'Custom-designed personal branding websites for developers, designers, photographers, and other professionals to showcase their work and skills.',
    purpose:
      'To help professionals establish a strong online presence that attracts career opportunities and client inquiries.',
    icon: 'Layout',
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design for Web',
    description:
      'User-centered interface design services including wireframing, prototyping, design systems, and interactive mockups for web applications.',
    purpose:
      'To ensure every web product MaVionix delivers is not just functional but delightful to use, with intuitive navigation and visual hierarchy.',
    icon: 'Palette',
  },
  {
    id: 'website-maintenance',
    number: '07',
    title: 'Website Maintenance',
    description:
      'Ongoing maintenance packages including content updates, security patches, performance monitoring, and technical support for live websites.',
    purpose:
      'To keep client websites secure, up-to-date, and running at peak performance long after the initial launch.',
    icon: 'Wrench',
  },
  {
    id: 'seo-optimization',
    number: '08',
    title: 'SEO Optimization Services',
    description:
      'On-page and technical SEO services including keyword strategy, meta optimization, site speed improvement, and structured data implementation.',
    purpose:
      'To improve organic search rankings, drive quality traffic, and increase the online visibility of MaVionix client websites.',
    icon: 'Search',
  },
  {
    id: 'ai-chatbot-development',
    number: '09',
    title: 'AI Chatbot Development',
    description:
      'Intelligent conversational AI chatbots powered by NLP and machine learning, integrated into websites, mobile apps, and enterprise platforms.',
    purpose:
      'To automate customer support, lead qualification, and user engagement, reducing operational costs while improving response times.',
    icon: 'Bot',
  },
  {
    id: 'graphic-design-branding',
    number: '10',
    title: 'Graphic Design & Branding',
    description:
      'Full-spectrum graphic design services including logo design, brand identity kits, social media visuals, print materials, and marketing collateral.',
    purpose:
      'To help businesses establish a consistent, memorable visual identity that resonates with their target audience across all touchpoints.',
    icon: 'Brush',
  },
  {
    id: 'mobile-app-development',
    number: '11',
    title: 'Mobile Application Development',
    description:
      'Native and cross-platform mobile app development for iOS and Android using React Native and Flutter, from concept to deployment.',
    purpose:
      "To extend a business's digital presence to mobile users with fast, reliable, and feature-rich applications.",
    icon: 'Smartphone',
  },
  {
    id: 'digital-marketing',
    number: '12',
    title: 'Digital Marketing',
    description:
      'Data-driven digital marketing services including social media management, PPC campaigns, content marketing, and email marketing automation.',
    purpose:
      'To maximize brand visibility, audience engagement, and ROI through targeted multi-channel digital campaigns.',
    icon: 'Megaphone',
  },
  {
    id: 'cybersecurity-services',
    number: '13',
    title: 'Cybersecurity Services',
    description:
      'Comprehensive cybersecurity solutions including vulnerability assessments, penetration testing, security audits, and compliance consulting.',
    purpose:
      'To protect businesses from digital threats, data breaches, and cyberattacks while ensuring regulatory compliance.',
    icon: 'Shield',
  },
  {
    id: 'data-analytics-ai',
    number: '14',
    title: 'Data Analytics & AI Solutions',
    description:
      'Advanced data analytics, business intelligence dashboards, predictive modelling, and custom AI/ML solutions tailored to business needs.',
    purpose:
      'To help businesses make data-driven decisions, uncover actionable insights, and leverage artificial intelligence for competitive advantage.',
    icon: 'BarChart3',
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'corporate-website-development',
    slug: 'corporate-website-development',
    category: 'corporate',
    categoryLabel: 'Web Development — Corporate Website',
    title: 'Corporate Website Development',
    shortDescription:
      'Modern corporate website with responsive design, service hierarchy, team showcase, and lead generation system.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (Vanilla)',
      'React.js',
      'Node.js (contact backend)',
      'Figma (design)',
    ],
    problemStatement:
      'A mid-sized consulting firm lacked a professional online presence. Their outdated website had poor mobile responsiveness, no clear service hierarchy, and a high bounce rate — causing them to lose leads to competitors.',
    solutionDescription:
      'MaVionix designed and developed a modern, multi-page corporate website with a clear information architecture, compelling service pages, an interactive team section, and a contact system — optimized for both desktop and mobile.',
    outcomes: [
      'Website bounce rate dropped by 38%',
      'Contact form submissions increased by 210% within 3 months of launch',
      'Client reported a measurable increase in qualified leads from organic search',
    ],
    features: [
      'Fully responsive multi-page layout',
      'Service showcase with individual detail pages',
      'Interactive team section with modal profiles',
      'Integrated contact form with email notifications',
      'SEO-optimized meta structure and sitemap',
      'Performance-optimized with 95+ Lighthouse score',
    ],
    year: '2025',
  },
  {
    id: 'ecommerce-fashion-store',
    slug: 'ecommerce-fashion-store',
    category: 'ecommerce',
    categoryLabel: 'Web Development — E-Commerce',
    title: 'E-Commerce Fashion Store Website',
    shortDescription:
      'Complete fashion e-commerce platform with dynamic product catalog, filtering, Stripe payments, wishlist, and inventory management.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe API',
      'CSS Modules',
      'Figma',
    ],
    problemStatement:
      'A fashion startup needed a fully functional online store to sell their collection. They had no existing digital infrastructure and required a complete solution — from product listing to payment processing — within a tight timeline.',
    solutionDescription:
      'MaVionix built a complete e-commerce website with a dynamic product catalog, filtering by size and category, a cart and wishlist system, secure Stripe payment integration, and an admin dashboard for inventory management.',
    outcomes: [
      'The store launched on schedule and achieved 120 orders in the first 30 days',
      'Average session duration was 4.2 minutes',
      'The cart-to-checkout conversion rate reached 34% — well above the industry average of 20%',
    ],
    features: [
      'Dynamic product catalog with category and size filters',
      'Shopping cart and wishlist functionality',
      'Secure Stripe payment gateway integration',
      'Order confirmation and email notification system',
      'Admin dashboard for product and order management',
      'Mobile-first responsive design',
    ],
    year: '2025',
  },
  {
    id: 'startup-landing-page-design',
    slug: 'startup-landing-page-design',
    category: 'landing-page',
    categoryLabel: 'Web Development — Landing Page',
    title: 'Startup Landing Page Design',
    shortDescription:
      'High-converting single-page landing page with modern animations, pricing tables, and HubSpot CRM integration.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    technologies: [
      'HTML5',
      'CSS3 (Tailwind)',
      'JavaScript',
      'Framer Motion (animations)',
      'HubSpot API',
    ],
    problemStatement:
      'A SaaS startup needed a high-converting landing page to support their product launch campaign. The page had to communicate complex product value in simple terms, capture leads, and integrate with their CRM within 2 weeks.',
    solutionDescription:
      'MaVionix designed and developed a focused, single-page website with a strong hero section, feature breakdown, social proof, a pricing table, and an email capture form — integrated with HubSpot for lead management.',
    outcomes: [
      'The landing page achieved a 28% email sign-up conversion rate during the launch campaign',
      'The page load time was under 1.2 seconds',
      'The startup successfully acquired 480 beta users within the first 2 weeks post-launch',
    ],
    features: [
      'Above-the-fold hero with animated headline',
      'Feature breakdown section with icon cards',
      'Social proof section with logos and testimonials',
      'Interactive pricing tier table',
      'Email capture form with HubSpot CRM integration',
      'A/B test-ready component structure',
    ],
    year: '2025',
  },
  {
    id: 'portfolio-website-developer-designer',
    slug: 'portfolio-website-developer-designer',
    category: 'portfolio-site',
    categoryLabel: 'Web Development — Portfolio Website',
    title: 'Portfolio Website for Developer / Designer',
    shortDescription:
      'Custom portfolio website with smooth interactions, project filter module, and Contentful CMS dashboard integration.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop',
    technologies: [
      'React.js',
      'Next.js',
      'Framer Motion',
      'Tailwind CSS',
      'Contentful CMS',
      'Vercel deployment',
    ],
    problemStatement:
      'A senior UX designer needed a personal portfolio website that would stand out from typical template-based portfolios. They required custom interactions, a clean project showcase, and a site that could be updated without technical knowledge.',
    solutionDescription:
      'MaVionix created a fully custom personal portfolio website with smooth scroll interactions, a filterable project gallery, an interactive skills section, a blog module, and a CMS-backed admin panel for content management.',
    outcomes: [
      'The client received 3 job offers and 5 freelance project inquiries within 60 days of launch',
      'The portfolio ranked on the first page of Google for their name-based search query',
      'Significantly improved their personal brand visibility',
    ],
    features: [
      'Custom animated hero with interactive type effect',
      'Filterable project gallery with modal previews',
      'Skills section with animated progress indicators',
      'Integrated blog with markdown-based CMS',
      'Dark/light mode toggle',
      'Contact section with social links and form',
    ],
    year: '2025',
  },
  {
    id: 'restaurant-website-online-menu',
    slug: 'restaurant-website-online-menu',
    category: 'service-site',
    categoryLabel: 'Web Development — Service / Restaurant Website',
    title: 'Restaurant Website with Online Menu System',
    shortDescription:
      'Multi-location restaurant chain website featuring a digital menu matrix, table booking, and Google Maps embed modules.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP (booking backend)',
      'WordPress CMS',
      'Google Maps API',
      'Figma',
    ],
    problemStatement:
      'A local restaurant chain had no online presence. Customers were unable to view menus, make reservations, or find location information — causing them to lose business to competitors with better web visibility.',
    solutionDescription:
      'MaVionix designed and developed a multi-location restaurant website featuring a digital menu system with categories and filters, an online booking inquiry form, a gallery section, and Google Maps integration for all locations.',
    outcomes: [
      'Within 2 months of launch, the restaurant reported a 45% increase in walk-in customers who found them via Google',
      'Online booking inquiries averaged 30 per week',
      'The menu system reduced direct phone calls for menu queries by 60%',
    ],
    features: [
      'Digital menu with category tabs and item search',
      'Online table booking inquiry form',
      'Photo gallery section for food and ambiance',
      'Multi-location pages with embedded Google Maps',
      'Social media feed integration',
      'Fully mobile-responsive and fast-loading',
    ],
    year: '2025',
  },
  {
    id: 'ai-customer-support-chatbot',
    slug: 'ai-customer-support-chatbot',
    category: 'chatbot',
    categoryLabel: 'AI Chatbot Development — Enterprise',
    title: 'AI-Powered Customer Support Chatbot',
    shortDescription:
      'NLP-powered automation bot for WhatsApp and web channels, equipped with API live order tracking and multilingual flows.',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
    technologies: [
      'Python (Rasa NLP)',
      'Node.js',
      'REST APIs',
      'MongoDB',
      'WhatsApp Business API',
      'React (chat widget)',
      'AWS Lambda',
    ],
    problemStatement:
      'A growing e-commerce company was overwhelmed by repetitive customer support queries — order status, return policies, and product inquiries — causing long wait times and customer dissatisfaction. Their human support team was unable to scale with demand.',
    solutionDescription:
      'MaVionix developed an NLP-powered AI chatbot integrated into the company\'s website and WhatsApp channel. The bot handles FAQs, order lookups via API integration, escalation to live agents, and multilingual support for English, Hindi, and Punjabi.',
    outcomes: [
      'The chatbot handled 73% of all incoming queries autonomously within the first month',
      'Average response time dropped from 4 hours to under 10 seconds',
      'Customer satisfaction scores improved by 41% and the support team\'s workload decreased by 60%',
    ],
    features: [
      'Natural language understanding with intent recognition',
      'Real-time order status lookup via e-commerce API',
      'Multilingual support (English, Hindi, Punjabi)',
      'Seamless escalation to human agent with conversation history',
      'Admin dashboard for chatbot training and analytics',
      'WhatsApp and website widget integration',
    ],
    year: '2025',
  },
  {
    id: 'lead-generation-chatbot-real-estate',
    slug: 'lead-generation-chatbot-real-estate',
    category: 'chatbot',
    categoryLabel: 'AI Chatbot Development — Lead Generation',
    title: 'Lead Generation Chatbot for Real Estate Platform',
    shortDescription:
      'Discovery flow qualifying chatbot featuring custom intent branching, CRM routing, and automated Twilio tracking updates.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    technologies: [
      'Dialogflow (Google)',
      'React.js',
      'Node.js',
      'HubSpot CRM API',
      'Twilio SMS API',
      'Firebase',
    ],
    problemStatement:
      'A real estate firm needed an intelligent lead capture system on their website. Visitors were leaving without inquiring, and the sales team was spending excessive time qualifying unfit leads from generic contact forms.',
    solutionDescription:
      'MaVionix built a conversational lead qualification chatbot that guides website visitors through a discovery flow — capturing location preference, budget, property type, and contact details — then routes qualified leads directly to the appropriate sales agent via CRM.',
    outcomes: [
      'Lead capture rate increased by 55% compared to the previous contact form',
      'Sales team reported a 40% reduction in time spent on unqualified leads',
      'The chatbot generated 120 qualified property inquiries within the first 45 days of deployment',
    ],
    features: [
      'Conversational lead qualification flow with branching logic',
      'Dynamic property recommendation based on user inputs',
      'Automatic lead scoring and CRM integration',
      'SMS follow-up via Twilio after conversation completion',
      'Live agent handoff with full conversation transcript',
      'Embedded chat widget with custom branding',
    ],
    year: '2025',
  },
  {
    id: 'brand-identity-fintech-startup',
    slug: 'brand-identity-fintech-startup',
    category: 'branding',
    categoryLabel: 'Graphic Design & Branding — Brand Identity',
    title: 'Complete Brand Identity for FinTech Startup',
    shortDescription:
      'Full visual asset package design including color guides, iconography matrices, and presentation collateral frameworks.',
    image:
      'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=500&fit=crop',
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe InDesign',
      'Figma (style guide presentation)',
    ],
    problemStatement:
      'A fintech startup launching a digital payments application had no visual brand identity. They required a professional logo, brand guidelines, color system, and marketing collateral to establish credibility with investors and early users before their app launch.',
    solutionDescription:
      'MaVionix designed a complete brand identity system from scratch — including a primary logo, logo variations, color palette, typography system, iconography style, business card, pitch deck template, and a comprehensive brand guidelines document.',
    outcomes: [
      'The startup successfully used the brand assets in their Series A investor pitch, raising funding',
      'The brand identity was praised by their investor panel for its professional and trustworthy aesthetic',
      'Social media launch posts with the new branding achieved 3x higher engagement than their previous generic content',
    ],
    features: [
      'Primary logo with light and dark variations',
      'Brand color palette with HEX, RGB, and CMYK values',
      'Typography system with primary and secondary fonts',
      'Icon set in consistent line-art style',
      'Business card and letterhead design',
      '64-page brand guidelines PDF document',
      'Social media profile and cover templates',
    ],
    year: '2025',
  },
  {
    id: 'social-media-content-suite-fashion',
    slug: 'social-media-content-suite-fashion',
    category: 'branding',
    categoryLabel: 'Graphic Design & Branding — Social Media Design',
    title: 'Social Media Visual Content Suite for Fashion Brand',
    shortDescription:
      'Multi-channel design solution combining customizable templates with unified image color grading presets.',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
    technologies: [
      'Adobe Photoshop',
      'Canva Pro (for client self-editing)',
      'Adobe Premiere Pro (reel covers)',
      'Figma (template system)',
    ],
    problemStatement:
      'A fashion e-commerce brand was struggling with inconsistent social media aesthetics across Instagram, Facebook, and Pinterest. Their product photos lacked professional post treatment, resulting in low engagement and an unpolished brand perception.',
    solutionDescription:
      'MaVionix created a complete social media visual content system — including post templates for product showcases, promotional offers, reels covers, story templates, and carousel designs — all aligned to the brand\'s color palette and visual identity.',
    outcomes: [
      'Instagram engagement rate improved from 1.2% to 4.8% within 60 days of implementing the new visual system',
      'The brand\'s follower count grew by 2,200 in 3 months',
      'Product click-through rates from Instagram to the website increased by 67%',
    ],
    features: [
      '30 editable Instagram post templates (product, promo, quote)',
      '15 story templates with animated elements',
      '8 carousel layout templates',
      'Pinterest pin templates optimized for vertical format',
      'Reels thumbnail and cover design system',
      'Color-grading preset applied to all product images',
    ],
    year: '2025',
  },
  {
    id: 'uiux-redesign-healthcare-portal',
    slug: 'uiux-redesign-healthcare-portal',
    category: 'uiux',
    categoryLabel: 'UI/UX Design — Web Application',
    title: 'UI/UX Redesign for Healthcare Patient Portal',
    shortDescription:
      'Comprehensive UX audit and interface design engineering optimized for appointment bookings and WCAG accessibility standards.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    technologies: [
      'Figma (wireframing, prototyping, design system)',
      'Adobe XD (legacy file migration)',
      'Miro (user journey mapping)',
    ],
    problemStatement:
      'A private hospital\'s patient portal had an outdated, confusing interface. Patients struggled to book appointments, access reports, and navigate billing — leading to high drop-off rates and an increase in front-desk queries that could have been handled digitally.',
    solutionDescription:
      'MaVionix conducted a full UX audit, user interviews, and redesigned the patient portal from scratch. The new design features a simplified navigation structure, an accessible appointment booking flow, a document download center, and a mobile-first responsive layout.',
    outcomes: [
      'Usability testing showed a 62% reduction in task completion time for appointment booking',
      'Post-launch, front-desk queries dropped by 44%',
      'Patient satisfaction scores for the digital experience improved from 3.1 to 4.6 out of 5 within the first quarter after launch',
    ],
    features: [
      'Full UX audit and heuristic evaluation report',
      'User journey maps and persona development',
      'Low and high-fidelity wireframes for all key flows',
      'Interactive Figma prototype with usability testing',
      'Accessible design (WCAG 2.1 AA compliant)',
      'Design system with components, tokens, and documentation',
      'Developer handoff documentation',
    ],
    year: '2025',
  },
  {
    id: 'mobile-ui-design-food-delivery',
    slug: 'mobile-ui-design-food-delivery',
    category: 'uiux',
    categoryLabel: 'UI/UX Design — Mobile Application',
    title: 'Mobile App UI Design for Food Delivery Startup',
    shortDescription:
      'End-to-end multi-screen interface overhaul prioritizing structured checkout micro-interactions and search components.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop',
    technologies: [
      'Figma (UI design and prototyping)',
      'Principle (micro-interaction prototyping)',
      'Zeplin (developer handoff)',
    ],
    problemStatement:
      'A food delivery startup had a functional backend but a poorly designed mobile interface that frustrated users during the ordering process. The checkout flow had too many steps, the restaurant discovery was confusing, and the visual design felt outdated.',
    solutionDescription:
      'MaVionix redesigned the entire mobile app UI — from the onboarding flow to the order tracking screen. The new design prioritizes visual hierarchy, reduces checkout to 3 steps, introduces smart search with filters, and implements a modern card-based restaurant discovery system.',
    outcomes: [
      'App store rating improved from 3.2 to 4.5 stars within 2 months of the UI relaunch',
      'Cart abandonment rate dropped by 38%',
      'Average order value increased by 22% due to improved upsell placement in the redesigned cart flow',
    ],
    features: [
      'Full app UI redesign covering 28 screens',
      'Onboarding flow with personalization prompts',
      'Smart restaurant discovery with cuisine and rating filters',
      'Streamlined 3-step checkout with saved addresses',
      'Real-time order tracking screen with animated status',
      'Review and rating system UI',
      'Complete design system with color, typography, and components',
    ],
    year: '2025',
  },
  {
    id: 'fitness-tracking-mobile-app',
    slug: 'fitness-tracking-mobile-app',
    category: 'mobile',
    categoryLabel: 'Mobile Application Development — Health & Fitness',
    title: 'Fitness Tracking Mobile App (iOS & Android)',
    shortDescription:
      'Cross-platform mobile application integration with nutrition databases, progress analytics, and on-device AI.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=500&fit=crop',
    technologies: [
      'React Native',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Firebase (notifications)',
      'RapidAPI (nutrition database)',
      'TensorFlow Lite (on-device AI)',
      'Figma',
    ],
    problemStatement:
      'A personal fitness brand wanted to extend their coaching business into a digital product. They needed a mobile app where users could track workouts, log meals, follow structured fitness programs, and receive AI-based progress recommendations.',
    solutionDescription:
      'MaVionix developed a cross-platform fitness tracking app using React Native, with a Node.js backend. The app includes a workout logger, a nutrition diary with a food database API, a structured program library, push notifications for reminders, and a personalized AI recommendation engine.',
    outcomes: [
      'The app achieved 1,800 downloads in the first 30 days post-launch',
      'Monthly active users reached 1,200 by the 3rd month',
      'The fitness brand reported a 35% increase in their premium coaching subscriptions attributed to the app\'s upsell flow',
    ],
    features: [
      'Workout logging with exercise library and sets/reps/weight tracking',
      'Nutrition diary with calorie and macro tracking',
      'Structured fitness program library with weekly plans',
      'AI-based progress analysis and weekly recommendations',
      'Progress charts and body measurement tracker',
      'Push notifications for workout reminders',
      'Social sharing of milestones',
    ],
    year: '2025',
  },
  {
    id: 'grocery-delivery-app',
    slug: 'grocery-delivery-app',
    category: 'mobile',
    categoryLabel: 'Mobile Application Development — E-Commerce / Delivery',
    title: 'Grocery Delivery App for Local Supermarket Chain',
    shortDescription:
      'Three-tier software ecosystem integrating customer channels, driver tools, and inventory dashboard controls.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop',
    technologies: [
      'Flutter (iOS & Android)',
      'Node.js',
      'MongoDB',
      'Google Maps API',
      'Stripe (payments)',
      'Firebase',
      'Socket.io (real-time tracking)',
    ],
    problemStatement:
      'A regional supermarket chain was losing customers to large online grocery platforms. They needed their own branded mobile app to offer home delivery and click-and-collect services, with real-time inventory and delivery tracking.',
    solutionDescription:
      'MaVionix built a full grocery delivery app ecosystem — a customer-facing app, a delivery partner app, and an admin dashboard. The customer app features product browsing, smart search, slot-based delivery scheduling, and real-time order tracking.',
    outcomes: [
      'The supermarket recorded 800 app orders in the first 2 weeks',
      'Delivery capacity reached 95% utilization by week 4',
      'Customer retention through the app was 68% higher than in-store visits',
      'The chain expanded to 3 additional city zones within 3 months of the app launch',
    ],
    features: [
      'Product catalog with category browsing and smart search',
      'Real-time inventory sync with store management system',
      'Slot-based delivery scheduling with calendar UI',
      'Live order tracking with delivery partner GPS',
      'Multiple payment options: card, UPI, cash on delivery',
      'Loyalty points system and promotional coupon support',
      'Delivery partner app with route optimization',
    ],
    year: '2025',
  },
  {
    id: 'digital-marketing-campaign-edtech',
    slug: 'digital-marketing-campaign-edtech',
    category: 'marketing',
    categoryLabel: 'Digital Marketing — Multi-Channel Campaign',
    title: '360-Degree Digital Marketing Campaign for EdTech Brand',
    shortDescription:
      'Integrated acquisition network linking targeted paid media, content creation, and lead nurturing pipelines.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    technologies: [
      'Google Ads',
      'Meta Ads Manager',
      'LinkedIn Campaign Manager',
      'HubSpot (email automation)',
      'SEMrush (SEO)',
      'Canva Pro (creatives)',
      'Google Analytics 4',
    ],
    problemStatement:
      'An EdTech startup offering online professional certification courses struggled with low enrollment despite having quality content. Their social media presence was weak, paid ads were underperforming, and organic traffic to their website was negligible.',
    solutionDescription:
      'MaVionix executed a 90-day multi-channel digital marketing campaign encompassing Google Ads, Meta Ads, LinkedIn content marketing, SEO-driven blog content, and email marketing automation — all targeting working professionals aged 24–40.',
    outcomes: [
      'Course enrollments increased by 240% over the 90-day period',
      'Cost per lead dropped from Rs. 480 to Rs. 190 through ongoing optimization',
      'Organic website traffic grew by 85% from the SEO content strategy',
      'Email open rate averaged 32%, with a 7.8% click-to-enrollment rate',
    ],
    features: [
      'Audience research and buyer persona development',
      'Google Search and Display ad campaigns with A/B tested creatives',
      'Meta (Instagram + Facebook) retargeting campaigns',
      'LinkedIn thought leadership content series (12 posts)',
      '8 SEO-optimized blog articles targeting high-intent keywords',
      '6-email drip campaign for lead nurturing',
      'Monthly performance reporting with optimization recommendations',
    ],
    year: '2025',
  },
  {
    id: 'social-media-management-beauty',
    slug: 'social-media-management-beauty',
    category: 'marketing',
    categoryLabel: 'Digital Marketing — Social Media Management',
    title: 'Social Media Management for D2C Beauty Brand',
    shortDescription:
      'Comprehensive grid optimization strategy managing branded multi-media channels and influencer relations.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop',
    technologies: [
      'Meta Business Suite',
      'Canva Pro',
      'Adobe Photoshop',
      'Hootsuite (scheduling)',
      'Google Analytics',
      'Meta Ads Manager',
    ],
    problemStatement:
      'A direct-to-consumer beauty brand had built a product line but had no structured social media strategy. Their Instagram account had 800 followers and inconsistent posting. They needed a professional social media presence to build community and drive product sales.',
    solutionDescription:
      'MaVionix took over full social media management for Instagram, Facebook, and Pinterest — developing a content calendar, creating branded visual content, writing copy, running engagement campaigns, and managing influencer micro-partnerships to grow the audience.',
    outcomes: [
      'Instagram followers grew from 800 to 8,400 in 4 months',
      'Average post reach increased by 620%',
      'Website traffic from Instagram grew by 310%',
      'Two influencer collaborations generated Rs. 1.8 lakh in direct product sales within 3 weeks of the campaigns going live',
    ],
    features: [
      '30-day content calendar with daily posts and stories',
      'Branded visual content creation for all posts',
      'Hashtag strategy and audience engagement management',
      '3 Instagram Reels produced per month',
      'Micro-influencer outreach and collaboration coordination',
      'Monthly paid boost campaigns for top-performing posts',
      'Monthly analytics report with growth metrics',
    ],
    year: '2025',
  },
  {
    id: 'technical-seo-legal-firm',
    slug: 'technical-seo-legal-firm',
    category: 'seo',
    categoryLabel: 'SEO Services — Technical SEO & Content',
    title: 'Technical SEO Overhaul for Legal Services Firm',
    shortDescription:
      'Deep system engineering audit correcting performance parameters, structural data schemas, and local maps footprints.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop',
    technologies: [
      'Google Search Console',
      'SEMrush',
      'Screaming Frog',
      'Ahrefs',
      'Yoast SEO',
      'Google My Business',
      'Schema.org markup',
    ],
    problemStatement:
      'A law firm with 15 years of experience had virtually no organic search visibility. Their website had critical technical issues — slow load times, duplicate content, missing meta tags, and no structured data — resulting in zero first-page rankings for their target keywords.',
    solutionDescription:
      'MaVionix performed a comprehensive technical SEO audit and implementation — fixing all on-page and technical issues, creating a structured keyword strategy, developing 10 long-form SEO articles, implementing schema markup, and building a local citation network for the firm\'s offices.',
    outcomes: [
      'Organic search traffic increased by 310% within 6 months',
      'The firm achieved 14 first-page Google rankings for competitive legal keywords',
      'Google My Business profile views grew by 450%',
      'Client inquiry calls from organic search doubled within the first 4 months of the SEO engagement',
    ],
    features: [
      'Full technical SEO audit with 60+ issue identification',
      'Site speed optimization (Core Web Vitals compliance)',
      'Meta title, description, and header tag optimization for 40 pages',
      'Schema markup for legal services, FAQs, and breadcrumbs',
      '10 long-form blog articles (1,500–2,500 words each)',
      'Local SEO setup across 3 city offices via Google My Business',
      'Monthly backlink building and competitor analysis',
    ],
    year: '2025',
  },
  {
    id: 'local-seo-dental-clinic',
    slug: 'local-seo-dental-clinic',
    category: 'seo',
    categoryLabel: 'SEO Services — Local SEO',
    title: 'Local SEO Campaign for Multi-Location Dental Clinic',
    shortDescription:
      'Multi-territory search engineering configuring localized index endpoints and continuous customer review systems.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop',
    technologies: [
      'Google My Business',
      'BrightLocal',
      'SEMrush',
      'Yoast SEO',
      'Ahrefs',
      'Google Analytics 4',
      'WordPress',
    ],
    problemStatement:
      'A dental clinic chain with 4 locations was not appearing in local Google search results or Google Maps for relevant searches like \'dentist near me\' or \'teeth whitening in [city]\'. Walk-in patients from organic search were minimal.',
    solutionDescription:
      'MaVionix implemented a targeted local SEO strategy for all 4 clinic locations — including Google My Business optimization, location-specific landing pages, local citation building, review generation campaigns, and localized content creation.',
    outcomes: [
      'All 4 locations entered the Google Maps 3-Pack for their primary keywords within 3 months',
      'Organic walk-in appointments increased by 58% across all locations',
      'Patient reviews across Google grew from 42 to 210 with an average rating of 4.7 stars',
      'Local search impressions grew by 780%',
    ],
    features: [
      'Google My Business optimization for 4 locations',
      '4 location-specific SEO landing pages',
      'Local citation building across 40+ directories',
      'Patient review generation email and SMS campaign',
      'NAP (Name, Address, Phone) consistency audit and correction',
      '8 locally targeted blog articles',
      'Monthly local ranking tracking and reporting',
    ],
    year: '2025',
  },
  {
    id: 'penetration-testing-fintech-app',
    slug: 'penetration-testing-fintech-app',
    category: 'cybersecurity',
    categoryLabel: 'Cybersecurity — Penetration Testing',
    title: 'Penetration Testing & Security Audit for FinTech App',
    shortDescription:
      'Vulnerability scanning, infrastructure auditing, and API exploit detection framework aligned with compliance guidelines.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    technologies: [
      'Kali Linux',
      'Burp Suite Pro',
      'Metasploit',
      'Nmap',
      'OWASP ZAP',
      'Nessus',
      'AWS Security Hub',
      'OWASP Top 10 framework',
    ],
    problemStatement:
      'A fintech company preparing for a compliance audit (PCI-DSS) needed a thorough security assessment of their payment processing web application. Previous in-house tests had missed critical vulnerabilities, and the company could not afford a data breach given the sensitive financial data involved.',
    solutionDescription:
      'MaVionix conducted a black-box and grey-box penetration test of the fintech application, followed by a full security audit of their cloud infrastructure. A detailed vulnerability report was delivered with risk-rated findings, proof-of-concept exploits, and a remediation roadmap.',
    outcomes: [
      'MaVionix identified 3 critical and 7 high-severity vulnerabilities including an SQL injection flaw and an insecure direct object reference exposing user financial data',
      'All issues were remediated prior to the PCI-DSS audit, which the company passed successfully',
      'The engagement prevented a potentially catastrophic data breach',
    ],
    features: [
      'Black-box and grey-box web application penetration test',
      'OWASP Top 10 vulnerability assessment',
      'API security testing and authentication bypass attempts',
      'Cloud infrastructure security audit (AWS)',
      'Detailed vulnerability report with CVSS risk ratings',
      'Proof-of-concept documentation for all critical findings',
      'Remediation roadmap with developer guidance',
    ],
    year: '2025',
  },
  {
    id: 'cybersecurity-awareness-training',
    slug: 'cybersecurity-awareness-training',
    category: 'cybersecurity',
    categoryLabel: 'Cybersecurity — Security Training & Policy',
    title: 'Cybersecurity Awareness Training for SME',
    shortDescription:
      'Enterprise security alignment combining interactive threat response drills and structural infrastructure hardening criteria.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
    technologies: [
      'KnowBe4 (phishing simulation)',
      'Microsoft 365 Security Center',
      'Google Workspace Admin',
      'PowerPoint',
      'Custom LMS portal',
    ],
    problemStatement:
      'A mid-sized manufacturing company experienced a phishing attack that compromised 3 employee email accounts. The root cause was a complete lack of cybersecurity awareness among staff. The company had no security policies, no training program, and no incident response plan.',
    solutionDescription:
      'MaVionix designed and delivered a comprehensive cybersecurity awareness program — including staff training workshops, simulated phishing campaigns, an incident response plan, and a set of security policies tailored to the company\'s operational context.',
    outcomes: [
      'Phishing simulation success rate (employees who clicked) dropped from 67% to 8% within 2 months of training',
      'The company successfully implemented MFA across all 80 employee accounts',
      'Zero security incidents were reported in the 6 months following the engagement',
      'Staff security awareness score improved from 31% to 87% on post-training assessment',
    ],
    features: [
      '4-hour interactive cybersecurity awareness workshop for all staff',
      'Simulated phishing campaign with 3 test scenarios',
      'Customized employee security handbook (digital and print)',
      'Password policy and MFA implementation guidance',
      'Incident response plan and escalation flowchart',
      'Monthly phishing simulation follow-up campaigns',
      'CISO advisory session for management',
    ],
    year: '2025',
  },
  {
    id: 'bi-dashboard-retail-chain',
    slug: 'bi-dashboard-retail-chain',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics & AI Solutions — Business Intelligence',
    title: 'Business Intelligence Dashboard for Retail Chain',
    shortDescription:
      'Centralized automated data warehouse processing disjointed legacy operational logs into synchronized BI dashboards.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
    technologies: [
      'Python (ETL pipelines)',
      'PostgreSQL',
      'Microsoft Power BI',
      'Azure Data Factory',
      'Power Query',
      'DAX',
      'REST APIs (POS integration)',
    ],
    problemStatement:
      'A retail chain with 12 stores was making inventory and pricing decisions based on intuition rather than data. They had years of sales data in disparate spreadsheets and a legacy POS system but no centralized reporting or analytical capability. Management had no visibility into which products, stores, or promotions were driving profitability.',
    solutionDescription:
      'MaVionix built a centralized business intelligence platform — integrating data from the POS system, inventory management software, and e-commerce store into a single data warehouse, then building interactive Power BI dashboards for sales, inventory, and marketing performance.',
    outcomes: [
      'Management identified Rs. 24 lakh worth of dead stock within the first month, enabling targeted clearance campaigns',
      'Inventory reorder accuracy improved by 43%, reducing both stockouts and overstock situations',
      'The top 3 underperforming stores were identified and operationally restructured, improving their combined revenue by 29% within one quarter',
    ],
    features: [
      'Automated ETL pipeline from 3 data sources to central data warehouse',
      'Real-time sales dashboard by store, product category, and time period',
      'Inventory turnover and dead stock identification dashboard',
      'Marketing campaign ROI tracking dashboard',
      'Customer purchase pattern analysis',
      'Automated weekly PDF report generation for management',
      'Role-based access control (store managers vs executives)',
    ],
    year: '2025',
  },
  {
    id: 'predictive-analytics-hr-workforce',
    slug: 'predictive-analytics-hr-workforce',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics & AI Solutions — Predictive AI',
    title: 'Predictive Analytics Model for HR & Workforce Planning',
    shortDescription:
      'Explainable machine learning modeling suite visualizing personnel attrition trends via interactive deployment panels.',
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=500&fit=crop',
    technologies: [
      'Python (Scikit-learn, Pandas, NumPy)',
      'XGBoost',
      'Streamlit',
      'PostgreSQL',
      'Power BI',
      'Azure ML',
      'SHAP (explainability)',
    ],
    problemStatement:
      'A large BPO company was experiencing high employee attrition (28% annually), costing significant recruitment and training expenses. HR had no way to identify at-risk employees before they resigned, and workforce planning was reactive rather than proactive.',
    solutionDescription:
      'MaVionix developed a machine learning-based employee attrition prediction model trained on 3 years of HR data. The model identifies at-risk employees with a predictive confidence score, enabling HR to intervene proactively. A Streamlit dashboard was built for HR teams to access predictions and trends.',
    outcomes: [
      'Annual employee attrition dropped from 28% to 16% within 12 months of model deployment',
      'HR intervention success rate for at-risk employees was 62%',
      'The company estimated savings of Rs. 1.2 crore in recruitment and training costs in the first year',
      'The model achieved an AUC-ROC score of 0.91 on validation data',
    ],
    features: [
      'Data cleaning and feature engineering from 40+ HR data variables',
      'Attrition prediction model with 87% accuracy',
      'Explainable AI outputs via SHAP values (feature importance per employee)',
      'Real-time HR dashboard with at-risk employee flagging',
      'Departmental attrition trend analysis',
      'Recommendations engine for retention interventions',
      'Monthly model retraining pipeline',
    ],
    year: '2025',
  },
];

export const IMPACT_METRICS = [
  { id: 'projects', value: 150, suffix: '+', label: 'Projects Delivered' },
  { id: 'clients', value: 90, suffix: '+', label: 'Clients Served' },
  { id: 'industries', value: 15, suffix: '+', label: 'Industries Covered' },
  { id: 'uiux', value: 50, suffix: '+', label: 'UI/UX Projects Completed' },
  { id: 'ai', value: 25, suffix: '+', label: 'AI Solutions Built' },
  { id: 'mobile', value: 30, suffix: '+', label: 'Mobile Apps Launched' },
  { id: 'delivery', value: 100, suffix: '%', label: 'On-Time Delivery Rate' },
  {
    id: 'satisfaction',
    value: 4.9,
    suffix: '/5',
    label: 'Client Satisfaction Score',
    decimals: 1,
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 'rajiv-pinnacle',
    quote:
      'Working with MaVionix was a game-changer for our business. They built us a corporate website that truly reflects our brand. Within 6 weeks of going live, we had new clients reaching out directly through the site — something we had never experienced before.',
    name: 'Rajiv Sharma',
    role: 'Managing Director',
    company: 'Pinnacle Consulting Group',
    rating: 5,
    projectCategory: 'corporate',
  },
  {
    id: 'priya-bloom',
    quote:
      'We needed a full e-commerce store from scratch in under 3 weeks for our launch. MaVionix delivered on time, with a design our customers absolutely love. The cart and checkout flow is smooth, and we started getting orders on launch day itself.',
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'Bloom Fashion Studio',
    rating: 5,
    projectCategory: 'ecommerce',
  },
  {
    id: 'ankit-restaurant',
    quote:
      'Our old website was just embarrassing. MaVionix redesigned it completely — clean, professional, mobile-ready. Our Google rankings improved noticeably, and we get a steady flow of booking inquiries through the site now. Highly recommend their team.',
    name: 'Ankit Verma',
    role: 'Owner',
    company: 'The Grand Spice Restaurant Chain',
    rating: 5,
    projectCategory: 'service-site',
  },
  {
    id: 'neha-shopzen',
    quote:
      'The AI chatbot MaVionix built for us completely transformed our customer support. We went from 4-hour average response times to instant replies. Our team can now focus on complex cases while the bot handles everything routine. Outstanding work.',
    name: 'Neha Kapoor',
    role: 'Head of Operations',
    company: 'ShopZen E-Commerce',
    rating: 5,
    projectCategory: 'chatbot',
  },
  {
    id: 'arjun-quickbite',
    quote:
      "MaVionix redesigned our mobile app UI and the results speak for themselves. Our App Store rating went from 3.2 to 4.5 stars in 2 months. Users love the new ordering flow and we've seen a clear uplift in order values. Very professional and co-operative team.",
    name: 'Arjun Singh',
    role: 'Co-Founder',
    company: 'QuickBite Food Delivery',
    rating: 5,
    projectCategory: 'uiux',
  },
  {
    id: 'vikram-finedge',
    quote:
      'The penetration testing report MaVionix delivered was incredibly thorough. They found vulnerabilities our internal team had completely missed. Thanks to their work, we passed our PCI-DSS audit without a single finding. A genuinely expert cybersecurity team.',
    name: 'Vikram Patel',
    role: 'CTO',
    company: 'FinEdge Technologies',
    rating: 5,
    projectCategory: 'cybersecurity',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'expertise',
    number: '01',
    title: 'Strong Expertise Across Service Domains',
    description:
      'MaVionix brings deep expertise across website development, mobile application development, AI and chatbot solutions, graphic design, digital marketing, SEO, and cybersecurity.',
    purpose:
      'To assure clients that MaVionix is a single-partner agency capable of delivering end-to-end digital solutions without fragmented vendor management.',
  },
  {
    id: 'uiux',
    number: '02',
    title: 'Modern UI/UX Implementation',
    description:
      'MaVionix integrates design thinking into every project. Our UI/UX process ensures that websites, apps, and digital products are not just visually appealing but also intuitive, accessible, and conversion-focused.',
    purpose:
      'To deliver digital products that users enjoy interacting with, resulting in better retention, higher conversion rates, and stronger brand perception.',
  },
  {
    id: 'performance',
    number: '03',
    title: 'Fast and Scalable Web Solutions',
    description:
      'We build with performance in mind. MaVionix websites and apps are optimized for speed using lazy loading, CDN delivery, code splitting, and asset compression.',
    purpose:
      'To ensure fast load times that benefit both users and search engine rankings, and infrastructure that scales with client business growth.',
  },
  {
    id: 'seo',
    number: '04',
    title: 'SEO-Optimized Development',
    description:
      'Every website MaVionix builds is developed with SEO best practices embedded from the ground up — including semantic HTML, optimized meta tags, schema markup, and Core Web Vitals compliance.',
    purpose:
      'To ensure that client websites gain maximum organic search visibility from day one of launch, reducing dependency on paid advertising.',
  },
  {
    id: 'delivery',
    number: '05',
    title: 'Client-Focused Delivery',
    description:
      'MaVionix follows an agile delivery model with regular milestones, transparent communication, and a dedicated project manager for each client engagement.',
    purpose:
      'To deliver projects on time, within scope, and with full post-launch support that gives clients confidence in MaVionix as a long-term technology partner.',
  },
];

export const IMPACT_METRICS_FOOTNOTE =
  'All metrics are cumulative across MaVionix engagements and verified through project delivery records.';

/** Resolves a project's blueprint filter group for `data-category` attributes */
export function getProjectFilterGroup(category) {
  if (WEBSITE_PROJECT_CATEGORIES.includes(category)) return 'websites';
  return category;
}

export function getProjectsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return PORTFOLIO_PROJECTS;
  if (categoryId === 'websites') {
    return PORTFOLIO_PROJECTS.filter((p) => WEBSITE_PROJECT_CATEGORIES.includes(p.category));
  }
  return PORTFOLIO_PROJECTS.filter((p) => p.category === categoryId);
}

export function getProjectBySlug(slug) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug) ?? null;
}
