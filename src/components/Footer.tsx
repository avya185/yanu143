import React from 'react';
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, ShieldCheck, BadgeCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: string) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (viewId: string) => {
    onViewChange(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f1ecfa] text-[#8c829f] pt-20 pb-10 border-t border-[#ebdff7] overflow-hidden" aria-label="MaVionix Footer">
      {/* Decorative subtle background waves */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6d28d9_1.5px,transparent_1.5px)] [background-size:20px_20px] z-0"></div>

      <div className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Call-To-Action Banner: Centered premium cards with elegant backdrop accents */}
        <div className="relative bg-white , border border-[#ebdff7] rounded-lg p-8 sm:p-10 text-center mb-16 shadow-xl max-w-4xl mx-auto overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-purple-500 to-indigo-600"></div>

          <div className="reveal-up relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 dark:bg-[#6d28d9] text-black text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
              <ShieldCheck size={12} className="text-black" /> Secure Business Consulting
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#160430] mb-3 tracking-tight">
              Ready to Turn Your Ideas Into High-Performance Software?
            </h3>
            <p className="text-[#8c829f] text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Submit your objectives, preferred timeline, and expected budget. Our senior solution architects will formulate a customized milestone breakdown within 24 business hours.
            </p>
            {/* changes3565 */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-bold shadow transition-all duration-300 transform hover:-translate-y-[1px] bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 shadow-sm uppercase tracking-wider cursor-pointer"
              aria-label="Direct form project inquiry"
            >
              Consult Our Architects
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Master Columns */}
        <div className="reveal-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-5">
            <button onClick={() => handleLinkClick('home')} className="flex items-center gap-3 focus:outline-none">
              <img
                src="/mavionix-logo.png"
                alt="MaVionix logo"
                className="h-14 w-14 object-contain object-center"
              />
              <span className="text-2xl font-black tracking-tight text-[#160430] dark:text-white">
                MaVionix
              </span>
            </button>
            <p className="text-xs sm:text-sm text-[#8c829f] leading-relaxed max-w-xs font-medium">
              Enterprise-grade web systems, conversational WhatsApp support funnels, robust cloud logic, and custom administrative interfaces. Driven by accuracy and security.
            </p>

            {/* Government verification badges */}
            <div className="pt-3 border-t border-[#ebdff7] space-y-2">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Certifications</div>
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[black] dark:text-[white]">
                  <BadgeCheck size={14} className="text-emerald-500  shrink-0" />
                  Govt. of India MSME Registered
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                  DPIIT Startup India Applied
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-purple-600">Quick Navigation</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="text-[#8c829f] hover:text-white font-medium transition-colors flex items-center gap-1">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('portfolio')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="text-[#6d28d9] font-extrabold hover:text-purple-800 transition-colors flex items-center gap-1">
                  Contact
                  <ExternalLink size={12} />
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-purple-600">Company & Resources</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('about')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('careers')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('blog')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  FAQ
                </button>
              </li>
               <li>
                <button onClick={() => handleLinkClick('achievements')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  Achievements
                </button>
              </li> <li>
                <button onClick={() => handleLinkClick('whitepaper')} className="text-[#8c829f] hover:text-white font-medium transition-colors">
                  White Paper
                </button>
              </li>
              
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-purple-600">Core Capabilities</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-[#8c829f] hover:text-white font-medium transition-colors text-left">
                  Full-Scale Headless WordPress
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-[#8c829f] hover:text-white font-medium transition-colors text-left">
                  Shopify Store Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-[#8c829f] hover:text-white font-medium transition-colors text-left">
                  WhatsApp API Automations
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-[#8c829f] hover:text-white font-medium transition-colors text-left">
                  Gemini-Engineered RAG Bots
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="text-[#8c829f] hover:text-white font-medium transition-colors text-left">
                  n8n & Make Workflow Sequences
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700 mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-purple-600">Contact Gateway</h4>
            <div className="flex items-start gap-3">
              <Globe size={16} className="text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase">Website</div>
                <a href="https://www.mavionix.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-[#8c829f] font-bold">
                  www.mavionix.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase">Direct Email</div>
                <a href="mailto:mavionix360@gmail.com" className="hover:text-white transition-colors text-[#8c829f] font-bold">
                  mavionix360@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase">Contact No.</div>
                <a href="tel:+917818037404" className="hover:text-white transition-colors text-[#8c829f] font-bold">
                  +91 70651-32579
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase">Registered Locations</div>
                <span className="text-[#8c829f] font-medium text-xs block">HQ: A-1/86, Sector-17,<br></br> Rohini, Delhi - 110089</span>
                <span className="text-[#8c829f] font-medium text-xs block">Office: Modinagar,<br></br> Ghaziabad - 201204</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Social Links */}
        <div className="border-t border-[#ebdff7] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61579205461137"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#ebdff7] text-purple-650 hover:text-white hover:bg-[#6d28d9] hover:border-transparent transition-all hover:scale-105"
              aria-label="Visit MaVionix Facebook channel"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/mavionix.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#ebdff7] text-purple-650 hover:text-white hover:bg-[#6d28d9] hover:border-transparent transition-all hover:scale-105"
              aria-label="Visit MaVionix Instagram feed"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/mavionix-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#ebdff7] text-purple-650 hover:text-white hover:bg-[#6d28d9] hover:border-transparent transition-all hover:scale-105"
              aria-label="Visit MaVionix LinkedIn corporate portal"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://x.com/mavionix"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#ebdff7] text-purple-650 hover:text-white hover:bg-[#6d28d9] hover:border-transparent transition-all hover:scale-105"
              aria-label="Map MaVionix social Twitter page"
            >
              <Twitter size={16} />
            </a>
          </div>

          <div className="text-xs text-slate-500 font-medium text-center sm:text-right">
            &copy; {currentYear} MaVionix. All Rights Reserved. Govt. of India Registered Co.
          </div>
        </div>

        {/* Essential operational parameters */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-[#ebdff7] pt-6 text-xs text-slate-400 font-medium">
          <button onClick={() => handleLinkClick('terms-of-engagement')} className="hover:text-[#6d28d9] transition-colors">Terms of Engagement</button>
          <span>&middot;</span>
         <button onClick={() => handleLinkClick('terms-and-conditions')} className="hover:text-[#6d28d9] transition-colors">Terms And Conditions</button>
          <span>&middot;</span>
          <button onClick={() => handleLinkClick('privacy-principles')} className="hover:text-[#6d28d9] transition-colors">Privacy Principles</button>
          <span>&middot;</span>
          
          <button onClick={() => handleLinkClick('professional-disclaimer')} className="hover:text-[#6d28d9] transition-colors">Professional Disclaimer</button>
        </div>
      </div>
    </footer>
  );
}
