import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
}

export const SUPPORTED_CURRENCIES: Currency[] = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee (INR)', flag: '🇮🇳' },
  { code: 'USD', symbol: '$', name: 'US Dollar (USD)', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro (EUR)', flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', name: 'British Pound (GBP)', flag: '🇬🇧' },
  { code: 'AED', symbol: 'AED ', name: 'UAE Dirham (AED)', flag: '🇦🇪' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar (AUD)', flag: '🇦🇺' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar (CAD)', flag: '🇨🇦' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar (SGD)', flag: '🇸🇬' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen (JPY)', flag: '🇯🇵' },
];

// Reliable default conversion rates (relative to 1 INR) in case API is unavailable
const fallbackRates: Record<string, number> = {
  INR: 1.0,
  USD: 0.01205,
  EUR: 0.0111,
  GBP: 0.0095,
  AED: 0.0441,
  AUD: 0.0182,
  CAD: 0.0164,
  SGD: 0.0162,
  JPY: 1.89,
};

interface CurrencyContextType {
  selectedCurrency: Currency;
  rates: Record<string, number>;
  loading: boolean;
  setCurrency: (code: string) => void;
  convertAmount: (inrAmount: number) => number;
  formatAmount: (inrAmount: number, includeSymbol?: boolean) => string;
  translatePriceText: (text: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const detectUserCurrency = (): string => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      if (tz.includes('Kolkata') || tz.includes('India')) return 'INR';
      if (tz.includes('London') || tz.includes('Belfast')) return 'GBP';
      if (tz.includes('Europe') || tz.includes('Paris') || tz.includes('Berlin') || tz.includes('Rome') || tz.includes('Madrid') || tz.includes('Amsterdam') || tz.includes('Brussels')) return 'EUR';
      if (tz.includes('Australia') || tz.includes('Sydney') || tz.includes('Melbourne')) return 'AUD';
      if (tz.includes('Toronto') || tz.includes('Vancouver')) return 'CAD';
      if (tz.includes('Dubai') || tz.includes('Abu_Dhabi')) return 'AED';
      if (tz.includes('Singapore')) return 'SGD';
      if (tz.includes('Tokyo')) return 'JPY';
      if (tz.includes('America') || tz.includes('US/')) return 'USD';
    }
    
    const locale = navigator.language?.toLowerCase() || '';
    if (locale.endsWith('-in') || locale.startsWith('hi')) return 'INR';
    if (locale.endsWith('-gb')) return 'GBP';
    if (locale.endsWith('-ae')) return 'AED';
    if (locale.endsWith('-au')) return 'AUD';
    if (locale.endsWith('-ca')) return 'CAD';
    if (locale.endsWith('-sg')) return 'SGD';
    if (locale.endsWith('-jp')) return 'JPY';
    if (locale.startsWith('fr') || locale.startsWith('de') || locale.startsWith('it') || locale.startsWith('es') || locale.startsWith('nl')) return 'EUR';
  } catch (e) {
    console.error("Failed to auto-detect currency:", e);
  }
  return 'INR'; // Standard default fallback
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('mavionix-currency');
    if (saved) {
      const found = SUPPORTED_CURRENCIES.find(c => c.code === saved);
      if (found) return found;
    }
    const detectedCode = detectUserCurrency();
    const foundDetected = SUPPORTED_CURRENCIES.find(c => c.code === detectedCode);
    return foundDetected || SUPPORTED_CURRENCIES[0]; // fallback to INR
  });

  const [rates, setRates] = useState<Record<string, number>>(fallbackRates);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch live exchange rates from standard free API relative to INR
  useEffect(() => {
    let active = true;
    const fetchRates = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/INR');
        if (!response.ok) throw new Error('Network response not ok');
        const data = await response.json();
        
        if (active && data && data.rates) {
          const newRates: Record<string, number> = { INR: 1.0 };
          SUPPORTED_CURRENCIES.forEach(curr => {
            if (curr.code !== 'INR') {
              if (data.rates[curr.code]) {
                newRates[curr.code] = data.rates[curr.code];
              } else {
                newRates[curr.code] = fallbackRates[curr.code];
              }
            }
          });
          setRates(newRates);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Could not fetch external live exchange rates, proceeding with high-accuracy fallbacks.', err);
        if (active) {
          setRates(fallbackRates);
          setLoading(false);
        }
      }
    };

    fetchRates();
    return () => {
      active = false;
    };
  }, []);

  const setCurrency = (code: string) => {
    const found = SUPPORTED_CURRENCIES.find(c => c.code === code);
    if (found) {
      setSelectedCurrency(found);
      localStorage.setItem('mavionix-currency', code);
    }
  };

  const convertAmount = (inrAmount: number): number => {
    const rate = rates[selectedCurrency.code] || fallbackRates[selectedCurrency.code] || 1;
    return inrAmount * rate;
  };

  const formatAmount = (inrAmount: number, includeSymbol: boolean = true): string => {
    const converted = convertAmount(inrAmount);
    
    const formattedNum = selectedCurrency.code === 'INR'
      ? Math.round(converted).toLocaleString('en-IN')
      : converted < 2
        ? converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 })
        : converted < 100
          ? converted.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })
          : Math.round(converted).toLocaleString();
          
    return includeSymbol ? `${selectedCurrency.symbol}${formattedNum}` : formattedNum;
  };

  const translatePriceText = (text: string): string => {
    if (!text) return '';
    if (!text.includes('INR')) return text;

    const rate = rates[selectedCurrency.code] || fallbackRates[selectedCurrency.code] || 1;

    // Regexp to match INR followed by integers with commas, decimals and suffixes
    // Capture numbers like INR 7,999, INR 0.80, INR 75k, etc.
    return text.replaceAll(/INR\s*(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?)\s*(k|L)?\b/gi, (match, p1, p2) => {
      let rawNum = parseFloat(p1.replace(/,/g, ''));
      if (isNaN(rawNum)) return match;

      let inrVal = rawNum;
      let hasSuffix = false;
      let suffix = p2 || '';

      if (suffix.toLowerCase() === 'k') {
        inrVal = rawNum * 1000;
        hasSuffix = true;
      } else if (suffix.toLowerCase() === 'l') {
        inrVal = rawNum * 100000;
        hasSuffix = true;
      }

      const converted = inrVal * rate;

      if (selectedCurrency.code === 'INR') {
        let inrStr = '';
        if (hasSuffix) {
          inrStr = inrVal.toLocaleString('en-IN');
        } else {
          inrStr = Math.round(inrVal).toLocaleString('en-IN');
        }
        return `${selectedCurrency.symbol}${inrStr}`;
      }

      // Format custom non-INR amount
      let finalStr = '';
      if (converted < 2) {
        finalStr = converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 });
      } else if (converted < 100) {
        finalStr = converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } else {
        finalStr = Math.round(converted).toLocaleString();
      }

      return `${selectedCurrency.symbol}${finalStr}`;
    });
  };

  return (
    <CurrencyContext.Provider value={{
      selectedCurrency,
      rates,
      loading,
      setCurrency,
      convertAmount,
      formatAmount,
      translatePriceText,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
