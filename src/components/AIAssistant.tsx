import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  Copy,
  ExternalLink,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  User,
  X,
  Zap,
} from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ uri: string; title: string }>;
  intent?: string;
  nextActions?: Array<{ label: string; prompt?: string; href?: string }>;
  isFallback?: boolean;
}

type AssistantMode = 'sales' | 'technical' | 'support';

const MODE_LABELS: Record<AssistantMode, string> = {
  sales: 'Sales',
  technical: 'Tech',
  support: 'Support',
};

const QUICK_PROMPTS: Record<AssistantMode, string[]> = {
  sales: [
    'Suggest the right package for my business website',
    'Estimate pricing for a lead generation website',
    'Create a project brief checklist',
    'How do I start with MaVionix?',
  ],
  technical: [
    'Recommend a stack for a custom web app',
    'Can you build a WhatsApp bot with CRM sync?',
    'Explain your AI chatbot architecture',
    'How do you prevent AI hallucinations?',
  ],
  support: [
    'What are your office locations?',
    'Are you Govt registered?',
    'How long do projects take?',
    'Do you provide support after launch?',
  ],
};

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    'Hello! I am the MaVionix AI Assistant. Choose a mode or ask directly about websites, AI chatbots, WhatsApp bots, automations, pricing, timelines, support, or office locations.',
  intent: 'welcome',
  nextActions: [
    { label: 'Get Quote', prompt: 'Help me choose the right package and estimate budget.' },
    { label: 'WhatsApp Bot', prompt: 'Can you build a WhatsApp bot for lead capture and CRM sync?' },
    { label: 'Talk Now', href: 'https://wa.me/917818037404' },
  ],
};

const formatContent = (content: string) => {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const renderMessageText = (content: string) =>
  content.split('\n').map((line, index, lines) => (
    <React.Fragment key={`${line}-${index}`}>
      {formatContent(line)}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));

const BOT_AVATAR_SRC = '/mavionix-robo-face.png';
const GREETING_TEXT = "Hi! 👋 I'm the MaVionix AI Assistant. Need help with services, pricing, or timelines?";
const GREETING_DISMISSED_KEY = 'mavionix-ai-greeting-dismissed';
const GREETING_DELAY_MS = 2000;
const GREETING_AUTO_HIDE_MS = 12000;

const inferLeadReadiness = (messages: ChatMessage[]) => {
  const text = messages.map((msg) => msg.content).join(' ').toLowerCase();
  let score = 0;
  if (/website|web app|chatbot|bot|automation|design|seo|shopify|wordpress/.test(text)) score += 1;
  if (/budget|₹|inr|rs\.?|rupee|cost|price/.test(text)) score += 1;
  if (/week|month|day|timeline|launch|urgent|asap/.test(text)) score += 1;
  if (/\b[\w.-]+@[\w.-]+\.\w{2,}\b/.test(text) || /\b\d{10}\b/.test(text)) score += 1;
  return Math.min(score, 4);
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('mavionix-ai-chat');
<<<<<<< HEAD
=======
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch {
          window.localStorage.removeItem('mavionix-ai-chat');
        }
      }
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
    }
    return [INITIAL_MESSAGE];
  });
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<AssistantMode>('sales');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);
  const widgetRootRef = useRef<HTMLDivElement>(null);
  const leadReadiness = inferLeadReadiness(messages);

  // Close the chat panel whenever the user clicks or taps anywhere outside the widget.
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (widgetRootRef.current && !widgetRootRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('touchstart', handleOutsideInteraction);
    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('touchstart', handleOutsideInteraction);
    };
  }, [isOpen]);

  // Close on Escape for keyboard users too.
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Auto-popup greeting bubble with AI avatar, shown once per session
  useEffect(() => {
    if (typeof window === 'undefined' || isOpen) return;
    const alreadyDismissed = window.sessionStorage.getItem(GREETING_DISMISSED_KEY);
    if (alreadyDismissed) return;

    const showTimer = window.setTimeout(() => setShowGreeting(true), GREETING_DELAY_MS);
    return () => window.clearTimeout(showTimer);
  }, [isOpen]);

  useEffect(() => {
    if (!showGreeting) return;
    const hideTimer = window.setTimeout(() => setShowGreeting(false), GREETING_AUTO_HIDE_MS);
    return () => window.clearTimeout(hideTimer);
  }, [showGreeting]);

  const dismissGreeting = () => {
    setShowGreeting(false);
    window.sessionStorage.setItem(GREETING_DISMISSED_KEY, '1');
  };

  const openFromGreeting = () => {
    dismissGreeting();
    setIsOpen(true);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    window.localStorage.setItem('mavionix-ai-chat', JSON.stringify(messages.slice(-24)));
  }, [messages]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    setInputText('');

    const updatedMessages: ChatMessage[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 14000);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          mode,
          pageContext: window.location.pathname,
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      window.clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            data.text ||
<<<<<<< HEAD
            "I apologize, but I couldn't process that query correctly. Please contact us directly at mavionix360@gmail.com!",
=======
            "I apologize, but I couldn't process that query correctly. Please contact us directly at contactmavionix@gmail.com!",
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          sources: data.sources || [],
          intent: data.intent,
          nextActions: data.nextActions || [],
          isFallback: Boolean(data.isFallback),
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
<<<<<<< HEAD
            'I had trouble reaching the MaVionix operations hub. You can still send your brief on WhatsApp at +91 78180 37404 or email mavionix360@gmail.com.',
          intent: 'handoff',
          nextActions: [
            { label: 'Open WhatsApp', href: 'https://wa.me/917818037404' },
            { label: 'Email Team', href: 'mailto:mavionix360@gmail.com' },
=======
            'I had trouble reaching the MaVionix operations hub. You can still send your brief on WhatsApp at +91 78180 37404 or email contactmavionix@gmail.com.',
          intent: 'handoff',
          nextActions: [
            { label: 'Open WhatsApp', href: 'https://wa.me/917818037404' },
            { label: 'Email Team', href: 'mailto:contactmavionix@gmail.com' },
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          ],
          isFallback: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    window.localStorage.removeItem('mavionix-ai-chat');
    setMessages([
      {
<<<<<<< HEAD
        ...INITIAL_MESSAGE, },
=======
        ...INITIAL_MESSAGE,
        content:
          'History cleared. Ask me anything about deliverables, MSME status, pricing, timelines, office locations, or technical architecture.',
      },
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
    ]);
  };

  const handleCopy = async (content: string, index: number) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      window.setTimeout(() => setCopiedIndex(null), 1200);
    } catch {
      setCopiedIndex(null);
    }
  };

  return (
    <div id="mavionix-ai-assistant" ref={widgetRootRef} className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="ai-widget-greeting absolute bottom-16 right-0 w-[260px] max-w-[85vw] rounded-2xl border shadow-xl p-3 flex items-start gap-2.5 cursor-pointer"
            onClick={openFromGreeting}
            role="button"
            aria-label="Open chat with MaVionix AI Assistant"
          >
            <img
              src={BOT_AVATAR_SRC}
              alt="MaVionix AI Assistant"
              className="w-9 h-9 rounded-full object-cover shrink-0 border-2 border-purple-400/60"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black uppercase tracking-wider ai-widget-title mb-0.5">MaVi</p>
              <p className="text-xs leading-snug ai-widget-greeting-text">{GREETING_TEXT}</p>
            </div>
            <button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                dismissGreeting();
              }}
              className="ai-widget-icon-btn shrink-0 p-0.5 -mt-1 -mr-1 focus:outline-none transition-colors"
              aria-label="Dismiss greeting"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="ai-widget-panel  absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-[430px] h-[610px] border rounded-sm shadow-2xl flex flex-col overflow-hidden max-w-[95vw]"
          >
            <div className="ai-widget-header p-4 border-b">
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <img
                      src={BOT_AVATAR_SRC}
                      alt="MaVionix AI Assistant"
                      className="w-9 h-9 rounded-sm object-cover shadow border border-purple-400/40"
                    />
                    <span className="ai-widget-status-dot absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 opacity-90" />
                  </div>
                  <div>
                    <h4 className="ai-widget-title text-xs font-black uppercase tracking-wider">MaVi</h4>
                    <p className="ai-widget-subtitle text-[9px] font-bold uppercase tracking-widest leading-none mt-0.5">
                      Advanced Ops Copilot
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClearHistory}
                    className="ai-widget-icon-btn danger p-1.5 focus:outline-none transition-colors"
                    title="Clear Conversation History"
                    aria-label="Clear chat history"
                  >
                    <Trash2 size={15} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ai-widget-icon-btn p-1.5 focus:outline-none transition-colors"
                    aria-label="Close Chat Assistant"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
<div className="ai-widget-body ai-widget-scroll-hidden flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[88%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  <div
                    className={`w-6 h-6 rounded-sm flex items-center justify-center shrink-0 border ${
                      msg.role === 'user' ? 'ai-widget-avatar-user' : 'ai-widget-avatar-bot'
                    }`}
                  >
                    {msg.role === 'user' ? <User size={13} /> : <Bot size={13} />}
                  </div>
                  <div
                    className={`p-3 rounded-sm text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'ai-widget-bubble-user rounded-tr-none shadow-xs'
                        : 'ai-widget-bubble-bot border rounded-tl-none shadow-xs'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{renderMessageText(msg.content)}</div>

                    {msg.role === 'assistant' && (
<<<<<<< HEAD
                      <div className="mt-2 flex  items-center gap-1.5">
=======
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.content, idx)}
                          className="ai-widget-badge-copy inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-wider transition-colors"
                        >
                          <Copy size={10} />
                          {copiedIndex === idx ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    )}

                    {msg.sources && msg.sources.length > 0 && (
                      <div className="ai-widget-source-label mt-2.5 pt-2 border-t space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest block">
                          Sources & links:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {msg.sources.map((src, sIdx) => (
                            <a
                              key={sIdx}
                              href={src.uri}
                              target="_blank"
                              rel="noreferrer"
                              className="ai-widget-source-link inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold border rounded-sm transition-colors max-w-[130px] truncate"
                              title={src.title}
                            >
                              <span className="truncate">{src.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 mr-auto max-w-[85%]">
                  <div className="ai-widget-avatar-bot w-6 h-6 rounded-sm flex items-center justify-center shrink-0 border">
                    <Bot size={13} />
                  </div>
                  <div className="ai-widget-loading p-3 rounded-sm border text-xs flex items-center gap-2 shadow-xs">
                    <Loader2 size={13} className="animate-spin text-purple-500" />
                    <span>MaVionix is thinking...</span>
                  </div>
                </div>
              )}

              {messages.length === 1 && !isLoading && (
                <div className="pt-2 pb-1 space-y-2">
                  <p className="ai-widget-suggested-label text-[10px] font-bold uppercase tracking-wider">Suggested topics:</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {QUICK_PROMPTS[mode].map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="ai-widget-suggested-btn p-2 border text-left text-[11px] rounded-sm transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <span>{prompt}</span>
                        <ArrowRight size={11} className="text-slate-400 group-hover:text-purple-500 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="ai-widget-input-row p-3 border-t flex gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                placeholder="Ask anything..."
                disabled={isLoading}
                className="ai-widget-input flex-1 h-9 px-3 border rounded-sm text-xs focus:outline-none disabled:opacity-50 shadow-inner transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="ai-widget-send-btn w-9 h-9 rounded-sm flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0 shadow-sm"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onClick={() => {
          if (!isOpen) dismissGreeting();
          setIsOpen(!isOpen);
        }}
        className="ai-widget-fab relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer overflow-hidden transition-all"
        aria-label="Toggle MaVionix AI Assistant"
        title="MaVionix AI Assistant"
      >
        <span className="absolute -inset-1 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/30 transition-all" />

        {isOpen ? (
          <X size={20} className="relative z-10" />
        ) : (
          <>
            <img
              src={BOT_AVATAR_SRC}
              alt="Chat with MaVionix AI"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <Sparkles size={14} className="absolute top-0.5 right-0.5 z-10 text-emerald-300 drop-shadow" />
          </>
        )}
      </motion.button>
    </div>
  );
}
