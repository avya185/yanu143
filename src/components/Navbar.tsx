import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { useCurrency, SUPPORTED_CURRENCIES } from '../context/CurrencyContext';
import { SERVICES } from '../data';
<<<<<<< HEAD
import { PRODUCT_SUITES } from '../data/productSuites';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

interface NavbarProps {
  currentView: string;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onViewChange: (view: string, slug?: string) => void;
}

export default function Navbar({ currentView, theme, onThemeToggle, onViewChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
  const [productOpen, setProductOpen] = useState(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
<<<<<<< HEAD
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  const [mobileCurrencyOpen, setMobileCurrencyOpen] = useState(false);
  const companyMenuRef = useRef<HTMLLIElement>(null);
  const resourcesMenuRef = useRef<HTMLLIElement>(null);
  const industriesMenuRef = useRef<HTMLLIElement>(null);
  const servicesMenuRef = useRef<HTMLLIElement>(null);
<<<<<<< HEAD
  const productMenuRef = useRef<HTMLLIElement>(null);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  const currencyMenuRef = useRef<HTMLDivElement>(null);
  const companyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
const resourcesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
const industriesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
<<<<<<< HEAD
const productCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
const currencyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

const openCompanyMenu = () => {
  if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current);
  setCompanyOpen(true);
};
const closeCompanyMenuDelayed = () => {
  companyCloseTimer.current = setTimeout(() => setCompanyOpen(false), 50);
};
const openResourcesMenu = () => {
  if (resourcesCloseTimer.current) clearTimeout(resourcesCloseTimer.current);
  setResourcesOpen(true);
};
const closeResourcesMenuDelayed = () => {
  resourcesCloseTimer.current = setTimeout(() => setResourcesOpen(false), 50);
};
const openIndustriesMenu = () => {
  if (industriesCloseTimer.current) clearTimeout(industriesCloseTimer.current);
  setIndustriesOpen(true);
};
const closeIndustriesMenuDelayed = () => {
  industriesCloseTimer.current = setTimeout(() => setIndustriesOpen(false), 50);
};
const openServicesMenu = () => {
  if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
  setServicesOpen(true);
};
const closeServicesMenuDelayed = () => {
  servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 50);
};
<<<<<<< HEAD
const openProductMenu = () => {
  if (productCloseTimer.current) clearTimeout(productCloseTimer.current);
  setProductOpen(true);
};
const closeProductMenuDelayed = () => {
  productCloseTimer.current = setTimeout(() => setProductOpen(false), 50);
};
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
const openCurrencyMenu = () => {
  if (currencyCloseTimer.current) clearTimeout(currencyCloseTimer.current);
  setCurrencyOpen(true);
};
const closeCurrencyMenuDelayed = () => {
  currencyCloseTimer.current = setTimeout(() => setCurrencyOpen(false), 100);
};

  const { selectedCurrency, setCurrency } = useCurrency();



  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileCompanyOpen(false);
      setMobileResourcesOpen(false);
      setMobileIndustriesOpen(false);
      setMobileServicesOpen(false);
<<<<<<< HEAD
      setMobileProductOpen(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
      setMobileCurrencyOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (companyMenuRef.current && !companyMenuRef.current.contains(target)) {
        setCompanyOpen(false);
      }
      if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(target)) {
        setResourcesOpen(false);
      }
      if (industriesMenuRef.current && !industriesMenuRef.current.contains(target)) {
        setIndustriesOpen(false);
      }
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setServicesOpen(false);
      }
<<<<<<< HEAD
      if (productMenuRef.current && !productMenuRef.current.contains(target)) {
        setProductOpen(false);
      }
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
      if (currencyMenuRef.current && !currencyMenuRef.current.contains(target)) {
        setCurrencyOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCompanyOpen(false);
        setResourcesOpen(false);
        setIndustriesOpen(false);
        setServicesOpen(false);
<<<<<<< HEAD
        setProductOpen(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
        setCurrencyOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const brandTextClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const brandDotClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const navItemClass = (active: boolean) =>
    `group relative flex items-center rounded-full px-3 py-2 text-[13px] font-semibold tracking-[0.03em] transition-all duration-200 ease-out 2xl:px-4 ${
      active
        ? 'bg-purple-50 text-purple-700 shadow-sm dark:bg-purple-500/12 dark:text-purple-300'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white'
    }`;
  const mobileNavItemClass = (active: boolean) =>
    `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold tracking-[0.02em] transition-all duration-200 ${
      active
        ? 'bg-purple-50 text-purple-700 shadow-sm dark:bg-purple-500/12 dark:text-purple-300'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white'
    }`;
const ctaButtonClass =
  'inline-flex h-9 shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-transparent px-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 2xl:px-5';
const ctaButtonStyle = {
  backgroundImage: 'linear-gradient(135deg, #C800FF 0%, #9333EA 55%, #6D28D9 100%)',
  boxShadow: '0 8px 20px -4px rgba(200, 0, 255, 0.45)',
} as const;
  const iconButtonClass =
    'flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white';
  const currencyButtonClass =
    'flex h-9 items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2.5 text-[12px] font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white';

  const companyLinks = [
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const resourceLinks = [
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' },
    { id: 'whitepaper', label: 'White Paper' },
  ];

  const serviceLinks = SERVICES.map((cat) => ({ id: cat.label, label: cat.label }));

<<<<<<< HEAD
  const productLinks = PRODUCT_SUITES.map((suite) => ({ slug: suite.slug as string | null, label: suite.shortName + ' Suite' }));

=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  const industryLinks = [
    { id: 'hospitality-tourism', label: 'Hospitality & Tourism' },
    { id: 'e-commerce', label: 'E-Commerce' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'startup-saas', label: 'Startup & SaaS' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'manufacturing-industrial', label: 'Manufacturing & Industrial' },
    { id: 'logistics-supply-chain', label: 'Logistics & Supply Chain' },
    { id: 'professional-services', label: 'Professional Services' },
    { id: 'retail-consumer', label: 'Retail & Consumer' },
    { id: 'ai-automation', label: 'AI & Automation' },
  ];

  const handleLinkClick = (viewId: string) => {
    onViewChange(viewId);
    setMobileMenuOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
    setIndustriesOpen(false);
<<<<<<< HEAD
    setServicesOpen(false);
    setProductOpen(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
    setCurrencyOpen(false);
    setMobileCompanyOpen(false);
    setMobileResourcesOpen(false);
    setMobileIndustriesOpen(false);
<<<<<<< HEAD
    setMobileServicesOpen(false);
    setMobileProductOpen(false);
    setMobileCurrencyOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductLinkClick = (slug: string | null) => {
    onViewChange('product', slug || undefined);
    setMobileMenuOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
    setIndustriesOpen(false);
    setServicesOpen(false);
    setProductOpen(false);
    setCurrencyOpen(false);
    setMobileCompanyOpen(false);
    setMobileResourcesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileServicesOpen(false);
    setMobileProductOpen(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
    setMobileCurrencyOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIndustryLinkClick = (slug: string) => {
    onViewChange('industries', slug);
    setMobileMenuOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
    setIndustriesOpen(false);
    setServicesOpen(false);
    setCurrencyOpen(false);
    setMobileCompanyOpen(false);
    setMobileResourcesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileServicesOpen(false);
    setMobileCurrencyOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigating straight into a specific service subsection: mirrors handleIndustryLinkClick,
  // and lets ServicesSection scroll to + auto-open that exact category (see initialCategoryLabel).
  const handleServiceLinkClick = (categoryLabel: string) => {
    onViewChange('services', categoryLabel);
    setMobileMenuOpen(false);
    setCompanyOpen(false);
    setResourcesOpen(false);
    setIndustriesOpen(false);
    setServicesOpen(false);
    setCurrencyOpen(false);
    setMobileCompanyOpen(false);
    setMobileResourcesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileServicesOpen(false);
    setMobileCurrencyOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCompanyMenu = () => {
    setCompanyOpen((value) => !value);
    setResourcesOpen(false);
    setIndustriesOpen(false);
    setServicesOpen(false);
<<<<<<< HEAD
    setProductOpen(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  };

  const toggleResourcesMenu = () => {
    setResourcesOpen((value) => !value);
    setCompanyOpen(false);
    setIndustriesOpen(false);
    setServicesOpen(false);
<<<<<<< HEAD
    setProductOpen(false);
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  };

  const dropdownPanel = 'absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95';
  const industriesDropdownPanel = 'absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95';
  const servicesDropdownPanel = 'absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95';
  const dropdownPanelRight = 'absolute right-0 top-full mt-2 w-48 rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95';

  return (
    <nav
      id="main-nav"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/80 bg-white/95 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95'
          : 'border-transparent bg-white/80 py-4 backdrop-blur-md dark:bg-slate-950/80'
      }`}
      aria-label="Main Navigation"
    >
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-3 px-4 sm:h-14 sm:px-6 lg:px-8">
        <button
          onClick={() => handleLinkClick('home')}
          className="group flex min-w-0 shrink-0 items-center gap-2 rounded-full transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
          aria-label="MaVionix Home page"
        >
          <img
            src="/mavionix-logo.png"
            alt="MaVionix logo"
            className="h-8 w-8 shrink-0 object-contain object-center sm:h-9 sm:w-9"
          />
          <span className={`truncate text-lg font-black tracking-[0.02em] transition-colors duration-300 sm:text-xl ${brandTextClass}`}>
            MaVionix<span className={`${brandDotClass} font-extrabold`}></span>
          </span>
        </button>

        <div className="hidden lg:flex min-w-0 flex-1 items-center justify-end gap-1.5">
          <ul className="mr-2 flex min-w-0 items-center justify-end gap-1" role="menubar">
            <li role="none" className="shrink-0">
              <button onClick={() => handleLinkClick('home')} role="menuitem" className={navItemClass(currentView === 'home')} aria-current={currentView === 'home' ? 'page' : undefined}>
                Home
                {currentView === 'home' && <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500" />}
              </button>
            </li>
<<<<<<< HEAD
            <li role="none" ref={productMenuRef} className="relative shrink-0" onMouseEnter={openProductMenu} onMouseLeave={closeProductMenuDelayed}>
              <button
                onClick={() => handleLinkClick('product')}
                role="menuitem"
                className={navItemClass(currentView === 'product')}
                aria-haspopup="menu"
                aria-expanded={productOpen}
                aria-current={currentView === 'product' ? 'page' : undefined}
              >
                Product
                <ChevronDown size={14} className={`ml-1 inline-block transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`} />
                {currentView === 'product' && <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500" />}
              </button>
              <div className={`${servicesDropdownPanel} transition-all duration-200 ${productOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
                <div className="max-h-96 overflow-y-auto p-2 space-y-2">
                  {productLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleProductLinkClick(link.slug)}
                      className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            <li role="none" ref={servicesMenuRef} className="relative shrink-0" onMouseEnter={openServicesMenu} onMouseLeave={closeServicesMenuDelayed}>
              <button
                onClick={() => handleLinkClick('services')}
                role="menuitem"
                className={navItemClass(currentView === 'services')}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-current={currentView === 'services' ? 'page' : undefined}
              >
                Services
                <ChevronDown size={14} className={`ml-1 inline-block transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                {currentView === 'services' && <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500" />}
              </button>
              <div className={`${servicesDropdownPanel} transition-all duration-200 ${servicesOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
                <div className="max-h-96 overflow-y-auto p-2 space-y-2">
                  {serviceLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleServiceLinkClick(link.id)}
                      className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li role="none" ref={industriesMenuRef} className="relative shrink-0" onMouseEnter={openIndustriesMenu} onMouseLeave={closeIndustriesMenuDelayed}>
              <button
                onClick={() => handleLinkClick('industries')}
                role="menuitem"
                className={navItemClass(currentView === 'industries')}
                aria-haspopup="menu"
                aria-expanded={industriesOpen}
                aria-current={currentView === 'industries' ? 'page' : undefined}
              >
                Industries
                <ChevronDown size={14} className={`ml-1 inline-block transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                {currentView === 'industries' && <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500" />}
              </button>
              <div className={`${industriesDropdownPanel} transition-all duration-200 ${industriesOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
                <div className="max-h-96 overflow-y-auto p-2 space-y-2">
                  {industryLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleIndustryLinkClick(link.id)}
                      className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li role="none" className="shrink-0">
              <button onClick={() => handleLinkClick('portfolio')} role="menuitem" className={navItemClass(currentView === 'portfolio')} aria-current={currentView === 'portfolio' ? 'page' : undefined}>
                Portfolio
                {currentView === 'portfolio' && <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500" />}
              </button>
            </li>
               <li role="none" ref={companyMenuRef} className="relative shrink-0" onMouseEnter={openCompanyMenu} onMouseLeave={closeCompanyMenuDelayed}>
              <button
                onClick={toggleCompanyMenu}
                role="menuitem"
                className={navItemClass(currentView === 'about' || currentView === 'careers')}
                aria-haspopup="menu"
                aria-expanded={companyOpen}
              >
                Company
                <ChevronDown size={14} className={`ml-1 inline-block transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`${dropdownPanel} transition-all duration-200 ${companyOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
                {/* changes3565 */}
                <div className="p-2 space-y-2">
                  {companyLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        currentView === link.id
                          ? 'bg-purple-50 text-purple-700 shadow-sm dark:bg-purple-500/12 dark:text-purple-300'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>

           <li role="none" ref={resourcesMenuRef} className="relative shrink-0" onMouseEnter={openResourcesMenu} onMouseLeave={closeResourcesMenuDelayed}>
              <button
                onClick={toggleResourcesMenu}
                role="menuitem"
                className={navItemClass(currentView === 'blog' || currentView === 'faq')}
                aria-haspopup="menu"
                aria-expanded={resourcesOpen}
              >
                Resources
                <ChevronDown size={14} className={`ml-1 inline-block transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`${dropdownPanel} transition-all duration-200 ${resourcesOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}>
                <div className="p-2 space-y-2">
                  {resourceLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        currentView === link.id
                          ? 'bg-purple-50 text-purple-700 shadow-sm dark:bg-purple-500/12 dark:text-purple-300'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <div
            ref={currencyMenuRef}
            className="relative shrink-0"
            onMouseEnter={openCurrencyMenu}
            onMouseLeave={closeCurrencyMenuDelayed}
          >
            <button
              onClick={() => setCurrencyOpen((value) => !value)}
              className={currencyButtonClass}
              aria-haspopup="menu"
              aria-expanded={currencyOpen}
              aria-label={`Currency: ${selectedCurrency.name}. Click to change.`}
            >
              <span aria-hidden="true">{selectedCurrency.flag}</span>
              <span>{selectedCurrency.code}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${currencyOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              role="menu"
              className={`${dropdownPanelRight} max-h-72 overflow-y-auto transition-all duration-200 ${
                currencyOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
              }`}
            >
              <div className="p-2 space-y-1">
                {SUPPORTED_CURRENCIES.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setCurrency(currency.code);
                      setCurrencyOpen(false);
                    }}
                    role="menuitem"
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold transition-colors ${
                      selectedCurrency.code === currency.code
                        ? 'bg-purple-50 text-purple-700 shadow-sm dark:bg-purple-500/12 dark:text-purple-300'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span aria-hidden="true">{currency.flag}</span>
                      {currency.code}
                    </span>
                    <span className="text-xs font-normal text-slate-400 dark:text-slate-500">{currency.symbol.trim()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onThemeToggle}
            className={iconButtonClass}
            id="theme_button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

         <button
  onClick={() => handleLinkClick('contact')}
  style={ctaButtonStyle}
  className={`bg-slate-950 dark:bg-[#6d28d9] ${ctaButtonClass} hover:shadow-[0_10px_26px_-4px_rgba(200,0,255,0.55)] focus-visible:ring-[#C800FF]/60 ${
    currentView === 'contact' ? 'ring-2 ring-[#C800FF]/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-950' : ''
  }`}
  aria-label="Contact MaVionix"
>
  Contact
</button>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none "
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed right-0 top-[60px] z-56 h-[calc(100dvh-60px)] max-h-[calc(100dvh-60px)] w-full max-w-[320px] overflow-hidden border-l border-slate-200/80 bg-white/95 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-transform duration-300 ease-in-out dark:border-slate-800/80 dark:bg-slate-950/95 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain p-4 [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch] sm:p-5">
          <ul className="space-y-2 pb-5" role="menu">
            <li role="none">
              <button onClick={() => handleLinkClick('home')} role="menuitem" className={mobileNavItemClass(currentView === 'home')}>
                Home
              </button>
            </li>
            <li role="none">
              <div className="flex items-center gap-1">
                <button
<<<<<<< HEAD
                  onClick={() => handleLinkClick('product')}
                  role="menuitem"
                  className={`${mobileNavItemClass(currentView === 'product')} flex-1`}
                >
                  Product
                </button>
                <button
                  onClick={() => setMobileProductOpen((value) => !value)}
                  aria-expanded={mobileProductOpen}
                  aria-controls="mobile-product"
                  aria-label="Toggle product subsections"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
                >
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileProductOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div id="mobile-product" className={`overflow-hidden transition-all duration-300 ${mobileProductOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4 pr-2 max-h-72 overflow-y-auto">
                  {productLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleProductLinkClick(link.slug)}
                      className="w-full text-left rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li role="none">
              <div className="flex items-center gap-1">
                <button
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
                  onClick={() => handleLinkClick('services')}
                  role="menuitem"
                  className={`${mobileNavItemClass(currentView === 'services')} flex-1`}
                >
                  Services
                </button>
                <button
                  onClick={() => setMobileServicesOpen((value) => !value)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services"
                  aria-label="Toggle services subsections"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
                >
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div id="mobile-services" className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4 pr-2 max-h-72 overflow-y-auto">
                  {serviceLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleServiceLinkClick(link.id)}
                      className="w-full text-left rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li role="none">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleLinkClick('industries')}
                  role="menuitem"
                  className={`${mobileNavItemClass(currentView === 'industries')} flex-1`}
                >
                  Industries
                </button>
                <button
                  onClick={() => setMobileIndustriesOpen((value) => !value)}
                  aria-expanded={mobileIndustriesOpen}
                  aria-controls="mobile-industries"
                  aria-label="Toggle industries subsections"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
                >
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div id="mobile-industries" className={`overflow-hidden transition-all duration-300 ${mobileIndustriesOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4 pr-2 max-h-72 overflow-y-auto">
                  {industryLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleIndustryLinkClick(link.id)}
                      className="w-full text-left rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>
            <li role="none">
              <button onClick={() => handleLinkClick('portfolio')} role="menuitem" className={mobileNavItemClass(currentView === 'portfolio')}>
                Portfolio
              </button>
            </li>

            <li role="none" className="mt-2 border-t border-slate-100 pt-2 dark:border-slate-900">
              <button
                onClick={() => setMobileCompanyOpen((value) => !value)}
                role="menuitem"
                aria-expanded={mobileCompanyOpen}
                aria-controls="mobile-company"
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold tracking-[0.02em] text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
              >
                <span>Company</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              <div id="mobile-company" className={`overflow-hidden transition-all duration-300 ${mobileCompanyOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4 pr-2">
                  {companyLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                        currentView === link.id
                          ? 'bg-purple-50 text-purple-700 dark:bg-purple-500/12 dark:text-purple-300'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>

            <li role="none">
              <button
                onClick={() => setMobileResourcesOpen((value) => !value)}
                role="menuitem"
                aria-expanded={mobileResourcesOpen}
                aria-controls="mobile-resources"
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold tracking-[0.02em] text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
              >
                <span>Resources</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div id="mobile-resources" className={`overflow-hidden transition-all duration-300 ${mobileResourcesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4 pr-2">
                  {resourceLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                        currentView === link.id
                          ? 'bg-purple-50 text-purple-700 dark:bg-purple-500/12 dark:text-purple-300'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </li>

            <li role="none" className="mt-2 border-t border-slate-100 pt-2 dark:border-slate-900">
              <button
                onClick={() => setMobileCurrencyOpen((value) => !value)}
                role="menuitem"
                aria-expanded={mobileCurrencyOpen}
                aria-controls="mobile-currency"
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold tracking-[0.02em] text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/80 dark:hover:text-white"
              >
                <span className="flex items-center gap-2">
                  Currency
                  <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                    {selectedCurrency.flag} {selectedCurrency.code}
                  </span>
                </span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>
              <div id="mobile-currency" className={`overflow-hidden transition-all duration-300 ${mobileCurrencyOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-1 pb-2 pl-4 pr-2 max-h-56 overflow-y-auto">
                  {SUPPORTED_CURRENCIES.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => setCurrency(currency.code)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all ${
                        selectedCurrency.code === currency.code
                          ? 'bg-purple-50 text-purple-700 dark:bg-purple-500/12 dark:text-purple-300'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900/40 dark:hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true">{currency.flag}</span>
                        {currency.code}
                      </span>
                      <span className="text-xs font-normal text-slate-400 dark:text-slate-500">{currency.symbol.trim()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </li>

           <li role="none" className="pt-4 border-t border-slate-100 dark:border-slate-900">
  <button
    onClick={() => handleLinkClick('contact')}
    role="menuitem"
    style={ctaButtonStyle}
    className={`bg-slate-950 dark:bg-[#6d28d9] ${ctaButtonClass} h-12 w-full text-[14px] hover:shadow-[0_10px_26px_-4px_rgba(200,0,255,0.55)] focus-visible:ring-[#C800FF]/60 ${
      currentView === 'contact' ? 'ring-2 ring-[#C800FF]/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-950' : ''
    }`}
  >
    Contact
  </button>
</li>

            <li role="none" className="pt-4 border-t border-slate-100 dark:border-slate-900">
              <button
                onClick={onThemeToggle}
                role="menuitem"
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-left text-[15px] font-semibold tracking-[0.02em] text-slate-700 transition-all duration-200 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-950"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <span className="text-sm font-bold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li>
          </ul>

          <div className="mt-auto display:flex justify-center text-center text-xs text-slate-400 dark:text-slate-600 border-t border-slate-100 dark:border-slate-900 pt-4 pb-3 ">
<<<<<<< HEAD
            MaVionix Pvt. Ltd.
            <br />
            A-1/86, Sector-17, <br></br> Rohini, Delhi - 110089
=======
            MaVionix Agency Co.
            <br />
            Rohini, Delhi - 110085
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          </div>
        </div>
      </div>
    </nav>
  );
}
