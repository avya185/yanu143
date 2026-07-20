import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductSection from './components/ProductSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import CareersSection from './components/CareersSection';
import AchievementsSection from './components/AchievementsSection';
import WhitePaperSection from './components/WhitePaperSection';
import PortfolioSection from './components/PortfolioSection';
import IndustriesSection from './components/IndustriesSection';
import CookieConsent from "./components/CookieConsent";
import CookiePolicy from '@/public/Pages/CookiePolicy';
import TermsOfEngagement from '@/public/Pages/TermsOfEngagement';
import TermsAndConditions from '@/public/Pages/TermsAndConditions';
import PrivacyPrinciples from '@/public/Pages/PrivacyPrinciples';
import ProfessionalDisclaimer from '@/public/Pages/ProfessionalDisclaimer';

// Lazy load AI Assistant to reduce initial bundle size
const AIAssistant = React.lazy(() => import('./components/AIAssistant'));

type ThemeMode = 'light' | 'dark';
const VALID_VIEWS = new Set(['home', 'product', 'about', 'services', 'industries', 'portfolio', 'blog', 'careers', 'achievements', 'faq', 'whitepaper', 'contact', 'cookie-policy', 'terms-of-engagement','terms-and-conditions', 'privacy-principles', 'professional-disclaimer']);

const getViewFromHash = () => {
  if (typeof window === 'undefined') return 'home';
  const hashView = window.location.hash.replace(/^#/, '');
  const [view] = hashView.split('/');
  return VALID_VIEWS.has(view) ? view : 'home';
};

const getIndustrySlugFromHash = () => {
  if (typeof window === 'undefined') return null;
  const hashView = window.location.hash.replace(/^#/, '');
  const [view, slug] = hashView.split('/');
  return view === 'industries' && slug ? slug : null;
};

const getProductSlugFromHash = () => {
  if (typeof window === 'undefined') return null;
  const hashView = window.location.hash.replace(/^#/, '');
  const [view, slug] = hashView.split('/');
  return view === 'product' && slug ? slug : null;
};

export default function App() {
  const [currentView, setCurrentView] = useState<string>(getViewFromHash);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    const saved = window.localStorage.getItem('mavionix-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Share presets parameters when routing from other pages
  const [bookingPreset, setBookingPreset] = useState<{
    mainService: string;
    subService: string;
    preferredDate: string;
    budget: string;
    notes?: string;
  } | null>(null);
  const [industrySlug, setIndustrySlug] = useState<string | null>(null);
  const [productSlug, setProductSlug] = useState<string | null>(getProductSlugFromHash);
  const [serviceCategory, setServiceCategory] = useState<string | null>(null);

  // Sync theme class to document document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem('mavionix-theme', theme);
  }, [theme]);

  useEffect(() => {
    const syncViewFromHash = () => {
      setCurrentView(getViewFromHash());
      setIndustrySlug(getIndustrySlugFromHash());
      setProductSlug(getProductSlugFromHash());
    };

    window.addEventListener('hashchange', syncViewFromHash);
    window.addEventListener('popstate', syncViewFromHash);

    return () => {
      window.removeEventListener('hashchange', syncViewFromHash);
      window.removeEventListener('popstate', syncViewFromHash);
    };
  }, []);
  const handleViewChange = (view: string, slug?: string) => {
    const nextView = VALID_VIEWS.has(view) ? view : 'home';
    setCurrentView(nextView);
    setIndustrySlug(nextView === 'industries' ? (slug || null) : null);
    setServiceCategory(nextView === 'services' ? (slug || null) : null);
    setProductSlug(nextView === 'product' ? (slug || null) : null);

    const nextHash = slug && (nextView === 'industries' || nextView === 'product') ? `#${nextView}/${slug}` : `#${nextView}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
  };


  // changes3565
  const handleBookingSubmit = (data: { mainService: string; subService: string; preferredDate: string; budget: string; notes?: string }) => {
    setBookingPreset(data);
    handleViewChange('contact');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentView, industrySlug, productSlug]);

  const handlePreSelectSubService = (subName: string, mainName: string, customBudget?: string, notes?: string) => {
    setBookingPreset({
      mainService: mainName,
      subService: subName,
      preferredDate: '',
      budget: customBudget || '',
      notes: notes || ''
    });
  };

  // View routing switcher
  const renderActiveSection = () => {
    switch (currentView) {
      case 'product':
        return <ProductSection onViewChange={handleViewChange} activeSlug={productSlug} />;
      case 'about':
        return <AboutSection onViewChange={handleViewChange} />;
      case 'services':
        return (
          <ServicesSection
            theme={theme}
            onViewChange={handleViewChange}
            onPreSelectSubService={handlePreSelectSubService}
            initialCategoryLabel={serviceCategory}
          />
        );
      case 'industries':
        return <IndustriesSection onViewChange={handleViewChange} activeSlug={industrySlug} />;
      case 'faq':
        return <FAQSection />;
      case 'whitepaper':
        return <WhitePaperSection onViewChange={handleViewChange} />;
      case 'blog':
        return <BlogSection onViewChange={handleViewChange} />;
      case 'portfolio':
        return <PortfolioSection onViewChange={handleViewChange} />;   //changes3565
      case 'careers':
        return <CareersSection theme={theme} />;
      case 'achievements':
        return <AchievementsSection onViewChange={handleViewChange} />;
      case 'contact':
        return (
          <ContactSection
            bookingPreset={bookingPreset}
            onClearPreset={() => setBookingPreset(null)}
          />
        );
      case 'cookie-policy':
        return <CookiePolicy onViewChange={handleViewChange} />;
      case 'terms-of-engagement':
        return <TermsOfEngagement onViewChange={handleViewChange} />;
        case 'terms-and-conditions':
        return <TermsAndConditions onViewChange={handleViewChange} />;
      case 'privacy-principles':
        return <PrivacyPrinciples onViewChange={handleViewChange} />;
      case 'professional-disclaimer':
        return <ProfessionalDisclaimer onViewChange={handleViewChange} />;
      case 'home':
      default:
        return (
          <HomeSection
            theme={theme}
            onViewChange={handleViewChange}
            onBookingSubmit={handleBookingSubmit}
          />
        );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 flex flex-col justify-between">
        {/* Scrollable grid top-anchor */}
        <span className="sr-only">Main Application Root Shell</span>

        <Navbar
          currentView={currentView}
          theme={theme}
          onThemeToggle={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          onViewChange={handleViewChange}
        />

        {/* Main active layout */}
        <main id="main-content" className="flex-grow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView === 'product' ? `product-${productSlug || 'overview'}` : currentView}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onViewChange={handleViewChange} />
        <Suspense fallback={null}>
          <AIAssistant />
        </Suspense>
      </div>
      <CookieConsent onViewChange={handleViewChange} />

    </>
  );
}
