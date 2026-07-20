export interface ServiceSub {
  label: string;
  short: string;
  long: string;
  deliverables?: string[];
  timeline?: string;
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
  tech?: string[];
  includes?: string[];
  addOns?: string[];
  faq?: Array<{ q: string; a: string }>;
}

export interface ServiceCategory {
  label: string;
  icon: string; // Lucide icon identifier
  descShort: string;
  descLong: string;
  pdf?: string;
  subs: ServiceSub[];
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'typing';
  content: string;
  sources?: Array<{ uri: string; title: string }>;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  reviewDate: string;
  content: string;
  ratingValue: number;
  avatar: string;
}

export interface FutureGoal {
  year: string;
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  status: string;
  badgeType: 'medal' | 'shield' | 'check' | 'award';
}

export interface ServiceFaq {
  q: string;
  a: string;
  category: 'services' | 'timeline' | 'pricing' | 'support' | 'technical';
  keywords: string[];
}
