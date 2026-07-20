import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST } from '../data';
import { ChatMessage, ServiceFaq } from '../types';
import { Search, Bot, User, Trash2, HelpCircle, AlertCircle, RefreshCw, Send } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
import PageHero from './ui/PageHero';
import { Sparkles } from 'lucide-react';
import { cardFadeUp, cardViewport, useCardTransition } from '../utils/animations';

export default function FAQSection() {
  const cardTransition = useCardTransition();
  const { translatePriceText } = useCurrency();
  // FAQ state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [filteredFaqs, setFilteredFaqs] = useState<ServiceFaq[]>(FAQ_LIST);

  // Chatbot state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I am the MaVionix operational AI Chatbot. I can clarify options regarding our website builds, WhatsApp Business bots, process automation pipelines, standard Indian business registrations, pricing packages, or our Rohini Delhi headquarters and Modinagar Ghaziabad office locations. What are you seeking to build today?"
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [errorBanner, setErrorBanner] = useState('');

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Filter FAQs on search query or category click
  useEffect(() => {
    let list = FAQ_LIST;

    if (activeCategory !== 'all') {
      list = list.filter(f => f.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(f =>
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.keywords.some(k => k.toLowerCase().includes(q))
      );
    }

    setFilteredFaqs(list);
    // Only reset the expanded accordion item if the one currently open is no
    // longer part of the filtered results - previously this reset to item 0
    // on every single keystroke, which yanked the accordion open/closed
    // while typing and made the whole list feel jumpy/unstable.
    setExpandedFaqIndex(prevIndex => {
      const stillValid = prevIndex !== null && prevIndex < list.length;
      if (stillValid) return prevIndex;
      return list.length > 0 ? 0 : null;
    });
  }, [searchQuery, activeCategory]);

  // Scroll to bottom of chat list
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim() === '' || isTyping) return;

    const queryText = userInput.trim();
    setUserInput('');
    setErrorBanner('');

    // Append user message
    const updatedMessages: ChatMessage[] = [
      ...chatMessages,
      { role: 'user', content: queryText }
    ];
    setChatMessages(updatedMessages);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`Server returned error status: ${response.status}`);
      }

      const data = await response.json();
      setChatMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: data.text || "No response received. Please write us at mavionix360@gmail.com!",
          sources: data.sources || []
        }
      ]);
    } catch (err: any) {
      console.error("AI Assistant transmission failure:", err);
      setErrorBanner("Unable to transmit prompt. Running in simplified local responsive state.");
      
      // Smart offline local fallback matching keyword parameters
      const lcQuery = queryText.toLowerCase();
      let fallbackText = "I missed that connection. For direct guidance, please WhatsApp our support line at +91 78180 37404 or email mavionix360@gmail.com!";
      
      if (lcQuery.includes("pricing") || lcQuery.includes("cost") || lcQuery.includes("budget") || lcQuery.includes("how much")) {
        fallbackText = "Our pricing maps around INR 4,999 for static landing pages, and customized AI vector chatbots around INR 14,999+. Retainers start at INR 1,999/mo. Submit our Contact Form to download exact scope cards.";
      } else if (lcQuery.includes("services") || lcQuery.includes("offer") || lcQuery.includes("capability")) {
        fallbackText = "We offer rapid Website design (WordPress, React, Vercel), WhatsApp marketing automations, Figma UI screen wireframing, looker dash setups, custom scripts, and search engine technical audits.";
      } else if (lcQuery.includes("timeline") || lcQuery.includes("how long") || lcQuery.includes("weeks")) {
        fallbackText = "Standard site assets are delivered in 1-3 weeks. Custom database apps or comprehensive team workflow scripts take 4-12 weeks based on scheduled checkpoints.";
      } else if (lcQuery.includes("office") || lcQuery.includes("location") || lcQuery.includes("where") || lcQuery.includes("ghaziabad") || lcQuery.includes("modinagar")) {
        fallbackText = "MaVionix has its headquarters in Rohini, Delhi - 110085, and an office in Modinagar, Ghaziabad, Uttar Pradesh - 201204. We serve small business groups remotely across global boundaries.";
      } else if (lcQuery.includes("msme") || lcQuery.includes("dpiit") || lcQuery.includes("registered") || lcQuery.includes("startup")) {
        fallbackText = "We are registered under India's Ministry of MSME, active in National Career Services registries, and under active Department of Startup India review logs.";
      }

      setChatMessages(prev => [
        ...prev,
        { role: 'assistant', content: fallbackText }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setChatMessages([
      {
        role: 'assistant',
        content: "Chat cleared successfully. How can we support your operational automations or website redesign goals today?"
      }
    ]);
    setErrorBanner('');
  };

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'services', label: 'Services Scope' },
    { id: 'timeline', label: 'Timelines' },
    { id: 'pricing', label: 'Pricing Models' },
    { id: 'support', label: 'Support Retainer' },
    { id: 'technical', label: 'Tech Stack' },
  ];

  return (
    <div className="w-full relative pt-3 pb-16 bg-white dark:bg-[#07070f]">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. INTRO SPLASH */}
        <PageHero
        svg={        <Sparkles size={14} className="text-purple-700 dark:text-purple-300" />}
          badge="Interactive Help Center"
          title={
            <>
              Knowledge Base &amp; <span className="text-gradient-royal">AI</span>{' '}
              <span className="text-slate-950 dark:text-white">Assistant</span> and{' '}
              <span className="text-gradient-lead">Support</span>
            </>
          }
          description="Read direct answers regarding our systems, or write parameters to our Gemini-powered operational assistant for instant, grounded answers."
          stats={[
            { value: '24/7', label: 'Knowledge access' },
            { value: 'Instant', label: 'AI guidance' },
            { value: 'Grounded', label: 'Context replies' },
          ]}
          className="border-b-0 pb-0"
        />

        {/* 2. CHATBOT AND FAQ LAYOUT CONTAINER */}
        <div className=" ">

          {/* RIGHT COLUMN: SEARCHABLE FAQ ACCORDION ENGINE (LG: COL-SPAN-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Search inputs and Category filter tags */}
            <div className="space-y-4">
              {/* Keyword text search input */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  placeholder="Query technical stacks, delivery timeline checkmarks..."
                  className="w-full h-11 pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c14] text-slate-900 dark:text-white rounded-sm text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                  aria-label="Search string filter for general agency FAQ catalog"
                />
              </div>

              {/* Categories selector tags */}
              <div className="flex gap-1.5 overflow-x-auto pb-1.5 whitespace-nowrap scrollbar-none">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-sm text-xs font-bold transition-all border ${
                      activeCategory === cat.id
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-500/30'
                        : 'border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Matched questions list card stack */}
            <div className="space-y-3.5">
              {filteredFaqs.length === 0 ? (
                <div className="reveal-right p-8 text-center bg-white dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 rounded-sm">
                  <HelpCircle size={32} className="text-slate-300 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">No matching questions found in registry.</p>
                  <p className="text-xs text-slate-400 mt-1">Try other simple keyword prompts or write to our AI Assistant helper on the left.</p>
                </div>
              ) : (
                filteredFaqs.map((faq, fIdx) => {
                  const isExpanded = expandedFaqIndex === fIdx;
                  return (
                    <motion.div
                      key={faq.q}
                      initial="hidden"
                      whileInView="visible"
                      viewport={cardViewport}
                      variants={cardFadeUp}
                      transition={cardTransition(fIdx)}
                      className={`border border-slate-200/50 dark:border-slate-900 rounded-sm bg-white dark:bg-[#0c0c14] reveal-right overflow-hidden transition-all duration-350 ${
                        isExpanded ? 'shadow-sm border-blue-500/20' : 'hover:border-slate-300 dark:hover:border-slate-800'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedFaqIndex(isExpanded ? null : fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4"
                        aria-expanded={isExpanded}
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                          {faq.q}
                        </span>
                        <div className={`w-5 h-5 flex-shrink-0 rounded-sm border text-[9px] font-bold flex items-center justify-center leading-none ${
                          isExpanded ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border-blue-500/30' : 'text-slate-400 border-slate-200 dark:border-slate-800'
                        }`}>
                          {isExpanded ? '▲' : '▼'}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-350 border-t border-[#f1f5f9] dark:border-slate-900/40 pt-3">
                              <div>{translatePriceText(faq.a)}</div>
                              <div className="mt-3 flex flex-wrap gap-1">
                                {faq.keywords.map(kw => (
                                  <span key={kw} className="px-2 py-0.5 rounded-sm bg-slate-50 dark:bg-slate-950 text-[10px] font-bold text-slate-400 border border-slate-200/40 dark:border-slate-900">
                                    #{kw}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Real-time Customer Support / FAQ Visual Info Banner */}
        <div className="mt-16 p-6 bg-[#fbfbfe] dark:bg-[#0b0b13] border border-slate-200/50 dark:border-slate-900 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <span className="text-[10px] font-black text-purple-600 dark:text-purple-300 uppercase tracking-widest block mb-1">Direct Coordination</span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase font-sans">Didn't find what you were searching for?</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2 max-w-2xl font-medium">
                Our support team is active for registered partners. You can summon technical support, budget recalculation reviews, or draft integration requirements directly on our WhatsApp coordination desk.
              </p>
            </div>
            <div className="md:col-span-4">
              <img
                src={enhanceImageUrl('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', { width: 720, quality: 90 })}
                srcSet={enhancedSrcSet('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', [360, 540, 720, 960], { quality: 90 })}
                sizes="(min-width: 768px) 28vw, 100vw"
                alt="Professional customer success team organizing client support requests"
                className="image-enhanced image-enhanced-photo w-full h-32 object-cover rounded-sm border border-slate-250 dark:border-slate-800 shadow-sm"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
